import React from 'react';
import styles from './MatrixGrid.module.css';

export const MatrixGrid = ({ columns, data, className = '' }) => {
    return (
        <div
            className={`${styles.gridContainer} ${className}`}
            style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}
        >
            {/* Headers */}
            {columns.map((col, index) => (
                <div key={`header-${index}`} className={styles.headerCell}>
                    {col}
                </div>
            ))}

            {/* Data Rows */}
            {data.map((row, rowIndex) => (
                <React.Fragment key={`row-${rowIndex}`}>
                    {row.map((cell, cellIndex) => (
                        <div key={`cell-${rowIndex}-${cellIndex}`} className={styles.cell}>
                            {cell}
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};
