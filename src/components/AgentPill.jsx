import React from 'react';

const pillStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: 'var(--pill-radius)',
    padding: 'var(--pill-padding)',
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--pill-text-size)',
    backgroundColor: 'var(--pill-bg)',
    border: '1px solid var(--pill-border)',
    color: 'var(--color-agent-reasoning-blue)',
    whiteSpace: 'nowrap',
};

export const AgentPill = ({ label, type = 'reasoning' }) => {
    return (
        <span style={pillStyle}>
            {label}
        </span>
    );
};
