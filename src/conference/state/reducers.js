import {
  createInitialSessionState,
  sessionReducer,
  SESSION_EVENTS,
  SHARED_CURSOR_MODES,
  getRoleCapabilities,
} from './sessionMachine';

export {
  createInitialSessionState,
  SESSION_EVENTS,
  SHARED_CURSOR_MODES,
  getRoleCapabilities,
};

export const reduceSessionEvent = (state, event) => sessionReducer(state, event);

export const roomSharedReducer = (roomSharedState, event, fullState) => {
  const baseState = fullState ?? createInitialSessionState();
  const nextState = sessionReducer(
    {
      ...baseState,
      roomShared: roomSharedState ?? baseState.roomShared,
    },
    event,
  );

  return nextState.roomShared;
};

export const localPreferencesReducer = (localPreferencesState, event, fullState) => {
  const baseState = fullState ?? createInitialSessionState();
  const nextState = sessionReducer(
    {
      ...baseState,
      localPreferences: localPreferencesState ?? baseState.localPreferences,
    },
    event,
  );

  return nextState.localPreferences;
};
