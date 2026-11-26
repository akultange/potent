// "The whole digital business": what Potent builds, told as three views of one company that a
// reader who is not from our trade already understands. Outside: what the customer sees.
// Inside: how the company runs. From above: what the owner sees. Shown by
// src/components/Journey.astro, right after the proof numbers.
//
// Every step has a moving picture, one plain sentence and real projects where someone on the
// team has already done exactly that.
//
// `tiles` are pictures from src/data/scope.ts (public/scope/): the first one is shown big, the
// others small beside it. Two steps have their own picture instead:
//   'night'  - the company picture at night (public/scope/night-*.webp and night.mp4) with short
//              notes that come and go over it, the things a system does by itself;
//   'report' - a morning report drawn by the page itself. Its numbers are an example and the
//              page says so.
// `proofs` name real projects from src/content/people/: `person` is the person's file name,
// `project` the project's English name there, `note` one plain line. The build stops with a
// clear message if a project named here no longer exists. Russian for everything is in
// src/i18n/ru.ts.

export interface JourneyProof {
  person: string;
  project: string;
  note: string;
}

export interface JourneyStep {
  id: string;
  /** The headline: what happens for the owner. The words in <em> are set in the serif. */
  title: string;
  text: string;
  tiles?: string[];
  special?: 'night' | 'report';
  proofs: JourneyProof[];
}

export interface JourneyView {
  id: 'outside' | 'inside' | 'above';
  name: string;
  text: string;
  steps: JourneyStep[];
}

export const JOURNEY: JourneyView[] = [
  {
    id: 'outside',
    name: 'Outside',
    text: 'what the customer sees',
    steps: [
      {
        id: 'notice',
        title: 'People <em>notice you</em>',
        text: 'A name and a look, ads, 3D films and the music under them, so that you are seen and remembered.',
        tiles: ['motion', 'brand', 'edit', 'sound'],
        proofs: [
          {
            person: 'luka-skhiladze',
            project: 'Logicor Park 08',
            note: 'Video banners for a logistics park, in every ad format.',
          },
          {
            person: 'maggie-oniani',
            project: 'MZESUMZIRA posters',
            note: 'A series of posters.',
          },
          {
            person: 'mariam-kokaia',
            project: 'Showreel',
            note: 'Explainer videos and social content, edited and animated.',
          },
        ],
      },
      {
        id: 'buy',
        title: 'They <em>buy from you</em>',
        text: 'A site and an online store that show the goods and take the order and the payment, day and night.',
        tiles: ['store', 'web', 'design'],
        proofs: [
          {
            person: 'luka-liparteliani',
            project: 'Kärcher Georgia online store',
            note: "Kärcher's official online store for Georgia.",
          },
          {
            person: 'dimitri-beradze',
            project: 'EV Store',
            note: 'A store for EV chargers with a map of charging stations.',
          },
          {
            person: 'mikheil',
            project: 'Sachemo',
            note: 'A marketplace for Georgian handmade goods.',
          },
        ],
      },
      {
        id: 'return',
        title: 'They <em>come back</em>',
        text: "An app in the customer's phone: an order in two taps, bonuses, reminders.",
        tiles: ['app'],
        proofs: [
          {
            person: 'mikheil',
            project: 'mBank',
            note: "Bank of Georgia's mobile bank: 1.8M active users. Our designer works on it.",
          },
          {
            person: 'lazare-londaridze',
            project: 'Seensme',
            note: 'An app where creators earn from subscriptions and paid posts.',
          },
          {
            person: 'luka-skhiladze',
            project: 'B2B safety app',
            note: "Luka's own app for building sites, live on the App Store.",
          },
        ],
      },
    ],
  },
  {
    id: 'inside',
    name: 'Inside',
    text: 'how the company runs',
    steps: [
      {
        id: 'whole',
        title: 'The company runs <em>as one</em>',
        text: 'Orders, stock, staff and money in one system instead of ten spreadsheets.',
        tiles: ['company'],
        proofs: [
          {
            person: 'lazare-londaridze',
            project: 'Yamaha Motor Europe CRM',
            note: "One system for Yamaha's 1,500+ dealers in 40+ European markets.",
          },
          {
            person: 'lazare-londaridze',
            project: 'Egofy',
            note: 'Staff shifts and workload planned across countries in one place.',
          },
          {
            person: 'giorgi-kheladze',
            project: 'Webiz talent platform',
            note: 'A hiring platform: candidate portal, company dashboard, admin panel.',
          },
        ],
      },
      {
        id: 'night',
        title: 'At night <em>the system works</em>',
        text: 'The same company after dark. It answers customers, sends invoices and watches the stock by itself. AI already does part of this work.',
        special: 'night',
        proofs: [
          {
            person: 'guram-svanidze',
            project: 'Ads Manager and B2B platform',
            note: "In Bank of Georgia's ad manager, AI writes the texts and draws the pictures for ads.",
          },
          {
            person: 'guram-svanidze',
            project: 'Freight-forwarding SaaS',
            note: 'Companies run shipments, orders and money on it; an app tracks every load live.',
          },
          {
            person: 'luka-liparteliani',
            project: 'MushCore',
            note: 'Builds AI into products. Luka Liparteliani works through this studio.',
          },
        ],
      },
    ],
  },
  {
    id: 'above',
    name: 'From above',
    text: 'what the owner sees',
    steps: [
      {
        id: 'see',
        title: 'In the morning <em>you see it all</em>',
        text: 'Revenue, orders and stock on one screen instead of ten reports.',
        special: 'report',
        proofs: [
          {
            person: 'giorgi-kheladze',
            project: 'FINA',
            note: 'Reporting software for central banks and regulators in 14 countries.',
          },
          {
            person: 'giorgi-kheladze',
            project: 'Cyngular',
            note: 'Screens of a cybersecurity monitoring platform: dashboards and analytics.',
          },
          {
            person: 'giorgi-kheladze',
            project: 'Ads Manager',
            note: "Bank of Georgia's ad manager for business clients, with results after every campaign.",
          },
        ],
      },
    ],
  },
];

/**
 * The short notes over the night picture: what the system has just done by itself. `left` or
 * `right`: how far the note's edge sits from that side of the picture, `top`: from its top, all in
 * percent. Notes on the right half hang from the right so they never run off a narrow phone.
 */
export const NIGHT_NOTES: { text: string; left?: number; right?: number; top: number }[] = [
  { text: '02:14 · order taken', right: 5, top: 60 },
  { text: 'The AI assistant answered a customer', left: 4, top: 70 },
  { text: 'Invoice sent', left: 6, top: 12 },
  { text: 'Stock reordered', right: 6, top: 9 },
  { text: 'Courier assigned', left: 34, top: 84 },
];

/** The morning report. The numbers are an example; the page labels them so. */
export const REPORT: { value: string; label: string }[] = [
  { value: '37', label: 'orders overnight' },
  { value: '0', label: 'customers left without an answer' },
  { value: '+18%', label: 'against last week' },
];
