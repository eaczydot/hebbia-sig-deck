import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { ContextBox } from '../components/ContextBox';
import { motion } from 'framer-motion';

export const Slide14_PilotPlan = () => {
    return (
        <SlideContainer>
            {/* Header */}
            <div style={{ marginBottom: '40px' }}>
                <div className="text-matrix-header">13 // EXECUTION</div>
                <h2 className="text-hero" style={{ fontSize: '48px' }}>6-Week Pilot Plan</h2>
            </div>

            {/* Gantt-style Timeline */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <GlassPanel style={{
                    display: 'grid',
                    gridTemplateColumns: '150px 1fr',
                    gap: '20px',
                    padding: '40px'
                }}>
                    {/* Labels */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', borderRight: '1px solid var(--color-border-functional)', paddingRight: '20px' }}>
                        <div className="u-font-mono" style={{ color: 'var(--color-text-secondary)', fontSize: '12px' }}>WEEKS 1-2</div>
                        <div className="u-font-mono" style={{ color: 'var(--color-text-secondary)', fontSize: '12px' }}>WEEKS 3-5</div>
                        <div className="u-font-mono" style={{ color: 'var(--color-text-secondary)', fontSize: '12px' }}>WEEK 6</div>
                    </div>

                    {/* Bars */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', position: 'relative' }}>
                        {/* Grid Lines */}
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'space-between', zIndex: 0, opacity: 0.1 }}>
                            <div style={{ borderLeft: '1px solid #fff' }} />
                            <div style={{ borderLeft: '1px solid #fff' }} />
                            <div style={{ borderLeft: '1px solid #fff' }} />
                        </div>

                        {/* Bar 1 */}
                        <div style={{ background: 'var(--color-canvas-layer-2)', padding: '15px', borderLeft: '4px solid var(--color-agent-reasoning-blue)', zIndex: 1, marginBottom: '15px' }}>
                            <h4 style={{ margin: '0 0 5px 0', color: 'white', fontSize: '14px' }}>Setup & Ingest</h4>
                            <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-secondary)' }}>Connect private data (SharePoint/VDR). Establish baseline cycle times.</p>
                        </div>

                        {/* Bar 2 */}
                        <div style={{ background: 'var(--color-canvas-layer-2)', padding: '15px', borderLeft: '4px solid var(--color-agent-reasoning-blue)', marginLeft: '30%', width: '70%', zIndex: 1, marginBottom: '15px' }}>
                            <h4 style={{ margin: '0 0 5px 0', color: 'white', fontSize: '14px' }}>Execution & Feedback</h4>
                            <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-secondary)' }}>10 Pilot Users. Weekly reviews. Iterate on prompt libraries.</p>
                        </div>

                        {/* Bar 3 */}
                        <div style={{ background: 'var(--color-canvas-layer-2)', padding: '15px', borderLeft: '4px solid var(--color-agent-extraction-green)', marginLeft: '80%', width: '20%', zIndex: 1 }}>
                            <h4 style={{ margin: '0 0 5px 0', color: 'white', fontSize: '14px' }}>ROI Validation</h4>
                            <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-secondary)' }}>Measure delta vs baseline. Present Go/No-Go.</p>
                        </div>
                    </div>
                </GlassPanel>
            </motion.div>

            {/* Success Metrics */}
            <motion.div
                className="grid-3 stagger-in active"
                style={{ marginTop: '40px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <ContextBox header="SUCCESS METRIC" borderColor="var(--color-agent-extraction-green)">
                    <div className="big-num text-green" style={{ fontSize: '40px' }}>&gt;25%</div>
                    <div style={{ color: 'var(--color-text-secondary)' }}>Efficiency Gain</div>
                </ContextBox>
                <ContextBox header="SUCCESS METRIC" borderColor="var(--color-agent-extraction-green)">
                    <div className="big-num text-green" style={{ fontSize: '40px' }}>&gt;80%</div>
                    <div style={{ color: 'var(--color-text-secondary)' }}>User Adoption</div>
                </ContextBox>
                <ContextBox header="SUCCESS METRIC" borderColor="var(--color-agent-extraction-green)">
                    <div className="big-num text-green" style={{ fontSize: '40px' }}>0</div>
                    <div style={{ color: 'var(--color-text-secondary)' }}>Security Incidents</div>
                </ContextBox>
            </motion.div>
        </SlideContainer>
    );
};
