import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SlideDeck } from './SlideDeck';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';

function DeckHeader({ currentSlide, totalSlides }) {
  return (
    <div className="site-header">
      <div className="site-header__left">
        <Link to="/solutions/ai-for-credit-investing" className="site-nav-link">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <ArrowLeft size={14} /> AI for Credit Investing
          </span>
        </Link>
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
        <div className="text-matrix-header">TEMPLATE DECK // CREDIT</div>
        <div className="text-hero" style={{ fontSize: 64 }}>
          AI for Credit Investing
        </div>
        <div className="text-subhero" style={{ marginBottom: 0 }}>
          Concept deck template with original copy. Replace with your firm’s positioning, proof points, and approved
          assets.
        </div>
      </div>

      <div className="grid-2" style={{ flex: 1 }}>
        <GlassPanel className="site-card" style={{ gap: 10 }}>
          <div className="text-matrix-header">GOAL</div>
          <div className="text-cell-data">
            Build a repeatable diligence engine: ingest documents, extract key terms/risks, and produce decision-ready
            outputs with citations.
          </div>
        </GlassPanel>
        <GlassPanel className="site-card" style={{ gap: 10 }}>
          <div className="text-matrix-header">AUDIENCE</div>
          <div className="text-cell-data">
            Credit teams doing screening, covenant analysis, monitoring, and memo drafting.
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
        <div className="text-matrix-header">VALUE</div>
        <div className="text-hero" style={{ fontSize: 48 }}>
          From documents → decisions
        </div>
        <div className="text-subhero" style={{ marginBottom: 0 }}>
          The pitch: reduce time-to-memo, increase coverage, and improve verifiability.
        </div>
      </div>

      <div className="grid-3" style={{ flex: 1 }}>
        <GlassPanel className="site-card" style={{ gap: 10 }}>
          <div className="text-matrix-header">SPEED</div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>Time-to-answer</div>
          <div className="text-cell-data" style={{ color: 'var(--txt-sec)' }}>
            Standardize screening and first-pass diligence without losing rigor.
          </div>
        </GlassPanel>
        <GlassPanel className="site-card" style={{ gap: 10 }}>
          <div className="text-matrix-header">QUALITY</div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>Better memos</div>
          <div className="text-cell-data" style={{ color: 'var(--txt-sec)' }}>
            Consistent structure and terminology across deals and analysts.
          </div>
        </GlassPanel>
        <GlassPanel className="site-card" style={{ gap: 10 }}>
          <div className="text-matrix-header">VERIFY</div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>Citations</div>
          <div className="text-cell-data" style={{ color: 'var(--txt-sec)' }}>
            Link claims back to source spans for faster review and governance.
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
        <div className="text-matrix-header">EXAMPLES</div>
        <div className="text-hero" style={{ fontSize: 48 }}>
          What it can produce
        </div>
      </div>

      <div className="split-50-50" style={{ flex: 1 }}>
        <GlassPanel className="site-card" style={{ gap: 10 }}>
          <div className="text-matrix-header">OUTPUT A</div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>Covenant summary pack</div>
          <div className="text-cell-data" style={{ color: 'var(--txt-sec)' }}>
            Net leverage tests, restricted payments, investments, asset sales, and change of control—normalized with
            citations.
          </div>
          <div className="text-cell-data">Includes: definitions, carveouts, baskets, and “watchlist” items.</div>
        </GlassPanel>

        <GlassPanel className="site-card" style={{ gap: 10 }}>
          <div className="text-matrix-header">OUTPUT B</div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>IC memo draft</div>
          <div className="text-cell-data" style={{ color: 'var(--txt-sec)' }}>
            Thesis, downside case, key risks, monitoring plan, and open diligence questions.
          </div>
          <div className="text-cell-data">Includes: a citation appendix and red-flag table.</div>
        </GlassPanel>
      </div>
    </SlideContainer>
  );
}

const SLIDES = [Slide1, Slide2, Slide3];

export default function CreditInvestingDeckTemplate() {
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
        <DeckHeader currentSlide={currentSlide} totalSlides={totalSlides} />
      )}
    />
  );
}

