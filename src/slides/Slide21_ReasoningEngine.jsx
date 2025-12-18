import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';
import { Brain, Search, GitBranch, Terminal } from 'lucide-react';

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
                        fontSize: '12px',
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
            <div style={{ marginBottom: '60px' }}>
                <div className="text-matrix-header">DEEP DIVE // CORE AI</div>
                <h2 className="text-hero" style={{ fontSize: '48px' }}>Agentic Orchestration</h2>
                <p className="text-subhero" style={{ maxWidth: '600px' }}>
                    How Hebbia solves what generic RAG systems cannot: Complex, multi-document logic.
                </p>
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
                <div className="text-mono-data" style={{ fontSize: '10px' }}>LOGICAL TRACE: ID_8523F326 • DURATION: 12.4s • CONFIDENCE: 98.4%</div>
            </div>
        </SlideContainer>
    );
};
