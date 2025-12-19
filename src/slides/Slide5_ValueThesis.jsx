import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';
import { AgenticStackDiagram } from '../components/AgenticStackDiagram';
import { FileText, Braces, Brain, CheckCircle2 } from 'lucide-react';
import { SlideHeader } from '../components/SlideHeader';

export const Slide5_ValueThesis = () => {
    const steps = [
        { num: '01', title: 'INGEST', desc: 'Any file, any format', color: 'var(--color-text-tertiary)', Icon: FileText },
        { num: '02', title: 'EXTRACT', desc: 'Structure key data points', color: 'var(--color-agent-extraction-green)', Icon: Braces },
        { num: '03', title: 'REASON', desc: 'Multi-step synthesis + comparison', color: 'var(--color-agent-reasoning-blue)', Icon: Brain },
        { num: '04', title: 'OUTPUT', desc: 'Memos, models, audit trails', color: 'var(--color-agent-synthesis-purple)', Icon: CheckCircle2 }
    ];

    return (
        <SlideContainer>
            {/* Header */}
            <SlideHeader
                kicker="04 // THE SOLUTION"
                title="An Agentic Reasoning Stack"
            />

            {/* Split Layout */}
            <div className="split-40-60" style={{ flex: 1 }}>
                {/* Left - Steps */}
                <div className="stagger-in active" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                    {steps.map((step, i) => {
                        const Icon = step.Icon;
                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 + i * 0.08, duration: 0.6 }}
                            >
                                <GlassPanel style={{ padding: 'clamp(14px, 2vw, 18px)' }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                            <div style={{
                                                width: 34,
                                                height: 34,
                                                borderRadius: 4,
                                                border: '1px solid var(--color-border-functional)',
                                                background: 'rgba(0,0,0,0.18)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: step.color
                                            }}>
                                                <Icon size={18} />
                                            </div>
                                            <div>
                                                <div style={{
                                                    fontFamily: 'var(--font-mono)',
                                                    color: step.color,
                                                    fontSize: 12,
                                                    letterSpacing: '0.12em',
                                                    textTransform: 'uppercase'
                                                }}>
                                                    {step.title}
                                                </div>
                                                <div style={{ color: 'var(--color-text-primary)', fontSize: 20, lineHeight: 1.45 }}>
                                                    {step.desc}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="u-font-mono" style={{ color: step.color, fontSize: 14, fontWeight: 600 }}>
                                            {step.num}
                                        </div>
                                    </div>
                                </GlassPanel>
                            </motion.div>
                        );
                    })}
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
                        padding: 'clamp(16px, 2.2vw, 24px)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 12 }}>
                            <div>
                                <div className="text-matrix-header" style={{ color: 'var(--color-text-tertiary)' }}>SYSTEM MODEL</div>
                                <div style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(20px, 2.5vw, 24px)', lineHeight: 1.25 }}>
                                    Agentic stack → verifiable outputs
                                </div>
                            </div>
                            <div className="pill blue" style={{ flex: '0 0 auto', marginTop: 2 }}>REASONING CORE</div>
                        </div>

                        <AgenticStackDiagram height="min(420px, 52vh)" />

                        <div className="u-font-mono" style={{ marginTop: 12, color: 'var(--color-text-tertiary)', fontSize: 12 }}>
                            CORE = AGENTIC REASONING (NOT JUST SEARCH)
                        </div>
                    </GlassPanel>
                </motion.div>
            </div>
        </SlideContainer>
    );
};
