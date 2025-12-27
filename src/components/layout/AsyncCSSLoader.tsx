'use client';

import { useEffect } from 'react';

/**
 * Client component to load external CSS asynchronously
 * Prevents hydration errors by only running on the client
 */
export default function AsyncCSSLoader() {
  useEffect(() => {
    // Load Bootstrap Icons CSS asynchronously after hydration
    const linkId = 'bootstrap-icons-css';
    let link = document.getElementById(linkId) as HTMLLinkElement;
    
    if (!link) {
      // Create the link if it doesn't exist
      link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css';
      link.media = 'print';
      document.head.appendChild(link);
    }
    
    // Change media to 'all' once loaded
    const handleLoad = () => {
      if (link) {
        link.media = 'all';
      }
    };
    
    if (link.sheet) {
      // Already loaded
      link.media = 'all';
    } else {
      link.onload = handleLoad;
      // Fallback for browsers that don't fire onload
      setTimeout(() => {
        if (link && link.media === 'print') {
          link.media = 'all';
        }
      }, 100);
    }
  }, []);

  return null;
}

