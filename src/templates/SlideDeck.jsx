import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SlideContainer } from '../components/SlideContainer';
import { ViewportShell } from './ViewportShell';

const SlidePlaceholder = ({ number }) => (
  <SlideContainer>
    <div className="text-hero">Slide {number}</div>
    <div className="text-cell-data">Implementation Pending...</div>
  </SlideContainer>
);

export function SlideDeck({
  slides,
  renderHeader,
  renderChrome,
  initialSlide = 0,
}) {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [direction, setDirection] = useState(0);
  const touchStart = useRef({ x: 0, y: 0 });
  const totalSlides = slides.length;

  const goToSlide = (delta) => {
    setCurrentSlide((prev) => {
      const next = Math.max(0, Math.min(totalSlides - 1, prev + delta));
      if (next !== prev) setDirection(delta);
      return next;
    });
  };

  const nextSlide = () => goToSlide(1);
  const prevSlide = () => goToSlide(-1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides]);

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event) => {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 60) {
      if (deltaX < 0) nextSlide();
      else prevSlide();
    }
  };

  const CurrentSlideComponent =
    slides[currentSlide] || (() => <SlidePlaceholder number={currentSlide + 1} />);

  const progressPercent = totalSlides > 0 ? ((currentSlide + 1) / totalSlides) * 100 : 0;

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
    <ViewportShell onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {renderHeader?.({ currentSlide, totalSlides })}
      {renderChrome?.({ currentSlide, totalSlides })}

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
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="progress-bar" style={{ width: `${progressPercent}%` }} />
    </ViewportShell>
  );
}

