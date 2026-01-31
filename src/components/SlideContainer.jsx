import React from 'react';

export const SlideContainer = ({ children, className = '', style = {} }) => {
    return (
        <div className={`slide-container ${className}`} style={style}>
            <div className="slide-content">
                {children}
            </div>
        </div>
    );
};
