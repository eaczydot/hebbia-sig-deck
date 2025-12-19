import React, { useState, useEffect } from 'react';
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
import { Slide23_ProductDemos } from './slides/Slide23_ProductDemos';
import { Slide18_References } from './slides/Slide18_References';

import { AnimatePresence } from 'framer-motion';

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
  Slide23_ProductDemos,
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

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = SLIDES.length;

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
      }
      if (e.key === 'ArrowLeft') {
        setCurrentSlide(prev => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides]);

  const CurrentSlideComponent = SLIDES[currentSlide];
  const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="deck-shell">
      <div className="deck-viewport-wrapper">
        <div className="deck-viewport">
          <div className="deck-stage">
            {/* Header Bar */}
            <HeaderBar />

            {/* Render Current Slide */}
            <AnimatePresence mode="wait">
              {CurrentSlideComponent
                ? <CurrentSlideComponent key={currentSlide} />
                : <SlidePlaceholder key={currentSlide} number={currentSlide + 1} />}
            </AnimatePresence>

            {/* Progress Bar */}
            <div
              className="progress-bar"
              style={{ width: `${progressPercent}%` }}
            />

            {/* Navigation Overlay (for dev/mouse users) */}
            <div className="deck-controls">
              <button onClick={prevSlide} className="deck-control-button">←</button>
              <button onClick={nextSlide} className="deck-control-button">→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
