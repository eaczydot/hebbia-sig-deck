import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  constrainBubbleToBounds,
  getMobileSnapPosition,
  loadLocalLayout,
  saveLocalLayout,
} from '../layout/localLayoutStore';
import { ParticipantBubble } from './ParticipantBubble';

const RESIZE_MIN = 72;

export const BubbleCanvas = ({ participants, roomId, userId, isMobile }) => {
  const containerRef = useRef(null);
  const dragStateRef = useRef(null);
  const [bounds, setBounds] = useState({ width: 0, height: 0 });
  const [layout, setLayout] = useState({});

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const updateBounds = () => {
      const rect = containerRef.current.getBoundingClientRect();
      setBounds({ width: Math.round(rect.width), height: Math.round(rect.height) });
    };

    const observer = new ResizeObserver(updateBounds);
    observer.observe(containerRef.current);
    updateBounds();

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!bounds.width || !bounds.height || !participants.length) {
      return;
    }

    const nextLayout = loadLocalLayout({
      roomId,
      userId,
      participants,
      bounds,
      isMobile,
    });

    if (nextLayout?.items) {
      setLayout(nextLayout.items);
    }
  }, [bounds.height, bounds.width, isMobile, participants, roomId, userId]);

  useEffect(() => {
    if (!Object.keys(layout).length) {
      return;
    }

    saveLocalLayout({ roomId, userId, layout });
  }, [layout, roomId, userId]);

  const maxZ = useMemo(() => {
    return Object.values(layout).reduce((max, item) => Math.max(max, item.z || 1), 1);
  }, [layout]);

  const startInteraction = (event, participantId, mode) => {
    const item = layout[participantId];
    if (!item) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const pointer = { x: event.clientX, y: event.clientY };
    const start = {
      participantId,
      mode,
      pointer,
      frame: item,
    };

    dragStateRef.current = start;

    setLayout(prev => ({
      ...prev,
      [participantId]: {
        ...prev[participantId],
        z: maxZ + 1,
      },
    }));

    const handleMove = (moveEvent) => {
      const active = dragStateRef.current;
      if (!active) {
        return;
      }

      const deltaX = moveEvent.clientX - active.pointer.x;
      const deltaY = moveEvent.clientY - active.pointer.y;

      setLayout(prev => {
        const current = prev[participantId];
        if (!current) {
          return prev;
        }

        if (active.mode === 'move') {
          const next = constrainBubbleToBounds({
            x: active.frame.x + deltaX,
            y: active.frame.y + deltaY,
            size: current.size,
          }, bounds);

          return {
            ...prev,
            [participantId]: {
              ...current,
              ...next,
              z: current.z,
            },
          };
        }

        const nextSize = Math.max(RESIZE_MIN, active.frame.size + deltaX + deltaY * 0.2);
        const next = constrainBubbleToBounds({
          x: current.x,
          y: current.y,
          size: nextSize,
        }, bounds);

        return {
          ...prev,
          [participantId]: {
            ...current,
            ...next,
            z: current.z,
          },
        };
      });
    };

    const handleUp = () => {
      setLayout(prev => {
        if (!isMobile) {
          return prev;
        }

        const current = prev[participantId];
        if (!current) {
          return prev;
        }

        const snapped = getMobileSnapPosition(current, bounds);
        return {
          ...prev,
          [participantId]: {
            ...current,
            ...snapped,
          },
        };
      });

      dragStateRef.current = null;
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleUp);
    };

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleUp);
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 2,
        pointerEvents: 'none',
      }}
    >
      {participants.map((participant) => {
        const item = layout[participant.id];
        if (!item) {
          return null;
        }

        return (
          <ParticipantBubble
            key={participant.id}
            participant={participant}
            style={{
              left: `${item.x}px`,
              top: `${item.y}px`,
              width: `${item.size}px`,
              height: `${item.size}px`,
              zIndex: item.z,
            }}
            onPointerDown={event => startInteraction(event, participant.id, 'move')}
            onResizePointerDown={event => startInteraction(event, participant.id, 'resize')}
          />
        );
      })}
    </div>
  );
};
