export const templates = [
  {
    id: 'slide-deck',
    title: 'Slide Deck Template',
    description: 'A 1920×1080, keyboard + swipe navigable case study deck.',
    loader: () => import('../templates/SlideDeckTemplatePage.jsx'),
  },
];

export const caseStudies = [
  {
    id: 'hebbia-matrix-os',
    title: 'Hebbia // Matrix_OS v3.5',
    description: 'Existing deck, now hosted as a case study within the site.',
    loader: () => import('../case-studies/hebbia/HebbiaCaseStudy.jsx'),
  },
];

