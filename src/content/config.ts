import { defineCollection, z } from 'astro:content';

const scenarios = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { scenarios };
