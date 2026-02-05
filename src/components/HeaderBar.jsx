import React from 'react';

export const HeaderBar = ({ currentSlide, totalSlides }) => {
    return (
        <div 
            className="header-bar"
            style={{
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
            }}
        >
            {/* Left side - hide on small mobile */}
            <span 
                className="header-left hide-xs"
                style={{ 
                    flex: '1',
                    textAlign: 'left',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}
            >
                HEBBIA // MATRIX_OS v3.5
            </span>
            
            {/* Center - slide counter (always visible) */}
            <span 
                className="header-center"
                style={{ 
                    color: 'var(--txt-sec)',
                    flex: '0 0 auto',
                    padding: '0 12px'
                }}
            >
                {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
            
            {/* Right side - hide on mobile */}
            <span 
                className="header-right hide-sm"
                style={{ 
                    flex: '1',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}
            >
                CONFIDENTIAL: SIG PROPOSAL
            </span>
        </div>
    );
};
