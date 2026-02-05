#!/usr/bin/env node

/**
 * Firecrawl Scraper CLI
 * 
 * Command-line interface for running prospect data scrapers.
 * 
 * Usage:
 *   node scripts/firecrawl/index.js [command] [options]
 * 
 * Commands:
 *   scrape    - Scrape L Catterton website for team data
 *   enrich    - Enrich existing data with LinkedIn info
 *   templates - Generate research templates for manual data collection
 *   status    - Show current data status
 *   help      - Show this help message
 * 
 * Examples:
 *   npm run scrape:lcatterton
 *   npm run scrape:enrich
 *   node scripts/firecrawl/index.js scrape --no-merge
 */

import { scrapeLCatterton } from './scrapers/lcatterton.js';
import { enrichWithLinkedIn, generateResearchTemplates } from './scrapers/linkedin-enrichment.js';
import { loadCommitteeData } from './utils/storage.js';

// Parse command line arguments
const args = process.argv.slice(2);
const command = args[0] || 'help';
const flags = args.slice(1);

// Parse flags
function hasFlag(flag) {
    return flags.includes(flag) || flags.includes(`--${flag}`);
}

function getFlagValue(flag) {
    const index = flags.findIndex(f => f === flag || f === `--${flag}`);
    if (index !== -1 && flags[index + 1]) {
        return flags[index + 1];
    }
    return null;
}

// Print banner
function printBanner() {
    console.log(`
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   🔥 FIRECRAWL PROSPECT SCRAPER                               ║
║   ─────────────────────────────────────────────────────────   ║
║   Scrape & enrich buying committee data for Hebbia sales      ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
`);
}

// Help command
function showHelp() {
    printBanner();
    console.log(`
USAGE:
  node scripts/firecrawl/index.js <command> [options]
  npm run scrape:<command>

COMMANDS:
  scrape      Scrape L Catterton website for team member data
  enrich      Enrich existing data with LinkedIn information
  templates   Generate research templates for manual data collection
  status      Show current committee data status
  help        Show this help message

OPTIONS:
  --no-merge      Replace existing data instead of merging
  --no-backup     Skip creating backup before changes
  --no-raw        Don't save raw scrape results
  --crawl-only    Only crawl, don't scrape individual pages
  --scrape-only   Only scrape individual pages, don't crawl
  --limit <n>     Limit number of pages to crawl (default: 20)

ENVIRONMENT:
  FIRECRAWL_API_KEY   Your Firecrawl API key (required for scraping)
                      Get one at: https://firecrawl.dev

EXAMPLES:
  # Run full scrape with defaults
  npm run scrape:lcatterton

  # Scrape without merging (replace existing data)
  node scripts/firecrawl/index.js scrape --no-merge

  # Enrich data with LinkedIn info
  npm run scrape:enrich

  # Generate templates for manual research
  node scripts/firecrawl/index.js templates

  # Check current data status
  node scripts/firecrawl/index.js status
`);
}

// Status command
async function showStatus() {
    printBanner();
    console.log('📊 CURRENT DATA STATUS\n');
    
    const data = await loadCommitteeData();
    
    if (!data) {
        console.log('❌ No committee data found');
        console.log('   Run "npm run scrape:lcatterton" to fetch data');
        return;
    }
    
    console.log(`Company: ${data.company || 'Unknown'}`);
    console.log(`Industry: ${data.industry || 'Unknown'}`);
    console.log(`AUM: ${data.aum || 'Unknown'}`);
    console.log(`Last Updated: ${data.lastUpdated || 'Unknown'}`);
    console.log(`Deal Stage: ${data.dealStage || 'Unknown'}`);
    console.log();
    
    if (data.committee && data.committee.length > 0) {
        console.log(`📋 COMMITTEE MEMBERS (${data.committee.length} total)\n`);
        
        // Group by department
        const byDept = {};
        for (const member of data.committee) {
            const dept = member.department || 'Other';
            if (!byDept[dept]) byDept[dept] = [];
            byDept[dept].push(member);
        }
        
        for (const [dept, members] of Object.entries(byDept)) {
            console.log(`  ${dept} (${members.length})`);
            for (const m of members) {
                const linkedIn = m.linkedIn ? '✓' : '✗';
                const sentiment = m.sentiment || 'unknown';
                console.log(`    [${linkedIn}] ${m.name} - ${m.title}`);
                console.log(`        Role: ${m.role} | Influence: ${m.influence} | Sentiment: ${sentiment}`);
            }
            console.log();
        }
        
        // Summary stats
        const withLinkedIn = data.committee.filter(m => m.linkedIn).length;
        const highInfluence = data.committee.filter(m => m.influence === 'high').length;
        const champions = data.committee.filter(m => m.sentiment === 'champion').length;
        
        console.log('📈 SUMMARY');
        console.log(`   Total Members: ${data.committee.length}`);
        console.log(`   With LinkedIn: ${withLinkedIn}/${data.committee.length}`);
        console.log(`   High Influence: ${highInfluence}`);
        console.log(`   Champions: ${champions}`);
    } else {
        console.log('❌ No committee members found');
    }
    
    if (data.nextSteps && data.nextSteps.length > 0) {
        console.log('\n🎯 NEXT STEPS');
        data.nextSteps.forEach((step, i) => {
            console.log(`   ${i + 1}. ${step}`);
        });
    }
}

// Main execution
async function main() {
    try {
        switch (command.toLowerCase()) {
            case 'scrape':
            case 'scrape:lcatterton':
                printBanner();
                await scrapeLCatterton({
                    merge: !hasFlag('no-merge'),
                    backup: !hasFlag('no-backup'),
                    saveRaw: !hasFlag('no-raw'),
                    crawl: !hasFlag('scrape-only'),
                    scrapeIndividual: !hasFlag('crawl-only'),
                    limit: parseInt(getFlagValue('limit')) || 20
                });
                break;
                
            case 'enrich':
            case 'scrape:enrich':
                printBanner();
                await enrichWithLinkedIn({
                    backup: !hasFlag('no-backup')
                });
                break;
                
            case 'templates':
                printBanner();
                await enrichWithLinkedIn({
                    generateTemplates: true
                });
                break;
                
            case 'status':
                await showStatus();
                break;
                
            case 'help':
            case '--help':
            case '-h':
            default:
                showHelp();
                break;
        }
    } catch (error) {
        console.error('\n❌ ERROR:', error.message);
        if (process.env.DEBUG) {
            console.error(error.stack);
        }
        process.exit(1);
    }
}

main();
