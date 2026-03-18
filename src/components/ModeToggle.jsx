import React from 'react';
import { APP_MODES } from '../hooks/useAppMode';

const SEGMENTS = [
  { mode: APP_MODES.PREVIEW, label: 'Pre-meeting' },
  { mode: APP_MODES.MEETING, label: 'Meeting' },
  { mode: APP_MODES.REVIEW, label: 'Review' },
];

export function ModeToggle({ mode, onChangeMode }) {
  return (
    <div className="mode-toggle" role="tablist" aria-label="App mode">
      {SEGMENTS.map(({ mode: segmentMode, label }) => (
        <button
          key={segmentMode}
          type="button"
          role="tab"
          aria-selected={mode === segmentMode}
          className={`mode-toggle-segment${mode === segmentMode ? ' is-active' : ''}`}
          onClick={() => onChangeMode(segmentMode)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
