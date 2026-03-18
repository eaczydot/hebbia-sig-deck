const STORAGE_PREFIX = 'qa:';

const MOCK_RESPONSES = {
  intro: [
    'This deck covers our strategic rationale for adopting Hebbia as an AI-powered document analysis platform. The executive summary outlines the key value drivers and expected ROI.',
    'The strategic context section addresses current market pressures and how AI-driven document intelligence fits into our broader technology modernization initiative.',
  ],
  product: [
    'Hebbia\'s reasoning engine uses a multi-step approach to analyze documents — it breaks complex queries into sub-tasks, retrieves relevant passages, and synthesizes structured answers with citations.',
    'The security architecture includes SOC 2 Type II compliance, end-to-end encryption, and on-premise deployment options. Data never leaves your VPC.',
    'The integration section covers API connectivity with existing systems including your document management platform, compliance tools, and internal knowledge bases.',
  ],
  value: [
    'Our ROI analysis projects a 3.2x return within the first 18 months, driven primarily by analyst time savings and faster deal execution.',
    'The pilot plan proposes a 90-day phased rollout starting with the trading desk, followed by quant research, then legal review workflows.',
    'Capacity modeling shows each analyst can process approximately 4x more documents per day with Hebbia, without sacrificing depth of analysis.',
  ],
  risks: [
    'The competitive landscape slide compares Hebbia against alternatives including Kira Systems, Luminance, and general-purpose LLM tools. Key differentiators are domain specificity and auditability.',
    'Risk mitigation strategies include a phased rollout with clear success metrics at each gate, fallback to manual processes, and a dedicated vendor management review.',
  ],
};

const getResponseCategory = (slideIndex) => {
  if (slideIndex <= 5) return 'intro';
  if (slideIndex <= 13) return 'product';
  if (slideIndex <= 18) return 'value';
  return 'risks';
};

export const generateMockResponse = (slideIndex, questionText) => {
  const category = getResponseCategory(slideIndex);
  const responses = MOCK_RESPONSES[category];
  // Pick a response based on question length as a simple hash
  const idx = questionText.length % responses.length;
  return responses[idx];
};

const getStorageKey = (deckId) => `${STORAGE_PREFIX}${deckId}`;

export const loadQuestions = (deckId) => {
  try {
    const raw = window.localStorage.getItem(getStorageKey(deckId));
    if (!raw) return [];
    const data = JSON.parse(raw);
    return Array.isArray(data.questions) ? data.questions : [];
  } catch {
    return [];
  }
};

export const saveQuestion = (deckId, question) => {
  const questions = loadQuestions(deckId);
  questions.push(question);
  window.localStorage.setItem(getStorageKey(deckId), JSON.stringify({ questions }));
};

export const getQuestionsForSlide = (deckId, slideIndex) => {
  return loadQuestions(deckId).filter(q => q.slideIndex === slideIndex);
};

export const clearQuestions = (deckId) => {
  window.localStorage.removeItem(getStorageKey(deckId));
};
