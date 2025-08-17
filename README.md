# Frontend Assignment

This project contains two reusable React components built with TypeScript and TailwindCSS, documented with Storybook.

## Components
- **InputField**: Flexible input with validation, variants, sizes, optional clear button, and password toggle.
- **DataTable**: Table with sorting, row selection, loading and empty states.

## Tech Stack
- React
- TypeScript
- TailwindCSS
- Storybook

## Setup Instructions
```bash
npm install
npm run storybook
```

## Deployment
- Use **Chromatic**: `npx chromatic --project-token=<your-token>`
- Or deploy static build on Vercel: 
```bash
npm run build-storybook
vercel ./storybook-static
```

## Folder Structure
```
src/components/
  InputField/
    InputField.tsx
    InputField.stories.tsx
  DataTable/
    DataTable.tsx
    DataTable.stories.tsx
```

## Notes
- Accessible with ARIA-friendly markup
- Responsive with Tailwind utilities
- Best practices: keep components small, reusable, and documented
