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
        <div style={{ marginBottom: '16px' }}>
            <span style={{
                fontSize: 'var(--type-micro-size)',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: 'var(--color-brand-sky)',
                background: 'color-mix(in srgb, var(--color-brand-cobalt) 15%, transparent)',
                border: '1px solid color-mix(in srgb, var(--color-brand-cobalt) 30%, transparent)',
                padding: '6px 12px',
                borderRadius: '4px',
                fontFamily: 'var(--font-primary)',
                textTransform: 'uppercase'
            }}>{badge}</span>
        </div>
        <h3 className="text-headline" style={{ marginBottom: '16px' }}>{title}</h3>
        <p className="text-body">{description}</p>
    </motion.div>
);

export const Slide6_IntroducingHebbia = () => {
    return (
        <SlideContainer>
            <div style={{ textAlign: 'center', marginBottom: '60px', zIndex: 10 }}>
                <div className="text-matrix-header" style={{ justifyContent: 'center' }}>INTRODUCING HEBBIA</div>
                <h2 className="text-title">
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
                        background: 'var(--color-canvas-charcoal)',
                        border: '1px solid color-mix(in srgb, var(--color-brand-cobalt) 20%, transparent)',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '24px',
                        boxShadow: '0 20px 50px color-mix(in srgb, var(--bg-void) 40%, transparent)'
                    }}>
                        {/* Header Bar */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', borderBottom: '1px solid color-mix(in srgb, var(--color-text-primary) 5%, transparent)', paddingBottom: '16px' }}>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--red)' }} />
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--orange)' }} />
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--green)' }} />
                            </div>
                            <div className="text-mono-xs" style={{ opacity: 0.8 }}>Matrix v2.0 // Cobalt Engine</div>
                        </div>

                        {/* Search/Prompt Area */}
                        <div style={{
                            background: 'color-mix(in srgb, var(--color-text-primary) 3%, transparent)',
                            borderRadius: '4px',
                            padding: '16px',
                            marginBottom: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            border: '1px solid color-mix(in srgb, var(--color-text-primary) 5%, transparent)'
                        }}>
                            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--color-brand-cobalt)' }} />
                            <div className="text-body-sm">Analyze credit agreements for change of control triggers...</div>
                        </div>

                        {/* Agent Activity Area */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', flex: 1 }}>
                            <div style={{ background: 'color-mix(in srgb, var(--bg-void) 50%, transparent)', borderRadius: '4px', padding: '16px', border: '1px solid color-mix(in srgb, var(--color-text-primary) 3%, transparent)' }}>
                                <div className="text-matrix-header sm" style={{ marginBottom: '12px' }}>INFERENCE // 142 DOMAINS</div>
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                        <div key={i} style={{ width: '30px', height: '4px', background: 'var(--color-brand-cobalt)', borderRadius: '1px', opacity: i % 3 === 0 ? 0.8 : 0.2 }} />
                                    ))}
                                </div>
                            </div>
                            <div style={{ background: 'color-mix(in srgb, var(--bg-void) 50%, transparent)', borderRadius: '4px', padding: '16px', border: '1px solid color-mix(in srgb, var(--color-text-primary) 3%, transparent)' }}>
                                <div className="text-matrix-header sm" style={{ marginBottom: '12px' }}>REASONING TRACE</div>
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

                {/* Background Glow */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '400px',
                    background: 'radial-gradient(ellipse, color-mix(in srgb, var(--color-brand-cobalt) 15%, transparent) 0%, transparent 70%)',
                    zIndex: 0,
                    pointerEvents: 'none',
                    filter: 'blur(80px)'
                }} />

            </div>
        </SlideContainer>
    );
};
