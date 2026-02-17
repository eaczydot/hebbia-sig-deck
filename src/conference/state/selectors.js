import { ROLES, SHARED_CURSOR_MODES, getRoleCapabilities } from './sessionMachine';

export const selectSessionUser = (state) => state.sessionUser;

export const selectRoomShared = (state) => state.roomShared;

export const selectLocalPreferences = (state) => state.localPreferences;

export const selectSessionUserRole = (state) => selectSessionUser(state)?.role ?? ROLES.ATTENDEE;

export const selectRoleCapabilities = (state) => getRoleCapabilities(selectSessionUserRole(state));

export const selectCanPresent = (state) => {
  const caps = selectRoleCapabilities(state);
  return Boolean(caps.canBroadcastViewport);
};

export const selectCanTakeOver = (state) => {
  const userId = selectSessionUser(state)?.id;
  const caps = selectRoleCapabilities(state);
  const isPendingTakeoverRequester = selectRoomShared(state)?.pendingTakeoverRequest?.requestedBy === userId;
  return Boolean(caps.canApproveTakeover || isPendingTakeoverRequester);
};

export const selectIsCollaborativeMode = (state) =>
  selectRoomShared(state)?.sharedCursorMode === SHARED_CURSOR_MODES.COLLABORATIVE;

export const selectCanRequestSwitch = (state) => Boolean(selectRoleCapabilities(state).canRequestPresenterSwitch);

export const selectCanToggleToolbarPolicy = (state) =>
  Boolean(selectRoleCapabilities(state).canToggleToolbarPolicy);

export const selectCanSendHostMessage = (state) => Boolean(selectRoleCapabilities(state).canSendHostQuestion);

export const selectCanSavePrivateNotes = (state) => Boolean(selectRoleCapabilities(state).canSavePrivateNotes);

export const selectPresenterId = (state) => selectRoomShared(state)?.presenterId ?? null;

export const selectControlTokenOwnerId = (state) => selectRoomShared(state)?.controlTokenOwnerId ?? null;
