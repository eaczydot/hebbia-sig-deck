import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Braces, Brain, CheckCircle2 } from 'lucide-react';

const STEPS = [
    {
        id: 'ingest',
        label: 'INGEST',
        subtitle: 'Any file, any format',
        Icon: FileText,
        color: 'rgba(163, 163, 163, 0.9)',
        accent: 'rgba(163, 163, 163, 0.35)'
    },
    {
        id: 'extract',
        label: 'EXTRACT',
        subtitle: 'Structure key data',
        Icon: Braces,
        color: 'var(--color-agent-extraction-green)',
        accent: 'rgba(16, 185, 129, 0.22)'
    },
    {
        id: 'reason',
        label: 'REASON',
        subtitle: 'Multi-step synthesis',
        Icon: Brain,
        color: 'var(--color-agent-reasoning-blue)',
        accent: 'rgba(59, 130, 246, 0.22)'
    },
    {
        id: 'output',
        label: 'OUTPUT',
        subtitle: 'Memos, models, audit',
        Icon: CheckCircle2,
        color: 'var(--color-agent-synthesis-purple)',
        accent: 'rgba(139, 92, 246, 0.22)'
    }
];

export const AgenticStackDiagram = ({ height = 420 }) => {
    const [activeId, setActiveId] = useState('reason');

    const activeStep = useMemo(
        () => STEPS.find(s => s.id === activeId) || STEPS[0],
        [activeId]
    );

    return (
        <div style={{ width: '100%', height, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {STEPS.map((s) => (
                    <button
                        key={s.id}
                        type="button"
                        onClick={() => setActiveId(s.id)}
                        className={`pill ${s.id === 'extract' ? 'green' : s.id === 'reason' ? 'blue' : s.id === 'output' ? 'purple' : 'blue'}`}
                        style={{
                            opacity: s.id === activeId ? 1 : 0.55,
                            borderColor: s.id === activeId ? s.color : 'var(--color-border-functional)',
                            background: s.id === activeId ? s.accent : 'rgba(0,0,0,0.10)',
                            color: s.id === activeId ? s.color : 'var(--color-text-secondary)',
                            cursor: 'pointer'
                        }}
                    >
                        {s.label}
                    </button>
                ))}
            </div>

            <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    {STEPS.map((s, i) => {
                        const widthPct = 92 - i * 7;
                        const bottom = `${6 + i * 18}%`;
                        const isActive = s.id === activeId;
                        const Icon = s.Icon;

                        return (
                            <motion.div
                                key={s.id}
                                initial={{ opacity: 0, y: 22 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 + i * 0.1, duration: 0.7, ease: 'easeOut' }}
                                style={{
                                    position: 'absolute',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    bottom,
                                    width: `${widthPct}%`,
                                    height: 'clamp(52px, 7vh, 64px)',
                                    borderRadius: 4,
                                    border: `1px solid ${isActive ? s.color : 'var(--color-border-functional)'}`,
                                    background: isActive
                                        ? `linear-gradient(90deg, rgba(0,0,0,0.25), ${s.accent})`
                                        : 'rgba(0,0,0,0.18)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: 'clamp(10px, 1.8vw, 14px) clamp(12px, 2vw, 16px)',
                                    gap: 14
                                }}
                                onMouseEnter={() => setActiveId(s.id)}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                    <div style={{
                                        width: 'clamp(30px, 4.2vh, 34px)',
                                        height: 'clamp(30px, 4.2vh, 34px)',
                                        borderRadius: 4,
                                        border: '1px solid var(--color-border-functional)',
                                        background: 'rgba(0,0,0,0.25)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: isActive ? s.color : 'var(--color-text-tertiary)'
                                    }}>
                                        <Icon size={18} />
                                    </div>
                                    <div>
                                        <div style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: 'clamp(11px, 1.2vw, 12px)',
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                            color: isActive ? s.color : 'var(--color-text-tertiary)'
                                        }}>
                                            {s.label}
                                        </div>
                                        <div style={{ fontSize: 'clamp(13px, 1.6vw, 15px)', color: 'var(--color-text-primary)', lineHeight: 1.35 }}>
                                            {s.subtitle}
                                        </div>
                                    </div>
                                </div>

                                <div style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: 12,
                                    color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'
                                }}>
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                            </motion.div>
                        );
                    })}

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        style={{
                            position: 'absolute',
                            right: 'clamp(12px, 1.8vw, 16px)',
                            top: 'clamp(12px, 1.8vw, 16px)',
                            width: 'min(320px, 46vw)',
                            borderRadius: 4,
                            border: `1px solid ${activeStep.color}`,
                            background: 'rgba(0,0,0,0.32)',
                            padding: 'clamp(12px, 1.8vw, 16px)'
                        }}
                    >
                        <div className="text-matrix-header" style={{ color: activeStep.color }}>
                            WHY IT MATTERS
                        </div>
                        <div style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(13px, 1.6vw, 15px)', lineHeight: 1.6 }}>
                            {activeId === 'ingest'
                                ? 'Bring fragmented inputs into one indexed workspace.'
                                : activeId === 'extract'
                                    ? 'Turn messy documents into structured, comparable fields.'
                                    : activeId === 'reason'
                                        ? 'Decompose questions and execute steps across the corpus.'
                                        : 'Deliver verifiable outputs with export-ready structure.'}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
