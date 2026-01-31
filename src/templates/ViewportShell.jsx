import React, { useEffect, useState } from 'react';

export function ViewportShell({
  children,
  onTouchStart,
  onTouchEnd,
  shellStyle,
  shellClassName = '',
}) {
  const [viewportScale, setViewportScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div
      className={`app-shell ${shellClassName}`.trim()}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{ touchAction: 'pan-y', ...shellStyle }}
    >
      <div
        className={`app-viewport${isMobile ? ' is-mobile' : ''}`}
        style={{ '--viewport-scale': viewportScale }}
      >
        <div className="grid-overlay" />
        {children}
      </div>
    </div>
  );
}

