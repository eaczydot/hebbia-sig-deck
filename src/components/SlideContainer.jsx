import React from 'react';

export const SlideContainer = ({ children, className = '' }) => {
    return (
        <div
            className={`slide-container u-full-size u-flex-center ${className}`}
            style={{
                position: 'relative',
                padding: 'var(--slide-padding)',
                background: 'var(--gradient-matrix-glow)'
            }}
        >
            {/* 1. Base Grid Layer */}
            <div className="bg-grid-pattern" style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.15,
                pointerEvents: 'none',
                zIndex: 0
            }} />

            {/* Content Layer */}
            <div style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column'
            }}>
                {children}
            </div>
        </div>
    );
};
