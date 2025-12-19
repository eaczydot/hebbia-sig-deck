import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { SlideHeader } from '../components/SlideHeader';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Slide11_ValueCapacity = () => {
    return (
        <SlideContainer>
            <SlideHeader
                kicker="VALUE THESIS: CAPACITY"
                kickerColor="var(--color-agent-reasoning-blue)"
                title="Coverage Without Headcount"
                align="center"
                marginBottom={40}
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 'var(--layout-gap-md)', alignItems: 'stretch' }}>
                {/* Visual: Linear vs Exponential */}
                <GlassPanel style={{ gridColumn: 'span 2', padding: 'clamp(18px, 2.8vw, 32px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: 600, marginBottom: 'var(--spacing-xl)' }}>Decoupling AUM from FTEs</h3>

                    <div style={{ height: 'min(300px, 36vh)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', paddingLeft: 'clamp(18px, 3vw, 40px)', paddingBottom: 'clamp(18px, 3vw, 40px)', borderLeft: '1px solid #333', borderBottom: '1px solid #333', position: 'relative' }}>

                        {/* Legend */}
                        <div style={{
                            /* eslint-disable-next-line design-system/no-absolute-positioning */
                            position: 'absolute',
                            top: 'clamp(12px, 2vw, 20px)',
                            left: 'clamp(18px, 4vw, 60px)',
                            zIndex: 5
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--spacing-sm)' }}>
                                <div style={{ width: '12px', height: '12px', background: 'var(--color-agent-reasoning-blue)' }}></div>
                                <div className="text-cell-data">Coverage (Hebbia)</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '12px', height: '12px', background: '#444' }}></div>
                                <div className="text-cell-data">Headcount (FTEs)</div>
                            </div>
                        </div>

                        {/* Bars / Lines */}
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            {/* Headcount Line (Flat) */}
                            <svg style={{
                                /* eslint-disable-next-line design-system/no-absolute-positioning */
                                position: 'absolute',
                                inset: 0,
                                overflow: 'visible'
                            }}>
                                <path d="M 0 250 L 500 230" stroke="#444" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                                <text x="510" y="235" fill="#666" fontSize="12">FTEs</text>
                            </svg>

                            {/* Hebbia Impact (Exponential) */}
                            <svg style={{
                                /* eslint-disable-next-line design-system/no-absolute-positioning */
                                position: 'absolute',
                                inset: 0,
                                overflow: 'visible'
                            }}>
                                <path d="M 0 250 Q 250 200 500 50" stroke="var(--color-agent-reasoning-blue)" strokeWidth="4" fill="none" />
                                <text x="510" y="55" fill="var(--color-agent-reasoning-blue)" fontSize="12" fontWeight="bold">Coverage</text>
                            </svg>
                        </div>
                    </div>
                </GlassPanel>

                {/* Metrics */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--layout-gap-sm)' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <GlassPanel style={{ padding: 'clamp(16px, 2.2vw, 24px)', height: '100%', borderTop: '2px solid var(--color-agent-reasoning-blue)' }}>
                            <div style={{ fontSize: 'clamp(34px, 4.2vw, 48px)', fontWeight: 600, color: 'white' }}>10x</div>
                            <div style={{ fontSize: 'clamp(13px, 1.8vw, 16px)', color: 'var(--color-agent-reasoning-blue)', fontWeight: 600, marginBottom: 'var(--spacing-sm)' }}>Market Universe</div>
                            <p className="text-cell-data">Expand coverage from core names (50-100) to the entire investable universe (500+).</p>
                        </GlassPanel>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <GlassPanel style={{ padding: 'clamp(16px, 2.2vw, 24px)', height: '100%' }}>
                            <div style={{ fontSize: 'clamp(34px, 4.2vw, 48px)', fontWeight: 600, color: 'white' }}>0</div>
                            <div style={{ fontSize: 'clamp(13px, 1.8vw, 16px)', color: '#9CA3AF', fontWeight: 600, marginBottom: 'var(--spacing-sm)' }}>Additional Headcount</div>
                            <p className="text-cell-data">Scale strategy AUM without dilution of talent density.</p>
                        </GlassPanel>
                    </motion.div>
                </div>
            </div>
        </SlideContainer>
    );
};
