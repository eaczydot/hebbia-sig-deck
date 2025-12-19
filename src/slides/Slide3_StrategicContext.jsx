import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { ContextBox } from '../components/ContextBox';
import { motion } from 'framer-motion';
import { NeuralNet3D } from '../components/NeuralNet3D';
import { SlideHeader } from '../components/SlideHeader';

export const Slide3_StrategicContext = () => {
    return (
        <SlideContainer>
            {/* Header */}
            <SlideHeader
                kicker="02 // STRATEGIC CONTEXT"
                title="SIG: Scientific Rigor at Global Scale"
            />

            {/* Split Layout */}
            <div className="split-30-70" style={{ flex: 1 }}>
                {/* Left Column - Context */}
                <div className="stagger-in active">
                    <ContextBox header="CULTURAL FIT">
                        SIG is powered by decision science and game theory. Hebbia matches this ethos by moving AI from "chat" to rigorous, verifiable <strong style={{ color: 'var(--color-brand-cobalt)' }}>reasoning</strong>.
                    </ContextBox>

                    <ContextBox header="SCALE" style={{ marginTop: 'var(--spacing-xl)' }}>
                        <div className="u-font-mono" style={{ fontSize: 'clamp(12px, 1.5vw, 14px)', marginBottom: 'var(--spacing-xs)' }}>&gt; 3,200 Employees</div>
                        <div className="u-font-mono" style={{ fontSize: 'clamp(12px, 1.5vw, 14px)', marginBottom: 'var(--spacing-xs)' }}>&gt; 17 Global Offices</div>
                        <div className="u-font-mono" style={{ fontSize: 'clamp(12px, 1.5vw, 14px)' }}>&gt; 24/7 Trading</div>
                    </ContextBox>
                </div>

                {/* Right Column - Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <GlassPanel style={{
                        height: '100%',
                        padding: 'clamp(16px, 2.2vw, 24px)',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
                            <div>
                                <div className="text-matrix-header" style={{ color: 'var(--color-text-tertiary)' }}>HEBBIA INSIGHT</div>
                                <div style={{ fontSize: 'clamp(20px, 2.7vw, 26px)', color: 'var(--color-text-primary)', lineHeight: 1.25, maxWidth: 520 }}>
                                    A reasoning system is a <span style={{ color: 'var(--color-brand-cobalt)', fontWeight: 600 }}>network</span>, not a chatbot.
                                </div>
                            </div>
                                                    </div>

                        <div style={{ marginTop: 'var(--spacing-lg)', flex: 1, display: 'flex', alignItems: 'center' }}>
                            <NeuralNet3D
                                height="min(420px, 52vh)"
                                style={{
                                    width: '100%',
                                    border: '1px solid var(--color-border-functional)',
                                    background: 'rgba(0,0,0,0.25)'
                                }}
                            />
                        </div>

                        <div className="u-font-mono" style={{ fontSize: 'clamp(11px, 1.2vw, 12px)', color: 'var(--color-text-tertiary)', marginTop: 'auto' }}>
                            DIVERSE OPERATIONS: Market Making, Quant Trading, Private Equity, Institutional Brokerage.
                        </div>

                        <div style={{ marginTop: 'var(--spacing-xl)', borderTop: '1px solid var(--color-border-functional)', paddingTop: 'var(--spacing-xl)' }}>
                            <div className="text-matrix-header" style={{ color: 'var(--color-text-secondary)' }}>THE BOTTLENECK</div>
                            <div style={{ fontSize: 'clamp(20px, 2.4vw, 24px)', color: 'var(--color-text-primary)', lineHeight: 1.4 }}>
                                "Continuous innovation demands tools that match the pace and scale of inquiry."
                            </div>
                        </div>
                    </GlassPanel>
                </motion.div>
            </div>
        </SlideContainer>
    );
};
