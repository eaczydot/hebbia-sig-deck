import { useContext } from 'react';
import { ConferenceContext } from './ConferenceContext';

export function useConference() {
  const context = useContext(ConferenceContext);

  if (!context) {
    throw new Error('useConference must be used inside ConferenceProvider.');
  }

  return context;
}
