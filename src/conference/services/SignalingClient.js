const createEmitter = () => {
  const listeners = new Map();

  const on = (event, callback) => {
    if (!listeners.has(event)) {
      listeners.set(event, new Set());
    }
    listeners.get(event).add(callback);

    return () => {
      off(event, callback);
    };
  };

  const off = (event, callback) => {
    listeners.get(event)?.delete(callback);
  };

  const emit = (event, payload) => {
    listeners.get(event)?.forEach((callback) => callback(payload));
  };

  return { on, off, emit };
};

/**
 * Thin wrapper around signaling transport (WebSocket or provider SDK).
 */
export class SignalingClient {
  constructor(transport = {}) {
    this.transport = transport;
    this.emitter = createEmitter();
  }

  async connect(connectionInfo) {
    if (typeof this.transport.connect === 'function') {
      await this.transport.connect(connectionInfo);
    }
    this.emitter.emit('connected');
  }

  async disconnect() {
    if (typeof this.transport.disconnect === 'function') {
      await this.transport.disconnect();
    }
    this.emitter.emit('disconnected');
  }

  async send(message) {
    if (typeof this.transport.send === 'function') {
      await this.transport.send(message);
    }
  }

  on(event, callback) {
    return this.emitter.on(event, callback);
  }

  off(event, callback) {
    this.emitter.off(event, callback);
  }

  dispatch(event, payload) {
    this.emitter.emit(event, payload);
  }
}
