import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Link as LinkIcon } from 'lucide-react';
import reactLogo from '../assets/react.svg';
import { SlideHeader } from '../components/SlideHeader';

const ReferenceItem = ({ title, source, type, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.5 }}
        style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 3fr) minmax(0, 1fr)',
            gap: 'var(--layout-gap-sm)',
            padding: 'clamp(12px, 1.8vw, 16px) 0',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            alignItems: 'center'
        }}
    >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ padding: '6px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', color: 'var(--color-text-tertiary)' }}>
                {type === 'Internal' ? <FileText size={14} /> : <BookOpen size={14} />}
            </div>
            <span style={{ fontSize: 'clamp(10px, 1.1vw, 11px)', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--color-text-secondary)' }}>{type}</span>
        </div>
        <div style={{ color: 'white', fontWeight: 500, fontSize: 'clamp(12px, 1.5vw, 14px)' }}>{title}</div>
        <div style={{ color: 'var(--color-text-tertiary)', fontSize: 'clamp(11px, 1.35vw, 12px)', fontStyle: 'italic', textAlign: 'right' }}>{source}</div>
    </motion.div>
);

export const Slide18_References = () => {
    return (
        <SlideContainer>
            <SlideHeader
                kicker="APPENDIX // SOURCES"
                title="References & Attribution"
                titleSize={32}
            />

            <GlassPanel style={{ padding: 'clamp(18px, 2.8vw, 32px)', flex: 1, overflowY: 'auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 3fr) minmax(0, 1fr)', gap: 'var(--layout-gap-sm)', paddingBottom: 'var(--spacing-md)', borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
                    <div className="text-matrix-header">TYPE</div>
                    <div className="text-matrix-header">DOCUMENT TITLE</div>
                    <div className="text-matrix-header" style={{ textAlign: 'right' }}>SOURCE</div>
                </div>

                <ReferenceItem type="External" title="Hedge Fund Technology Adoption Survey 2024" source="Goldman Sachs Equity Research" delay={0.1} />
                <ReferenceItem type="External" title="The Impact of Generative AI on Financial Services" source="McKinsey & Company" delay={0.2} />
                <ReferenceItem type="Internal" title="Hebbia Enterprise Architecture & Security Overview" source="Hebbia Product Docs" delay={0.3} />
                <ReferenceItem type="Internal" title="SIG Strategic Growth & Operational Efficiency Analysis" source="Internal Proposal 2025" delay={0.4} />
                <ReferenceItem type="External" title="SEC Form 10-K filings (2020-2024) - Russell 2000" source="EDGAR Database" delay={0.5} />
                <ReferenceItem type="Internal" title="Hebbia Socio-Technical Impact Assessment (STIA)" source="Hebbia Trust Center" delay={0.6} />
                <ReferenceItem type="External" title="Azure OpenAI Service Security & Privacy Guide" source="Microsoft Azure" delay={0.7} />
                <ReferenceItem type="Internal" title="Pilot Success Metrics & Baseline Benchmark Study" source="Case Study: Enterprise A" delay={0.8} />
            </GlassPanel>

            <div style={{ marginTop: 'var(--spacing-2xl)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--layout-gap-md)', flexWrap: 'wrap' }}>
                <div style={{ fontSize: 'clamp(11px, 1.35vw, 12px)', color: 'var(--color-text-tertiary)' }}>
                    Hebbia (c) 2025 • Confidential & Proprietary
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.35 }}>
                    <img src={reactLogo} alt="React" style={{ width: '16px', height: '16px' }} />
                    <div style={{ fontSize: 'clamp(10px, 1.1vw, 11px)', color: 'var(--color-text-tertiary)' }}>Deck runtime</div>
                </div>
                <div style={{ display: 'flex', gap: 'var(--spacing-lg)', color: 'var(--color-agent-reasoning-blue)', fontSize: 'clamp(11px, 1.35vw, 12px)', fontWeight: 600, flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                        <LinkIcon size={14} />
                        TRUST.HEBBIA.AI
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                        <LinkIcon size={14} />
                        DOCS.HEBBIA.AI
                    </div>
                </div>
            </div>
        </SlideContainer>
    );
};
