export const conferenceFeatureFlags = {
  enabled: false,
  takeover: false,
  toolbar: false,
};

export const conferenceRolloutPhases = [
  {
    id: 1,
    title: 'Phase 1: Presence + Camera Bubbles',
    deliverables: [
      'Enable shared room presence indicators for active participants.',
      'Launch camera bubbles for host and viewers with adaptive quality.',
      'Collect baseline stability and engagement telemetry in pilot accounts.',
    ],
  },
  {
    id: 2,
    title: 'Phase 2: Presentation PiP',
    deliverables: [
      'Ship presentation picture-in-picture overlays with presenter controls.',
      'Maintain synchronized slide state during reconnects and role changes.',
      'Introduce participant-side PiP disable option for lower-powered devices.',
    ],
  },
  {
    id: 3,
    title: 'Phase 3: Switch/Takeover Collaborative Mode',
    deliverables: [
      'Enable switch requests and explicit takeover grants between collaborators.',
      'Gate takeover behind host entitlement and room policy checks.',
      'Provide fallback to presenter-only mode when takeover is disallowed.',
    ],
  },
  {
    id: 4,
    title: 'Phase 4: Notes/Comments Toolbar + Host Workflows',
    deliverables: [
      'Release shared notes/comments toolbar with moderation controls.',
      'Add host workflows for pinning notes, resolving comments, and audit export.',
      'Complete enablement playbook and admin controls for enterprise rollout.',
    ],
  },
];

export const conferenceNonFunctionalAcceptanceCriteria = {
  performance: {
    participants4: {
      maxCpuPercent: 35,
      maxMemoryMb: 900,
      notes: 'Measured on baseline laptop profile with camera + PiP active.',
    },
    participants8: {
      maxCpuPercent: 65,
      maxMemoryMb: 1400,
      notes: 'Measured with active speaker mode and toolbar enabled.',
    },
  },
  reconnection: {
    behavior: [
      'Attempt transparent reconnect within 3 seconds after transient disconnect.',
      'Restore role, active presenter state, and unsent notes after reconnect.',
      'Escalate to degraded audio-only mode after 2 failed reconnect attempts.',
    ],
  },
  permissionDeniedFallbacks: {
    camera: 'Show avatar bubble and keep room participation active.',
    screen: 'Continue in viewer mode and prompt to request presenter handoff.',
    microphone: 'Auto-enable captioned chat input and note toolbar affordances.',
  },
  mobileDegradations: {
    behavior: [
      'Disable multi-stream camera bubbles when thermal pressure is detected.',
      'Prioritize presenter stream and collapse PiP into a swipeable tray.',
      'Switch toolbar to compact mode with comments-only quick action.',
    ],
  },
};

export const conferencePrivacyControls = {
  consentPromptTitle: 'Before you share, confirm conference permissions',
  toggles: [
    {
      key: 'camera',
      label: 'Camera sharing',
      localOnly: 'Raw camera preview rendering and device diagnostics.',
      shared: 'Compressed camera stream, display name, and speaking status.',
    },
    {
      key: 'screen',
      label: 'Screen sharing',
      localOnly: 'Window picker metadata and private monitor inventory.',
      shared: 'Selected application/screen stream and presenter cursor highlights.',
    },
    {
      key: 'microphone',
      label: 'Microphone sharing',
      localOnly: 'Input gain analysis and mute state transitions.',
      shared: 'Encoded audio stream and optional transcript snippets.',
    },
  ],
};
