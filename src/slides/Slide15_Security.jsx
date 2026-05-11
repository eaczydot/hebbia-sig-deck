import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';

export const Slide15_Security = () => {
    const securityItems = [
        {
            header: '99.9% UPTIME SLA',
            desc: 'Redundant routes and automatic failover keep transactions flowing fast, even during upstream outages. Real-time monitoring across the entire payer network.',
            color: 'var(--color-agent-reasoning-blue)'
        },
        {
            header: 'HIPAA COMPLIANT',
            desc: 'Full HIPAA compliance with BAA. PHI encrypted at rest and in transit. Production API keys secured with role-based access.',
            color: 'var(--color-agent-extraction-green)'
        },
        {
            header: 'REAL-TIME MONITORING',
            desc: 'We strive to maintain backwards compatibility. Idempotency keys prevent duplicate claims during network errors. Transaction-level observability.',
            color: 'var(--color-agent-synthesis-purple)'
        },
        {
            header: 'RESPONSIVE HUMAN SUPPORT',
            desc: '"Stedi delivers the highest quality support and a headache-free implementation process." — Kara Brenholt, Product at Candid Health',
            color: 'var(--color-agent-citation-orange)'
        }
    ];

    return (
        <SlideContainer>
            {/* Header */}
            <div style={{ marginBottom: '40px' }}>
                <div className="text-matrix-header">10 // PLATFORM</div>
                <h2 className="text-hero" style={{ fontSize: '48px' }}>Enterprise-Grade Reliability</h2>
            </div>

            {/* 2x2 Grid */}
            <motion.div
                className="grid-2x2 stagger-in active"
                style={{ flex: 1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {securityItems.map((item, i) => (
                    <GlassPanel key={i} style={{ padding: '30px', borderTop: `2px solid ${item.color}` }}>
                        <div className="text-matrix-header" style={{ color: item.color }}>{item.header}</div>
                        <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginTop: '10px' }}>
                            {item.desc}
                        </p>
                    </GlassPanel>
                ))}
            </motion.div>

            {/* Certifications Row */}
            <motion.div
                style={{
                    marginTop: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                {['HIPAA', 'BAA', 'SOC 2 TYPE II', 'AES-256', 'TLS 1.3'].map((cert, i) => (
                    <span key={i} className="pill green">{cert}</span>
                ))}
            </motion.div>
        </SlideContainer>
    );
};
