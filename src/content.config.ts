import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { SERVICE_IDS } from './data/services';

const url = z.string().url();
const services = z.array(z.enum(SERVICE_IDS));

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
  /** Show in "Selected work". */
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
    bio: z.string().optional(),
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

export const collections = { people };
