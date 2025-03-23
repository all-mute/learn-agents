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
    
    const gitalkInstance = new Gitalk({
      clientID: options.clientID || 'YOUR_CLIENT_ID',
      clientSecret: options.clientSecret || 'YOUR_CLIENT_SECRET',
      repo: options.repo || 'YOUR_REPO_NAME', // The repository of store comments
      owner: options.owner || 'YOUR_GITHUB_ID',
      admin: options.admin || ['YOUR_GITHUB_ID'],
      id: location.pathname.slice(-50), // Ensure uniqueness and avoid the id being too long
      distractionFreeMode: false,
      ...options,
    });
    
    gitalkInstance.render(containerRef.current);
  }, [location.pathname, options, colorMode]); // Re-render when pathname or color mode changes
  
  return <div ref={containerRef} />;
} 