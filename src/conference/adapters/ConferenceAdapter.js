/**
 * Adapter boundary for conferencing transport providers.
 *
 * SDK adapters for Daily, LiveKit, Twilio, Zoom, or custom WebRTC should implement
 * this contract and can then be injected into <ConferenceProvider adapter={...} />.
 */
export const ROOM_STATES = Object.freeze([
  'idle',
  'live',
  'presenting',
  'takeover-requested',
  'collaborative',
]);

/**
 * @typedef {Object} ConferenceAdapter
 * @property {(config?: object) => import('../services/SignalingClient').SignalingClient} createSignalingClient
 * @property {(config?: object) => import('../services/MediaSession').MediaSession} createMediaSession
 * @property {(config?: object) => import('../stores/PresenceStore').PresenceStore} createPresenceStore
 */

export function createNoopConferenceAdapter() {
  return {
    createSignalingClient: (config) => ({
      connect: async () => undefined,
      disconnect: async () => undefined,
      send: async () => undefined,
      on: () => () => undefined,
      off: () => undefined,
      ...config,
    }),
    createMediaSession: (config) => ({
      start: async () => undefined,
      stop: async () => undefined,
      toggleCamera: async () => undefined,
      toggleMicrophone: async () => undefined,
      startScreenShare: async () => undefined,
      stopScreenShare: async () => undefined,
      getTracks: () => ({ camera: null, microphone: null, screen: null }),
      ...config,
    }),
    createPresenceStore: (config) => ({
      getSnapshot: () => ({ localParticipant: null, remoteParticipants: new Map() }),
      updateLocalParticipant: () => undefined,
      upsertRemoteParticipant: () => undefined,
      removeRemoteParticipant: () => undefined,
      handleRaiseHand: () => undefined,
      handleQuestion: () => undefined,
      subscribe: () => () => undefined,
      ...config,
    }),
  };
}

export function assertAdapterShape(adapter) {
  if (!adapter) {
    throw new Error('Conference adapter is required.');
  }

  const requiredFactories = ['createSignalingClient', 'createMediaSession', 'createPresenceStore'];
  for (const factory of requiredFactories) {
    if (typeof adapter[factory] !== 'function') {
      throw new Error(`Conference adapter must implement ${factory}().`);
    }
  }

  return adapter;
}
