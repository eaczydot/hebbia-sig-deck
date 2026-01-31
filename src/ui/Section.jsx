import React from 'react';
import { GlassPanel } from '../components/GlassPanel';

export function Section({ eyebrow, title, subtitle, children, right, variant = 'plain' }) {
  const header = (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
      <div style={{ maxWidth: 920 }}>
        {eyebrow ? <div className="text-matrix-header">{eyebrow}</div> : null}
        {title ? (
          <div className="text-hero" style={{ fontSize: 52, marginBottom: 14 }}>
            {title}
          </div>
        ) : null}
        {subtitle ? (
          <div className="text-subhero" style={{ marginBottom: 0 }}>
            {subtitle}
          </div>
        ) : null}
      </div>
      {right ? <div style={{ flex: '0 0 auto' }}>{right}</div> : null}
    </div>
  );

  if (variant === 'panel') {
    return (
      <GlassPanel className="site-card" style={{ gap: 18 }}>
        {header}
        {children}
      </GlassPanel>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      {header}
      {children}
    </div>
  );
}

