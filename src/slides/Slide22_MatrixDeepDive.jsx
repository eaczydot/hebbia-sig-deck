import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';
import { Filter, Layers, Layout, MousePointer2 } from 'lucide-react';
import { SlideHeader } from '../components/SlideHeader';

export const Slide22_MatrixDeepDive = () => {
    return (
        <SlideContainer>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: 'var(--layout-gap-xl)', height: '100%' }}>

                {/* Narrative */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <SlideHeader
                        kicker="DEEP DIVE // THE MATRIX"
                        kickerColor="var(--color-agent-reasoning-blue)"
                        title={(
                            <>
                                Infinite Data <br />Manipulation
                            </>
                        )}
                        titleSize={42}
                        subtitle="The Matrix is not a static view; it is a live, programmable workspace where analysts can pivot, filter, and extend data points across millions of pages in seconds."
                        subtitleSize={18}
                        subtitleMaxWidth={560}
                        marginBottom={40}
                    />

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 'var(--layout-gap-sm)' }}>
                        <GlassPanel style={{ padding: 'clamp(14px, 1.8vw, 16px)' }}>
                            <Filter size={20} color="var(--color-agent-reasoning-blue)" />
                            <h4 style={{ color: 'white', marginTop: 'var(--spacing-md)', marginBottom: 'var(--spacing-xs)' }}>Smart Filtering</h4>
                            <p style={{ fontSize: 'clamp(10px, 1.1vw, 11px)', color: '#888' }}>Find every mention of 'Material Adverse Effect' across the portfolio.</p>
                        </GlassPanel>
                        <GlassPanel style={{ padding: 'clamp(14px, 1.8vw, 16px)' }}>
                            <Layers size={20} color="var(--color-agent-extraction-green)" />
                            <h4 style={{ color: 'white', marginTop: 'var(--spacing-md)', marginBottom: 'var(--spacing-xs)' }}>Column Extension</h4>
                            <p style={{ fontSize: 'clamp(10px, 1.1vw, 11px)', color: '#888' }}>Add any new research field to all rows instantly via AI prompt.</p>
                        </GlassPanel>
                        <GlassPanel style={{ padding: 'clamp(14px, 1.8vw, 16px)' }}>
                            <Layout size={20} color="var(--color-agent-synthesis-purple)" />
                            <h4 style={{ color: 'white', marginTop: 'var(--spacing-md)', marginBottom: 'var(--spacing-xs)' }}>Custom Views</h4>
                            <p style={{ fontSize: 'clamp(10px, 1.1vw, 11px)', color: '#888' }}>Save bespoke dashboard views for Credit, Legal, or Compliance desks.</p>
                        </GlassPanel>
                        <GlassPanel style={{ padding: 'clamp(14px, 1.8vw, 16px)' }}>
                            <MousePointer2 size={20} color="var(--color-agent-citation-orange)" />
                            <h4 style={{ color: 'white', marginTop: 'var(--spacing-md)', marginBottom: 'var(--spacing-xs)' }}>Export Ready</h4>
                            <p style={{ fontSize: 'clamp(10px, 1.1vw, 11px)', color: '#888' }}>One-click export to SIG's internal Excel models or JSON APIs.</p>
                        </GlassPanel>
                    </div>
                </div>

                {/* Visual Simulation of a Live Matrix */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <GlassPanel style={{ padding: '0', overflow: 'hidden', height: 'min(520px, 58vh)', background: 'var(--color-canvas-charcoal)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                        <div style={{ background: '#1A1A1A', padding: 'clamp(10px, 1.6vw, 12px) clamp(14px, 2.2vw, 20px)', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--layout-gap-sm)' }}>
                            <div style={{ display: 'flex', gap: 'var(--spacing-lg)', minWidth: 0 }}>
                                <div style={{ fontSize: 'clamp(9px, 1vw, 10px)', fontWeight: 800, color: 'var(--color-brand-cobalt)', letterSpacing: '0.05em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>PORTFOLIO_DILIGENCE.MBX</div>
                                <div style={{ fontSize: 'clamp(9px, 1vw, 10px)', fontWeight: 500, color: '#666', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>1,242 Documents</div>
                            </div>
                            <div style={{ display: 'flex', gap: '6px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444', opacity: 0.6 }} />
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F59E0B', opacity: 0.6 }} />
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', opacity: 0.6 }} />
                            </div>
                        </div>

                        {/* Top Action Bar */}
                        <div style={{ background: '#0F0F0F', padding: 'clamp(8px, 1.3vw, 10px) clamp(14px, 2.2vw, 20px)', borderBottom: '1px solid #222', display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
                            <div style={{ padding: 'clamp(3px, 0.6vw, 4px) clamp(10px, 1.4vw, 12px)', background: '#1A1A1A', borderRadius: '4px', fontSize: 'clamp(8px, 0.95vw, 9px)', color: '#888', fontWeight: 600 }}>+ Add column</div>
                            <div style={{ padding: 'clamp(3px, 0.6vw, 4px) clamp(10px, 1.4vw, 12px)', background: '#1A1A1A', borderRadius: '4px', fontSize: 'clamp(8px, 0.95vw, 9px)', color: '#888', fontWeight: 600 }}>Sort by: Risk Score</div>
                            <div style={{ padding: 'clamp(3px, 0.6vw, 4px) clamp(10px, 1.4vw, 12px)', background: 'var(--color-brand-cobalt)', borderRadius: '4px', fontSize: 'clamp(9px, 1vw, 10px)', color: 'white', fontWeight: 800, marginLeft: 'auto', letterSpacing: '0.05em' }}>ASK MATRIX</div>
                        </div>

                        {/* Matrix Grid Mockup */}
                        <div style={{ padding: '0 clamp(14px, 2.2vw, 20px)' }}>
                            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                                <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr', padding: 'clamp(12px, 1.8vw, 16px) 0', borderBottom: '1px solid #1A1A1A', fontSize: 'clamp(11px, 1.35vw, 12px)', fontFamily: 'var(--font-primary)' }}>
                                    <div style={{ color: 'white', fontWeight: 500 }}>{i}. Global Credit Opportunity {i}</div>
                                    <div style={{ color: '#888', fontSize: 'clamp(10px, 1.1vw, 11px)' }}>Change of Control Triggered</div>
                                    <div style={{ textAlign: 'right', color: i % 2 === 0 ? '#10B981' : '#F59E0B', fontWeight: 600, fontSize: 'clamp(10px, 1.1vw, 11px)' }}>{i % 2 === 0 ? 'Verified' : 'Review Required'}</div>
                                </div>
                            ))}
                        </div>

                        {/* Hovering Agent Detail Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                            style={{
                                /* eslint-disable-next-line design-system/no-absolute-positioning */
                                position: 'absolute',
                                bottom: 'var(--spacing-2xl)',
                                right: 'var(--spacing-2xl)',
                                width: 'min(260px, 82vw)',
                                background: 'rgba(20,20,25,0.95)',
                                border: '1px solid var(--color-brand-cobalt)',
                                padding: 'clamp(14px, 2vw, 20px)',
                                borderRadius: '4px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <div className="text-matrix-header" style={{ fontSize: 'clamp(8px, 0.95vw, 9px)', marginBottom: 'var(--spacing-md)', color: 'var(--color-brand-sky)' }}>AGENT REASONING FLOW</div>
                            <div style={{ fontSize: 'clamp(11px, 1.35vw, 12px)', color: 'white', lineHeight: 1.5, fontFamily: 'var(--font-primary)' }}>
                                "The Change of Control trigger in <span style={{ color: 'var(--color-brand-cobalt)', fontWeight: 600 }}>Sec 4.07</span> is linked to a 50% equity transfer. <span style={{ color: 'var(--color-agent-citation-orange)', fontWeight: 600 }}>Source: pg 42</span>"
                            </div>
                        </motion.div>
                    </GlassPanel>
                </div>

            </div>
        </SlideContainer>
    );
};
