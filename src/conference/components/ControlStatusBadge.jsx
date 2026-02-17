import React from 'react';
import clsx from 'clsx';
import './controlUi.css';

const fmt = (value) => (value ? new Date(value).toLocaleTimeString() : 'N/A');

export const ControlStatusBadge = ({
  mode = 'independent',
  switchRequest,
  takeoverRequest,
  takeover,
  lastAuditEntry,
}) => {
  const isPending = Boolean(switchRequest || takeoverRequest);
  const badgeClassName = clsx('control-badge', {
    'control-badge--pending': isPending,
    'control-badge--collaborative': !isPending && mode === 'collaborative',
    'control-badge--independent': !isPending && mode !== 'collaborative',
  });

  const label = isPending
    ? 'Pending approval'
    : mode === 'collaborative'
      ? 'Collaborative mode'
      : 'Independent mode';

  return (
    <div className={badgeClassName} title={lastAuditEntry ? `Last update: ${fmt(lastAuditEntry.at)}` : undefined}>
      <span>{label}</span>
      {takeover?.controlledBy ? <span>• {takeover.controlledBy}</span> : null}
      {switchRequest?.requestedBy ? <span>• switch: {switchRequest.requestedBy}</span> : null}
      {lastAuditEntry?.requestedBy ? <span>• by {lastAuditEntry.requestedBy}</span> : null}
    </div>
  );
};
