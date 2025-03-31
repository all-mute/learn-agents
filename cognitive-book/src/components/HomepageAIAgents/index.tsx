import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function HomepageAIAgents(): ReactNode {
  return (
    <section className={styles.aiAgents}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--6', styles.aiAgentsContent)}>
            <Heading as="h2" className={styles.title}>
              <Translate id="homepage.aiAgents.title">
                What are AI Agents?
              </Translate>
            </Heading>
            <p className={styles.description}>
              <Translate id="homepage.aiAgents.description1">
                AI Agents are software systems capable of autonomously perceiving their environment, 
                making decisions, and taking actions to achieve specified goals without constant 
                human intervention.
              </Translate>
            </p>
            <p className={styles.description}>
              <Translate id="homepage.aiAgents.description2">
                Modern AI agents are powered by advanced language models (LLMs), have access to 
                tools and external APIs, and utilize memory to store interaction context.
              </Translate>
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/start-here">
                <Translate id="homepage.aiAgents.learnButton">
                  Learn the basics
                </Translate>
              </Link>
              <Link
                className="button button--warning button--lg"
                style={{ marginLeft: '10px' }}
                to="https://roadmap.sh/r/ai-agents-2025-roadmap">
                <Translate id="homepage.aiAgents.roadmapButton">
                  Explore interactive roadmap
                </Translate>
              </Link>
            </div>
          </div>
          <div className={clsx('col col--6', styles.aiAgentsImage)}>
            <img 
              src="/img/whai-is-agent.png" 
              alt="AI Agent Diagram" 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 