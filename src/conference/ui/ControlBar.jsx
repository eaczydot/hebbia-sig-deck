import React, { useState, useCallback } from 'react';
import { useConference } from '../useConference';
import './ControlBar.css';

export function ControlBar() {
  const { mediaSession } = useConference();
  const [joined, setJoined] = useState(false);
  const [cameraOn, setCameraOn] = useState(true);
  const [micOn, setMicOn] = useState(true);
  const [error, setError] = useState(null);

  const handleJoin = useCallback(async () => {
    setError(null);
    const tracks = await mediaSession.start({ video: true, audio: true });
    if (!tracks.camera && !tracks.microphone) {
      setError('Could not access camera or microphone');
      return;
    }
    setCameraOn(Boolean(tracks.camera));
    setMicOn(Boolean(tracks.microphone));
    setJoined(true);
  }, [mediaSession]);

  const handleLeave = useCallback(async () => {
    await mediaSession.stop();
    setJoined(false);
    setCameraOn(true);
    setMicOn(true);
  }, [mediaSession]);

  const toggleCamera = useCallback(async () => {
    const next = !cameraOn;
    await mediaSession.toggleCamera(next);
    setCameraOn(next);
  }, [cameraOn, mediaSession]);

  const toggleMic = useCallback(async () => {
    const next = !micOn;
    await mediaSession.toggleMicrophone(next);
    setMicOn(next);
  }, [micOn, mediaSession]);

  if (!joined) {
    return (
      <div className="control-bar">
        <button type="button" className="control-bar-btn control-bar-join" onClick={handleJoin}>
          Join Meeting
        </button>
        {error && <span className="control-bar-error">{error}</span>}
      </div>
    );
  }

  return (
    <div className="control-bar">
      <button
        type="button"
        className={`control-bar-btn${!cameraOn ? ' is-off' : ''}`}
        onClick={toggleCamera}
        aria-label={cameraOn ? 'Turn camera off' : 'Turn camera on'}
      >
        {cameraOn ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 10l5-3v10l-5-3z" />
            <rect x="1" y="6" width="14" height="12" rx="2" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 10l5-3v10l-5-3z" />
            <rect x="1" y="6" width="14" height="12" rx="2" />
            <line x1="1" y1="1" x2="23" y2="23" />
          </svg>
        )}
      </button>

      <button
        type="button"
        className={`control-bar-btn${!micOn ? ' is-off' : ''}`}
        onClick={toggleMic}
        aria-label={micOn ? 'Mute microphone' : 'Unmute microphone'}
      >
        {micOn ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="1" y1="1" x2="23" y2="23" />
          </svg>
        )}
      </button>

      <button
        type="button"
        className="control-bar-btn control-bar-leave"
        onClick={handleLeave}
        aria-label="Leave meeting"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" />
          <line x1="23" y1="1" x2="1" y2="23" />
        </svg>
      </button>
    </div>
  );
}
