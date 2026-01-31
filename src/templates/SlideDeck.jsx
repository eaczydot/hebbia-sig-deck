import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SlideContainer } from '../components/SlideContainer';
import { ViewportShell } from './ViewportShell';

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

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
  onSlideChange,
}) {
  const totalSlides = slides.length;
  const clampIndex = useCallback(
    (idx) => clamp(idx, 0, Math.max(0, totalSlides - 1)),
    [totalSlides],
  );

  const [currentSlide, setCurrentSlide] = useState(() => clampIndex(initialSlide));
  const [direction, setDirection] = useState(0);
  const touchStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setCurrentSlide(clampIndex(initialSlide));
  }, [initialSlide, clampIndex]);

  useEffect(() => {
    onSlideChange?.(currentSlide);
  }, [currentSlide, onSlideChange]);

  const goToSlide = useCallback((delta) => {
    setCurrentSlide((prev) => {
      const next = clampIndex(prev + delta);
      if (next !== prev) setDirection(delta);
      return next;
    });
  }, [clampIndex]);

  const nextSlide = useCallback(() => goToSlide(1), [goToSlide]);
  const prevSlide = useCallback(() => goToSlide(-1), [goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = useCallback((event) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleTouchEnd = useCallback((event) => {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 60) {
      if (deltaX < 0) nextSlide();
      else prevSlide();
    }
  }, [nextSlide, prevSlide]);

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

