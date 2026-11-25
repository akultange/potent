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

/** Big numbers under the headline: what our people have already done. */
export const PROOF: { value: string; label: string; source?: Source }[] = [
  {
    // From their own portfolios: Luka S. 38 (31 films, 7 sites and apps), Mariam 15+, Maggie 12
    // on Behance, Giorgi 6, Dimitri 6, Lazare 5, Luka L. 3, Mikheil 2 = 87.
    value: '80+',
    label: 'projects shipped by our people',
  },
  {
    value: '1.8M',
    label: 'people use the Bank of Georgia app our designer works on',
    source: { name: 'App Store', url: BOG_APP },
  },
  {
    // Lazare's portfolio: the CRM serves 1,500+ dealers in 40+ European markets.
    value: '40+',
    label: "markets run on Yamaha's dealer CRM, led by our designer",
  },
];

/** Why digital: how big the market is and why Georgia is a good place to sell it from. */
export const MARKET: { value: string; label: string; source: Source }[] = [
  {
    value: '$3.9 trillion',
    label: 'what companies worldwide will spend on going digital in 2027',
    source: { name: 'IDC', url: IDC },
  },
  {
    value: '+16% a year',
    label: 'how fast that spending grows',
    source: { name: 'IDC', url: IDC },
  },
  {
    value: '0% profit tax',
    label: 'for IT companies in Georgia that sell abroad (Virtual Zone)',
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

/** The roles the investment hires first. Founders' plan: change freely. */
export const HIRES = ['Project managers', 'Developers', 'Designers', 'Sales', 'Marketing', 'Academy mentors'];

/**
 * The two ways to start. This is the founders' plan, not a promise: no revenue or return
 * figures go here until the founders give them.
 */
export const PLANS = [
  {
    amount: '$40k',
    name: 'Start',
    points: ['A small core team', 'First clients', 'Grow step by step'],
    recommended: false,
  },
  {
    amount: '$100k',
    name: 'Scale',
    points: ['The full team from day one', 'Our own academy and interns', 'Sales and marketing from the start'],
    recommended: true,
  },
];
