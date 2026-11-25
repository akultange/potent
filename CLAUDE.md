# Potent: notes for Claude

- Static Astro site (`npm run dev`, `npm run build`). People data: one YAML per person in
  `src/content/people/`; schema in `src/content.config.ts`; service ids in `src/data/services.ts`;
  page in `src/pages/index.astro` (it is both the English page and, through
  `src/pages/ru/index.astro`, the Russian one).
- Russian is laid over the English: page texts in `src/i18n/ru.ts` (templates call
  `t('English text')`), people in `src/content/people-ru/`. Every new word on the page needs its
  Russian line.
- The page is a dark, portfolio-style agency blueprint for one non-digital investor (send him
  /ru/): Luka's reel as the hero with the big client names, proof numbers, "Selected work" as
  huge pictures plus a compact grid (`src/data/showcase.ts`, retina files in `public/hd/`),
  colour team portraits (never invented people) and a network card, team structure and process,
  what we sell, market numbers with sources (`src/data/blueprint.ts`), the plan (agency now, scale
  next, academy after scale), next step. Big pictures, few words.
- Two founders push to `main` in parallel. Commit small and often, always `git pull --rebase`
  before `git push`, resolve conflicts by keeping both sides' intent, never force-push or rewrite
  pushed history. No branches or PRs.
- Only put facts on the page that come from the person's own portfolio/profiles or from the founders.
  Anything unverified goes in that person's `toConfirm` list, which is never rendered.
- Run `npm run build` before pushing; it validates every YAML file.
