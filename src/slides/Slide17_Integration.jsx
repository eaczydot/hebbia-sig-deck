import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';
import { Database, Mail, Server, Folder, Shield, Zap } from 'lucide-react';

const Connector = ({ icon: Icon, label, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}
    >
        <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            background: 'color-mix(in srgb, var(--color-text-primary) 3%, transparent)',
            border: '1px solid color-mix(in srgb, var(--color-text-primary) 10%, transparent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: color,
            boxShadow: `0 4px 20px -5px color-mix(in srgb, ${color} 20%, transparent)`
        }}>
            <Icon size={32} />
        </div>
        <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--color-text-secondary)', textAlign: 'center' }}>{label}</div>
    </motion.div>
);

export const Slide17_Integration = () => {
    return (
        <SlideContainer>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <div className="text-matrix-header" style={{ justifyContent: 'center' }}>DATA STRATEGY</div>
                <h2 className="text-hero" style={{ fontSize: '48px' }}>Native Integration & Sync</h2>
                <p className="text-subhero" style={{ maxWidth: '600px', margin: '24px auto' }}>
                    Connect Hebbia to SIG's internal data sources without complex migration.
                </p>
            </div>

            <div style={{ position: 'relative', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                {/* Source Grid (Left) */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', position: 'absolute', left: '10%' }}>
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
                    style={{ position: 'relative', zIndex: 10 }}
                >
                    <GlassPanel style={{
                        width: '240px',
                        height: '240px',
                        borderRadius: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        background: 'color-mix(in srgb, var(--bg-void) 90%, transparent)',
                        border: '2px solid var(--color-agent-reasoning-blue)',
                        boxShadow: '0 0 80px color-mix(in srgb, var(--color-brand-cobalt) 30%, transparent)'
                    }}>
                        <div style={{ fontWeight: 800, fontSize: '24px', letterSpacing: '0.1em' }}>HEBBIA</div>
                        <div style={{ width: '40px', height: '2px', background: 'var(--color-agent-reasoning-blue)' }}></div>
                        <div className="text-matrix-header" style={{ fontSize: '10px' }}>REASONING CORE</div>
                    </GlassPanel>

                    {/* Particle / Line pulses moving inward */}
                    <svg style={{ position: 'absolute', top: '50%', left: '50%', width: '800px', height: '800px', transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: -1 }}>
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
                    style={{ position: 'absolute', right: '10%', maxWidth: '280px' }}
                >
                    <GlassPanel style={{ padding: '24px' }}>
                        <div className="text-matrix-header">REAL-TIME SYNC</div>
                        <h4 style={{ color: 'var(--color-text-primary)', fontSize: '18px', fontWeight: 600, marginBottom: '12px' }}>Always Accurate</h4>
                        <p className="text-cell-data" style={{ fontSize: '13px' }}>
                            Hebbia maintains a persistent index. When a document is updated in SharePoint or a new email arrives in Exchange, the Hebbia Matrix reflects the changes instantly.
                        </p>
                        <hr style={{ border: 0, height: '1px', background: 'var(--color-border-functional)', margin: '20px 0' }} />
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--color-agent-reasoning-blue)' }}>
                            <Zap size={16} />
                            <span style={{ fontSize: '11px', fontWeight: 700 }}>ZERO MIGRATION REQUIRED</span>
                        </div>
                    </GlassPanel>
                </motion.div>

            </div>
        </SlideContainer>
    );
};
