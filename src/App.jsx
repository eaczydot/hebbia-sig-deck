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
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// Prospects Section
import { Slide_LCattertonProspect } from './slides/prospects/Slide_LCattertonProspect';

// Mobile Navigation Component
const MobileNavigation = ({ currentSlide, totalSlides, onPrev, onNext, onGoTo, isMobile }) => {
  if (!isMobile) return null;

  // Show a subset of dots for large slide counts
  const maxDots = 7;
  const showDots = totalSlides <= maxDots;
  
  return (
    <>
      {/* Navigation Arrows */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '16px',
        right: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        pointerEvents: 'none'
      }}>
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: currentSlide === 0 ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.8)',
            border: '1px solid var(--line-mid)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: currentSlide === 0 ? 'var(--txt-dim)' : 'var(--txt-pri)',
            cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
            pointerEvents: 'auto',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            transition: 'all 0.2s ease'
          }}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Dot Navigation or Slide Counter */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 16px',
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '20px',
          border: '1px solid var(--line-mid)',
          pointerEvents: 'auto'
        }}>
          {showDots ? (
            // Show dots for small slide counts
            Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => onGoTo(i)}
                style={{
                  width: currentSlide === i ? '12px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: currentSlide === i ? 'var(--blue)' : 'var(--line-mid)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: currentSlide === i ? '0 0 8px var(--blue)' : 'none'
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))
          ) : (
            // Show counter for large slide counts
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--txt-sec)'
            }}>
              {currentSlide + 1} / {totalSlides}
            </span>
          )}
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: currentSlide === totalSlides - 1 ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.8)',
            border: '1px solid var(--line-mid)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: currentSlide === totalSlides - 1 ? 'var(--txt-dim)' : 'var(--txt-pri)',
            cursor: currentSlide === totalSlides - 1 ? 'not-allowed' : 'pointer',
            pointerEvents: 'auto',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            transition: 'all 0.2s ease'
          }}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Swipe hint (shows once) */}
      <SwipeHint />
    </>
  );
};

// Swipe hint component
const SwipeHint = () => {
  const [show, setShow] = useState(() => {
    // Initialize state based on sessionStorage
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('swipeHintSeen');
    }
    return false;
  });

  useEffect(() => {
    if (show) {
      sessionStorage.setItem('swipeHintSeen', 'true');
      const timer = setTimeout(() => setShow(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '80px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '8px 16px',
        background: 'rgba(0,0,0,0.8)',
        borderRadius: '16px',
        fontSize: '12px',
        color: 'var(--txt-sec)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        animation: 'fadeIn 0.3s ease'
      }}
    >
      <span>←</span>
      <span>Swipe to navigate</span>
      <span>→</span>
    </div>
  );
};

// Placeholder slides until implemented
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
  Slide21_ReasoningEngine, // New Deep Dive
  Slide7_HowItWorks,
  Slide22_MatrixDeepDive, // New Deep Dive
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
  // Prospects Section - L-Catterton
  Slide_LCattertonProspect,
  Slide18_References,
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [viewportScale, setViewportScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const totalSlides = SLIDES.length;
  const touchStart = useRef({ x: 0, y: 0, time: 0 });
  const isScrolling = useRef(null);

  const goToSlide = useCallback((delta) => {
    setCurrentSlide(prev => {
      const next = Math.max(0, Math.min(totalSlides - 1, prev + delta));
      if (next !== prev) {
        setDirection(delta);
      }
      return next;
    });
  }, [totalSlides]);

  const goToSlideIndex = useCallback((index) => {
    const clampedIndex = Math.max(0, Math.min(totalSlides - 1, index));
    setDirection(clampedIndex > currentSlide ? 1 : -1);
    setCurrentSlide(clampedIndex);
  }, [totalSlides, currentSlide]);

  const nextSlide = useCallback(() => goToSlide(1), [goToSlide]);
  const prevSlide = useCallback(() => goToSlide(-1), [goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
      // Page Up/Down for quick navigation
      if (e.key === 'PageDown') {
        e.preventDefault();
        goToSlide(5);
      }
      if (e.key === 'PageUp') {
        e.preventDefault();
        goToSlide(-5);
      }
      // Home/End for first/last
      if (e.key === 'Home') {
        e.preventDefault();
        goToSlideIndex(0);
      }
      if (e.key === 'End') {
        e.preventDefault();
        goToSlideIndex(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, goToSlideIndex, totalSlides]);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      // More nuanced mobile detection
      const nextIsMobile = width < 900 || height < 600 || 
        ('ontouchstart' in window && width < 1024);
      const scale = Math.min(1, Math.min(width / 1920, height / 1080));
      setIsMobile(nextIsMobile);
      setViewportScale(nextIsMobile ? 1 : scale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    window.addEventListener('orientationchange', updateScale);
    return () => {
      window.removeEventListener('resize', updateScale);
      window.removeEventListener('orientationchange', updateScale);
    };
  }, []);

  const handleTouchStart = useCallback((event) => {
    const touch = event.touches[0];
    touchStart.current = { 
      x: touch.clientX, 
      y: touch.clientY,
      time: Date.now()
    };
    isScrolling.current = null;
  }, []);

  const handleTouchMove = useCallback((event) => {
    if (!touchStart.current.x || !touchStart.current.y) return;
    
    const touch = event.touches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    
    // Determine scroll direction on first move
    if (isScrolling.current === null) {
      isScrolling.current = Math.abs(deltaY) > Math.abs(deltaX);
    }
  }, []);

  const handleTouchEnd = useCallback((event) => {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    const deltaTime = Date.now() - touchStart.current.time;
    
    // Calculate velocity for swipe detection
    const velocityX = Math.abs(deltaX) / deltaTime;
    
    // Swipe detection: horizontal movement, not scrolling, sufficient distance or velocity
    const minSwipeDistance = 50;
    const minSwipeVelocity = 0.3;
    
    if (!isScrolling.current && 
        Math.abs(deltaX) > Math.abs(deltaY) && 
        (Math.abs(deltaX) > minSwipeDistance || velocityX > minSwipeVelocity)) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    // Reset
    touchStart.current = { x: 0, y: 0, time: 0 };
    isScrolling.current = null;
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = SLIDES[currentSlide];
  const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

  // Reduced motion for mobile to improve performance
  const slideVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: isMobile ? (dir > 0 ? 60 : -60) : (dir > 0 ? 120 : -120),
      scale: isMobile ? 1 : 1.02,
      filter: isMobile ? 'none' : 'blur(8px)'
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { 
        duration: isMobile ? 0.4 : 0.8, 
        ease: [0.19, 1, 0.22, 1] 
      }
    },
    exit: (dir) => ({
      opacity: 0,
      x: isMobile ? (dir > 0 ? -60 : 60) : (dir > 0 ? -120 : 120),
      scale: isMobile ? 1 : 0.98,
      filter: isMobile ? 'none' : 'blur(8px)',
      transition: { 
        duration: isMobile ? 0.3 : 0.6, 
        ease: [0.19, 1, 0.22, 1] 
      }
    })
  };

  return (
    <div
      className="app-shell"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: isMobile ? 'pan-y pinch-zoom' : 'auto' }}
    >
      <div
        className={`app-viewport${isMobile ? ' is-mobile' : ''}`}
        style={{ '--viewport-scale': viewportScale }}
      >
        <div className="grid-overlay" />

        {/* Header Bar */}
        <HeaderBar currentSlide={currentSlide} totalSlides={totalSlides} />

        {/* Render Current Slide */}
        <div className="slides-stage">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              className="slide-motion"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {CurrentSlideComponent ? <CurrentSlideComponent /> : <SlidePlaceholder number={currentSlide + 1} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div
          className="progress-bar"
          style={{ width: `${progressPercent}%` }}
        />

        {/* Mobile Navigation */}
        <MobileNavigation
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onPrev={prevSlide}
          onNext={nextSlide}
          onGoTo={goToSlideIndex}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
}

export default App;
