import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { ContextBox } from '../components/ContextBox';
import { motion } from 'framer-motion';

export const Slide4_TheConstraint = () => {
    return (
        <SlideContainer>
            {/* Header */}
            <div style={{ marginBottom: '40px' }}>
                <div className="text-matrix-header">02 // THE PROBLEM</div>
                <h2 className="text-hero" style={{ fontSize: '48px' }}>The Revenue Cycle is Spent Waiting</h2>
            </div>

            {/* Split Layout */}
            <div className="split-30-70" style={{ flex: 1 }}>
                {/* Left Column - Context */}
                <div className="stagger-in active">
                    <ContextBox header="MANUAL WORKFLOWS">
                        Before a patient visit, providers need to know: Does the patient have active insurance? Does the plan cover what they're coming in for? How much will the patient owe? Most of this is still done by phone and fax.
                    </ContextBox>

                    <ContextBox header="HIDDEN COSTS" style={{ marginTop: '30px' }}>
                        When the revenue cycle slows down, the provider's cash flow dries up. Less cash flow means providers have to make tough choices: not hiring needed staff, delaying investments, or cutting back on services.
                    </ContextBox>
                </div>

                {/* Right Column - Chart Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <GlassPanel style={{
                        height: '100%',
                        padding: '40px',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end'
                    }}>
                        {/* Top Label */}
                        <div style={{ position: 'absolute', top: '30px', right: '30px', textAlign: 'right' }}>
                            <div className="big-num" style={{ fontSize: '32px', color: 'var(--red)', margin: 0 }}>UNSUSTAINABLE</div>
                            <div className="u-font-mono" style={{ color: 'var(--color-text-secondary)', fontSize: '12px' }}>Manual RCM vs. Claim Volume</div>
                        </div>

                        {/* CSS Chart visualization */}
                        <div style={{
                            display: 'flex',
                            height: '250px',
                            gap: '40px',
                            alignItems: 'flex-end',
                            borderLeft: '1px solid var(--color-border-functional)',
                            borderBottom: '1px solid var(--color-border-functional)',
                            padding: '20px',
                            position: 'relative'
                        }}>
                            {/* Data Volume Curve (SVG) */}
                            <svg style={{ position: 'absolute', bottom: '20px', left: '50px', width: '80%', height: '200px', overflow: 'visible' }}>
                                <path d="M0,200 C80,190 200,80 400,0" fill="none" stroke="var(--color-border-glass-edge)" strokeWidth="2" strokeDasharray="5,5" />
                                <text x="410" y="10" fill="var(--color-text-tertiary)" fontFamily="var(--font-mono)" fontSize="12">CLAIM VOLUME</text>
                            </svg>

                            {/* Capacity Bars */}
                            {[100, 105, 110, 115].map((height, i) => (
                                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flex: 1 }}>
                                    <div style={{ width: '60px', height: `${height}px`, background: 'var(--color-border-functional)' }} />
                                    {i === 0 && <div className="u-font-mono" style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>Staff Capacity (Manual)</div>}
                                </div>
                            ))}

                            {/* Gap Annotation */}
                            <div style={{ position: 'absolute', top: '30%', left: '50%', color: 'var(--red)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                                ↓ THE REVENUE GAP
                            </div>
                        </div>
                    </GlassPanel>
                </motion.div>
            </div>
        </SlideContainer>
    );
};
