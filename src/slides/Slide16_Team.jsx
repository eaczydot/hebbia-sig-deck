import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import { SlideHeader } from '../components/SlideHeader';

const TeamMember = ({ name, role, bio }) => (
    <GlassPanel style={{ padding: 'clamp(16px, 2.2vw, 24px)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
        <div style={{ width: 'clamp(44px, 6vw, 60px)', height: 'clamp(44px, 6vw, 60px)', background: '#333', borderRadius: '50%', marginBottom: '4px' }}></div>
        <div>
            <div style={{ fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: 600, color: '#fff' }}>{name}</div>
            <div style={{ fontSize: 'clamp(12px, 1.6vw, 14px)', color: 'var(--color-agent-reasoning-blue)' }}>{role}</div>
        </div>
        <p className="text-cell-data" style={{ fontSize: 'clamp(14px, 1.7vw, 16px)' }}>{bio}</p>
    </GlassPanel>
);

export const Slide16_Team = () => {
    return (
        <SlideContainer>
            <SlideHeader
                kicker="OUR TEAM"
                title="World-Class AI & Finance Experts"
                titleSize={36}
                marginBottom={60}
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 'var(--layout-gap-sm)' }}>
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

            <div style={{ marginTop: 'var(--spacing-3xl)', display: 'flex', justifyContent: 'center', gap: 'var(--layout-gap-lg)', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', fontWeight: 700, color: '#fff' }}>150+</div>
                    <div className="text-cell-data">Team Members</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', fontWeight: 700, color: '#fff' }}>NY / SF</div>
                    <div className="text-cell-data">Dual HQ</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', fontWeight: 700, color: '#fff' }}>$160M</div>
                    <div className="text-cell-data">Series B (a16z)</div>
                </div>
            </div>
        </SlideContainer>
    );
};
