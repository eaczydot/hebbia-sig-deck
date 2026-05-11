import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { ContextBox } from '../components/ContextBox';
import { MatrixTable, CellHighlight } from '../components/MatrixTable';
import { motion } from 'framer-motion';

export const Slide13_ROI = () => {
    const roiData = {
        headers: [
            { label: 'WORKFLOW' },
            { label: 'BEFORE STEDI', style: { textAlign: 'center' } },
            { label: 'AFTER STEDI', style: { textAlign: 'center' } },
            { label: 'ANNUAL IMPACT', style: { textAlign: 'center', color: 'var(--color-agent-extraction-green)' } }
        ],
        rows: [
            {
                cells: [
                    { content: 'Eligibility Verification' },
                    { content: 'Manual/phone (8 min avg)', style: { textAlign: 'center' } },
                    { content: 'API (1-3 seconds)', style: { textAlign: 'center' } },
                    { content: '$180K', style: { textAlign: 'center', color: 'var(--color-agent-extraction-green)' } }
                ]
            },
            {
                cells: [
                    { content: 'Claim Submission' },
                    { content: 'Batch EDI files, manual edits', style: { textAlign: 'center' } },
                    { content: 'Real-time API, automated edits', style: { textAlign: 'center' } },
                    { content: '$120K', style: { textAlign: 'center', color: 'var(--color-agent-extraction-green)' } }
                ]
            },
            {
                cells: [
                    { content: 'Denial Management' },
                    { content: 'Manual rework, phone calls', style: { textAlign: 'center' } },
                    { content: 'Pre-submission validation', style: { textAlign: 'center' } },
                    { content: '$240K', style: { textAlign: 'center', color: 'var(--color-agent-extraction-green)' } }
                ]
            },
            {
                cells: [
                    { content: 'ERA Processing' },
                    { content: 'Manual posting from paper EOBs', style: { textAlign: 'center' } },
                    { content: 'Auto-parsed webhooks (835)', style: { textAlign: 'center' } },
                    { content: '$90K', style: { textAlign: 'center', color: 'var(--color-agent-extraction-green)' } }
                ]
            },
            {
                className: 'row-total',
                cells: [
                    { content: 'TOTAL ANNUAL IMPACT' },
                    { content: '', style: { textAlign: 'center' } },
                    { content: '', style: { textAlign: 'center' } },
                    { content: '$630K / YR', style: { textAlign: 'center', color: 'var(--color-agent-extraction-green)', fontWeight: 700 } }
                ]
            }
        ]
    };

    return (
        <SlideContainer>
            {/* Header */}
            <div style={{ marginBottom: '40px' }}>
                <div className="text-matrix-header">12 // ROI ANALYSIS</div>
                <h2 className="text-hero" style={{ fontSize: '48px' }}>Revenue Cycle Impact</h2>
            </div>

            {/* Split Layout */}
            <div className="split-30-70" style={{ flex: 1 }}>
                {/* Left Column - Context */}
                <div className="stagger-in active">
                    <ContextBox header="THE MODEL">
                        <div className="u-font-mono" style={{ fontSize: '14px' }}>
                            Savings = <br />
                            (Manual Hours Eliminated<br />
                            × Staff Cost/Hr)<br />
                            + (Denial Reduction<br />
                            × Avg Claim Value)
                        </div>
                    </ContextBox>

                    <ContextBox header="KEY METRICS" style={{ marginTop: '30px' }}>
                        <div className="u-font-mono" style={{ fontSize: '14px' }}>
                            &gt; Eligibility: 1-3 sec vs 8 min manual<br />
                            &gt; Enrollment: 1-2 days vs weeks<br />
                            &gt; Cycle reduction: 10-20 days off 30-60 day cycle
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
                        <div style={{ marginTop: '20px', fontSize: '12px', color: 'var(--color-text-tertiary)', textAlign: 'right' }}>
                            *Based on 50K claims/month. Actual savings vary by volume and workflow complexity.
                        </div>
                    </GlassPanel>
                </motion.div>
            </div>
        </SlideContainer>
    );
};
