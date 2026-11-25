// "Selected work": the projects shown big, in this order, and how big each one is.
// A project is named by the person's file name and the project's English name there; its name,
// client, link and maker come from that file. The build stops if a project here no longer exists.
//
// size: 'full' = the whole width; 'half' = two to a row; 'third' = three to a row.
// hd: a retina set in public/hd/ (<hd>-1200.webp and <hd>-2400.webp). `single` when only the
// 1200px file exists. Without hd the project's own image is used (fine at half or third size).

export interface Case {
  person: string;
  project: string;
  size: 'full' | 'half' | 'third';
  hd?: string;
  single?: boolean;
}

export const CASES: Case[] = [
  { person: 'giorgi-kheladze', project: 'Ads Manager', size: 'full', hd: 'ads-manager' },
  { person: 'luka-liparteliani', project: 'Kärcher Georgia online store', size: 'half', hd: 'karcher' },
  { person: 'luka-skhiladze', project: 'B2B safety app', size: 'half', hd: 'luka-hubble' },
  { person: 'mikheil', project: 'Sachemo', size: 'full', hd: 'sachemo' },
  { person: 'lazare-londaridze', project: 'Yamaha Motor Europe CRM', size: 'third' },
  { person: 'lazare-londaridze', project: 'Egofy', size: 'third' },
  { person: 'lazare-londaridze', project: 'Seensme', size: 'third' },
  { person: 'dimitri-beradze', project: 'EV Store', size: 'full', hd: 'evstore' },
  { person: 'giorgi-kheladze', project: 'FINA', size: 'half', hd: 'fina' },
  { person: 'luka-liparteliani', project: 'Homeland of Wine Magazine', size: 'half', hd: 'homeland-of-wine' },
  { person: 'maggie-oniani', project: 'SOCAR Instagram feed', size: 'half' },
  { person: 'maggie-oniani', project: 'MZESUMZIRA posters', size: 'half', hd: 'maggie-mzesumzira', single: true },
  { person: 'luka-skhiladze', project: 'Urban Industry', size: 'full', hd: 'luka-urban' },
  { person: 'luka-skhiladze', project: 'Logicor Park 08', size: 'third' },
  { person: 'luka-skhiladze', project: 'Fuse 2', size: 'third' },
  { person: 'luka-skhiladze', project: 'Showreel 2026', size: 'third' },
  { person: 'giorgi-kheladze', project: 'Webiz talent platform', size: 'half', hd: 'webiz' },
  { person: 'giorgi-kheladze', project: 'Cyngular', size: 'half', hd: 'cyngular' },
  { person: 'mikheil', project: 'mBank', size: 'half', hd: 'mbank' },
  { person: 'mariam-kokaia', project: 'Showreel', size: 'half', hd: 'showreel' },
  { person: 'luka-liparteliani', project: 'MushCore', size: 'full', hd: 'mushcore' },
  { person: 'maggie-oniani', project: "Women's Day motion video", size: 'half', hd: 'maggie-womens-day', single: true },
  { person: 'luka-skhiladze', project: 'The Cozzi', size: 'half', hd: 'luka-cozzi' },
];
