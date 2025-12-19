import React from 'react';

export const HeaderBar = ({ currentSlide, totalSlides }) => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 'var(--header-height)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 'var(--header-padding)',
            background: 'var(--color-canvas-base)',
            borderBottom: '1px solid var(--color-border-subtle)',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--header-font-size)',
            color: 'var(--color-text-tertiary)',
            letterSpacing: '0.05em',
            zIndex: 100
        }}>
            <span>HEBBIA // MATRIX_OS v3.5</span>
                        <span>CONFIDENTIAL: SIG PROPOSAL</span>
        </div>
    );
};
