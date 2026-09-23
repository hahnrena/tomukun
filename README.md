# Tomukun

Website for Tomukun Korean BBQ & Noodle Bar (Ann Arbor, MI). See [CLAUDE.md](CLAUDE.md) for
the full project brief and [PLACEHOLDERS.md](PLACEHOLDERS.md) for what still needs real
content before launch.

## Stack
Next.js (Pages Router) + styled-components + Redux Toolkit on the frontend; a standalone
Express API for the contact form.

## Getting started

Install dependencies:

```bash
npm install
```

Run both the Next.js app and the Express API (two terminals):

```bash
npm run dev      # Next.js on http://localhost:3000
npm run server   # Express API on http://localhost:4001
```

The contact form (`/contact`) posts to the Express API. If `NEXT_PUBLIC_API_URL` isn't
set, it defaults to `http://localhost:4001`.

## Project structure
- `pages/` — Home, Korean BBQ, Noodle Bar, About, Contact
- `components/` — shared UI (Nav, Footer, Hero, ConceptTile, MenuSection, ReservationWidget, ContactForm, etc.)
- `data/` — `site.js` (hours, address, social, reservation config) and `menus/*.json` (placeholder menu data)
- `styles/theme.js` — single source of truth for colors and fonts
- `store/` — Redux Toolkit store
- `server/` — Express API (contact form endpoint)
