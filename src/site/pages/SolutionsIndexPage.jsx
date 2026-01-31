import React from 'react';
import { Link } from 'react-router-dom';
import { ViewportShell } from '../../templates/ViewportShell';
import { SlideContainer } from '../../components/SlideContainer';
import { GlassPanel } from '../../components/GlassPanel';
import { MarketingNav } from '../../ui/MarketingNav';

function SolutionCard({ to, title, description, eyebrow }) {
  return (
    <Link to={to} className="site-card-link">
      <GlassPanel className="site-card" style={{ gap: 10, height: '100%' }}>
        <div className="text-matrix-header">{eyebrow}</div>
        <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em' }}>{title}</div>
        <div className="text-cell-data" style={{ color: 'var(--txt-sec)' }}>
          {description}
        </div>
        <div className="site-card-cta u-font-mono">OPEN →</div>
      </GlassPanel>
    </Link>
  );
}

export default function SolutionsIndexPage() {
  return (
    <ViewportShell>
      <MarketingNav right="SOLUTIONS" />
      <SlideContainer className="site-scroll">
        <div style={{ marginBottom: 40 }}>
          <div className="text-matrix-header">SOLUTIONS</div>
          <div className="text-hero" style={{ fontSize: 56 }}>
            One-pagers, examples, and decks
          </div>
          <div className="text-subhero" style={{ marginBottom: 0 }}>
            This section is built with original copy and components. It’s designed to scale to multiple solution
            verticals.
          </div>
        </div>

        <div className="site-feature-grid">
          <SolutionCard
            to="/solutions/ai-for-credit-investing"
            eyebrow="SOLUTION // CREDIT"
            title="AI for Credit Investing"
            description="A one-pager value prop with example workflows, links to case studies, and a deck template."
          />
        </div>
      </SlideContainer>
    </ViewportShell>
  );
}

