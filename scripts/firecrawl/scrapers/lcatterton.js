/**
 * L Catterton Website Scraper
 * 
 * Scrapes the L Catterton website to extract team member information
 * for building the buying committee map.
 */

import firecrawl, { DEFAULT_CRAWL_OPTIONS, DEFAULT_SCRAPE_OPTIONS, RATE_LIMIT } from '../config.js';
import { 
    extractTeamMembers, 
    structureMemberData, 
    cleanText,
    extractContactInfo 
} from '../utils/parser.js';
import { 
    saveCommitteeData, 
    loadCommitteeData, 
    mergeCommitteeData,
    saveRawResults,
    createBackup 
} from '../utils/storage.js';

// L Catterton specific configuration
const LC_CONFIG = {
    baseUrl: 'https://www.lcatterton.com',
    teamPages: [
        '/team.html',
        '/team',
        '/our-team',
        '/about/team',
        '/leadership',
        '/about/leadership'
    ],
    companyInfo: {
        company: 'L Catterton',
        industry: 'Private Equity',
        aum: '$35B+',
        focus: 'Consumer-focused investments across growth, buyout, and real estate',
        headquarters: 'Greenwich, CT',
        website: 'https://www.lcatterton.com',
        linkedIn: 'https://www.linkedin.com/company/l-catterton'
    }
};

/**
 * Delay execution
 * @param {number} ms - Milliseconds to wait
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Scrape a single URL
 * @param {string} url - URL to scrape
 * @returns {Object|null} - Scrape result or null on error
 */
async function scrapeUrl(url) {
    console.log(`🔍 Scraping: ${url}`);
    
    try {
        const result = await firecrawl.scrapeUrl(url, DEFAULT_SCRAPE_OPTIONS);
        
        if (result.success) {
            console.log(`   ✓ Success - ${result.markdown?.length || 0} chars`);
            return result;
        } else {
            console.log(`   ✗ Failed: ${result.error || 'Unknown error'}`);
            return null;
        }
    } catch (err) {
        console.log(`   ✗ Error: ${err.message}`);
        return null;
    }
}

/**
 * Crawl the L Catterton website
 * @param {Object} options - Crawl options
 * @returns {Object} - Crawl results
 */
async function crawlWebsite(options = {}) {
    console.log('\n🌐 Starting website crawl...');
    console.log(`   Base URL: ${LC_CONFIG.baseUrl}`);
    
    const crawlOptions = {
        ...DEFAULT_CRAWL_OPTIONS,
        ...options,
        allowedPaths: LC_CONFIG.teamPages.map(p => p + '*'),
        limit: options.limit || 20
    };
    
    try {
        const result = await firecrawl.crawlUrl(LC_CONFIG.baseUrl, crawlOptions);
        
        if (result.success) {
            console.log(`   ✓ Crawled ${result.data?.length || 0} pages`);
            return result;
        } else {
            console.log(`   ✗ Crawl failed: ${result.error || 'Unknown error'}`);
            return { success: false, data: [], error: result.error };
        }
    } catch (err) {
        console.log(`   ✗ Crawl error: ${err.message}`);
        return { success: false, data: [], error: err.message };
    }
}

/**
 * Try scraping individual team pages
 * @returns {Array} - Array of successful scrape results
 */
async function scrapeTeamPages() {
    console.log('\n📄 Scraping team pages individually...');
    
    const results = [];
    
    for (const pagePath of LC_CONFIG.teamPages) {
        const url = `${LC_CONFIG.baseUrl}${pagePath}`;
        
        const result = await scrapeUrl(url);
        if (result) {
            results.push({
                url,
                ...result
            });
        }
        
        // Rate limiting
        await delay(RATE_LIMIT.delayBetweenRequests);
    }
    
    console.log(`   📊 Successfully scraped ${results.length} pages`);
    return results;
}

/**
 * Extract members from scrape results
 * @param {Array} results - Scrape results
 * @returns {Array} - Extracted team members
 */
function processResults(results) {
    console.log('\n🔬 Processing scraped content...');
    
    const allMembers = [];
    
    for (const result of results) {
        if (!result.markdown) continue;
        
        // Extract team members from markdown
        const members = extractTeamMembers(result.markdown, result.url || result.metadata?.sourceURL);
        
        // Also try to extract contact info
        for (const member of members) {
            const contactInfo = extractContactInfo(result.markdown);
            Object.assign(member, contactInfo);
        }
        
        allMembers.push(...members);
    }
    
    console.log(`   📊 Extracted ${allMembers.length} raw member records`);
    
    // Deduplicate by name
    const uniqueNames = new Map();
    for (const member of allMembers) {
        const nameLower = member.name.toLowerCase();
        if (!uniqueNames.has(nameLower)) {
            uniqueNames.set(nameLower, member);
        }
    }
    
    const uniqueMembers = Array.from(uniqueNames.values());
    console.log(`   📊 Deduplicated to ${uniqueMembers.length} unique members`);
    
    // Structure the data
    const structured = uniqueMembers.map(m => structureMemberData(m, 'L Catterton'));
    
    return structured;
}

/**
 * Main scraper function
 * @param {Object} options - Scraper options
 */
export async function scrapeLCatterton(options = {}) {
    console.log('═'.repeat(60));
    console.log('🏢 L CATTERTON WEBSITE SCRAPER');
    console.log('═'.repeat(60));
    console.log(`   Started: ${new Date().toISOString()}`);
    
    const {
        crawl = true,
        scrapeIndividual = true,
        saveRaw = true,
        merge = true,
        backup = true
    } = options;
    
    let allResults = [];
    
    // Try crawling first
    if (crawl) {
        const crawlResult = await crawlWebsite(options);
        if (crawlResult.data?.length > 0) {
            allResults.push(...crawlResult.data);
        }
    }
    
    // Also try individual pages
    if (scrapeIndividual) {
        const pageResults = await scrapeTeamPages();
        allResults.push(...pageResults);
    }
    
    // Save raw results if requested
    if (saveRaw && allResults.length > 0) {
        await saveRawResults(allResults, 'lcatterton-raw');
    }
    
    // Process and extract members
    const members = processResults(allResults);
    
    // Handle empty results
    if (members.length === 0) {
        console.log('\n⚠️  No team members extracted from scrape.');
        console.log('   This could be due to:');
        console.log('   - Website structure changed');
        console.log('   - Pages require JavaScript rendering');
        console.log('   - Rate limiting or blocking');
        console.log('   - Invalid API key');
        console.log('\n   Using fallback sample data...');
        
        // Return with existing data
        const existing = await loadCommitteeData();
        return existing;
    }
    
    // Backup existing data
    if (backup) {
        await createBackup();
    }
    
    // Merge or replace
    let finalData;
    if (merge) {
        const existing = await loadCommitteeData();
        finalData = mergeCommitteeData(existing || LC_CONFIG.companyInfo, members);
    } else {
        finalData = {
            ...LC_CONFIG.companyInfo,
            committee: members,
            lastUpdated: new Date().toISOString().split('T')[0],
            dealStage: 'Discovery',
            nextSteps: [
                'Schedule intro call with Technology team',
                'Prepare custom demo with consumer deal analysis',
                'Research recent portfolio company investments'
            ]
        };
    }
    
    // Save final data
    await saveCommitteeData(finalData);
    
    console.log('\n' + '═'.repeat(60));
    console.log('✅ SCRAPE COMPLETE');
    console.log('═'.repeat(60));
    console.log(`   Total members: ${finalData.committee?.length || 0}`);
    console.log(`   Finished: ${new Date().toISOString()}`);
    
    return finalData;
}

// Export for use as module
export default scrapeLCatterton;
