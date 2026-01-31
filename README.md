## Case Study Library Website (React + Vite)

This repo is a **multi-page website** that hosts multiple **case studies** and **templates**. The original slide-deck app has been preserved as the first case study and is now selectable from the library home page.

### Local development

```bash
npm install
npm run dev
```

### Navigation model

- **Library home**: `#/`
- **Case study route**: `#/case-studies/<id>`
- **Template route**: `#/templates/<id>`
- **Deep linking to a slide** (supported by slide decks): `?slide=<n>` (1-based)

This site uses a hash-based router so it can be hosted as static files without server rewrite configuration.

### Adding a new case study (recommended workflow)

1) Create a new folder:
- `src/case-studies/<your-id>/`

2) Add a default-exported component that renders the deck template:
- Use `src/templates/SlideDeck.jsx`
- Example reference: `src/case-studies/hebbia/HebbiaCaseStudy.jsx`

3) Register it so it appears in the library UI:
- Edit `src/site/registry.js` and add to `caseStudies`

### Adding a new template

1) Create a template page component under `src/templates/`
2) Register it in `src/site/registry.js` under `templates`

### Notes on structure

- **Registry-driven UI**: The home page is data-driven from `src/site/registry.js` so new entries automatically show up.
- **Reusable deck engine**: `src/templates/SlideDeck.jsx` provides viewport scaling, keyboard + swipe navigation, transitions, and a header slot.
