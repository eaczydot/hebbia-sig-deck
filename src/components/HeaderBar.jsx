import React from 'react';

export const HeaderBar = ({ currentSlide, totalSlides, isPresentationMode, onModeChange }) => {
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
            <span>HEBBIA // MATRIX_OS v3.5</span>
            <span style={{ color: 'var(--txt-sec)', display: 'flex', gap: '10px', alignItems: 'center' }}>
                {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                <button
                    onClick={onModeChange}
                    style={{
                        fontSize: '10px',
                        textTransform: 'uppercase',
                        border: '1px solid var(--line-mid)',
                        borderRadius: '999px',
                        padding: '2px 8px',
                        color: 'var(--txt-pri)',
                        background: 'var(--bg-glass)'
                    }}
                >
                    {isPresentationMode ? 'Presentation mode' : 'Browsing mode'}
                </button>
            </span>
            <span>CONFIDENTIAL: SIG PROPOSAL</span>
        </div>
    );
};
