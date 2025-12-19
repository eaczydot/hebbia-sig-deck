import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { motion } from 'framer-motion';

export const Slide1_Cover = () => {
    return (
        <SlideContainer className="u-flex-center">
            <div style={{ width: '100%', maxWidth: '900px', zIndex: 10, position: 'relative' }}>

                {/* 1. Logos & Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 'var(--layout-gap-sm)',
                        flexWrap: 'wrap',
                        marginBottom: 'clamp(32px, 6vw, 80px)'
                    }}
                >
                    <div style={{ display: 'flex', gap: 'var(--layout-gap-sm)', alignItems: 'center' }}>
                        <div style={{ fontWeight: 800, fontSize: '24px', letterSpacing: '0.15em', color: 'var(--color-brand-cobalt)' }}>HEBBIA</div>
                        <div style={{ width: '1px', height: '16px', background: 'var(--color-border-functional)' }}></div>
                        <div style={{ fontWeight: 700, fontSize: '24px', letterSpacing: '0.15em', color: 'var(--color-text-tertiary)' }}>SIG</div>
                    </div>
                    <div style={{
                        padding: '6px 12px',
                        background: 'var(--pill-bg)',
                        border: '1px solid var(--pill-border)',
                        borderRadius: '4px',
                        color: 'var(--color-brand-sky)',
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.1em'
                    }}>
                        STRATEGIC PARTNERSHIP
                    </div>
                </motion.div>

                {/* 2. Hero Title */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                >
                    <h1 className="text-hero" style={{ fontSize: 'clamp(44px, 10vw, 84px)', marginBottom: '24px', lineHeight: 1, letterSpacing: '-0.04em' }}>
                        Unlocking Growth & <br /> Operating Leverage
                    </h1>
                    <p style={{
                        fontSize: 'clamp(18px, 3.6vw, 26px)',
                        color: 'var(--color-text-secondary)',
                        fontFamily: 'var(--font-primary)',
                        fontWeight: 300,
                        maxWidth: '700px',
                        lineHeight: 1.4,
                        letterSpacing: '-0.01em'
                    }}>
                        A strategic proposal for specific, measurable efficiency gains at Susquehanna International Group.
                    </p>
                </motion.div>

                {/* 3. Decorative Agent Pulse */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        right: '-100px',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, var(--color-agent-reasoning-glow) 0%, transparent 70%)',
                        opacity: 0.2,
                        zIndex: -1,
                        filter: 'blur(40px)'
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />

                {/* 4. Metadata Grid (Bottom) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    style={{
                        marginTop: 'clamp(48px, 8vw, 120px)',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                        borderTop: '1px solid var(--color-border-subtle)',
                        paddingTop: 'var(--spacing-xl)',
                        gap: 'var(--layout-gap-sm)'
                    }}
                >
                    <div>
                        <div className="text-matrix-header">PREPARED FOR</div>
                        <div className="text-cell-data" style={{ color: 'var(--color-text-primary)' }}>Susquehanna International Group</div>
                    </div>
                    <div>
                        <div className="text-matrix-header">PREPARED BY</div>
                        <div className="text-cell-data" style={{ color: 'var(--color-text-primary)' }}>Hebbia AI Strategy Team</div>
                    </div>
                    <div>
                        <div className="text-matrix-header">DATE</div>
                        <div className="text-cell-data" style={{ color: 'var(--color-text-primary)' }}>December 18, 2025</div>
                    </div>
                    <div>
                        <div className="text-matrix-header">VERSION</div>
                        <div className="text-cell-data" style={{ color: 'var(--color-text-primary)' }}>1.0 (Enterprise Proposal)</div>
                    </div>
                </motion.div>

                {/* Disclaimer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    style={{
                        marginTop: 'var(--spacing-3xl)',
                        fontSize: 'clamp(9px, 1vw, 10px)',
                        color: 'var(--color-text-tertiary)',
                        lineHeight: 1.6,
                        maxWidth: '100%',
                        opacity: 0.6
                    }}
                >
                    Disclaimer: This document is a confidential proposal prepared by Hebbia for discussion purposes with Susquehanna International Group (SIG). The information contained herein is based on publicly available data, industry benchmarks, and Hebbia's analysis. ROI projections are estimates based on stated assumptions.
                </motion.div>
            </div>
        </SlideContainer>
    );
};
