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
}

function TagCategoryLayoutContent({
  baseUrl,
  currentArticles,
  currentPage,
  totalPages,
  ArticleListComponent,
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

  return (
    <>
      {/* Main Content - Articles List - Full Width (No Sidebar) */}
      <div style={{ width: isMobile ? '100%' : '50%' }}>
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

