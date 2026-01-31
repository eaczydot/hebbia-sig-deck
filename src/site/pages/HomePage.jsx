import React from 'react';
import { Link } from 'react-router-dom';
import { ViewportShell } from '../../templates/ViewportShell';
import { SlideContainer } from '../../components/SlideContainer';
import { GlassPanel } from '../../components/GlassPanel';
import { caseStudies, templates } from '../registry';

function LibraryCard({ to, eyebrow, title, description }) {
  return (
    <Link to={to} className="site-card-link">
      <GlassPanel className="site-card" style={{ gap: 10, height: '100%' }}>
        <div className="text-matrix-header">{eyebrow}</div>
        <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: '-0.02em' }}>{title}</div>
        <div className="text-cell-data" style={{ color: 'var(--txt-sec)' }}>
          {description}
        </div>
        <div className="site-card-cta u-font-mono">OPEN →</div>
      </GlassPanel>
    </Link>
  );
}

export default function HomePage() {
  return (
    <ViewportShell>
      <div className="site-header">
        <div className="site-header__left">CASE STUDIES // LIBRARY</div>
        <div className="site-header__right">
          <Link to="/assets" className="site-nav-link">
            Assets
          </Link>
        </div>
      </div>

      <SlideContainer>
        <div style={{ marginBottom: 40 }}>
          <div className="text-matrix-header">SELECT</div>
          <div className="text-hero" style={{ fontSize: 56 }}>
            Templates & case studies
          </div>
          <div className="text-subhero" style={{ marginBottom: 0 }}>
            This repo now supports multiple case studies and templates. The existing deck is preserved as the first case
            study entry.
          </div>
        </div>

        <div className="grid-3" style={{ flex: 1, alignItems: 'stretch' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="text-matrix-header">TEMPLATES</div>
            <div style={{ display: 'grid', gap: 16 }}>
              {templates.map((t) => (
                <LibraryCard
                  key={t.id}
                  to={`/templates/${t.id}`}
                  eyebrow={`TEMPLATE // ${t.id.toUpperCase().replaceAll('-', ' ')}`}
                  title={t.title}
                  description={t.description}
                />
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="text-matrix-header">CASE STUDIES</div>
            <div style={{ display: 'grid', gap: 16 }}>
              {caseStudies.map((c) => (
                <LibraryCard
                  key={c.id}
                  to={`/case-studies/${c.id}`}
                  eyebrow={`CASE STUDY // ${c.id.toUpperCase().replaceAll('-', ' ')}`}
                  title={c.title}
                  description={c.description}
                />
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="text-matrix-header">ASSETS</div>
            <div style={{ display: 'grid', gap: 16 }}>
              <LibraryCard
                to="/assets"
                eyebrow="ASSETS // APPROVED"
                title="Asset library"
                description="A curated gallery of rights-cleared product shots, icons, videos, and animations (no people / no other-company logos)."
              />
            </div>
          </div>
        </div>
      </SlideContainer>
    </ViewportShell>
  );
}

