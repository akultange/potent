// The page exists in English (/) and Russian (/ru/). English is what the templates and data files
// say; Russian is laid over it from ./ru.ts and src/content/people-ru/. Anything without a Russian
// line simply stays English.
import type { CollectionEntry } from 'astro:content';
import { SCOPE } from '../data/scope';
import { SERVICES } from '../data/services';
import { SITE } from '../data/site';
import { RU } from './ru';

export const LANGS = ['en', 'ru'] as const;
export type Lang = (typeof LANGS)[number];

/** What the language switch in the header shows. */
export const LANG_LABELS: Record<Lang, string> = { en: 'EN', ru: 'RU' };

/** Where the home page of a language lives, e.g. "/potent/ru/". */
export function homePath(lang: Lang): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return lang === 'en' ? `${base}/` : `${base}/${lang}/`;
}

const SHORT_WORDS = 'в|во|и|к|ко|с|со|у|о|об|а|я|на|по|за|из|от|до|не|ни|но|же|ли|бы|для|без|над|под|при|про|или|что|как';
const AFTER_SHORT = new RegExp(`(^|[\\s(«>])(${SHORT_WORDS}) `, 'giu');

/**
 * Russian line-breaking: a short word stays with the word after it and a dash stays with the
 * word before it, so no line ends in a lone "в" or starts with "—".
 */
export function tidyRu(text: string): string {
  return text
    .replace(AFTER_SHORT, '$1$2 ')
    .replace(AFTER_SHORT, '$1$2 ')
    .replace(/ — /g, ' — ')
    .replace(/(\d) (\d{3})/g, '$1 $2');
}

/** Returns a function that turns the English text of the templates into the page's language. */
export function translator(lang: Lang) {
  return (text: string, values: Record<string, string | number> = {}): string => {
    const line = lang === 'ru' && RU.ui[text] ? tidyRu(RU.ui[text]!) : text;
    return line.replace(/\{(\w+)\}/g, (whole, key: string) => (key in values ? String(values[key]) : whole));
  };
}

const EN_NOUNS = {
  people: 'People',
  services: 'Services',
  projects: 'Projects',
  partners: 'Managing partners',
  specialists: 'Specialists',
} as const;

/** The word under a number in the page header: "People" / "человек", "Projects" / "проектов". */
export function counted(lang: Lang, n: number, what: keyof typeof EN_NOUNS): string {
  if (lang !== 'ru') return EN_NOUNS[what];
  const [one, few, many] = RU.nouns[what];
  const tens = n % 100;
  const ones = n % 10;
  if (tens >= 11 && tens <= 14) return many!;
  if (ones === 1) return one!;
  if (ones >= 2 && ones <= 4) return few!;
  return many!;
}

/** "3 projects" / "3 проекта". */
export function projectCount(lang: Lang, n: number): string {
  if (lang !== 'ru') return `${n} ${n === 1 ? 'project' : 'projects'}`;
  return `${n} ${counted(lang, n, 'projects')}`;
}

export function localSite(lang: Lang) {
  return lang === 'ru' ? { ...SITE, ...RU.site } : SITE;
}

export function localServices(lang: Lang) {
  return SERVICES.map((s) => {
    const ru = lang === 'ru' ? RU.services[s.id] : undefined;
    return ru ? { ...s, name: tidyRu(ru.name), short: ru.short, blurb: tidyRu(ru.blurb) } : { ...s };
  });
}

export function localScope(lang: Lang) {
  return SCOPE.map((item) => {
    const ru = lang === 'ru' ? RU.scope[item.id] : undefined;
    return {
      ...item,
      title: ru ? tidyRu(ru.title) : item.title,
      text: ru ? tidyRu(ru.text) : item.text,
      examples: item.examples.map((ex) => {
        const note = ru?.examples[ex.project];
        return { ...ex, note: note ? tidyRu(note) : ex.note };
      }),
    };
  });
}

type Person = CollectionEntry<'people'>;
type PersonRu = CollectionEntry<'peopleRu'>['data'];

/**
 * A person with their texts in the page's language. `en` keeps the English name of the person
 * and of each project and client: colours, sorting and the examples in scope.ts go by those.
 */
export function localPerson(person: Person, ru?: PersonRu) {
  const d = person.data;
  const line = (value: string | undefined, fallback: string | undefined) => (value ? tidyRu(value) : fallback);
  return {
    id: person.id,
    data: {
      ...d,
      en: { name: d.name },
      name: ru?.name ?? d.name,
      title: line(ru?.title, d.title)!,
      location: line(ru?.location, d.location),
      bio: line(ru?.bio, d.bio),
      facts: d.facts.map((f) => {
        const r = ru?.facts[f.label];
        return { value: r?.value ?? f.value, label: line(r?.label, f.label)! };
      }),
      projects: d.projects.map((p) => {
        const r = ru?.projects[p.name];
        return {
          ...p,
          en: { name: p.name, client: p.client },
          name: line(r?.name, p.name)!,
          client: r?.client ?? p.client,
          type: line(r?.type, p.type)!,
          sector: line(r?.sector, p.sector),
          summary: line(r?.summary, p.summary)!,
          role: line(r?.role, p.role),
        };
      }),
    },
  };
}

export type LocalPerson = ReturnType<typeof localPerson>;
export type LocalProject = LocalPerson['data']['projects'][number];
