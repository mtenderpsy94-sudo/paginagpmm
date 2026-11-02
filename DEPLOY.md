# Deploying gpmm.site

The site is a static Astro build. Recommended host: **Netlify** (because the
funnel-audit form uses Netlify Forms — no backend needed).

## Option A — Netlify + GitHub (recommended, auto-deploys on every push)

1. Go to <https://app.netlify.com> and log in (you can sign in with GitHub).
2. **Add new site → Import an existing project → Deploy with GitHub.**
3. Authorize Netlify and pick the repo `mtenderpsy94-sudo/paginagpmm`.
4. Netlify reads `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `dist`
   Click **Deploy**. First build gives a URL like `something.netlify.app`.
5. **Turn on form submissions:** Netlify auto-detects the form on deploy.
   Open **Site → Forms** and you'll see `free-funnel-audit`. Go to
   **Forms → Form notifications → Add notification → Email notification** and
   enter an email you control, so every submission reaches you.
6. **Connect the domain:** **Site configuration → Domain management → Add a
   domain → `gpmm.site`.** Then either:
   - Point your registrar's **nameservers** to Netlify (easiest), or
   - Keep your DNS and add the records Netlify shows (A/ALIAS for `gpmm.site`,
     CNAME for `www`).
   Netlify issues HTTPS automatically once DNS resolves.

Every `git push` to `main` now redeploys the site.

## Option B — Vercel

1. <https://vercel.com> → **Add New → Project** → import `paginagpmm`.
2. Framework preset **Astro** is auto-detected (build `npm run build`, output
   `dist`). Click **Deploy**.
3. Add `gpmm.site` under **Project → Settings → Domains** and follow the DNS steps.

> ⚠️ Vercel has no Netlify Forms. On Vercel the audit form won't receive
> submissions until it's switched to **Formspree** (free). Tell me and I'll make
> that change (needs a Formspree account + form endpoint).

## Before going fully live — checklist

- [ ] Create your **@gpmm.site email**, then it goes into the footer + legal pages.
- [ ] Add **Instagram / LinkedIn** URLs (the social icons switch on automatically).
- [ ] Fill your **story, bio and photo** on the About page (`[TODO]` markers).
- [ ] Have the **legal pages** reviewed by a professional and complete the `[TODO]`s.
- [ ] (Recommended) Replace `public/og/default.svg` with a **1200×630 PNG** for
      best link previews on WhatsApp/LinkedIn.
- [ ] Decide on **prices**: give me the numbers and I switch `SHOW_PRICES` on.

## Local development

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # production build into dist/
```

Note: this project pins `rollup` to its WASM build (see `overrides` in
`package.json`) so the toolchain runs on machines with Windows Smart App Control.
It builds fine on Netlify/Vercel (Linux) too.
