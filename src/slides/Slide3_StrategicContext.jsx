import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { Globe, Users, TrendingUp, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const ContextCard = ({ icon: Icon, title, value, details, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
        style={{ flex: 1 }}
    >
        <GlassPanel style={{ height: '100%', padding: '24px', borderTop: `1px solid ${color}60` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div className="text-matrix-header" style={{ color: color }}>{title}</div>
                <Icon size={20} color={color} />
            </div>
            <div style={{ fontSize: '28px', fontWeight: 600, marginBottom: '8px', color: 'white' }}>{value}</div>
            <div className="text-cell-data" style={{ fontSize: '13px', lineHeight: 1.5 }}>{details}</div>
        </GlassPanel>
    </motion.div>
);

export const Slide3_StrategicContext = () => {
    return (
        <SlideContainer>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <div>
                    <div className="text-matrix-header">STRATEGIC CONTEXT</div>
                    <h2 className="text-hero" style={{ fontSize: '42px' }}>A Global Quantitative Powerhouse</h2>
                </div>
                {/* Decorative world map hint */}
                <div style={{ opacity: 0.2 }}>
                    <Globe size={64} />
                </div>
            </div>

            {/* Top Row: Key Pillars */}
            <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
                <ContextCard
                    icon={Users}
                    title="GLOBAL SCALE"
                    value="3,200+ Employees"
                    details="Operating across 14+ global offices including Bala Cynwyd, Dublin, Shanghai, Sydney, and Tokyo."
                    color="var(--color-agent-reasoning-blue)"
                    delay={0.2}
                />
                <ContextCard
                    icon={TrendingUp}
                    title="MARKET PRESENCE"
                    value="2.7B Contracts"
                    details="Options contracts traded annually (2023). A dominant force in global market making and liquidity provision."
                    color="var(--color-agent-extraction-green)"
                    delay={0.4}
                />
                <ContextCard
                    icon={Cpu}
                    title="TECHNOLOGY EDGE"
                    value="Decision Science"
                    details="A culture rooted in game theory and probabilistic thinking ('tech-empowered trading') across 20,000+ servers."
                    color="var(--color-agent-synthesis-purple)"
                    delay={0.6}
                />
            </div>

            {/* Bottom Section: The Problem/Opportunity Statement */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
            >
                <GlassPanel style={{ padding: '32px', display: 'flex', gap: '40px', alignItems: 'center', background: 'rgba(255,255,255,0.03)' }}>
                    <div style={{ flex: 1 }}>
                        <div className="text-matrix-header" style={{ color: 'var(--color-text-secondary)', marginBottom: '12px' }}>THE SCALING CHALLENGE</div>
                        <div style={{ fontSize: '20px', lineHeight: 1.6, fontWeight: 400, color: 'var(--color-text-primary)' }}>
                            "While SIG's operating model is optimized for efficiency, growth is inherently constrained by the <span style={{ color: 'var(--color-agent-reasoning-blue)', fontWeight: 600 }}>speed and scale</span> at which human experts can convert unstructured data into decision-ready insights."
                        </div>
                    </div>
                </GlassPanel>
            </motion.div>

        </SlideContainer>
    );
};
