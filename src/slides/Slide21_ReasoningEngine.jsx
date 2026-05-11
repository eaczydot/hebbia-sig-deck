import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';
import { Shield, Search, GitBranch, Terminal } from 'lucide-react';

const OrchestrationStep = ({ icon: Icon, title, steps, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
        style={{ flex: 1 }}
    >
        <GlassPanel style={{ height: '100%', padding: '24px', position: 'relative' }}>
            <div style={{ color: 'var(--color-agent-reasoning-blue)', marginBottom: '16px' }}><Icon size={32} /></div>
            <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '18px', marginBottom: '16px' }}>{title}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {steps.map((step, i) => (
                    <div key={i} style={{
                        fontSize: '12px',
                        color: 'var(--color-text-secondary)',
                        background: 'color-mix(in srgb, var(--color-text-primary) 3%, transparent)',
                        padding: '8px 12px',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-mono)'
                    }}>
                        {step}
                    </div>
                ))}
            </div>
        </GlassPanel>
    </motion.div>
);

export const Slide21_ReasoningEngine = () => {
    return (
        <SlideContainer>
            <div style={{ marginBottom: '60px' }}>
                <div className="text-matrix-header">08 // PAYER NETWORK</div>
                <h2 className="text-hero" style={{ fontSize: '48px', marginBottom: '16px' }}>Connect to 3,400+ Medical and Dental Payers</h2>
                <p className="text-subhero" style={{ maxWidth: '700px', fontSize: '20px' }}>
                    The broadest coverage of any clearinghouse. Onboard in a day. Start transacting in minutes.
                </p>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'stretch' }}>
                <OrchestrationStep
                    icon={Shield}
                    title="Government & Commercial"
                    steps={[
                        "Connect to Medicare",
                        "State Medicaid programs",
                        "Every major commercial payer",
                        "Medical and dental payers"
                    ]}
                    delay={0.2}
                />
                <OrchestrationStep
                    icon={Search}
                    title="Programmatic Discovery"
                    steps={[
                        "Search by payer name or ID",
                        "Search Payers API",
                        "Payer Network site",
                        "Stable records, unified aliases"
                    ]}
                    delay={0.4}
                />
                <OrchestrationStep
                    icon={GitBranch}
                    title="Fast, Reliable Routing"
                    steps={[
                        "Redundant payer routes",
                        "Automatic failover",
                        "Upstream outage resilience",
                        "Sub-second response times"
                    ]}
                    delay={0.6}
                />
                <OrchestrationStep
                    icon={Terminal}
                    title="Broad Transaction Support"
                    steps={[
                        "837P, 837I, 837D claims",
                        "270/271 eligibility",
                        "276/277 claim status",
                        "835 ERAs, 275 attachments"
                    ]}
                    delay={0.8}
                />
            </div>

            {/* Network Stats */}
            <div style={{ marginTop: 'auto', textAlign: 'center', opacity: 0.5 }}>
                <div className="text-mono-data" style={{ fontSize: '10px' }}>NETWORK: 3,400+ PAYERS • ELIGIBILITY: 1,100+ • CLAIMS: 2,700+ • ERAs: 1,800+</div>
            </div>
        </SlideContainer>
    );
};
