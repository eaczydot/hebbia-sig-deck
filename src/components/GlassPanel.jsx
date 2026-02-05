import React from 'react';

export const GlassPanel = ({ children, className = '', style = {}, active = false, noPadding = false }) => {
    return (
        <div
            className={`glass-panel ${active ? 'active' : ''} ${className}`}
            style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                // Responsive padding handled by CSS, but allow override
                padding: noPadding ? 0 : undefined,
                // Ensure text doesn't overflow on mobile
                minWidth: 0,
                ...style
            }}
        >
            {/* Top Gloss Highlight */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, color-mix(in srgb, var(--color-text-primary) 30%, transparent), transparent)',
                opacity: 0.5,
                pointerEvents: 'none'
            }} />

            {children}
        </div>
    );
};
