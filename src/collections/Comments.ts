import type { CollectionConfig } from 'payload'

export const Comments: CollectionConfig = {
  slug: 'comments',
  fields: [
    {
      name: 'blog-post',
      type: 'relationship',
      relationTo: 'blog-posts',
      required: true,
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'commentText',
      type: 'textarea',
      required: true,
    },
    {
      name: 'parent-comment',
      type: 'relationship',
      relationTo: 'comments',
      required: false,
      hooks: {
        beforeChange: [({ value }) => value || null],
      },
    },
    {
      name: 'created',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [({ value }) => value || new Date().toISOString()],
      },
    },
  ],
}
