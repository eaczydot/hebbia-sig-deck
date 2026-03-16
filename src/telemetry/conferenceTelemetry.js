export const conferenceTelemetryEvents = {
  JOIN: 'join',
  START_PRESENT: 'start_present',
  SWITCH_REQUEST: 'switch_request',
  TAKEOVER_GRANT: 'takeover_grant',
  NOTE_SEND: 'note_send',
};

export const emitConferenceTelemetry = (eventName, payload = {}) => {
  if (!eventName) {
    return;
  }

  const detail = {
    eventName,
    payload,
    timestamp: new Date().toISOString(),
    productSurface: 'conference',
  };

  window.dispatchEvent(new CustomEvent('conference:telemetry', { detail }));

  if (import.meta.env.DEV) {
    console.info('[conference:telemetry]', detail);
  }
};
