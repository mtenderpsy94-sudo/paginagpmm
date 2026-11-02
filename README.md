# GPMM website

Marketing / funnel agency site for **gpmm.site**. Built with [Astro](https://astro.build) — static HTML, zero JS by default, English content.

## Commands

| Command           | Action                                      |
| ----------------- | ------------------------------------------- |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Local dev server at `localhost:4321`        |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the production build locally        |

## Structure

- `src/data/site.ts` — all brand data (contact, KvK, BTW, socials) + the `SHOW_PRICES` flag.
- `src/data/services.ts` — content for the 7 service pages.
- `src/layouts/` — shared page shell (head, SEO, header, footer).
- `src/components/` — header, mega-menu, footer, forms, cards, etc.
- `src/pages/` — one file per route.
- `src/styles/` — design tokens (colors, fonts) and global styles.

## Status

- [x] Phase 0 — scaffold + GitHub
- [ ] Phase 1 — design system, header, footer, home
- [ ] Phase 2 — 7 service pages
- [ ] Phase 3 — approach, about, free audit, legal, 404
- [ ] Phase 4 — SEO, accessibility, performance, final review
