/**
 * Data Storage Utilities
 * 
 * Functions to save and load scraped data to/from JSON files.
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Default data directory
const DATA_DIR = path.resolve(__dirname, '../../../src/data');

/**
 * Ensure directory exists
 * @param {string} dirPath - Directory path
 */
async function ensureDir(dirPath) {
    try {
        await fs.mkdir(dirPath, { recursive: true });
    } catch (err) {
        if (err.code !== 'EEXIST') throw err;
    }
}

/**
 * Save committee data to JSON file
 * @param {Object} data - Committee data object
 * @param {string} filename - Output filename
 * @returns {string} - Full path to saved file
 */
export async function saveCommitteeData(data, filename = 'lcatterton-committee.json') {
    await ensureDir(DATA_DIR);
    
    const filePath = path.join(DATA_DIR, filename);
    const jsonData = JSON.stringify(data, null, 2);
    
    await fs.writeFile(filePath, jsonData, 'utf-8');
    console.log(`✅ Saved committee data to: ${filePath}`);
    
    return filePath;
}

/**
 * Load existing committee data
 * @param {string} filename - Filename to load
 * @returns {Object|null} - Committee data or null if not found
 */
export async function loadCommitteeData(filename = 'lcatterton-committee.json') {
    const filePath = path.join(DATA_DIR, filename);
    
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(content);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log(`📄 No existing data found at: ${filePath}`);
            return null;
        }
        throw err;
    }
}

/**
 * Merge new members with existing data (dedup by name)
 * @param {Object} existing - Existing committee data
 * @param {Array} newMembers - New members to merge
 * @returns {Object} - Merged committee data
 */
export function mergeCommitteeData(existing, newMembers) {
    if (!existing || !existing.committee) {
        return {
            ...existing,
            committee: newMembers,
            lastUpdated: new Date().toISOString().split('T')[0]
        };
    }
    
    const existingNames = new Set(existing.committee.map(m => m.name.toLowerCase()));
    const merged = [...existing.committee];
    
    let addedCount = 0;
    for (const member of newMembers) {
        if (!existingNames.has(member.name.toLowerCase())) {
            merged.push(member);
            existingNames.add(member.name.toLowerCase());
            addedCount++;
        }
    }
    
    console.log(`📊 Merged ${addedCount} new members (${merged.length} total)`);
    
    return {
        ...existing,
        committee: merged,
        lastUpdated: new Date().toISOString().split('T')[0]
    };
}

/**
 * Save raw scrape results for debugging
 * @param {Object} results - Raw scrape results
 * @param {string} prefix - Filename prefix
 */
export async function saveRawResults(results, prefix = 'raw-scrape') {
    const debugDir = path.resolve(__dirname, '../../../scrape-output');
    await ensureDir(debugDir);
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `${prefix}-${timestamp}.json`;
    const filePath = path.join(debugDir, filename);
    
    await fs.writeFile(filePath, JSON.stringify(results, null, 2), 'utf-8');
    console.log(`📁 Saved raw results to: ${filePath}`);
    
    return filePath;
}

/**
 * Create backup of existing data
 * @param {string} filename - Source filename
 */
export async function createBackup(filename = 'lcatterton-committee.json') {
    const backupDir = path.resolve(__dirname, '../../../scrape-output/backups');
    await ensureDir(backupDir);
    
    const sourcePath = path.join(DATA_DIR, filename);
    
    try {
        const content = await fs.readFile(sourcePath, 'utf-8');
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const backupPath = path.join(backupDir, `${filename.replace('.json', '')}-${timestamp}.json`);
        
        await fs.writeFile(backupPath, content, 'utf-8');
        console.log(`💾 Created backup at: ${backupPath}`);
        
        return backupPath;
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log('📄 No existing file to backup');
            return null;
        }
        throw err;
    }
}
