import React from 'react';

export const GlassPanel = ({ children, className = '', style = {}, active = false }) => {
    return (
        <div
            className={`glass-panel ${active ? 'active' : ''} ${className}`}
            style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                ...style // Allow overrides
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
                opacity: 0.5
            }} />

            {children}
        </div>
    );
};
