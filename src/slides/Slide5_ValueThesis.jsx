import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';

const Layer = ({ title, subtext, color, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.2 * index, duration: 0.8 }}
        style={{
            position: 'absolute',
            bottom: `${index * 80}px`,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '140px',
            zIndex: index, // Higher layers on top
        }}
    >
        <GlassPanel style={{
            height: '100%',
            padding: '24px',
            background: `linear-gradient(180deg, ${color}15 0%, rgba(0,0,0,0.4) 100%)`,
            border: `1px solid ${color}40`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
            boxShadow: `0 -10px 40px -10px ${color}20` // Uplight effect
        }}>
            <div style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: color,
                marginBottom: '8px',
                textTransform: 'uppercase'
            }}>
                {title}
            </div>
            <div style={{ fontSize: '18px', color: 'white', fontWeight: 600 }}>{subtext}</div>
        </GlassPanel>
    </motion.div>
);

export const Slide5_ValueThesis = () => {
    return (
        <SlideContainer>
            <div style={{ textAlign: 'center', marginBottom: '400px', zIndex: 10, position: 'relative' }}>
                <div className="text-matrix-header" style={{ justifyContent: 'center' }}>OUR SOLUTION</div>
                <h2 className="text-hero" style={{ fontSize: '48px' }}>
                    The Agentic Reasoning Stack
                </h2>
                <p className="text-subhero" style={{ maxWidth: '600px', margin: '24px auto' }}>
                    Moving beyond simple extraction to complete intellectual workflows.
                </p>
            </div>

            {/* The Stack Visualization */}
            <div style={{
                position: 'absolute',
                bottom: '40px',
                left: 0,
                right: 0,
                height: '500px',
                display: 'flex',
                justifyContent: 'center',
                perspective: '1000px'
            }}>
                {/* Layer 1: Data (Base) */}
                <Layer
                    index={0}
                    title="1. Universal Ingestion"
                    subtext="Any File Type, Any Source (SharePoint, Exchange, S3)"
                    color="#64748B"
                />

                {/* Layer 2: Extraction */}
                <Layer
                    index={1}
                    title="2. Intelligent Extraction"
                    subtext="Identify Terms, Clauses, & Data Points"
                    color="var(--color-agent-extraction-green)"
                />

                {/* Layer 3: Reasoning (Core) */}
                <Layer
                    index={2}
                    title="3. Agentic Reasoning"
                    subtext="Synthesize, Compare, & Validate Logic across Documents"
                    color="var(--color-agent-reasoning-blue)"
                />

                {/* Layer 4: Output (Top) */}
                <Layer
                    index={3}
                    title="4. Decision-Ready Output"
                    subtext="Structured Memos, Excel Models, & Audit Trails"
                    color="var(--color-agent-synthesis-purple)"
                />
            </div>

            {/* Background Glow for Stack */}
            <div style={{
                position: 'absolute',
                bottom: '-200px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '800px',
                height: '600px',
                background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15), transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />
        </SlideContainer>
    );
};
