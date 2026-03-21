import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';

export const Slide11_ValueCapacity = () => {
    const testimonials = [
        {
            quote: "Stedi didn't just give us better APIs. They gave us the support to scale, automate, and build a better product.",
            author: "Nolan Chase",
            title: "Co-founder of Berry Street",
            delay: 0.2
        },
        {
            quote: "I'm really impressed with Stedi's eligibility checks. Data comes back consistently and accurately. It's by far the best eligibility product I've come across.",
            author: "Eliana Berger",
            title: "CEO at Joyful Health",
            delay: 0.4
        },
        {
            quote: "The speed at which we got up and running in production with Stedi was remarkable. From the moment we began integration, it was clear that Stedi was designed with user ease and efficiency in mind.",
            author: "Chris Parker",
            title: "CTO, PQT Health",
            delay: 0.6
        }
    ];

    return (
        <SlideContainer>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <div className="text-matrix-header" style={{ justifyContent: 'center', color: 'var(--color-agent-reasoning-blue)' }}>09 // CUSTOMERS</div>
                <h2 className="text-hero" style={{ fontSize: '48px' }}>
                    Trusted by Modern Healthcare Companies
                </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px', alignItems: 'stretch' }}>
                {/* Testimonials */}
                <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: t.delay, duration: 0.6 }}
                        >
                            <GlassPanel style={{ padding: '24px' }}>
                                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '12px' }}>
                                    "{t.quote}"
                                </p>
                                <div style={{ fontSize: '13px' }}>
                                    <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>{t.author}</span>
                                    <span style={{ color: 'var(--color-text-tertiary)' }}> — {t.title}</span>
                                </div>
                            </GlassPanel>
                        </motion.div>
                    ))}
                </div>

                {/* Metrics */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <GlassPanel style={{ padding: '24px', height: '100%', borderTop: '2px solid var(--color-agent-reasoning-blue)' }}>
                            <div style={{ fontSize: '16px', color: 'var(--color-agent-reasoning-blue)', fontWeight: 600, marginBottom: '16px' }}>CUSTOMERS</div>
                            <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                                Adonis<br />Berry Street<br />Candid Health<br />Lumary<br />Nirvana<br />Pair Team<br />PQT Health<br />Ritten<br />Tennr
                            </div>
                        </GlassPanel>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <GlassPanel style={{ padding: '24px', height: '100%' }}>
                            <div style={{ fontSize: '48px', fontWeight: 600, color: 'var(--color-text-primary)' }}>&lt; 8 min</div>
                            <div style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 600, marginBottom: '8px' }}>Avg Support Response</div>
                            <p className="text-cell-data">Dedicated Slack or Teams channel for every customer.</p>
                        </GlassPanel>
                    </motion.div>
                </div>
            </div>
        </SlideContainer>
    );
};
