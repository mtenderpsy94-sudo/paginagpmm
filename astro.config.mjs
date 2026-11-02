import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GPMM — static site, zero JS by default. Deploys to Netlify/Vercel.
export default defineConfig({
  site: 'https://gpmm.site',
  integrations: [sitemap()],
});
