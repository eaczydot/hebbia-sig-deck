import React from 'react';
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
  style,
  onPointerDown,
  onResizePointerDown,
}) => {
  const initials = initialsFromName(participant?.name);

  return (
    <div className={styles.bubbleWrapper} style={style}>
      <div className={styles.bubble} onPointerDown={onPointerDown}>
        {participant?.cameraOn ? (
          <div className={styles.cameraOnFill}>
            <div className={styles.liveBadge}>LIVE</div>
          </div>
        ) : (
          <div className={styles.avatarFallback}>
            <span className={styles.initials}>{initials}</span>
          </div>
        )}

        <div className={styles.label}>
          <span>{participant?.name || 'Participant'}</span>
        </div>

        <button
          type="button"
          aria-label={`Resize ${participant?.name || 'participant'} bubble`}
          className={styles.resizeHandle}
          onPointerDown={onResizePointerDown}
        />
      </div>
    </div>
  );
};
