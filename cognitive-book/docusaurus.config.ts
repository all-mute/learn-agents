import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Learn AI Agents book',
  tagline: 'Zero2Hero Guide on building AI Agents',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://learn-agents.diy',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'all-mute', // Usually your GitHub org/user name.
  projectName: 'learn-agents', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Добавляем мета-тег для верификации Algolia
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '7B48E67DF480B0BB',
      },
    },
  ],

  // Custom fields for GitalkComponent
  customFields: {
    gitalk: {
      clientID: process.env.GITALK_CLIENT_ID,
      clientSecret: process.env.GITALK_CLIENT_SECRET,
      repo: 'learn-agents-comments',
      owner: 'all-mute',
      admin: ['all-mute'],
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
        label: 'English',
      },
      ru: {
        htmlLang: 'ru-RU',
        label: 'Русский',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/all-mute/learn-agents/edit/main/',
          routeBasePath: '/', // Docs will be served at the root
        },
        blog: false, // Blog is disabled as it's not needed for the handbook
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Learn AI Agents book',
      logo: {
        alt: 'AI Agents Handbook Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Handbook',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/merkulov.courses/cognitive-book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'PM4FOH456Y',

      // Public API key: it is safe to commit it
      apiKey: '0cf52c656bb547faf8b5004db40c407d',

      indexName: 'Learn Agents',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Handbook',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },
            {
              label: 'Foundations',
              to: '/foundations',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/3JBx5HUR9n',
            },
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/merkulov.courses/cognitive-book/discussions',
            },
            {
              label: 'Telegram (ru)',
              href: 'https://t.me/merkulov_ai',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Roadmap.sh',
              href: 'https://roadmap.sh/r/ai-agents-2025-roadmap',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/merkulov.courses/cognitive-book',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI Agents Handbook. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
