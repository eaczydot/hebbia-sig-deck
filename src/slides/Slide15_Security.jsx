import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';

export const Slide15_Security = () => {
    const securityItems = [
        {
            header: 'ZERO DATA RETENTION',
            desc: 'Hebbia does not retain data longer than necessary for processing. No training on customer data.',
            color: 'var(--color-agent-reasoning-blue)'
        },
        {
            header: 'DEDICATED COMPUTE',
            desc: 'Each enterprise tenant runs on an isolated compute cluster within our secure Azure/AWS perimeter.',
            color: 'var(--color-agent-extraction-green)'
        },
        {
            header: 'MNPI & PII PROTECTION',
            desc: 'Automated PII/MNPI redaction and classification workflows baked into the reasoning engine.',
            color: 'var(--color-agent-synthesis-purple)'
        },
        {
            header: 'FLEXIBLE DEPLOYMENT',
            desc: 'VPC, Private Cloud, or Managed SaaS - we meet SIG\'s security requirements where they are.',
            color: 'var(--color-agent-citation-orange)'
        }
    ];

    return (
        <SlideContainer>
            {/* Header */}
            <div style={{ marginBottom: '40px' }}>
                <div className="text-matrix-header">13 // SECURITY</div>
                <h2 className="text-title">Enterprise-Grade Security</h2>
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
                        <p className="text-body" style={{ marginTop: '10px' }}>
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
                {['SOC 2 TYPE II', 'AES-256', 'TLS 1.3', 'SAML/SSO', 'GDPR'].map((cert, i) => (
                    <span key={i} className="pill green">{cert}</span>
                ))}
            </motion.div>
        </SlideContainer>
    );
};
