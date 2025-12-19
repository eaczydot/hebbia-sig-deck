import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { motion } from 'framer-motion';

export const Slide2_ExecutiveSummary = () => {
    return (
        <SlideContainer>
            {/* Header */}
            <div style={{ marginBottom: '40px' }}>
                <div className="text-matrix-header">01 // EXECUTIVE SUMMARY</div>
                <h2 className="text-title">Unlocking Capacity, Accelerating Conviction</h2>
            </div>

            {/* 2x2 Grid */}
            <motion.div
                className="grid-2x2 stagger-in active"
                style={{ flex: 1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {/* Box 1: Problem */}
                <GlassPanel style={{ padding: '30px' }}>
                    <div className="text-matrix-header" style={{ color: 'var(--red)' }}>THE CONSTRAINT</div>
                    <div className="text-subtitle" style={{ marginBottom: '10px' }}>Decision Latency</div>
                    <p className="text-body">
                        SIG's core challenge is not data access, but the latency in converting vast unstructured data into decision-ready insight. Manual review creates a linear ceiling on growth.
                    </p>
                </GlassPanel>

                {/* Box 2: Solution */}
                <GlassPanel style={{ padding: '30px' }}>
                    <div className="text-matrix-header" style={{ color: 'var(--color-agent-reasoning-blue)' }}>THE SOLUTION</div>
                    <div className="text-subtitle" style={{ marginBottom: '10px' }}>Reasoning Engine</div>
                    <p className="text-body">
                        Hebbia transforms document workflows into a scalable reasoning engine. We automate data extraction and synthesis to increase throughput.
                    </p>
                </GlassPanel>

                {/* Box 3: Value */}
                <GlassPanel style={{ padding: '30px' }}>
                    <div className="text-matrix-header" style={{ color: 'var(--color-agent-extraction-green)' }}>PROJECTED VALUE</div>
                    <div className="text-subtitle" style={{ marginBottom: '10px' }}>&gt;3x ROI & Leverage</div>
                    <p className="text-body">
                        By compressing research cycle times by 30-50%, we unlock thousands of expert hours annually for higher-value strategy.
                    </p>
                </GlassPanel>

                {/* Box 4: Plan */}
                <GlassPanel style={{ padding: '30px' }}>
                    <div className="text-matrix-header" style={{ color: 'var(--color-agent-synthesis-purple)' }}>NEXT STEPS</div>
                    <div className="text-subtitle" style={{ marginBottom: '10px' }}>6-Week Pilot</div>
                    <p className="text-body">
                        A low-risk, high-impact pilot targeting 1-2 workflows (Quant/Legal) to validate efficiency gains and auditability.
                    </p>
                </GlassPanel>
            </motion.div>
        </SlideContainer>
    );
};
