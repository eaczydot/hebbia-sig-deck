import React from 'react';
import { Link } from 'react-router-dom';
import { ViewportShell } from './ViewportShell';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';

export default function SlideDeckTemplatePage() {
  return (
    <ViewportShell>
      <div className="site-header">
        <div className="site-header__left">
          <Link to="/" className="site-nav-link">
            Case Studies Library
          </Link>
        </div>
        <div className="site-header__right">TEMPLATE</div>
      </div>

      <SlideContainer>
        <div style={{ marginBottom: 40 }}>
          <div className="text-matrix-header">TEMPLATE // SLIDE DECK</div>
          <div className="text-hero" style={{ fontSize: 56 }}>
            Case study deck template
          </div>
          <div className="text-subhero" style={{ marginBottom: 0 }}>
            This template is the reusable engine behind each case study: scaling viewport, keyboard + swipe navigation,
            animated slide transitions, and a consistent visual shell.
          </div>
        </div>

        <div className="grid-2" style={{ flex: 1, alignItems: 'stretch' }}>
          <GlassPanel className="site-card" style={{ gap: 14 }}>
            <div className="text-matrix-header">HOW TO ADD A CASE STUDY</div>
            <div className="text-cell-data">
              <div style={{ marginBottom: 10 }}>
                1) Create a folder under <span className="u-font-mono">src/case-studies/&lt;your-id&gt;/</span>
              </div>
              <div style={{ marginBottom: 10 }}>
                2) Export a default component that renders <span className="u-font-mono">SlideDeck</span> with your slides
              </div>
              <div style={{ marginBottom: 10 }}>
                3) Add an entry to <span className="u-font-mono">src/site/registry.js</span>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel className="site-card" style={{ gap: 14 }}>
            <div className="text-matrix-header">WHAT YOU GET</div>
            <div className="text-cell-data">
              <div style={{ marginBottom: 10 }}>- Stable layout at 1920×1080 with responsive scaling</div>
              <div style={{ marginBottom: 10 }}>- Arrow keys / space to advance</div>
              <div style={{ marginBottom: 10 }}>- Swipe navigation on touch</div>
              <div style={{ marginBottom: 10 }}>- Progress bar and header slot</div>
              <div>- A consistent “library” home page to navigate between studies</div>
            </div>
          </GlassPanel>
        </div>
      </SlideContainer>
    </ViewportShell>
  );
}

