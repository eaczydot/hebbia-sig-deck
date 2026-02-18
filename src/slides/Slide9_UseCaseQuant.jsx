import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { MatrixTable } from '../components/MatrixTable';
import { motion } from 'framer-motion';

export const Slide9_UseCaseQuant = () => {
    const quantData = {
        headers: [
            { label: 'TICKER' },
            { label: 'QTR', style: { textAlign: 'center' } },
            { label: 'SENTIMENT (1-5)', style: { textAlign: 'center' } },
            { label: 'CONFIDENCE', style: { textAlign: 'center' } }
        ],
        rows: [
            {
                cells: [
                    { content: 'ABBV' },
                    { content: 'Q3 24', style: { textAlign: 'center' } },
                    { content: '4.2', style: { textAlign: 'center', color: 'var(--color-agent-extraction-green)' } },
                    { content: 'High', style: { textAlign: 'center' } }
                ]
            },
            {
                cells: [
                    { content: 'MRK' },
                    { content: 'Q3 24', style: { textAlign: 'center' } },
                    { content: '2.1', style: { textAlign: 'center', color: 'var(--red)' } },
                    { content: 'High', style: { textAlign: 'center' } }
                ]
            },
            {
                cells: [
                    { content: 'PFE' },
                    { content: 'Q3 24', style: { textAlign: 'center' } },
                    { content: '3.5', style: { textAlign: 'center', color: 'var(--color-agent-citation-orange)' } },
                    { content: 'Med', style: { textAlign: 'center' } }
                ]
            },
            {
                cells: [
                    { content: 'BMY' },
                    { content: 'Q3 24', style: { textAlign: 'center' } },
                    { content: '4.8', style: { textAlign: 'center', color: 'var(--color-agent-extraction-green)' } },
                    { content: 'High', style: { textAlign: 'center' } }
                ]
            },
            {
                cells: [
                    { content: 'LLY' },
                    { content: 'Q3 24', style: { textAlign: 'center' } },
                    { content: '5.0', style: { textAlign: 'center', color: 'var(--color-agent-extraction-green)', fontWeight: 700 } },
                    { content: 'High', style: { textAlign: 'center' } }
                ]
            }
        ]
    };

    return (
        <SlideContainer>
            {/* Header */}
            <div style={{ marginBottom: '40px' }}>
                <div className="text-matrix-header">08 // USE CASE: QUANT</div>
                <h2 className="text-title">Structuring the Unstructured</h2>
            </div>

            {/* Split Layout */}
            <div className="split-40-60" style={{ flex: 1 }}>
                {/* Left - Context */}
                <div className="stagger-in active">
                    <div style={{ marginBottom: '30px' }}>
                        <div className="text-matrix-header" style={{ color: 'var(--color-agent-synthesis-purple)' }}>THE INPUT</div>
                        <div className="text-body-lg" style={{ marginTop: '10px' }}>
                            10 years of earnings transcripts for Russell 2000 Healthcare names.
                        </div>
                    </div>
                    <div style={{ marginBottom: '30px' }}>
                        <div className="text-matrix-header" style={{ color: 'var(--color-agent-synthesis-purple)' }}>THE QUERY</div>
                        <div className="text-body-lg" style={{ marginTop: '10px' }}>
                            "Score management sentiment on supply chain headwinds (1-5) and extract mentions of specific drug trials."
                        </div>
                    </div>
                    <div>
                        <div className="text-matrix-header" style={{ color: 'var(--color-agent-synthesis-purple)' }}>THE ALPHA</div>
                        <div className="text-body-lg" style={{ marginTop: '10px' }}>
                            A novel factor for "Supply Chain Confidence" uncorrelated with standard momentum metrics.
                        </div>
                    </div>
                </div>

                {/* Right - Table Output */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <GlassPanel style={{ height: '100%', padding: '24px' }}>
                        <div className="text-mono-sm" style={{ color: 'var(--color-text-tertiary)', marginBottom: '20px' }}>
                            // Export: sentiment_factor_v1.csv
                        </div>
                        <MatrixTable
                            headers={quantData.headers}
                            rows={quantData.rows}
                        />
                    </GlassPanel>
                </motion.div>
            </div>
        </SlideContainer>
    );
};
