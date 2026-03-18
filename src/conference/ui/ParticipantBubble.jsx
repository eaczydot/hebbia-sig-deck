import React, { useEffect, useRef } from 'react';
import styles from './ParticipantBubble.module.css';

const initialsFromName = (name) => {
  if (!name) {
    return '?';
  }

  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(chunk => chunk[0].toUpperCase())
    .join('');
};

export const ParticipantBubble = ({
  participant,
  videoTrack,
  style,
  onPointerDown,
  onResizePointerDown,
}) => {
  const initials = initialsFromName(participant?.name);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (videoTrack) {
      const stream = new MediaStream([videoTrack]);
      videoRef.current.srcObject = stream;
    } else {
      videoRef.current.srcObject = null;
    }
  }, [videoTrack]);

  const showVideo = participant?.cameraOn && videoTrack;

  return (
    <div className={styles.bubbleWrapper} style={style}>
      <div className={styles.bubble} onPointerDown={onPointerDown}>
        {showVideo ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className={styles.videoFill}
          />
        ) : participant?.cameraOn ? (
          <div className={styles.cameraOnFill} />
        ) : (
          <div className={styles.avatarFallback}>
            <span className={styles.initials}>{initials}</span>
          </div>
        )}

        <div className={styles.label}>
          <span>{participant?.name || 'Participant'}</span>
        </div>

        <div
          className={styles.resizeHandle}
          onPointerDown={onResizePointerDown}
        />
      </div>
    </div>
  );
};
