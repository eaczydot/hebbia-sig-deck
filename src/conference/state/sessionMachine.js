export const SESSION_EVENTS = {
  JOIN_ROOM: 'JOIN_ROOM',
  START_PRESENTING: 'START_PRESENTING',
  REQUEST_SWITCH: 'REQUEST_SWITCH',
  APPROVE_SWITCH: 'APPROVE_SWITCH',
  REQUEST_TAKEOVER: 'REQUEST_TAKEOVER',
  GRANT_TAKEOVER: 'GRANT_TAKEOVER',
  REVOKE_TAKEOVER: 'REVOKE_TAKEOVER',
  SET_SHARED_CURSOR_MODE: 'SET_SHARED_CURSOR_MODE',
  SET_TOOLBAR_POLICY: 'SET_TOOLBAR_POLICY',
  SET_LOCAL_PREFERENCE: 'SET_LOCAL_PREFERENCE',
};

export const ROLES = {
  HOST: 'host',
  PRESENTER: 'presenter',
  ATTENDEE: 'attendee',
};

export const SHARED_CURSOR_MODES = {
  OFF: 'off',
  PRESENTER_ONLY: 'presenter-only',
  COLLABORATIVE: 'collaborative',
};

const ROLE_CAPABILITIES = {
  [ROLES.HOST]: {
    canBroadcastViewport: true,
    canApproveSwitch: true,
    canApproveTakeover: true,
    canToggleToolbarPolicy: true,
    canMoveLocalBubbles: true,
    canRequestPresenterSwitch: false,
    canSendHostQuestion: false,
    canSavePrivateNotes: true,
  },
  [ROLES.PRESENTER]: {
    canBroadcastViewport: true,
    canApproveSwitch: true,
    canApproveTakeover: true,
    canToggleToolbarPolicy: true,
    canMoveLocalBubbles: true,
    canRequestPresenterSwitch: false,
    canSendHostQuestion: false,
    canSavePrivateNotes: true,
  },
  [ROLES.ATTENDEE]: {
    canBroadcastViewport: false,
    canApproveSwitch: false,
    canApproveTakeover: false,
    canToggleToolbarPolicy: false,
    canMoveLocalBubbles: true,
    canRequestPresenterSwitch: true,
    canSendHostQuestion: true,
    canSavePrivateNotes: true,
  },
};

export const getRoleCapabilities = (role) => ROLE_CAPABILITIES[role] ?? ROLE_CAPABILITIES[ROLES.ATTENDEE];

export const createInitialSessionState = ({
  roomId = null,
  userId,
  role = ROLES.ATTENDEE,
  presenterId = null,
  controlTokenOwnerId = null,
  sharedCursorMode = SHARED_CURSOR_MODES.OFF,
} = {}) => ({
  roomId,
  sessionUser: {
    id: userId,
    role,
  },
  participants: userId ? { [userId]: { id: userId, role } } : {},
  roomShared: {
    presenterId,
    controlTokenOwnerId,
    sharedCursorMode,
    toolbarPolicyVisible: true,
    pendingSwitchRequest: null,
    pendingTakeoverRequest: null,
    requestSequence: 0,
  },
  localPreferences: {
    bubblesExpanded: true,
    compactToolbar: false,
    privateNotes: '',
  },
});

const compareRequests = (nextRequest, currentRequest) => {
  if (!currentRequest) {
    return nextRequest;
  }

  if (nextRequest.sequence > currentRequest.sequence) {
    return nextRequest;
  }

  if (nextRequest.sequence === currentRequest.sequence) {
    if (nextRequest.timestamp > currentRequest.timestamp) {
      return nextRequest;
    }

    if (nextRequest.timestamp === currentRequest.timestamp) {
      return nextRequest.requestedBy.localeCompare(currentRequest.requestedBy) < 0
        ? nextRequest
        : currentRequest;
    }
  }

  return currentRequest;
};

const isHostOrPresenter = (role) => role === ROLES.HOST || role === ROLES.PRESENTER;

const canApprove = (state, actorId) => {
  const actor = state.participants[actorId];
  return actor ? isHostOrPresenter(actor.role) : false;
};

const registerParticipant = (participants, participant) => {
  if (!participant?.id) {
    return participants;
  }

  return {
    ...participants,
    [participant.id]: {
      id: participant.id,
      role: participant.role ?? ROLES.ATTENDEE,
    },
  };
};

export const sessionReducer = (state, event) => {
  if (!state) {
    return createInitialSessionState();
  }

  if (!event?.type) {
    return state;
  }

  switch (event.type) {
    case SESSION_EVENTS.JOIN_ROOM: {
      return {
        ...state,
        roomId: event.roomId ?? state.roomId,
        participants: registerParticipant(state.participants, {
          id: event.userId,
          role: event.role,
        }),
      };
    }

    case SESSION_EVENTS.START_PRESENTING: {
      if (state.roomShared.presenterId === event.userId) {
        return state;
      }

      return {
        ...state,
        roomShared: {
          ...state.roomShared,
          presenterId: event.userId,
          controlTokenOwnerId: event.userId,
          pendingSwitchRequest: null,
        },
      };
    }

    case SESSION_EVENTS.REQUEST_SWITCH: {
      const nextRequest = {
        requestedBy: event.userId,
        targetPresenterId: event.targetPresenterId,
        timestamp: event.timestamp ?? Date.now(),
        sequence: event.sequence ?? state.roomShared.requestSequence + 1,
      };

      return {
        ...state,
        roomShared: {
          ...state.roomShared,
          requestSequence: Math.max(state.roomShared.requestSequence, nextRequest.sequence),
          pendingSwitchRequest: compareRequests(nextRequest, state.roomShared.pendingSwitchRequest),
        },
      };
    }

    case SESSION_EVENTS.APPROVE_SWITCH: {
      if (!canApprove(state, event.approvedBy) || !state.roomShared.pendingSwitchRequest) {
        return state;
      }

      const nextPresenterId = state.roomShared.pendingSwitchRequest.targetPresenterId;

      return {
        ...state,
        roomShared: {
          ...state.roomShared,
          presenterId: nextPresenterId,
          controlTokenOwnerId: nextPresenterId,
          pendingSwitchRequest: null,
        },
      };
    }

    case SESSION_EVENTS.REQUEST_TAKEOVER: {
      const nextRequest = {
        requestedBy: event.userId,
        timestamp: event.timestamp ?? Date.now(),
        sequence: event.sequence ?? state.roomShared.requestSequence + 1,
      };

      return {
        ...state,
        roomShared: {
          ...state.roomShared,
          requestSequence: Math.max(state.roomShared.requestSequence, nextRequest.sequence),
          pendingTakeoverRequest: compareRequests(nextRequest, state.roomShared.pendingTakeoverRequest),
        },
      };
    }

    case SESSION_EVENTS.GRANT_TAKEOVER: {
      if (!canApprove(state, event.grantedBy) || !state.roomShared.pendingTakeoverRequest) {
        return state;
      }

      return {
        ...state,
        roomShared: {
          ...state.roomShared,
          controlTokenOwnerId: state.roomShared.pendingTakeoverRequest.requestedBy,
          pendingTakeoverRequest: null,
        },
      };
    }

    case SESSION_EVENTS.REVOKE_TAKEOVER: {
      if (!canApprove(state, event.revokedBy)) {
        return state;
      }

      return {
        ...state,
        roomShared: {
          ...state.roomShared,
          controlTokenOwnerId: state.roomShared.presenterId,
          pendingTakeoverRequest: null,
        },
      };
    }

    case SESSION_EVENTS.SET_SHARED_CURSOR_MODE: {
      if (!canApprove(state, event.updatedBy)) {
        return state;
      }

      return {
        ...state,
        roomShared: {
          ...state.roomShared,
          sharedCursorMode: event.mode,
        },
      };
    }

    case SESSION_EVENTS.SET_TOOLBAR_POLICY: {
      if (!canApprove(state, event.updatedBy)) {
        return state;
      }

      return {
        ...state,
        roomShared: {
          ...state.roomShared,
          toolbarPolicyVisible: Boolean(event.visible),
        },
      };
    }

    case SESSION_EVENTS.SET_LOCAL_PREFERENCE: {
      if (!event.key) {
        return state;
      }

      return {
        ...state,
        localPreferences: {
          ...state.localPreferences,
          [event.key]: event.value,
        },
      };
    }

    default:
      return state;
  }
};
