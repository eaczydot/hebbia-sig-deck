import React from 'react';
import './controlUi.css';

const formatTimestamp = (value) => {
  if (!value) {
    return 'unknown';
  }

  return new Date(value).toLocaleTimeString();
};

export const SwitchRequestDialog = ({
  request,
  presenterLabel = 'Current presenter',
  onApprove,
  onDeny,
}) => {
  if (!request) {
    return null;
  }

  return (
    <section className="control-panel" aria-live="polite">
      <header className="control-panel__title">Presenter switch request</header>
      <p className="control-panel__meta">
        <strong>{request.requestedBy}</strong> asked to become presenter at {formatTimestamp(request.requestedAt)}.
      </p>
      <p className="control-panel__meta">
        Reviewing as: <strong>{presenterLabel}</strong>
      </p>
      <div className="control-panel__actions">
        <button
          type="button"
          className="control-button control-button--primary"
          onClick={() => onApprove?.(request)}
        >
          Approve switch
        </button>
        <button
          type="button"
          className="control-button control-button--danger"
          onClick={() => onDeny?.(request)}
        >
          Deny
        </button>
      </div>
    </section>
  );
};
