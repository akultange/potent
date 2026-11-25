# Potent: notes for Claude

- Static Astro site (`npm run dev`, `npm run build`). People data: one YAML per person in
  `src/content/people/`; schema in `src/content.config.ts`; service ids in `src/data/services.ts`;
  page in `src/pages/index.astro` (it is both the English page and, through
  `src/pages/ru/index.astro`, the Russian one).
- Russian is laid over the English: page texts in `src/i18n/ru.ts` (templates call
  `t('English text')`), people in `src/content/people-ru/`. Every new word on the page needs its
  Russian line.
- The page is a brief for investors, not an agency site: 01 Managing partners (Giorgi and Luka),
  02 Network (our potential team), 03 Services. Keep it visual with very little text: pictures of the work, numbers and
  names, no paragraphs.
- Two founders push to `main` in parallel. Commit small and often, always `git pull --rebase`
  before `git push`, resolve conflicts by keeping both sides' intent, never force-push or rewrite
  pushed history. No branches or PRs.
- Only put facts on the page that come from the person's own portfolio/profiles or from the founders.
  Anything unverified goes in that person's `toConfirm` list, which is never rendered.
- Run `npm run build` before pushing; it validates every YAML file.
