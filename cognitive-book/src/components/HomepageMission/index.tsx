import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type StandardItem = {
  title: ReactNode;
  description: ReactNode;
  icon: string;
};

const StandardsList: StandardItem[] = [
  {
    title: <Translate id="homepage.mission.standards.practical.title">Practical Approach</Translate>,
    description: (
      <Translate id="homepage.mission.standards.practical.description">
        All handbook materials are designed with practical application in mind.
        Theory is supported by working code and real-world examples.
      </Translate>
    ),
    icon: '🔧',
  },
  {
    title: <Translate id="homepage.mission.standards.relevance.title">Relevance</Translate>,
    description: (
      <Translate id="homepage.mission.standards.relevance.description">
        We constantly update our materials, keeping track of technology developments
        and new methods in AI agent development.
      </Translate>
    ),
    icon: '⚡',
  },
  {
    title: <Translate id="homepage.mission.standards.accessibility.title">Accessibility</Translate>,
    description: (
      <Translate id="homepage.mission.standards.accessibility.description">
        The handbook is accessible to everyone, regardless of level. We strive to explain
        complex concepts in simple and understandable language.
      </Translate>
    ),
    icon: '🌟',
  },
  {
    title: <Translate id="homepage.mission.standards.community.title">Community</Translate>,
    description: (
      <Translate id="homepage.mission.standards.community.description">
        We're creating not just a textbook, but an active community of developers
        ready to help each other and advance AI agent technologies.
      </Translate>
    ),
    icon: '🤝',
  },
];

function Standard({ title, description, icon }: StandardItem) {
  return (
    <div className={clsx('col col--6', styles.standard)}>
      <div className={styles.standardHeader}>
        <span className={styles.standardIcon}>{icon}</span>
        <Heading as="h3" className={styles.standardTitle}>
          {title}
        </Heading>
      </div>
      <div className={styles.standardDescription}>
        {description}
      </div>
    </div>
  );
}

export default function HomepageMission(): ReactNode {
  return (
    <section className={styles.mission}>
      <div className="container">
        <div className={styles.missionIntro}>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="homepage.mission.title">Handbook Mission</Translate>
          </Heading>
          <p className={styles.missionDescription}>
            <Translate id="homepage.mission.description">
              Our goal is to provide developers and researchers with a complete guide
              to creating and using AI agents, combining deep theoretical understanding
              with practical tools and solutions. We strive to make AI agent technologies
              accessible to everyone who wants to master and implement them.
            </Translate>
          </p>
        </div>
        
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id="homepage.mission.standards.title">Our Standards</Translate>
        </Heading>
        <div className="row">
          {StandardsList.map((props, idx) => (
            <Standard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
} 