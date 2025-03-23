import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type CommunityItem = {
  title: string;
  titleId: string;
  description: string;
  descriptionId: string;
  iconUrl?: string;
  icon?: string;
  link: string;
  buttonText: string;
  buttonTextId: string;
  color: string;
};

const CommunityList: CommunityItem[] = [
  {
    title: 'Discord Community',
    titleId: 'homepage.communities.discord.title',
    description: 'Join our Discord server to participate in discussions, share your projects, and get direct support from community members.',
    descriptionId: 'homepage.communities.discord.description',
    iconUrl: 'https://img.icons8.com/?size=100&id=25627&format=png&color=000000',
    link: 'https://discord.gg/3JBx5HUR9n',
    buttonText: 'Join Discord',
    buttonTextId: 'homepage.communities.discord.button',
    color: '#5865F2',
  },
  {
    title: 'Telegram Group',
    titleId: 'homepage.communities.telegram.title',
    description: 'Join our Telegram group to participate in discussions, share your projects, and get direct support from community members.',
    descriptionId: 'homepage.communities.telegram.description',
    iconUrl: 'https://img.icons8.com/?size=100&id=TCnKnYZFoOzM&format=png&color=000000',
    link: 'https://t.me/learnagents',
    buttonText: 'Join Telegram',
    buttonTextId: 'homepage.communities.telegram.button',
    color: '#0088cc',
  },
];

function Community({
  title,
  titleId,
  description,
  descriptionId,
  icon,
  iconUrl,
  link,
  buttonText,
  buttonTextId,
  color,
}: CommunityItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className={styles.communityCard}>
        <div className={styles.communityIcon} style={{backgroundColor: color}}>
          {iconUrl ? (
            <img src={iconUrl} alt={title} className={styles.communityIconImage} />
          ) : (
            <span>{icon}</span>
          )}
        </div>
        <div className={styles.communityContent}>
          <Heading as="h3" className={styles.communityTitle}>
            <Translate id={titleId}>{title}</Translate>
          </Heading>
          <p className={styles.communityDescription}>
            <Translate id={descriptionId}>{description}</Translate>
          </p>
          <div>
            <Link
              className={styles.communityButton}
              style={{backgroundColor: color}}
              to={link}>
              <Translate id={buttonTextId}>{buttonText}</Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageCommunities(): ReactNode {
  return (
    <section className={styles.communities}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">
            <Translate id="homepage.communities.title">
              Join Our Community
            </Translate>
          </Heading>
          <p className={styles.subtitle}>
            <Translate id="homepage.communities.subtitle">
              Connect with other AI agent developers and enthusiasts
            </Translate>
          </p>
        </div>
        <div className="row">
          {CommunityList.map((props, idx) => (
            <Community key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
} 