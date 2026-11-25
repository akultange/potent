# Potent

Potent's site: a dark, portfolio-style agency blueprint, built to show one investor (the
Russian page, /ru/, is the one to send) that this team is big, proven and worth backing:

1. **The film**: a still from Luka's reel (the reel itself plays on big screens), the promise
   and the big client names (`brands` in `src/data/site.ts`).
2. **Proof**: one sentence and three big numbers.
3. **Selected work**: ten projects as huge pictures, each with one line on why it matters and its
   maker's face, then twelve more as a compact grid.
4. **The team**: large colour portraits, then a network card (the founders' counts of extra
   developers and designers, `NETWORK` in `src/data/blueprint.ts`).
5. **How the team is built**: Giorgi (Head of Digital) and Luka (CTO), each with 2 to 3 team
   leads, plus outsource and sales & marketing (`STRUCTURE`).
6. **How a project runs**: five steps (`PROCESS`).
7. **What we sell**: everything digital, in pictures.
8. **The market**: giant numbers, each with its source, and how we make money.
9. **The plan**: the agency now, scale next, the academy after scale (`PHASES`), with 101SPOT
   and the growth loop under phase three; the hero's "Here's the plan" leads here.
10. **Next step**: the two founders. Their Telegram/WhatsApp buttons appear once `CONTACTS` in
    `src/data/blueprint.ts` is filled in.

Static [Astro](https://astro.build) site, no backend. Words are kept short; bios and project
write-ups stay in the YAML files.

## Pictures

- `src/data/showcase.ts` sets which projects are in "Selected work", in what order and how big
  (full width, half or third; the build stops if a row is left half empty), plus the compact
  "More work" list.
- `public/hd/`: retina screenshots for the big pictures (`<name>-1200.webp`, `-1600.webp` and
  `-2400.webp`). Third widths are fine with a project's own 1200px image.
- `public/hd/reel-still.webp` and `reel-still-phone.webp`: the hero's still, a frame of Luka's
  reel (31.3 s, the aurora); the film starts from that frame.
- `public/people/network.webp`: the network card's stand-in photo (Unsplash, Tai Bui), chosen so
  no stranger's face reads as a team member.
- `public/people/`: square portraits, set with `photo:` in each person's file.

Live: https://akultange.github.io/potent/ in English and https://akultange.github.io/potent/ru/ in
Russian (every push to `main` is published by `.github/workflows/deploy.yml`, about a minute later).

## Run it

```bash
npm install
npm run dev       # http://localhost:4321/potent (Russian: /potent/ru/)
npm run build     # static site in dist/ (also validates all data)
```

## Add or edit a person

Each person is **one YAML file** in `src/content/people/`. One file per person means two of us can
add people at the same time without merge conflicts. Copy an existing file, name it
`firstname-lastname.yaml`, and fill it in:

```yaml
name: Jane Doe
title: Senior brand designer          # short role line
photo: /people/jane-doe.jpg           # square portrait in public/people/ (initials without one)
group: network                        # founder | network
order: 40                             # lower = earlier on the page
location: Tbilisi, Georgia
bio: One or two sentences.            # kept for reference, not shown on the page
facts:                                # 2–3 headline numbers (founders show 3, the network 2)
  - value: 6 yrs
    label: in brand design
links:                                # all optional
  linkedin: https://www.linkedin.com/in/...
  portfolio: https://...
  behance: https://www.behance.net/...
  instagram: https://www.instagram.com/...
  github: https://github.com/...
services: [branding, graphic-design]  # ids from src/data/services.ts; the first one decides
                                      # the person's group in the network
projects:
  - name: Project name
    client: Brand it was for          # omit for own products
    url: https://live-site            # optional
    caseStudy: https://write-up       # optional
    type: Logo & identity
    sector: Healthcare                # optional
    summary: What it is, one or two sentences.
    role: What this person did        # optional
    services: [branding]
    featured: true                    # show on the person's card
    image: /work/project.jpg          # picture in public/work/
toConfirm:                            # open questions, never shown on the page
  - LinkedIn
```

Each card shows the person's featured projects as one block of pictures, in YAML order: up to
six for a founder, three in the network. Only projects with an `image` are used, unless the person
has none yet.

Services live in `src/data/services.ts`. If a file uses an unknown service id or a malformed URL,
`npm run build` fails and names the file and field.

## Blueprint numbers and plan

Everything on the page that is not about one person lives in `src/data/blueprint.ts`: the proof
numbers, the market figures (each with its source link), how the agency earns, the next hires and
the two plans. This page asks someone for money, so every number keeps its source, and no
revenue or return figure goes in until the founders give it.

## English and Russian

The page is written once, in English: `src/pages/index.astro` is both pages, and
`src/pages/ru/index.astro` renders it with `lang="ru"`. Russian is laid over the English:

- **Page texts, services and the "Everything digital" tiles**: `src/i18n/ru.ts`. Texts in the
  templates go through `t('English text')`; the Russian page looks that English text up in
  `ru.ts`.
- **People and projects**: one file per person in `src/content/people-ru/`, with the same file
  name as in `src/content/people/`. It holds only texts (name, title, bio, the facts keyed by
  their English label and, per project, type, sector, summary, role); projects are matched by
  their English name.

Anything without a Russian line is shown in English on the Russian page, so adding a person or
a text in English never breaks the build. It just stays English until its Russian is added.

The typefaces are in `src/assets/fonts/` and are served from the site itself.

## The "Everything digital" section

Part 3 of the page: everything we can make, from the smallest job to the biggest.
Each tile says it three ways: a picture, one plain sentence, and real projects where we did it.

- Text, order and the real projects of each tile: `src/data/scope.ts` (Russian in
  `src/i18n/ru.ts`). A project is named by the person's file and the project's name there; its
  link and screenshot come from that person's file.
- Pictures: `public/scope/<id>-<width>.webp`, plus a short silent loop of the same picture
  coming alive, `public/scope/<id>.mp4`. Set `loop: false` on a tile to show only the still.
- Small copies of the project screenshots: `public/scope/work/`. After adding or replacing a
  screenshot in `public/work/`, run `node scripts/scope-thumbs.mjs`.
- Layout: `src/components/Scope.astro`. One tile per row on phones, with the real projects in a
  strip that is swiped sideways.

## Working together

We both push straight to `main`:

```bash
git pull --rebase     # replay your commits on top of the other person's
npm run build         # make sure it still builds
git push
```

Commit small and often. Never force-push.
