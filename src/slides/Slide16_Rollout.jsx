import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Zap, Users } from 'lucide-react';

const PhaseItem = ({ title, items, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.6 }}
        style={{ flex: 1 }}
    >
        <GlassPanel style={{ height: '100%', padding: '24px', borderTop: `2px solid ${color}` }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'white', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color }}></div>
                {title}
            </h3>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                {items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '8px', marginBottom: '14px', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#333', marginTop: '6px' }} />
                        {item}
                    </li>
                ))}
            </ul>
        </GlassPanel>
    </motion.div>
);

export const Slide16_Rollout = () => {
    return (
        <SlideContainer>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <div className="text-matrix-header" style={{ justifyContent: 'center' }}>STRATEGIC ROADMAP</div>
                <h2 className="text-hero" style={{ fontSize: '48px' }}>Phased Enterprise Rollout</h2>
                <p className="text-subhero" style={{ maxWidth: '600px', margin: '24px auto' }}>
                    Ensuring adoption, compliance, and institutional memory across global desks.
                </p>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'stretch', flex: 1, marginBottom: '60px' }}>
                <PhaseItem
                    title="Phase 1: Pilot Core"
                    color="var(--color-agent-reasoning-blue)"
                    delay={0.2}
                    items={[
                        "Initial 10-15 users in Credit & Quant",
                        "Focused on specific deal/backtest workflows",
                        "Weekly feedback loops with Hebbia Eng",
                        "Security/Compliance final sign-off"
                    ]}
                />
                <PhaseItem
                    title="Phase 2: SIG US Scale"
                    color="var(--color-agent-extraction-green)"
                    delay={0.4}
                    items={[
                        "Expand to Equities, Options, and Trading",
                        "Integration with SIG Internal Data APIs",
                        "Custom training for specific deal desk needs",
                        "Co-development of SIG-specific 'Agents'"
                    ]}
                />
                <PhaseItem
                    title="Phase 3: Global Rollout"
                    color="var(--color-agent-synthesis-purple)"
                    delay={0.6}
                    items={[
                        "Deploy to Dublin, Shanghai, Sydney offices",
                        "Multi-region data tenancy (GDPR compliant)",
                        "Enterprise-wide API for internal apps",
                        "institutional knowledge graph completion"
                    ]}
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Users size={20} color="var(--color-text-secondary)" />
                    <div style={{ fontSize: '13px', fontWeight: 600 }}>Training & Onboarding Included</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ShieldCheck size={20} color="var(--color-text-secondary)" />
                    <div style={{ fontSize: '13px', fontWeight: 600 }}>Dedicated Solution Architects</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Zap size={20} color="var(--color-text-secondary)" />
                    <div style={{ fontSize: '13px', fontWeight: 600 }}>24/7 Enterprise Support</div>
                </div>
            </div>
        </SlideContainer>
    );
};
