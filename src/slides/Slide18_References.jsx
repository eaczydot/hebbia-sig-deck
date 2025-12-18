import React from 'react';
import { SlideContainer } from '../components/SlideContainer';

export const Slide18_References = () => {
    return (
        <SlideContainer>
            <div className="text-matrix-header" style={{ marginBottom: '16px' }}>Appendix</div>
            <h2 className="text-hero" style={{ fontSize: '36px', marginBottom: '40px' }}>
                References & Data Sources
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ padding: '16px', borderBottom: '1px solid #333' }}>
                    <div style={{ fontWeight: 600, color: '#fff', marginBottom: '4px' }}>Strategic Context</div>
                    <div className="text-cell-data">Internal SIG strategic memos (redacted); Global market volatility index reports (2023-2024).</div>
                </div>

                <div style={{ padding: '16px', borderBottom: '1px solid #333' }}>
                    <div style={{ fontWeight: 600, color: '#fff', marginBottom: '4px' }}>Operational Efficiency Sources</div>
                    <div className="text-cell-data">Hebbia aggregate customer telemetry (anonymized); "The Future of Work in Finance" - McKinsey & Co (2023).</div>
                </div>

                <div style={{ padding: '16px', borderBottom: '1px solid #333' }}>
                    <div style={{ fontWeight: 600, color: '#fff', marginBottom: '4px' }}>Value Thesis</div>
                    <div className="text-cell-data">HBR: "The AI-First Company" (2024); ROI calculations based on average analyst compensation at top-tier prop trading firms.</div>
                </div>

                <div style={{ padding: '16px' }}>
                    <div style={{ fontWeight: 600, color: '#fff', marginBottom: '4px' }}>Security Standards</div>
                    <div className="text-cell-data">AICPA SOC 2 Standards; NIST Cybersecurity Framework usage guidelines for AI systems.</div>
                </div>
            </div>
        </SlideContainer>
    );
};
