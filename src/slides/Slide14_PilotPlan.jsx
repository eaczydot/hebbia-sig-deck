import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';
import { CheckCircle2, Rocket, Users, Target, Zap } from 'lucide-react';

const WeekBlock = ({ week, title, tasks, current }) => (
    <div style={{ flex: 1, position: 'relative' }}>
        <div style={{
            fontSize: '11px',
            fontWeight: 700,
            color: current ? 'var(--color-agent-reasoning-blue)' : 'var(--color-text-tertiary)',
            marginBottom: '12px',
            fontFamily: 'var(--font-mono)'
        }}>WEEK {week}</div>

        <GlassPanel style={{
            padding: '24px',
            height: '280px',
            border: current ? '1px solid var(--color-agent-reasoning-blue)' : '1px solid rgba(255,255,255,0.05)',
            background: current ? 'rgba(59, 130, 246, 0.05)' : 'rgba(15,15,15,0.6)',
        }}>
            <div style={{ fontWeight: 600, fontSize: '18px', color: 'white', marginBottom: '16px' }}>{title}</div>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                {tasks.map((task, i) => (
                    <li key={i} style={{ display: 'flex', gap: '8px', marginBottom: '10px', fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                        <CheckCircle2 size={14} color={current ? "var(--color-agent-reasoning-blue)" : "#333"} style={{ minWidth: '14px', marginTop: '2px' }} />
                        {task}
                    </li>
                ))}
            </ul>
        </GlassPanel>
    </div>
);

export const Slide14_PilotPlan = () => {
    return (
        <SlideContainer>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
                <div>
                    <div className="text-matrix-header">IMPLEMENTATION</div>
                    <h2 className="text-hero" style={{ fontSize: '48px' }}>8-Week Proof of Value</h2>
                </div>
                <div style={{ textAlign: 'right', maxWidth: '300px' }}>
                    <p className="text-cell-data" style={{ fontSize: '13px' }}>
                        A rapid, high-intensity pilot designed to validate technical feasibility and measurable alpha generation.
                    </p>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
                <WeekBlock
                    week="1-2"
                    title="Ingestion & Sync"
                    tasks={[
                        "Azure VPC Setup",
                        "Data Source Connection (SharePoint/Shared Drive)",
                        "PII/MNPI Policy Config",
                        "User Whitelisting (10 initial analysts)"
                    ]}
                />
                <WeekBlock
                    week="3-4"
                    title="Workflow Design"
                    tasks={[
                        "Identify Core Use Cases (Credit, Quant, Legal)",
                        "Draft Custom Matrix Templates",
                        "Initial Prompt Engineering Workshop",
                        "Benchmark Baseline Manual Speed"
                    ]}
                    current={true}
                />
                <WeekBlock
                    week="5-7"
                    title="Live Execution"
                    tasks={[
                        "Analysts run active deal diligence in Hebbia",
                        "Continuous iteration on Matrix logic",
                        "Deep-dive technical performance audit",
                        "Bi-weekly Steering Committee reviews"
                    ]}
                />
                <WeekBlock
                    week="8"
                    title="Final POV Audit"
                    tasks={[
                        "Quantify hours saved vs baseline",
                        "Success metrics scorecard finalization",
                        "Enterprise expansion roadmap",
                        "Final Demo to SIG Stakeholders"
                    ]}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Users size={24} color="var(--color-agent-reasoning-blue)" />
                    <div style={{ fontSize: '13px', fontWeight: 600 }}>10 Dedicated Pilot Users</div>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Target size={24} color="var(--color-agent-extraction-green)" />
                    <div style={{ fontSize: '13px', fontWeight: 600 }}>3 Target Business Units</div>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Zap size={24} color="var(--color-agent-synthesis-purple)" />
                    <div style={{ fontSize: '13px', fontWeight: 600 }}>Success = 2x Speed Gain</div>
                </div>
            </div>
        </SlideContainer>
    );
};
