import React from 'react';

export const SlideContainer = ({ children, className = '' }) => {
    return (
        <div className={`slide-container ${className}`}>
            <div className="slide-content">
                {children}
            </div>
        </div>
    );
};
