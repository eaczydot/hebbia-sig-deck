import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Slide11_ValueCapacity = () => {
    return (
        <SlideContainer>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <div className="text-matrix-header" style={{ justifyContent: 'center', color: 'var(--color-agent-reasoning-blue)' }}>VALUE THESIS: CAPACITY</div>
                <h2 className="text-title">
                    Coverage Without Headcount
                </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px', alignItems: 'stretch' }}>
                {/* Visual: Linear vs Exponential */}
                <GlassPanel style={{ gridColumn: 'span 2', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 className="text-subtitle" style={{ marginBottom: '24px' }}>Decoupling AUM from FTEs</h3>

                    <div style={{ height: '300px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', paddingLeft: '40px', paddingBottom: '40px', borderLeft: '1px solid var(--color-border-functional)', borderBottom: '1px solid var(--color-border-functional)', position: 'relative' }}>

                        {/* Legend */}
                        <div style={{ position: 'absolute', top: '20px', left: '60px', zIndex: 5 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <div style={{ width: '12px', height: '12px', background: 'var(--color-agent-reasoning-blue)' }}></div>
                                <div className="text-cell-data">Coverage (Hebbia)</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '12px', height: '12px', background: 'var(--color-border-functional)' }}></div>
                                <div className="text-cell-data">Headcount (FTEs)</div>
                            </div>
                        </div>

                        {/* Bars / Lines */}
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            {/* Headcount Line (Flat) */}
                            <svg style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
                                <path d="M 0 250 L 500 230" stroke="var(--color-border-functional)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                                <text x="510" y="235" fill="var(--color-text-tertiary)" fontSize="var(--type-caption-size)">FTEs</text>
                            </svg>

                            {/* Hebbia Impact (Exponential) */}
                            <svg style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
                                <path d="M 0 250 Q 250 200 500 50" stroke="var(--color-agent-reasoning-blue)" strokeWidth="4" fill="none" />
                                <text x="510" y="55" fill="var(--color-agent-reasoning-blue)" fontSize="var(--type-caption-size)" fontWeight="bold">Coverage</text>
                            </svg>
                        </div>
                    </div>
                </GlassPanel>

                {/* Metrics */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <GlassPanel style={{ padding: '24px', height: '100%', borderTop: '2px solid var(--color-agent-reasoning-blue)' }}>
                            <div className="big-num lg">10x</div>
                            <div className="text-body-lg" style={{ color: 'var(--color-agent-reasoning-blue)', fontWeight: 600, marginBottom: '8px' }}>Market Universe</div>
                            <p className="text-cell-data">Expand coverage from core names (50-100) to the entire investable universe (500+).</p>
                        </GlassPanel>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <GlassPanel style={{ padding: '24px', height: '100%' }}>
                            <div className="big-num lg">0</div>
                            <div className="text-body-lg" style={{ color: 'var(--color-text-secondary)', fontWeight: 600, marginBottom: '8px' }}>Additional Headcount</div>
                            <p className="text-cell-data">Scale strategy AUM without dilution of talent density.</p>
                        </GlassPanel>
                    </motion.div>
                </div>
            </div>
        </SlideContainer>
    );
};
