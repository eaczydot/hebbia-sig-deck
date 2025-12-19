import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { InteractiveImage } from '../components/InteractiveImage';
import { motion } from 'framer-motion';
import { SlideHeader } from '../components/SlideHeader';

import fullBleed from '../assets/full-bleed-desktop-project-alpha.webp';
import appScreenshot from '../assets/app-screenshot.png';
import marketAnalysis from '../assets/market-analysis.webp';
import creditAgreements from '../assets/credit-aggrements.webp';
import icMemos from '../assets/IC-memos.webp';

const DemoCard = ({ src, title, description, delay, hotspots = [] }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
        style={{ height: '100%' }}
    >
        <GlassPanel style={{ padding: '18px', height: '100%', gap: '12px' }}>
            <div className="text-matrix-header" style={{ color: 'var(--color-text-tertiary)' }}>{title}</div>
            {description ? (
                <div style={{ fontSize: 16, lineHeight: 1.5, color: 'var(--color-text-secondary)' }}>
                    {description}
                </div>
            ) : null}
            <InteractiveImage
                src={src}
                alt={title}
                height={220}
                borderRadius={4}
                border="1px solid var(--color-border-functional)"
                hotspots={hotspots}
                style={{ background: 'rgba(0,0,0,0.35)' }}
            />
        </GlassPanel>
    </motion.div>
);

export const Slide23_ProductDemos = () => {
    return (
        <SlideContainer>
            <SlideHeader
                kicker="PRODUCT WALKTHROUGHS"
                title="Supplemental Product Demos"
                subtitle="Interactive snapshots showing how Matrix workflows look in practice (prompting, table outputs, and auditability)."
            />

            <GlassPanel style={{ padding: '14px', marginBottom: '20px' }}>
                <div className="text-matrix-header" style={{ color: 'var(--color-text-tertiary)' }}>PRODUCT CONTEXT</div>
                <InteractiveImage
                    src={fullBleed}
                    alt="Full bleed product screenshot"
                    height={210}
                    hotspots={[
                        { id: 'matrix', x: 0.46, y: 0.55, title: 'Matrix workspace', body: 'The table is the working surface—prompting, extraction, and synthesis all land here.' },
                        { id: 'citations', x: 0.82, y: 0.48, title: 'Citations', body: 'Outputs stay verifiable through citation trails back to source documents.' }
                    ]}
                />
            </GlassPanel>

            <div className="grid-2x2" style={{ flex: 1 }}>
                <DemoCard
                    src={appScreenshot}
                    title="Demo 1: Workspace + Agent"
                    description="Prompting and agent activity land directly in the working table."
                    delay={0.2}
                />
                <DemoCard
                    src={marketAnalysis}
                    title="Demo 2: Column Extension"
                    description="Extend the dataset with new computed fields via natural language."
                    delay={0.3}
                />
                <DemoCard
                    src={creditAgreements}
                    title="Demo 3: Document Reasoning"
                    description="Traceable answers grounded in underlying legal language."
                    delay={0.4}
                />
                <DemoCard
                    src={icMemos}
                    title="Demo 4: Export + Review"
                    description="Outputs packaged for review and downstream workflows."
                    delay={0.5}
                />
            </div>
        </SlideContainer>
    );
};
