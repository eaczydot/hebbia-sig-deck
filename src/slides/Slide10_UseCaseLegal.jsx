import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { ContextBox } from '../components/ContextBox';
import { motion } from 'framer-motion';

export const Slide10_UseCaseLegal = () => {
    return (
        <SlideContainer>
            {/* Header */}
            <div style={{ marginBottom: '40px' }}>
                <div className="text-matrix-header">09 // USE CASE: LEGAL</div>
                <h2 className="text-hero" style={{ fontSize: '48px' }}>Automated Diligence & Risk</h2>
            </div>

            {/* Split Layout */}
            <div className="split-50-50" style={{ flex: 1 }}>
                {/* Left - Context */}
                <div className="stagger-in active">
                    <ContextBox header="PRE-TRADE DILIGENCE">
                        Instantly flag non-standard terms in offering memos before committing capital.
                    </ContextBox>
                    <ContextBox header="PORTFOLIO MONITORING" style={{ marginTop: '25px' }}>
                        Continuous scanning of credit agreements for covenant breaches or restricted payment allowances.
                    </ContextBox>
                    <ContextBox header="OUTSIDE COUNSEL SAVINGS" style={{ marginTop: '25px' }}>
                        Reduce outside counsel spend by automating the "redline" process against SIG's preferred terms.
                    </ContextBox>
                </div>

                {/* Right - Clause Compare Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <GlassPanel style={{ height: '100%', padding: '0', overflow: 'hidden' }}>
                        {/* Header Bar */}
                        <div style={{
                            background: 'var(--color-canvas-layer-2)',
                            padding: '12px 16px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottom: '1px solid var(--color-border-functional)'
                        }}>
                            <div className="u-font-mono" style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>LEGAL DILIGENCE MODE</div>
                            <span className="pill green" style={{ fontSize: '10px' }}>ACTIVE</span>
                        </div>

                        <div style={{ padding: '24px' }}>
                            <div style={{ marginBottom: '20px', borderLeft: '2px solid var(--color-agent-reasoning-blue)', paddingLeft: '12px' }}>
                                <div className="u-font-mono" style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', marginBottom: '4px' }}>CLAUSE TYPE</div>
                                <div style={{ fontWeight: 600, color: 'white' }}>Change of Control</div>
                            </div>

                            <div className="grid-2" style={{ marginTop: '20px' }}>
                                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '15px', border: '1px solid var(--color-border-functional)' }}>
                                    <div className="u-font-mono" style={{ fontSize: '10px', color: 'var(--color-text-tertiary)', marginBottom: '8px' }}>STANDARD TEMPLATE</div>
                                    <div style={{ fontSize: '12px', lineHeight: 1.5, color: 'var(--color-text-secondary)' }}>
                                        Upon the occurrence of a Change of Control, each Holder shall have the right to require the Issuer to repurchase...
                                    </div>
                                </div>
                                <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '15px', border: '1px solid var(--color-agent-citation-orange)' }}>
                                    <div className="u-font-mono" style={{ fontSize: '10px', color: 'var(--color-agent-citation-orange)', marginBottom: '8px' }}>⚠ VARIANCE DETECTED</div>
                                    <div style={{ fontSize: '12px', lineHeight: 1.5, color: 'var(--color-text-secondary)' }}>
                                        ...shall have the right to repurchase, <span style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24' }}>subject to Board discretion</span> regarding liquidity...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlassPanel>
                </motion.div>
            </div>
        </SlideContainer>
    );
};
