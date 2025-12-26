'use client';

import { Suspense, useState, useEffect } from 'react';
import Pagination from '@/components/ui/Pagination/Pagination';

interface TagCategoryLayoutProps {
  // Page info
  pageTitle: string;
  breadcrumbName: string;
  baseUrl: string;
  
  // Articles
  articles: any[];
  currentArticles: any[];
  currentPage: number;
  totalPages: number;
  itemsPerPage?: number;
  
  // Article list component
  ArticleListComponent: React.ComponentType<{ articles: any[] }>;
  
  // Optional styling
  width?: string | number;
  style?: React.CSSProperties;
  className?: string;
}

function TagCategoryLayoutContent({
  baseUrl,
  currentArticles,
  currentPage,
  totalPages,
  ArticleListComponent,
  width,
  style,
  className,
}: TagCategoryLayoutProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Determine width: use prop if provided, otherwise use default behavior
  const containerWidth = width !== undefined 
    ? width 
    : (isMobile ? '100%' : '50%');

  // Merge styles: prop style takes precedence, but width is applied separately
  const containerStyle: React.CSSProperties = {
    width: containerWidth,
    ...style,
  };

  return (
    <>
      {/* Main Content - Articles List - Full Width (No Sidebar) */}
      <div style={containerStyle} className={className}>
        <ArticleListComponent articles={currentArticles} />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          baseUrl={baseUrl}
          queryParams={{
            SortBy: 'DisplaySeq',
            SortDirection: 'ASC',
          }}
        />
      </div>
    </>
  );
}

export default function TagCategoryLayout(props: TagCategoryLayoutProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>}>
      <TagCategoryLayoutContent {...props} />
    </Suspense>
  );
}

