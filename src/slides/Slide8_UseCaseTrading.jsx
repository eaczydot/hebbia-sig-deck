import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { MatrixTable } from '../components/MatrixTable';
import { motion } from 'framer-motion';

export const Slide8_UseCaseTrading = () => {
    const workflowData = {
        headers: [
            { label: 'TRANSACTION', style: { width: '18%' } },
            { label: 'EDI STANDARD', style: { width: '12%', textAlign: 'center' } },
            { label: 'API ENDPOINT', style: { width: '18%' } },
            { label: 'CAPABILITY', style: { width: '52%' } }
        ],
        rows: [
            {
                cells: [
                    { content: <span style={{ color: 'var(--color-agent-reasoning-blue)', fontWeight: 600 }}>Real-time Eligibility</span> },
                    { content: '270/271', style: { textAlign: 'center' } },
                    { content: <span className="u-font-mono" style={{ fontSize: '12px' }}>/eligibility</span> },
                    { content: 'Verify coverage, copays, deductibles in real-time. 1,100+ payers.' }
                ]
            },
            {
                cells: [
                    { content: <span style={{ color: 'var(--color-agent-reasoning-blue)', fontWeight: 600 }}>Claims Submission</span> },
                    { content: '837P/D/I', style: { textAlign: 'center' } },
                    { content: <span className="u-font-mono" style={{ fontSize: '12px' }}>/claims</span> },
                    { content: 'Professional, dental, institutional claim submissions with automated edits. 2,700+ payers.' }
                ]
            },
            {
                cells: [
                    { content: <span style={{ color: 'var(--color-agent-reasoning-blue)', fontWeight: 600 }}>Claim Status</span> },
                    { content: '276/277', style: { textAlign: 'center' } },
                    { content: <span className="u-font-mono" style={{ fontSize: '12px' }}>/claim-status</span> },
                    { content: 'Real-time claim status checks. No more phone calls. 300+ payers.' }
                ]
            },
            {
                cells: [
                    { content: <span style={{ color: 'var(--color-agent-reasoning-blue)', fontWeight: 600 }}>Remittance (ERAs)</span> },
                    { content: '835', style: { textAlign: 'center' } },
                    { content: <span className="u-font-mono" style={{ fontSize: '12px' }}>/eras</span> },
                    { content: 'Electronic Remittance Advice. Auto-parsed. Webhook delivery. 1,800+ payers.' }
                ]
            },
            {
                cells: [
                    { content: <span style={{ color: 'var(--color-agent-reasoning-blue)', fontWeight: 600 }}>Claim Attachments</span> },
                    { content: '275', style: { textAlign: 'center' } },
                    { content: <span className="u-font-mono" style={{ fontSize: '12px' }}>/claim-attachments</span> },
                    { content: 'Submit supporting documentation electronically. PDF, TIFF, JPEG, PNG.' }
                ]
            }
        ]
    };

    return (
        <SlideContainer>
            {/* Header */}
            <div style={{ marginBottom: '40px' }}>
                <div className="text-matrix-header">06 // PRODUCT SUITE</div>
                <h2 className="text-hero" style={{ fontSize: '48px' }}>Healthcare Transactions</h2>
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
                    style={{ fontSize: '14px' }}
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
                    <div className="text-matrix-header" style={{ justifyContent: 'center' }}>ELIGIBILITY</div>
                    <div className="big-num text-blue">1,100+</div>
                    <div className="u-font-mono" style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Connected Payers</div>
                </GlassPanel>
                <GlassPanel style={{ padding: '24px', textAlign: 'center' }}>
                    <div className="text-matrix-header" style={{ justifyContent: 'center' }}>CLAIMS</div>
                    <div className="big-num text-blue">2,700+</div>
                    <div className="u-font-mono" style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Connected Payers</div>
                </GlassPanel>
                <GlassPanel style={{ padding: '24px', textAlign: 'center' }}>
                    <div className="text-matrix-header" style={{ justifyContent: 'center' }}>SUPPORT</div>
                    <div className="big-num text-blue">&lt;10 min</div>
                    <div className="u-font-mono" style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Avg Response Time</div>
                </GlassPanel>
            </motion.div>
        </SlideContainer>
    );
};
