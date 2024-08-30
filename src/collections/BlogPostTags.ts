import type { CollectionConfig } from 'payload'

export const BlogPostTags: CollectionConfig = {
  slug: 'blog-post-tags',
  fields: [
    {
      name: 'post-id',
      type: 'relationship',
      relationTo: 'blog-posts',
      required: true,
    },
    {
      name: 'tag-id',
      type: 'relationship',
      relationTo: 'tags',
      required: true,
    },
  ],
}
