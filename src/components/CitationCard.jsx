import React from 'react';

const cardStyle = {
    backgroundColor: 'var(--color-canvas-layer-2)',
    borderLeft: '2px solid var(--color-agent-citation-orange)',
    padding: '12px',
    boxShadow: '0px 4px 20px rgba(0,0,0,0.6)',
    borderRadius: '0 4px 4px 0', // Slight radius on right
    color: 'var(--color-text-primary)',
    fontSize: '13px',
    fontFamily: 'var(--font-primary)',
};

export const CitationCard = ({ title, source, children }) => {
    return (
        <div style={cardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontWeight: 600 }}>{title}</span>
                {source && (
                    <span style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)'
                    }}>
                        {source}
                    </span>
                )}
            </div>
            <div style={{ color: 'var(--color-text-secondary)' }}>
                {children}
            </div>
        </div>
    );
};
