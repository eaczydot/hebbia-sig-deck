import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { Check, X, AlertTriangle } from 'lucide-react';

const ComparisonRow = ({ category, competitors, hebbiaAdvantage, status }) => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.5fr', padding: '16px', borderBottom: '1px solid var(--color-border-subtle)', alignItems: 'center' }}>
        <div style={{ fontWeight: 600 }}>{category}</div>
        <div style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>{competitors}</div>
        <div style={{ fontSize: '13px', lineHeight: 1.4 }}>{hebbiaAdvantage}</div>
    </div>
);

export const Slide18_Competitive = () => {
    return (
        <SlideContainer>
            <div className="text-matrix-header" style={{ marginBottom: '16px' }}>Competitive Landscape</div>
            <h2 className="text-hero" style={{ fontSize: '32px', marginBottom: '32px' }}>
                Why Hebbia? Specialized Reasoning vs. Search
            </h2>

            <GlassPanel style={{ padding: '0', marginBottom: '32px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.5fr', padding: '16px', background: 'rgba(255,255,255,0.05)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em' }}>
                    <div>CATEGORY</div>
                    <div>ALTERNATIVES</div>
                    <div>HEBBIA ADVANTAGE</div>
                </div>
                <ComparisonRow
                    category="Generic LLMs"
                    competitors="ChatGPT Ent, Claude"
                    hebbiaAdvantage="Citation-first architecture provides verifiable, structured outputs. Matrix orchestrates specific agents for accuracy (92% vs 68% for RAG)."
                />
                <ComparisonRow
                    category="RAG Platforms"
                    competitors="AlphaSense, Glean"
                    hebbiaAdvantage="Reasons over YOUR proprietary data, not just external search. Synthesizes net-new insights rather than just retrieving documents."
                />
                <ComparisonRow
                    category="Legal AI"
                    competitors="Kira, Harvey"
                    hebbiaAdvantage="Flexible, multi-domain reasoning (Financial + Legal). Transparent 'show your work' audit trail vs black-box predictions."
                />
            </GlassPanel>

            <GlassPanel style={{
                padding: '24px',
                background: 'linear-gradient(90deg, rgba(239, 68, 68, 0.1) 0%, rgba(30, 41, 59, 0.5) 100%)',
                border: '1px solid rgba(239, 68, 68, 0.3)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                    <AlertTriangle className="text-red-400" size={24} />
                    <div style={{ fontSize: '20px', fontWeight: 600, color: '#fca5a5' }}>Internal Build Risk Analysis (Build vs Buy)</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                    <div>
                        <div className="text-matrix-header" style={{ color: '#fca5a5', marginBottom: '8px' }}>HIGH TCO & RISK</div>
                        <ul style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                            <li>Requires team of 6-10 FTEs ($1.5M - $3.5M/yr staffing).</li>
                            <li>12-24 month timeline for production-grade maturity.</li>
                            <li>Complex hallucination mitigation engineering required.</li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-matrix-header" style={{ color: 'var(--color-agent-reasoning-blue)', marginBottom: '8px' }}>HEBBIA VALUE</div>
                        <ul style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                            <li>Day 1 Operational.</li>
                            <li>Diverts zero engineering resources from core trading strategies.</li>
                            <li>Proven enterprise maintenance & security.</li>
                        </ul>
                    </div>
                </div>
            </GlassPanel>
        </SlideContainer>
    );
};
