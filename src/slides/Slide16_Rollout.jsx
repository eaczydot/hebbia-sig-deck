import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { Flag, Users, Rocket, BarChart } from 'lucide-react';

const TimelineCard = ({ day, title, items, icon: Icon }) => (
    <GlassPanel className="u-flex-col" style={{ padding: '20px', height: '100%', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
                background: 'rgba(59, 130, 246, 0.1)',
                padding: '8px',
                borderRadius: '50%',
                color: 'var(--color-agent-reasoning-blue)'
            }}>
                <Icon size={18} />
            </div>
            <div>
                <div className="text-matrix-header" style={{ color: 'var(--color-agent-reasoning-blue)' }}>{day}</div>
                <div style={{ fontWeight: 600, fontSize: '16px' }}>{title}</div>
            </div>
        </div>
        <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
            {items.map((item, i) => (
                <li key={i} style={{ marginBottom: '8px' }}>{item}</li>
            ))}
        </ul>
    </GlassPanel>
);

export const Slide16_Rollout = () => {
    return (
        <SlideContainer>
            <div className="text-matrix-header" style={{ marginBottom: '16px' }}>Change Management</div>
            <h2 className="text-hero" style={{ fontSize: '32px', marginBottom: '32px' }}>
                Phased Rollout Plan
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
                marginBottom: '32px'
            }}>
                <TimelineCard
                    day="Days 1-90"
                    title="Partner Enablement"
                    icon={Flag}
                    items={[
                        "Foundational Onboarding & Training for initial core teams.",
                        "Co-develop GTM playbooks for internal adoption (Quant, Legal, etc).",
                        "Launch internal co-marketing to promote benefits.",
                        "Goal: 5 new qualified internal pilots identified."
                    ]}
                />
                <TimelineCard
                    day="Days 91-180"
                    title="Structure Expansion"
                    icon={Users}
                    items={[
                        "Execute 5+ new pilots in adjacent teams.",
                        "Codify successful workflows into standardized templates.",
                        "Socialize success stories to build momentum.",
                        "Goal: 3 new departmental pilots completed."
                    ]}
                />
                <TimelineCard
                    day="Days 181-365"
                    title="Enterprise Scale"
                    icon={Rocket}
                    items={[
                        "Full enterprise-wide rollout to all trading desks & research teams.",
                        "Establish Center of Excellence (CoE) for AI governance.",
                        "Transition to strategic partnership model for co-innovation.",
                        "Goal: >80% adoption across targeted departments."
                    ]}
                />
            </div>

            <GlassPanel style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <BarChart className="text-blue-400" size={24} />
                    <div>
                        <div style={{ fontWeight: 600, color: 'white' }}>Governance & KPI Cadence</div>
                        <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Quarterly SteerCo, Monthly Operational Reviews, Weekly Adoption Dashboards</div>
                    </div>
                </div>
            </GlassPanel>
        </SlideContainer>
    );
};
