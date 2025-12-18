import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1]

export default defineConfig({
  // For GitHub Pages project sites, assets must be served from /<repo>/.
  // This keeps local dev at / while GitHub Actions builds with the correct base.
  base: process.env.GITHUB_ACTIONS && repoName ? `/${repoName}/` : '/',
  title: "Sound 79 Online Marketing Guide",
  description: "A practical marketing playbook for growing Sound 79 through the website.",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start Here', link: '/content/solo-founder-priority' },
      { text: 'Complete Guide', link: '/content/complete-guide-strategies' },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'API Examples', link: '/api-examples' }
        ]
      }
    ],

    sidebar: {
      '/content/': [
        {
          text: 'Guide',
          items: [
            { text: 'Start Here (Solo Founder)', link: '/content/solo-founder-priority' },
            { text: 'Complete Guide (Deep Dive)', link: '/content/complete-guide-strategies' }
          ]
        }
      ],
      '/': [
        {
          text: 'Guide',
          items: [
            { text: 'Start Here (Solo Founder)', link: '/content/solo-founder-priority' },
            { text: 'Complete Guide (Deep Dive)', link: '/content/complete-guide-strategies' }
          ]
        },
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'API Examples', link: '/api-examples' }
          ]
        }
      ]
    },

    search: {
      provider: 'local'
    }
  }
})
