import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// Start Here section
const startHereSection = [
  {
    type: 'category' as const,
    label: 'Start Here',
    collapsed: true,
    collapsible: true,
    items: [
      'start-here/index', // about roadmap
      'start-here/prerequisites',
      'start-here/motivation',
      'start-here/history',
    ],
  },
];

// Basics section
const basicsSection = [
  {
    type: 'category' as const,
    label: 'Basics',
    collapsed: true,
    collapsible: true,
    items: [
      'basics/index', // what is inside
      'basics/1st-project', // api keys, project
      'basics/what-is-llm',
      'basics/openai-api',
      'basics/prompt-eng',
      'basics/llm-usecases',
      'basics/llm-eval',
    ],
  },
];

// Выносим элементы бэкенд разработки в отдельную переменную
const liteBackendItems = [
  'not-agents/backend/index',
  'not-agents/backend/basics',
  'not-agents/backend/practice-1',
  'not-agents/backend/fastapi',
  'not-agents/backend/databases',
  'not-agents/backend/practice-2',
  'not-agents/backend/cloud',
  'not-agents/backend/docker',
  'not-agents/backend/microservices',
  'not-agents/backend/serverless',
  'not-agents/backend/practice-3',
  'not-agents/backend/extra',
];

// Not Agents section
const notAgentsSection = [
  {
    type: 'category' as const,
    label: 'Not AI Agents',
    collapsed: true,
    collapsible: true,
    items: [
      'not-agents/index',
      'not-agents/metalearning',
      'not-agents/vibecoding',
      'not-agents/algorithms',
      {
        type: 'category' as const,
        label: 'Lite Backend Development',
        collapsed: true,
        collapsible: true,
        items: liteBackendItems, // Используем вынесенный массив
      },
      'not-agents/optimization',
    ],
  },
];

// Junior Developer section
const juniorSection = [
  {
    type: 'category' as const,
    label: 'Junior',
    collapsed: true,
    collapsible: true,
    items: [
      'junior/index',
      'junior/hf-agents',
      {
        type: 'category' as const,
        label: 'RAG',
        collapsed: true,
        collapsible: true,
        items: [
          'junior/rag/index',
        ],
      },
      {
        type: 'category' as const,
        label: 'Frameworks',
        collapsed: true,
        collapsible: true,
        items: [
          'junior/frameworks/index',
        ],
      },
      {
        type: 'category' as const,
        label: 'Infrastructure',
        collapsed: true,
        collapsible: true,
        items: [
          'junior/infra/index',
        ],
      },
    ],
  },
];

// Senior Developer section
const seniorSection = [
  {
    type: 'category' as const,
    label: 'Senior [TBD]',
    collapsed: true,
    collapsible: true,
    items: [
      'senior/index',
    ],
  },
];



const extraSection = [
  {
    type: 'category' as const,
    label: 'Extra',
    collapsed: true,
    collapsible: true,
    items: [
      'extra/index',
      'extra/tool-use-benchmarks',
    ],
  },
];

const sidebars: SidebarsConfig = {
  // Define the structure of the AI Agents handbook
  tutorialSidebar: [
    'about', // Introduction
    //'agents', // Storytelling
    ...startHereSection,
    ...basicsSection,
    ...juniorSection,
    ...seniorSection,
    ...extraSection,
    ...notAgentsSection,
  {
    type: 'link',
    label: 'View roadmap',
    href: 'https://roadmap.sh/r/ai-agents-2025-roadmap',
  },
  {
    type: 'doc',
    id: 'release-dates',
  },
  ],
};

export default sidebars;
