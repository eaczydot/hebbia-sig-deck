import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { ArrowRight } from 'lucide-react';

const Step = ({ number, title, text }) => (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{
            fontSize: '48px',
            fontWeight: 700,
            color: 'rgba(255, 255, 255, 0.1)',
            lineHeight: 1,
            marginBottom: '16px'
        }}>
            {number}
        </div>
        <div style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-agent-reasoning-blue)', marginBottom: '8px' }}>
            {title}
        </div>
        <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            {text}
        </div>
    </div>
);

export const Slide20_Conclusion = () => {
    return (
        <SlideContainer className="u-flex-center">
            <div style={{ width: '100%', maxWidth: '900px' }}>
                <h2 className="text-hero" style={{ textAlign: 'center', marginBottom: '24px' }}>
                    Next Steps
                </h2>
                <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '700px', margin: '0 auto 60px auto', lineHeight: 1.6 }}>
                    Let's build the future of quantitative reasoning, together. We propose a collaborative path to validate value:
                </p>

                <GlassPanel style={{ padding: '40px', display: 'flex', gap: '40px', position: 'relative' }}>
                    <Step
                        number="01"
                        title="Deep-Dive Demo"
                        text="90-minute interactive session with key stakeholders (Trading, Quant, Risk) to demonstrate Use Cases on live data."
                    />
                    <div style={{ width: '1px', background: 'var(--color-border-subtle)' }}></div>
                    <Step
                        number="02"
                        title="Co-Design Pilot"
                        text="Half-day workshop to define scope, users, and success metrics for the 6-8 week pilot program."
                    />
                    <div style={{ width: '1px', background: 'var(--color-border-subtle)' }}></div>
                    <Step
                        number="03"
                        title="Procurement"
                        text="Review SOC 2 reports, Security Architecture, and MSA/DPA to clear legal & compliance."
                    />
                </GlassPanel>

                <div style={{ marginTop: '60px', textAlign: 'center' }}>
                    <div className="text-matrix-header" style={{ marginBottom: '16px' }}>CONTACT</div>
                    <div style={{ fontSize: '16px', color: 'white' }}>Head of Strategic Accounts, Financial Services</div>
                    <div style={{ fontSize: '16px', color: 'var(--color-agent-reasoning-blue)', marginTop: '4px' }}>strategic.accounts@hebbia.ai</div>
                </div>
            </div>
        </SlideContainer>
    );
};
