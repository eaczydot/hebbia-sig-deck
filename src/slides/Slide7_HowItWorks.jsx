import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';
import { Database, ListTree, Zap, ShieldCheck } from 'lucide-react';
import { SlideHeader } from '../components/SlideHeader';

export const Slide7_HowItWorks = () => {
    const steps = [
        { num: '01', title: 'INGEST', desc: 'Index PDFs, Excel, emails from your VPC or SharePoint.', color: 'var(--color-text-tertiary)', Icon: Database },
        { num: '02', title: 'PLAN', desc: 'Decompose queries into sub-questions and retrieval steps.', color: 'var(--color-agent-reasoning-blue)', Icon: ListTree },
        { num: '03', title: 'EXECUTE', desc: 'Specialized agents run in parallel across documents.', color: 'var(--color-agent-extraction-green)', Icon: Zap },
        { num: '04', title: 'VERIFY', desc: 'Synthesize outputs with citation trails and export-ready structure.', color: 'var(--color-agent-citation-orange)', Icon: ShieldCheck }
    ];

    return (
        <SlideContainer>
            {/* Header */}
            <SlideHeader
                kicker="06 // HOW IT WORKS"
                title="From Query to Conviction"
            />

            {/* Horizontal Flow */}
            <motion.div
                className="grid-4"
                style={{ flex: 1, gap: 'var(--layout-gap-sm)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {steps.map((step, i) => (
                    <div key={i} style={{ position: 'relative' }}>
                        {/* Arrow connector */}
                        {i < steps.length - 1 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.55 + i * 0.12, duration: 0.6 }}
                                style={{
                                    /* eslint-disable-next-line design-system/no-absolute-positioning */
                                    position: 'absolute',
                                    top: '50%',
                                    right: '-18px',
                                    width: 36,
                                    height: 2,
                                    background: 'var(--color-border-functional)',
                                    zIndex: 10
                                }}
                            />
                        )}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 + i * 0.12, duration: 0.7 }}
                            style={{ height: '100%' }}
                        >
                            <GlassPanel style={{
                                height: '100%',
                                padding: '22px',
                                borderTop: `4px solid ${step.color}`,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 12
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        <div style={{
                                            width: 34,
                                            height: 34,
                                            borderRadius: 4,
                                            border: '1px solid var(--color-border-functional)',
                                            background: 'rgba(0,0,0,0.18)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: step.color
                                        }}>
                                            <step.Icon size={18} />
                                        </div>
                                        <div>
                                            <div style={{
                                                fontFamily: 'var(--font-mono)',
                                                fontSize: 12,
                                                letterSpacing: '0.12em',
                                                textTransform: 'uppercase',
                                                color: step.color
                                            }}>
                                                {step.title}
                                            </div>
                                            <div className="u-font-mono" style={{ color: 'var(--color-text-tertiary)', fontSize: 12 }}>
                                                {step.num}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pill blue" style={{ fontSize: 10, opacity: 0.7 }}>
                                        STEP
                                    </div>
                                </div>

                                <div style={{
                                    fontSize: 19,
                                    color: 'var(--color-text-secondary)',
                                    lineHeight: 1.55,
                                    flex: 1
                                }}>
                                    {step.desc}
                                </div>
                            </GlassPanel>
                        </motion.div>
                    </div>
                ))}
            </motion.div>

            {/* KPI Row */}
            <motion.div
                className="grid-3 stagger-in active"
                style={{ marginTop: 'var(--spacing-3xl)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <div style={{ borderLeft: '2px solid var(--color-border-functional)', paddingLeft: 'var(--spacing-xl)' }}>
                    <div className="big-num text-blue" style={{ margin: 0 }}>~30s</div>
                    <div className="u-font-mono" style={{ fontSize: 'clamp(14px, 1.5vw, 15px)', color: 'var(--color-text-secondary)' }}>Per 100 Documents</div>
                </div>
                <div style={{ borderLeft: '2px solid var(--color-border-functional)', paddingLeft: 'var(--spacing-xl)' }}>
                    <div className="big-num text-green" style={{ margin: 0 }}>100%</div>
                    <div className="u-font-mono" style={{ fontSize: 'clamp(14px, 1.5vw, 15px)', color: 'var(--color-text-secondary)' }}>Citation Coverage</div>
                </div>
                <div style={{ borderLeft: '2px solid var(--color-border-functional)', paddingLeft: 'var(--spacing-xl)' }}>
                    <div className="big-num text-purple" style={{ margin: 0 }}>Excel</div>
                    <div className="u-font-mono" style={{ fontSize: 'clamp(14px, 1.5vw, 15px)', color: 'var(--color-text-secondary)' }}>Native Export</div>
                </div>
            </motion.div>
        </SlideContainer>
    );
};
