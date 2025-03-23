import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type { WrapperProps } from '@docusaurus/types';
import GitalkComponent from '@site/src/components/GitalkComponent';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();
  const gitalkConfig = siteConfig.customFields?.gitalk as Record<string, any> || {};

  return (
    <>
      <Footer {...props} />
      <div className="docusaurus-mt-lg">
        <GitalkComponent 
          options={{
            clientID: gitalkConfig.clientID,
            clientSecret: gitalkConfig.clientSecret,
            repo: gitalkConfig.repo,
            owner: gitalkConfig.owner,
            admin: gitalkConfig.admin,
            // Вы можете добавить другие опции здесь
          }} 
        />
      </div>
    </>
  );
} 