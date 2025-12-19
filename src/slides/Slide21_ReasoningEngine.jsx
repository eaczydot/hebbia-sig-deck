import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { InteractiveImage } from '../components/InteractiveImage';
import { SlideHeader } from '../components/SlideHeader';
import { motion } from 'framer-motion';
import { Brain, Search, GitBranch, Terminal } from 'lucide-react';

import statusQuo from '../assets/status-quo.webp';
import foreverImproving from '../assets/forever-improving.png';

const OrchestrationStep = ({ icon: Icon, title, steps, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
        style={{ flex: 1 }}
    >
        <GlassPanel style={{ height: '100%', padding: '24px', position: 'relative' }}>
            <div style={{ color: 'var(--color-agent-reasoning-blue)', marginBottom: '16px' }}><Icon size={32} /></div>
            <h4 style={{ color: 'white', fontWeight: 600, fontSize: '18px', marginBottom: '16px' }}>{title}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {steps.map((step, i) => (
                    <div key={i} style={{
                        fontSize: '15px',
                        color: 'var(--color-text-secondary)',
                        background: 'rgba(255,255,255,0.03)',
                        padding: '8px 12px',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-mono)'
                    }}>
                        {step}
                    </div>
                ))}
            </div>
        </GlassPanel>
    </motion.div>
);

export const Slide21_ReasoningEngine = () => {
    return (
        <SlideContainer>
            <SlideHeader
                kicker="DEEP DIVE // CORE ENGINE"
                title="Agentic Orchestration"
                subtitle={'Hebbia solves the "RAG Gap" by decomposing complex reasoning into atomic, verifiable logic traces.'}
                subtitleMaxWidth={700}
                subtitleSize={24}
                marginBottom={60}
            />

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', marginBottom: '24px' }}>
                <GlassPanel style={{ padding: '16px' }}>
                    <div className="text-matrix-header" style={{ color: 'var(--color-text-tertiary)' }}>THE STATUS QUO</div>
                    <InteractiveImage
                        src={statusQuo}
                        alt="Status quo RAG gap chart"
                        height={230}
                        hotspots={[
                            { id: 'rag', x: 0.35, y: 0.38, title: 'RAG gap', body: 'Naive retrieval often fails on multi-step questions even when relevant pages exist.' },
                            { id: 'success', x: 0.72, y: 0.60, title: 'Success rate', body: 'The engine must decompose, verify, and cite—rather than answer in one shot.' }
                        ]}
                    />
                </GlassPanel>
                <GlassPanel style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div className="text-matrix-header" style={{ color: 'var(--color-text-tertiary)' }}>ITERATIVE DECOMPOSITION</div>
                    <InteractiveImage
                        src={foreverImproving}
                        alt="Iterative question answering diagram"
                        height={230}
                        hotspots={[
                            { id: 'loop', x: 0.48, y: 0.52, title: 'Decompose → verify → refine', body: 'Hebbia tightens the loop until the answer is fully grounded in sources.' },
                            { id: 'improve', x: 0.78, y: 0.35, title: 'Quality improves', body: 'Each iteration adds structure and checks consistency before synthesis.' }
                        ]}
                    />
                </GlassPanel>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'stretch' }}>
                <OrchestrationStep
                    icon={Brain}
                    title="1. Intent Parsing"
                    steps={[
                        "Query: Calculate EBITDA leverage",
                        "Step A: Define EBITDA formula",
                        "Step B: Map GAAP to non-GAAP",
                        "Step C: Identify period end dates"
                    ]}
                    delay={0.2}
                />
                <OrchestrationStep
                    icon={Search}
                    title="2. Context Retrieval"
                    steps={[
                        "Semantic search across 10M+ pgs",
                        "Hybrid keyword-vector ranking",
                        "Structural metadata extraction",
                        "OCR for scanned/handwritten notes"
                    ]}
                    delay={0.4}
                />
                <OrchestrationStep
                    icon={GitBranch}
                    title="3. Logic Branching"
                    steps={[
                        "Parallel execution of sub-queries",
                        "Validation against 10-K footnotes",
                        "Cross-doc conflict resolution",
                        "Verification of logic consistency"
                    ]}
                    delay={0.6}
                />
                <OrchestrationStep
                    icon={Terminal}
                    title="4. Synthesis"
                    steps={[
                        "Aggregating into Matrix rows",
                        "Generating traceable citations",
                        "Final LLM reasoning check",
                        "API delivery to SIG terminal"
                    ]}
                    delay={0.8}
                />
            </div>

            {/* Logical Flow Viz */}
            <div style={{ marginTop: 'auto', textAlign: 'center', opacity: 0.5 }}>
                <div className="text-mono-data" style={{ fontSize: '13px' }}>LOGICAL TRACE: ID_8523F326 • DURATION: 12.4s • CONFIDENCE: 98.4%</div>
            </div>
        </SlideContainer>
    );
};
