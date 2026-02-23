# Semantic Matter - Corporate SPA

Enterprise-grade marketing and product showcase for Semantic Matter, built with Next.js 14, App Router, Tailwind CSS, and Framer Motion.

## Prerequisites

- Node.js 18.17.0 or later
- npm or pnpm

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Optional environment setup:

   Create `.env.local` from `.env.example` if you need external endpoints for demo/contact integrations.

3. Run the development server:

   ```bash
   npm run dev
   ```

Open `http://localhost:3000` to view the app.

## Architecture Notes

- Styling: Tailwind CSS is used across the app.
- Animations: Framer Motion powers subtle page and nav transitions.
- Visualizations: The hero graph (`components/visualizations/HeroGraph.tsx`) is client-only to avoid hydration mismatches.

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  products/
  use-cases/
  developers/
  learn/
components/
  layout/
  ui/
  visualizations/
lib/
  utils.ts
```
