import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';

const ProcessStep = ({ number, title, description, color, active }) => (
    <div style={{ position: 'relative', flex: 1, padding: '0 12px' }}>
        {/* Connector Line */}
        <div style={{
            position: 'absolute',
            top: '24px',
            left: 0,
            right: 0,
            height: '2px',
            background: 'rgba(255,255,255,0.05)',
            zIndex: 0
        }} />

        <GlassPanel
            style={{
                padding: '24px',
                height: '240px',
                position: 'relative',
                zIndex: 1,
                borderTop: active ? `2px solid ${color}` : '1px solid rgba(255,255,255,0.1)',
                background: active ? `linear-gradient(180deg, ${color}10 0%, rgba(0,0,0,0) 100%)` : 'rgba(20,20,20,0.6)'
            }}
        >
            <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: active ? color : '#1A1A1A',
                color: active ? '#000' : '#444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '18px',
                marginBottom: '20px',
                border: `1px solid ${active ? color : '#333'}`
            }}>
                {number}
            </div>

            <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'white', marginBottom: '12px' }}>{title}</h3>
            <p className="text-cell-data" style={{ fontSize: '13px', lineHeight: 1.5 }}>{description}</p>
        </GlassPanel>
    </div>
);

export const Slide7_HowItWorks = () => {
    return (
        <SlideContainer>
            <div style={{ marginBottom: '60px' }}>
                <div className="text-matrix-header">HOW IT WORKS</div>
                <h2 className="text-hero" style={{ fontSize: '48px' }}>From Query to Conviction</h2>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'stretch' }}>
                <ProcessStep
                    number="1"
                    title="Ingest"
                    description="Hebbia indexes millions of documents (PDF, Excel, PPT) from your private data lake, creating a secure knowledge graph."
                    color="#64748B"
                    active={false}
                />
                <ProcessStep
                    number="2"
                    title="Plan"
                    description="The Matrix breaks down complex analyst questions into sub-steps: 'Find change of control', 'Compare EBITDA', 'Check governing law'."
                    color="var(--color-agent-reasoning-blue)"
                    active={true}
                />
                <ProcessStep
                    number="3"
                    title="Execute"
                    description="Specialized agents run in parallel across every document, extracting specific clauses and data points with pixel-perfect citations."
                    color="var(--color-agent-extraction-green)"
                    active={true}
                />
                <ProcessStep
                    number="4"
                    title="Scale"
                    description="Insights are aggregated into a structured grid (Excel/CSV exportable), highlighting outliers and anomalies instantly."
                    color="var(--color-agent-synthesis-purple)"
                    active={true}
                />
            </div>

            {/* Bottom Insight */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                style={{ marginTop: '60px', textAlign: 'center', color: 'var(--color-text-secondary)' }}
            >
                <code style={{ background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                    Latency: ~30s per 100 documents vs. 4-6 hours human review
                </code>
            </motion.div>
        </SlideContainer>
    );
};
