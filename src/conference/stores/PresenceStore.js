/**
 * Local state store for conference participant presence and interaction events.
 */
export class PresenceStore {
  constructor(initialState = {}) {
    this.listeners = new Set();
    this.state = {
      localParticipant: initialState.localParticipant ?? null,
      remoteParticipants: new Map(initialState.remoteParticipants ?? []),
    };
  }

  getSnapshot() {
    return {
      localParticipant: this.state.localParticipant,
      remoteParticipants: new Map(this.state.remoteParticipants),
    };
  }

  updateLocalParticipant(participant) {
    this.state.localParticipant = participant;
    this.notify();
  }

  upsertRemoteParticipant(participant) {
    if (!participant?.id) {
      return;
    }

    this.state.remoteParticipants.set(participant.id, participant);
    this.notify();
  }

  removeRemoteParticipant(participantId) {
    this.state.remoteParticipants.delete(participantId);
    this.notify();
  }

  handleRaiseHand(participantId, raised = true) {
    this.patchParticipant(participantId, { raisedHand: raised });
  }

  handleQuestion(participantId, question) {
    this.patchParticipant(participantId, {
      question,
      questionTimestamp: Date.now(),
    });
  }

  patchParticipant(participantId, patch) {
    const current = this.state.remoteParticipants.get(participantId);
    if (!current) {
      return;
    }

    this.state.remoteParticipants.set(participantId, { ...current, ...patch });
    this.notify();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    const snapshot = this.getSnapshot();
    this.listeners.forEach((listener) => listener(snapshot));
  }
}
