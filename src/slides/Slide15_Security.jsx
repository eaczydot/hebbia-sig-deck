import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { Shield, Lock, Server, Cpu, Globe, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

const SecurityPill = ({ text }) => (
    <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '6px 12px',
        background: 'rgba(16, 185, 129, 0.1)',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        color: 'var(--color-agent-extraction-green)',
        borderRadius: '99px',
        fontSize: '11px',
        fontWeight: 600,
        gap: '6px'
    }}>
        <Shield size={12} />
        {text}
    </div>
);

const SecurityBlock = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.6 }}
    >
        <GlassPanel style={{ padding: '24px', borderLeft: '3px solid var(--color-agent-reasoning-blue)' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    padding: '12px',
                    borderRadius: '12px',
                    color: 'var(--color-agent-reasoning-blue)',
                    height: 'fit-content'
                }}>
                    <Icon size={24} />
                </div>
                <div>
                    <h4 style={{ fontSize: '18px', fontWeight: 600, color: 'white', marginBottom: '8px' }}>{title}</h4>
                    <p className="text-cell-data" style={{ fontSize: '13px' }}>{description}</p>
                </div>
            </div>
        </GlassPanel>
    </motion.div>
);

export const Slide15_Security = () => {
    return (
        <SlideContainer>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', height: '100%', alignItems: 'center' }}>

                {/* Visual Architecture (Left) */}
                <div style={{ position: 'relative' }}>
                    <div className="text-matrix-header" style={{ marginBottom: '16px' }}>ARCHITECTURE</div>
                    <h2 className="text-hero" style={{ fontSize: '48px', marginBottom: '40px' }}>Enterprise-Grade <br />Security by Design</h2>

                    <GlassPanel style={{
                        padding: '32px',
                        height: '400px',
                        background: 'rgba(5,5,5,0.8)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '32px',
                        position: 'relative',
                        overflow: 'visible'
                    }}>
                        {/* Central Vault Visual */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', position: 'relative' }}>

                            <div style={{ textAlign: 'center' }}>
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--color-agent-reasoning-blue)', filter: 'blur(30px)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: -1 }}
                                />
                                <Server size={48} color="var(--color-text-secondary)" />
                                <div className="text-mono-data" style={{ marginTop: '12px' }}>SIG CLOUD</div>
                            </div>

                            <div style={{ color: 'var(--color-border-functional)' }}>
                                <Globe size={24} />
                            </div>

                            <div style={{
                                width: '160px',
                                height: '160px',
                                border: '2px solid var(--color-agent-reasoning-blue)',
                                borderRadius: '16px',
                                background: 'rgba(59, 130, 246, 0.05)',
                                padding: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px',
                                boxShadow: '0 0 50px rgba(59, 130, 246, 0.2)'
                            }}>
                                <Lock size={32} color="var(--color-agent-reasoning-blue)" />
                                <div style={{ fontSize: '14px', fontWeight: 700, textAlign: 'center' }}>HEBBIA <br />VPC ISOLATION</div>
                            </div>
                        </div>

                        {/* Badges / Certs */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                            <SecurityPill text="SOC 2 TYPE II" />
                            <SecurityPill text="AES-256" />
                            <SecurityPill text="TLS 1.3" />
                            <SecurityPill text="SAML/SSO" />
                        </div>
                    </GlassPanel>
                </div>

                {/* Features (Right) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <SecurityBlock
                        icon={EyeOff}
                        title="Zero Data Retention"
                        description="Hebbia does not retain data longer than necessary for processing. No training on customer data. Ever."
                        delay={0.2}
                    />
                    <SecurityBlock
                        icon={Cpu}
                        title="Dedicated Compute"
                        description="Each enterprise tenant runs on an isolated compute cluster within our secure Azure/AWS perimeter."
                        delay={0.4}
                    />
                    <SecurityBlock
                        icon={Shield}
                        title="MNPI & PII Protection"
                        description="Automated PII/MNPI redaction and classification workflows baked into the core reasoning engine."
                        delay={0.6}
                    />
                    <SecurityBlock
                        icon={Server}
                        title="Flexible Deployment"
                        description="VPC, Private Cloud, or Managed SaaS - we meet SIG's security requirements where they are."
                        delay={0.8}
                    />
                </div>

            </div>
        </SlideContainer>
    );
};
