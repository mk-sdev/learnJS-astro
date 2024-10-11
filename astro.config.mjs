// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export const items = [
  {
    label: 'Fundamentals',
    items: [
      // Each item here is one entry in the navigation menu.
      { label: 'comments', slug: 'fundamentals/comments', url: 'dwdw' },
      { label: 'variables', slug: 'fundamentals/variables', url: 'dwdw' },
    ],
  },
  // {
  //   label: 'Reference',
  //   autogenerate: { directory: 'reference' },
  // },
]

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: items,
    }),
  ],
})
