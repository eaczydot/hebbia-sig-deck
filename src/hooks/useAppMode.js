import { useCallback, useEffect, useState } from 'react';

export const APP_MODES = Object.freeze({
  PREVIEW: 'preview',
  MEETING: 'meeting',
  REVIEW: 'review',
});

const HASH_TO_MODE = {
  '#/preview': APP_MODES.PREVIEW,
  '#/meeting': APP_MODES.MEETING,
  '#/review': APP_MODES.REVIEW,
  // Legacy routes
  '#/presentation': APP_MODES.MEETING,
  '#/site': APP_MODES.MEETING,
};

const getModeFromHash = () => {
  const hash = window.location.hash;
  return HASH_TO_MODE[hash] || APP_MODES.PREVIEW;
};

export function useAppMode() {
  const [mode, setModeState] = useState(getModeFromHash);

  useEffect(() => {
    const onHashChange = () => setModeState(getModeFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const setMode = useCallback((nextMode) => {
    window.location.hash = `#/${nextMode}`;
    setModeState(nextMode);
  }, []);

  return { mode, setMode };
}
