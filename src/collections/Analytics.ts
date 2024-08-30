import type { CollectionConfig } from 'payload'

export const Analytics: CollectionConfig = {
  slug: 'analytics',
  fields: [
    {
      name: 'post-id',
      type: 'relationship',
      relationTo: 'blog-posts',
      required: true,
    },
    {
      name: 'page-views',
      type: 'number',
      required: true,
    },
    {
      name: 'likes',
      type: 'number',
      required: true,
    },
    {
      name: 'shares',
      type: 'number',
      required: true,
    },
    {
      name: 'average-time-on-page',
      type: 'number',
      required: true,
    },
    {
      name: 'bounce-rate',
      type: 'number',
      required: true,
    },
  ],
}
