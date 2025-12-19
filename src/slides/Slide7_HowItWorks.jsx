import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';

export const Slide7_HowItWorks = () => {
    const steps = [
        { num: '01', title: 'INGEST', desc: 'Index PDFs, Excel, emails from your VPC or SharePoint.', color: 'var(--color-text-tertiary)' },
        { num: '02', title: 'PLAN', desc: 'Decompose queries into sub-questions and retrieval steps.', color: 'var(--color-agent-reasoning-blue)' },
        { num: '03', title: 'EXECUTE', desc: 'Specialized agents run in parallel across documents.', color: 'var(--color-agent-extraction-green)' },
        { num: '04', title: 'SYNTHESIZE', desc: 'Aggregate, compare, and export to structured formats.', color: 'var(--color-agent-synthesis-purple)' }
    ];

    return (
        <SlideContainer>
            {/* Header */}
            <div style={{ marginBottom: '40px' }}>
                <div className="text-matrix-header">06 // HOW IT WORKS</div>
                <h2 className="text-title">From Query to Conviction</h2>
            </div>

            {/* Horizontal Flow */}
            <motion.div
                className="grid-4"
                style={{ flex: 1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {steps.map((step, i) => (
                    <div key={i} style={{ position: 'relative' }}>
                        {/* Arrow connector */}
                        {i < steps.length - 1 && (
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                right: '-15px',
                                color: 'var(--color-border-functional)',
                                fontSize: 'var(--type-subtitle-sm-size)',
                                zIndex: 10
                            }}>→</div>
                        )}
                        <GlassPanel style={{
                            height: '100%',
                            padding: '30px',
                            borderTop: `2px solid ${step.color}`,
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div className="u-font-mono" style={{
                                color: step.color,
                                fontSize: 'var(--type-subtitle-size)',
                                fontWeight: 700,
                                marginBottom: '15px'
                            }}>
                                {step.num}
                            </div>
                            <div className="text-matrix-header" style={{ color: step.color, marginBottom: '10px' }}>
                                {step.title}
                            </div>
                            <div className="text-body" style={{ flex: 1 }}>
                                {step.desc}
                            </div>
                        </GlassPanel>
                    </div>
                ))}
            </motion.div>

            {/* KPI Row */}
            <motion.div
                className="grid-3 stagger-in active"
                style={{ marginTop: '40px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <div style={{ borderLeft: '2px solid var(--color-border-functional)', paddingLeft: '20px' }}>
                    <div className="big-num sm text-blue" style={{ margin: 0 }}>~30s</div>
                    <div className="text-mono-sm" style={{ color: 'var(--color-text-secondary)' }}>Per 100 Documents</div>
                </div>
                <div style={{ borderLeft: '2px solid var(--color-border-functional)', paddingLeft: '20px' }}>
                    <div className="big-num sm text-green" style={{ margin: 0 }}>100%</div>
                    <div className="text-mono-sm" style={{ color: 'var(--color-text-secondary)' }}>Citation Coverage</div>
                </div>
                <div style={{ borderLeft: '2px solid var(--color-border-functional)', paddingLeft: '20px' }}>
                    <div className="big-num sm text-purple" style={{ margin: 0 }}>Excel</div>
                    <div className="text-mono-sm" style={{ color: 'var(--color-text-secondary)' }}>Native Export</div>
                </div>
            </motion.div>
        </SlideContainer>
    );
};
