/**
 * Data Parser Utilities
 * 
 * Functions to parse and extract structured data from
 * scraped website content.
 */

/**
 * Extract team members from markdown content
 * @param {string} markdown - Raw markdown content
 * @param {string} sourceUrl - Source URL for reference
 * @returns {Array} - Array of team member objects
 */
export function extractTeamMembers(markdown, sourceUrl) {
    const members = [];
    
    // Common patterns for team member sections
    const patterns = {
        // Pattern: Name followed by title on next line
        nameTitle: /^##?\s*([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)\s*\n+(?:\*\*)?([A-Za-z\s,&]+(?:Partner|Director|VP|President|CEO|CFO|CTO|Managing|Principal|Associate|Analyst)[A-Za-z\s,&]*)(?:\*\*)?/gm,
        
        // Pattern: **Name** - Title format
        boldNameTitle: /\*\*([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)\*\*\s*[-–—]\s*([A-Za-z\s,&]+)/gm,
        
        // Pattern: Name | Title format (table-like)
        tableName: /\|\s*([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)\s*\|\s*([A-Za-z\s,&]+)\s*\|/gm
    };

    // Try each pattern
    for (const [patternName, regex] of Object.entries(patterns)) {
        let match;
        while ((match = regex.exec(markdown)) !== null) {
            const name = match[1].trim();
            const title = match[2].trim();
            
            // Skip if already found (dedup)
            if (!members.find(m => m.name === name)) {
                members.push({
                    name,
                    title,
                    source: sourceUrl,
                    extractedBy: patternName,
                    rawMatch: match[0]
                });
            }
        }
    }

    return members;
}

/**
 * Infer buyer role from title
 * @param {string} title - Job title
 * @returns {string} - Buyer role category
 */
export function inferBuyerRole(title) {
    const titleLower = title.toLowerCase();
    
    // Economic buyers - control budget
    if (/ceo|cfo|managing partner|co-ceo|chairman|founder/i.test(titleLower)) {
        return 'economic_buyer';
    }
    
    // Technical buyers - evaluate technology
    if (/cto|cio|ciso|technology|engineering|data|security|it director/i.test(titleLower)) {
        return 'technical_buyer';
    }
    
    // User buyers - will use the product
    if (/analyst|associate|principal|vice president|vp|director(?!.*technology)/i.test(titleLower)) {
        return 'user_buyer';
    }
    
    // Decision makers
    if (/partner|head of|chief|president/i.test(titleLower)) {
        return 'decision_maker';
    }
    
    // Default to influencer
    return 'influencer';
}

/**
 * Infer department from title
 * @param {string} title - Job title
 * @returns {string} - Department name
 */
export function inferDepartment(title) {
    const titleLower = title.toLowerCase();
    
    const departmentMappings = [
        { keywords: ['ceo', 'cfo', 'managing partner', 'co-ceo', 'chairman', 'founder'], dept: 'Executive Leadership' },
        { keywords: ['cto', 'cio', 'technology', 'engineering', 'data', 'it '], dept: 'Technology & Operations' },
        { keywords: ['ciso', 'security', 'compliance', 'risk'], dept: 'Security & Compliance' },
        { keywords: ['legal', 'counsel', 'attorney'], dept: 'Legal & Compliance' },
        { keywords: ['investment', 'principal', 'associate', 'analyst', 'portfolio'], dept: 'Investments' },
        { keywords: ['operating', 'operations', 'value creation'], dept: 'Portfolio Operations' },
        { keywords: ['finance', 'accounting', 'controller'], dept: 'Finance & Administration' },
        { keywords: ['marketing', 'communications', 'pr'], dept: 'Marketing & Communications' },
        { keywords: ['hr', 'human resources', 'people', 'talent'], dept: 'Human Resources' }
    ];
    
    for (const mapping of departmentMappings) {
        if (mapping.keywords.some(kw => titleLower.includes(kw))) {
            return mapping.dept;
        }
    }
    
    return 'Other';
}

/**
 * Infer influence level from title
 * @param {string} title - Job title
 * @returns {string} - Influence level
 */
export function inferInfluence(title) {
    const titleLower = title.toLowerCase();
    
    // High influence
    if (/c-level|ceo|cfo|cto|cio|ciso|managing partner|co-ceo|chairman|founder|president|head of|chief/i.test(titleLower)) {
        return 'high';
    }
    
    // Medium influence
    if (/partner|director|vp|vice president|principal|senior/i.test(titleLower)) {
        return 'medium';
    }
    
    // Low influence
    return 'low';
}

/**
 * Generate unique ID for a member
 * @param {string} name - Member name
 * @param {string} company - Company name
 * @returns {string} - Unique ID
 */
export function generateMemberId(name, company = 'lc') {
    const nameSlug = name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .slice(0, 20);
    
    const companyPrefix = company.toLowerCase().slice(0, 3);
    const hash = Math.random().toString(36).slice(2, 6);
    
    return `${companyPrefix}-${nameSlug}-${hash}`;
}

/**
 * Clean and normalize text
 * @param {string} text - Raw text
 * @returns {string} - Cleaned text
 */
export function cleanText(text) {
    if (!text) return '';
    
    return text
        .replace(/\s+/g, ' ')
        .replace(/\n+/g, ' ')
        .replace(/[^\x20-\x7E]/g, '') // Remove non-printable chars
        .trim();
}

/**
 * Extract contact info from text
 * @param {string} text - Raw text
 * @returns {Object} - Contact info
 */
export function extractContactInfo(text) {
    const contact = {};
    
    // Email pattern
    const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w{2,}/);
    if (emailMatch) {
        contact.email = emailMatch[0];
    }
    
    // Phone pattern (US format)
    const phoneMatch = text.match(/(\+1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
    if (phoneMatch) {
        contact.phone = phoneMatch[0];
    }
    
    // LinkedIn pattern
    const linkedInMatch = text.match(/linkedin\.com\/in\/[\w-]+/i);
    if (linkedInMatch) {
        contact.linkedIn = `https://www.${linkedInMatch[0]}`;
    }
    
    return contact;
}

/**
 * Convert raw member data to structured format
 * @param {Object} raw - Raw extracted data
 * @param {string} company - Company name
 * @returns {Object} - Structured member object
 */
export function structureMemberData(raw, company = 'L Catterton') {
    return {
        id: generateMemberId(raw.name, company),
        name: cleanText(raw.name),
        title: cleanText(raw.title),
        role: inferBuyerRole(raw.title),
        department: inferDepartment(raw.title),
        influence: inferInfluence(raw.title),
        sentiment: 'unknown',
        focus: '',
        background: [],
        linkedIn: raw.linkedIn || '',
        email: raw.email || '',
        phone: raw.phone || '',
        photo: raw.photo || '',
        notes: '',
        source: raw.source || '',
        extractedAt: new Date().toISOString()
    };
}
