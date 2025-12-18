import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { AgentPill } from '../components/AgentPill';
import { motion } from 'framer-motion';

const FeatureBlock = ({ title, description, badge, align = 'left', delay }) => (
    <motion.div
        initial={{ opacity: 0, x: align === 'left' ? -20 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.8 }}
        style={{
            textAlign: align,
            maxWidth: '300px',
            position: 'absolute',
            ...(align === 'left' ? { left: '40px' } : { right: '40px' }),
            top: '50%',
            transform: 'translateY(-50%)'
        }}
    >
        <div style={{ marginBottom: '12px' }}>
            <span style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: 'var(--color-agent-reasoning-blue)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                padding: '4px 8px',
                borderRadius: '99px'
            }}>{badge}</span>
        </div>
        <h3 style={{ fontSize: '24px', fontWeight: 600, color: 'white', marginBottom: '12px' }}>{title}</h3>
        <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{description}</p>
    </motion.div>
);

export const Slide6_IntroducingHebbia = () => {
    return (
        <SlideContainer>
            <div style={{ textAlign: 'center', marginBottom: '60px', zIndex: 10 }}>
                <div className="text-matrix-header" style={{ justifyContent: 'center' }}>INTRODUCING HEBBIA</div>
                <h2 className="text-hero" style={{ fontSize: '56px' }}>
                    The World's Leading <br />AI Analyst
                </h2>
            </div>

            {/* Central Interface Visual */}
            <div style={{ position: 'relative', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                {/* Main Glass Interface */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    style={{ position: 'relative', zIndex: 2 }}
                >
                    <GlassPanel style={{
                        width: '600px',
                        height: '360px',
                        background: 'linear-gradient(145deg, rgba(10,10,10,0.8) 0%, rgba(5,5,5,0.9) 100%)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '24px'
                    }}>
                        {/* Header Bar */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '16px' }}>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }} />
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }} />
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }} />
                            </div>
                            <div className="text-mono-data">Matrix v2.0 // Connected</div>
                        </div>

                        {/* Search/Prompt Area */}
                        <div style={{
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: '8px',
                            padding: '16px',
                            marginBottom: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-agent-reasoning-blue)' }} />
                            <div style={{ color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>Analyze credit agreements for change of control triggers...</div>
                        </div>

                        {/* Agent Activity Area */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', flex: 1 }}>
                            <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '6px', padding: '12px' }}>
                                <div className="text-matrix-header" style={{ fontSize: '10px' }}>Reading 142 Docs</div>
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} style={{ width: '40px', height: '6px', background: 'var(--color-agent-extraction-green)', borderRadius: '2px', opacity: 0.5 }} />
                                    ))}
                                </div>
                            </div>
                            <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '6px', padding: '12px' }}>
                                <div className="text-matrix-header" style={{ fontSize: '10px' }}>Synthesizing Logic</div>
                                <div style={{ marginTop: '8px' }}>
                                    <AgentPill label="Reasoning..." />
                                </div>
                            </div>
                        </div>
                    </GlassPanel>
                </motion.div>

                {/* Left Feature */}
                <FeatureBlock
                    align="left"
                    badge="ENTERPRISE READY"
                    title="Reasoning Engine"
                    description="Unlike chat-based LLMs, Hebbia breaks complex requests into atomic steps, executing them against millions of documents simultaneously."
                    delay={0.5}
                />

                {/* Right Feature */}
                <FeatureBlock
                    align="right"
                    badge="FULL TRANSPARENCY"
                    title="Audit Verification"
                    description="Every insight is cited back to the source page. Click to verify the exact paragraph used to generate the answer."
                    delay={0.7}
                />

                {/* Background Glow */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '400px',
                    background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                    zIndex: 0,
                    pointerEvents: 'none',
                    filter: 'blur(60px)'
                }} />

            </div>
        </SlideContainer>
    );
};
