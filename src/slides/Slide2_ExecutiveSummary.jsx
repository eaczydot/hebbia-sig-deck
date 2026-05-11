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
                <h2 className="text-hero" style={{ fontSize: '48px' }}>Modern Infrastructure for Healthcare Transactions</h2>
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
                    <div className="text-matrix-header" style={{ color: 'var(--red)' }}>THE PROBLEM</div>
                    <div style={{ fontSize: '24px', marginBottom: '10px', color: 'var(--color-text-primary)', fontWeight: 500 }}>Legacy Infrastructure</div>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                        Most of the revenue cycle is spent waiting. Legacy clearinghouses are black boxes: slow to integrate, impossible to debug, and stuck in the EDI era.
                    </p>
                </GlassPanel>

                {/* Box 2: Solution */}
                <GlassPanel style={{ padding: '30px' }}>
                    <div className="text-matrix-header" style={{ color: 'var(--color-agent-reasoning-blue)' }}>THE SOLUTION</div>
                    <div style={{ fontSize: '24px', marginBottom: '10px', color: 'var(--color-text-primary)', fontWeight: 500 }}>API-First Clearinghouse</div>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                        Stedi brings best-in-class software standards to healthcare transactions: fast APIs, reliable connections, scalable architecture, meticulous engineering. No compromises.
                    </p>
                </GlassPanel>

                {/* Box 3: Value */}
                <GlassPanel style={{ padding: '30px' }}>
                    <div className="text-matrix-header" style={{ color: 'var(--color-agent-extraction-green)' }}>PROVEN RESULTS</div>
                    <div style={{ fontSize: '24px', marginBottom: '10px', color: 'var(--color-text-primary)', fontWeight: 500 }}>Trusted by Innovators</div>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                        "Stedi didn't just give us better APIs. They gave us the support to scale, automate, and build a better product." — Nolan Chase, Co-founder of Berry Street
                    </p>
                </GlassPanel>

                {/* Box 4: Plan */}
                <GlassPanel style={{ padding: '30px' }}>
                    <div className="text-matrix-header" style={{ color: 'var(--color-agent-synthesis-purple)' }}>GET STARTED</div>
                    <div style={{ fontSize: '24px', marginBottom: '10px', color: 'var(--color-text-primary)', fontWeight: 500 }}>Live in a Day</div>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                        Dedicated Slack or Teams channel for every customer. Average response: under 10 minutes. Go from sign-up to first transaction in hours, not months.
                    </p>
                </GlassPanel>
            </motion.div>
        </SlideContainer>
    );
};
