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
      {
        type: 'category' as const,
        label: 'VibeCoding',
        collapsed: true,
        collapsible: true,
        items: [
          'not-agents/vibecoding/index',
          'not-agents/vibecoding/tools-comparison',
          'not-agents/vibecoding/mcp-comparison',
          'not-agents/vibecoding/computer-use-comparison',
        ],
      },

      'not-agents/algorithms',
      {
        type: 'category' as const,
        label: 'Lite Backend Development',
        collapsed: true,
        collapsible: true,
        items: liteBackendItems, // Используем вынесенный массив
      },
      'not-agents/optimization',
      'not-agents/rapid-ui',
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
      'junior/chatbots',
      'junior/workflows',
      'junior/hf-agents',
      {
        type: 'category' as const,
        label: 'RAG',
        collapsed: true,
        collapsible: true,
        items: [
          'junior/rag/index',
          'junior/rag/why-rag',
          'junior/rag/embeddings-and-vdb',
          'junior/rag/data-preprocessing',
          'junior/rag/hybrid-rag',
          'junior/rag/structured-data',
          'junior/rag/multimodal-rag',
        ],
      },
      'junior/architectures-101',
      {
        type: 'category' as const,
        label: 'Frameworks [TBD]',
        collapsed: true,
        collapsible: true,
        items: [
          'junior/frameworks/index',
        ],
      },
      {
        type: 'category' as const,
        label: 'Infrastructure [TBD]',
        collapsed: true,
        collapsible: true,
        items: [
          'junior/infra/index',
        ],
      },
      'junior/what-to-develop',
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
      'senior/adlc',
      'senior/advanced-backend',
      'senior/llms',
      'senior/prompting',
      'senior/voice-robots',
      {
        type: 'category' as const,
        label: 'Agents',
        collapsed: true,
        collapsible: true,
        items: [
          'senior/agents/index',
        ],
      },
      {
        type: 'category' as const,
        label: 'AI Agents Evaluation',
        collapsed: true,
        collapsible: true,
        items: [
          'senior/evaluation/index',
        ],
      },
      {
        type: 'category' as const,
        label: 'Infrastructure',
        collapsed: true,
        collapsible: true,
        items: [
          'senior/infra/index',
          'senior/infra/costs-reduction',
        ],
      },
      {
        type: 'category' as const,
        label: 'Model Development',
        collapsed: true,
        collapsible: true,
        items: [
          'senior/model-dev/index',
          'senior/model-dev/lora-usecases',
        ],
      },
      {
        type: 'category' as const,
        label: 'RAG',
        collapsed: true,
        collapsible: true,
        items: [
          'senior/rag/index',
        ],
      },
      {
        type: 'category' as const,
        label: 'Workflows',
        collapsed: true,
        collapsible: true,
        items: [
          'senior/workflows/index',
        ],
      },
    ],
  },
];

const frontierSection = [
  {
    type: 'category' as const,
    label: 'Frontier [TBD]',
    collapsed: true,
    collapsible: true,
    items: [
      'frontier/index',
      'frontier/guide',
      'frontier/a2a',
      'frontier/mcp',
      'frontier/papers',
      'frontier/onthological-papers'
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
      'extra/for-robotics',
      {
        type: 'category' as const,
        label: 'LLM Use Cases',
        collapsed: true,
        collapsible: true,
        items: [
          'extra/prompt-lib/index',
          'extra/prompt-lib/agent',
          'extra/prompt-lib/assistant',
          'extra/prompt-lib/classify',
          'extra/prompt-lib/dev',
          'extra/prompt-lib/other',
          'extra/prompt-lib/qna',
          'extra/prompt-lib/text-analisys',
          'extra/prompt-lib/text-rewriting',
        ],
      },
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
    ...frontierSection,
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
