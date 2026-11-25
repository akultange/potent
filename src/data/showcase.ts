// "Selected work": the projects shown big, in this order, and how big each one is; then MORE,
// the rest as a compact grid of small pictures.
// A project is named by the person's file name and the project's English name there; its name,
// client, link and maker come from that file. The build stops if a project here no longer exists,
// or if a row of big pictures is left half empty.
//
// size: 'full' = the whole width; 'half' = two to a row; 'third' = three to a row. Halves come
// in pairs and thirds in threes.
// hd: a retina set in public/hd/ (<hd>-1200.webp, <hd>-1600.webp and <hd>-2400.webp). Without hd
// the project's own image is used (fine at third size).
// note: one plain line on why the project matters, from the summary in the person's file or a
// cited source (Russian in src/i18n/ru.ts). Without a note the caption shows the project type.

export interface Case {
  person: string;
  project: string;
  size: 'full' | 'half' | 'third';
  hd?: string;
  note?: string;
}

export const CASES: Case[] = [
  {
    person: 'giorgi-kheladze',
    project: 'Ads Manager',
    size: 'full',
    hd: 'ads-manager',
    note: "Ad platform for the bank's business customers",
  },
  {
    person: 'lazare-londaridze',
    project: 'Yamaha Motor Europe CRM',
    size: 'third',
    note: 'One CRM for 1,500+ dealers in 40+ European markets',
  },
  // 1.8M: the App Store page behind the proof number (src/data/blueprint.ts).
  { person: 'mikheil', project: 'mBank', size: 'third', hd: 'mbank', note: "The bank's app: 1.8M active users" },
  {
    person: 'luka-liparteliani',
    project: 'Kärcher Georgia online store',
    size: 'third',
    hd: 'karcher',
    note: "Kärcher's official online store in Georgia",
  },
  {
    person: 'dimitri-beradze',
    project: 'EV Store',
    size: 'full',
    hd: 'evstore',
    note: 'Online store for EV chargers, with a map of charging stations',
  },
  {
    person: 'giorgi-kheladze',
    project: 'FINA',
    size: 'half',
    hd: 'fina',
    note: 'Reporting software for regulators in 14 countries',
  },
  {
    person: 'luka-skhiladze',
    project: 'B2B safety app',
    size: 'half',
    hd: 'luka-hubble',
    note: "Luka's own app for building-site safety, live on the App Store",
  },
  {
    person: 'mikheil',
    project: 'Sachemo',
    size: 'full',
    hd: 'sachemo',
    note: 'Marketplace for Georgian handmade goods',
  },
  {
    person: 'giorgi-kheladze',
    project: 'Webiz talent platform',
    size: 'half',
    hd: 'webiz',
    note: 'Hiring platform; its design system made design 5× faster',
  },
  {
    person: 'giorgi-kheladze',
    project: 'Cyngular',
    size: 'half',
    hd: 'cyngular',
    note: 'Cybersecurity monitoring platform',
  },
];

/** The rest of the work, small: name, picture and maker only. Four to a row on wide screens. */
export const MORE: { person: string; project: string }[] = [
  { person: 'luka-liparteliani', project: 'Homeland of Wine Magazine' },
  { person: 'giorgi-kheladze', project: 'Guma' },
  { person: 'lazare-londaridze', project: 'Egofy' },
  { person: 'lazare-londaridze', project: 'Seensme' },
  { person: 'luka-skhiladze', project: 'Logicor Park 08' },
  { person: 'mariam-kokaia', project: 'Showreel' },
  { person: 'luka-skhiladze', project: 'Showreel 2026' },
  { person: 'maggie-oniani', project: 'FIGUREBI illustrations' },
  { person: 'maggie-oniani', project: 'MZESUMZIRA posters' },
  { person: 'maggie-oniani', project: "Women's Day video" },
  { person: 'luka-skhiladze', project: 'Urban Industry' },
  { person: 'luka-skhiladze', project: 'Fuse 2' },
];
