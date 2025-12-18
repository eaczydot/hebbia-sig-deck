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
                <h2 className="text-hero" style={{ fontSize: '48px' }}>From Query to Conviction</h2>
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
                                fontSize: '20px',
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
                                fontSize: '24px',
                                fontWeight: 700,
                                marginBottom: '15px'
                            }}>
                                {step.num}
                            </div>
                            <div style={{
                                fontSize: '14px',
                                letterSpacing: '0.1em',
                                color: step.color,
                                marginBottom: '10px'
                            }}>
                                {step.title}
                            </div>
                            <div style={{
                                fontSize: '14px',
                                color: 'var(--color-text-secondary)',
                                lineHeight: 1.5,
                                flex: 1
                            }}>
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
                    <div className="big-num text-blue" style={{ fontSize: '40px', margin: 0 }}>~30s</div>
                    <div className="u-font-mono" style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Per 100 Documents</div>
                </div>
                <div style={{ borderLeft: '2px solid var(--color-border-functional)', paddingLeft: '20px' }}>
                    <div className="big-num text-green" style={{ fontSize: '40px', margin: 0 }}>100%</div>
                    <div className="u-font-mono" style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Citation Coverage</div>
                </div>
                <div style={{ borderLeft: '2px solid var(--color-border-functional)', paddingLeft: '20px' }}>
                    <div className="big-num text-purple" style={{ fontSize: '40px', margin: 0 }}>Excel</div>
                    <div className="u-font-mono" style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Native Export</div>
                </div>
            </motion.div>
        </SlideContainer>
    );
};
