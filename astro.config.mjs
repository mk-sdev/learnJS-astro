import { defineConfig } from 'astro/config'
import { starlight } from '@astrojs/starlight'

const sidebarItems = [
  { label: 'comments', slug: 'fundamentals/comments' },
  { label: 'errors', slug: 'fundamentals/errors' },
  { label: 'components', slug: 'fundamentals/components' },
  // Dodaj inne elementy według potrzeb
]

export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Fundamentals',
          items: sidebarItems, // Użycie tablicy do generowania elementów
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
})
