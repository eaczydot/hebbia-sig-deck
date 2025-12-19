import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';

export const Slide12_ValueEfficiency = () => {
    return (
        <SlideContainer>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <div className="text-matrix-header" style={{ justifyContent: 'center', color: 'var(--color-agent-extraction-green)' }}>VALUE THESIS: EFFICIENCY</div>
                <h2 className="text-title">
                    Compressing Time to Conviction
                </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>

                {/* Comparison Visual */}
                <div>
                    <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <h3 className="text-subtitle-sm">Covenant Review Cycle</h3>
                        <div className="text-mono-data" style={{ opacity: 0.5 }}>AVG DEAL TIMELINE</div>
                    </div>

                    {/* Old Way */}
                    <div style={{ marginBottom: '32px' }}>
                        <div className="text-body-sm" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: 'var(--color-text-tertiary)' }}>
                            <span>Standard Analyst Workflow</span>
                            <span>2 Days</span>
                        </div>
                        <div style={{ width: '100%', height: '40px', background: 'color-mix(in srgb, var(--color-text-primary) 5%, transparent)', borderRadius: '4px', display: 'flex' }}>
                            <div className="text-caption" style={{ width: '40%', background: 'var(--color-canvas-charcoal)', borderRight: '1px solid var(--color-border-subtle)', borderRadius: '4px 0 0 4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Search (6h)</div>
                            <div className="text-caption" style={{ width: '40%', background: 'var(--color-canvas-charcoal)', borderRight: '1px solid var(--color-border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Extract (6h)</div>
                            <div className="text-caption" style={{ width: '20%', background: 'var(--color-canvas-layer-2)', borderRadius: '0 4px 4px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Synthesize</div>
                        </div>
                    </div>

                    {/* Hebbia Way */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <div className="text-body-sm" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: 'var(--color-agent-extraction-green)', fontWeight: 600 }}>
                            <span>Hebbia-Augmented</span>
                            <span>4 Hours</span>
                        </div>
                        <div style={{ width: '100%', height: '40px', background: 'color-mix(in srgb, var(--color-text-primary) 5%, transparent)', borderRadius: '4px', display: 'flex', position: 'relative' }}>
                            <div className="text-caption" style={{ width: '15%', background: 'var(--color-agent-extraction-green)', borderRadius: '4px 0 0 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bg-void)', fontWeight: 700 }}>Auto</div>
                            <div className="text-caption" style={{ width: '85%', background: 'var(--color-canvas-charcoal)', borderRadius: '0 4px 4px 0', display: 'flex', alignItems: 'center', paddingLeft: '16px', color: 'var(--color-text-secondary)' }}>High-Value Strategic Analysis (Redeployed Time)</div>

                            {/* Callout Arrow */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5 }}
                                className="text-mono-sm"
                                style={{ position: 'absolute', right: '0', top: '-30px', color: 'var(--color-agent-extraction-green)', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}
                            >
                                <span className="text-mono-sm" style={{ color: 'var(--color-agent-extraction-green)' }}>⏱</span>
                                12-16 Hours Saved
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Metrics Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <GlassPanel style={{ padding: '24px', display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <div style={{ background: 'color-mix(in srgb, var(--color-agent-extraction-green) 10%, transparent)', padding: '16px', borderRadius: '12px' }}>
                            <span className="text-subtitle" style={{ color: 'var(--color-agent-extraction-green)' }}>✓</span>
                        </div>
                        <div>
                            <div className="big-num xs">90%</div>
                            <div className="text-cell-data">Reduction in initial drafting time for investment memos.</div>
                        </div>
                    </GlassPanel>

                    <GlassPanel style={{ padding: '24px', display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <div style={{ background: 'color-mix(in srgb, var(--color-agent-extraction-green) 10%, transparent)', padding: '16px', borderRadius: '12px' }}>
                            <span className="text-subtitle" style={{ color: 'var(--color-agent-extraction-green)' }}>✓</span>
                        </div>
                        <div>
                            <div className="big-num xs">Zero</div>
                            <div className="text-cell-data">Hallucinations on extracted data points (verifiable via citations).</div>
                        </div>
                    </GlassPanel>
                </div>

            </div>
        </SlideContainer>
    );
};
