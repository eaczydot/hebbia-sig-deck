import React from 'react';
import './controlUi.css';

const modeLabel = {
  collaborative: 'Collaborative control',
  independent: 'Independent control',
};

export const TakeoverPrompt = ({
  request,
  onGrant,
  onDecline,
  onRevoke,
  activeTakeover,
}) => {
  if (activeTakeover) {
    return (
      <section className="control-panel" aria-live="polite">
        <header className="control-panel__title">Takeover active</header>
        <p className="control-panel__meta">
          <strong>{activeTakeover.controlledBy}</strong> currently has {modeLabel.collaborative.toLowerCase()}.
        </p>
        <button
          type="button"
          className="control-button control-button--danger"
          onClick={() => onRevoke?.(activeTakeover)}
        >
          Revoke takeover
        </button>
      </section>
    );
  }

  if (!request) {
    return null;
  }

  return (
    <section className="control-panel" aria-live="polite">
      <header className="control-panel__title">Takeover request</header>
      <p className="control-panel__meta">
        <strong>{request.requestedBy}</strong> requested navigation takeover.
      </p>
      <div className="control-panel__actions">
        <button
          type="button"
          className="control-button control-button--primary"
          onClick={() => onGrant?.(request, 'collaborative')}
        >
          Grant collaborative
        </button>
        <button
          type="button"
          className="control-button"
          onClick={() => onGrant?.(request, 'independent')}
        >
          Keep independent
        </button>
        <button
          type="button"
          className="control-button control-button--danger"
          onClick={() => onDecline?.(request)}
        >
          Decline
        </button>
      </div>
    </section>
  );
};
