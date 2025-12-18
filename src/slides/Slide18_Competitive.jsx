import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';
import { Check, X, Minus, ShieldCheck, Zap, AlertTriangle } from 'lucide-react';

const CompareRow = ({ feature, hebbia, alternatives, internal, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '24px',
            padding: '20px 0',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            alignItems: 'center'
        }}
    >
        <div style={{ fontWeight: 500, color: 'var(--color-text-secondary)', fontSize: '15px' }}>{feature}</div>

        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '6px', borderRadius: '50%' }}>
                <Check size={18} color="var(--color-agent-extraction-green)" strokeWidth={3} />
            </div>
        </div>

        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <X size={18} color="#EF4444" opacity={0.5} />
        </div>

        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <Minus size={18} color="#64748B" />
        </div>
    </motion.div>
);

export const Slide18_Competitive = () => {
    return (
        <SlideContainer>
            <div style={{ marginBottom: '60px' }}>
                <div className="text-matrix-header">COMPETITIVE ANALYSIS</div>
                <h2 className="text-hero" style={{ fontSize: '48px' }}>Why Hebbia?</h2>
                <p className="text-subhero" style={{ maxWidth: '700px' }}>
                    Purpose-built for financial reasoning, not just generic search or conversation.
                </p>
            </div>

            <div style={{ flex: 1 }}>
                {/* Table Header */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr',
                    gap: '24px',
                    paddingBottom: '20px',
                    borderBottom: '2px solid rgba(255,255,255,0.1)'
                }}>
                    <div className="text-matrix-header">CAPABILITY</div>
                    <div className="text-matrix-header" style={{ textAlign: 'center', color: 'var(--color-agent-reasoning-blue)' }}>HEBBIA</div>
                    <div className="text-matrix-header" style={{ textAlign: 'center' }}>GENERIC LLMS</div>
                    <div className="text-matrix-header" style={{ textAlign: 'center' }}>INTERNAL BUILD</div>
                </div>

                <CompareRow
                    feature="Agentic Multi-Step Reasoning"
                    delay={0.2}
                />
                <CompareRow
                    feature="Verifiable Citations (Source Overlay)"
                    delay={0.3}
                />
                <CompareRow
                    feature="Native Excel/CSV Structured Export"
                    delay={0.4}
                />
                <CompareRow
                    feature="Universal Data Ingestion (VPC Native)"
                    delay={0.5}
                />
                <CompareRow
                    feature="Financial Domain Specificity"
                    delay={0.6}
                />
            </div>

            {/* Bottom Insight / Build vs Buy */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '60px' }}>
                <GlassPanel style={{ padding: '24px', borderLeft: '3px solid #EF4444', background: 'rgba(239, 68, 68, 0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                        <AlertTriangle color="#FCA5A5" size={20} />
                        <div className="text-matrix-header" style={{ color: '#FCA5A5', margin: 0 }}>INTERNAL BUILD RISK</div>
                    </div>
                    <p className="text-cell-data" style={{ fontSize: '13px' }}>
                        Building an enterprise-ready reasoning stack requires 12-18 months of R&D and a dedicated team of ML engineers. Maintenance, security audits, and model drift management add significant Opex.
                    </p>
                </GlassPanel>

                <GlassPanel style={{ padding: '24px', borderLeft: '3px solid var(--color-agent-extraction-green)', background: 'rgba(16, 185, 129, 0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                        <Zap color="#6EE7B7" size={20} />
                        <div className="text-matrix-header" style={{ color: '#6EE7B7', margin: 0 }}>THE HEBBIA ADVANTAGE</div>
                    </div>
                    <p className="text-cell-data" style={{ fontSize: '13px' }}>
                        Day 1 operational maturity. Hebbia is already audited, compliant, and optimized for the most complex financial use cases. Redirect engineering resources to SIG's core trading alpha.
                    </p>
                </GlassPanel>
            </div>
        </SlideContainer>
    );
};
