import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

// Импортируем данные авторов напрямую
// Примечание: в среде Node.js это работает, но для статической сборки Docusaurus
// потребуется переместить файл в статические активы и загружать его через fetch
const authorsList = {
  authors: [
    {
      name: "David Merkulov",
      imageUrl: "https://github.com/all-mute.png",
      website: "https://merkulov.ai",
      translationId: "homepage.authors.merkulov.description"
    },
    {
      name: "Dmitry Zhechkov",
      imageUrl: "https://storage.yandexcloud.net/david-images/authors/szechkov.jpg",
      website: "https://t.me/llm_notes",
      translationId: "homepage.authors.zhechkov.description"
    },
    {
      name: "Dmitry Savelko",
      imageUrl: "https://storage.yandexcloud.net/david-images/authors/savelko.jpg",
      website: "https://t.me/eboutdatascience",
      translationId: "homepage.authors.savelko.description"
    },
    {
      name: "Andrey Karpathy (lectures)",
      imageUrl: "https://storage.yandexcloud.net/david-images/authors/karpathy.jpg",
      website: "https://x.com/karpathy",
      translationId: "homepage.authors.karpathy.description"
    },
    {
      name: "Your Name",
      imageUrl: "/img/placeholder-author.jpg",
      website: "/handbook/contributing",
      translationId: "homepage.authors.your.description"
    }
  ]
};

type AuthorItem = {
  name: string;
  imageUrl: string;
  website: string;
  translationId: string;
};

function Author({ name, imageUrl, website, translationId }: AuthorItem) {
  return (
    <div className={clsx('col col--4', styles.author)}>
      <a 
        href={website} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.authorCardLink}
      >
        <div className={styles.authorCard}>
          <img className={styles.authorImage} src={imageUrl} alt={name} />
          <div className={styles.authorContent}>
            <Heading as="h3" className={styles.authorName}>{name}</Heading>
            <div className={styles.authorDescription}>
              <Translate id={translationId} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function HomepageAuthors(): ReactNode {
  // Используем данные из списка
  const authors = authorsList.authors;

  return (
    <section className={styles.authors}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id="homepage.authors.title">Project Authors</Translate>
        </Heading>
        <div className="row">
          {authors.map((props, idx) => (
            <Author key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
} 