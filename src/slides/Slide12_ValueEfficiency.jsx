import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { InteractiveImage } from '../components/InteractiveImage';
import { SlideHeader } from '../components/SlideHeader';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2 } from 'lucide-react';

import icMemos from '../assets/IC-memos.webp';

export const Slide12_ValueEfficiency = () => {
    return (
        <SlideContainer>
            <SlideHeader
                kicker="VALUE THESIS: EFFICIENCY"
                kickerColor="var(--color-agent-extraction-green)"
                title="Compressing Time to Conviction"
                align="center"
                marginBottom={40}
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 'var(--layout-gap-xl)', alignItems: 'center' }}>

                {/* Comparison Visual */}
                <div>
                    <div style={{ marginBottom: 'var(--spacing-xl)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--spacing-md)' }}>
                        <h3 style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 600 }}>Covenant Review Cycle</h3>
                        <div className="text-mono-data" style={{ opacity: 0.5 }}>AVG DEAL TIMELINE</div>
                    </div>

                    {/* Old Way */}
                    <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: '#64748B', fontSize: '13px' }}>
                            <span>Standard Analyst Workflow</span>
                            <span>2 Days</span>
                        </div>
                        <div style={{ width: '100%', height: 'clamp(34px, 4.5vh, 40px)', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', display: 'flex' }}>
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
                        <div style={{ width: '100%', height: 'clamp(34px, 4.5vh, 40px)', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', display: 'flex', position: 'relative' }}>
                            <div style={{ width: '15%', background: 'var(--color-agent-extraction-green)', borderRadius: '4px 0 0 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: '11px', fontWeight: 700 }}>Auto</div>
                            <div style={{ width: '85%', background: '#334155', borderRadius: '0 4px 4px 0', display: 'flex', alignItems: 'center', paddingLeft: '16px', fontSize: '11px', color: '#94A3B8' }}>High-Value Strategic Analysis (Redeployed Time)</div>

                            {/* Callout Arrow */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.5 }}
                                    style={{
                                        /* eslint-disable-next-line design-system/no-absolute-positioning */
                                        position: 'absolute',
                                        right: '0',
                                        top: '-30px',
                                        color: '#10B981',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        fontSize: '12px',
                                        fontWeight: 600
                                    }}
                                >
                                <Clock size={14} />
                                12-16 Hours Saved
                            </motion.div>
                        </div>
                    </motion.div>

                    <div style={{ marginTop: 'var(--spacing-xl)' }}>
                        <GlassPanel style={{ padding: 'clamp(12px, 1.8vw, 14px)' }}>
                            <div className="text-matrix-header" style={{ color: 'var(--color-text-tertiary)' }}>EXAMPLE OUTPUT: IC MEMO DRAFT</div>
                            <InteractiveImage
                                src={icMemos}
                                alt="IC memo drafting matrix product screenshot"
                                height="min(240px, 28vh)"
                                hotspots={[
                                    { id: 'outline', x: 0.22, y: 0.30, title: 'Auto-outline', body: 'Hebbia drafts an initial memo structure directly from extracted facts.' },
                                    { id: 'citations', x: 0.84, y: 0.52, title: 'Traceable claims', body: 'Assertions are grounded in citations so reviewers can verify quickly.' }
                                ]}
                            />
                        </GlassPanel>
                    </div>
                </div>

                {/* Metrics Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--layout-gap-sm)' }}>
                    <GlassPanel style={{ padding: 'clamp(16px, 2.2vw, 24px)', display: 'flex', gap: 'var(--layout-gap-sm)', alignItems: 'center' }}>
                        <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: 'clamp(12px, 1.8vw, 16px)', borderRadius: '12px' }}>
                            <CheckCircle2 color="#10B981" size={32} />
                        </div>
                        <div>
                            <div style={{ fontSize: 'clamp(26px, 3.2vw, 32px)', fontWeight: 600, color: 'white' }}>90%</div>
                            <div className="text-cell-data">Reduction in initial drafting time for investment memos.</div>
                        </div>
                    </GlassPanel>

                    <GlassPanel style={{ padding: 'clamp(16px, 2.2vw, 24px)', display: 'flex', gap: 'var(--layout-gap-sm)', alignItems: 'center' }}>
                        <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: 'clamp(12px, 1.8vw, 16px)', borderRadius: '12px' }}>
                            <CheckCircle2 color="#10B981" size={32} />
                        </div>
                        <div>
                            <div style={{ fontSize: 'clamp(26px, 3.2vw, 32px)', fontWeight: 600, color: 'white' }}>Zero</div>
                            <div className="text-cell-data">Hallucinations on extracted data points (verifiable via citations).</div>
                        </div>
                    </GlassPanel>
                </div>

            </div>
        </SlideContainer>
    );
};
