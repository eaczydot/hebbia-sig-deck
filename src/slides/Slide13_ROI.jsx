import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { ContextBox } from '../components/ContextBox';
import { MatrixTable, CellHighlight } from '../components/MatrixTable';
import { SlideHeader } from '../components/SlideHeader';
import { motion } from 'framer-motion';

export const Slide13_ROI = () => {
    const roiData = {
        headers: [
            { label: 'DEPARTMENT' },
            { label: 'HEADCOUNT (EST)', style: { textAlign: 'center' } },
            { label: 'HOURS SAVED (YR)', style: { textAlign: 'center' } },
            { label: 'VALUE CREATED', style: { textAlign: 'center', color: 'var(--color-agent-extraction-green)' } }
        ],
        rows: [
            {
                cells: [
                    { content: 'Trading / Desk' },
                    { content: '100', style: { textAlign: 'center' } },
                    { content: '40,000', style: { textAlign: 'center' } },
                    { content: '$10.0 M', style: { textAlign: 'center', color: 'var(--color-agent-extraction-green)' } }
                ]
            },
            {
                cells: [
                    { content: 'Quant Research' },
                    { content: '50', style: { textAlign: 'center' } },
                    { content: '20,000', style: { textAlign: 'center' } },
                    { content: '$5.0 M', style: { textAlign: 'center', color: 'var(--color-agent-extraction-green)' } }
                ]
            },
            {
                cells: [
                    { content: 'Legal / Compliance' },
                    { content: '20', style: { textAlign: 'center' } },
                    { content: '8,000', style: { textAlign: 'center' } },
                    { content: '$2.0 M', style: { textAlign: 'center', color: 'var(--color-agent-extraction-green)' } }
                ]
            },
            {
                className: 'row-total',
                cells: [
                    { content: 'TOTAL' },
                    { content: '170', style: { textAlign: 'center' } },
                    { content: '68,000', style: { textAlign: 'center' } },
                    { content: '$17.0 M / YR', style: { textAlign: 'center', color: 'var(--color-agent-extraction-green)', fontWeight: 700 } }
                ]
            }
        ]
    };

    return (
        <SlideContainer>
            {/* Header */}
            <SlideHeader
                kicker="12 // ROI ANALYSIS"
                title="Quantified Value Hypothesis"
            />

            {/* Split Layout */}
            <div className="split-30-70" style={{ flex: 1 }}>
                {/* Left Column - Context */}
                <div className="stagger-in active">
                    <ContextBox header="THE MODEL">
                        <div className="u-font-mono" style={{ fontSize: '17px' }}>
                            Annual Savings = <br />
                            (Hours Saved/Task)<br />
                            x (Tasks/Year)<br />
                            x (Fully Loaded Rate)
                        </div>
                    </ContextBox>

                    <ContextBox header="ASSUMPTIONS (BASE CASE)" style={{ marginTop: '30px' }}>
                        <div className="u-font-mono" style={{ fontSize: '17px' }}>
                            &gt; Adoption: 70%<br />
                            &gt; Time Saved: 8hr/wk/user<br />
                            &gt; Avg Rate: $250/hr
                        </div>
                    </ContextBox>
                </div>

                {/* Right Column - Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <GlassPanel style={{ height: '100%', padding: '24px' }}>
                        <MatrixTable
                            headers={roiData.headers}
                            rows={roiData.rows}
                        />
                        <div style={{ marginTop: '20px', fontSize: '15px', color: 'var(--color-text-tertiary)', textAlign: 'right' }}>
                            *Values are illustrative based on standard financial services benchmarks.
                        </div>
                    </GlassPanel>
                </motion.div>
            </div>
        </SlideContainer>
    );
};
