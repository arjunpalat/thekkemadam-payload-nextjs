// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { BlogPosts } from './collections/BlogPosts'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { Topics } from './collections/Topics'
import { Comments } from './collections/Comments'
import { SEOMeta } from './collections/SEOMeta'
import { Analytics } from './collections/Analytics'
import { BlogPostTopics } from './collections/BlogPostTopics'
import { Tags } from './collections/Tags'
import { BlogPostTags } from './collections/BlogPostTags'
import { RelatedPosts } from './collections/RelatedPosts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, BlogPosts, Topics, Comments, SEOMeta, Analytics, BlogPostTopics, Tags, BlogPostTags, RelatedPosts],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
