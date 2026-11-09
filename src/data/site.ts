// Central data for the whole site. Change things here, not in the pages.

// Toggle to true when you decide to publish prices.
export const SHOW_PRICES = false;

export const site = {
  name: 'Ender Muñoz',
  domain: 'gpmm.site',
  url: 'https://gpmm.site',

  // Short positioning line. [TODO: confirm final wording]
  tagline: 'Full-Stack Marketeer & Growth Hacker',
  title: 'Growth Systems Architect',

  founder: 'Ender Muñoz',
  location: 'Netherlands',

  email: 'support@gpmm.site',

  // Web3Forms access key (https://web3forms.com): contact form submissions are emailed to
  // the address the key was created with. It's a public key, safe to keep in the page.
  web3formsKey: '', // [TODO: paste the key from web3forms.com]

  whatsapp: {
    display: '+31 6 31 06 33 03',
    intl: '31631063303', // used in https://wa.me/<intl>
    message:
      "Hi Ender! I found your portfolio and I'd like to talk about a role on our growth team. When would you be available for a quick call?",
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
