import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2 } from 'lucide-react';

export const Slide12_ValueEfficiency = () => {
    return (
        <SlideContainer>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <div className="text-matrix-header" style={{ justifyContent: 'center', color: 'var(--color-agent-extraction-green)' }}>VALUE THESIS: EFFICIENCY</div>
                <h2 className="text-hero" style={{ fontSize: '48px' }}>
                    Compressing Time to Conviction
                </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>

                {/* Comparison Visual */}
                <div>
                    <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <h3 style={{ fontSize: '20px', fontWeight: 600 }}>Covenant Review Cycle</h3>
                        <div className="text-mono-data" style={{ opacity: 0.5 }}>AVG DEAL TIMELINE</div>
                    </div>

                    {/* Old Way */}
                    <div style={{ marginBottom: '32px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: '#64748B', fontSize: '13px' }}>
                            <span>Standard Analyst Workflow</span>
                            <span>2 Days</span>
                        </div>
                        <div style={{ width: '100%', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', display: 'flex' }}>
                            <div style={{ width: '40%', background: '#334155', borderRight: '1px solid #000', borderRadius: '4px 0 0 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>Search (6h)</div>
                            <div style={{ width: '40%', background: '#334155', borderRight: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>Extract (6h)</div>
                            <div style={{ width: '20%', background: '#475569', borderRadius: '0 4px 4px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>Synthesize</div>
                        </div>
                    </div>

                    {/* Hebbia Way */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: 'var(--color-agent-extraction-green)', fontSize: '13px', fontWeight: 600 }}>
                            <span>Hebbia-Augmented</span>
                            <span>4 Hours</span>
                        </div>
                        <div style={{ width: '100%', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', display: 'flex', position: 'relative' }}>
                            <div style={{ width: '15%', background: 'var(--color-agent-extraction-green)', borderRadius: '4px 0 0 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: '11px', fontWeight: 700 }}>Auto</div>
                            <div style={{ width: '85%', background: '#334155', borderRadius: '0 4px 4px 0', display: 'flex', alignItems: 'center', paddingLeft: '16px', fontSize: '11px', color: '#94A3B8' }}>High-Value Strategic Analysis (Redeployed Time)</div>

                            {/* Callout Arrow */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5 }}
                                style={{ position: 'absolute', right: '0', top: '-30px', color: '#10B981', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 600 }}
                            >
                                <Clock size={14} />
                                12-16 Hours Saved
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Metrics Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <GlassPanel style={{ padding: '24px', display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '16px', borderRadius: '12px' }}>
                            <CheckCircle2 color="#10B981" size={32} />
                        </div>
                        <div>
                            <div style={{ fontSize: '32px', fontWeight: 600, color: 'white' }}>90%</div>
                            <div className="text-cell-data">Reduction in initial drafting time for investment memos.</div>
                        </div>
                    </GlassPanel>

                    <GlassPanel style={{ padding: '24px', display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '16px', borderRadius: '12px' }}>
                            <CheckCircle2 color="#10B981" size={32} />
                        </div>
                        <div>
                            <div style={{ fontSize: '32px', fontWeight: 600, color: 'white' }}>Zero</div>
                            <div className="text-cell-data">Hallucinations on extracted data points (verifiable via citations).</div>
                        </div>
                    </GlassPanel>
                </div>

            </div>
        </SlideContainer>
    );
};
