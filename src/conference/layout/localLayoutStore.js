const STORAGE_PREFIX = 'conference:bubble-layout:';
const LAYOUT_VERSION = 1;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const normalizeLayoutItem = (item, bounds, fallbackSize = 140) => {
  const size = clamp(Number(item?.size) || fallbackSize, 96, Math.min(bounds.width, bounds.height));
  const maxX = Math.max(0, bounds.width - size);
  const maxY = Math.max(0, bounds.height - size);

  return {
    x: clamp(Number(item?.x) || 0, 0, maxX),
    y: clamp(Number(item?.y) || 0, 0, maxY),
    size,
    z: Number(item?.z) || 1,
  };
};

const getDefaultPosition = (index, total, bounds, isMobile, size) => {
  if (isMobile) {
    const horizontalMargin = 16;
    const verticalMargin = 56;
    const safeWidth = Math.max(0, bounds.width - size - horizontalMargin * 2);
    const safeHeight = Math.max(0, bounds.height - size - verticalMargin * 2);
    const columns = Math.min(2, Math.max(1, total));
    const rows = Math.ceil(total / columns);
    const column = index % columns;
    const row = Math.floor(index / columns);
    const stepX = columns > 1 ? safeWidth : 0;
    const stepY = rows > 1 ? safeHeight / Math.max(1, rows - 1) : 0;

    return {
      x: horizontalMargin + column * stepX,
      y: verticalMargin + row * stepY,
    };
  }

  const margin = 32;
  const gap = 20;
  const x = Math.max(0, bounds.width - size - margin);
  const y = margin + index * (size + gap);
  const maxY = Math.max(0, bounds.height - size - margin);

  return { x, y: clamp(y, margin, maxY) };
};

export const getLayoutStorageKey = (roomId, userId) => `${STORAGE_PREFIX}${roomId}:${userId}`;

export const loadLocalLayout = ({ roomId, userId, participants, bounds, isMobile }) => {
  if (!roomId || !userId || !bounds?.width || !bounds?.height) {
    return null;
  }

  const storageKey = getLayoutStorageKey(roomId, userId);
  const fallbackSize = isMobile ? 92 : 140;

  let parsed = null;
  try {
    parsed = JSON.parse(window.localStorage.getItem(storageKey) || 'null');
  } catch {
    parsed = null;
  }

  const items = {};
  participants.forEach((participant, index) => {
    const baseSize = isMobile ? 88 : fallbackSize;
    const position = getDefaultPosition(index, participants.length, bounds, isMobile, baseSize);
    const defaultItem = {
      x: position.x,
      y: position.y,
      size: baseSize,
      z: index + 1,
    };

    const storedItem = parsed?.version === LAYOUT_VERSION ? parsed?.items?.[participant.id] : null;
    items[participant.id] = normalizeLayoutItem(storedItem || defaultItem, bounds, baseSize);
  });

  return {
    version: LAYOUT_VERSION,
    items,
  };
};

export const saveLocalLayout = ({ roomId, userId, layout }) => {
  if (!roomId || !userId || !layout) {
    return;
  }

  const storageKey = getLayoutStorageKey(roomId, userId);
  window.localStorage.setItem(storageKey, JSON.stringify({
    version: LAYOUT_VERSION,
    items: layout,
  }));
};

export const constrainBubbleToBounds = ({ x, y, size }, bounds) => {
  const constrainedSize = clamp(size, 72, Math.min(bounds.width, bounds.height));
  return normalizeLayoutItem({ x, y, size: constrainedSize }, bounds, constrainedSize);
};

export const getMobileSnapPosition = ({ x, y, size }, bounds) => {
  const midX = bounds.width / 2;
  const midY = bounds.height / 2;

  const snapX = x + size / 2 < midX ? 12 : Math.max(12, bounds.width - size - 12);
  const snapY = y + size / 2 < midY ? 52 : Math.max(52, bounds.height - size - 24);

  return constrainBubbleToBounds({ x: snapX, y: snapY, size }, bounds);
};
