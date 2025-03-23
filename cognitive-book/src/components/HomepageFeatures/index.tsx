import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  titleId: string;
  description: string;
  descriptionId: string;
  icon: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Practical Examples',
    titleId: 'homepage.features.practical.title',
    description: 'Learn how to create AI agents with real-world examples. Step-by-step from simple chatbots to complex autonomous systems.',
    descriptionId: 'homepage.features.practical.description',
    icon: '🛠️',
  },
  {
    title: 'Foundational Knowledge',
    titleId: 'homepage.features.foundational.title',
    description: 'Deep understanding of AI agent fundamentals. From NLP basics to complex multi-agent interaction architectures.',
    descriptionId: 'homepage.features.foundational.description',
    icon: '📚',
  },
  {
    title: 'Developer Community',
    titleId: 'homepage.features.community.title',
    description: 'Join a community of enthusiasts and professionals studying and developing AI agent technologies.',
    descriptionId: 'homepage.features.community.description',
    icon: '👥',
  },
  {
    title: 'Free LLM API Keys',
    titleId: 'homepage.features.freekeys.title',
    description: 'Get free access to powerful language models. Practice with real LLM APIs without spending a dime.',
    descriptionId: 'homepage.features.freekeys.description',
    icon: '🔑',
  },
];

function Feature({title, titleId, description, descriptionId, icon}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <div className={styles.featureContent}>
          <Heading as="h3">
            <Translate id={titleId}>{title}</Translate>
          </Heading>
          <p>
            <Translate id={descriptionId}>{description}</Translate>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">
            <Translate id="homepage.features.section.title">
              What Our Handbook Offers
            </Translate>
          </Heading>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
