import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function HomepageCallToAction(): ReactNode {
  return (
    <section className={styles.callToAction}>
      <div className="container">
        <div className={styles.content}>
          <Heading as="h2" className={styles.title}>
            <Translate id="homepage.cta.title">
              Ready to Start Your AI Agent Journey?
            </Translate>
          </Heading>
          <p className={styles.description}>
            <Translate id="homepage.cta.description">
              Dive into our comprehensive resources and connect with our community of AI agent developers
            </Translate>
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--outline button--lg button--primary-light"
              style={{ 
                backgroundColor: 'white', 
                color: '#333',
                border: '2px solid white',
                fontWeight: 'bold'
              }}
              to="/docs/intro">
              <Translate id="homepage.cta.textbook">
                Start Learning
              </Translate>
            </Link>
            <Link
              className="button button--outline button--lg"
              style={{ 
                color: 'white', 
                borderColor: 'white',
                fontWeight: 'bold'
              }}
              to="https://roadmap.sh/r/ai-agents-2025-roadmap">
              <Translate id="homepage.cta.roadmap">
                Explore Roadmap
              </Translate>
            </Link>
            <Link
              className="button button--outline button--lg"
              style={{ 
                color: 'white', 
                borderColor: 'white',
                fontWeight: 'bold'
              }}
              to="https://t.me/learnagents">
              <Translate id="homepage.cta.telegram">
                Join Telegram
              </Translate>
            </Link>
            <Link
              className="button button--outline button--lg"
              style={{ 
                color: 'white', 
                borderColor: 'white',
                fontWeight: 'bold'
              }}
              to="https://discord.gg/3JBx5HUR9n">
              <Translate id="homepage.cta.discord">
                Join Discord
              </Translate>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 