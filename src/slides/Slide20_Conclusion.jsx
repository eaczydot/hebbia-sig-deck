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
                        Ship Healthcare Transactions, Not EDI Files.
                    </h1>
                    <div style={{ marginTop: '40px', borderLeft: '2px solid var(--color-border-functional)', paddingLeft: '20px' }}>
                        <div className="u-font-mono" style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginBottom: '10px' }}>1. Create your Stedi account (stedi.com)</div>
                        <div className="u-font-mono" style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginBottom: '10px' }}>2. Send your first eligibility check</div>
                        <div className="u-font-mono" style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>3. Go live with claims in production</div>
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
                        <div className="big-num text-blue" style={{ fontSize: '56px' }}>Live in a Day</div>
                        <div className="u-font-mono" style={{ fontSize: '16px', marginBottom: '20px', color: 'var(--color-text-secondary)' }}>From Sign-Up to Production</div>
                        <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '20px', maxWidth: '300px' }}>
                            "We made the switch over to Stedi and were live in a day."
                            <br /><span style={{ fontStyle: 'normal', fontWeight: 600, color: 'var(--color-text-primary)' }}>— Keaton Bedell, CEO & Founder of Bridge</span>
                        </p>
                        <div style={{ fontSize: '14px', color: 'var(--color-text-tertiary)', lineHeight: 1.6 }}>
                            stedi.com | stedi.com/docs
                        </div>
                    </GlassPanel>
                </motion.div>
            </div>
        </SlideContainer>
    );
};
