import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type { WrapperProps } from '@docusaurus/types';
import GitalkComponent from '@site/src/components/GitalkComponent';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const gitalkConfig = siteConfig.customFields?.gitalk as Record<string, any> || {};

  return (
    <>
      <Footer {...props} />
      <div className={styles.commentsSection}>
        <div className={styles.commentsWrapper}>
          <h3 className={styles.commentsTitle}>
            <Translate id="theme.DocItem.comments.title" description="Title of the comments section">
              Комментарии
            </Translate>
          </h3>
          <GitalkComponent 
            options={{
              clientID: gitalkConfig.clientID,
              clientSecret: gitalkConfig.clientSecret,
              repo: gitalkConfig.repo,
              owner: gitalkConfig.owner,
              admin: gitalkConfig.admin,
              // Не переопределяем дополнительные опции, используем стандартные из компонента
            }} 
          />
        </div>
      </div>
    </>
  );
} 