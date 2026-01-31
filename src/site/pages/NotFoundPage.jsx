import React from 'react';
import { Link } from 'react-router-dom';
import { ViewportShell } from '../../templates/ViewportShell';
import { SlideContainer } from '../../components/SlideContainer';
import { GlassPanel } from '../../components/GlassPanel';

export default function NotFoundPage({ title = 'Not found', description = 'That page does not exist.' }) {
  return (
    <ViewportShell>
      <div className="site-header">
        <div className="site-header__left">
          <Link to="/" className="site-nav-link">
            Case Studies Library
          </Link>
        </div>
        <div className="site-header__right">404</div>
      </div>

      <SlideContainer>
        <div style={{ marginBottom: 40 }}>
          <div className="text-matrix-header">ERROR</div>
          <div className="text-hero" style={{ fontSize: 56 }}>
            {title}
          </div>
          <div className="text-subhero" style={{ marginBottom: 0 }}>
            {description}
          </div>
        </div>

        <GlassPanel className="site-card" style={{ gap: 14, maxWidth: 820 }}>
          <div className="text-matrix-header">NEXT</div>
          <div className="text-cell-data">
            Go back to the library to pick a template or case study.
          </div>
          <div>
            <Link to="/" className="site-button">
              Back to library
            </Link>
          </div>
        </GlassPanel>
      </SlideContainer>
    </ViewportShell>
  );
}

