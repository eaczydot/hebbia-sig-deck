import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { Shield, Lock, Server, FileKey } from 'lucide-react';

const SecurityFeature = ({ icon: Icon, title, description }) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '12px', borderRadius: '8px', color: 'var(--color-agent-reasoning-blue)' }}>
            <Icon size={24} />
        </div>
        <div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px', color: '#fff' }}>{title}</h3>
            <p className="text-cell-data">{description}</p>
        </div>
    </div>
);

export const Slide15_Security = () => {
    return (
        <SlideContainer>
            <div className="text-matrix-header" style={{ marginBottom: '16px' }}>Security & Architecture</div>
            <h2 className="text-hero" style={{ fontSize: '36px', marginBottom: '40px' }}>
                Enterprise-Grade Security by Design
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>

                {/* Left: Architecture Diagram (Conceptual) */}
                <GlassPanel style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}>
                    <div className="text-matrix-header" style={{ marginBottom: '24px', textAlign: 'center' }}>VPC / Private Cloud Deployment</div>

                    {/* Diagram content */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
                        <div style={{
                            border: '2px dashed #444',
                            borderRadius: '8px',
                            padding: '24px',
                            width: '100%',
                            position: 'relative'
                        }}>
                            <div style={{ position: 'absolute', top: '-12px', left: '20px', background: '#000', padding: '0 8px', color: '#888', fontSize: '12px' }}>
                                SIG CLOUD TENANCY
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <Server size={32} color="var(--color-text-secondary)" style={{ marginBottom: '8px' }} />
                                    <div style={{ fontSize: '14px' }}>SIG Data</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ background: 'var(--color-agent-reasoning-blue)', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto' }}>
                                        <Shield size={16} color="#000" />
                                    </div>
                                    <div style={{ fontSize: '14px', color: '#fff' }}>Hebbia Instance</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ color: '#666', fontSize: '12px' }}>Scale-out Architecture • Zero Data Retention Options</div>
                    </div>
                </GlassPanel>

                {/* Right: Features List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', justifyContent: 'center' }}>
                    <SecurityFeature
                        icon={Lock}
                        title="SOC 2 Type II Certified"
                        description="Rigorous independent auditing of security controls and processes."
                    />
                    <SecurityFeature
                        icon={FileKey}
                        title="Zero Training on Customer Data"
                        description="Your data is isolated and never used to train base models shared with others."
                    />
                    <SecurityFeature
                        icon={Shield}
                        title="Granular AES-256 Encryption"
                        description="Data is encrypted at rest and in transit with customer-managed keys available."
                    />
                    <SecurityFeature
                        icon={Server}
                        title="Private Instance Isolation"
                        description="Dedicated compute and storage resources prevent any cross-tenant leakage."
                    />
                </div>

            </div>
        </SlideContainer>
    );
};
