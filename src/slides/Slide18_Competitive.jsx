import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';

export const Slide18_Competitive = () => {
    return (
        <SlideContainer>
            {/* Header */}
            <div style={{ marginBottom: '40px' }}>
                <div className="text-matrix-header">11 // LANDSCAPE</div>
                <h2 className="text-hero" style={{ fontSize: '48px' }}>Competitive Differentiation</h2>
            </div>

            {/* 3-Column Competitor Comparison */}
            <motion.div
                className="grid-3 stagger-in active"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {/* Legacy Clearinghouse */}
                <GlassPanel style={{ padding: '30px' }}>
                    <span className="pill" style={{ marginBottom: '20px', display: 'inline-block', borderColor: 'var(--color-text-tertiary)', color: 'var(--color-text-tertiary)' }}>LEGACY CLEARINGHOUSE</span>
                    <h3 style={{ color: 'var(--color-text-primary)', marginTop: '15px', marginBottom: '15px', fontSize: '18px' }}>Change Healthcare / Availity</h3>
                    <hr style={{ border: 0, borderBottom: '1px solid var(--color-border-functional)', margin: '15px 0' }} />
                    <div className="u-font-mono" style={{ fontSize: '12px', marginBottom: '10px', color: 'var(--red)' }}>RISK: LOCK-IN & FRAGILITY</div>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                        Batch processing, EDI-only interfaces, months-long onboarding. Payer lists provided in CSV over email, updated monthly at best. Breaking changes cause failed transactions.
                    </p>
                </GlassPanel>

                {/* Point Solutions */}
                <GlassPanel style={{ padding: '30px' }}>
                    <span className="pill" style={{ marginBottom: '20px', display: 'inline-block', borderColor: 'var(--color-text-tertiary)', color: 'var(--color-text-tertiary)' }}>POINT SOLUTIONS</span>
                    <h3 style={{ color: 'var(--color-text-primary)', marginTop: '15px', marginBottom: '15px', fontSize: '18px' }}>Eligible / PVerify</h3>
                    <hr style={{ border: 0, borderBottom: '1px solid var(--color-border-functional)', margin: '15px 0' }} />
                    <div className="u-font-mono" style={{ fontSize: '12px', marginBottom: '10px', color: 'var(--color-agent-citation-orange)' }}>LIMIT: NARROW SCOPE</div>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                        Single transaction type only. No claims, no ERAs. Limited payer coverage. No enrollment automation. No AI integration. No programmatic payer access.
                    </p>
                </GlassPanel>

                {/* Stedi */}
                <GlassPanel style={{ padding: '30px', border: '1px solid var(--color-agent-reasoning-blue)' }}>
                    <span className="pill blue" style={{ marginBottom: '20px', display: 'inline-block' }}>API-FIRST PLATFORM</span>
                    <h3 style={{ color: 'var(--color-agent-reasoning-blue)', marginTop: '15px', marginBottom: '15px', fontSize: '18px' }}>Stedi</h3>
                    <hr style={{ border: 0, borderBottom: '1px solid var(--color-border-functional)', margin: '15px 0' }} />
                    <div className="u-font-mono" style={{ fontSize: '12px', marginBottom: '10px', color: 'var(--color-agent-extraction-green)' }}>ADVANTAGE: COMPLETE & PROGRAMMABLE</div>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                        JSON-native APIs for the full transaction suite. 3,400+ payers. 850+ one-click enrollments. MCP server for AI agents. Live in a day, not months.
                    </p>
                </GlassPanel>
            </motion.div>
        </SlideContainer>
    );
};
