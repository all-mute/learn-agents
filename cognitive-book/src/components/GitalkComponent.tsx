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
    
    // Используем pathname как основу для идентификатора
    // По умолчанию Gitalk использует location.href
    // Но нам нужен более короткий ID (до 50 символов)
    const id = location.pathname.replace(/\/+/g, '-').slice(0, 49);
    
    // Формируем URL страницы для использования в body issue
    const pageUrl = window.location.origin + location.pathname;
    
    const gitalkInstance = new Gitalk({
      clientID: options.clientID || 'YOUR_CLIENT_ID',
      clientSecret: options.clientSecret || 'YOUR_CLIENT_SECRET',
      repo: options.repo || 'YOUR_REPO_NAME',
      owner: options.owner || 'YOUR_GITHUB_ID',
      admin: options.admin || ['YOUR_GITHUB_ID'],
      id: id,                                // Уникальный ID страницы (до 50 символов)
      title: document.title,                 // Заголовок issue
      body: `${pageUrl}\n\n${document.title}`, // Тело issue
      labels: ['gitalk', 'comment'],         // Метки
      perPage: 20,                           // Количество комментариев на странице
      pagerDirection: 'last',                // Сортировка (последние сверху)
      createIssueManually: false,            // Автоматическое создание issue
      distractionFreeMode: true,             // Режим без отвлечения
      language: 'en',                        // Язык (русский)
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
      aria-label="Comments"
    />
  );
} 