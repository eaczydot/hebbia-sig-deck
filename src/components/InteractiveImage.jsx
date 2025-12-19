import React, { useMemo, useRef, useState } from 'react';

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

export const InteractiveImage = ({
    src,
    alt,
    height = 260,
    minScale = 1,
    maxScale = 3,
    initialScale = 1,
    borderRadius = 10,
    border = '1px solid rgba(255,255,255,0.08)',
    hotspots = [],
    style = {}
}) => {
    const containerRef = useRef(null);

    const [scale, setScale] = useState(initialScale);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [dragState, setDragState] = useState(null);
    const [activeHotspotId, setActiveHotspotId] = useState(null);

    const activeHotspot = useMemo(
        () => hotspots.find(h => h.id === activeHotspotId) || null,
        [activeHotspotId, hotspots]
    );

    const reset = () => {
        setScale(initialScale);
        setOffset({ x: 0, y: 0 });
    };

    const onWheel = (e) => {
        e.preventDefault();
        const el = containerRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const cx = e.clientX - rect.left;
        const cy = e.clientY - rect.top;

        const zoomIntensity = 0.0015;
        const nextScale = clamp(scale * (1 - e.deltaY * zoomIntensity), minScale, maxScale);
        if (nextScale === scale) return;

        const contentX = (cx - rect.width / 2 - offset.x) / scale;
        const contentY = (cy - rect.height / 2 - offset.y) / scale;

        const nextOffsetX = cx - rect.width / 2 - nextScale * contentX;
        const nextOffsetY = cy - rect.height / 2 - nextScale * contentY;

        setScale(nextScale);
        setOffset({ x: nextOffsetX, y: nextOffsetY });
    };

    const onPointerDown = (e) => {
        const el = containerRef.current;
        if (!el) return;
        el.setPointerCapture(e.pointerId);
        setDragState({
            pointerId: e.pointerId,
            startX: e.clientX,
            startY: e.clientY,
            startOffset: offset
        });
    };

    const onPointerMove = (e) => {
        if (!dragState || dragState.pointerId !== e.pointerId) return;
        const dx = e.clientX - dragState.startX;
        const dy = e.clientY - dragState.startY;
        setOffset({ x: dragState.startOffset.x + dx, y: dragState.startOffset.y + dy });
    };

    const onPointerUp = (e) => {
        const el = containerRef.current;
        if (!el) return;
        try {
            el.releasePointerCapture(e.pointerId);
        } catch (err) {
            void err;
        }
        setDragState(null);
    };

    return (
        <div
            ref={containerRef}
            onWheel={onWheel}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            style={{
                position: 'relative',
                width: '100%',
                height,
                overflow: 'hidden',
                borderRadius,
                border,
                background: 'rgba(0,0,0,0.25)',
                touchAction: 'none',
                userSelect: 'none',
                ...style
            }}
        >
            <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 3, display: 'flex', gap: 8 }}>
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        reset();
                        setActiveHotspotId(null);
                    }}
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        padding: '6px 10px',
                        borderRadius: 999,
                        border: '1px solid rgba(255,255,255,0.12)',
                        background: 'rgba(0,0,0,0.45)',
                        color: 'rgba(255,255,255,0.85)',
                        cursor: 'pointer'
                    }}
                >
                    Reset
                </button>
                <div
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        padding: '6px 10px',
                        borderRadius: 999,
                        border: '1px solid rgba(255,255,255,0.08)',
                        background: 'rgba(0,0,0,0.35)',
                        color: 'rgba(255,255,255,0.6)'
                    }}
                >
                    Scroll to zoom • Drag to pan
                </div>
            </div>

            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                    transformOrigin: 'center center'
                }}
            >
                <img
                    src={src}
                    alt={alt}
                    draggable={false}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        display: 'block',
                        pointerEvents: 'none'
                    }}
                />

                {hotspots.map((h) => (
                    <button
                        key={h.id}
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveHotspotId(prev => (prev === h.id ? null : h.id));
                        }}
                        style={{
                            position: 'absolute',
                            left: `${h.x * 100}%`,
                            top: `${h.y * 100}%`,
                            transform: 'translate(-50%, -50%)',
                            width: 18,
                            height: 18,
                            borderRadius: 999,
                            border: activeHotspotId === h.id
                                ? '2px solid rgba(59, 130, 246, 0.9)'
                                : '2px solid rgba(255,255,255,0.65)',
                            background: activeHotspotId === h.id
                                ? 'rgba(59, 130, 246, 0.25)'
                                : 'rgba(0,0,0,0.35)',
                            boxShadow: activeHotspotId === h.id
                                ? '0 0 0 6px rgba(59, 130, 246, 0.14)'
                                : '0 0 0 6px rgba(255,255,255,0.08)',
                            cursor: 'pointer'
                        }}
                        aria-label={h.title || h.label || 'Hotspot'}
                    />
                ))}
            </div>

            {activeHotspot ? (
                <div
                    style={{
                        position: 'absolute',
                        left: 12,
                        right: 12,
                        bottom: 12,
                        zIndex: 4,
                        padding: '12px 12px',
                        borderRadius: 12,
                        border: '1px solid rgba(255,255,255,0.10)',
                        background: 'rgba(5,5,5,0.72)',
                        backdropFilter: 'blur(10px)'
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'flex-start' }}>
                        <div>
                            <div style={{ color: 'white', fontWeight: 700, fontSize: 15, letterSpacing: '0.02em' }}>
                                {activeHotspot.title || activeHotspot.label}
                            </div>
                            {activeHotspot.body ? (
                                <div style={{ marginTop: 6, color: 'rgba(255,255,255,0.75)', fontSize: 15, lineHeight: 1.35 }}>
                                    {activeHotspot.body}
                                </div>
                            ) : null}
                        </div>
                        <button
                            type="button"
                            onClick={() => setActiveHotspotId(null)}
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: 12,
                                padding: '6px 10px',
                                borderRadius: 999,
                                border: '1px solid rgba(255,255,255,0.12)',
                                background: 'rgba(0,0,0,0.30)',
                                color: 'rgba(255,255,255,0.7)',
                                cursor: 'pointer',
                                flex: '0 0 auto'
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
};
