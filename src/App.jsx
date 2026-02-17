import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SlideContainer } from './components/SlideContainer';
import { HeaderBar } from './components/HeaderBar';
import { Slide1_Cover } from './slides/Slide1_Cover';
import { Slide2_ExecutiveSummary } from './slides/Slide2_ExecutiveSummary';
import { Slide3_StrategicContext } from './slides/Slide3_StrategicContext';
import { Slide4_TheConstraint } from './slides/Slide4_TheConstraint';
import { Slide5_ValueThesis } from './slides/Slide5_ValueThesis';
import { Slide6_IntroducingHebbia } from './slides/Slide6_IntroducingHebbia';
import { Slide7_HowItWorks } from './slides/Slide7_HowItWorks';
import { Slide8_UseCaseTrading } from './slides/Slide8_UseCaseTrading';
import { Slide9_UseCaseQuant } from './slides/Slide9_UseCaseQuant';
import { Slide10_UseCaseLegal } from './slides/Slide10_UseCaseLegal';
import { Slide11_ValueCapacity } from './slides/Slide11_ValueCapacity';
import { Slide12_ValueEfficiency } from './slides/Slide12_ValueEfficiency';
import { Slide13_ROI } from './slides/Slide13_ROI';
import { Slide14_PilotPlan } from './slides/Slide14_PilotPlan';
import { Slide15_Security } from './slides/Slide15_Security';
import { Slide16_Rollout } from './slides/Slide16_Rollout';
import { Slide17_Integration } from './slides/Slide17_Integration';
import { Slide18_Competitive } from './slides/Slide18_Competitive';
import { Slide19_Risks } from './slides/Slide19_Risks';
import { Slide20_Conclusion } from './slides/Slide20_Conclusion';
import { Slide21_ReasoningEngine } from './slides/Slide21_ReasoningEngine';
import { Slide22_MatrixDeepDive } from './slides/Slide22_MatrixDeepDive';
import { Slide18_References } from './slides/Slide18_References';
import { PresentationPip } from './conference/ui/PresentationPip';

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
  Slide3_StrategicContext,
  Slide4_TheConstraint,
  Slide5_ValueThesis,
  Slide6_IntroducingHebbia,
  Slide21_ReasoningEngine,
  Slide7_HowItWorks,
  Slide22_MatrixDeepDive,
  Slide15_Security,
  Slide8_UseCaseTrading,
  Slide9_UseCaseQuant,
  Slide10_UseCaseLegal,
  Slide11_ValueCapacity,
  Slide12_ValueEfficiency,
  Slide13_ROI,
  Slide14_PilotPlan,
  Slide16_Rollout,
  Slide17_Integration,
  Slide18_Competitive,
  Slide19_Risks,
  Slide20_Conclusion,
  Slide18_References,
];

const isPresentationHash = () => window.location.hash !== '#/site';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [independentSlide, setIndependentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [viewportScale, setViewportScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isPresentationPage, setIsPresentationPage] = useState(isPresentationHash);
  const [isPresentationLive] = useState(true);
  const totalSlides = SLIDES.length;
  const touchStart = useRef({ x: 0, y: 0 });

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
    if (isPresentationPage) {
      goToPresenterSlide(1);
      return;
    }
    goToIndependentSlide(1);
  }, [goToIndependentSlide, goToPresenterSlide, isPresentationPage]);

  const prevSlide = useCallback(() => {
    if (isPresentationPage) {
      goToPresenterSlide(-1);
      return;
    }
    goToIndependentSlide(-1);
  }, [goToIndependentSlide, goToPresenterSlide, isPresentationPage]);

  useEffect(() => {
    const handleHashChange = () => setIsPresentationPage(isPresentationHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') nextSlide();
      if (event.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    const updateScale = () => {
      const nextIsMobile = window.innerWidth < 900 || window.innerHeight < 600;
      const scale = Math.min(1, Math.min(window.innerWidth / 1920, window.innerHeight / 1080));
      setIsMobile(nextIsMobile);
      setViewportScale(nextIsMobile ? 1 : scale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

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

  const goToPresentation = () => {
    window.location.hash = '#/presentation';
    setIsPresentationPage(true);
  };

  const goToSite = () => {
    window.location.hash = '#/site';
    setIndependentSlide(currentSlide);
    setIsPresentationPage(false);
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

  return (
    <div className="app-shell" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{ touchAction: 'pan-y' }}>
      {isPresentationPage ? (
        <div className={`app-viewport${isMobile ? ' is-mobile' : ''}`} style={{ '--viewport-scale': viewportScale }}>
          <div className="grid-overlay" />
          <HeaderBar currentSlide={currentSlide} totalSlides={totalSlides} />
          <button type="button" className="app-site-nav-button" onClick={goToSite}>Browse independently</button>

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
                {presenterSlideContent}
              </MotionDiv>
            </AnimatePresence>
          </div>

          <div className="progress-bar" style={{ width: `${progressPercent}%` }} />
        </div>
      ) : (
        <main className="attendee-page" aria-label="Independent navigation view">
          <div className="independent-banner" role="status" aria-live="polite">
            You are browsing slides independently while the presenter stays live in PiP.
          </div>

          <div className="independent-nav">
            <button type="button" onClick={prevSlide}>Prev</button>
            <span>{String(independentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}</span>
            <button type="button" onClick={nextSlide}>Next</button>
            <button type="button" onClick={goToPresentation}>Live</button>
          </div>

          <div className="independent-slide-stage">
            {independentSlideContent}
          </div>
        </main>
      )}

      {isPresentationLive && !isPresentationPage && (
        <PresentationPip presenterName="Maya Chen" onGoLive={goToPresentation}>
          <div className="pip-slide-preview">
            {presenterSlideContent}
          </div>
        </PresentationPip>
      )}
    </div>
  );
}

export default App;
