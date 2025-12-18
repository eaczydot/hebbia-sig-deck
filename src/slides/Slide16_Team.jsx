import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';

const TeamMember = ({ name, role, bio }) => (
    <GlassPanel style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ width: '60px', height: '60px', background: '#333', borderRadius: '50%', marginBottom: '4px' }}></div>
        <div>
            <div style={{ fontSize: '18px', fontWeight: 600, color: '#fff' }}>{name}</div>
            <div style={{ fontSize: '14px', color: 'var(--color-agent-reasoning-blue)' }}>{role}</div>
        </div>
        <p className="text-cell-data" style={{ fontSize: '14px' }}>{bio}</p>
    </GlassPanel>
);

export const Slide16_Team = () => {
    return (
        <SlideContainer>
            <div className="text-matrix-header" style={{ marginBottom: '16px' }}>Our Team</div>
            <h2 className="text-hero" style={{ fontSize: '36px', marginBottom: '60px' }}>
                World-Class AI & Finance Experts
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
                <TeamMember
                    name="George Sivulka"
                    role="Founder & CEO"
                    bio="Stanford PhD dropout (AI/Neuroscience). Previously researcher at NASA, Facebook AI. Built Hebbia to solve reasoning at scale."
                />
                <TeamMember
                    name="Leadership Team"
                    role="Ex-Google, Palantir, Bridgewater"
                    bio="Deep expertise in distributed systems, enterprise security, and institutional finance workflows."
                />
                <TeamMember
                    name="Customer Success"
                    role="Dedicated Financial Analysts"
                    bio="Our CS team consists of former intense-users (IBD, PE, HF) who understand your specific copy-paste pains."
                />
            </div>

            <div style={{ marginTop: '60px', display: 'flex', justifyContent: 'center', gap: '40px' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '32px', fontWeight: 700, color: '#fff' }}>150+</div>
                    <div className="text-cell-data">Team Members</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '32px', fontWeight: 700, color: '#fff' }}>NY / SF</div>
                    <div className="text-cell-data">Dual HQ</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '32px', fontWeight: 700, color: '#fff' }}>$160M</div>
                    <div className="text-cell-data">Series B (a16z)</div>
                </div>
            </div>
        </SlideContainer>
    );
};
