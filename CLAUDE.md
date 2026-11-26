# Potent: notes for Claude

- Static Astro site (`npm run dev`, `npm run build`). People data: one YAML per person in
  `src/content/people/`; schema in `src/content.config.ts`; service ids in `src/data/services.ts`;
  page in `src/pages/index.astro` (it is both the English page and, through
  `src/pages/ru/index.astro`, the Russian one).
- Russian is laid over the English: page texts in `src/i18n/ru.ts` (templates call
  `t('English text')`), people in `src/content/people-ru/`. Every new word on the page needs its
  Russian line.
- The Russian is written for a reader who is not from our trade, not translated word for word.
  "Digital" as a noun is never «цифра» (it reads as "a number"): «цифровая сфера», «цифровые
  услуги»; the agency itself is a «digital-агентство». No trade words: «руководитель команды»
  not «тимлид», «подрядчики» not «аутсорс», «блогер» not «инфлюенсер», «дизайнер интерфейсов» not
  «продуктовый дизайнер», no "CRM". Keep words of 12+ letters out of headings (a 360px phone
  cannot fit them) and check /ru/ at 360px wide after any new heading.
- The page is a dark, portfolio-style agency blueprint for one non-digital investor (send him
  /ru/): Luka's film as the hero with the big client names (wide screens: his reel behind
  everything; phones held upright: his film "One Point" cut to a wordless loop above the headline,
  `public/hero/`, made by `scripts/hero-phone.sh`), proof numbers, "Everything digital a business
  needs" (outside, inside, from above: six steps, each with a moving picture and the real projects
  where we did it; `src/data/journey.ts`, `src/components/Journey.astro`), every project as a
  compact grid (`src/data/showcase.ts`; `Work.astro` without `compact` brings back the huge
  pictures from `public/hd/`), colour team portraits (never invented people) and a network card,
  team structure, the process (one paper shop from drawing to opening), market numbers with sources
  (`src/data/blueprint.ts`), the plan as one picture of our studio that builds itself as you read
  (agency now, scale next, academy after scale; `Build.astro`), next step over Tbilisi at dusk. Big
  pictures, few words.
- The pictures are one paper-craft world (generated, warm paper, orange light lines): `public/scope/`
  for the business steps, `public/art/` for the rest. A loop is a short generated clip laid over its
  sharp still and played back and forth (`scripts/loop.py`); loops play only on screen, never with
  reduced motion or data saver, and each can be stopped.
- Two founders push to `main` in parallel. Commit small and often, always `git pull --rebase`
  before `git push`, resolve conflicts by keeping both sides' intent, never force-push or rewrite
  pushed history. No branches or PRs.
- Only put facts on the page that come from the person's own portfolio/profiles or from the founders.
  Anything unverified goes in that person's `toConfirm` list, which is never rendered.
- Run `npm run build` before pushing; it validates every YAML file.
