// What Potent can make, in plain words, ordered from the smallest job to the biggest.
// Shown by src/components/Scope.astro. Every item has a picture in public/scope/
// (<id>-<width>.webp) and, when `loop` is true, a short silent film of the same picture
// coming alive (<id>.mp4, same framing as the picture).
export const SCOPE = [
  {
    id: 'sound',
    size: 'square',
    loop: true,
    title: 'Sound and music',
    text: 'Music, voice-over and sound effects for films, ads and apps.',
  },
  {
    id: 'edit',
    size: 'square',
    loop: true,
    title: 'Editing and colour',
    text: 'Raw footage cut into a finished film, with the colour done right.',
  },
  {
    id: 'motion',
    size: 'square',
    loop: true,
    title: 'Animation and 3D',
    text: 'Animated ads, explainer videos and product films, in 2D and 3D.',
  },
  {
    id: 'brand',
    size: 'square',
    loop: true,
    title: 'Brand and graphics',
    text: 'A logo, colours and a look people recognise at a glance.',
  },
  {
    id: 'design',
    size: 'square',
    loop: true,
    title: 'Product design',
    text: 'How a site or an app looks and works, tested before it is built.',
  },
  {
    id: 'web',
    size: 'square',
    loop: true,
    title: 'Websites',
    text: 'For a company, a product or a campaign. Designed and built by one team.',
  },
  {
    id: 'store',
    size: 'wide',
    loop: true,
    title: 'Online stores',
    text: 'A shop that shows the goods, takes the order and the payment, and sends it on its way.',
  },
  {
    id: 'app',
    size: 'wide',
    loop: true,
    title: 'Mobile apps',
    text: 'An app for phones, from the first idea to the day it is in the App Store.',
  },
  {
    id: 'company',
    size: 'hero',
    loop: true,
    title: 'Software that runs a whole company',
    text: 'Orders, clients, stock, staff and money in one system instead of ten spreadsheets, with every number on one screen.',
  },
] as const;

/** Widths of the pictures in public/scope/, small then large, for each tile size. */
export const SCOPE_WIDTHS = {
  square: [640, 1080],
  wide: [800, 1600],
  hero: [1120, 2240],
} as const;
