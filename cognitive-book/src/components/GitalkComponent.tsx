import React, { useEffect, useRef } from 'react';
import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';
import { useLocation } from '@docusaurus/router';
import { useColorMode } from '@docusaurus/theme-common';

interface GitalkComponentProps {
  options?: {
    clientID?: string;
    clientSecret?: string;
    repo?: string;
    owner?: string;
    admin?: string[];
    [key: string]: any;
  };
}

export default function GitalkComponent({ options = {} }: GitalkComponentProps): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { colorMode } = useColorMode();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clean up previous instance
    containerRef.current.innerHTML = '';
    
    // Создаем уникальный ID на основе пути страницы
    const issueId = location.pathname.replace(/[^\w\-]/g, '-').slice(0, 50);
    
    // Параметры для заголовка issue
    const title = document.title || 'Comments';
    
    const gitalkInstance = new Gitalk({
      clientID: options.clientID || 'YOUR_CLIENT_ID',
      clientSecret: options.clientSecret || 'YOUR_CLIENT_SECRET',
      repo: options.repo || 'YOUR_REPO_NAME',
      owner: options.owner || 'YOUR_GITHUB_ID',
      admin: options.admin || ['YOUR_GITHUB_ID'],
      id: issueId,
      title: title,
      distractionFreeMode: options.distractionFreeMode ?? false,
      labels: options.labels || ['comment'],
      pagerDirection: options.pagerDirection || 'last',
      createIssueManually: options.createIssueManually ?? false,
      language: 'ru',
      ...options,
    });
    
    // Добавляем атрибут data-theme для поддержки темной темы
    if (colorMode === 'dark') {
      containerRef.current.setAttribute('data-theme', 'dark');
    } else {
      containerRef.current.setAttribute('data-theme', 'light');
    }
    
    gitalkInstance.render(containerRef.current);
  }, [location.pathname, options, colorMode]); // Re-render when pathname or color mode changes
  
  return (
    <div className="gitalk-container" ref={containerRef} />
  );
} 