import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { ContextBox } from '../components/ContextBox';
import { motion } from 'framer-motion';
import { LatencyNarrativeChart } from '../components/LatencyNarrativeChart';
import { SlideHeader } from '../components/SlideHeader';

export const Slide4_TheConstraint = () => {
    return (
        <SlideContainer>
            {/* Header */}
            <SlideHeader
                kicker="03 // THE CONSTRAINT"
                title="Decision Latency is Opportunity Cost"
            />

            {/* Split Layout */}
            <div className="split-30-70" style={{ flex: 1 }}>
                {/* Left Column - Context */}
                <div className="stagger-in active">
                    <ContextBox header="LINEAR SCALING">
                        Manual document review creates a ceiling on growth. Adding more data requires adding more headcount linearly.
                    </ContextBox>

                    <ContextBox header="OPPORTUNITY COST" style={{ marginTop: '30px' }}>
                        Every hour spent on low-level data extraction is an hour not spent on high-level strategy and alpha generation.
                    </ContextBox>
                </div>

                {/* Right Column - Chart Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <GlassPanel style={{
                        height: '100%',
                        padding: '24px',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
                            <div>
                                <div className="text-matrix-header" style={{ color: 'var(--color-text-tertiary)' }}>NARRATIVE</div>
                                <div style={{ fontSize: 22, color: 'var(--color-text-primary)', lineHeight: 1.25 }}>
                                    Data accelerates. Human review does not.
                                </div>
                            </div>
                            <div className="pill orange" style={{ flex: '0 0 auto', marginTop: 2 }}>OPPORTUNITY COST</div>
                        </div>

                        <div style={{ marginTop: 16, flex: 1, display: 'flex', alignItems: 'center' }}>
                            <div style={{ width: '100%', border: '1px solid var(--color-border-functional)', borderRadius: 4, padding: 14, background: 'rgba(0,0,0,0.35)' }}>
                                <LatencyNarrativeChart height={360} />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginTop: 16 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.6 }}
                                style={{ borderLeft: '2px solid rgba(239, 68, 68, 0.9)', paddingLeft: 12 }}
                            >
                                <div className="u-font-mono" style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>PHASE 1</div>
                                <div style={{ color: 'var(--color-text-primary)', fontSize: 14, lineHeight: 1.5 }}>
                                    Manual review burns cycles on extraction.
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.1, duration: 0.6 }}
                                style={{ borderLeft: '2px solid rgba(239, 68, 68, 0.9)', paddingLeft: 12 }}
                            >
                                <div className="u-font-mono" style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>PHASE 2</div>
                                <div style={{ color: 'var(--color-text-primary)', fontSize: 14, lineHeight: 1.5 }}>
                                    The latency gap widens as inputs compound.
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.3, duration: 0.6 }}
                                style={{ borderLeft: '2px solid rgba(59, 130, 246, 0.9)', paddingLeft: 12 }}
                            >
                                <div className="u-font-mono" style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>INFLECTION</div>
                                <div style={{ color: 'var(--color-text-primary)', fontSize: 14, lineHeight: 1.5 }}>
                                    Automation converts volume into throughput.
                                </div>
                            </motion.div>
                        </div>
                    </GlassPanel>
                </motion.div>
            </div>
        </SlideContainer>
    );
};
