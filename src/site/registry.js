export const templates = [
  {
    id: 'slide-deck',
    title: 'Slide Deck Template',
    description: 'A 1920×1080, keyboard + swipe navigable case study deck.',
    loader: () => import('../templates/SlideDeckTemplatePage.jsx'),
  },
  {
    id: 'starter-deck',
    title: 'Starter Deck (copy-me)',
    description: 'A minimal 3-slide deck with shareable ?slide= deep links.',
    loader: () => import('../templates/StarterDeckTemplate.jsx'),
  },
  {
    id: 'credit-investing-deck',
    title: 'AI for Credit Investing (deck)',
    description: 'Concept deck template for the AI-for-credit-investing solution page.',
    loader: () => import('../templates/CreditInvestingDeckTemplate.jsx'),
  },
];

export const caseStudies = [
  {
    id: 'hebbia-matrix-os',
    title: 'Hebbia // Matrix_OS v3.5',
    description: 'Existing deck, now hosted as a case study within the site.',
    loader: () => import('../case-studies/hebbia/HebbiaCaseStudy.jsx'),
  },
  {
    id: 'acme-example',
    title: 'Acme Corp (Example)',
    description: 'Placeholder case study demonstrating how to add more entries.',
    loader: () => import('../case-studies/example/ExampleCaseStudy.jsx'),
  },
];

