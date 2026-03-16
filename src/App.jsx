import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { SlideContainer } from './components/SlideContainer';
import { HeaderBar } from './components/HeaderBar';
import { ActionToolbar } from './conference/ui/ActionToolbar';
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

import { AnimatePresence, motion } from 'framer-motion';

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

const ACTION_LABELS = {
  question: 'Question to host',
  comment: 'Comment to host',
  tag: 'Tag',
  private: 'Private note',
  queue: 'Queue item',
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [viewportScale, setViewportScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(true);
  const [toolbarVisible, setToolbarVisible] = useState(true);
  const [stores, setStores] = useState({
    notes: {
      private: [],
      toHost: [],
    },
    annotations: {
      shared: [],
    },
  });

  const totalSlides = SLIDES.length;
  const touchStart = useRef({ x: 0, y: 0 });

  const goToSlide = useCallback((delta) => {
    setCurrentSlide(prev => {
      const next = Math.max(0, Math.min(totalSlides - 1, prev + delta));
      if (next !== prev) {
        setDirection(delta);
      }
      return next;
    });
  }, [totalSlides]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isPresentationMode) return;
      if (e.key === 'ArrowRight' || e.key === ' ') goToSlide(1);
      if (e.key === 'ArrowLeft') goToSlide(-1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToSlide, isPresentationMode]);

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
    if (!isPresentationMode) return;
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 60) {
      if (deltaX < 0) {
        goToSlide(1);
      } else {
        goToSlide(-1);
      }
    }
  };

  const handleSendAction = ({ action, text, route, deferred }) => {
    const entry = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      action,
      actionLabel: ACTION_LABELS[action],
      author: 'you',
      text,
      deferred,
      read: false,
      createdAt: Date.now(),
    };

    setStores(prev => {
      if (route === 'notes.private') {
        return {
          ...prev,
          notes: {
            ...prev.notes,
            private: [entry, ...prev.notes.private],
          },
        };
      }

      if (route === 'notes.toHost') {
        return {
          ...prev,
          notes: {
            ...prev.notes,
            toHost: [entry, ...prev.notes.toHost],
          },
        };
      }

      return {
        ...prev,
        annotations: {
          ...prev.annotations,
          shared: [entry, ...prev.annotations.shared],
        },
      };
    });
  };

  const handleMarkRead = (id, route) => {
    setStores(prev => {
      if (route === 'notes.private') {
        return {
          ...prev,
          notes: {
            ...prev.notes,
            private: prev.notes.private.map(item => (item.id === id ? { ...item, read: true } : item)),
          },
        };
      }

      if (route === 'notes.toHost') {
        return {
          ...prev,
          notes: {
            ...prev.notes,
            toHost: prev.notes.toHost.map(item => (item.id === id ? { ...item, read: true } : item)),
          },
        };
      }

      return {
        ...prev,
        annotations: {
          ...prev.annotations,
          shared: prev.annotations.shared.map(item => (item.id === id ? { ...item, read: true } : item)),
        },
      };
    });
  };

  const slideComponent = useMemo(() => {
    const SlideComponent = SLIDES[currentSlide];
    if (!SlideComponent) {
      return <SlidePlaceholder number={currentSlide + 1} />;
    }

    return <SlideComponent />;
  }, [currentSlide]);

  const MotionDiv = motion.div;
  const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

  const slideVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 120 : -120,
      scale: 1.02,
      filter: 'blur(8px)'
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -120 : 120,
      scale: 0.98,
      filter: 'blur(8px)',
      transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] }
    })
  };

  return (
    <div
      className="app-shell"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: isPresentationMode ? 'pan-y' : 'auto' }}
    >
      <div
        className={`app-viewport${isMobile ? ' is-mobile' : ''}`}
        style={{ '--viewport-scale': viewportScale }}
      >
        <div className="grid-overlay" />

        <HeaderBar
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          isPresentationMode={isPresentationMode}
          onModeChange={() => setIsPresentationMode(prev => !prev)}
        />

        <div className="slides-stage">
          {isPresentationMode ? (
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
                {slideComponent}
              </MotionDiv>
            </AnimatePresence>
          ) : (
            <div className="slide-motion">
              {slideComponent}
            </div>
          )}
        </div>

        <div
          className="progress-bar"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <ActionToolbar
        currentUser="you"
        presenterPolicy={isPresentationMode ? 'toolbar suggested hidden during pitch' : 'toolbar encouraged during collaboration'}
        toolbarVisible={toolbarVisible}
        onToggleVisibility={() => setToolbarVisible(prev => !prev)}
        notes={stores.notes}
        annotations={stores.annotations}
        onSendAction={handleSendAction}
        onMarkRead={handleMarkRead}
      />
    </div>
  );
}

export default App;
