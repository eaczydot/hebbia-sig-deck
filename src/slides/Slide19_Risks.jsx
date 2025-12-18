import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { ShieldAlert, Lock, FileCheck, CheckCircle2 } from 'lucide-react';

const ControlItem = ({ title, text }) => (
    <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
        <CheckCircle2 size={18} style={{ color: 'var(--color-agent-extraction-green)', minWidth: '18px' }} />
        <div>
            <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>{title}</div>
            <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>{text}</div>
        </div>
    </div>
);

export const Slide19_Risks = () => {
    return (
        <SlideContainer>
            <div className="text-matrix-header" style={{ marginBottom: '16px' }}>Risk Management</div>
            <h2 className="text-hero" style={{ fontSize: '32px', marginBottom: '32px' }}>
                Mitigating IP & Confidentiality Risks
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '32px' }}>
                <GlassPanel style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'rgba(239, 68, 68, 0.05)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    textAlign: 'center',
                    padding: '32px'
                }}>
                    <ShieldAlert size={48} style={{ color: '#fca5a5', marginBottom: '24px' }} />
                    <div style={{ fontSize: '20px', fontWeight: 600, color: 'white', marginBottom: '16px' }}>Primary Risk: IP Leakage</div>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                        Exposure of proprietary trading strategies, quantitative models, or MNPI through third-party AI platforms.
                    </p>
                </GlassPanel>

                <GlassPanel style={{ padding: '32px' }}>
                    <div className="text-matrix-header" style={{ marginBottom: '24px', color: 'var(--color-agent-extraction-green)' }}>CONTROLS & MITIGATIONS</div>

                    <ControlItem
                        title="No Training on Customer Data"
                        text="Explicit contractual prohibition (MSA/DPA) against using SIG data for model training. Your IP remains isolated."
                    />
                    <ControlItem
                        title="Encryption Everywhere"
                        text="Data encrypted at rest (AES-256) and in transit (TLS 1.3). Keys managed with strict access policies."
                    />
                    <ControlItem
                        title="Verified Compliance"
                        text="SOC 2 Type I & II, GDPR, and CCPA certified. Regular third-party penetration testing."
                    />
                    <ControlItem
                        title="Audit Trails"
                        text="Immutable logs of all data access and user activities linked to SIEM for forensic monitoring."
                    />
                </GlassPanel>
            </div>
        </SlideContainer>
    );
};
