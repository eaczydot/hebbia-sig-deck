import React from 'react';
import { ViewportShell } from '../../templates/ViewportShell';
import { SlideContainer } from '../../components/SlideContainer';
import { GlassPanel } from '../../components/GlassPanel';
import { MarketingNav } from '../../ui/MarketingNav';
import { Section } from '../../ui/Section';
import { FeatureGrid } from '../../ui/FeatureGrid';
import { BarChart3, BookOpen, LayoutGrid, ShieldCheck, Sparkles, Zap } from 'lucide-react';

export default function ComponentsCatalogPage() {
  return (
    <ViewportShell>
      <MarketingNav right="COMPONENTS" />
      <SlideContainer className="site-scroll">
        <Section
          eyebrow="UI KIT"
          title="Component catalog"
          subtitle="Original components for solution pages and marketing templates (no scraping or copying from third-party sites)."
        >
          <div className="grid-2">
            <GlassPanel className="site-card" style={{ gap: 10 }}>
              <div className="text-matrix-header">INCLUDED</div>
              <div className="text-cell-data">
                - `MarketingNav`
                <br />- `Section`
                <br />- `FeatureGrid`
              </div>
            </GlassPanel>
            <GlassPanel className="site-card" style={{ gap: 10 }}>
              <div className="text-matrix-header">EXTEND</div>
              <div className="text-cell-data">
                Add more components under <span className="u-font-mono">src/ui/</span> and use them inside solution pages
                under <span className="u-font-mono">src/site/pages/solutions/</span>.
              </div>
            </GlassPanel>
          </div>
        </Section>

        <div style={{ height: 28 }} />

        <Section
          eyebrow="DEMO"
          title="FeatureGrid"
          subtitle="A simple pattern for consistent marketing tiles."
          variant="panel"
        >
          <FeatureGrid
            items={[
              { eyebrow: 'VISUAL', title: 'Grid layout', description: 'Responsive 3 → 2 → 1 columns.', icon: <LayoutGrid size={18} /> },
              { eyebrow: 'ANIMATE', title: 'Hover affordances', description: 'Subtle lift + border emphasis.', icon: <Sparkles size={18} /> },
              { eyebrow: 'A11Y', title: 'Readable contrast', description: 'Designed for dark backgrounds.', icon: <ShieldCheck size={18} /> },
              { eyebrow: 'METRICS', title: 'Numbers ready', description: 'Drop in KPIs and stats blocks.', icon: <BarChart3 size={18} /> },
              { eyebrow: 'DOCS', title: 'Citations', description: 'Link claims back to sources where applicable.', icon: <BookOpen size={18} /> },
              { eyebrow: 'SPEED', title: 'Composable', description: 'Use with SlideContainer + GlassPanel.', icon: <Zap size={18} /> },
            ]}
          />
        </Section>
      </SlideContainer>
    </ViewportShell>
  );
}

