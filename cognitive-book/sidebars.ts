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
      'not-agents/optimization',
      {
        type: 'category' as const,
        label: 'Backend Basics',
        collapsed: true,
        collapsible: true,
        items: [
          'not-agents/backend-0/index',
          'not-agents/backend-0/internet',
          'not-agents/backend-0/linux',
          'not-agents/backend-0/databases',
          'not-agents/backend-0/microservices',
          'not-agents/backend-0/chunks',
          'not-agents/backend-0/sustainability',
        ],
      },
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
    label: 'Senior',
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
