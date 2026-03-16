import React from 'react';
import { GlassPanel } from './GlassPanel';
import { conferencePrivacyControls } from '../config/features';

export const ConferenceConsentPanel = () => (
  <GlassPanel style={{ padding: '24px', borderTop: '2px solid var(--color-agent-synthesis-purple)' }}>
    <div className="text-matrix-header" style={{ color: 'var(--color-agent-synthesis-purple)' }}>
      CONSENT UI PREVIEW
    </div>
    <h3 style={{ marginTop: '10px', marginBottom: '16px', fontSize: '20px' }}>
      {conferencePrivacyControls.consentPromptTitle}
    </h3>

    <div style={{ display: 'grid', gap: '14px' }}>
      {conferencePrivacyControls.toggles.map((toggle) => (
        <div
          key={toggle.key}
          style={{
            border: '1px solid var(--color-border-primary)',
            borderRadius: '12px',
            padding: '12px 14px',
            background: 'rgba(255,255,255,0.02)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <strong style={{ fontSize: '14px' }}>{toggle.label}</strong>
            <span className="pill">Required prompt</span>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
            <div><strong>Local-only:</strong> {toggle.localOnly}</div>
            <div style={{ marginTop: '4px' }}><strong>Shared:</strong> {toggle.shared}</div>
          </div>
        </div>
      ))}
    </div>
  </GlassPanel>
);
