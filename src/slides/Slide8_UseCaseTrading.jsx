import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { MatrixTable } from '../components/MatrixTable';
import { motion } from 'framer-motion';
import { InteractiveProductPanel } from '../components/InteractiveProductPanel';
import marketAnalysis from '../assets/market-analysis.webp';
import { SlideHeader } from '../components/SlideHeader';

export const Slide8_UseCaseTrading = () => {
    const workflowData = {
        headers: [
            { label: 'WORKFLOW', style: { width: '20%' } },
            { label: 'INPUTS', style: { width: '30%' } },
            { label: 'HEBBIA AGENT ACTION', style: { width: '30%' } },
            { label: 'OUTPUT (DONE)', style: { width: '20%' } }
        ],
        rows: [
            {
                cells: [
                    { content: <span style={{ color: 'var(--color-agent-reasoning-blue)', fontWeight: 600 }}>Event Digestion</span> },
                    { content: 'News Feeds, Earnings Transcripts, Analyst Reports' },
                    {
                        content: (
                            <div>
                                <div style={{ marginBottom: '5px' }}>&gt; Ingest real-time stream</div>
                                <div style={{ marginBottom: '5px' }}>&gt; Extract Sentiment/Entities</div>
                                <div>&gt; Map to Portfolio Exposure</div>
                            </div>
                        )
                    },
                    {
                        content: (
                            <div>
                                <span className="pill green" style={{ marginBottom: '8px', display: 'inline-block' }}>Impact Assessment</span>
                                <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>Ranked list of impacted assets with citation links.</div>
                            </div>
                        )
                    }
                ]
            },
            {
                cells: [
                    { content: <span style={{ color: 'var(--color-agent-reasoning-blue)', fontWeight: 600 }}>Precedent Retrieval</span> },
                    { content: 'Historical Trading Logs, Legal Opinions, Regulatory Guidance' },
                    {
                        content: (
                            <div>
                                <div style={{ marginBottom: '5px' }}>&gt; Semantic Search across history</div>
                                <div>&gt; Identify comparable volatility events</div>
                            </div>
                        )
                    },
                    {
                        content: (
                            <div>
                                <span className="pill green" style={{ marginBottom: '8px', display: 'inline-block' }}>Strategy Memo</span>
                                <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>3-page brief on how we traded '08 vs '20.</div>
                            </div>
                        )
                    }
                ]
            }
        ]
    };

    return (
        <SlideContainer>
            {/* Header */}
            <SlideHeader
                kicker="07 // USE CASE: TRADING"
                title="Event Digestion & Precedent Retrieval"
            />

            <div className="split-40-60" style={{ flex: 1 }}>
                {/* Left: Workflow + KPIs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                    >
                        <GlassPanel style={{ padding: 18 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 12 }}>
                                <div>
                                    <div className="text-matrix-header" style={{ color: 'var(--color-text-tertiary)' }}>WORKFLOW</div>
                                    <div style={{ color: 'var(--color-text-primary)', fontSize: 20, lineHeight: 1.35 }}>
                                        Convert noisy market inputs into a cited, decision-ready brief.
                                    </div>
                                </div>
                                <div className="pill green" style={{ flex: '0 0 auto', marginTop: 2 }}>LIVE PIPELINE</div>
                            </div>

                            <MatrixTable
                                headers={workflowData.headers}
                                rows={workflowData.rows}
                            />
                        </GlassPanel>
                    </motion.div>

                    <motion.div
                        className="grid-3"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.7 }}
                    >
                        <GlassPanel style={{ padding: '18px', textAlign: 'center' }}>
                            <div className="text-matrix-header" style={{ justifyContent: 'center' }}>VELOCITY</div>
                            <div className="big-num text-blue" style={{ fontSize: 44 }}>-50%</div>
                            <div className="u-font-mono" style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>Time-to-Conviction</div>
                        </GlassPanel>
                        <GlassPanel style={{ padding: '18px', textAlign: 'center' }}>
                            <div className="text-matrix-header" style={{ justifyContent: 'center' }}>COVERAGE</div>
                            <div className="big-num text-blue" style={{ fontSize: 44 }}>2x</div>
                            <div className="u-font-mono" style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>Events/Hour</div>
                        </GlassPanel>
                        <GlassPanel style={{ padding: '18px', textAlign: 'center' }}>
                            <div className="text-matrix-header" style={{ justifyContent: 'center' }}>ACCURACY</div>
                            <div className="big-num text-blue" style={{ fontSize: 44 }}>&lt;2%</div>
                            <div className="u-font-mono" style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>Signal Miss Rate</div>
                        </GlassPanel>
                    </motion.div>
                </div>

                {/* Right: Interactive Product Panel */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35, duration: 0.8 }}
                    style={{ display: 'flex', alignItems: 'stretch' }}
                >
                    <InteractiveProductPanel
                        title="MATRIX // TRADING"
                        subtitle="Event digestion workspace"
                        image={marketAnalysis}
                        prompt="What changed in guidance? List impacted tickers and cite transcript lines."
                        pills={[{ label: 'LIVE', variant: 'green' }, { label: 'CITED', variant: 'orange' }]}
                        hotspots={[
                            { id: 'table', x: 0.45, y: 0.55, title: 'Working table', body: 'Signals land in a structured table so you can filter, compare, and export.' },
                            { id: 'citations', x: 0.86, y: 0.48, title: 'Citations', body: 'Every claim stays anchored to evidence for fast verification.' }
                        ]}
                        height={520}
                    />
                </motion.div>
            </div>
        </SlideContainer>
    );
};
