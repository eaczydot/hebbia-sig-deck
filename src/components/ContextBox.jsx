import React from 'react';

export const ContextBox = ({
    header,
    children,
    borderColor = 'var(--color-border-functional)',
    style = {}
}) => {
    return (
        <div style={{
            borderLeft: `2px solid ${borderColor}`,
            paddingLeft: '20px',
            marginBottom: '30px',
            ...style
        }}>
            {header && (
                <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--color-text-tertiary)',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                }}>
                    {header}
                </div>
            )}
            <div style={{
                fontSize: '17px',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7
            }}>
                {children}
            </div>
        </div>
    );
};
