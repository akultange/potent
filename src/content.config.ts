import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { SERVICE_IDS } from './data/services';

const url = z.string().url();
const services = z.array(z.enum(SERVICE_IDS));

/** A headline number from the person's own profile, e.g. { value: '4 yrs', label: 'at Bank of Georgia' }. */
const fact = z.object({ value: z.coerce.string(), label: z.string() });

const project = z.object({
  name: z.string(),
  /** Brand or company the work was for (omit when it's the person's own product). */
  client: z.string().optional(),
  /** Live product / site. */
  url: url.optional(),
  /** Case study or portfolio write-up. */
  caseStudy: url.optional(),
  /** e.g. "Web app", "E-commerce", "Logo & identity". */
  type: z.string(),
  /** e.g. "Banking & fintech". */
  sector: z.string().optional(),
  /** What the project is, one or two sentences. */
  summary: z.string(),
  /** What this person did on it. */
  role: z.string().optional(),
  services: services.default([]),
  /** Screenshot under /public, e.g. /work/karcher.jpg */
  image: z.string().optional(),
  /** Show on the person's card. Projects with an image come first; founders show up to six, the network three. */
  featured: z.boolean().default(false),
});

const people = defineCollection({
  loader: glob({ pattern: '*.{yaml,yml}', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    group: z.enum(['founder', 'network']).default('network'),
    /** Lower comes first. */
    order: z.number().default(50),
    location: z.string().optional(),
    /** Square portrait under /public, e.g. /people/jane-doe.jpg; initials are shown without one. */
    photo: z.string().optional(),
    /** Kept for reference; the page itself shows no bios. */
    bio: z.string().optional(),
    /** Two or three headline numbers, shown on the card (founders three, network two). */
    facts: z.array(fact).default([]),
    links: z
      .object({
        linkedin: url.optional(),
        portfolio: url.optional(),
        behance: url.optional(),
        instagram: url.optional(),
        github: url.optional(),
      })
      .default({}),
    services: services.default([]),
    projects: z.array(project).default([]),
    /** Open questions for the founders. Never rendered on the page. */
    toConfirm: z.array(z.string()).default([]),
  }),
});

/**
 * Russian for the people above: one file per person with the same file name, holding only the
 * texts. Every field is optional; whatever is missing is shown in English on the Russian page.
 * Projects are matched by their English name.
 */
const peopleRu = defineCollection({
  loader: glob({ pattern: '*.{yaml,yml}', base: './src/content/people-ru' }),
  schema: z.object({
    name: z.string().optional(),
    title: z.string().optional(),
    location: z.string().optional(),
    bio: z.string().optional(),
    /** Russian for the facts, keyed by the English label. */
    facts: z
      .record(z.string(), z.object({ value: z.coerce.string().optional(), label: z.string().optional() }))
      .default({}),
    projects: z
      .record(
        z.string(),
        z.object({
          name: z.string().optional(),
          client: z.string().optional(),
          type: z.string().optional(),
          sector: z.string().optional(),
          summary: z.string().optional(),
          role: z.string().optional(),
        }),
      )
      .default({}),
  }),
});

export const collections = { people, peopleRu };
