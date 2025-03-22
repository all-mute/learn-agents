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

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
            'https://github.com/merkulov.courses/cognitive-book/edit/main/',
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
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Handbook',
          items: [
            {
              label: 'Introduction',
              to: '/introduction',
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
              label: 'GitHub Discussions',
              href: 'https://github.com/merkulov.courses/cognitive-book/discussions',
            },
            {
              label: 'Telegram',
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
