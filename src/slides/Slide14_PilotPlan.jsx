import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { Flag, Users, ClipboardCheck, ArrowRight } from 'lucide-react';

const TimelineEvent = ({ week, title, icon: Icon, description }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', width: '200px' }}>
        <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#000',
            border: '2px solid var(--color-agent-reasoning-blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px',
            zIndex: 2,
            color: '#fff',
            fontWeight: 600
        }}>
            {week}
        </div>
        <div style={{ color: 'var(--color-agent-reasoning-blue)', marginBottom: '8px' }}>
            <Icon size={24} />
        </div>
        <div style={{ color: '#fff', fontWeight: 600, marginBottom: '4px' }}>{title}</div>
        <div className="text-cell-data" style={{ fontSize: '12px' }}>{description}</div>
    </div>
);

export const Slide14_PilotPlan = () => {
    return (
        <SlideContainer>
            <div className="text-matrix-header" style={{ marginBottom: '16px' }}>Pilot Plan</div>
            <h2 className="text-hero" style={{ fontSize: '36px', marginBottom: '60px' }}>
                Validate Value in 6 Weeks
            </h2>

            {/* Overview Stats */}
            <div style={{ display: 'flex', gap: '24px', marginBottom: '60px' }}>
                <GlassPanel className="u-flex-center" style={{ padding: '16px 32px', gap: '12px' }}>
                    <Flag size={20} color="var(--color-agent-reasoning-blue)" />
                    <div>
                        <div className="text-matrix-header">Objective</div>
                        <div style={{ color: '#fff' }}>Validate 1-2 Workflows</div>
                    </div>
                </GlassPanel>
                <GlassPanel className="u-flex-center" style={{ padding: '16px 32px', gap: '12px' }}>
                    <Users size={20} color="var(--color-agent-reasoning-blue)" />
                    <div>
                        <div className="text-matrix-header">Scope</div>
                        <div style={{ color: '#fff' }}>5-10 Users (Quant/Legal)</div>
                    </div>
                </GlassPanel>
                <GlassPanel className="u-flex-center" style={{ padding: '16px 32px', gap: '12px' }}>
                    <ClipboardCheck size={20} color="var(--color-agent-reasoning-blue)" />
                    <div>
                        <div className="text-matrix-header">Success Criteria</div>
                        <div style={{ color: '#fff' }}>&gt;25% Efficiency Gain</div>
                    </div>
                </GlassPanel>
            </div>

            {/* Timeline Visual */}
            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 40px' }}>
                {/* Line */}
                <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '60px',
                    right: '60px',
                    height: '2px',
                    background: '#333',
                    zIndex: 1
                }} />

                <TimelineEvent
                    week="W2"
                    title="Baseline Metrics"
                    icon={ClipboardCheck}
                    description="Establish current cycle times and pain points."
                />

                <div style={{ zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', padding: '4px' }}>
                    <ArrowRight color="#333" />
                </div>

                <TimelineEvent
                    week="W6"
                    title="User Feedback"
                    icon={Users}
                    description="Collect qualitative feedback and usage data."
                />

                <div style={{ zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', padding: '4px' }}>
                    <ArrowRight color="#333" />
                </div>

                <TimelineEvent
                    week="W8"
                    title="Validation Report"
                    icon={Flag}
                    description="Final ROI analysis and rollout path."
                />
            </div>
        </SlideContainer>
    );
};
