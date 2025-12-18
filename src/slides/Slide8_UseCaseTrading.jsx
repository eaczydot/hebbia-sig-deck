import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { AgentPill } from '../components/AgentPill';
import { motion } from 'framer-motion';

const PromptBubble = ({ text }) => (
    <div style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '16px',
        borderRadius: '12px',
        maxWidth: '80%',
        marginBottom: '20px',
        color: 'var(--color-text-primary)'
    }}>
        <div className="text-mono-data" style={{ marginBottom: '8px', color: 'var(--color-agent-reasoning-blue)' }}>USER QUERY</div>
        <div style={{ fontSize: '16px' }}>"{text}"</div>
    </div>
);

export const Slide8_UseCaseTrading = () => {
    return (
        <SlideContainer>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', height: '100%' }}>

                {/* Visual Interface */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <GlassPanel style={{ padding: '24px', flex: 1, maxHeight: '600px' }}>
                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px', marginBottom: '24px' }}>
                            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#EF4444' }}>EVENT DRIVEN // CREDIT</div>
                        </div>

                        <PromptBubble text="Extract all 'Restricted Payments' baskets across our distressed retail universe and flag any growing capacity linked to EBITDA." />

                        <div style={{ paddingLeft: '24px', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                            <div className="text-mono-data" style={{ marginBottom: '16px' }}>HEBBIA MATRIX OUTPUT</div>

                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.2 }}
                                    style={{
                                        padding: '12px',
                                        background: 'rgba(255,255,255,0.02)',
                                        borderRadius: '4px',
                                        marginBottom: '8px',
                                        fontSize: '13px'
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                        <span style={{ fontWeight: 600, color: 'white' }}>Issuer {i === 1 ? 'A (Top Pick)' : i === 2 ? 'B' : 'C'}</span>
                                        <span style={{ color: i === 1 ? '#10B981' : '#64748B' }}>{i === 1 ? '$500M Capacity' : '$120M'}</span>
                                    </div>
                                    <div style={{ color: '#888', fontSize: '11px' }}>Source: Indenture Sec 4.07(b) • pg 142</div>
                                </motion.div>
                            ))}
                        </div>
                    </GlassPanel>
                </div>

                {/* Narrative */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="text-matrix-header" style={{ color: '#EF4444' }}>USE CASE: TRADING</div>
                    <h2 className="text-hero" style={{ fontSize: '42px', marginBottom: '24px' }}>
                        Event-Driven <br /> Idea Generation
                    </h2>

                    <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--color-text-secondary)', marginBottom: '40px' }}>
                        Instead of waiting for sell-side notes, traders can proactively screen their entire coverage universe for specific covenant loopholes or structural catalysts in minutes.
                    </p>

                    <div style={{ display: 'grid', gap: '24px' }}>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <div style={{ minWidth: '2px', background: '#EF4444' }} />
                            <div>
                                <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '4px' }}>Scenario</h4>
                                <p className="text-cell-data">Distressed retail sector sell-off. Need to find issuers with liquidity runways &gt; 12mo.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <div style={{ minWidth: '2px', background: 'var(--color-agent-reasoning-blue)' }} />
                            <div>
                                <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '4px' }}>Result</h4>
                                <p className="text-cell-data">Hebbia structured 45 indentures into a comparables grid, highlighting 3 mispriced bonds.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </SlideContainer>
    );
};
