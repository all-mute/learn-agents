import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY || 'e325bfe930f7ffc60495c0799ccd5c56';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Learn AI Agents Handbook',
  tagline: 'The most comprehensive zero-to-hero handbook on building AI Agents',
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
    // Скрипт Яндекс.Метрики
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(100536947, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        });
      `,
    },
    // NoScript тег для Яндекс.Метрики
    {
      tagName: 'noscript',
      attributes: {},
      innerHTML: `
        <div><img src="https://mc.yandex.ru/watch/100536947" style="position:absolute; left:-9999px;" alt="" /></div>
      `,
    },
  ],


  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'zh', 'es'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
        label: 'English',
      },
      ru: {
        htmlLang: 'ru-RU',
        label: 'Русский',
      },
      zh: {
        htmlLang: 'zh-CN',
        label: '中文',
      },
      es: {
        htmlLang: 'es-ES',
        label: 'Español',
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
    image: 'img/roadmap-junior.png',
    navbar: {
      title: 'AI Agents Handbook',
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
          type: 'doc',
          position: 'left',
          docId: 'handbook/contributing',
          label: 'Cooperation',
        },
        {
          href: 'https://discord.gg/3JBx5HUR9n',
          position: 'left',
          label: 'Community',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/all-mute/learn-agents',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'PM4FOH456Y',

      // Public API key: it is safe to commit it
      apiKey: ALGOLIA_API_KEY,

      indexName: 'Learn Agents AAA',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`true` by default)
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
              label: 'START HERE',
              to: '/intro',
            },
            {
              label: 'Basics',
              to: '/basics/index',
            },
            {
              label: 'Junior',
              to: '/junior/index',
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
              label: 'Telegram group',
              href: 'https://t.me/learnagents',
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
              href: 'https://github.com/all-mute/learn-agents',
            },
            {
              label: 'DM Author',
              href: 'https://t.me/nongilgameshj',
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
    announcementBar: {
      id: 'language_notice',
      content: 'The handbook is still in its beta stage. We eagerly seek your input and recommendations.',
      backgroundColor: '#4CAF50',
      textColor: '#000000',
      isCloseable: true,
    },
  } satisfies Preset.ThemeConfig,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
