import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';

const sensitivityData = [
    { name: 'Low Adoption', roi: 120 },
    { name: 'Base Case', roi: 310 },
    { name: 'High Adoption', roi: 450 },
];

export const Slide13_ROI = () => {
    return (
        <SlideContainer>
            <div className="text-matrix-header" style={{ marginBottom: '16px' }}>Projected ROI</div>
            <h2 className="text-hero" style={{ fontSize: '36px', marginBottom: '40px' }}>
                Multi-Year ROI Projections
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>

                {/* Left: Summary Table */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <p className="text-cell-data" style={{ fontSize: '16px' }}>
                        Projected multi-year ROI exceeding <span style={{ color: '#fff', fontWeight: 600 }}>3x</span> with payback period under 12 months.
                    </p>

                    <GlassPanel style={{ padding: '0', overflow: 'hidden' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', background: '#0A0A0A', padding: '16px', borderBottom: '1px solid #333' }}>
                            <div className="text-matrix-header">Scenario</div>
                            <div className="text-matrix-header">ROI</div>
                            <div className="text-matrix-header">NPV</div>
                            <div className="text-matrix-header">Payback</div>
                        </div>
                        {/* Rows */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '16px', borderBottom: '1px solid #222' }}>
                            <div style={{ color: '#888' }}>Low Case</div>
                            <div style={{ color: 'var(--color-text-primary)' }}>120%</div>
                            <div style={{ color: 'var(--color-text-primary)' }}>$1.1M</div>
                            <div style={{ color: 'var(--color-text-primary)' }}>14 mo</div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '16px', background: 'rgba(59, 130, 246, 0.05)', borderLeft: '2px solid var(--color-agent-reasoning-blue)' }}>
                            <div style={{ color: 'var(--color-agent-reasoning-blue)', fontWeight: 600 }}>Base Case</div>
                            <div style={{ color: '#fff', fontWeight: 600 }}>310%</div>
                            <div style={{ color: '#fff', fontWeight: 600 }}>$6.2M</div>
                            <div style={{ color: '#fff', fontWeight: 600 }}>9 mo</div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '16px' }}>
                            <div style={{ color: '#888' }}>High Case</div>
                            <div style={{ color: 'var(--color-text-primary)' }}>450%</div>
                            <div style={{ color: 'var(--color-text-primary)' }}>$9.5M</div>
                            <div style={{ color: 'var(--color-text-primary)' }}>6 mo</div>
                        </div>
                    </GlassPanel>

                    <div style={{ fontSize: '12px', color: '#666' }}>
                        *Base Case Assumption: 70% adoption rate, 8 hours saved per user/week.
                    </div>
                </div>

                {/* Right: Sensitivity Chart */}
                <div style={{ height: '350px' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#888', fontSize: '14px' }}>ROI Sensitivity Analysis</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            layout="vertical"
                            data={sensitivityData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <XAxis type="number" hide />
                            <YAxis dataKey="name" type="category" stroke="#888" width={100} tick={{ fontSize: 12 }} />
                            <Tooltip
                                cursor={{ fill: 'transparent' }}
                                contentStyle={{ background: '#111', border: '1px solid #333' }}
                            />
                            <Bar dataKey="roi" barSize={30} radius={[0, 4, 4, 0]}>
                                {sensitivityData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index === 1 ? 'var(--color-agent-reasoning-blue)' : '#444'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </SlideContainer>
    );
};
