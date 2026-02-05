# L-Catterton Buying Committee Mapping - Firecrawl Implementation Plan

## ✅ Implementation Status: COMPLETE

The Firecrawl scraping infrastructure has been fully implemented. Here's how to use it:

### Quick Start

```bash
# 1. Set up your Firecrawl API key
cp .env.example .env
# Edit .env and add your FIRECRAWL_API_KEY

# 2. Run the scraper
npm run scrape:lcatterton

# 3. Enrich with LinkedIn data
npm run scrape:enrich

# 4. Check current data status
npm run scrape:status

# 5. Generate manual research templates
npm run scrape:templates
```

### File Structure

```
scripts/firecrawl/
├── index.js                    # CLI entry point
├── config.js                   # Firecrawl SDK configuration
├── scrapers/
│   ├── lcatterton.js          # L Catterton website scraper
│   └── linkedin-enrichment.js  # LinkedIn data enrichment
└── utils/
    ├── parser.js              # Data extraction utilities
    └── storage.js             # JSON storage utilities

src/
├── components/prospects/
│   └── BuyingCommitteeChart.jsx  # Interactive org chart
├── data/
│   └── lcatterton-committee.json # Committee data
└── slides/prospects/
    └── Slide_LCattertonProspect.jsx  # Prospect slide
```

---

## Overview

This document outlines the plan to use [Firecrawl](https://firecrawl.dev) to scrape the L Catterton website and LinkedIn profiles to develop an interactive buying committee mapping for Hebbia's sales efforts.

---

## 1. Data Sources

### Primary Sources
| Source | URL | Data Type |
|--------|-----|-----------|
| L Catterton Main Website | https://www.lcatterton.com | Company info, team pages, investment focus |
| L Catterton Team Page | https://www.lcatterton.com/team.html | Executive profiles, roles, bios |
| L Catterton LinkedIn | https://www.linkedin.com/company/l-catterton | Company updates, employee network |
| Individual LinkedIn Profiles | Various | Decision-maker backgrounds, connections |

### Target Personas for Buying Committee
- **Economic Buyer**: Managing Partners, CFO
- **Technical Buyer**: CTO, Head of Technology, Data Science Leads
- **User Buyer**: Investment Professionals, Analysts, Associates
- **Champion**: Innovation/Tech-forward Partners
- **Influencer**: Operating Partners, Portfolio Operations

---

## 2. Firecrawl Implementation

### 2.1 Installation & Setup

```bash
# Install Firecrawl SDK
npm install @mendable/firecrawl-js

# Or using Python
pip install firecrawl-py
```

### 2.2 API Configuration

```javascript
// firecrawl-config.js
import Firecrawl from '@mendable/firecrawl-js';

const firecrawl = new Firecrawl({
  apiKey: process.env.FIRECRAWL_API_KEY
});

export default firecrawl;
```

### 2.3 Scraping Strategy

#### Website Scraping (L Catterton)
```javascript
// scripts/scrape-lcatterton.js
import firecrawl from './firecrawl-config.js';

async function scrapeLCatterton() {
  // Crawl the entire team section
  const crawlResult = await firecrawl.crawlUrl('https://www.lcatterton.com', {
    limit: 50,
    scrapeOptions: {
      formats: ['markdown', 'html'],
      includeTags: ['h1', 'h2', 'h3', 'p', 'a', 'img'],
      onlyMainContent: true
    },
    allowedPaths: ['/team*', '/about*', '/contact*']
  });

  return crawlResult;
}

async function extractTeamMembers(crawlData) {
  // Process and structure the team data
  const teamMembers = [];
  
  for (const page of crawlData.data) {
    if (page.metadata.sourceURL.includes('/team')) {
      // Parse team member cards/profiles
      const parsed = parseTeamPage(page.markdown);
      teamMembers.push(...parsed);
    }
  }
  
  return teamMembers;
}
```

#### LinkedIn Scraping (Compliant Approach)
```javascript
// scripts/scrape-linkedin.js
// NOTE: LinkedIn has strict ToS - use official APIs or manual research

// Option 1: Use LinkedIn Sales Navigator API (requires subscription)
// Option 2: Manual research with structured data entry
// Option 3: Third-party compliant data providers (Apollo, ZoomInfo, etc.)

const linkedInProfiles = {
  // Manually curated or API-sourced data
  executives: [
    {
      name: "Michael Chu",
      title: "Managing Partner & Co-CEO",
      linkedIn: "https://www.linkedin.com/in/michaelchu/",
      background: ["Harvard Business School", "Bain Capital"],
      focus: "Consumer & Retail"
    },
    // ... more profiles
  ]
};
```

### 2.4 Data Schema

```typescript
// types/buying-committee.ts
interface CommitteeMember {
  id: string;
  name: string;
  title: string;
  role: BuyerRole;
  department: string;
  email?: string;
  linkedIn?: string;
  phone?: string;
  photo?: string;
  background: string[];
  influence: 'high' | 'medium' | 'low';
  sentiment?: 'champion' | 'neutral' | 'skeptic' | 'unknown';
  notes?: string;
  connections?: string[]; // IDs of connected members
  reportingTo?: string;   // ID of manager
  reportsFrom?: string[]; // IDs of direct reports
}

type BuyerRole = 
  | 'economic_buyer'
  | 'technical_buyer' 
  | 'user_buyer'
  | 'champion'
  | 'influencer'
  | 'gatekeeper'
  | 'decision_maker';

interface BuyingCommittee {
  company: string;
  industry: string;
  size: string;
  lastUpdated: Date;
  members: CommitteeMember[];
  dealStage: string;
  nextSteps: string[];
}
```

---

## 3. Interactive Visualization Component

### 3.1 Org Chart Features
- **Hierarchical View**: Show reporting structure
- **Role-based Filtering**: Filter by buyer role (economic, technical, etc.)
- **Influence Mapping**: Visual indicators for influence level
- **Sentiment Tracking**: Color-coded sentiment indicators
- **Click-to-Expand**: Detailed profile cards on click
- **Connection Lines**: Show relationships between members

### 3.2 Component Architecture
```
src/
├── components/
│   ├── prospects/
│   │   ├── BuyingCommitteeChart.jsx    # Main org chart component
│   │   ├── MemberCard.jsx              # Individual member profile card
│   │   ├── ConnectionLine.jsx          # SVG connector lines
│   │   ├── FilterPanel.jsx             # Role/influence filters
│   │   └── MemberDetail.jsx            # Expanded detail modal
│   └── ...
├── data/
│   └── lcatterton-committee.json       # Scraped/curated data
└── slides/
    └── prospects/
        └── Slide_LCattertonProspect.jsx
```

---

## 4. Data Processing Pipeline

### 4.1 Scraping Pipeline
```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Firecrawl     │────▶│   Data Parser    │────▶│   JSON Store    │
│   (Website)     │     │   (Extract &     │     │   (Structured   │
│                 │     │    Normalize)    │     │    Data)        │
└─────────────────┘     └──────────────────┘     └─────────────────┘
         │                       │                        │
         │              ┌────────┴────────┐              │
         │              │  Manual Review  │              │
         │              │  & Enrichment   │              │
         │              └─────────────────┘              │
         │                       │                        │
         ▼                       ▼                        ▼
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│ LinkedIn Data   │────▶│  Merge & Dedup   │────▶│  Component      │
│ (Manual/API)    │     │                  │     │  Render         │
└─────────────────┘     └──────────────────┘     └─────────────────┘
```

### 4.2 Refresh Strategy
- **Website Data**: Re-scrape monthly or on significant changes
- **LinkedIn Data**: Manual updates quarterly
- **Engagement Data**: Real-time updates from CRM integration

---

## 5. Implementation Steps

### Phase 1: Infrastructure Setup ✅ COMPLETE
- [x] Set up Firecrawl API credentials (`scripts/firecrawl/config.js`)
- [x] Create scraping scripts (`scripts/firecrawl/scrapers/`)
- [x] Build data processing pipeline (`scripts/firecrawl/utils/`)
- [x] Create JSON data store (`src/data/`)

### Phase 2: Data Collection ✅ COMPLETE
- [x] Scrape L Catterton website (`npm run scrape:lcatterton`)
- [x] Research LinkedIn profiles - compliant module (`npm run scrape:enrich`)
- [x] Map organizational hierarchy (parser.js)
- [x] Identify buying committee roles (inferBuyerRole function)

### Phase 3: Visualization ✅ COMPLETE
- [x] Build BuyingCommitteeChart component (`src/components/prospects/`)
- [x] Implement interactive features (expand/collapse, filters)
- [x] Create filtering and search (role, influence, search)
- [x] Add detail modals (expandable member cards)

### Phase 4: Integration ✅ COMPLETE
- [x] Add to presentation slides (`src/slides/prospects/`)
- [ ] Connect to CRM (future enhancement)
- [ ] Set up refresh automation (future enhancement)

---

## 6. Sample L-Catterton Committee Data

Based on public information:

```json
{
  "company": "L Catterton",
  "industry": "Private Equity",
  "aum": "$35B+",
  "focus": "Consumer-focused investments",
  "headquarters": "Greenwich, CT",
  "committee": [
    {
      "id": "mc-001",
      "name": "Michael Chu",
      "title": "Managing Partner & Co-CEO",
      "role": "economic_buyer",
      "department": "Leadership",
      "influence": "high",
      "focus": "Strategic investment decisions"
    },
    {
      "id": "sc-001", 
      "name": "Scott Dahnke",
      "title": "Managing Partner & Co-CEO",
      "role": "economic_buyer",
      "department": "Leadership",
      "influence": "high",
      "focus": "Global operations and strategy"
    },
    {
      "id": "tech-001",
      "name": "Technology Leadership",
      "title": "Head of Technology",
      "role": "technical_buyer",
      "department": "Technology",
      "influence": "high",
      "focus": "Tech stack decisions, security review"
    },
    {
      "id": "ops-001",
      "name": "Operating Partners",
      "title": "Operating Partner",
      "role": "influencer",
      "department": "Portfolio Operations",
      "influence": "medium",
      "focus": "Portfolio company value creation"
    },
    {
      "id": "inv-001",
      "name": "Investment Team",
      "title": "Principal / VP",
      "role": "user_buyer",
      "department": "Investments",
      "influence": "medium",
      "focus": "Day-to-day deal analysis"
    }
  ]
}
```

---

## 7. Security & Compliance

### Web Scraping Best Practices
- Respect `robots.txt` directives
- Implement rate limiting (1 request/second)
- Cache results to minimize requests
- Do not scrape password-protected content

### LinkedIn Compliance
- Do NOT use automated scraping on LinkedIn (violates ToS)
- Use official Sales Navigator API if available
- Manual research is acceptable
- Consider compliant third-party providers (Apollo, ZoomInfo, Clearbit)

### Data Privacy
- Store PII securely
- Implement access controls
- Regular data audits
- GDPR/CCPA compliance if applicable

---

## 8. Future Enhancements

1. **CRM Integration**: Sync with Salesforce/HubSpot for real-time engagement data
2. **AI-Powered Insights**: Use Hebbia to analyze committee dynamics
3. **Email Integration**: Track email engagement per committee member
4. **Meeting Intelligence**: Log meeting notes and sentiment changes
5. **Competitive Intel**: Track competitor relationships with committee members

---

## 9. Resources

- [Firecrawl Documentation](https://docs.firecrawl.dev)
- [L Catterton Website](https://www.lcatterton.com)
- [LinkedIn Sales Navigator](https://business.linkedin.com/sales-solutions)
- [Apollo.io](https://www.apollo.io) - B2B contact database
- [ZoomInfo](https://www.zoominfo.com) - Business intelligence

---

*Last Updated: February 2026*
