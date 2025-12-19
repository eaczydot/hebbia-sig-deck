import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { InteractiveImage } from '../components/InteractiveImage';
import { SlideHeader } from '../components/SlideHeader';
import { motion } from 'framer-motion';
import { Database, Mail, Server, Folder, Shield, Zap } from 'lucide-react';
import integrationsShot from '../assets/integrations.png';

const Connector = ({ icon: Icon, label, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}
    >
        <div style={{
            width: 'clamp(52px, 6vw, 64px)',
            height: 'clamp(52px, 6vw, 64px)',
            borderRadius: 'clamp(12px, 1.8vw, 16px)',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: color,
            boxShadow: `0 4px 20px -5px ${color}20`
        }}>
            <Icon size={32} />
        </div>
        <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--color-text-secondary)', textAlign: 'center' }}>{label}</div>
    </motion.div>
);

export const Slide17_Integration = () => {
    return (
        <SlideContainer>
            <SlideHeader
                kicker="DATA STRATEGY"
                title="Native Integration & Sync"
                subtitle="Connect Hebbia to SIG's internal data sources without complex migration."
                align="center"
                subtitleMaxWidth={600}
                marginBottom={60}
            />

            <div style={{
                width: '100%',
                maxWidth: 'min(1100px, 100%)',
                margin: '0 auto',
                minHeight: 'min(400px, 44vh)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 'var(--layout-gap-xl)',
                flexWrap: 'wrap'
            }}>

                {/* Source Grid (Left) */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: 'var(--layout-gap-lg)',
                    justifyItems: 'center',
                    flex: '1 1 340px'
                }}>
                    <Connector icon={Folder} label="SHAREPOINT" color="var(--color-agent-reasoning-blue)" delay={0.2} />
                    <Connector icon={Mail} label="EMAIL / EXCHANGE" color="var(--color-agent-extraction-green)" delay={0.3} />
                    <Connector icon={Database} label="S3 / BLOB STORAGE" color="var(--color-agent-synthesis-purple)" delay={0.4} />
                    <Connector icon={Server} label="SFTP / SHARED DRIVE" color="var(--color-agent-citation-orange)" delay={0.5} />
                </div>

                {/* Central Hub (Hebbia) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    style={{ position: 'relative', zIndex: 10, flex: '0 0 auto' }}
                >
                    <GlassPanel style={{
                        width: 'min(240px, 38vw)',
                        height: 'min(240px, 38vw)',
                        borderRadius: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 'var(--spacing-md)',
                        background: 'rgba(5,5,5,0.9)',
                        border: '2px solid var(--color-agent-reasoning-blue)',
                        boxShadow: '0 0 80px rgba(59, 130, 246, 0.3)'
                    }}>
                        <div style={{ fontWeight: 800, fontSize: 'clamp(18px, 2.4vw, 24px)', letterSpacing: '0.1em' }}>HEBBIA</div>
                        <div style={{ width: 'clamp(32px, 4vw, 40px)', height: '2px', background: 'var(--color-agent-reasoning-blue)' }}></div>
                        <div className="text-matrix-header" style={{ fontSize: '10px' }}>REASONING CORE</div>
                    </GlassPanel>

                    {/* Particle / Line pulses moving inward */}
                    <svg
                        viewBox="0 0 800 800"
                        preserveAspectRatio="xMidYMid meet"
                        style={{ position: 'absolute', top: '50%', left: '50%', width: 'min(800px, 92vw)', height: 'min(800px, 92vw)', transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: -1 }}
                    >
                        <defs>
                            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="var(--color-agent-reasoning-blue)" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                        {[0, 90, 180, 270].map(angle => (
                            <motion.line
                                key={angle}
                                x1="400" y1="400" x2={400 + Math.cos(angle * Math.PI / 180) * 300} y2={400 + Math.sin(angle * Math.PI / 180) * 300}
                                stroke="url(#lineGrad)"
                                strokeWidth="1"
                                strokeDasharray="10 20"
                                animate={{ strokeDashoffset: [0, 100] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            />
                        ))}
                    </svg>
                </motion.div>

                {/* Rights (Grid Sync) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    style={{ maxWidth: 'min(280px, 92vw)', flex: '1 1 280px' }}
                >
                    <GlassPanel style={{ padding: 'clamp(16px, 2.2vw, 24px)' }}>
                        <div className="text-matrix-header">REAL-TIME SYNC</div>
                        <h4 style={{ color: 'white', fontSize: 'clamp(16px, 1.9vw, 18px)', fontWeight: 600, marginBottom: 'var(--spacing-md)' }}>Always Accurate</h4>
                        <p className="text-cell-data" style={{ fontSize: 'clamp(12px, 1.35vw, 13px)' }}>
                            Hebbia maintains a persistent index. When a document is updated in SharePoint or a new email arrives in Exchange, the Hebbia Matrix reflects the changes instantly.
                        </p>
                        <hr style={{ border: 0, height: '1px', background: 'rgba(255,255,255,0.1)', margin: 'var(--spacing-xl) 0' }} />
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--color-agent-reasoning-blue)' }}>
                            <Zap size={16} />
                            <span style={{ fontSize: '11px', fontWeight: 700 }}>ZERO MIGRATION REQUIRED</span>
                        </div>
                    </GlassPanel>
                </motion.div>

            </div>

            <div style={{ marginTop: 'var(--spacing-2xl)' }}>
                <GlassPanel style={{ padding: 'clamp(14px, 1.8vw, 18px)' }}>
                    <div className="text-matrix-header" style={{ color: 'var(--color-text-tertiary)' }}>SUPPORTED CONNECTORS</div>
                    <InteractiveImage
                        src={integrationsShot}
                        alt="Integrations product graphic"
                        height={'min(220px, 24vh)'}
                        style={{ maxWidth: '520px', margin: 'var(--spacing-md) auto 0' }}
                        hotspots={[
                            { id: 'sharepoint', x: 0.22, y: 0.25, title: 'SharePoint', body: 'Index live SharePoint libraries without migration or manual export.' },
                            { id: 'email', x: 0.74, y: 0.25, title: 'Email / Exchange', body: 'Bring deal context from threads, attachments, and calendar artifacts into Matrix.' },
                            { id: 'storage', x: 0.50, y: 0.70, title: 'Cloud storage', body: 'S3 / Blob / shared drives can be indexed with RBAC and audit controls.' }
                        ]}
                    />
                </GlassPanel>
            </div>
        </SlideContainer>
    );
};
