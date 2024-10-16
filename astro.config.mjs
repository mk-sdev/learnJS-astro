// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

import tunnel from 'astro-tunnel';

export const items = [
  {
    label: 'Fundamentals',
    items: [
      // Each item here is one entry in the navigation menu.
      { label: 'comments', slug: 'fundamentals/comments', img: 'dwdw' },
      { label: 'variables', slug: 'fundamentals/variables', img: 'dwdw' },
      { label: 'variables', slug: 'fundamentals/variables', img: 'dwdw' },
      { label: 'variables', slug: 'fundamentals/variables', img: 'dwdw' },
      { label: 'variables', slug: 'fundamentals/variables', img: 'dwdw' },
      { label: 'variables', slug: 'fundamentals/variables', img: 'dwdw' },
    ],
  },
  {
    label: 'Data types',
    items: [
      // Each item here is one entry in the navigation menu.
      { label: 'strings', slug: 'data-types/strings', img: 'dwdw' },
      // { label: 'arrays', slug: 'data-types/arrays', img: 'dwdw' },
    ],
  },
  // {
  //   label: 'Reference',
  //   autogenerate: { directory: 'reference' },
  // },
]

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'My Docs',
    social: {
      github: 'https://github.com/withastro/starlight',
    },
    sidebar: items,
  }), tunnel()],
})