import { CONTROL_CHANNEL_EVENTS } from './protocol/controlEvents';

export const CONTROL_REQUEST_TIMEOUT_MS = 30_000;

const toIsoString = (value) => {
  if (!value) {
    return new Date().toISOString();
  }

  if (typeof value === 'string') {
    return value;
  }

  return new Date(value).toISOString();
};

const createAuditMetadata = ({ requestedBy, approvedBy, revokedBy, at, reason }) => ({
  requestedBy: requestedBy ?? null,
  approvedBy: approvedBy ?? null,
  revokedBy: revokedBy ?? null,
  reason: reason ?? null,
  at: toIsoString(at),
});

export const createInitialControlSession = ({ presenterId = null, mode = 'independent' } = {}) => ({
  presenterId,
  mode,
  switchRequest: null,
  takeoverRequest: null,
  takeover: null,
  sharedNavigationState: null,
  auditTrail: [],
  eventLog: [],
});

const appendEvent = (session, eventType, payload, metadata) => ({
  ...session,
  eventLog: [
    ...session.eventLog,
    {
      type: eventType,
      payload,
      metadata,
      occurredAt: toIsoString(metadata?.at),
    },
  ],
});

const appendAudit = (session, kind, metadata) => ({
  ...session,
  auditTrail: [...session.auditTrail, { kind, ...metadata }],
});

const withAuditAndEvent = (session, kind, eventType, payload, metadata) => {
  const withEvent = appendEvent(session, eventType, payload, metadata);
  return appendAudit(withEvent, kind, metadata);
};

export const requestSwitch = (session, { requestedBy, requestedAt = Date.now(), timeoutMs = CONTROL_REQUEST_TIMEOUT_MS }) => {
  const metadata = createAuditMetadata({ requestedBy, at: requestedAt });

  const updatedSession = {
    ...session,
    switchRequest: {
      requestedBy,
      requestedAt: toIsoString(requestedAt),
      expiresAt: toIsoString(requestedAt + timeoutMs),
    },
  };

  return withAuditAndEvent(
    updatedSession,
    'switch_requested',
    CONTROL_CHANNEL_EVENTS.SWITCH_REQUEST,
    { requestedBy, timeoutMs },
    metadata,
  );
};

export const approveSwitch = (session, { approvedBy, approvedAt = Date.now(), nextPresenterId }) => {
  const metadata = createAuditMetadata({
    requestedBy: session.switchRequest?.requestedBy,
    approvedBy,
    at: approvedAt,
  });

  const updatedSession = {
    ...session,
    presenterId: nextPresenterId,
    switchRequest: null,
  };

  return withAuditAndEvent(
    updatedSession,
    'switch_approved',
    CONTROL_CHANNEL_EVENTS.SWITCH_APPROVED,
    { nextPresenterId },
    metadata,
  );
};

export const requestTakeover = (session, { requestedBy, requestedAt = Date.now(), timeoutMs = CONTROL_REQUEST_TIMEOUT_MS }) => {
  const metadata = createAuditMetadata({ requestedBy, at: requestedAt });

  const updatedSession = {
    ...session,
    takeoverRequest: {
      requestedBy,
      requestedAt: toIsoString(requestedAt),
      expiresAt: toIsoString(requestedAt + timeoutMs),
    },
  };

  return withAuditAndEvent(
    updatedSession,
    'takeover_requested',
    CONTROL_CHANNEL_EVENTS.TAKEOVER_REQUEST,
    { requestedBy, timeoutMs },
    metadata,
  );
};

export const grantTakeover = (
  session,
  {
    approvedBy,
    grantedTo,
    grantedAt = Date.now(),
    mode = 'collaborative',
    sharedNavigationState,
  },
) => {
  const metadata = createAuditMetadata({
    requestedBy: session.takeoverRequest?.requestedBy,
    approvedBy,
    at: grantedAt,
  });

  const updatedSession = {
    ...session,
    mode,
    takeoverRequest: null,
    takeover: {
      controlledBy: grantedTo,
      grantedBy: approvedBy,
      grantedAt: toIsoString(grantedAt),
    },
    sharedNavigationState: mode === 'collaborative' ? normalizeSharedNavigationState(sharedNavigationState) : null,
  };

  return withAuditAndEvent(
    updatedSession,
    'takeover_granted',
    CONTROL_CHANNEL_EVENTS.TAKEOVER_GRANTED,
    { grantedTo, mode },
    metadata,
  );
};

export const revokeTakeover = (session, { revokedBy, revokedAt = Date.now(), reason = 'manual_revoke' } = {}) => {
  const metadata = createAuditMetadata({
    requestedBy: session.takeoverRequest?.requestedBy,
    approvedBy: session.takeover?.grantedBy,
    revokedBy,
    at: revokedAt,
    reason,
  });

  const updatedSession = {
    ...session,
    mode: 'independent',
    takeoverRequest: null,
    takeover: null,
    sharedNavigationState: null,
  };

  return withAuditAndEvent(
    updatedSession,
    'takeover_revoked',
    CONTROL_CHANNEL_EVENTS.TAKEOVER_REVOKED,
    { reason },
    metadata,
  );
};

export const normalizeSharedNavigationState = (payload = {}) => ({
  route: payload.route ?? null,
  slide: payload.slide ?? null,
  index: payload.index ?? null,
  cursor: payload.cursor
    ? {
      x: payload.cursor.x,
      y: payload.cursor.y,
      visible: payload.cursor.visible ?? true,
    }
    : null,
  scrollSyncEnabled: payload.scrollSyncEnabled ?? false,
  scroll: payload.scrollSyncEnabled ? payload.scroll ?? null : null,
  updatedAt: toIsoString(payload.updatedAt),
  updatedBy: payload.updatedBy ?? null,
});

export const updateSharedNavigationState = (session, payload) => {
  if (session.mode !== 'collaborative') {
    return session;
  }

  const nextSharedState = normalizeSharedNavigationState({
    ...session.sharedNavigationState,
    ...payload,
    updatedAt: payload.updatedAt ?? Date.now(),
  });

  const metadata = createAuditMetadata({ approvedBy: session.takeover?.grantedBy, at: payload.updatedAt });

  return withAuditAndEvent(
    {
      ...session,
      sharedNavigationState: nextSharedState,
    },
    'sync_state_updated',
    CONTROL_CHANNEL_EVENTS.SYNC_STATE_UPDATE,
    nextSharedState,
    metadata,
  );
};

export const setSyncMode = (session, mode) => {
  if (mode === 'independent') {
    return {
      ...session,
      mode,
      sharedNavigationState: null,
    };
  }

  return {
    ...session,
    mode,
  };
};

export const expireControlRequests = (session, now = Date.now()) => {
  let updatedSession = session;

  const switchExpiresAt = session.switchRequest ? Date.parse(session.switchRequest.expiresAt) : null;
  if (switchExpiresAt && now > switchExpiresAt) {
    updatedSession = {
      ...updatedSession,
      switchRequest: null,
    };
  }

  const takeoverExpiresAt = session.takeoverRequest ? Date.parse(session.takeoverRequest.expiresAt) : null;
  if (takeoverExpiresAt && now > takeoverExpiresAt) {
    updatedSession = revokeTakeover(
      {
        ...updatedSession,
        takeoverRequest: null,
      },
      {
        revokedBy: 'system',
        revokedAt: now,
        reason: 'takeover_request_timeout',
      },
    );
  }

  return updatedSession;
};
