import * as prismic from '@prismicio/client'

export const FlomenusBlog = 'flomenus-blog'

export const client = prismic.createClient(FlomenusBlog, {
  accessToken: '',
  routes: [
    {
      type: 'article',
      path: '/',
    },
  ],
})