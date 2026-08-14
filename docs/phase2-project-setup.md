# Phase 2: Project Setup

## 1. What was created

A working Vite + React + TypeScript project, with Tailwind CSS, React Router,
Lucide icons, Framer Motion, and the Supabase client library installed — plus
the full scalable folder structure from your spec, wired up with a routing
shell so every planned page already exists (as a placeholder) and the site
navigates end-to-end.

**The project builds clean right now** — `npm run build` passes with zero
TypeScript errors (verified in this environment).

## 2. Why each dependency was added

| Package | Why |
|---|---|
| `react`, `react-dom` | Core framework, as specified. |
| `typescript`, `vite`, `@vitejs/plugin-react` | Build tooling — fast dev server, typed codebase. |
| `react-router-dom` | Client-side routing for every public page, user page, and `/admin/*` route. |
| `tailwindcss`, `@tailwindcss/vite` | Utility-first styling. Using Tailwind v4's official Vite plugin means no separate PostCSS config file and faster builds — theme tokens (brand colors) live directly in `src/index.css` via `@theme`. |
| `lucide-react` | Icon set used across the nav, admin sidebar, property cards, etc. |
| `framer-motion` | Subtle animations per your brand guidance ("avoid excessive animations, use subtle Framer Motion"). Not used yet — wired in when the homepage/property cards are built. |
| `@supabase/supabase-js` | The Supabase client SDK. Installed now so Phase 3 can go straight to configuration; not initialized yet — there's no `.env` to point it at until you create a Supabase project. |
| `oxlint` (kept from the Vite scaffold) | Fast linter, included by default in the current Vite React-TS template. Can be swapped for ESLint later if you prefer — flag it if so. |

No backend framework was added — per the spec, Supabase *is* the backend.

## 3. Folder structure

```
nataka-property-group/
├── .env.example
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── public/
├── docs/
│   ├── phase1-architecture.md
│   └── phase2-project-setup.md
├── supabase/
│   └── migrations/
│       └── 0001_initial_schema.sql
└── src/
    ├── main.tsx              # app entry, mounts <App/> inside <BrowserRouter>
    ├── App.tsx                # all route definitions
    ├── index.css              # Tailwind import + brand @theme tokens
    ├── components/
    │   ├── layout/             # Navbar, Footer (shared chrome)
    │   ├── ui/                 # generic reusable UI (PagePlaceholder for now)
    │   └── property/           # property-specific display components (Phase 6/7)
    ├── layouts/
    │   ├── MainLayout.tsx      # public site shell (Navbar + Footer + <Outlet/>)
    │   └── AdminLayout.tsx     # admin shell (sidebar nav + <Outlet/>)
    ├── pages/                  # one file per route, public + user account pages
    │   └── admin/
    │       └── Dashboard.tsx
    ├── features/                # business logic grouped by domain, built out phase by phase
    │   ├── properties/
    │   ├── enquiries/
    │   ├── viewings/
    │   ├── auth/
    │   └── admin/
    ├── hooks/                   # shared React hooks (e.g. useAuth, useFavorites — later)
    ├── lib/                     # Supabase client + other singletons (Phase 3)
    ├── services/                # data-access functions (e.g. getProperties(), createEnquiry())
    ├── types/                   # shared TypeScript types (mirrors the DB schema)
    └── utils/                   # formatting, slugify, currency helpers, etc.
```

`components/`, `features/`, `hooks/`, `lib/`, `services/`, `types/`, and
`utils/` mostly contain `.gitkeep` placeholders right now — they'll fill in
as each phase touches that domain, keeping business logic out of page
components as you asked.

## 4. Routing

Every page from your spec has a route and a placeholder component that
renders "Coming in Phase N" so the site is fully clickable today:

- `/` , `/properties`, `/properties/:slug`, `/property-management`, `/sell`,
  `/areas`, `/about`, `/contact`, `/login`, `/register`, `/favorites`,
  `/my-enquiries`, `/my-viewings`, `/profile`, and a catch-all `*` → 404 —
  all rendered inside `MainLayout` (shared Navbar/Footer).
- `/admin` (index) — rendered inside `AdminLayout` (separate sidebar shell,
  no public navbar/footer). More `/admin/*` routes are added as each admin
  section is built in Phases 12–14.
- `/properties/:slug` is already parameterized for the SEO-friendly URL
  pattern (`/properties/luxury-beach-villa-diani`) — the actual data lookup
  is built in Phase 7.

Auth/role protection (redirecting logged-out users away from `/favorites`,
`/profile`, etc., and non-admins away from `/admin`) is intentionally **not**
in place yet — that's Phase 4 (auth) and Phase 12 (admin), once there's a
real session to check against.

## 5. Branding

`src/index.css` defines the brand palette as Tailwind v4 theme tokens, so
they're usable immediately as utility classes — `bg-teal-600`,
`text-charcoal-800`, `bg-sand-100`, `text-gold-500`, etc. — without a
separate `tailwind.config.js` color block:

- **teal** (50–900) — deep teal, primary brand color
- **charcoal** (50–900) — dark charcoal, text and dark sections
- **sand** (50–400) — warm sand, backgrounds/neutrals
- **gold** (400–600) — gold/amber accent

Two font families are declared (`--font-sans` for body text, `--font-heading`
serif for headings) — currently falling back to system fonts. Swap in real
webfonts (e.g. via `@fontsource` or a `<link>` in `index.html`) whenever you
pick the actual typefaces.

## 6. Where these files belong

Everything under `nataka-property-group/` is the project root — unzip/copy
it wherever you want to `git init` and start committing.

## 7. Commands to run

```bash
cd nataka-property-group
npm install
npm run dev        # starts the dev server (Vite prints the local URL)
```

To confirm the production build still passes on your machine:

```bash
npm run build
```

## 8. What to test

- `npm run dev`, then click through the Navbar links (desktop) and the
  hamburger menu (resize the browser to mobile width) — every link should
  navigate without a blank screen or console error.
- Visit a nonsense URL, e.g. `/does-not-exist` — should render the 404 page.
- Visit `/admin` — should render the dark sidebar shell with all nine nav
  items, separate from the public site's Navbar/Footer.
- Visit `/properties/anything-here` — should render the Property Details
  placeholder (confirms the `:slug` param route works).
- `npm run build` — should complete with no TypeScript errors.

## 9. Next: Phase 3

Phase 3 will configure the actual Supabase project: environment variables,
the typed Supabase client in `src/lib/`, and confirming a live connection —
using the schema from Phase 1.
