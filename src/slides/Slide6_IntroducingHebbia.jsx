import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { AgentPill } from '../components/AgentPill';
import { motion } from 'framer-motion';
import appScreenshot from '../assets/app-screenshot.png';
import { SlideHeader } from '../components/SlideHeader';

const FeatureBlock = ({ title, description, badge, align = 'left', delay }) => (
    <motion.div
        initial={{ opacity: 0, x: align === 'left' ? -20 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.8 }}
        style={{
            textAlign: align,
            maxWidth: '320px',
            flex: '1 1 280px'
        }}
    >
        <div style={{ marginBottom: '16px' }}>
            <span style={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: 'var(--color-brand-sky)',
                background: 'var(--pill-bg)',
                border: '1px solid var(--pill-border)',
                padding: '6px 12px',
                borderRadius: '4px',
                fontFamily: 'var(--font-primary)',
                textTransform: 'uppercase'
            }}>{badge}</span>
        </div>
        <h3 style={{ fontSize: '28px', fontWeight: 600, color: 'white', marginBottom: '16px', fontFamily: 'var(--font-primary)', letterSpacing: '-0.02em' }}>{title}</h3>
        <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, fontFamily: 'var(--font-primary)' }}>{description}</p>
    </motion.div>
);

export const Slide6_IntroducingHebbia = () => {
    return (
        <SlideContainer>
            <SlideHeader
                kicker="INTRODUCING HEBBIA"
                title={(
                    <>
                        The World's Leading <br />AI Analyst
                    </>
                )}
                align="center"
                titleSize={56}
                marginBottom={44}
            />

            {/* Central Interface Visual */}
            <div style={{ position: 'relative', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--layout-gap-xl)',
                    flexWrap: 'wrap'
                }}>

                {/* Main Glass Interface */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    style={{ position: 'relative', zIndex: 2, flex: '0 1 600px' }}
                >
                    <GlassPanel style={{
                        width: 'min(600px, 92vw)',
                        height: 'min(360px, 46vh)',
                        background: 'var(--color-canvas-charcoal)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 'clamp(16px, 2.2vw, 24px)',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
                        backgroundImage: `linear-gradient(rgba(5,5,5,0.6), rgba(5,5,5,0.85)), url(${appScreenshot})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        {/* Header Bar */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'clamp(14px, 2vw, 24px)', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 'clamp(10px, 1.8vw, 16px)' }}>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                            </div>
                            <div className="text-mono-data" style={{ fontSize: '10px', opacity: 0.8 }}>Matrix v2.0 // Cobalt Engine</div>
                        </div>

                        {/* Search/Prompt Area */}
                        <div style={{
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: '4px',
                            padding: 'clamp(12px, 1.8vw, 16px)',
                            marginBottom: 'clamp(14px, 2vw, 24px)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--color-brand-cobalt)' }} />
                            <div style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-primary)', fontSize: '14px', lineHeight: 1.35 }}>
                                Analyze credit agreements for change of control triggers…
                            </div>
                        </div>

                        {/* Agent Activity Area */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', flex: 1 }}>
                            <div style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '4px', padding: '16px', border: '1px solid rgba(255,255,255,0.03)' }}>
                                <div className="text-matrix-header" style={{ fontSize: '9px', marginBottom: '12px' }}>INFERENCE // 142 DOMAINS</div>
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                        <div key={i} style={{ width: '30px', height: '4px', background: 'var(--color-brand-cobalt)', borderRadius: '1px', opacity: i % 3 === 0 ? 0.8 : 0.2 }} />
                                    ))}
                                </div>
                            </div>
                            <div style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '4px', padding: '16px', border: '1px solid rgba(255,255,255,0.03)' }}>
                                <div className="text-matrix-header" style={{ fontSize: '9px', marginBottom: '12px' }}>REASONING TRACE</div>
                                <div style={{ marginTop: '8px' }}>
                                    <AgentPill label="Structuring..." />
                                </div>
                            </div>
                        </div>
                    </GlassPanel>
                </motion.div>

                {/* Left Feature */}
                <FeatureBlock
                    align="left"
                    badge="ENGINEERING"
                    title="Reasoning Engine"
                    description="Unlike chat-based LLMs, Hebbia breaks complex requests into atomic steps, executing them against millions of documents simultaneously."
                    delay={0.5}
                />

                {/* Right Feature */}
                <FeatureBlock
                    align="right"
                    badge="PROTOCOLS"
                    title="Audit Verification"
                    description="Every insight is cited back to the source page. Click to verify the exact paragraph used to generate the answer."
                    delay={0.7}
                />

                </div>

                {/* Background Glow */}
                <div style={{
                    /* eslint-disable-next-line design-system/no-absolute-positioning */
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 'min(680px, 92vw)',
                    height: 'min(420px, 52vh)',
                    background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                    zIndex: 0,
                    pointerEvents: 'none',
                    filter: 'blur(80px)'
                }} />

            </div>
        </SlideContainer>
    );
};
