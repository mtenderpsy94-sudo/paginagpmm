// Central data for the whole site. Change things here, not in the pages.

// Toggle to true when you decide to publish prices.
export const SHOW_PRICES = false;

export const site = {
  name: 'GPMM',
  domain: 'gpmm.site',
  url: 'https://gpmm.site',

  // Short positioning line. [TODO: confirm final wording]
  tagline: 'Funnel & growth agency for info-products, creators, coaches and e-commerce',

  founder: 'Ender Muñoz',
  location: 'Netherlands',

  email: 'support@gpmm.site',

  whatsapp: {
    display: '+31 6 31 06 33 03',
    intl: '31631063303', // used in https://wa.me/<intl>
    message: 'Hi GPMM',
  },

  legal: {
    kvk: '42003961',
    btw: 'NL494915158B01',
  },

  // Empty = not shown anywhere (no broken links). Fill when the accounts exist.
  socials: {
    instagram: '', // [TODO: not created yet]
    linkedin: '', // [TODO: not created yet]
  },
} as const;

export type Site = typeof site;
