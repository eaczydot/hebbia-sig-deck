import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { FileText, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Slide4_TheConstraint = () => {
    return (
        <SlideContainer>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', height: '100%' }}>

                {/* Visual Side (Left) - "The Flood" */}
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    {/* Background noise/chaos effect */}
                    <div style={{
                        position: 'absolute',
                        inset: '-20px',
                        background: 'radial-gradient(circle, rgba(239, 68, 68, 0.1), transparent 70%)',
                        zIndex: 0
                    }} />

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'relative', zIndex: 1 }}
                    >
                        <h2 className="text-hero" style={{ fontSize: '48px', marginBottom: '24px' }}>
                            The Unstructured <br />Data Trap
                        </h2>
                        <p className="text-subhero" style={{ maxWidth: '90%' }}>
                            High-value information is trapped in documents that resist automation. Analysts spend valuable hours on low-leverage extraction rather than high-leverage synthesis.
                        </p>
                    </motion.div>

                    {/* Stack of Documents Visual */}
                    <div style={{ marginTop: '40px', position: 'relative', height: '200px' }}>
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20, rotate: 0 }}
                                animate={{ opacity: 1, y: 0, rotate: (i - 1) * 5 }}
                                transition={{ delay: 0.5 + i * 0.2 }}
                                style={{
                                    position: 'absolute',
                                    top: i * 10,
                                    left: i * 20,
                                    width: '240px',
                                    height: '160px',
                                    background: 'linear-gradient(135deg, #1e293b, #0f172a)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'rgba(255,255,255,0.2)'
                                }}
                            >
                                <FileText size={48} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Data Side (Right) - "The Cost" */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                        <GlassPanel style={{ padding: '24px', borderLeft: '3px solid #EF4444' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                <Clock className="text-red-400" size={20} />
                                <div className="text-matrix-header" style={{ color: '#FCA5A5', margin: 0 }}>LATENCY</div>
                            </div>
                            <div style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>20-40 Hours / Deal</div>
                            <div className="text-cell-data">Time spent manually reviewing credit agreements, indentures, and offering memos for a single transaction.</div>
                        </GlassPanel>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                        <GlassPanel style={{ padding: '24px', borderLeft: '3px solid #F59E0B' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                <AlertCircle className="text-amber-400" size={20} />
                                <div className="text-matrix-header" style={{ color: '#FCD34D', margin: 0 }}>OPPORTUNITY COST</div>
                            </div>
                            <div style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>Missed Alpha</div>
                            <div className="text-cell-data">Every hour spent extracting terms is an hour NOT spent analyzing market nuance, risk modeling, or sourcing new deals.</div>
                        </GlassPanel>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                        <GlassPanel style={{ padding: '24px', borderLeft: '3px solid #64748B' }}>
                            <div className="text-matrix-header" style={{ color: '#94A3B8', margin: 0, marginBottom: '12px' }}>VOLUME CONSTRAINT</div>
                            <div style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>Coverage Limitations</div>
                            <div className="text-cell-data">Teams are forced to sample documents or limit the universe of securities they cover due to linear headcount constraints.</div>
                        </GlassPanel>
                    </motion.div>
                </div>

            </div>
        </SlideContainer>
    );
};
