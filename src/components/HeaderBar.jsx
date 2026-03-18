import React from 'react';

const btnBase = {
    fontSize: '10px',
    textTransform: 'uppercase',
    border: '1px solid var(--line-mid)',
    borderRadius: '6px',
    padding: '2px 8px',
    color: 'var(--txt-pri)',
    background: 'var(--bg-glass)',
    letterSpacing: '0.05em',
    cursor: 'pointer',
};

const btnActive = {
    ...btnBase,
    border: '1px solid rgba(79, 194, 181, 0.6)',
    background: 'rgba(79, 194, 181, 0.18)',
    color: '#73d6c9',
};

export const HeaderBar = ({
    currentSlide,
    totalSlides,
    isDemoMode,
    onDemoModeChange,
}) => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 'var(--header-height)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 'var(--header-padding)',
            background: 'var(--bg-void)',
            borderBottom: '1px solid var(--line-dim)',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--header-font-size)',
            color: 'var(--txt-dim)',
            letterSpacing: '0.05em',
            zIndex: 100
        }}>
            <span>STEDI // DECK v1.0</span>
            <span style={{ color: 'var(--txt-sec)', display: 'flex', gap: '8px', alignItems: 'center' }}>
                {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                <button
                    onClick={onDemoModeChange}
                    style={isDemoMode ? btnActive : btnBase}
                    title={isDemoMode ? 'Exit demo mode' : 'Enter demo mode (shows video bubbles)'}
                >
                    {isDemoMode ? '● Demo mode' : 'Demo mode'}
                </button>
            </span>
            <span>CONFIDENTIAL: SIG PROPOSAL</span>
        </div>
    );
};
