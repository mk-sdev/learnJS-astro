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
      },
      {
        label: 'historical background',
        slug: 'about-javascript/historical-background',
      },
    ],
  },
  {
    label: 'Fundamentals',
    items: [
      { label: 'first steps', slug: 'fundamentals/first-steps' },
      { label: 'comments', slug: 'fundamentals/comments' },
      { label: 'operators', slug: 'fundamentals/operators' },
      { label: 'variables', slug: 'fundamentals/variables' },
      {
        label: 'declaration keywords',
        slug: 'fundamentals/declaration-keywords',
      },
      { label: 'conditionals', slug: 'fundamentals/conditionals' },
      { label: 'loops', slug: 'fundamentals/loops' },
      { label: 'functions 1', slug: 'fundamentals/functions-1' },
      { label: 'functions 2', slug: 'fundamentals/functions-2' },
    ],
  },
  {
    label: 'Data types',
    items: [
      { label: 'introduction', slug: 'data-types/introduction' },
      { label: 'numbers', slug: 'data-types/numbers' },
      { label: 'strings', slug: 'data-types/strings' },
      {
        label: 'objects fundamentals',
        slug: 'data-types/objects-fundamentals',
      },
      { label: 'arrays', slug: 'data-types/arrays' },
      { label: 'other types', slug: 'data-types/other-types' },
      {
        label: 'iteration techniques',
        slug: 'data-types/iteration-techniques',
      },
      { label: 'type conversion', slug: 'data-types/type-conversion' },
    ],
  },
  {
    label: 'Object oriented JavaScript',
    items: [
      {
        label: 'exploring objects 1',
        slug: 'object-oriented-javascript/exploring-objects-1',
      },
      {
        label: 'exploring objects 2',
        slug: 'object-oriented-javascript/exploring-objects-2',
      },
      {
        label: 'custom types',
        slug: 'object-oriented-javascript/custom-types',
      },
      {
        label: 'inheritance',
        slug: 'object-oriented-javascript/inheritance',
      },
      {
        label: 'encapsulation',
        slug: 'object-oriented-javascript/encapsulation',
      },
      {
        label: 'abstraction',
        slug: 'object-oriented-javascript/abstraction',
      },
      {
        label: 'polymorphism',
        slug: 'object-oriented-javascript/polymorphism',
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
