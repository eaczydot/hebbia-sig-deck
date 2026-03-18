import React from 'react';

export const GlassPanel = ({ children, className = '', style = {}, active = false }) => {
    return (
        <div
            className={`glass-panel ${active ? 'active' : ''} ${className}`}
            style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                ...style
            }}
        >
            {/* Top Gloss Highlight - Stedi teal tint */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(79, 194, 181, 0.3), transparent)',
                opacity: 0.6
            }} />

            {children}
        </div>
    );
};
