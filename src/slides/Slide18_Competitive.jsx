import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';

export const Slide18_Competitive = () => {
    return (
        <SlideContainer>
            {/* Header */}
            <div style={{ marginBottom: '40px' }}>
                <div className="text-matrix-header">15 // LANDSCAPE</div>
                <h2 className="text-hero" style={{ fontSize: '48px' }}>Competitive Differentiation</h2>
            </div>

            {/* 3-Column Competitor Comparison */}
            <motion.div
                className="grid-3 stagger-in active"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {/* Generic LLMs */}
                <GlassPanel style={{ padding: '30px' }}>
                    <span className="pill" style={{ marginBottom: '20px', display: 'inline-block', borderColor: 'var(--color-text-tertiary)', color: 'var(--color-text-tertiary)' }}>GENERIC LLMS</span>
                    <h3 style={{ color: 'var(--color-text-primary)', marginTop: '15px', marginBottom: '15px', fontSize: '18px' }}>ChatGPT / Claude</h3>
                    <hr style={{ border: 0, borderBottom: '1px solid var(--color-border-functional)', margin: '15px 0' }} />
                    <div className="u-font-mono" style={{ fontSize: '12px', marginBottom: '10px', color: 'var(--red)' }}>RISK: HALLUCINATIONS</div>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                        Generates prose, not answers. Lacks verifiable links to source documents. Unsuitable for high-stakes decisions.
                    </p>
                </GlassPanel>

                {/* RAG / Search */}
                <GlassPanel style={{ padding: '30px' }}>
                    <span className="pill" style={{ marginBottom: '20px', display: 'inline-block', borderColor: 'var(--color-text-tertiary)', color: 'var(--color-text-tertiary)' }}>RAG / SEARCH</span>
                    <h3 style={{ color: 'var(--color-text-primary)', marginTop: '15px', marginBottom: '15px', fontSize: '18px' }}>AlphaSense / Glean</h3>
                    <hr style={{ border: 0, borderBottom: '1px solid var(--color-border-functional)', margin: '15px 0' }} />
                    <div className="u-font-mono" style={{ fontSize: '12px', marginBottom: '10px', color: 'var(--color-agent-citation-orange)' }}>LIMIT: RETRIEVAL ONLY</div>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                        Great for finding documents, poor for synthesizing net-new insights across thousands of pages.
                    </p>
                </GlassPanel>

                {/* Hebbia */}
                <GlassPanel style={{ padding: '30px', border: '1px solid var(--color-agent-reasoning-blue)' }}>
                    <span className="pill blue" style={{ marginBottom: '20px', display: 'inline-block' }}>REASONING ENGINE</span>
                    <h3 style={{ color: 'var(--color-agent-reasoning-blue)', marginTop: '15px', marginBottom: '15px', fontSize: '18px' }}>Hebbia</h3>
                    <hr style={{ border: 0, borderBottom: '1px solid var(--color-border-functional)', margin: '15px 0' }} />
                    <div className="u-font-mono" style={{ fontSize: '12px', marginBottom: '10px', color: 'var(--color-agent-extraction-green)' }}>ADVANTAGE: AGENTIC</div>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                        Decomposes problems. Reasons across private data. Provides a verifiable fact layer (Citations).
                    </p>
                </GlassPanel>
            </motion.div>
        </SlideContainer>
    );
};
