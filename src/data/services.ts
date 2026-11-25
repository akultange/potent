// The services Potent offers. People and projects reference these ids, and the
// build fails if a YAML file uses an id that isn't listed here.
export const SERVICES = [
  {
    id: 'product-design',
    name: 'Product & UX design',
    short: 'Product & UX',
    blurb:
      'Research, flows, interface design, prototyping and usability testing for web and mobile products, plus design systems that scale across teams.',
  },
  {
    id: 'branding',
    name: 'Brand identity',
    short: 'Brand',
    blurb: 'Logos, identity systems and brand strategy that give a product a recognisable face.',
  },
  {
    id: 'graphic-design',
    name: 'Graphic design & illustration',
    short: 'Graphic',
    blurb: 'Posters, illustration and campaign and social-media creative.',
  },
  {
    id: 'motion',
    name: 'Motion & video',
    short: 'Motion',
    blurb: 'Launch and explainer videos, logo and UI animation, social video and editing.',
  },
  {
    id: 'web',
    name: 'Websites & content platforms',
    short: 'Web',
    blurb: 'Marketing sites, magazines and CMS-driven platforms, designed and built end to end.',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce & marketplaces',
    short: 'E-commerce',
    blurb: 'Shopify stores, custom storefronts and multi-vendor marketplaces.',
  },
  {
    id: 'engineering',
    name: 'Product engineering',
    short: 'Engineering',
    blurb: 'Web apps, APIs, cloud architecture, AI integration and technical leadership.',
  },
] as const;

export type ServiceId = (typeof SERVICES)[number]['id'];
export const SERVICE_IDS = SERVICES.map((s) => s.id) as [ServiceId, ...ServiceId[]];
