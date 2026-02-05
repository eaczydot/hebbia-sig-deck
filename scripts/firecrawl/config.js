/**
 * Firecrawl Configuration
 * 
 * This module sets up the Firecrawl SDK with proper authentication
 * and default settings for scraping prospect websites.
 */

import Firecrawl from '@mendable/firecrawl-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Validate API key
const FIRECRAWL_API_KEY = process.env.FIRECRAWL_API_KEY;

if (!FIRECRAWL_API_KEY) {
    console.warn('⚠️  FIRECRAWL_API_KEY not found in environment variables.');
    console.warn('   Set it in .env file or as environment variable.');
    console.warn('   Get your API key at: https://firecrawl.dev');
}

// Initialize Firecrawl client
const firecrawl = new Firecrawl({
    apiKey: FIRECRAWL_API_KEY || 'demo-key'
});

// Default scraping options
export const DEFAULT_SCRAPE_OPTIONS = {
    formats: ['markdown', 'html'],
    onlyMainContent: true,
    waitFor: 2000, // Wait 2s for dynamic content
    timeout: 30000,
    headers: {
        'Accept-Language': 'en-US,en;q=0.9'
    }
};

// Default crawl options
export const DEFAULT_CRAWL_OPTIONS = {
    limit: 50,
    scrapeOptions: DEFAULT_SCRAPE_OPTIONS,
    maxDepth: 3,
    ignoreSitemap: false
};

// Rate limiting settings
export const RATE_LIMIT = {
    requestsPerSecond: 1,
    delayBetweenRequests: 1000 // ms
};

export default firecrawl;
