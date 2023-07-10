import { defineConfig } from '@jcamp/vitepress-blog-theme/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'PlasticDB Blog',
  description: 'PlasticDB blog website',
  themeConfig: {
    logo: '/assets/logo.png',
    blog: {
      title: 'PlasticDB Blog',
      description: "Empowers your team with AI to get answers from the database even if they don't know SQL.",
      defaultAuthor: "Radi Barq",
      categoryIcons: {
        article: 'i-[heroicons-outline/book-open]',
        tutorial: 'i-[heroicons-outline/academic-cap]',
        document: 'i-[heroicons-outline/annotation]',
      },
      tagIcons: {
        github: 'i-[carbon/logo-github]',
        vue: 'i-[carbon/logo-vue]',
      },
    },
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Blog',
        items: [
          {
            text: 'Blog',
            link: '/blog/',
            activeMatch: '/blog/',
          },
          {
            text: 'Tags',
            link: '/blog/tags',
            activeMatch: '/blog/tags',
          },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/jcamp-code/vitepress-blog-theme',
      },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/company/plasticdb',
      },
      {
        icon: 'twitter',
        link: 'https://twitter.com/PlasticDB'
      },
      {
        icon: 'instagram',
        link: 'https://www.instagram.com/plastic_db'
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present PlasticDB'
    }
  },
})
