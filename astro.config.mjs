// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

import tunnel from 'astro-tunnel'

export const items = [
  {
    label: 'About JavaScript',
    items: [
      {
        label: 'general information',
        slug: 'about-javascript/general-information',
        img: 'dwdw',
      },
      {
        label: 'historical background',
        slug: 'about-javascript/historical-background',
        img: 'dwdw',
      },
    ],
  },
  {
    label: 'Fundamentals',
    items: [
      { label: 'first steps', slug: 'fundamentals/first-steps', img: 'dwdw' },
      { label: 'comments', slug: 'fundamentals/comments', img: 'dwdw' },
      { label: 'operators', slug: 'fundamentals/operators', img: 'dwdw' },
      { label: 'variables', slug: 'fundamentals/variables', img: 'dwdw' },
      {
        label: 'declaration keywords',
        slug: 'fundamentals/declaration-keywords',
        img: 'dwdw',
      },
      { label: 'conditionals', slug: 'fundamentals/conditionals', img: 'dwdw' },
      { label: 'loops', slug: 'fundamentals/loops', img: 'dwdw' },
      { label: 'functions 1', slug: 'fundamentals/functions-1', img: 'dwdw' },
      { label: 'functions 2', slug: 'fundamentals/functions-2', img: 'dwdw' },
    ],
  },
  {
    label: 'Data types',
    items: [
      { label: 'introduction', slug: 'data-types/introduction', img: 'dwdw' },
      { label: 'numbers', slug: 'data-types/numbers', img: 'dwdw' },
      {
        label: 'objects fundamentals',
        slug: 'data-types/objects-fundamentals',
        img: 'dwdw',
      },
      { label: 'arrays', slug: 'data-types/arrays', img: 'dwdw' },
      { label: 'other types', slug: 'data-types/other-types', img: 'dwdw' },
      {
        label: 'iteration techniques',
        slug: 'data-types/iteration-techniques',
        img: 'dwdw',
      },
      {
        label: 'type conversion',
        slug: 'data-types/type-conversion',
        img: 'dwdw',
      },
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
      favicon: './src/assets/favicon.png',
      title: '',
      logo: {
        light: './src/assets/JS-light.png',
        dark: './src/assets/JS-dark.png',
      },
      sidebar: items,
    }),
    tunnel(),
  ],
})
