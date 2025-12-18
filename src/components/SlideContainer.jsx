import React, { useRef, useState, useEffect } from 'react';

export const SlideContainer = ({ children, className = '' }) => {
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className={`u-full-size u-flex-center ${className}`}
            style={{
                position: 'relative',
                padding: '40px 60px',
                overflow: 'hidden',
                background: 'var(--color-canvas-base)',
                perspective: '1000px'
            }}
        >
            {/* 1. Base Grid Layer */}
            <div className="bg-grid-pattern" style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.3, /* Subtle brand grid */
                pointerEvents: 'none',
                zIndex: 0
            }} />

            {/* 2. Radial Glow Tracking Mouse (Brand Cobalt) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(70, 91, 255, 0.08), transparent 40%)`,
                pointerEvents: 'none',
                zIndex: 1
            }} />

            {/* 3. Ambient Top Glow */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '300px',
                background: 'var(--gradient-matrix-glow)',
                opacity: 0.6,
                pointerEvents: 'none',
                zIndex: 1
            }} />

            {/* 4. Content Layer */}
            <div style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column'
            }}>
                {children}
            </div>

            {/* 5. Vignette Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, transparent 60%, rgba(5,5,5,0.7) 100%)',
                pointerEvents: 'none',
                zIndex: 3
            }} />

            {/* 6. Grain / Noise Layer (Brand Style) */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'var(--color-overlay-noise)',
                opacity: 0.4,
                pointerEvents: 'none',
                zIndex: 4
            }} />
        </div>
    );
};
