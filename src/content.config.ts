import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			// 新增字段
			category: z.string().optional().default('实验报告'),
			tags: z.array(z.string()).optional(),
			experiment: z.object({
				date: z.string().optional(),
				equipment: z.array(z.string()).optional(),
				parameters: z.record(z.string()).optional(),
			}).optional(),
		}),
});

export const collections = { blog };
