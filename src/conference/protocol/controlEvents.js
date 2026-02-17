export const CONTROL_CHANNEL_EVENTS = Object.freeze({
  SWITCH_REQUEST: 'switch_request',
  SWITCH_APPROVED: 'switch_approved',
  TAKEOVER_REQUEST: 'takeover_request',
  TAKEOVER_GRANTED: 'takeover_granted',
  TAKEOVER_REVOKED: 'takeover_revoked',
  SYNC_STATE_UPDATE: 'sync_state_update',
});

export const CONTROL_CHANNEL_EVENT_TYPES = Object.freeze(Object.values(CONTROL_CHANNEL_EVENTS));

export const isControlChannelEvent = (eventType) => CONTROL_CHANNEL_EVENT_TYPES.includes(eventType);

export const createControlEvent = (type, payload = {}, metadata = {}) => {
  if (!isControlChannelEvent(type)) {
    throw new Error(`Unsupported control event type: ${type}`);
  }

  return {
    type,
    payload,
    metadata,
    occurredAt: new Date().toISOString(),
  };
};
