import type { IconName } from '../icons';

export interface Service {
  slug: string;
  name: string;
  icon: IconName;
  benefit: string;       // one line, used on cards
  menuBlurb: string;     // short line for the mega-menu
  subservices: string[]; // shown in mega-menu + service page
}

export const services: Service[] = [
  {
    slug: 'sales-funnels',
    name: 'Sales Funnels',
    icon: 'filter',
    benefit: 'Landing, checkout, upsell and emails working as one selling system.',
    menuBlurb: 'End-to-end funnels that sell on autopilot.',
    subservices: ['Basic funnel (landing + thank-you + 3–5 emails)', 'Complete funnel (strategy, copy, design, sales page, checkout, upsell, 10 emails, tracking)', 'Launches / VSL / webinar', 'Monthly optimization (A/B tests)'],
  },
  {
    slug: 'sales-copywriting',
    name: 'Sales Copywriting',
    icon: 'pen',
    benefit: 'Words that turn readers into buyers — across every page and email.',
    menuBlurb: 'Persuasive copy that does the selling.',
    subservices: ['Long-form sales pages', 'Landing pages', 'Email sequences', 'Automated flows (abandoned cart, reactivation)', 'Ad copy', 'VSL scripts'],
  },
  {
    slug: 'checkout-pages',
    name: 'Checkout Pages',
    icon: 'cart',
    benefit: 'Stripe & Mollie checkouts (iDEAL) built to lift average order value.',
    menuBlurb: 'Checkouts that convert and upsell.',
    subservices: ['Checkout with Stripe / Mollie (iDEAL included)', 'Order bumps', 'Upsell / downsell', 'Checkout optimization'],
  },
  {
    slug: 'websites-landing-pages',
    name: 'Websites & Landing Pages',
    icon: 'layout',
    benefit: 'Fast, conversion-focused sites and landing pages.',
    menuBlurb: 'Sites built to convert, not just to look good.',
    subservices: ['Landing pages', 'Sales pages', '5–8 page websites', 'Online stores (Shopify / WooCommerce)', 'Maintenance'],
  },
  {
    slug: 'meta-ads',
    name: 'Meta Ads',
    icon: 'target',
    benefit: 'Facebook & Instagram ads engineered for tracked, profitable growth.',
    menuBlurb: 'Paid traffic that pays for itself.',
    subservices: ['Setup (Pixel, Conversions API, structure, audiences)', 'Monthly management', 'Creatives & UGC video'],
  },
  {
    slug: 'social-growth-strategy',
    name: 'Social Growth Strategy',
    icon: 'trending-up',
    benefit: 'A content system that grows your audience and your pipeline.',
    menuBlurb: 'Content that compounds into clients.',
    subservices: ['Strategy session', '3–6 month content plan', 'Social media management', 'Community management'],
  },
  {
    slug: 'ecommerce-growth',
    name: 'E-commerce Growth',
    icon: 'shopping-bag',
    benefit: 'Ads, email and CRO run as one growth engine for your store.',
    menuBlurb: 'A full growth engine for your store.',
    subservices: ['Growth retainer (ads + email + CRO as one system)', 'Email marketing', 'CRO (conversion rate optimization)', 'Google Ads'],
  },
];

export const serviceBudgets = [
  '< €1,000',
  '€1,000 – 2,500',
  '€2,500 – 5,000',
  '€5,000+',
  'Not sure yet',
];
