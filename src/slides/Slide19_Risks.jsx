import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';

const RiskItem = ({ risk, mitigation, monogram, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.6 }}
    >
        <GlassPanel style={{ padding: '24px', display: 'grid', gridTemplateColumns: '80px 1fr 1.2fr', gap: '24px', alignItems: 'center' }}>
            <div style={{ background: 'color-mix(in srgb, var(--color-text-primary) 3%, transparent)', padding: '16px', borderRadius: '12px', display: 'flex', justifyContent: 'center', color: 'var(--color-text-tertiary)' }}>
                <span className="text-mono-sm" style={{ fontWeight: 700 }}>{monogram}</span>
            </div>
            <div>
                <div className="text-matrix-header" style={{ color: 'var(--red)', marginBottom: '8px' }}>POTENTIAL RISK</div>
                <div className="text-body-lg" style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>{risk}</div>
            </div>
            <div style={{ borderLeft: '1px solid var(--color-border-functional)', paddingLeft: '24px' }}>
                <div className="text-matrix-header" style={{ color: 'var(--color-agent-extraction-green)', marginBottom: '8px' }}>HEBBIA MITIGATION</div>
                <div className="text-body-sm">{mitigation}</div>
            </div>
        </GlassPanel>
    </motion.div>
);

export const Slide19_Risks = () => {
    return (
        <SlideContainer>
            <div style={{ marginBottom: '60px' }}>
                <div className="text-matrix-header" style={{ color: 'var(--red)' }}>RISK GATING</div>
                <h2 className="text-title">Addressing the Core Concerns</h2>
                <p className="text-subhero" style={{ maxWidth: '600px' }}>
                    Institutional-grade controls for the most sensitive data environments.
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <RiskItem
                    monogram="IP"
                    risk="IP & Model Poisoning"
                    mitigation="Strict zero-retention policy. Hubbia never trains on customer data. All prompts and data are ephemeral within your session."
                    delay={0.2}
                />
                <RiskItem
                    monogram="HL"
                    risk="Hallucinations"
                    mitigation="Citation-first architecture. Any claim without a verifiable source is flagged. Users must click to verify the source text."
                    delay={0.3}
                />
                <RiskItem
                    monogram="DR"
                    risk="Data Residency"
                    mitigation="Regional data isolation. SIG data stays within your preferred Azure/AWS region. No cross-border data flows."
                    delay={0.4}
                />
                <RiskItem
                    monogram="MN"
                    risk="MNPI / Insider Data"
                    mitigation="Role-based access control (RBAC) synced with SIG's Active Directory. Granular folder-level permissions enforced."
                    delay={0.5}
                />
            </div>

            {/* Bottom Summary */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--color-agent-extraction-green)', background: 'color-mix(in srgb, var(--color-agent-extraction-green) 5%, transparent)', padding: '12px 24px', borderRadius: '99px', border: '1px solid color-mix(in srgb, var(--color-agent-extraction-green) 20%, transparent)' }}>
                    <span className="text-mono-sm" style={{ color: 'var(--color-agent-extraction-green)' }}>✓</span>
                    <span className="text-body-sm" style={{ fontWeight: 700, letterSpacing: '0.05em' }}>CERTIFIED FOR USE IN HIGHLY REGULATED FINANCIAL ENVIRONMENTS</span>
                </div>
            </motion.div>
        </SlideContainer>
    );
};
