import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { Server, Shield, Database, Lock, Cloud } from 'lucide-react';

const Layer = ({ title, icon: Icon, details }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        padding: '16px',
        borderBottom: '1px solid var(--color-border-subtle)'
    }}>
        <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '12px',
            borderRadius: '8px',
            color: 'var(--color-agent-reasoning-blue)'
        }}>
            <Icon size={24} />
        </div>
        <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: '16px', marginBottom: '4px' }}>{title}</div>
            <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>{details}</div>
        </div>
    </div>
);

export const Slide17_Integration = () => {
    return (
        <SlideContainer>
            <div className="text-matrix-header" style={{ marginBottom: '16px' }}>Integration Strategy</div>
            <h2 className="text-hero" style={{ fontSize: '32px', marginBottom: '32px' }}>
                Secure, Cloud-Native Architecture
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '32px' }}>
                <GlassPanel style={{ padding: '0', overflow: 'hidden' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 20px', fontSize: '12px', fontWeight: 600, letterSpacing: '1px' }}>
                        HEBBIA INTEGRATION LAYERS (AZURE VPC)
                    </div>
                    <Layer
                        title="1. Data Ingestion"
                        icon={Database}
                        details="Connectors for SharePoint, Email (Exchange), S3, SFTP. Azure Form Recognizer for OCR."
                    />
                    <Layer
                        title="2. Data Processing"
                        icon={Server}
                        details="Hebbia Platform on Azure AI Foundry. PII/MNPI classification. NO training on customer data."
                    />
                    <Layer
                        title="3. IAM & Security"
                        icon={Shield}
                        details="SSO (Okta/Azure AD) via SAML. RBAC/ABAC access controls. SCIM provisioning."
                    />
                    <Layer
                        title="4. Audit & Monitoring"
                        icon={Lock}
                        details="Immutable audit logs to SIEM. AES-256 (rest) & TLS 1.3 (transit) encryption."
                    />
                </GlassPanel>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <GlassPanel style={{ padding: '24px', flex: 1, border: '1px solid var(--color-agent-reasoning-blue)' }}>
                        <div className="text-matrix-header" style={{ color: 'var(--color-agent-reasoning-blue)', marginBottom: '12px' }}>RECOMMENDED DEPLOYMENT</div>
                        <div style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>VPC / Private Cloud (Azure)</div>
                        <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                            Optimal balance of security and scale. SIG retains full network control (firewalls, private endpoints) while leveraging cloud resilience. Isolated environment segregated from low-latency trading systems.
                        </p>
                    </GlassPanel>
                    <GlassPanel style={{ padding: '24px', flex: 1 }}>
                        <div className="text-matrix-header" style={{ marginBottom: '12px' }}>DATA GOVERNANCE</div>
                        <ul style={{ fontSize: '13px', color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: 1.6 }}>
                            <li>Automated MNPI/PII tagging.</li>
                            <li>WORM storage for SEC 17a-4 compliance.</li>
                            <li>Granular access policies (Least Privilege).</li>
                        </ul>
                    </GlassPanel>
                </div>
            </div>
        </SlideContainer>
    );
};
