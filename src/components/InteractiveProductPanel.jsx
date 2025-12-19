import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from './GlassPanel';
import { InteractiveImage } from './InteractiveImage';
import { AgentPill } from './AgentPill';
import { ChevronRight, Search, Sparkles } from 'lucide-react';

export const InteractiveProductPanel = ({
    title = 'MATRIX WORKSPACE',
    subtitle = 'Interactive product snapshot',
    image,
    hotspots = [],
    prompt = 'Summarize key exposures and cite sources.',
    pills = [
        { label: 'LIVE', variant: 'green' },
        { label: 'CITED', variant: 'orange' }
    ],
    height = 520
}) => {
    const [activeTab, setActiveTab] = useState('workspace');

    const tabConfig = useMemo(
        () => ([
            { id: 'workspace', label: 'Workspace' },
            { id: 'trace', label: 'Trace' },
            { id: 'export', label: 'Export' },
        ]),
        []
    );

    return (
        <GlassPanel style={{ height, padding: 0, overflow: 'hidden' }}>
            <div style={{
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 14px',
                borderBottom: '1px solid var(--color-border-functional)',
                background: 'rgba(0,0,0,0.25)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                        width: 10,
                        height: 10,
                        borderRadius: 999,
                        background: 'rgba(239, 68, 68, 0.75)'
                    }} />
                    <div style={{
                        width: 10,
                        height: 10,
                        borderRadius: 999,
                        background: 'rgba(245, 158, 11, 0.75)'
                    }} />
                    <div style={{
                        width: 10,
                        height: 10,
                        borderRadius: 999,
                        background: 'rgba(16, 185, 129, 0.75)'
                    }} />

                    <div style={{ marginLeft: 6 }}>
                        <div className="u-font-mono" style={{ fontSize: 12, color: 'var(--color-text-primary)', letterSpacing: '0.06em' }}>
                            {title}
                        </div>
                        <div className="u-font-mono" style={{ fontSize: 11, color: 'var(--color-text-tertiary)' }}>
                            {subtitle}
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {pills.map((p) => (
                        <span key={p.label} className={`pill ${p.variant || 'blue'}`} style={{ fontSize: 10 }}>
                            {p.label}
                        </span>
                    ))}
                </div>
            </div>

            <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 12, height: `calc(${height}px - 44px)` }}>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                    {tabConfig.map((t) => (
                        <button
                            key={t.id}
                            type="button"
                            onClick={() => setActiveTab(t.id)}
                            className="pill blue"
                            style={{
                                cursor: 'pointer',
                                borderColor: activeTab === t.id ? 'var(--pill-border)' : 'var(--color-border-functional)',
                                background: activeTab === t.id ? 'var(--pill-bg)' : 'rgba(0,0,0,0.15)',
                                color: activeTab === t.id ? 'var(--color-agent-reasoning-blue)' : 'var(--color-text-secondary)',
                                fontSize: 10
                            }}
                        >
                            {t.label}
                        </button>
                    ))}

                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-text-tertiary)' }}>
                        <Search size={14} />
                        <div className="u-font-mono" style={{ fontSize: 11 }}>
                            {activeTab === 'workspace' ? 'Query' : activeTab === 'trace' ? 'Citations' : 'Export'}
                        </div>
                    </div>
                </div>

                <div style={{
                    border: '1px solid var(--color-border-functional)',
                    borderRadius: 4,
                    background: 'rgba(0,0,0,0.20)',
                    padding: '10px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                }}>
                    <Sparkles size={16} color="var(--color-agent-reasoning-blue)" />
                    <div style={{ flex: 1, color: 'var(--color-text-secondary)', fontSize: 16, lineHeight: 1.35 }}>
                        {prompt}
                    </div>
                    <ChevronRight size={18} color="var(--color-text-tertiary)" />
                </div>

                <div style={{ flex: 1, minHeight: 0 }}>
                    {image ? (
                        <InteractiveImage
                            src={image}
                            alt={title}
                            height={340}
                            borderRadius={4}
                            border="1px solid var(--color-border-functional)"
                            hotspots={hotspots}
                            style={{ background: 'rgba(0,0,0,0.25)' }}
                        />
                    ) : (
                        <div style={{
                            height: 340,
                            borderRadius: 4,
                            border: '1px solid var(--color-border-functional)',
                            background: 'rgba(0,0,0,0.25)'
                        }} />
                    )}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    style={{ display: 'flex', justifyContent: 'space-between', gap: 10, alignItems: 'center' }}
                >
                    <div className="u-font-mono" style={{ fontSize: 11, color: 'var(--color-text-tertiary)' }}>
                        // Agent activity
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <AgentPill label="Retrieving…" />
                        <AgentPill label="Structuring…" />
                    </div>
                </motion.div>
            </div>
        </GlassPanel>
    );
};
