import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { Activity, BarChart3, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const StatCard = ({ icon: Icon, title, value, subtext, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
        style={{ height: '100%' }}
    >
        <GlassPanel
            className="u-flex-col"
            style={{
                padding: '28px',
                height: '100%',
                justifyContent: 'space-between',
                borderTop: `1px solid ${color}`,
                background: `linear-gradient(180deg, ${color}10 0%, transparent 100%)`,
                borderRadius: '4px'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{
                    color: color,
                    opacity: 0.8
                }}>
                    <Icon size={24} />
                </div>
                <div style={{ fontSize: '36px', fontWeight: 800, color: 'white', fontFamily: 'var(--font-primary)', letterSpacing: '-0.02em' }}>{value}</div>
            </div>
            <div>
                <div className="text-matrix-header" style={{ color: color, fontSize: '10px', letterSpacing: '0.15em' }}>{title}</div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginTop: '12px', fontFamily: 'var(--font-primary)' }}>
                    {subtext}
                </div>
            </div>
        </GlassPanel>
    </motion.div>
);

export const Slide2_ExecutiveSummary = () => {
    return (
        <SlideContainer>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', height: '100%' }}>

                {/* Left Column: Narrative */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="text-matrix-header" style={{ marginBottom: '16px' }}>EXECUTIVE SUMMARY</div>
                    <h2 className="text-hero" style={{ fontSize: '48px', marginBottom: '32px' }}>
                        The Decision Latency <br /> Opportunity
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="glass-panel"
                            style={{ padding: '24px', borderLeft: '2px solid var(--color-agent-reasoning-blue)' }}
                        >
                            <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'white', marginBottom: '8px' }}>Growth Constraint</h3>
                            <p className="text-cell-data" style={{ lineHeight: 1.6 }}>
                                SIG's ability to scale is not limited by market opportunity, but by the <span style={{ color: 'white', fontWeight: 600 }}>human capacity to synthesize</span> vast unstructured data into conviction.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="glass-panel"
                            style={{ padding: '24px', borderLeft: '2px solid var(--color-agent-extraction-green)' }}
                        >
                            <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'white', marginBottom: '8px' }}>The Hebbia Delta</h3>
                            <p className="text-cell-data" style={{ lineHeight: 1.6 }}>
                                By deploying <span style={{ color: 'white', fontWeight: 600 }}>Agentic Reasoning</span>, we decouple analytical output from headcount linear growth, creating compounding institutional memory.
                            </p>
                        </motion.div>
                    </div>

                    <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--color-agent-reasoning-blue)', fontSize: '14px', fontWeight: 600 }}>
                        VIEW DETAILED PROJECTIONS <ArrowRight size={16} />
                    </div>
                </div>

                {/* Right Column: Key Metrics Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: '1fr 1fr',
                    gap: '24px',
                    alignContent: 'center'
                }}>
                    <StatCard
                        icon={Activity}
                        title="Decision Velocity"
                        value="3x"
                        subtext="Projected increase in decision throughput per analyst via automated synthesis."
                        color="var(--color-agent-reasoning-blue)"
                        delay={0.7}
                    />
                    <StatCard
                        icon={Zap}
                        title="Review Cycle"
                        value="-75%"
                        subtext="Reduction in manual document review time for credit agreements & diligence."
                        color="var(--color-agent-extraction-green)"
                        delay={0.8}
                    />
                    <StatCard
                        icon={BarChart3}
                        title="Cost Savings"
                        value="40h"
                        subtext="Hours saved per deal cycle, redeployed to higher-alpha strategy generation."
                        color="var(--color-agent-synthesis-purple)"
                        delay={0.9}
                    />
                    <StatCard
                        icon={TrendingUp}
                        title="3-Year ROI"
                        value="250%"
                        subtext="Conservative projection based on capacity creation & risk mitigation."
                        color="var(--color-agent-citation-orange)"
                        delay={1.0}
                    />
                </div>

            </div>
        </SlideContainer>
    );
};
