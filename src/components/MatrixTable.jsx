import React from 'react';
import './MatrixTable.css';

export const MatrixTable = ({
    headers = [],
    rows = [],
    className = '',
    style = {}
}) => {
    return (
        <table className={`matrix-table ${className}`} style={style}>
            {headers.length > 0 && (
                <thead>
                    <tr>
                        {headers.map((header, i) => (
                            <th key={i} style={header.style}>
                                {header.label || header}
                            </th>
                        ))}
                    </tr>
                </thead>
            )}
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className={row.className} style={row.style}>
                        {row.cells.map((cell, cellIndex) => (
                            <td
                                key={cellIndex}
                                className={cell.highlight ? 'cell-highlight' : ''}
                                style={cell.style}
                            >
                                {cell.content || cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

// Simple inline highlight component for table cells
export const CellHighlight = ({ children, color = 'var(--color-agent-reasoning-blue)' }) => (
    <span style={{
        background: `${color}20`,
        color: color,
        padding: '4px 8px',
        borderRadius: '4px',
        display: 'inline-block',
        fontFamily: 'var(--font-mono)',
        fontSize: '12px'
    }}>
        {children}
    </span>
);
