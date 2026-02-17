import React, { useEffect, useMemo, useState } from 'react';
import { assertAdapterShape, createNoopConferenceAdapter } from './adapters/ConferenceAdapter';
import { SignalingClient } from './services/SignalingClient';
import { MediaSession } from './services/MediaSession';
import { PresenceStore } from './stores/PresenceStore';
import { ConferenceContext } from './ConferenceContext';

const resolveRoomState = ({ localParticipant, remoteParticipants, explicitRoomState }) => {
  if (explicitRoomState) {
    return explicitRoomState;
  }

  const hasRemotes = remoteParticipants.size > 0;
  const localIsPresenting = Boolean(localParticipant?.isPresenting);

  if (!localParticipant && !hasRemotes) {
    return 'idle';
  }

  if (localParticipant?.takeoverRequested) {
    return 'takeover-requested';
  }

  if (localIsPresenting) {
    return 'presenting';
  }

  if (localParticipant?.isCollaborating || [...remoteParticipants.values()].some((p) => p.isCollaborating)) {
    return 'collaborative';
  }

  return 'live';
};

export function ConferenceProvider({ children, adapter = createNoopConferenceAdapter() }) {
  const conferenceAdapter = useMemo(() => assertAdapterShape(adapter), [adapter]);

  const signalingClient = useMemo(() => {
    const implementation = conferenceAdapter.createSignalingClient();
    return implementation instanceof SignalingClient
      ? implementation
      : new SignalingClient(implementation);
  }, [conferenceAdapter]);

  const mediaSession = useMemo(() => {
    const implementation = conferenceAdapter.createMediaSession();
    return implementation instanceof MediaSession
      ? implementation
      : new MediaSession(implementation);
  }, [conferenceAdapter]);

  const presenceStore = useMemo(() => {
    const implementation = conferenceAdapter.createPresenceStore();
    return implementation instanceof PresenceStore
      ? implementation
      : new PresenceStore(implementation.getSnapshot?.());
  }, [conferenceAdapter]);

  const [localParticipant, setLocalParticipant] = useState(() => presenceStore.getSnapshot().localParticipant);
  const [remoteParticipants, setRemoteParticipants] = useState(() => presenceStore.getSnapshot().remoteParticipants);
  const [explicitRoomState, setExplicitRoomState] = useState(null);

  useEffect(() => {
    const unsubscribe = presenceStore.subscribe((snapshot) => {
      setLocalParticipant(snapshot.localParticipant);
      setRemoteParticipants(snapshot.remoteParticipants);
    });

    return unsubscribe;
  }, [presenceStore]);

  useEffect(() => {
    const unsubscribers = [
      signalingClient.on('participant-joined', (participant) => {
        presenceStore.upsertRemoteParticipant(participant);
      }),
      signalingClient.on('participant-left', ({ participantId }) => {
        presenceStore.removeRemoteParticipant(participantId);
      }),
      signalingClient.on('participant-updated', (participant) => {
        presenceStore.upsertRemoteParticipant(participant);
      }),
      signalingClient.on('raise-hand', ({ participantId, raised }) => {
        presenceStore.handleRaiseHand(participantId, raised);
      }),
      signalingClient.on('question', ({ participantId, question }) => {
        presenceStore.handleQuestion(participantId, question);
      }),
      signalingClient.on('room-state', ({ state }) => {
        setExplicitRoomState(state ?? null);
      }),
    ];

    return () => {
      unsubscribers.forEach((unsubscribe) => unsubscribe?.());
    };
  }, [presenceStore, signalingClient]);

  const roomState = useMemo(
    () => resolveRoomState({ localParticipant, remoteParticipants, explicitRoomState }),
    [localParticipant, remoteParticipants, explicitRoomState],
  );

  const value = useMemo(
    () => ({
      localParticipant,
      remoteParticipants,
      roomState,
      signalingClient,
      mediaSession,
      presenceStore,
      setLocalParticipant: (participant) => presenceStore.updateLocalParticipant(participant),
      requestTakeover: () =>
        presenceStore.updateLocalParticipant({
          ...localParticipant,
          takeoverRequested: true,
        }),
    }),
    [localParticipant, mediaSession, presenceStore, remoteParticipants, roomState, signalingClient],
  );

  return <ConferenceContext.Provider value={value}>{children}</ConferenceContext.Provider>;
}
