import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { MatrixTable } from '../components/MatrixTable';
import { motion } from 'framer-motion';

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
                                <div className="text-caption">Ranked list of impacted assets with citation links.</div>
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
                                <div className="text-caption">3-page brief on how we traded '08 vs '20.</div>
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
            <div style={{ marginBottom: '40px' }}>
                <div className="text-matrix-header">07 // USE CASE: TRADING</div>
                <h2 className="text-title">Event Digestion & Precedent Retrieval</h2>
            </div>

            {/* Workflow Table */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <MatrixTable
                    headers={workflowData.headers}
                    rows={workflowData.rows}
                    style={{ fontSize: 'var(--type-body-size)' }}
                />
            </motion.div>

            {/* KPI Row */}
            <motion.div
                className="grid-3 stagger-in active"
                style={{ marginTop: '40px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <GlassPanel style={{ padding: '24px', textAlign: 'center' }}>
                    <div className="text-matrix-header" style={{ justifyContent: 'center' }}>KPI: VELOCITY</div>
                    <div className="big-num text-blue">-50%</div>
                    <div className="text-mono-sm" style={{ color: 'var(--color-text-secondary)' }}>Time-to-Conviction</div>
                </GlassPanel>
                <GlassPanel style={{ padding: '24px', textAlign: 'center' }}>
                    <div className="text-matrix-header" style={{ justifyContent: 'center' }}>KPI: COVERAGE</div>
                    <div className="big-num text-blue">2x</div>
                    <div className="text-mono-sm" style={{ color: 'var(--color-text-secondary)' }}>Events Analyzed/Hour</div>
                </GlassPanel>
                <GlassPanel style={{ padding: '24px', textAlign: 'center' }}>
                    <div className="text-matrix-header" style={{ justifyContent: 'center' }}>KPI: ACCURACY</div>
                    <div className="big-num text-blue">&lt;2%</div>
                    <div className="text-mono-sm" style={{ color: 'var(--color-text-secondary)' }}>Signal Miss Rate</div>
                </GlassPanel>
            </motion.div>
        </SlideContainer>
    );
};
