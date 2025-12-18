import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';

export const Slide5_ValueThesis = () => {
    const steps = [
        { num: '01', title: 'INGEST', desc: 'Any File, Any Format', color: 'var(--color-text-tertiary)' },
        { num: '02', title: 'EXTRACT', desc: 'Structure Key Data Points', color: 'var(--color-agent-extraction-green)' },
        { num: '03', title: 'REASON', desc: 'Multi-Step Synthesis & Comparison', color: 'var(--color-agent-reasoning-blue)' },
        { num: '04', title: 'OUTPUT', desc: 'Memos, Models, Audit Trails', color: 'var(--color-agent-synthesis-purple)' }
    ];

    return (
        <SlideContainer>
            {/* Header */}
            <div style={{ marginBottom: '40px' }}>
                <div className="text-matrix-header">04 // THE SOLUTION</div>
                <h2 className="text-hero" style={{ fontSize: '48px' }}>An Agentic Reasoning Stack</h2>
            </div>

            {/* Split Layout */}
            <div className="split-40-60" style={{ flex: 1 }}>
                {/* Left - Steps */}
                <div className="stagger-in active">
                    {steps.map((step, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            gap: '20px',
                            marginBottom: '30px',
                            alignItems: 'flex-start'
                        }}>
                            <div className="u-font-mono" style={{
                                color: step.color,
                                fontSize: '24px',
                                fontWeight: 700,
                                lineHeight: 1
                            }}>
                                {step.num}
                            </div>
                            <div>
                                <div style={{
                                    color: step.color,
                                    fontSize: '14px',
                                    letterSpacing: '0.1em',
                                    marginBottom: '5px'
                                }}>
                                    {step.title}
                                </div>
                                <div style={{ color: 'var(--color-text-secondary)', fontSize: '16px' }}>
                                    {step.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right - Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <GlassPanel style={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        padding: '60px',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Abstract Stack Visual */}
                        <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                            {[0, 1, 2, 3].map(i => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + i * 0.15 }}
                                    style={{
                                        position: 'absolute',
                                        bottom: `${i * 70}px`,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: `${85 - i * 5}%`,
                                        height: '60px',
                                        background: i === 2
                                            ? 'linear-gradient(90deg, var(--color-brand-lapis), var(--color-brand-cobalt))'
                                            : 'var(--color-canvas-layer-2)',
                                        border: '1px solid var(--color-border-functional)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '12px',
                                        fontFamily: 'var(--font-mono)',
                                        color: i === 2 ? '#fff' : 'var(--color-text-tertiary)',
                                        letterSpacing: '0.1em'
                                    }}
                                >
                                    {steps[i].title}
                                </motion.div>
                            ))}
                        </div>
                        <div className="u-font-mono" style={{ marginTop: '30px', color: 'var(--color-text-tertiary)', fontSize: '12px' }}>
                            CORE = AGENTIC REASONING (Not Just Search)
                        </div>
                    </GlassPanel>
                </motion.div>
            </div>
        </SlideContainer>
    );
};
