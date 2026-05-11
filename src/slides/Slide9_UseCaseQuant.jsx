import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';

export const Slide9_UseCaseQuant = () => {
    const cards = [
        {
            title: 'PAYER INTELLIGENCE',
            color: 'var(--color-agent-reasoning-blue)',
            body: 'Instead of a static payer list, we built the world\'s most developer-friendly payer database: the Stedi Payer Network. Get up-to-date payer lists programmatically. Use the Search Payers API to search by name or payer ID. No stale CSVs. No manual mapping.',
            delay: 0.2
        },
        {
            title: 'STEDI AGENT',
            color: 'var(--color-agent-extraction-green)',
            body: 'The Stedi MCP server gives your AI agents plug-and-play access to Stedi. Connect your agents without having to write integration code or copy documentation. Compatible with Claude, GPT, and other LLM platforms.',
            delay: 0.4
        },
        {
            title: 'TRANSACTION ENROLLMENT',
            color: 'var(--color-agent-synthesis-purple)',
            body: 'Stedi automates transaction enrollment requests. For the 850+ payers that support one-click transaction enrollment, that\'s it — you\'re done. For the rest, we have delegated signature authority. We complete most enrollment requests in 1-2 business days.',
            delay: 0.6
        }
    ];

    return (
        <SlideContainer>
            {/* Header */}
            <div style={{ marginBottom: '40px' }}>
                <div className="text-matrix-header">07 // INTELLIGENCE</div>
                <h2 className="text-hero" style={{ fontSize: '48px' }}>Engineered for AI</h2>
            </div>

            {/* 3-column Grid */}
            <motion.div
                className="grid-3"
                style={{ flex: 1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: card.delay, duration: 0.6 }}
                    >
                        <GlassPanel style={{
                            height: '100%',
                            padding: '30px',
                            borderTop: `2px solid ${card.color}`,
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div className="text-matrix-header" style={{ color: card.color, marginBottom: '16px' }}>
                                {card.title}
                            </div>
                            <p style={{
                                fontSize: '14px',
                                color: 'var(--color-text-secondary)',
                                lineHeight: 1.7,
                                flex: 1
                            }}>
                                {card.body}
                            </p>
                        </GlassPanel>
                    </motion.div>
                ))}
            </motion.div>
        </SlideContainer>
    );
};
