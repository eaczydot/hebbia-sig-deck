/**
 * LinkedIn Data Enrichment Module
 * 
 * This module handles enriching committee member data with LinkedIn information.
 * 
 * IMPORTANT: Direct LinkedIn scraping violates their Terms of Service.
 * This module provides compliant alternatives:
 * 
 * 1. Manual data entry with structured templates
 * 2. Integration with compliant data providers (Apollo, ZoomInfo, etc.)
 * 3. LinkedIn Sales Navigator API (requires subscription)
 */

import { loadCommitteeData, saveCommitteeData, createBackup } from '../utils/storage.js';

// Known L Catterton leadership (publicly available information)
const KNOWN_PROFILES = {
    'michael chu': {
        linkedIn: 'https://www.linkedin.com/in/michaelchu/',
        background: ['Harvard Business School', 'Bain Capital', 'Consumer Expertise'],
        focus: 'Strategic investment decisions, firm direction'
    },
    'scott dahnke': {
        linkedIn: 'https://www.linkedin.com/in/scottdahnke/',
        background: ['Stanford GSB', 'Private Equity Leadership'],
        focus: 'Global operations, strategic partnerships'
    },
    'j. michael chu': {
        linkedIn: 'https://www.linkedin.com/in/michaelchu/',
        background: ['Harvard Business School', 'Bain Capital'],
        focus: 'Strategic investment decisions'
    }
};

// Template for manual LinkedIn research
const RESEARCH_TEMPLATE = {
    name: '',
    linkedIn: '',
    background: [],
    education: [],
    previousCompanies: [],
    skills: [],
    connections: 0,
    lastUpdated: ''
};

/**
 * Generate a research template for manual data collection
 * @param {Array} members - Committee members
 * @returns {Array} - Research templates
 */
export function generateResearchTemplates(members) {
    return members.map(member => ({
        ...RESEARCH_TEMPLATE,
        name: member.name,
        title: member.title,
        department: member.department,
        existingLinkedIn: member.linkedIn || 'NOT FOUND',
        instructions: [
            `1. Search LinkedIn for "${member.name}" at L Catterton`,
            `2. Verify title matches: "${member.title}"`,
            '3. Copy profile URL to linkedIn field',
            '4. Note background from About section',
            '5. List education credentials',
            '6. Note relevant skills'
        ]
    }));
}

/**
 * Enrich a single member with known data
 * @param {Object} member - Member to enrich
 * @returns {Object} - Enriched member
 */
function enrichMember(member) {
    const nameLower = member.name.toLowerCase();
    const knownData = KNOWN_PROFILES[nameLower];
    
    if (knownData) {
        return {
            ...member,
            linkedIn: knownData.linkedIn || member.linkedIn,
            background: knownData.background || member.background,
            focus: knownData.focus || member.focus,
            enrichedAt: new Date().toISOString()
        };
    }
    
    return member;
}

/**
 * Enrich committee data with LinkedIn information
 * @param {Object} options - Enrichment options
 */
export async function enrichWithLinkedIn(options = {}) {
    console.log('═'.repeat(60));
    console.log('🔗 LINKEDIN DATA ENRICHMENT');
    console.log('═'.repeat(60));
    
    const { 
        backup = true,
        generateTemplates = false 
    } = options;
    
    // Load current data
    const data = await loadCommitteeData();
    
    if (!data || !data.committee) {
        console.log('❌ No committee data found to enrich');
        return null;
    }
    
    console.log(`📊 Found ${data.committee.length} members to process`);
    
    // Backup first
    if (backup) {
        await createBackup();
    }
    
    // Generate research templates if requested
    if (generateTemplates) {
        const templates = generateResearchTemplates(data.committee);
        console.log('\n📋 RESEARCH TEMPLATES FOR MANUAL DATA COLLECTION:');
        console.log('─'.repeat(60));
        
        for (const template of templates) {
            console.log(`\n👤 ${template.name}`);
            console.log(`   Title: ${template.title}`);
            console.log(`   Department: ${template.department}`);
            console.log(`   Current LinkedIn: ${template.existingLinkedIn}`);
            console.log('   Instructions:');
            template.instructions.forEach(i => console.log(`      ${i}`));
        }
        
        console.log('\n' + '─'.repeat(60));
        return templates;
    }
    
    // Enrich with known data
    let enrichedCount = 0;
    const enrichedCommittee = data.committee.map(member => {
        const enriched = enrichMember(member);
        if (enriched.enrichedAt) {
            enrichedCount++;
        }
        return enriched;
    });
    
    console.log(`✅ Enriched ${enrichedCount} members with known LinkedIn data`);
    
    // Update and save
    const updatedData = {
        ...data,
        committee: enrichedCommittee,
        lastUpdated: new Date().toISOString().split('T')[0]
    };
    
    await saveCommitteeData(updatedData);
    
    console.log('\n' + '═'.repeat(60));
    console.log('✅ ENRICHMENT COMPLETE');
    console.log('═'.repeat(60));
    
    // Print summary of members still needing LinkedIn data
    const needsLinkedIn = enrichedCommittee.filter(m => !m.linkedIn);
    if (needsLinkedIn.length > 0) {
        console.log(`\n⚠️  ${needsLinkedIn.length} members still need LinkedIn profiles:`);
        needsLinkedIn.forEach(m => console.log(`   - ${m.name} (${m.title})`));
    }
    
    return updatedData;
}

/**
 * Manually add LinkedIn data for a member
 * @param {string} name - Member name
 * @param {Object} linkedInData - LinkedIn data to add
 */
export async function addLinkedInData(name, linkedInData) {
    const data = await loadCommitteeData();
    
    if (!data || !data.committee) {
        console.log('❌ No committee data found');
        return null;
    }
    
    const memberIndex = data.committee.findIndex(
        m => m.name.toLowerCase() === name.toLowerCase()
    );
    
    if (memberIndex === -1) {
        console.log(`❌ Member "${name}" not found`);
        return null;
    }
    
    // Update member
    data.committee[memberIndex] = {
        ...data.committee[memberIndex],
        ...linkedInData,
        manuallyUpdated: new Date().toISOString()
    };
    
    await saveCommitteeData(data);
    console.log(`✅ Updated LinkedIn data for ${name}`);
    
    return data;
}

/**
 * Integration with third-party data providers
 * Placeholder for future implementation
 */
export const dataProviders = {
    /**
     * Apollo.io integration placeholder
     */
    apollo: {
        name: 'Apollo.io',
        website: 'https://www.apollo.io',
        setup: 'Requires API key from Apollo dashboard',
        async enrich(email) {
            console.log('⚠️  Apollo.io integration not yet implemented');
            console.log('   Visit https://www.apollo.io to get API access');
            return null;
        }
    },
    
    /**
     * ZoomInfo integration placeholder
     */
    zoominfo: {
        name: 'ZoomInfo',
        website: 'https://www.zoominfo.com',
        setup: 'Requires enterprise subscription',
        async enrich(email) {
            console.log('⚠️  ZoomInfo integration not yet implemented');
            console.log('   Visit https://www.zoominfo.com for enterprise access');
            return null;
        }
    },
    
    /**
     * Clearbit integration placeholder
     */
    clearbit: {
        name: 'Clearbit',
        website: 'https://clearbit.com',
        setup: 'Requires API key from Clearbit dashboard',
        async enrich(email) {
            console.log('⚠️  Clearbit integration not yet implemented');
            console.log('   Visit https://clearbit.com to get API access');
            return null;
        }
    }
};

export default enrichWithLinkedIn;
