'use client';

import { Suspense, ReactNode } from 'react';
import Link from 'next/link';
import Pagination from '@/components/ui/Pagination/Pagination';
import ArticleSidebar from '@/components/layout/ArticleSidebar/ArticleSidebar';

interface Category {
  name: string;
  href: string;
  count: number;
  active?: boolean;
}

interface PopularTag {
  name: string;
  href: string;
}

interface ArticleCategoryLayoutProps {
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
  
  // Sidebar
  categories: Category[];
  popularTags: PopularTag[];
}

function ArticleCategoryLayoutContent({
  pageTitle,
  breadcrumbName,
  baseUrl,
  articles,
  currentArticles,
  currentPage,
  totalPages,
  ArticleListComponent,
  categories,
  popularTags,
}: ArticleCategoryLayoutProps) {
  return (
    <>
      {/* Articles Section */}
      <section
      
       className="articles w-full bg-black py-8">
        <div
        
         className="container mx-auto h-15">
          <nav className="nav-breadcrumb py-4" aria-label="breadcrumb">
            <ol className="breadcrumb flex items-center gap-2 text-white text-sm">
              <li
               className="breadcrumb-item">
                <Link href="/" className="flex items-center gap-1 hover:text-[#FFCD83]">
                  <i className="bi bi-house-door-fill"></i>
                  首頁
                </Link>
              </li>
              <li className="breadcrumb-separator text-white/70">&gt;</li>
              <li className="breadcrumb-item active" aria-current="page">
                <span className="text-white/70">{breadcrumbName}</span>
              </li>
            </ol>
          </nav>
        </div>

        <div
        style={{ marginTop: '80px',}}
         className="container mx-auto px-4">
          <h1 className="text-white text-3xl mb-8 h-15">{pageTitle}</h1>

          <div
            style={{ marginTop: '20px',}}
           className="row flex flex-col lg:flex-row gap-6">
            {/* Main Content - Articles List */}
            <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-xs-12 w-full lg:w-7/10">
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

            {/* Sidebar */}
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-xs-12 w-full lg:w-3/12">
              <ArticleSidebar
                categories={categories}
                popularTags={popularTags}
                activeCategory={categories.find(c => c.active)?.name}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ArticleCategoryLayout(props: ArticleCategoryLayoutProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>}>
      <ArticleCategoryLayoutContent {...props} />
    </Suspense>
  );
}
