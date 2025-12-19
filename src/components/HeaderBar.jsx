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
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--color-border-functional)',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--header-font-size)',
            color: 'var(--color-text-tertiary)',
            letterSpacing: '0.05em',
            zIndex: 100
        }}>
            <span>HEBBIA // ENTERPRISE PROPOSAL</span>
            <span style={{ color: 'var(--color-text-secondary)' }}>
                {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
            <span>CONFIDENTIAL: SIG</span>
        </div>
    );
};
