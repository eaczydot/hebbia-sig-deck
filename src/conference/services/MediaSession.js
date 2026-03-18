/**
 * Manages local media controls and track references.
 */
export class MediaSession {
  constructor(controller = {}) {
    this.controller = controller;
    this.tracks = { camera: null, microphone: null, screen: null };
  }

  async start(options) {
    if (typeof this.controller.start === 'function') {
      const providedTracks = await this.controller.start(options);
      this.tracks = { ...this.tracks, ...providedTracks };
    }

    return this.getTracks();
  }

  async stop() {
    if (typeof this.controller.stop === 'function') {
      await this.controller.stop();
    }
    this.tracks = { camera: null, microphone: null, screen: null };
  }

  async toggleCamera(enabled) {
    if (typeof this.controller.toggleCamera === 'function') {
      await this.controller.toggleCamera(enabled);
    }
  }

  async toggleMicrophone(enabled) {
    if (typeof this.controller.toggleMicrophone === 'function') {
      await this.controller.toggleMicrophone(enabled);
    }
  }

  async startScreenShare() {
    if (typeof this.controller.startScreenShare === 'function') {
      const screenTrack = await this.controller.startScreenShare();
      this.tracks.screen = screenTrack ?? this.tracks.screen;
    }

    return this.tracks.screen;
  }

  async stopScreenShare() {
    if (typeof this.controller.stopScreenShare === 'function') {
      await this.controller.stopScreenShare();
    }

    this.tracks.screen = null;
  }

  getTracks() {
    return { ...this.tracks };
  }
}
