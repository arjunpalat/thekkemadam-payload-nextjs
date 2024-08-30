import type { CollectionConfig } from 'payload'

export const RelatedPosts: CollectionConfig = {
  slug: 'related-posts',
  fields: [
    {
      name: 'post-id',
      type: 'relationship',
      relationTo: 'blog-posts',
      required: true,
    },
  ],
}