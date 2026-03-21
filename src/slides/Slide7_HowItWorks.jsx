import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';

export const Slide7_HowItWorks = () => {
    const steps = [
        { num: '01', title: 'CONNECT', desc: 'Get API keys. Configure webhooks for async responses. Complete payer enrollment.', color: 'var(--color-text-tertiary)' },
        { num: '02', title: 'SUBMIT', desc: 'Send eligibility checks, claims, or status requests via REST API in JSON.', color: 'var(--color-agent-reasoning-blue)' },
        { num: '03', title: 'ROUTE', desc: 'Stedi translates to X12 EDI, routes to 3,400+ payers, handles automatic failover.', color: 'var(--color-agent-extraction-green)' },
        { num: '04', title: 'RECEIVE', desc: 'Get structured JSON responses. ERAs auto-parsed. Webhooks fire on events.', color: 'var(--color-agent-synthesis-purple)' }
    ];

    return (
        <SlideContainer>
            {/* Header */}
            <div style={{ marginBottom: '40px' }}>
                <div className="text-matrix-header">05 // HOW IT WORKS</div>
                <h2 className="text-hero" style={{ fontSize: '48px' }}>From API Call to Paid Claim</h2>
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
                    <div className="big-num text-blue" style={{ fontSize: '40px', margin: 0 }}>1-3s</div>
                    <div className="u-font-mono" style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Eligibility Response</div>
                </div>
                <div style={{ borderLeft: '2px solid var(--color-border-functional)', paddingLeft: '20px' }}>
                    <div className="big-num text-green" style={{ fontSize: '40px', margin: 0 }}>3,400+</div>
                    <div className="u-font-mono" style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Connected Payers</div>
                </div>
                <div style={{ borderLeft: '2px solid var(--color-border-functional)', paddingLeft: '20px' }}>
                    <div className="big-num text-purple" style={{ fontSize: '40px', margin: 0 }}>99.9%</div>
                    <div className="u-font-mono" style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Uptime SLA</div>
                </div>
            </motion.div>
        </SlideContainer>
    );
};
