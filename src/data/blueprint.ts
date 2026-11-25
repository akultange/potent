// The parts of the investor blueprint that are not about one person: proof, market, how the
// agency earns, the network, how the team is organised and how a project runs. Russian for every
// text is in src/i18n/ru.ts (keyed by the English text).
//
// Every number has its source next to it. Keep it that way: this page asks someone for money.

export interface Source {
  name: string;
  url: string;
}

const IDC =
  'https://www.idc.com/resource-center/press-releases/worldwide-digital-transformation-spending-forecast-to-continue-its-double-digit-growth-trajectory-according-to-idc-spending-guide/';
const PWC = 'https://taxsummaries.pwc.com/georgia/corporate/tax-credits-and-incentives';
const BOG_APP = 'https://apps.apple.com/ge/app/bank-of-georgia/id1159368231';

/** Big numbers under the headline: what our people have already done. The first is orange. */
export const PROOF: { value: string; label: string; source?: Source }[] = [
  {
    value: '1.8M',
    label: 'people use the Bank of Georgia app our designer works on',
    source: { name: 'App Store', url: BOG_APP },
  },
  {
    // Lazare's case study (public/work/yamaha.jpg): one CRM for 1,500+ dealers across 40+
    // European markets; he owned the product design. Say "designed", not "led" or "his project".
    value: '40+',
    label: "European markets covered by Yamaha's dealer CRM, designed by our designer",
  },
  {
    // Every piece in their own portfolios and CVs, spec and concept work included: Luka S. 38
    // (skhiladze.com: 31 films, 7 sites and apps; 31 of the 38 are spec or concept), Mariam 15+,
    // Maggie 12 on Behance, Giorgi 6, Dimitri 6, Guram 5, Lazare 5, Luka L. 3, Mikheil 2 = 92;
    // about 88 when the shared Bank of Georgia projects count once. Client work alone is about
    // 43, so never call this "shipped" or "for clients".
    value: '80+',
    label: "works in our people's portfolios",
  },
];

/** Why digital: how big the market is and why Georgia is a good place to sell it from. */
export const MARKET: { value: string; label: string; source: Source }[] = [
  {
    value: '$3.9 trillion',
    label: 'what companies worldwide will spend on going digital in 2027',
    source: { name: 'IDC, 2023', url: IDC },
  },
  {
    value: '+16% a year',
    label: 'how fast that spending grows',
    source: { name: 'IDC, 2023', url: IDC },
  },
  {
    // PwC: 0% only on profit from IT the company itself builds and sells outside Georgia, and
    // only with Virtual Zone status. Nothing here says Potent has the status: the founders have
    // not confirmed it, and local clients, the academy and the podcast would not qualify.
    value: '0% profit tax',
    label: 'on IT that Georgian companies with Virtual Zone status build and sell abroad',
    source: { name: 'PwC', url: PWC },
  },
];

/** How we make money. `later`: only after the agency has scaled (see PHASES). */
export const STREAMS = [
  { id: 'projects', title: 'Projects', text: 'Sites, apps and brands, paid per project.', later: false },
  { id: 'support', title: 'Monthly support', text: 'Clients pay every month for updates, ads and content.', later: false },
  { id: 'academy', title: 'Academy', text: 'Students pay to learn. The best join our team.', later: true },
  { id: 'podcast', title: 'Podcast', text: 'An audience that brings in clients and students.', later: true },
];

/**
 * The plan, in order (founders, 2026-11-26): the agency is the business now; it scales next; the
 * academy comes after scale. "Here's the plan" on the first screen leads here.
 */
export const PHASES = [
  { when: 'Now', title: 'Agency', text: 'Sites, apps and brands for companies, paid per project and every month.' },
  { when: 'Next', title: 'Scale', text: 'More team leads and outsource partners; sales and marketing keep clients coming.' },
  { when: 'After scale', title: 'Academy', text: 'Our own academy grows our own people, so the margin goes up.' },
];

/** The academy and podcast loop (phase three), clockwise from the top. Drawn by src/components/Engine.astro. */
export const ENGINE = ['Academy', 'Interns', 'Team', 'Projects', 'Revenue', 'Podcast'] as const;

/**
 * The card after the specialists: how many more people our network brings. Founders' numbers
 * (Giorgi, 2026-11-26); keep them true. The photo is a stand-in from Unsplash (Tai Bui,
 * unsplash.com/photos/mdeT5gewa3Q), chosen so no stranger's face reads as a team member.
 */
export const NETWORK = { photo: '/people/network.webp', groups: ['+{n} developers', '+{n} designers'], n: 10 };

/** How the agency is organised, from the founders (2026-11-26). Roles only, no names. */
export const STRUCTURE = {
  heads: [
    { person: 'giorgi-kheladze', role: 'Head of Digital' },
    { person: 'luka-skhiladze', role: 'CTO' },
  ],
  /** Each head has 2 to 3 team leads; the third box is drawn lighter. */
  leads: 3,
  sales: ['Sales manager', 'Marketer', 'Marketer & influencer'],
};

/** How a project runs, start to finish. */
export const PROCESS = [
  { title: 'Brief', text: 'Sales brings the client; a team lead sets the scope, timeline and price.' },
  { title: 'Design', text: 'Design teams shape the product, brand and motion before anything is built.' },
  { title: 'Build', text: 'Engineering teams build it; outsource partners add hands at peaks.' },
  { title: 'Launch', text: 'Release, measure, fix.' },
  { title: 'Support', text: 'Monthly updates, ads and content keep the client with us.' },
];

/**
 * How to reach the founders, shown as buttons under "Next step". Founders' handles only, for
 * example { label: 'Telegram', href: 'https://t.me/<handle>' } or { label: 'WhatsApp', href:
 * 'https://wa.me/<number>' }. While it is empty the page asks him to reply to the message the
 * link came in.
 */
export const CONTACTS: { label: string; href: string }[] = [];
