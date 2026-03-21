import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SlideContainer } from './components/SlideContainer';
import { HeaderBar } from './components/HeaderBar';
import { ModeToggle } from './components/ModeToggle';
import { useAppMode, APP_MODES } from './hooks/useAppMode';
import { Slide1_Cover } from './slides/Slide1_Cover';
import { Slide2_ExecutiveSummary } from './slides/Slide2_ExecutiveSummary';
import { Slide3_StrategicContext } from './slides/Slide3_StrategicContext';
import { Slide4_TheConstraint } from './slides/Slide4_TheConstraint';
import { Slide6_IntroducingHebbia } from './slides/Slide6_IntroducingHebbia';
import { Slide7_HowItWorks } from './slides/Slide7_HowItWorks';
import { Slide8_UseCaseTrading } from './slides/Slide8_UseCaseTrading';
import { Slide9_UseCaseQuant } from './slides/Slide9_UseCaseQuant';
import { Slide11_ValueCapacity } from './slides/Slide11_ValueCapacity';
import { Slide13_ROI } from './slides/Slide13_ROI';
import { Slide14_PilotPlan } from './slides/Slide14_PilotPlan';
import { Slide15_Security } from './slides/Slide15_Security';
import { Slide17_Integration } from './slides/Slide17_Integration';
import { Slide18_Competitive } from './slides/Slide18_Competitive';
import { Slide20_Conclusion } from './slides/Slide20_Conclusion';
import { Slide21_ReasoningEngine } from './slides/Slide21_ReasoningEngine';
import { PresentationPip } from './conference/ui/PresentationPip';
import { BubbleCanvas } from './conference/ui/BubbleCanvas';
import { ControlBar } from './conference/ui/ControlBar';
import { QuestionDrawer } from './components/QuestionDrawer';

import { AnimatePresence, motion } from 'framer-motion';

const MotionDiv = motion.div;

const SlidePlaceholder = ({ number }) => (
  <SlideContainer>
    <div className="text-hero">Slide {number}</div>
    <div className="text-cell-data">Implementation Pending...</div>
  </SlideContainer>
);

const SLIDES = [
  Slide1_Cover,
  Slide2_ExecutiveSummary,
  Slide4_TheConstraint,
  Slide3_StrategicContext,
  Slide6_IntroducingHebbia,
  Slide7_HowItWorks,
  Slide8_UseCaseTrading,
  Slide9_UseCaseQuant,
  Slide21_ReasoningEngine,
  Slide11_ValueCapacity,
  Slide15_Security,
  Slide18_Competitive,
  Slide13_ROI,
  Slide17_Integration,
  Slide14_PilotPlan,
  Slide20_Conclusion,
];

const CONFERENCE_PARTICIPANTS = [
  { id: 'p1', name: 'Alex Morgan', cameraOn: true },
  { id: 'p2', name: 'Priya Shah', cameraOn: false },
  { id: 'p3', name: 'Jordan Lee', cameraOn: true },
  { id: 'p4', name: 'Morgan Chen', cameraOn: false },
];

const ROOM_ID = 'deck-room';

const getLocalViewerId = () => {
  const key = 'conference:local-viewer-id';
  const existing = window.localStorage.getItem(key);
  if (existing) {
    return existing;
  }

  const next = `viewer-${Math.random().toString(36).slice(2, 9)}`;
  window.localStorage.setItem(key, next);
  return next;
};

function App() {
  const { mode, setMode } = useAppMode();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [independentSlide, setIndependentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [viewportScale, setViewportScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isBrowsingIndependently, setIsBrowsingIndependently] = useState(false);
  const totalSlides = SLIDES.length;
  const touchStart = useRef({ x: 0, y: 0 });
  const [viewerId, setViewerId] = useState('viewer-anon');

  const clampSlide = useCallback(index => Math.max(0, Math.min(totalSlides - 1, index)), [totalSlides]);

  const goToPresenterSlide = useCallback((delta) => {
    setCurrentSlide(prev => {
      const next = clampSlide(prev + delta);
      if (next !== prev) {
        setDirection(delta);
      }
      return next;
    });
  }, [clampSlide]);

  const goToIndependentSlide = useCallback((delta) => {
    setIndependentSlide(prev => clampSlide(prev + delta));
  }, [clampSlide]);

  const nextSlide = useCallback(() => {
    if (isBrowsingIndependently) {
      goToIndependentSlide(1);
      return;
    }
    goToPresenterSlide(1);
  }, [goToIndependentSlide, goToPresenterSlide, isBrowsingIndependently]);

  const prevSlide = useCallback(() => {
    if (isBrowsingIndependently) {
      goToIndependentSlide(-1);
      return;
    }
    goToPresenterSlide(-1);
  }, [goToIndependentSlide, goToPresenterSlide, isBrowsingIndependently]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') nextSlide();
      if (event.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    setViewerId(getLocalViewerId());
  }, []);

  useEffect(() => {
    const updateScale = () => {
      const nextIsMobile = window.innerWidth < 900 || window.innerHeight < 600;
      const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
      setIsMobile(nextIsMobile);
      setViewportScale(nextIsMobile ? 1 : scale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  // Reset independent browsing when switching modes
  useEffect(() => {
    setIsBrowsingIndependently(false);
  }, [mode]);

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event) => {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 60) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const PresenterSlideComponent = SLIDES[currentSlide];
  const IndependentSlideComponent = SLIDES[independentSlide];
  const presenterSlideContent = PresenterSlideComponent
    ? <PresenterSlideComponent />
    : <SlidePlaceholder number={currentSlide + 1} />;
  const independentSlideContent = IndependentSlideComponent
    ? <IndependentSlideComponent />
    : <SlidePlaceholder number={independentSlide + 1} />;

  const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

  const startBrowsingIndependently = () => {
    setIndependentSlide(currentSlide);
    setIsBrowsingIndependently(true);
  };

  const returnToLive = () => {
    setIsBrowsingIndependently(false);
  };

  const slideVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 120 : -120,
      scale: 1.02,
      filter: 'blur(8px)',
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] },
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -120 : 120,
      scale: 0.98,
      filter: 'blur(8px)',
      transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] },
    }),
  };

  const renderSlideViewport = (slideContent, slideIndex) => (
    <div className={`app-viewport${isMobile ? ' is-mobile' : ''}`} style={{ '--viewport-scale': viewportScale }}>
      <div className="grid-overlay" />
      <HeaderBar currentSlide={slideIndex} totalSlides={totalSlides} />

      <div className="slides-stage">
        <AnimatePresence mode="wait" custom={direction}>
          <MotionDiv
            key={slideIndex}
            className="slide-motion"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {slideContent}
          </MotionDiv>
        </AnimatePresence>
      </div>

      <div className="progress-bar" style={{ width: `${progressPercent}%` }} />
    </div>
  );

  return (
    <div className="app-shell" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{ touchAction: 'pan-y' }}>
      <ModeToggle mode={mode} onChangeMode={setMode} />

      {/* ===== PRE-MEETING MODE ===== */}
      {mode === APP_MODES.PREVIEW && (
        <>
          {renderSlideViewport(presenterSlideContent, currentSlide)}
          <QuestionDrawer currentSlide={currentSlide} deckId="stedi-deck-v1" />
        </>
      )}

      {/* ===== MEETING MODE ===== */}
      {mode === APP_MODES.MEETING && (
        <>
          {!isBrowsingIndependently ? (
            <>
              {renderSlideViewport(presenterSlideContent, currentSlide)}
              <button type="button" className="app-site-nav-button" onClick={startBrowsingIndependently}>
                Browse independently
              </button>
            </>
          ) : (
            <main className="attendee-page" aria-label="Independent navigation view">
              <div className="independent-banner" role="status" aria-live="polite">
                You are browsing slides independently while the presenter stays live in PiP.
              </div>

              <div className="independent-nav">
                <button type="button" onClick={prevSlide}>Prev</button>
                <span>{String(independentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}</span>
                <button type="button" onClick={nextSlide}>Next</button>
                <button type="button" onClick={returnToLive}>Live</button>
              </div>

              <div className="independent-slide-stage">
                {independentSlideContent}
              </div>
            </main>
          )}

          {isBrowsingIndependently && (
            <PresentationPip presenterName="Stedi Sales Engineer" onGoLive={returnToLive}>
              <div className="pip-slide-preview">
                {presenterSlideContent}
              </div>
            </PresentationPip>
          )}

          <BubbleCanvas
            participants={CONFERENCE_PARTICIPANTS}
            roomId={ROOM_ID}
            userId={viewerId}
            isMobile={isMobile}
          />
          <ControlBar />
        </>
      )}

      {/* ===== REVIEW MODE ===== */}
      {mode === APP_MODES.REVIEW && (
        <ReviewModePlaceholder
          slides={SLIDES}
          currentSlide={currentSlide}
          onSlideChange={setCurrentSlide}
          totalSlides={totalSlides}
          presenterSlideContent={presenterSlideContent}
          direction={direction}
          slideVariants={slideVariants}
          isMobile={isMobile}
          viewportScale={viewportScale}
          progressPercent={progressPercent}
        />
      )}
    </div>
  );
}

// Temporary placeholder until ReviewMode component is built in Phase 7
function ReviewModePlaceholder({ slides, currentSlide, onSlideChange, totalSlides, presenterSlideContent, direction, slideVariants, isMobile, viewportScale, progressPercent }) {
  const SlideComponent = slides[currentSlide];
  const slideContent = SlideComponent ? <SlideComponent /> : null;

  return (
    <div className="review-mode">
      <div className="review-slide-panel">
        <div className={`app-viewport${isMobile ? ' is-mobile' : ''}`} style={{ '--viewport-scale': viewportScale }}>
          <div className="grid-overlay" />
          <div className="slides-stage">
            <AnimatePresence mode="wait" custom={direction}>
              <MotionDiv
                key={currentSlide}
                className="slide-motion"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {slideContent}
              </MotionDiv>
            </AnimatePresence>
          </div>
          <div className="progress-bar" style={{ width: `${progressPercent}%` }} />
        </div>

        <div className="review-slide-nav">
          <button type="button" onClick={() => onSlideChange(Math.max(0, currentSlide - 1))}>Prev</button>
          <span className="review-slide-counter">
            {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </span>
          <button type="button" onClick={() => onSlideChange(Math.min(totalSlides - 1, currentSlide + 1))}>Next</button>
        </div>
      </div>

      <div className="review-notes-panel">
        <div className="review-section">
          <h3 className="review-section-title">Meeting Summary</h3>
          <p className="review-placeholder-text">AI summary will appear here after meeting processing.</p>
        </div>

        <div className="review-section">
          <h3 className="review-section-title">Slide Notes</h3>
          <textarea
            className="review-notes-textarea"
            placeholder="Add your notes for this slide..."
            key={currentSlide}
          />
        </div>

        <div className="review-section">
          <h3 className="review-section-title">Transcript</h3>
          <p className="review-placeholder-text">Transcript not yet available.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
