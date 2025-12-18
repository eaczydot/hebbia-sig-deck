import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';

export const Slide20_Conclusion = () => {
    return (
        <SlideContainer>
            {/* Split Layout CTA */}
            <div className="split-50-50" style={{ alignItems: 'center', height: '100%' }}>
                {/* Left - Hero CTA */}
                <div className="stagger-in active">
                    <span className="pill blue" style={{ marginBottom: '20px', display: 'inline-block' }}>NEXT STEPS</span>
                    <h1 className="text-hero" style={{ fontSize: '64px', lineHeight: 1.05 }}>
                        Build the Future of Quantitative Reasoning.
                    </h1>
                    <div style={{ marginTop: '40px', borderLeft: '2px solid var(--color-border-functional)', paddingLeft: '20px' }}>
                        <div className="u-font-mono" style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginBottom: '10px' }}>1. Finalize Pilot Scope (Week 0)</div>
                        <div className="u-font-mono" style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginBottom: '10px' }}>2. Technical Deep Dive (Security)</div>
                        <div className="u-font-mono" style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>3. Procurement Readiness</div>
                    </div>
                </div>

                {/* Right - Value Summary */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <GlassPanel style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        padding: '60px 40px',
                        height: '100%'
                    }}>
                        <div className="big-num text-blue" style={{ fontSize: '72px' }}>6 Weeks</div>
                        <div className="u-font-mono" style={{ fontSize: '16px', marginBottom: '40px', color: 'var(--color-text-secondary)' }}>To Validated Value</div>
                        <div style={{ fontSize: '14px', color: 'var(--color-text-tertiary)', lineHeight: 1.6 }}>
                            partnerships@hebbia.ai<br />
                            Classification: Confidential
                        </div>
                    </GlassPanel>
                </motion.div>
            </div>
        </SlideContainer>
    );
};
