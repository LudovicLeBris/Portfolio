import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	type: "data",
	schema: ({image}) => z.object({
		title: z.string(),
		description: z.string(),
		image: image(),
		alt: z.string(),
		url: z.string().default('#'),
		tags: z.array(z.string()),
	}),
});

const hardskillsCollection = defineCollection({
	type: 'data',
	schema: ({image}) => z.object({
		name: z.string(),
		logo: image(),
		alt: z.string()
	})
})

const softskillsCollection = defineCollection({
	type: 'data',
	schema: z.array(z.string())
})

const transversalskillsCollection = defineCollection({
	type: "data",
	schema: ({image}) => z.array(
		z.object({
			name: z.string(),
			logo: image(),
			alt: z.string()
		})
	)
})

export const collections = {
	projects: projectsCollection,
	hardskills: hardskillsCollection,
	softskills: softskillsCollection,
	transversalskills: transversalskillsCollection,
};
