import type { CollectionConfig } from 'payload'

export const SEOMeta: CollectionConfig = {
  slug: 'seo-meta',
  fields: [
    {
      name: 'post-id',
      type: 'relationship',
      relationTo: 'blog-posts',
      required: true,
    },
    {
      name: 'meta-title',
      type: 'text',
      required: true,
    },
    {
      name: 'meta-description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'focus-keywords',
      type: 'text',
      required: true,
    },
    {
      name: 'schema-markup',
      type: 'textarea',
      required: false,
    },
  ],
}
