import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, Calendar, Users } from 'lucide-react';

export const Slide20_Conclusion = () => {
    return (
        <SlideContainer className="u-flex-center">
            <div style={{ maxWidth: '900px', width: '100%', position: 'relative' }}>

                {/* Hero Ending */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-hero" style={{ fontSize: '72px', lineHeight: 1 }}>
                            The Future of <br /> Financial Reasoning IS HEBBIA.
                        </h2>
                        <p className="text-subhero" style={{ marginTop: '32px', maxWidth: '600px', margin: '32px auto' }}>
                            Join the world's most sophisticated investment teams in decoupling growth from headcount.
                        </p>
                    </motion.div>
                </div>

                {/* Next Steps Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '80px' }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <GlassPanel style={{ padding: '32px', textAlign: 'center', borderTop: '2px solid var(--color-agent-reasoning-blue)' }}>
                            <div style={{ color: 'var(--color-agent-reasoning-blue)', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                                <Calendar size={32} />
                            </div>
                            <h4 style={{ color: 'white', fontWeight: 600, fontSize: '18px', marginBottom: '8px' }}>Schedule Deep-Dive</h4>
                            <p className="text-cell-data" style={{ fontSize: '13px' }}>A technical session for SIG's engineering and security leads.</p>
                        </GlassPanel>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                        <GlassPanel style={{ padding: '32px', textAlign: 'center', borderTop: '2px solid var(--color-agent-extraction-green)' }}>
                            <div style={{ color: 'var(--color-agent-extraction-green)', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                                <ArrowRight size={32} />
                            </div>
                            <h4 style={{ color: 'white', fontWeight: 600, fontSize: '18px', marginBottom: '8px' }}>Start Pilot Design</h4>
                            <p className="text-cell-data" style={{ fontSize: '13px' }}>Identify the 10 users and 3 use cases for the 8-week POV.</p>
                        </GlassPanel>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                        <GlassPanel style={{ padding: '32px', textAlign: 'center', borderTop: '2px solid var(--color-agent-synthesis-purple)' }}>
                            <div style={{ color: 'var(--color-agent-synthesis-purple)', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                                <Users size={32} />
                            </div>
                            <h4 style={{ color: 'white', fontWeight: 600, fontSize: '18px', marginBottom: '8px' }}>Executive Briefing</h4>
                            <p className="text-cell-data" style={{ fontSize: '13px' }}>Review ROI projections and strategic roadmap with SIG leadership.</p>
                        </GlassPanel>
                    </motion.div>
                </div>

                {/* Footer / Contact */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Mail size={16} color="var(--color-text-secondary)" />
                        <span style={{ fontSize: '14px', fontFamily: 'var(--font-mono)' }}>strategy@hebbia.ai</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Phone size={16} color="var(--color-text-secondary)" />
                        <span style={{ fontSize: '14px', fontFamily: 'var(--font-mono)' }}>+1 (212) 555-0198</span>
                    </div>
                </div>

                {/* Background Glow */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '600px', background: 'radial-gradient(circle, rgba(70, 91, 255, 0.1), transparent 70%)', zIndex: -1, pointerEvents: 'none' }} />
            </div>
        </SlideContainer>
    );
};
