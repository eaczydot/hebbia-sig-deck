import React from 'react';
import { Link } from 'react-router-dom';
import { ViewportShell } from '../../../templates/ViewportShell';
import { SlideContainer } from '../../../components/SlideContainer';
import { GlassPanel } from '../../../components/GlassPanel';
import { MarketingNav } from '../../../ui/MarketingNav';
import { Section } from '../../../ui/Section';
import { FeatureGrid } from '../../../ui/FeatureGrid';
import { BookOpen, CheckCircle2, FileText, LineChart, Shield, Sparkles } from 'lucide-react';

export default function AiForCreditInvestingPage() {
  return (
    <ViewportShell>
      <MarketingNav right="AI FOR CREDIT INVESTING" />
      <SlideContainer className="site-scroll">
        <Section
          eyebrow="SOLUTION // CREDIT"
          title="AI for Credit Investing"
          subtitle="Turn messy docs into decision-ready diligence: faster screening, cleaner memos, and verifiable citations—without relying on scraped content or third‑party logos."
          right={
            <Link to="/templates/credit-investing-deck" className="site-button">
              Open concept deck
            </Link>
          }
        >
          <div className="grid-2" style={{ alignItems: 'stretch' }}>
            <GlassPanel className="site-card" style={{ gap: 10 }}>
              <div className="text-matrix-header">WHO IT’S FOR</div>
              <div className="text-cell-data">
                Credit analysts, portfolio managers, and diligence teams who need to move from “document review” to
                “decision” with tighter auditability.
              </div>
            </GlassPanel>
            <GlassPanel className="site-card" style={{ gap: 10 }}>
              <div className="text-matrix-header">WHAT IT DOES</div>
              <div className="text-cell-data">
                Extracts key terms, covenants, risks, and financial signals from deal docs, then assembles a memo with
                traceable citations and repeatable checks.
              </div>
            </GlassPanel>
          </div>
        </Section>

        <div style={{ height: 28 }} />

        <Section
          eyebrow="VALUE"
          title="A one‑pager value prop"
          subtitle="Original copy you can adapt to your positioning. Swap in your own proof points and rights-cleared screenshots from `#/assets`."
          variant="panel"
        >
          <FeatureGrid
            items={[
              {
                eyebrow: 'SPEED',
                title: 'Faster screening',
                description: 'Answer “is this investable?” across dozens of documents with consistent outputs.',
                icon: <Sparkles size={18} />,
              },
              {
                eyebrow: 'QUALITY',
                title: 'Cleaner memos',
                description: 'Standardize structure: thesis, drivers, risks, covenants, and a tight IC narrative.',
                icon: <FileText size={18} />,
              },
              {
                eyebrow: 'VERIFY',
                title: 'Citation-first',
                description: 'Every key claim can link back to the exact source span inside the document set.',
                icon: <BookOpen size={18} />,
              },
              {
                eyebrow: 'RISK',
                title: 'Fewer misses',
                description: 'Systematically surface red flags: MFN clauses, baskets, carveouts, and definition traps.',
                icon: <Shield size={18} />,
              },
              {
                eyebrow: 'ANALYTICS',
                title: 'Repeatable checks',
                description: 'Run the same diligence rubric across issuers to reduce variance between analysts.',
                icon: <CheckCircle2 size={18} />,
              },
              {
                eyebrow: 'MONITOR',
                title: 'Ongoing surveillance',
                description: 'Track covenant headroom and material changes as new filings and notices arrive.',
                icon: <LineChart size={18} />,
              },
            ]}
          />
        </Section>

        <div style={{ height: 28 }} />

        <Section
          eyebrow="EXAMPLES"
          title="Example workflows"
          subtitle="These are safe, generic examples (no scraped claims). Replace with your firm’s exact process."
        >
          <div className="grid-2" style={{ alignItems: 'stretch' }}>
            <GlassPanel className="site-card" style={{ gap: 10 }}>
              <div className="text-matrix-header">WORKFLOW 01</div>
              <div style={{ fontSize: 20, fontWeight: 600 }}>Term sheet → IC memo draft</div>
              <div className="text-cell-data" style={{ color: 'var(--txt-sec)' }}>
                Parse the term sheet, pull key covenants/definitions, and generate a memo outline with citations.
              </div>
              <div className="text-cell-data">
                Output: “Key terms”, “Covenants”, “Risks”, “Monitoring plan”, “Open questions”.
              </div>
            </GlassPanel>

            <GlassPanel className="site-card" style={{ gap: 10 }}>
              <div className="text-matrix-header">WORKFLOW 02</div>
              <div style={{ fontSize: 20, fontWeight: 600 }}>Credit agreement red-flag scan</div>
              <div className="text-cell-data" style={{ color: 'var(--txt-sec)' }}>
                Search and normalize baskets/carveouts, identify unusual clauses, and summarize negotiation points.
              </div>
              <div className="text-cell-data">
                Output: “Red flags”, “Negotiation asks”, “Comparable language”, “Citation pack”.
              </div>
            </GlassPanel>
          </div>
        </Section>

        <div style={{ height: 28 }} />

        <Section
          eyebrow="LINKS"
          title="Jump to supporting materials"
          subtitle="This site already has decks and templates you can link from each solution page."
          variant="panel"
        >
          <div className="grid-3" style={{ alignItems: 'stretch' }}>
            <Link to="/case-studies/hebbia-matrix-os" className="site-card-link">
              <GlassPanel className="site-card" style={{ gap: 10, height: '100%' }}>
                <div className="text-matrix-header">CASE STUDY</div>
                <div style={{ fontSize: 18, fontWeight: 600 }}>Hebbia // Matrix_OS v3.5</div>
                <div className="text-cell-data" style={{ color: 'var(--txt-sec)' }}>
                  Existing deck hosted inside this site.
                </div>
                <div className="site-card-cta u-font-mono">OPEN →</div>
              </GlassPanel>
            </Link>

            <Link to="/templates/starter-deck" className="site-card-link">
              <GlassPanel className="site-card" style={{ gap: 10, height: '100%' }}>
                <div className="text-matrix-header">TEMPLATE</div>
                <div style={{ fontSize: 18, fontWeight: 600 }}>Starter Deck</div>
                <div className="text-cell-data" style={{ color: 'var(--txt-sec)' }}>
                  Copy-me slide deck with `?slide=` deep links.
                </div>
                <div className="site-card-cta u-font-mono">OPEN →</div>
              </GlassPanel>
            </Link>

            <Link to="/assets" className="site-card-link">
              <GlassPanel className="site-card" style={{ gap: 10, height: '100%' }}>
                <div className="text-matrix-header">ASSETS</div>
                <div style={{ fontSize: 18, fontWeight: 600 }}>Approved asset library</div>
                <div className="text-cell-data" style={{ color: 'var(--txt-sec)' }}>
                  Add rights-cleared product shots/videos/icons here.
                </div>
                <div className="site-card-cta u-font-mono">OPEN →</div>
              </GlassPanel>
            </Link>
          </div>
        </Section>

        <div style={{ height: 28 }} />
      </SlideContainer>
    </ViewportShell>
  );
}

