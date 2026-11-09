# Deploying gpmm.site

The site is a static Astro build hosted on **Cloudflare Pages** (free, auto-deploys
on every push to `main`). The contact forms send through **Web3Forms** (free), which
emails each submission to you. Security headers live in `public/_headers`.

## 1. Web3Forms (contact forms)

1. Go to <https://web3forms.com>, enter the email where you want submissions,
   and copy the **Access Key** it sends you.
2. Paste it into `src/data/site.ts` → `web3formsKey`, commit and push.
   Both forms (English and Spanish) use it; the email subject says which one.

## 2. Cloudflare Pages (hosting)

1. Sign up at <https://dash.cloudflare.com> → **Workers & Pages → Create →
   Pages → Connect to Git**, and pick the repo `mtenderpsy94-sudo/paginagpmm`.
2. Build settings: framework preset **Astro**, build command `npm run build`,
   output directory `dist`. Under environment variables add `NODE_VERSION` = `22`.
3. **Save and Deploy.** You get a URL like `paginagpmm.pages.dev`; check it.

## 3. Point gpmm.site to Cloudflare (DNS at Hostinger)

1. In the Cloudflare Pages project: **Custom domains → Set up a custom domain**,
   add `gpmm.site` (and `www.gpmm.site`). Cloudflare shows the DNS records to use.
2. In Hostinger → **Domains → gpmm.site → DNS / Nameservers**, replace the
   current records for `@` and `www` (the ones pointing to Netlify) with the
   ones Cloudflare shows. The site stays up on Netlify until DNS switches over.
3. When Cloudflare shows the domain as **Active**, the move is done. You can
   then delete the site from Netlify.

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
It builds fine on Cloudflare Pages (Linux) too.
