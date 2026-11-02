import type { IconName } from '../icons';

export interface ServiceStep { title: string; body: string; }
export interface FAQItem { q: string; a: string; }

export interface Service {
  slug: string;
  name: string;
  icon: IconName;
  benefit: string;       // one line, used on cards
  menuBlurb: string;     // short line for the mega-menu
  hero: { title: string; subtitle: string };
  problem: string;
  includes: string[];
  deliverables: string[];
  process: ServiceStep[];
  forWho: string[];
  faq: FAQItem[];
  startingFrom: string;  // shown only when SHOW_PRICES is true
}

export const services: Service[] = [
  {
    slug: 'sales-funnels',
    name: 'Sales Funnels',
    icon: 'filter',
    benefit: 'Landing, checkout, upsell and emails working as one selling system.',
    menuBlurb: 'End-to-end funnels that sell on autopilot.',
    hero: {
      title: 'Sales funnels that turn clicks into customers',
      subtitle: 'A complete selling system — landing page, checkout, upsells and follow-up emails — built, connected and tracked from end to end.',
    },
    problem: "You're driving traffic, but it leaks. Visitors land, look around and leave; the few who buy never hear from you again. Without a connected funnel, every euro of ad spend works half as hard as it should.",
    includes: [
      'Basic funnel — landing page, thank-you page and a 3–5 email sequence',
      'Complete funnel — strategy, copy, design, sales page, checkout, upsell and a 10-email sequence with full tracking',
      'Launches — VSL and webinar funnels for product launches',
      'Monthly optimization — ongoing A/B testing and improvements',
    ],
    deliverables: [
      'A mapped funnel strategy tied to your offer',
      'Designed, written landing and sales pages',
      'A connected checkout with an upsell',
      'An email follow-up sequence',
      'Analytics and conversion tracking set up',
    ],
    process: [
      { title: 'Audit & strategy', body: 'We map your offer, audience and current funnel to design the right path to purchase.' },
      { title: 'Copy & design', body: 'We write and design every page and email around one clear message.' },
      { title: 'Build & connect', body: 'We build the pages, wire up checkout and emails, and set up tracking.' },
      { title: 'Test & optimize', body: 'We launch, watch the numbers and improve what converts.' },
    ],
    forWho: [
      'Info-product creators and course sellers',
      'Coaches and consultants with a clear offer',
      'E-commerce brands launching a new product',
      'Anyone spending on ads without a system behind them',
    ],
    faq: [
      { q: 'How long does a funnel take to build?', a: 'A basic funnel usually takes 1–2 weeks. A complete funnel with sales page, checkout and a full email sequence typically takes 3–5 weeks, depending on scope and how fast we get your inputs.' },
      { q: 'Do I need to have my offer finished first?', a: "A clear offer helps, but sharpening it is part of our job. If your offer isn't fully defined, we'll refine the positioning and pricing during the strategy step." },
      { q: 'What tools do you build funnels in?', a: 'We work with the stack that fits you — dedicated page builders, your website platform, or custom pages — and connect it to your email and payment tools.' },
      { q: 'Can you just optimize my existing funnel?', a: 'Yes. If you already have a funnel, we can audit it and run a monthly optimization program with A/B tests instead of rebuilding from scratch.' },
      { q: 'Do you write the copy too?', a: "Yes — strategy, copy and design are all included. You don't need to bring your own copywriter." },
    ],
    startingFrom: '[TODO: price]',
  },
  {
    slug: 'sales-copywriting',
    name: 'Sales Copywriting',
    icon: 'pen',
    benefit: 'Words that turn readers into buyers — across every page and email.',
    menuBlurb: 'Persuasive copy that does the selling.',
    hero: {
      title: 'Sales copy that does the selling',
      subtitle: 'Persuasive, structured copy for the pages and emails that make you money — from long-form sales pages to automated flows.',
    },
    problem: "Your product is good, but the words aren't carrying it. Pages describe features instead of selling outcomes, emails go unopened, and ads burn budget without a hook. Weak copy is the most expensive problem in marketing.",
    includes: [
      'Long-form sales pages',
      'Landing pages',
      'Email sequences — welcome, nurture and launch',
      'Automated flows — abandoned cart and reactivation',
      'Ad copy for Meta and Google',
      'VSL (video sales letter) scripts',
    ],
    deliverables: [
      'Research on your audience, offer and competitors',
      'Ready-to-publish copy in your brand voice',
      'A clear structure and hierarchy for each page',
      'Subject lines and variants for testing',
    ],
    process: [
      { title: 'Research', body: 'We dig into your audience, offer and objections before writing a word.' },
      { title: 'Angle & structure', body: 'We choose the core message and map the flow that leads to the sale.' },
      { title: 'Write', body: 'We write the full copy, built to be read and to convert.' },
      { title: 'Refine', body: 'One revision round to match your voice exactly.' },
    ],
    forWho: [
      'Businesses with a solid offer but weak pages',
      'Creators launching a course or product',
      'E-commerce brands scaling email and ads',
      "Anyone whose traffic doesn't convert",
    ],
    faq: [
      { q: 'Will the copy sound like me?', a: 'Yes. We study your voice and existing material, and a revision round makes sure it reads like you — not like a template.' },
      { q: 'Do you write in English only?', a: 'The site and our deliverables are in English. If you also need Dutch copy, tell us up front and we will scope it.' },
      { q: 'Can you work from a brief, or do we need a call?', a: 'Both work. We start with a questionnaire and, for bigger projects, a short call to get the positioning right.' },
      { q: 'How many revisions are included?', a: 'One structured revision round per piece is included. Larger changes in direction are scoped separately so expectations stay clear.' },
      { q: 'Do you also design the pages?', a: 'Copywriting delivers the words and structure. If you want design and build too, that is our Websites & Landing Pages and Sales Funnels services.' },
    ],
    startingFrom: '[TODO: price]',
  },
  {
    slug: 'checkout-pages',
    name: 'Checkout Pages',
    icon: 'cart',
    benefit: 'Stripe & Mollie checkouts (iDEAL) built to lift average order value.',
    menuBlurb: 'Checkouts that convert and upsell.',
    hero: {
      title: 'Checkouts that lift every order',
      subtitle: 'Stripe and Mollie checkouts with iDEAL, order bumps and upsells — built to increase average order value, not just take payment.',
    },
    problem: 'Most of the drop-off happens at the last step. A clunky checkout, no local payment methods and zero upsells mean you lose sales you already earned — and leave money on the table from the ones you keep.',
    includes: [
      'Checkout built with Stripe or Mollie (iDEAL included)',
      'Order bumps at the point of purchase',
      'One-click upsells and downsells',
      'Checkout optimization and testing',
    ],
    deliverables: [
      'A fast, trustworthy checkout page',
      'Local payment methods — iDEAL, cards and more',
      'Order bump and upsell flows',
      'Tracking on every step of the purchase',
    ],
    process: [
      { title: 'Map the flow', body: 'We design the path from cart to confirmation, including bumps and upsells.' },
      { title: 'Build & integrate', body: 'We build the checkout and connect Stripe or Mollie with iDEAL.' },
      { title: 'Add offers', body: 'We add order bumps and upsells that fit your products.' },
      { title: 'Optimize', body: 'We test layout, copy and offers to raise average order value.' },
    ],
    forWho: [
      'E-commerce stores selling in the Netherlands and Benelux',
      'Course and info-product sellers',
      'Anyone losing sales at the payment step',
      'Brands that want a higher average order value',
    ],
    faq: [
      { q: 'Why Stripe and Mollie?', a: 'Both are reliable and support the payment methods Dutch and Benelux customers expect. Mollie in particular makes iDEAL simple, which is essential for this market.' },
      { q: 'Is iDEAL really necessary?', a: 'For the Netherlands, yes. A large share of shoppers prefer iDEAL, and not offering it costs you conversions at checkout.' },
      { q: 'Will order bumps annoy my customers?', a: 'Done right, no. We add relevant, genuinely useful offers at the moment they fit — not random pop-ups.' },
      { q: 'Do you handle the payment provider setup?', a: 'We build and connect the checkout. You own the Stripe or Mollie account; we help you configure it correctly.' },
      { q: 'Can you improve my existing checkout?', a: "Yes — checkout optimization is a service on its own. We'll audit what you have and fix the weak points." },
    ],
    startingFrom: '[TODO: price]',
  },
  {
    slug: 'websites-landing-pages',
    name: 'Websites & Landing Pages',
    icon: 'layout',
    benefit: 'Fast, conversion-focused sites and landing pages.',
    menuBlurb: 'Sites built to convert, not just to look good.',
    hero: {
      title: 'Websites built to convert, not just to look good',
      subtitle: 'Landing pages, sales pages and full sites — fast, responsive and focused on turning visitors into customers.',
    },
    problem: "A pretty website that doesn't sell is just a brochure. Slow pages, unclear messaging and no obvious next step quietly cost you leads and sales every day.",
    includes: [
      'Landing pages',
      'Sales pages',
      '5–8 page business websites',
      'Online stores (Shopify / WooCommerce)',
      'Ongoing maintenance',
    ],
    deliverables: [
      'A fast, responsive, accessible site',
      'Conversion-focused layout and copy direction',
      'Clear calls to action on every page',
      'Basic SEO and analytics in place',
    ],
    process: [
      { title: 'Plan', body: 'We define the pages, structure and goals before touching design.' },
      { title: 'Design & write', body: 'We design and write each page around a clear action.' },
      { title: 'Build', body: 'We build it fast, responsive and accessible across devices.' },
      { title: 'Launch & support', body: 'We launch, check everything and offer ongoing maintenance.' },
    ],
    forWho: [
      'Businesses that need a site that actually sells',
      'Creators and coaches launching an offer',
      'E-commerce brands that need a store',
      'Anyone with a slow or outdated website',
    ],
    faq: [
      { q: 'Which platform will you build on?', a: 'It depends on your needs — a lightweight custom build for speed, or Shopify/WooCommerce for stores. We recommend the simplest option that fits.' },
      { q: 'Do you write the content?', a: 'We handle layout, design and conversion copy direction. For long-form sales copy, we pair this with our copywriting service.' },
      { q: 'Will the site be fast and mobile-friendly?', a: 'Yes. Speed, mobile-first design and accessibility are built in from the start, not added later.' },
      { q: 'Can you redesign my current site?', a: 'Yes. We can redesign and rebuild an existing site, keeping what works and fixing what does not.' },
      { q: 'Do you offer maintenance?', a: 'Yes — we offer ongoing maintenance so your site stays updated, secure and fast.' },
    ],
    startingFrom: '[TODO: price]',
  },
  {
    slug: 'meta-ads',
    name: 'Meta Ads',
    icon: 'target',
    benefit: 'Facebook & Instagram ads engineered for tracked, profitable growth.',
    menuBlurb: 'Paid traffic that pays for itself.',
    hero: {
      title: 'Meta ads engineered for profit',
      subtitle: 'Facebook and Instagram advertising with proper tracking, tested creative and a structure built to scale what works.',
    },
    problem: "Boosting posts and guessing at audiences burns budget. Without clean tracking, a sound account structure and creative that's actually tested, you can't tell what's working — so you can't scale it.",
    includes: [
      'Account setup — Pixel, Conversions API, campaign structure and audiences',
      'Monthly campaign management',
      'Creative and UGC (user-generated) video production',
    ],
    deliverables: [
      'A correctly tracked ad account (Pixel + Conversions API)',
      'A clear campaign and audience structure',
      'Tested ad creatives and copy',
      "Regular reporting on what's working",
    ],
    process: [
      { title: 'Setup & tracking', body: 'We install the Pixel and Conversions API and structure the account properly.' },
      { title: 'Creative', body: 'We produce and test ad creatives, including UGC-style video.' },
      { title: 'Launch & manage', body: 'We launch campaigns and manage them day to day.' },
      { title: 'Scale', body: "We double down on winners and cut what doesn't work." },
    ],
    forWho: [
      'E-commerce brands ready to scale',
      'Course and info-product sellers with a working funnel',
      'Coaches with an offer that converts',
      'Anyone wasting budget on unmanaged ads',
    ],
    faq: [
      { q: 'Is ad spend included in your fee?', a: 'No. Your advertising budget is paid directly to Meta and is separate from our management fee. We are transparent about both from the start.' },
      { q: 'How much ad budget do I need?', a: "It depends on your market and goals. We'll give you an honest minimum to test properly before scaling — and we won't take you on if ads can't work for you yet." },
      { q: 'Do I need a funnel before running ads?', a: "Usually yes. Ads bring traffic; a funnel converts it. If you don't have one, we'll build that first — ads into a leaky funnel waste money." },
      { q: 'Do you make the ad creatives?', a: 'Yes — we produce creatives and UGC-style video, and we test them. Strong creative is the biggest lever in Meta ads today.' },
      { q: 'Who owns the ad account?', a: 'You do. We work inside your Business Manager, so you keep full ownership and history.' },
    ],
    startingFrom: '[TODO: price]',
  },
  {
    slug: 'social-growth-strategy',
    name: 'Social Growth Strategy',
    icon: 'trending-up',
    benefit: 'A content system that grows your audience and your pipeline.',
    menuBlurb: 'Content that compounds into clients.',
    hero: {
      title: 'Content that grows your audience and your pipeline',
      subtitle: 'A clear content strategy and management system that builds an audience and feeds your funnel — not just your follower count.',
    },
    problem: 'Posting without a plan is exhausting and rarely pays off. Random content, no consistency and no link to your offer means attention that never turns into customers.',
    includes: [
      'Strategy session',
      'A 3–6 month content plan',
      'Social media management',
      'Community management',
    ],
    deliverables: [
      'A documented content strategy tied to your offer',
      'A content calendar for 3–6 months',
      'Managed posting and scheduling',
      'Engagement and community handling',
    ],
    process: [
      { title: 'Strategy', body: 'We define your audience, pillars and the path from content to offer.' },
      { title: 'Plan', body: 'We map a 3–6 month calendar of content themes and formats.' },
      { title: 'Produce & post', body: 'We manage creation, scheduling and publishing.' },
      { title: 'Engage', body: 'We handle community management and keep the audience warm.' },
    ],
    forWho: [
      'Creators and coaches building an audience',
      'Founders who want content tied to sales',
      'Brands with no consistent content system',
      'Anyone posting hard without results',
    ],
    faq: [
      { q: 'Do you create the content or just plan it?', a: 'Both options exist. We always deliver the strategy and calendar; management and production can be added depending on how hands-on you want us to be.' },
      { q: 'Which platforms do you cover?', a: "We focus on the platforms where your audience actually is — usually Instagram, and others depending on your market. We won't spread you thin across every channel." },
      { q: 'How is this different from just getting more followers?', a: 'Followers are not the goal. Everything is tied to your offer and funnel, so content builds an audience that can become customers.' },
      { q: 'Can you work with my existing content?', a: 'Yes. We can build on what you already have and make it consistent and strategic rather than starting from zero.' },
      { q: 'How long before I see results?', a: 'Organic growth compounds over months, not days. The 3–6 month plan is built so progress is steady and measurable rather than relying on one viral post.' },
    ],
    startingFrom: '[TODO: price]',
  },
  {
    slug: 'ecommerce-growth',
    name: 'E-commerce Growth',
    icon: 'shopping-bag',
    benefit: 'Ads, email and CRO run as one growth engine for your store.',
    menuBlurb: 'A full growth engine for your store.',
    hero: {
      title: 'A growth engine for your online store',
      subtitle: 'Ads, email and conversion optimization run as one system — so every part of your store compounds instead of competing.',
    },
    problem: 'Most stores treat ads, email and their website as separate jobs. The result is wasted spend, abandoned carts and traffic that does not convert. Growth comes from running them as one engine.',
    includes: [
      'Growth retainer — ads, email and CRO managed as one system',
      'Email marketing — flows and campaigns',
      'CRO — conversion rate optimization',
      'Google Ads',
    ],
    deliverables: [
      'A single growth plan across ads, email and site',
      'Email flows — welcome, abandoned cart, post-purchase',
      'Ongoing CRO tests on your store',
      'Managed ad campaigns with reporting',
    ],
    process: [
      { title: 'Audit', body: 'We review your store, traffic, email and numbers to find the biggest levers.' },
      { title: 'Fix the leaks', body: 'We tackle checkout, email flows and on-site conversion first.' },
      { title: 'Drive traffic', body: 'We scale ads once the store converts reliably.' },
      { title: 'Compound', body: 'We run ads, email and CRO together, month over month.' },
    ],
    forWho: [
      'Established e-commerce stores ready to scale',
      'Brands with traffic but weak conversion',
      'Stores with no proper email flows',
      'Owners who want one team, not five freelancers',
    ],
    faq: [
      { q: 'Do I need a minimum revenue to work with you?', a: "This works best for stores already making sales that want to scale. If you're pre-launch, a funnel or website project is usually the better starting point." },
      { q: 'Is this a retainer?', a: 'Yes — e-commerce growth is an ongoing retainer, because ads, email and CRO compound over time rather than in a one-off project.' },
      { q: 'Which email platform do you use?', a: 'We work with the major platforms (such as Klaviyo and similar). If you already have one, we work inside it; if not, we recommend the right fit.' },
      { q: 'Do you handle Google Ads as well as Meta?', a: 'Yes. E-commerce growth can include Google Ads alongside email and CRO. Meta ads are available as a dedicated service too.' },
      { q: 'Who owns the accounts and data?', a: 'You own everything — store, email list, ad accounts and data. We work inside your tools.' },
    ],
    startingFrom: '[TODO: price]',
  },
];

export const serviceBudgets = [
  '< €1,000',
  '€1,000 – 2,500',
  '€2,500 – 5,000',
  '€5,000+',
  'Not sure yet',
];
