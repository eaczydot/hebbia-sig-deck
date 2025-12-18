import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';
import { ShieldCheck, Search, Scale } from 'lucide-react';

export const Slide10_UseCaseLegal = () => {
    return (
        <SlideContainer>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', height: '100%' }}>

                {/* Visual Interface - Document Compare */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <GlassPanel style={{ padding: '0', overflow: 'hidden' }}>
                        <div style={{ background: '#1e293b', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8' }}>LEGAL DILIGENCE MODE</div>
                            <ShieldCheck size={14} color="#10b981" />
                        </div>
                        <div style={{ padding: '24px' }}>
                            <div style={{ marginBottom: '20px', borderLeft: '2px solid #3b82f6', paddingLeft: '12px' }}>
                                <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '4px' }}>CLAUSE TYPE</div>
                                <div style={{ fontWeight: 600 }}>Change of Control</div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '6px' }}>
                                    <div style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '8px' }}>STANDARD TEMPLATE</div>
                                    <div style={{ fontSize: '11px', lineHeight: 1.5, color: '#475569' }}>
                                        Upon the occurrence of a Change of Control, each Holder shall have the right straight to require the Issuer to repurchase...
                                    </div>
                                </div>
                                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '6px', border: '1px solid #f59e0b' }}>
                                    <div style={{ fontSize: '10px', color: '#f59e0b', marginBottom: '8px' }}>VARIANCE DETECTED</div>
                                    <div style={{ fontSize: '11px', lineHeight: 1.5, color: '#e2e8f0' }}>
                                        ...shall have the right to repurchase, <span style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24' }}>subject to the Board's discretion</span> regarding liquidity conditions...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlassPanel>
                </div>

                {/* Narrative */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="text-matrix-header" style={{ color: '#10B981' }}>USE CASE: LEGAL & COMPLIANCE</div>
                    <h2 className="text-hero" style={{ fontSize: '42px', marginBottom: '24px' }}>
                        Automated Diligence <br /> & Risk Detection
                    </h2>

                    <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--color-text-secondary)', marginBottom: '40px' }}>
                        Drastically reduce outside counsel spend and internal review hours by automating the "redline" process against SIG's preferred terms.
                    </p>

                    <div style={{ display: 'grid', gap: '32px' }}>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '12px', borderRadius: '8px', height: 'fit-content' }}>
                                <Search size={24} color="#10B981" />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>Pre-Trade Diligence</h4>
                                <p className="text-cell-data">Instantly flag non-standard terms in offering memos before committing capital.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '12px', borderRadius: '8px', height: 'fit-content' }}>
                                <Scale size={24} color="#10B981" />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>Portfolio Monitoring</h4>
                                <p className="text-cell-data">Continuous scanning of credit agreements for covenant breaches or restricted payment allowances.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </SlideContainer>
    );
};
