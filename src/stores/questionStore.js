const STORAGE_PREFIX = 'qa:';

const MOCK_RESPONSES = {
  intro: [
    'Stedi is the only programmable healthcare clearinghouse. We offer modern, AI-ready APIs for eligibility checks, claims, transaction enrollment, and more. Connect to 3,400+ medical and dental payers.',
    'The revenue cycle is how healthcare providers get paid. When it slows down, the provider\'s cash flow dries up. Most of the revenue cycle is spent waiting. Stedi automates the critical path.',
  ],
  product: [
    'Stedi\'s APIs translate your JSON requests to X12 EDI format and route them to payers automatically. Real-time eligibility checks typically return results in 1-3 seconds. No EDI expertise required.',
    'The Stedi Payer Network maps all of a payer\'s commonly used names and IDs to a single stable record. Stedi automatically uses the required ID for each payer on the backend. No stale CSVs or manual mapping.',
    'The Stedi MCP server gives AI agents plug-and-play access to Stedi\'s Real-Time Eligibility and Search Payers API endpoints, along with built-in guidance for common errors.',
  ],
  value: [
    'Automating eligibility checks alone saves 6-8 minutes per verification. At scale, that translates to hundreds of thousands in annual savings. Automating parts of the revenue cycle can cut 10-20 days off the typical 30-60 day cycle.',
    'Getting started takes less than a day. Create an account, get API keys, send your first eligibility check — all within hours. Test keys let you send mock requests and receive realistic responses before going live.',
    'Stedi supports real-time eligibility for 1,100+ payers, claims for 2,700+, claim status for 300+, and ERAs for 1,800+. 850+ payers support one-click transaction enrollment.',
  ],
  risks: [
    'Unlike legacy clearinghouses, Stedi offers JSON-native APIs, programmatic payer lists, and no long-term contracts. Unlike point solutions, we offer the full transaction suite: eligibility, claims, ERAs, claim status, and attachments.',
    'Stedi is HIPAA compliant. We offer BAAs to all customers. API keys are role-based. Idempotency keys prevent duplicate claims. We maintain backwards compatibility across API versions.',
  ],
};

const getResponseCategory = (slideIndex) => {
  if (slideIndex <= 3) return 'intro';
  if (slideIndex <= 8) return 'product';
  if (slideIndex <= 12) return 'value';
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
