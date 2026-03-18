/**
 * Local media adapter that uses getUserMedia for camera/mic.
 * No signaling or remote peers — local-only for now.
 */
export function createLocalMediaAdapter() {
  let localStream = null;

  return {
    createSignalingClient() {
      return {
        connect: async () => undefined,
        disconnect: async () => undefined,
        send: async () => undefined,
        on: () => () => undefined,
        off: () => undefined,
      };
    },

    createMediaSession() {
      return {
        async start({ video = true, audio = true } = {}) {
          try {
            localStream = await navigator.mediaDevices.getUserMedia({ video, audio });
            const camera = localStream.getVideoTracks()[0] || null;
            const microphone = localStream.getAudioTracks()[0] || null;
            return { camera, microphone };
          } catch (err) {
            console.warn('Failed to access media devices:', err.message);
            return { camera: null, microphone: null };
          }
        },

        async stop() {
          if (localStream) {
            localStream.getTracks().forEach(track => track.stop());
            localStream = null;
          }
        },

        async toggleCamera(enabled) {
          if (localStream) {
            localStream.getVideoTracks().forEach(track => {
              track.enabled = enabled;
            });
          }
        },

        async toggleMicrophone(enabled) {
          if (localStream) {
            localStream.getAudioTracks().forEach(track => {
              track.enabled = enabled;
            });
          }
        },

        async startScreenShare() {
          return null;
        },

        async stopScreenShare() {},

        getTracks() {
          if (!localStream) {
            return { camera: null, microphone: null, screen: null };
          }
          return {
            camera: localStream.getVideoTracks()[0] || null,
            microphone: localStream.getAudioTracks()[0] || null,
            screen: null,
          };
        },
      };
    },

    createPresenceStore() {
      return {
        getSnapshot: () => ({ localParticipant: null, remoteParticipants: new Map() }),
        updateLocalParticipant: () => undefined,
        upsertRemoteParticipant: () => undefined,
        removeRemoteParticipant: () => undefined,
        handleRaiseHand: () => undefined,
        handleQuestion: () => undefined,
        subscribe: () => () => undefined,
      };
    },
  };
}
