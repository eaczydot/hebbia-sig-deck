const STORAGE_PREFIX = 'review:';

const getStorageKey = (meetingId) => `${STORAGE_PREFIX}${meetingId}`;

const getDefaultReview = (meetingId) => ({
  meetingId,
  transcript: null,
  summary: null,
  slideNotes: {},
  timestamps: {},
});

export const loadReview = (meetingId) => {
  try {
    const raw = window.localStorage.getItem(getStorageKey(meetingId));
    if (!raw) return getDefaultReview(meetingId);
    return { ...getDefaultReview(meetingId), ...JSON.parse(raw) };
  } catch {
    return getDefaultReview(meetingId);
  }
};

export const saveSlideNote = (meetingId, slideIndex, note) => {
  const review = loadReview(meetingId);
  review.slideNotes[slideIndex] = note;
  window.localStorage.setItem(getStorageKey(meetingId), JSON.stringify(review));
};

export const getSlideNote = (meetingId, slideIndex) => {
  const review = loadReview(meetingId);
  return review.slideNotes[slideIndex] || '';
};

export const getReviewSummary = (meetingId) => {
  const review = loadReview(meetingId);
  return review.summary || 'Meeting summary will appear here after AI processing.';
};
