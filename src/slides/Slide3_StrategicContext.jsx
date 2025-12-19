import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { ContextBox } from '../components/ContextBox';
import { Globe, Users, TrendingUp, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export const Slide3_StrategicContext = () => {
    return (
        <SlideContainer>
            {/* Header */}
            <div style={{ marginBottom: '40px' }}>
                <div className="text-matrix-header">02 // STRATEGIC CONTEXT</div>
                <h2 className="text-title">SIG: Scientific Rigor at Global Scale</h2>
            </div>

            {/* Split Layout */}
            <div className="split-30-70" style={{ flex: 1 }}>
                {/* Left Column - Context */}
                <div className="stagger-in active">
                    <ContextBox header="CULTURAL FIT">
                        SIG is powered by decision science and game theory. Hebbia matches this ethos by moving AI from "chat" to rigorous, verifiable <strong style={{ color: 'var(--color-brand-cobalt)' }}>reasoning</strong>.
                    </ContextBox>

                    <ContextBox header="SCALE" style={{ marginTop: '30px' }}>
                        <div className="text-mono-md" style={{ marginBottom: '5px' }}>&gt; 3,200 Employees</div>
                        <div className="text-mono-md" style={{ marginBottom: '5px' }}>&gt; 17 Global Offices</div>
                        <div className="text-mono-md">&gt; 24/7 Trading</div>
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
                        padding: '40px',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        {/* Abstract World Nodes */}
                        <div style={{ position: 'absolute', top: '30%', left: '20%', width: '8px', height: '8px', background: 'var(--color-text-primary)', boxShadow: '0 0 15px var(--color-text-primary)' }} />
                        <div style={{ position: 'absolute', top: '28%', left: '45%', width: '6px', height: '6px', background: 'var(--color-brand-cobalt)' }} />
                        <div style={{ position: 'absolute', top: '35%', left: '75%', width: '6px', height: '6px', background: 'var(--color-brand-cobalt)' }} />
                        <div style={{ position: 'absolute', top: '60%', left: '85%', width: '6px', height: '6px', background: 'var(--color-brand-cobalt)' }} />

                        <div className="text-mono-sm" style={{ color: 'var(--color-text-tertiary)', marginTop: 'auto' }}>
                            DIVERSE OPERATIONS: Market Making, Quant Trading, Private Equity, Institutional Brokerage.
                        </div>

                        <div style={{ marginTop: '20px', borderTop: '1px solid var(--color-border-functional)', paddingTop: '20px' }}>
                            <div className="text-matrix-header" style={{ color: 'var(--color-text-secondary)' }}>THE BOTTLENECK</div>
                            <div className="text-subtitle-sm" style={{ lineHeight: 1.4 }}>
                                "Continuous innovation demands tools that match the pace and scale of inquiry."
                            </div>
                        </div>
                    </GlassPanel>
                </motion.div>
            </div>
        </SlideContainer>
    );
};
