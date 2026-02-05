import React from 'react';

export const SlideContainer = ({ children, className = '', scrollable = true }) => {
    return (
        <div 
            className={`slide-container ${className}`}
            style={{
                // Enable scrolling on mobile
                WebkitOverflowScrolling: 'touch'
            }}
        >
            <div 
                className="slide-content"
                style={{
                    // Ensure content can grow beyond viewport on mobile
                    minHeight: 'auto'
                }}
            >
                {children}
            </div>
        </div>
    );
};
