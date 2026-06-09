import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('周衣衣'),
    category: z
      .enum(['gamedev', 'gamedesign', 'note', 'review', 'thought'])
      .default('thought'),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    /** Source: 'manual' = hand-written, 'pdf' = imported from PDF */
    source: z.enum(['manual', 'pdf']).default('manual'),
  }),
});

export const collections = { posts };
