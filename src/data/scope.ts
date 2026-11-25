// What Potent can make, in plain words, ordered from the smallest job to the biggest.
// Shown by src/components/Scope.astro. Every item has a picture in public/scope/
// (<id>-<width>.webp) and, when `loop` is true, a short silent film of the same picture
// coming alive (<id>.mp4, same framing as the picture).
//
// `examples` are real projects from src/content/people/ that show the thing was done: `person`
// is the person's file name, `project` the project's name there, `note` one plain line for a
// reader who is not from our trade. The project's link and screenshot come from the person's
// file; a small copy of the screenshot lives in public/scope/work/. The build stops with a
// clear message if a project named here no longer exists.
// Russian for all of this is in src/i18n/ru.ts.

export interface ScopeExample {
  person: string;
  project: string;
  note: string;
}

export interface ScopeItem {
  id: string;
  size: 'square' | 'wide' | 'hero';
  /**
   * Square pictures are cut to a wider shape on phones. This says which part to keep:
   * 0 is the top of the picture, 100 the bottom.
   */
  focus?: number;
  loop: boolean;
  title: string;
  text: string;
  examples: ScopeExample[];
}

export const SCOPE: ScopeItem[] = [
  {
    id: 'sound',
    size: 'square',
    focus: 43,
    loop: true,
    title: 'Sound and music',
    text: 'Music, voice-over and sound effects for films, ads and apps.',
    examples: [
      {
        person: 'luka-skhiladze',
        project: 'Showreel 2026',
        note: 'A one-minute reel cut to music we wrote ourselves.',
      },
    ],
  },
  {
    id: 'edit',
    size: 'square',
    focus: 57,
    loop: true,
    title: 'Editing and colour',
    text: 'Raw footage cut into a finished film, with the colour done right.',
    examples: [
      {
        person: 'mariam-kokaia',
        project: 'Showreel',
        note: 'Explainer videos and social content, edited and animated.',
      },
      {
        person: 'luka-skhiladze',
        project: 'Nichiyomu',
        note: 'Social video ad for a Japanese reading app.',
      },
    ],
  },
  {
    id: 'motion',
    size: 'square',
    focus: 42,
    loop: true,
    title: 'Animation and 3D',
    text: 'Animated ads, explainer videos and product films, in 2D and 3D.',
    examples: [
      {
        person: 'luka-skhiladze',
        project: 'Logicor Park 08',
        note: 'Video banners for a logistics park, in every ad format.',
      },
      {
        person: 'luka-skhiladze',
        project: 'Fuse 2',
        note: '3D product film for an AI-agent platform (concept).',
      },
      {
        person: 'luka-skhiladze',
        project: 'Coffee prices',
        note: 'Hand-drawn explainer about coffee prices (concept).',
      },
    ],
  },
  {
    id: 'brand',
    size: 'square',
    focus: 62,
    loop: true,
    title: 'Brand and graphics',
    text: 'A logo, colours and a look people recognise at a glance.',
    examples: [
      {
        person: 'lazare-londaridze',
        project: 'Atlantis Dental Clinic',
        note: 'Logo for a dental clinic.',
      },
      {
        person: 'maggie-oniani',
        project: 'SOCAR Instagram feed',
        note: "Her own concept for SOCAR's Instagram feed.",
      },
      {
        person: 'maggie-oniani',
        project: 'MZESUMZIRA posters',
        note: 'A series of posters.',
      },
    ],
  },
  {
    id: 'design',
    size: 'square',
    focus: 65,
    loop: true,
    title: 'Product design',
    text: 'How a site or an app looks and works, tested before it is built.',
    examples: [
      {
        person: 'giorgi-kheladze',
        project: 'Ads Manager',
        note: "Ad manager for Bank of Georgia's business customers.",
      },
      {
        person: 'giorgi-kheladze',
        project: 'Cyngular',
        note: 'Screens for a cybersecurity monitoring platform.',
      },
      {
        person: 'giorgi-kheladze',
        project: 'Guma',
        note: 'Prototype of a payment platform, made to show investors.',
      },
    ],
  },
  {
    id: 'web',
    size: 'square',
    focus: 55,
    loop: true,
    title: 'Websites',
    text: 'For a company, a product or a campaign. Designed and built by one team.',
    examples: [
      {
        person: 'luka-liparteliani',
        project: 'Homeland of Wine Magazine',
        note: 'A magazine about Georgian wine, in two languages.',
      },
      {
        person: 'luka-skhiladze',
        project: 'skhiladze.com',
        note: 'Portfolio site, Awwwards nominee (November 2026).',
      },
      {
        person: 'luka-skhiladze',
        project: 'Urban Industry',
        note: 'Site for a sneaker store with a 3D wall of shoes (concept).',
      },
    ],
  },
  {
    id: 'store',
    size: 'wide',
    loop: true,
    title: 'Online stores',
    text: 'A shop that shows the goods, takes the order and the payment, and sends it on its way.',
    examples: [
      {
        person: 'luka-liparteliani',
        project: 'Kärcher Georgia online store',
        note: "Kärcher's official online store for Georgia.",
      },
      {
        person: 'mikheil',
        project: 'Sachemo',
        note: 'A marketplace for Georgian handmade goods.',
      },
    ],
  },
  {
    id: 'app',
    size: 'wide',
    loop: true,
    title: 'Mobile apps',
    text: 'An app for phones, from the first idea to the day it is in the App Store.',
    examples: [
      {
        person: 'luka-skhiladze',
        project: 'B2B safety app',
        note: 'Our own app for safety experts on construction sites. Live on the App Store.',
      },
      {
        person: 'lazare-londaridze',
        project: 'Seensme',
        note: 'Design of an app where creators earn from subscriptions.',
      },
      {
        person: 'mikheil',
        project: 'mBank',
        note: "Design of Bank of Georgia's mobile bank.",
      },
    ],
  },
  {
    id: 'company',
    size: 'hero',
    loop: true,
    title: 'Software that runs a whole company',
    text: 'Orders, clients, stock, staff and money in one system instead of ten spreadsheets, with every number on one screen.',
    examples: [
      {
        person: 'lazare-londaridze',
        project: 'Yamaha Motor Europe CRM',
        note: "Design of one system for Yamaha's 1,500+ dealers in 40+ European markets.",
      },
      {
        person: 'giorgi-kheladze',
        project: 'FINA',
        note: 'Reporting software used by regulators in 14 countries.',
      },
      {
        person: 'giorgi-kheladze',
        project: 'Webiz talent platform',
        note: 'Design of a hiring platform: candidate portal, company dashboard, admin panel.',
      },
      {
        person: 'lazare-londaridze',
        project: 'Egofy',
        note: 'Design of a staff scheduling and planning system that works across countries.',
      },
    ],
  },
];

/** Widths of the pictures in public/scope/, small then large, for each tile size. */
export const SCOPE_WIDTHS = {
  square: [640, 1080],
  wide: [800, 1600],
  hero: [1120, 2240],
} as const;
