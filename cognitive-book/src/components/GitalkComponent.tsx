import React, { useEffect, useRef } from 'react';
import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';
import { useLocation } from '@docusaurus/router';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';

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
    
    const gitalkInstance = new Gitalk({
      clientID: options.clientID || 'YOUR_CLIENT_ID',
      clientSecret: options.clientSecret || 'YOUR_CLIENT_SECRET',
      repo: options.repo || 'YOUR_REPO_NAME',
      owner: options.owner || 'YOUR_GITHUB_ID',
      admin: options.admin || ['YOUR_GITHUB_ID'],
      // Используем стандартную логику Gitalk для определения ID
      distractionFreeMode: options.distractionFreeMode ?? false,
      language: 'ru',
      ...options,
    });
    
    // Устанавливаем атрибут тема для контейнера
    containerRef.current.setAttribute('data-theme', colorMode);
    
    gitalkInstance.render(containerRef.current);
  }, [location.pathname, options, colorMode]); // Re-render when pathname or color mode changes
  
  return (
    <div 
      className={clsx('gitalk-container', `gitalk-${colorMode}`)} 
      ref={containerRef} 
      aria-label="Комментарии"
    />
  );
} 