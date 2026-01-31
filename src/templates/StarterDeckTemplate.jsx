import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { SlideDeck } from './SlideDeck';

function TemplateHeader({ currentSlide, totalSlides }) {
  return (
    <div className="site-header">
      <div className="site-header__left">
        <Link to="/" className="site-nav-link">
          Case Studies Library
        </Link>
        <span className="u-font-mono" style={{ color: 'var(--txt-dim)' }}>
          //
        </span>
        <span>TEMPLATE: STARTER DECK</span>
      </div>
      <div className="site-header__right">
        <span style={{ color: 'var(--txt-sec)' }}>
          {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}

function Slide1() {
  return (
    <SlideContainer>
      <div style={{ marginBottom: 40 }}>
        <div className="text-matrix-header">TEMPLATE // STARTER DECK</div>
        <div className="text-hero" style={{ fontSize: 56 }}>
          Copy-me case study deck
        </div>
        <div className="text-subhero" style={{ marginBottom: 0 }}>
          This is a minimal 3-slide starter. Duplicate it into a new folder under <span className="u-font-mono">src/case-studies/</span>,
          register it, and swap in your content.
        </div>
      </div>

      <div className="grid-2" style={{ flex: 1 }}>
        <GlassPanel className="site-card" style={{ gap: 12 }}>
          <div className="text-matrix-header">FILES TO COPY</div>
          <div className="text-cell-data">
            <div style={{ marginBottom: 10 }}>
              - <span className="u-font-mono">src/templates/StarterDeckTemplate.jsx</span> (as a starting point)
            </div>
            <div style={{ marginBottom: 10 }}>
              - Add your case study entry in <span className="u-font-mono">src/site/registry.js</span>
            </div>
            <div>
              - Optional: create separate slide files under <span className="u-font-mono">src/case-studies/&lt;id&gt;/slides/</span>
            </div>
          </div>
        </GlassPanel>

        <GlassPanel className="site-card" style={{ gap: 12 }}>
          <div className="text-matrix-header">NAVIGATION</div>
          <div className="text-cell-data">
            <div style={{ marginBottom: 10 }}>- Arrow keys or Space: next slide</div>
            <div style={{ marginBottom: 10 }}>- Left arrow: previous slide</div>
            <div style={{ marginBottom: 10 }}>- Swipe: navigate on touch devices</div>
            <div>- Shareable deep links: <span className="u-font-mono">?slide=2</span></div>
          </div>
        </GlassPanel>
      </div>
    </SlideContainer>
  );
}

function Slide2() {
  return (
    <SlideContainer>
      <div style={{ marginBottom: 40 }}>
        <div className="text-matrix-header">CONTENT BLOCKS</div>
        <div className="text-hero" style={{ fontSize: 48 }}>
          Use existing design system components
        </div>
      </div>

      <div className="grid-2" style={{ flex: 1 }}>
        <GlassPanel className="site-card" style={{ gap: 12 }}>
          <div className="text-matrix-header">LAYOUT</div>
          <div className="text-cell-data">
            - Use <span className="u-font-mono">SlideContainer</span> for consistent padding
            <br />
            - Use grid utilities (e.g. <span className="u-font-mono">grid-2</span>, <span className="u-font-mono">split-50-50</span>)
            <br />
            - Use <span className="u-font-mono">GlassPanel</span> for cards and sections
          </div>
        </GlassPanel>

        <GlassPanel className="site-card" style={{ gap: 12 }}>
          <div className="text-matrix-header">ASSETS</div>
          <div className="text-cell-data">
            Put shared images/videos in <span className="u-font-mono">public/</span> and reference them like:
            <br />
            <span className="u-font-mono">/my-image.png</span>
            <br />
            <br />
            Or import via <span className="u-font-mono">src/assets/</span> for bundling.
          </div>
        </GlassPanel>
      </div>
    </SlideContainer>
  );
}

function Slide3() {
  return (
    <SlideContainer>
      <div style={{ marginBottom: 40 }}>
        <div className="text-matrix-header">CHECKLIST</div>
        <div className="text-hero" style={{ fontSize: 48 }}>
          Ship a new case study
        </div>
        <div className="text-subhero" style={{ marginBottom: 0 }}>
          Minimal workflow to add another deck to the site.
        </div>
      </div>

      <GlassPanel className="site-card" style={{ gap: 12, maxWidth: 980 }}>
        <div className="text-matrix-header">DO THIS</div>
        <div className="text-cell-data">
          1) Create <span className="u-font-mono">src/case-studies/&lt;id&gt;/&lt;CaseStudy&gt;.jsx</span>
          <br />
          2) Export default component that renders <span className="u-font-mono">SlideDeck</span>
          <br />
          3) Add registry entry in <span className="u-font-mono">src/site/registry.js</span>
          <br />
          4) Confirm routes: <span className="u-font-mono">#/case-studies/&lt;id&gt;</span>
        </div>
      </GlassPanel>
    </SlideContainer>
  );
}

const SLIDES = [Slide1, Slide2, Slide3];

export default function StarterDeckTemplate() {
  const [searchParams, setSearchParams] = useSearchParams();
  const slideParam = Number.parseInt(searchParams.get('slide') ?? '1', 10);
  const initialSlide = Number.isFinite(slideParam) ? slideParam - 1 : 0;

  return (
    <SlideDeck
      slides={SLIDES}
      initialSlide={initialSlide}
      onSlideChange={(idx) => {
        const desired = String(idx + 1);
        if (searchParams.get('slide') === desired) return;
        const next = new URLSearchParams(searchParams);
        next.set('slide', desired);
        setSearchParams(next, { replace: true });
      }}
      renderHeader={({ currentSlide, totalSlides }) => (
        <TemplateHeader currentSlide={currentSlide} totalSlides={totalSlides} />
      )}
    />
  );
}

