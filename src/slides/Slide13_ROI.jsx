import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Clock, Users, BarChart } from 'lucide-react';

const ROICard = ({ title, value, label, subtext, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.8, ease: "easeOut" }}
        style={{ flex: 1 }}
    >
        <GlassPanel style={{
            height: '100%',
            padding: '40px 32px',
            textAlign: 'center',
            background: `linear-gradient(180deg, ${color}15 0%, rgba(10,10,10,0.8) 100%)`,
            borderTop: `2px solid ${color}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <div style={{ color: color, marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                <TrendingUp size={32} />
            </div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-text-tertiary)', marginBottom: '8px', textTransform: 'uppercase' }}>
                {label}
            </div>
            <div style={{ fontSize: '56px', fontWeight: 600, color: 'white', marginBottom: '8px' }}>{value}</div>
            <div style={{ fontSize: '18px', fontWeight: 500, color: color, marginBottom: '16px' }}>{title}</div>
            <p className="text-cell-data" style={{ fontSize: '13px', opacity: 0.8 }}>{subtext}</p>
        </GlassPanel>
    </motion.div>
);

export const Slide13_ROI = () => {
    return (
        <SlideContainer>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <div className="text-matrix-header" style={{ justifyContent: 'center' }}>FINANCIAL IMPACT</div>
                <h2 className="text-hero" style={{ fontSize: '56px' }}>Proven ROI at Scale</h2>
                <p className="text-subhero" style={{ maxWidth: '700px', margin: '24px auto' }}>
                    Conservative models project payback in under 12 months with massive operational upside.
                </p>
            </div>

            <div style={{ display: 'flex', gap: '24px', flex: 1, marginBottom: '40px' }}>
                <ROICard
                    label="CONSERVATIVE"
                    value="2.5x"
                    title="Base ROI"
                    subtext="Assumes 40% adoption and 8 hours saved per analyst/week."
                    color="var(--color-agent-reasoning-blue)"
                    delay={0.2}
                />
                <ROICard
                    label="TARGET"
                    value="4.1x"
                    title="Optimized ROI"
                    subtext="Assumes 75% adoption and full integration with internal knowledge graph."
                    color="var(--color-agent-extraction-green)"
                    delay={0.4}
                />
                <ROICard
                    label="UPTIME"
                    value="< 9mo"
                    title="Payback Period"
                    subtext="Time to reach break-even on annual license and implementation costs."
                    color="var(--color-agent-synthesis-purple)"
                    delay={0.6}
                />
            </div>

            {/* Matrix Table Comparison */}
            <GlassPanel style={{ padding: '24px', background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '24px' }}>
                    <div className="text-matrix-header">ROI DRIVER</div>
                    <div className="text-matrix-header" style={{ textAlign: 'center' }}>METRIC</div>
                    <div className="text-matrix-header" style={{ textAlign: 'center' }}>IMPACT</div>
                    <div className="text-matrix-header" style={{ textAlign: 'center' }}>VALUE</div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Clock size={16} color="var(--color-agent-reasoning-blue)" />
                        <span className="text-cell-data">Manual Review Time Reduction</span>
                    </div>
                    <div style={{ textAlign: 'center', fontWeight: 600 }}>75%</div>
                    <div style={{ textAlign: 'center', color: 'var(--color-agent-extraction-green)' }}>High</div>
                    <div style={{ textAlign: 'center', color: 'white' }}>$2.4M</div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Users size={16} color="var(--color-agent-extraction-green)" />
                        <span className="text-cell-data">Analyst Decision Velocity</span>
                    </div>
                    <div style={{ textAlign: 'center', fontWeight: 600 }}>3.2x</div>
                    <div style={{ textAlign: 'center', color: 'var(--color-agent-extraction-green)' }}>High</div>
                    <div style={{ textAlign: 'center', color: 'white' }}>$4.1M</div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <BarChart size={16} color="var(--color-agent-synthesis-purple)" />
                        <span className="text-cell-data">Outside Counsel Avoidance</span>
                    </div>
                    <div style={{ textAlign: 'center', fontWeight: 600 }}>40%</div>
                    <div style={{ textAlign: 'center', color: '#F59E0B' }}>Medium</div>
                    <div style={{ textAlign: 'center', color: 'white' }}>$1.2M</div>
                </div>
            </GlassPanel>
        </SlideContainer>
    );
};
