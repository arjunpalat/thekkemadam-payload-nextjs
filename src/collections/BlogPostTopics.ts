import type { CollectionConfig } from 'payload'

export const BlogPostTopics: CollectionConfig = {
  slug: 'blog-post-topics',
  fields: [
    {
      name: 'post-id',
      type: 'relationship',
      relationTo: 'blog-posts',
      required: true,
    },
    {
      name: 'topic-id',
      type: 'relationship',
      relationTo: 'topics',
      required: true,
    },
  ],
}
