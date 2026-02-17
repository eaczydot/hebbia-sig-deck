import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './PresentationPip.css';

const LAYOUT_KEY = 'conference.presentationPip.layout';
const MIN_WIDTH = 300;
const MIN_HEIGHT = 188;
const KEYBOARD_MOVE_STEP = 24;
const KEYBOARD_RESIZE_STEP = 24;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const getDefaultLayout = (viewportWidth = window.innerWidth, viewportHeight = window.innerHeight) => ({
  x: Math.max(16, viewportWidth - 420),
  y: Math.max(16, viewportHeight - 260),
  width: 380,
  height: 214,
  mode: 'dock',
  closed: false,
});

const loadLayout = () => {
  try {
    const raw = window.localStorage.getItem(LAYOUT_KEY);
    if (!raw) return getDefaultLayout();
    return { ...getDefaultLayout(), ...JSON.parse(raw) };
  } catch {
    return getDefaultLayout();
  }
};

export function PresentationPip({ presenterName = 'Presenter', onGoLive, children }) {
  const [layout, setLayout] = useState(loadLayout);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const panelRef = useRef(null);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    window.localStorage.setItem(LAYOUT_KEY, JSON.stringify(layout));
  }, [layout]);

  useEffect(() => {
    const handleResize = () => {
      setLayout(prev => {
        const maxX = window.innerWidth - prev.width - 16;
        const maxY = window.innerHeight - prev.height - 16;
        return { ...prev, x: clamp(prev.x, 16, maxX), y: clamp(prev.y, 16, maxY) };
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updatePosition = useCallback((clientX, clientY) => {
    setLayout(prev => {
      const maxX = window.innerWidth - prev.width - 16;
      const maxY = window.innerHeight - prev.height - 16;
      return {
        ...prev,
        x: clamp(clientX - dragOffset.current.x, 16, maxX),
        y: clamp(clientY - dragOffset.current.y, 16, maxY),
      };
    });
  }, []);

  const onDragStart = (event) => {
    if (layout.mode === 'focus') return;
    const rect = panelRef.current.getBoundingClientRect();
    dragOffset.current = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    setIsDragging(true);
    event.preventDefault();
  };

  const onResizeStart = (event) => {
    if (layout.mode === 'focus') return;
    setIsResizing(true);
    event.preventDefault();
    event.stopPropagation();
  };

  useEffect(() => {
    if (!isDragging && !isResizing) return;

    const onMove = (event) => {
      if (isDragging) updatePosition(event.clientX, event.clientY);
      if (isResizing) {
        setLayout(prev => ({
          ...prev,
          width: clamp(event.clientX - prev.x, MIN_WIDTH, window.innerWidth - prev.x - 16),
          height: clamp(event.clientY - prev.y, MIN_HEIGHT, window.innerHeight - prev.y - 16),
        }));
      }
    };

    const onUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [isDragging, isResizing, updatePosition]);

  const toggleMode = () => {
    setLayout(prev => ({ ...prev, mode: prev.mode === 'dock' ? 'focus' : 'dock' }));
  };

  const pipStyle = useMemo(() => {
    if (layout.mode === 'focus') {
      return {
        left: '50%',
        top: '50%',
        width: '80vw',
        height: '80vh',
        transform: 'translate(-50%, -50%)',
      };
    }

    return {
      left: `${layout.x}px`,
      top: `${layout.y}px`,
      width: `${layout.width}px`,
      height: `${layout.height}px`,
      transform: 'none',
    };
  }, [layout]);

  const onKeyDown = (event) => {
    const isMove = event.altKey && event.shiftKey;
    const isResize = event.altKey && event.ctrlKey;

    if (event.key === 'Escape') {
      setLayout(prev => ({ ...prev, closed: true }));
      event.preventDefault();
      return;
    }

    if (event.key.toLowerCase() === 'l') {
      onGoLive?.();
      event.preventDefault();
      return;
    }

    if (!isMove && !isResize) return;

    const axisByKey = {
      ArrowUp: ['y', -1],
      ArrowDown: ['y', 1],
      ArrowLeft: ['x', -1],
      ArrowRight: ['x', 1],
    };

    const axisConfig = axisByKey[event.key];
    if (!axisConfig) return;

    setLayout(prev => {
      const [axis, direction] = axisConfig;
      if (isMove) {
        const maxX = window.innerWidth - prev.width - 16;
        const maxY = window.innerHeight - prev.height - 16;
        return {
          ...prev,
          [axis]: clamp(prev[axis] + direction * KEYBOARD_MOVE_STEP, 16, axis === 'x' ? maxX : maxY),
        };
      }

      if (prev.mode === 'focus') return prev;
      return {
        ...prev,
        width: clamp(prev.width + (axis === 'x' ? direction * KEYBOARD_RESIZE_STEP : 0), MIN_WIDTH, window.innerWidth - prev.x - 16),
        height: clamp(prev.height + (axis === 'y' ? direction * KEYBOARD_RESIZE_STEP : 0), MIN_HEIGHT, window.innerHeight - prev.y - 16),
      };
    });

    event.preventDefault();
  };

  if (layout.closed) {
    return (
      <div className="presentation-pip-reopen-zone">
        <button type="button" className="presentation-pip-reopen" onClick={() => setLayout(prev => ({ ...prev, closed: false }))}>
          PiP
        </button>
      </div>
    );
  }

  return (
    <div className="presentation-pip-layer" aria-live="polite">
      <section
        ref={panelRef}
        tabIndex={0}
        className={`presentation-pip ${layout.mode === 'focus' ? 'is-focus' : ''}`}
        style={pipStyle}
        onKeyDown={onKeyDown}
        aria-label="Live presentation picture in picture"
      >
        <header className="presentation-pip-toolbar" onPointerDown={onDragStart}>
          <div className="presentation-pip-title">{presenterName}</div>
          <div className="presentation-pip-actions">
            <button type="button" onClick={onGoLive} aria-label="Return to live presentation">Live</button>
            <button type="button" onClick={toggleMode} aria-label="Toggle picture in picture size">{layout.mode === 'dock' ? 'Max' : 'Dock'}</button>
            <button type="button" onClick={() => setLayout(prev => ({ ...prev, closed: true }))} aria-label="Close picture in picture">✕</button>
          </div>
        </header>

        <div className="presentation-pip-body">
          <div className="presentation-pip-preview-frame">{children}</div>
        </div>

        {layout.mode === 'dock' && (
          <button
            type="button"
            className="presentation-pip-resize-handle"
            onPointerDown={onResizeStart}
            aria-label="Resize picture in picture"
          />
        )}
      </section>
    </div>
  );
}
