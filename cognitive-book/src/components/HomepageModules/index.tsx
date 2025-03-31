import React, {type ReactNode, useState} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type ModuleItem = {
  title: string;
  titleId: string;
  description: string;
  descriptionId: string;
  image: string;
  link: string;
};

const ModulesList: ModuleItem[] = [
  {
    title: 'Basics',
    titleId: 'homepage.modules.basics.title',
    description: 'Get started with AI agents fundamentals. Learn core concepts, architecture, and build your first AI agent.',
    descriptionId: 'homepage.modules.basics.description',
    image: '/img/roadmap-basics.png',
    link: '/basics/intro',
  },
  {
    title: 'Junior',
    titleId: 'homepage.modules.junior.title',
    description: 'Advance your AI agent skills. Learn how to implement memory, tools, and create more complex autonomous systems.',
    descriptionId: 'homepage.modules.junior.description',
    image: '/img/roadmap-junior.png',
    link: '/junior/intro',
  },
  {
    title: 'Future Modules',
    titleId: 'homepage.modules.future.title',
    description: 'Stay tuned for upcoming modules covering advanced topics including autonomous agents, agent swarms, and more.',
    descriptionId: 'homepage.modules.future.description',
    image: '/img/roadmap-senior.png',
    link: '/intro',
  },
];

export default function HomepageModules(): ReactNode {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === ModulesList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? ModulesList.length - 1 : prevIndex - 1
    );
  };

  const currentModule = ModulesList[activeIndex];

  return (
    <section className={styles.modules}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">
            <Translate id="homepage.modules.title">
              Learning Modules
            </Translate>
          </Heading>
        </div>
        
        <div className={styles.carousel}>
          <button onClick={prevSlide} className={styles.carouselButton}>
            &#10094;
          </button>
          
          <div className={styles.moduleContainer}>
            <div className={styles.moduleImage}>
              <img 
                src={useBaseUrl(currentModule.image)} 
                alt={currentModule.title} 
                className={styles.image}
              />
            </div>
            <div className={styles.moduleContent}>
              <Heading as="h3" className={styles.moduleTitle}>
                <Translate id={currentModule.titleId}>
                  {currentModule.title}
                </Translate>
              </Heading>
              <p className={styles.moduleDescription}>
                <Translate id={currentModule.descriptionId}>
                  {currentModule.description}
                </Translate>
              </p>
              <div className={styles.moduleButton}>
                <Link
                  className="button button--primary button--lg"
                  to={currentModule.link}>
                  <Translate id="homepage.modules.learnMore">
                    Learn More
                  </Translate>
                </Link>
              </div>
            </div>
          </div>
          
          <button onClick={nextSlide} className={styles.carouselButton}>
            &#10095;
          </button>
        </div>
        
        <div className={styles.indicators}>
          {ModulesList.map((_, index) => (
            <span
              key={index}
              className={`${styles.indicator} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 