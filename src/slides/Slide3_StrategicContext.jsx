import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { ContextBox } from '../components/ContextBox';
import { Globe, Users, TrendingUp, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export const Slide3_StrategicContext = () => {
    return (
        <SlideContainer>
            {/* Header */}
            <div style={{ marginBottom: '40px' }}>
                <div className="text-matrix-header">03 // STRATEGIC CONTEXT</div>
                <h2 className="text-hero" style={{ fontSize: '48px' }}>Why Legacy Clearinghouses Fail</h2>
            </div>

            {/* Split Layout */}
            <div className="split-30-70" style={{ flex: 1 }}>
                {/* Left Column - Context */}
                <div className="stagger-in active">
                    <ContextBox header="BLACK BOX ARCHITECTURE">
                        This vital information is typically provided in a CSV file over email and updated monthly at best. Updated payer lists often contain breaking changes, duplicate payer names, and typos that cause failed transactions and endless code rewrites.
                    </ContextBox>

                    <ContextBox header="INTEGRATION PAIN" style={{ marginTop: '30px' }}>
                        <div className="u-font-mono" style={{ fontSize: '14px', marginBottom: '5px' }}>&gt; Months of onboarding</div>
                        <div className="u-font-mono" style={{ fontSize: '14px', marginBottom: '5px' }}>&gt; Batch-only processing</div>
                        <div className="u-font-mono" style={{ fontSize: '14px', marginBottom: '5px' }}>&gt; Stale CSVs, manual mapping</div>
                        <div className="u-font-mono" style={{ fontSize: '14px' }}>&gt; No programmatic payer access</div>
                    </ContextBox>
                </div>

                {/* Right Column - Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <GlassPanel style={{
                        height: '100%',
                        padding: '40px',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        {/* Abstract Network Nodes */}
                        <div style={{ position: 'absolute', top: '30%', left: '20%', width: '8px', height: '8px', background: 'var(--color-text-primary)', boxShadow: '0 0 15px var(--color-text-primary)' }} />
                        <div style={{ position: 'absolute', top: '28%', left: '45%', width: '6px', height: '6px', background: 'var(--color-brand-cobalt)' }} />
                        <div style={{ position: 'absolute', top: '35%', left: '75%', width: '6px', height: '6px', background: 'var(--color-brand-cobalt)' }} />
                        <div style={{ position: 'absolute', top: '60%', left: '85%', width: '6px', height: '6px', background: 'var(--color-brand-cobalt)' }} />

                        <div className="u-font-mono" style={{ fontSize: '12px', color: 'var(--color-text-tertiary)', marginTop: 'auto' }}>
                            LEGACY SYSTEMS: EHR → Clearinghouse → Payer → Provider (fragile, opaque, slow)
                        </div>

                        <div style={{ marginTop: '20px', borderTop: '1px solid var(--color-border-functional)', paddingTop: '20px' }}>
                            <div className="text-matrix-header" style={{ color: 'var(--color-text-secondary)' }}>THE COST</div>
                            <div style={{ fontSize: '20px', color: 'var(--color-text-primary)', lineHeight: 1.4 }}>
                                "Automating parts of the cycle can cut 10-20 days off the typical 30-60 day revenue cycle."
                            </div>
                        </div>
                    </GlassPanel>
                </motion.div>
            </div>
        </SlideContainer>
    );
};
