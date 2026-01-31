import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlideContainer } from '../../components/SlideContainer';
import { GlassPanel } from '../../components/GlassPanel';
import { SlideDeck } from '../../templates/SlideDeck';

function CaseStudyHeader({ currentSlide, totalSlides }) {
  return (
    <div className="site-header">
      <div className="site-header__left">
        <Link to="/" className="site-nav-link">
          Case Studies Library
        </Link>
        <span className="u-font-mono" style={{ color: 'var(--txt-dim)' }}>
          //
        </span>
        <span>CASE STUDY: ACME (EXAMPLE)</span>
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
        <div className="text-matrix-header">CASE STUDY // EXAMPLE</div>
        <div className="text-hero" style={{ fontSize: 56 }}>
          Acme Corp
        </div>
        <div className="text-subhero" style={{ marginBottom: 0 }}>
          Placeholder case study to prove multi-case-study navigation. Replace this with your real deck.
        </div>
      </div>

      <div className="grid-2" style={{ flex: 1 }}>
        <GlassPanel className="site-card" style={{ gap: 12 }}>
          <div className="text-matrix-header">WHAT THIS IS</div>
          <div className="text-cell-data">
            A minimal, working case study entry registered in <span className="u-font-mono">src/site/registry.js</span>.
          </div>
        </GlassPanel>
        <GlassPanel className="site-card" style={{ gap: 12 }}>
          <div className="text-matrix-header">HOW TO REPLACE</div>
          <div className="text-cell-data">
            Swap in real slides, or point this entry at your own case study component.
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
        <div className="text-matrix-header">SECTION</div>
        <div className="text-hero" style={{ fontSize: 48 }}>
          Problem → Solution → Outcome
        </div>
      </div>

      <div className="split-50-50" style={{ flex: 1 }}>
        <GlassPanel className="site-card" style={{ gap: 12 }}>
          <div className="text-matrix-header">PROBLEM</div>
          <div className="text-cell-data">
            Describe the bottleneck, who it impacts, and why it matters now.
          </div>
        </GlassPanel>
        <GlassPanel className="site-card" style={{ gap: 12 }}>
          <div className="text-matrix-header">SOLUTION</div>
          <div className="text-cell-data">
            Show the template/approach, with a concrete workflow and measurable output.
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
        <div className="text-matrix-header">END</div>
        <div className="text-hero" style={{ fontSize: 48 }}>
          Next steps
        </div>
      </div>

      <GlassPanel className="site-card" style={{ gap: 12, maxWidth: 980 }}>
        <div className="text-matrix-header">CALL TO ACTION</div>
        <div className="text-cell-data">
          Add a pilot plan, integration notes, and links to supporting docs. Keep this deck short and scannable.
        </div>
      </GlassPanel>
    </SlideContainer>
  );
}

const SLIDES = [Slide1, Slide2, Slide3];

export default function ExampleCaseStudy() {
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
        <CaseStudyHeader currentSlide={currentSlide} totalSlides={totalSlides} />
      )}
    />
  );
}

