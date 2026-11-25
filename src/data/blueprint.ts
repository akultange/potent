// The parts of the investor blueprint that are not about one person: proof, market, how the
// agency earns, who we hire next and the two ways to start. Russian for every text is in
// src/i18n/ru.ts (keyed by the English text).
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

/** How the agency earns. `id` picks the drawing. */
export const STREAMS = [
  { id: 'projects', title: 'Projects', text: 'Sites, apps and brands, paid per project.' },
  { id: 'support', title: 'Monthly support', text: 'Clients pay every month for updates, ads and content.' },
  { id: 'academy', title: 'Academy', text: 'Students pay to learn. The best join our team.' },
  { id: 'podcast', title: 'Podcast', text: 'An audience that brings in clients and students.' },
] as const;

/** The academy and podcast loop, clockwise from the top. Drawn by src/components/Engine.astro. */
export const ENGINE = ['Academy', 'Interns', 'Team', 'Projects', 'Revenue', 'Podcast'] as const;

/** The roles the investment hires first, shown with the plan. Founders' plan: change freely. */
export const HIRES = ['Project managers', 'Developers', 'Designers', 'Sales managers', 'Marketers', 'Academy mentors'];

/**
 * The two ways to start, the investor's choice ($100k) first. This is the founders' plan, not a
 * promise: no revenue or return figures go here until the founders give them.
 */
export const PLANS = [
  {
    amount: '$100k',
    name: 'Scale',
    points: ['The full team from day one', 'Our own academy and interns', 'Sales and marketing from the start'],
    recommended: true,
  },
  {
    amount: '$40k',
    name: 'Start',
    points: ['A small core team', 'First clients', 'Grow step by step'],
    recommended: false,
  },
];

/**
 * How to reach the founders, shown as buttons under "Next step". Founders' handles only, for
 * example { label: 'Telegram', href: 'https://t.me/<handle>' } or { label: 'WhatsApp', href:
 * 'https://wa.me/<number>' }. While it is empty the page asks him to reply to the message the
 * link came in.
 */
export const CONTACTS: { label: string; href: string }[] = [];
