import React from 'react';
import { SlideContainer } from '../components/SlideContainer';
import { GlassPanel } from '../components/GlassPanel';
import {
  conferenceFeatureFlags,
  conferenceNonFunctionalAcceptanceCriteria,
  conferenceRolloutPhases,
} from '../config/features';
import { ConferenceConsentPanel } from '../components/ConferenceConsentPanel';
import { conferenceTelemetryEvents, emitConferenceTelemetry } from '../telemetry/conferenceTelemetry';

const formatFlag = (flagValue) => (flagValue ? 'Enabled' : 'Disabled');

export const Slide23_ConferenceReadiness = () => {
  const triggerTelemetry = (eventName) => () => {
    emitConferenceTelemetry(eventName, {
      source: 'Slide23_ConferenceReadiness',
      actor: 'demo-host',
    });
  };

  return (
    <SlideContainer>
      <div style={{ marginBottom: '24px' }}>
        <div className="text-matrix-header">CONFERENCE ENABLEMENT PLAN</div>
        <h2 className="text-hero" style={{ fontSize: '44px' }}>Feature Flags, Rollout, and Governance</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <GlassPanel style={{ padding: '20px', borderTop: '2px solid var(--color-agent-reasoning-blue)' }}>
          <div className="text-matrix-header" style={{ color: 'var(--color-agent-reasoning-blue)' }}>FEATURE FLAGS</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', fontSize: '14px', lineHeight: 1.7 }}>
            <li><strong>conference.enabled</strong>: {formatFlag(conferenceFeatureFlags.enabled)}</li>
            <li><strong>conference.takeover</strong>: {formatFlag(conferenceFeatureFlags.takeover)}</li>
            <li><strong>conference.toolbar</strong>: {formatFlag(conferenceFeatureFlags.toolbar)}</li>
          </ul>
        </GlassPanel>

        <GlassPanel style={{ padding: '20px', borderTop: '2px solid var(--color-agent-citation-orange)' }}>
          <div className="text-matrix-header" style={{ color: 'var(--color-agent-citation-orange)' }}>TELEMETRY HOOKS</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
            {Object.values(conferenceTelemetryEvents).map((eventName) => (
              <button
                key={eventName}
                type="button"
                className="pill"
                onClick={triggerTelemetry(eventName)}
                style={{ cursor: 'pointer' }}
              >
                {eventName}
              </button>
            ))}
          </div>
        </GlassPanel>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: '16px', flex: 1 }}>
        <GlassPanel style={{ padding: '20px', borderTop: '2px solid var(--color-agent-extraction-green)' }}>
          <div className="text-matrix-header" style={{ color: 'var(--color-agent-extraction-green)' }}>ROLLOUT PHASES</div>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px', display: 'grid', gap: '10px' }}>
            {conferenceRolloutPhases.map((phase) => (
              <li key={phase.id} style={{ border: '1px solid var(--color-border-primary)', borderRadius: '10px', padding: '10px 12px' }}>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>{phase.title}</div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                  {phase.deliverables[0]}
                </div>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '12px', fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            <strong>Non-functional acceptance:</strong> 4 participants ≤ {conferenceNonFunctionalAcceptanceCriteria.performance.participants4.maxCpuPercent}% CPU /
            {' '}{conferenceNonFunctionalAcceptanceCriteria.performance.participants4.maxMemoryMb}MB, 8 participants ≤ {conferenceNonFunctionalAcceptanceCriteria.performance.participants8.maxCpuPercent}% CPU /
            {' '}{conferenceNonFunctionalAcceptanceCriteria.performance.participants8.maxMemoryMb}MB; reconnect in 3s; permission-denied fallbacks and mobile degradations documented.
          </div>
        </GlassPanel>

        <ConferenceConsentPanel />
      </div>
    </SlideContainer>
  );
};
