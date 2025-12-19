import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';
import { Filter, Layers, Layout, MousePointer2 } from 'lucide-react';

export const Slide22_MatrixDeepDive = () => {
    return (
        <SlideContainer>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', height: '100%' }}>

                {/* Narrative */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="text-matrix-header" style={{ color: 'var(--color-agent-reasoning-blue)' }}>DEEP DIVE // THE MATRIX</div>
                    <h2 className="text-title" style={{ marginBottom: '24px' }}>
                        Infinite Data <br />Manipulation
                    </h2>

                    <p className="text-body-lg" style={{ lineHeight: 1.6, marginBottom: '40px' }}>
                        The Matrix is not a static view; it is a live, programmable workspace where analysts can pivot, filter, and extend data points across millions of pages in seconds.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <GlassPanel style={{ padding: '16px' }}>
                            <Filter size={20} color="var(--color-agent-reasoning-blue)" />
                            <h4 className="text-body" style={{ color: 'var(--color-text-primary)', marginTop: '12px', marginBottom: '4px', fontWeight: 600 }}>Smart Filtering</h4>
                            <p className="text-caption">Find every mention of 'Material Adverse Effect' across the portfolio.</p>
                        </GlassPanel>
                        <GlassPanel style={{ padding: '16px' }}>
                            <Layers size={20} color="var(--color-agent-extraction-green)" />
                            <h4 className="text-body" style={{ color: 'var(--color-text-primary)', marginTop: '12px', marginBottom: '4px', fontWeight: 600 }}>Column Extension</h4>
                            <p className="text-caption">Add any new research field to all rows instantly via AI prompt.</p>
                        </GlassPanel>
                        <GlassPanel style={{ padding: '16px' }}>
                            <Layout size={20} color="var(--color-agent-synthesis-purple)" />
                            <h4 className="text-body" style={{ color: 'var(--color-text-primary)', marginTop: '12px', marginBottom: '4px', fontWeight: 600 }}>Custom Views</h4>
                            <p className="text-caption">Save bespoke dashboard views for Credit, Legal, or Compliance desks.</p>
                        </GlassPanel>
                        <GlassPanel style={{ padding: '16px' }}>
                            <MousePointer2 size={20} color="var(--color-agent-citation-orange)" />
                            <h4 className="text-body" style={{ color: 'var(--color-text-primary)', marginTop: '12px', marginBottom: '4px', fontWeight: 600 }}>Export Ready</h4>
                            <p className="text-caption">One-click export to SIG's internal Excel models or JSON APIs.</p>
                        </GlassPanel>
                    </div>
                </div>

                {/* Visual Simulation of a Live Matrix */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <GlassPanel style={{ padding: '0', overflow: 'hidden', height: '520px', background: 'var(--color-canvas-charcoal)', border: '1px solid color-mix(in srgb, var(--color-brand-cobalt) 20%, transparent)' }}>
                        <div style={{ background: 'var(--color-canvas-charcoal)', padding: '12px 20px', borderBottom: '1px solid var(--color-border-functional)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <div className="text-mono-xs" style={{ fontWeight: 800, color: 'var(--color-brand-cobalt)', letterSpacing: '0.05em' }}>PORTFOLIO_DILIGENCE.MBX</div>
                                <div className="text-mono-xs" style={{ fontWeight: 500, color: 'var(--color-text-tertiary)' }}>1,242 Documents</div>
                            </div>
                            <div style={{ display: 'flex', gap: '6px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--red)', opacity: 0.6 }} />
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--orange)', opacity: 0.6 }} />
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--green)', opacity: 0.6 }} />
                            </div>
                        </div>

                        {/* Top Action Bar */}
                        <div style={{ background: 'var(--color-canvas-layer-1)', padding: '10px 20px', borderBottom: '1px solid var(--color-border-subtle)', display: 'flex', gap: '12px' }}>
                            <div className="text-mono-xs" style={{ padding: '4px 12px', background: 'var(--color-canvas-charcoal)', borderRadius: '4px', color: 'var(--color-text-secondary)', fontWeight: 600 }}>+ Add column</div>
                            <div className="text-mono-xs" style={{ padding: '4px 12px', background: 'var(--color-canvas-charcoal)', borderRadius: '4px', color: 'var(--color-text-secondary)', fontWeight: 600 }}>Sort by: Risk Score</div>
                            <div className="text-mono-xs" style={{ padding: '4px 12px', background: 'var(--color-brand-cobalt)', borderRadius: '4px', color: 'var(--color-text-primary)', fontWeight: 800, marginLeft: 'auto', letterSpacing: '0.05em' }}>ASK MATRIX</div>
                        </div>

                        {/* Matrix Grid Mockup */}
                        <div style={{ padding: '0 20px' }}>
                            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                                <div key={i} className="text-caption" style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr', padding: '16px 0', borderBottom: '1px solid var(--color-canvas-charcoal)' }}>
                                    <div style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>{i}. Global Credit Opportunity {i}</div>
                                    <div className="text-micro" style={{ color: 'var(--color-text-secondary)' }}>Change of Control Triggered</div>
                                    <div className="text-micro" style={{ textAlign: 'right', color: i % 2 === 0 ? 'var(--color-agent-extraction-green)' : 'var(--color-agent-citation-orange)', fontWeight: 600 }}>{i % 2 === 0 ? 'Verified' : 'Review Required'}</div>
                                </div>
                            ))}
                        </div>

                        {/* Hovering Agent Detail Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                            style={{
                                position: 'absolute',
                                bottom: '40px',
                                right: '40px',
                                width: '260px',
                                background: 'color-mix(in srgb, var(--color-canvas-layer-2) 95%, transparent)',
                                border: '1px solid var(--color-brand-cobalt)',
                                padding: '20px',
                                borderRadius: '4px',
                                boxShadow: '0 20px 40px color-mix(in srgb, var(--bg-void) 60%, transparent)',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <div className="text-matrix-header sm" style={{ marginBottom: '12px', color: 'var(--color-brand-sky)' }}>AGENT REASONING FLOW</div>
                            <div className="text-caption" style={{ color: 'var(--color-text-primary)', lineHeight: 1.5 }}>
                                "The Change of Control trigger in <span style={{ color: 'var(--color-brand-cobalt)', fontWeight: 600 }}>Sec 4.07</span> is linked to a 50% equity transfer. <span style={{ color: 'var(--color-agent-citation-orange)', fontWeight: 600 }}>Source: pg 42</span>"
                            </div>
                        </motion.div>
                    </GlassPanel>
                </div>

            </div>
        </SlideContainer>
    );
};
