import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';

export const Slide9_UseCaseQuant = () => {
    return (
        <SlideContainer>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', height: '100%' }}>

                {/* Narrative */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="text-matrix-header" style={{ color: 'var(--color-agent-synthesis-purple)' }}>USE CASE: QUANTITATIVE RESEARCH</div>
                    <h2 className="text-hero" style={{ fontSize: '42px', marginBottom: '24px' }}>
                        Structuring the <br /> Unstructured
                    </h2>

                    <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--color-text-secondary)', marginBottom: '40px' }}>
                        Transform qualitative data (earnings calls, management sentiment, footnotes) into clean, time-series datasets for backtesting alpha signals.
                    </p>

                    <div style={{ display: 'grid', gap: '24px' }}>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <div style={{ minWidth: '48px', height: '48px', borderRadius: '50%', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-agent-synthesis-purple)', fontWeight: 700 }}>1</div>
                            <div>
                                <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '4px' }}>The Input</h4>
                                <p className="text-cell-data">10 years of earnings transcripts for Russell 2000 Healthcare names.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <div style={{ minWidth: '48px', height: '48px', borderRadius: '50%', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-agent-synthesis-purple)', fontWeight: 700 }}>2</div>
                            <div>
                                <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '4px' }}>The Query</h4>
                                <p className="text-cell-data">"Score management sentiment on supply chain headwinds (1-5) and extract mentions of specific drug trials."</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <div style={{ minWidth: '48px', height: '48px', borderRadius: '50%', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-agent-synthesis-purple)', fontWeight: 700 }}>3</div>
                            <div>
                                <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '4px' }}>The Alpha</h4>
                                <p className="text-cell-data">A novel factor for "Supply Chain Confidence" uncorrelated with standard momentum metrics.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual Interface */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    {/* Pseudo Code / Data Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        style={{
                            background: '#0F172A',
                            border: '1px solid #334155',
                            borderRadius: '12px',
                            padding: '24px',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '12px',
                            lineHeight: 1.6,
                            width: '100%',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                        }}
                    >
                        <div style={{ color: '#94A3B8', marginBottom: '16px' }}>// Export: sentiment_factor_v1.csv</div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #333', paddingBottom: '8px', color: '#64748B' }}>
                            <span>TICKER</span>
                            <span>QTR</span>
                            <span>SENTIMENT</span>
                            <span>CONFIDENCE</span>
                        </div>

                        {[
                            { t: 'ABBV', q: 'Q3 24', s: '4.2', c: 'High' },
                            { t: 'MRK', q: 'Q3 24', s: '2.1', c: 'High' },
                            { t: 'PFE', q: 'Q3 24', s: '3.5', c: 'Med' },
                            { t: 'BMY', q: 'Q3 24', s: '4.8', c: 'High' },
                            { t: 'LLY', q: 'Q3 24', s: '5.0', c: 'High' },
                        ].map((row, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px', color: '#E2E8F0' }}>
                                <span>{row.t}</span>
                                <span>{row.q}</span>
                                <span style={{ color: row.s > 4 ? '#10B981' : row.s < 3 ? '#EF4444' : '#F59E0B' }}>{row.s}</span>
                                <span>{row.c}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Grid decoration */}
                    <div style={{ position: 'absolute', zIndex: -1, width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1), transparent 60%)' }} />
                </div>

            </div>
        </SlideContainer>
    );
};
