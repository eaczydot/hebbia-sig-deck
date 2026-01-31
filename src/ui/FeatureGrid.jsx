import React from 'react';
import { GlassPanel } from '../components/GlassPanel';

export function FeatureGrid({ items }) {
  return (
    <div className="site-feature-grid">
      {items.map((it) => (
        <GlassPanel key={it.title} className="site-card" style={{ gap: 10 }}>
          <div className="text-matrix-header">{it.eyebrow ?? 'FEATURE'}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {it.icon ? <div style={{ color: 'var(--color-brand-cobalt)' }}>{it.icon}</div> : null}
            <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.01em' }}>{it.title}</div>
          </div>
          <div className="text-cell-data" style={{ color: 'var(--txt-sec)' }}>
            {it.description}
          </div>
        </GlassPanel>
      ))}
    </div>
  );
}

