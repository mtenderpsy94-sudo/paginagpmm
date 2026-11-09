// UI strings for shared components (header, footer, form, banners) in each language.
// The English site lives at "/", the Spanish one at "/espanol".

export type Lang = 'en' | 'es';

export const homePath: Record<Lang, string> = { en: '/', es: '/espanol' };

export const ui = {
  en: {
    homeAria: 'Ender Muñoz, home',
    title: 'Growth Systems Architect',
    cta: 'Book an interview',
    switchLabel: 'ES',
    switchAria: 'Ver en español',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    footerBlurb: 'Full-Stack Marketeer & Growth Hacker. I build measurable sales systems that turn traffic into revenue.',
    footerServices: 'Services',
    footerExplore: 'Explore',
    footerContact: 'Contact',
    myApproach: 'My approach',
    privacy: 'Privacy policy',
    terms: 'Terms',
    cookies: 'Cookie policy',
    rights: 'All rights reserved.',
    whatsappAria: 'Chat with Ender on WhatsApp',
    whatsappMessage:
      "Hi Ender! I found your portfolio and I'd like to talk about a role on our growth team. When would you be available for a quick call?",
    cookieText: 'We use essential cookies to run this site. With your consent we also use analytics to improve it. See our',
    cookieLink: 'cookie policy',
    cookieAria: 'Cookie consent',
    reject: 'Reject',
    accept: 'Accept',
    learnMore: 'Learn more',
    funnelAria: 'Funnel flow',
  },
  es: {
    homeAria: 'Ender Muñoz, inicio',
    title: 'Growth Systems Architect',
    cta: 'Auditoría gratis',
    switchLabel: 'EN',
    switchAria: 'View in English',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    footerBlurb: 'Full-Stack Marketeer & Growth Hacker. Construyo sistemas de venta medibles que convierten tráfico en ingresos.',
    footerServices: 'Servicios',
    footerExplore: 'Explorar',
    footerContact: 'Contacto',
    myApproach: 'Mi enfoque',
    privacy: 'Política de privacidad',
    terms: 'Términos',
    cookies: 'Política de cookies',
    rights: 'Todos los derechos reservados.',
    whatsappAria: 'Escríbele a Ender por WhatsApp',
    whatsappMessage:
      '¡Hola Ender! Vi tu página y me gustaría hablar contigo sobre cómo hacer crecer mi negocio. ¿Cuándo tendrías disponibilidad para una llamada?',
    cookieText: 'Usamos cookies esenciales para que el sitio funcione. Con tu consentimiento también usamos analítica para mejorarlo. Consulta nuestra',
    cookieLink: 'política de cookies',
    cookieAria: 'Consentimiento de cookies',
    reject: 'Rechazar',
    accept: 'Aceptar',
    learnMore: 'Más info (en inglés)',
    funnelAria: 'Flujo del embudo',
  },
} as const;

// Spanish names and one-line benefits for the service cards, keyed by slug.
export const servicesEs: Record<string, { name: string; benefit: string }> = {
  'sales-funnels': { name: 'Embudos de venta', benefit: 'Landing, checkout, upsell y emails trabajando como un solo sistema de ventas.' },
  'sales-copywriting': { name: 'Copywriting de ventas', benefit: 'Palabras que convierten lectores en compradores, en cada página y cada email.' },
  'checkout-pages': { name: 'Páginas de checkout', benefit: 'Checkouts con Stripe y Mollie diseñados para subir el ticket promedio.' },
  'websites-landing-pages': { name: 'Webs y landing pages', benefit: 'Sitios y landing pages rápidos, enfocados en convertir.' },
  'meta-ads': { name: 'Meta Ads', benefit: 'Anuncios en Facebook e Instagram pensados para crecer con rentabilidad medible.' },
  'social-growth-strategy': { name: 'Estrategia de crecimiento en redes', benefit: 'Un sistema de contenido que hace crecer tu audiencia y tus ventas.' },
  'ecommerce-growth': { name: 'Crecimiento e-commerce', benefit: 'Ads, email y CRO funcionando como un solo motor de crecimiento para tu tienda.' },
};
