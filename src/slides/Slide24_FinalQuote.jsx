import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { SlideHeader } from '../components/SlideHeader';
import { motion } from 'framer-motion';

export const Slide24_FinalQuote = () => {
    return (
        <SlideContainer className="u-flex-center">
            <div style={{ position: 'relative', width: 'min(90vw, 1080px)' }}>
                <motion.div
                    className="matrix-glow"
                    style={{
                        /* eslint-disable-next-line design-system/no-absolute-positioning */
                        position: 'absolute',
                        inset: '-20% 10% -30%',
                        borderRadius: '999px',
                        filter: 'blur(60px)',
                        opacity: 0.45,
                        zIndex: 0
                    }}
                    animate={{ opacity: [0.35, 0.55, 0.4] }}
                    transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <SlideHeader
                        kicker="FINAL THOUGHT"
                        align="center"
                        marginBottom={24}
                        kickerColor="var(--color-agent-reasoning-blue)"
                    />
                    <GlassPanel
                        className="active"
                        style={{
                            textAlign: 'center',
                            padding: 'clamp(40px, 7vw, 72px)',
                            backdropFilter: 'blur(22px)',
                            display: 'grid',
                            gap: 'var(--spacing-lg)'
                        }}
                    >
                        <div
                            className="pill blue"
                            style={{ margin: '0 auto', letterSpacing: '0.2em' }}
                        >
                            NEURAL FIRST PRINCIPLES
                        </div>
                        <div
                            className="text-hero text-serif"
                            style={{
                                fontSize: 'clamp(42px, 7.8vw, 80px)',
                                lineHeight: 1.05,
                                marginBottom: 0
                            }}
                        >
                            <span style={{ color: 'var(--color-agent-reasoning-blue)' }}>“</span>
                            What fires together, wires together.
                            <span style={{ color: 'var(--color-agent-reasoning-blue)' }}>”</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ width: '80px', height: '2px', background: 'var(--color-border-functional)' }} />
                        </div>
                        <div className="text-subhero" style={{ marginBottom: 0, color: 'var(--color-text-tertiary)' }}>
                            — Don Hebb
                        </div>
                        <div
                            className="u-font-mono"
                            style={{
                                fontSize: 'clamp(11px, 1.4vw, 13px)',
                                color: 'var(--color-text-secondary)',
                                letterSpacing: '0.24em',
                                textTransform: 'uppercase'
                            }}
                        >
                            End of Deck
                        </div>
                    </GlassPanel>
                </motion.div>
            </div>
        </SlideContainer>
    );
};
