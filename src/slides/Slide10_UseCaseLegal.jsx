import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { ContextBox } from '../components/ContextBox';
import { InteractiveImage } from '../components/InteractiveImage';
import { SlideHeader } from '../components/SlideHeader';
import { motion } from 'framer-motion';

import creditAgreements from '../assets/credit-aggrements.webp';
import redFlagsRisk from '../assets/red-flags-risk.png';

export const Slide10_UseCaseLegal = () => {
    return (
        <SlideContainer>
            {/* Header */}
            <SlideHeader
                kicker="09 // USE CASE: LEGAL"
                title="Automated Diligence & Risk"
            />

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

                            <div style={{ marginTop: '18px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                <InteractiveImage
                                    src={creditAgreements}
                                    alt="Credit agreements matrix product screenshot"
                                    height={190}
                                    hotspots={[
                                        { id: 'rows', x: 0.30, y: 0.52, title: 'Clause extraction', body: 'Rows represent extracted clauses and normalized terms for comparison.' },
                                        { id: 'cols', x: 0.78, y: 0.35, title: 'Comparison columns', body: 'Hebbia structures documents into comparable fields so variance is obvious.' }
                                    ]}
                                />
                                <InteractiveImage
                                    src={redFlagsRisk}
                                    alt="Red flags matrix product screenshot"
                                    height={190}
                                    hotspots={[
                                        { id: 'flags', x: 0.22, y: 0.45, title: 'Risk flags', body: 'Non-standard language is surfaced as actionable flags with traceable citations.' },
                                        { id: 'citations', x: 0.85, y: 0.55, title: 'Source grounding', body: 'Each flag can be traced back to exact text spans in the source agreement.' }
                                    ]}
                                />
                            </div>
                        </div>
                    </GlassPanel>
                </motion.div>
            </div>
        </SlideContainer>
    );
};
