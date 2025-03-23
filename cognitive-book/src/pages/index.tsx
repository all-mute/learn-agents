import type {ReactNode} from 'react';
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageAIAgents from '@site/src/components/HomepageAIAgents';
import HomepageAuthors from '@site/src/components/HomepageAuthors';
import HomepageCommunities from '@site/src/components/HomepageCommunities';
import HomepageMission from '@site/src/components/HomepageMission';
import HomepageModules from '@site/src/components/HomepageModules';
import HomepageCallToAction from '@site/src/components/HomepageCallToAction';
import GitHubStars from '@site/src/components/GitHubStars';
import Heading from '@theme/Heading';

import styles from './index.module.css';

import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate>{siteConfig.title}</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate>
            {siteConfig.tagline}
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate id="homepage.header.button">
              Start Learning AI Agents
            </Translate> 🚀
          </Link>
        </div>
        <GitHubStars />
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate({
        id: 'homepage.meta.title',
        message: `${siteConfig.title} - Interactive Handbook for Building AI Agents`
      })}
      description={translate({
        id: 'homepage.meta.description',
        message: "Interactive handbook for creating and using AI agents with code examples and practical tutorials"
      })}>
      <HomepageHeader />
      <main>
        <HomepageAIAgents />
        
        <HomepageFeatures />
        <HomepageModules />
        <HomepageMission />
        <HomepageAuthors />
        <HomepageCommunities />
      </main>
    </Layout>
  );
}
