'use client';

import { Suspense, ReactNode } from 'react';
import Link from 'next/link';
import Pagination from '@/components/ui/Pagination/Pagination';

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
      <section className="articles w-full bg-black py-8">
        <div className="container mx-auto h-15">
          <nav className="nav-breadcrumb py-4" aria-label="breadcrumb">
            <ol className="breadcrumb flex items-center gap-2 text-white text-sm">
              <li className="breadcrumb-item">
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

        <div className="container mx-auto px-4">
          <h1 className="text-white text-3xl mb-8 h-15">{pageTitle}</h1>

          <div className="row flex flex-col lg:flex-row gap-6">
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
              {/* Categories Box */}
              <div
                className="cate-box rounded-[40px] mb-[30px]"
                style={{
                  backgroundImage: 'linear-gradient(180deg, #151515 0%, #2d2d2d 100%)',
                  padding: '20px 0 10px',
                  paddingLeft: '0px',
                  height: 'auto',
                  width: '100%',
                }}
              >
                <h4
                  style={{
                    paddingLeft: '20px',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                  }}
                  className="text-white text-lg mb-4 flex items-center gap-2 border-b border-white/"
                >
                  <i className="bi bi-bookmarks-fill text-white"></i>
                  所有文章分類
                </h4>
                <ul
                  className="list-none p-0 m-0"
                  style={{
                    paddingTop: '10px',
                    paddingBottom: '10px',
                  }}
                >
                  {categories.map((category) => (
                    <li
                      key={category.name}
                      style={{
                        paddingLeft: '20px',
                        paddingTop: '5px',
                        paddingBottom: '5px',
                      }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-white rounded-sm flex-shrink-0"></span>
                      <Link
                        href={category.href}
                        className={`block py-2 transition-colors ${
                          category.active
                            ? 'text-[#FFCD83] font-bold'
                            : 'text-white hover:text-[#FFCD83]'
                        }`}
                      >
                        {category.name} ({category.count})
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags Box */}
              <div
                className="hot-tags-box rounded-[40px]"
                style={{
                  marginTop: '15px',
                  backgroundImage: 'linear-gradient(180deg, #301e03 0%, #a76909 100%)',
                  paddingRight: '0px',
                  paddingBottom: '10px',
                  paddingTop: '10px',
                  paddingLeft: '0px',
                  height: 'auto',
                  width: '100%',
                }}
              >
                <h4
                  style={{
                    paddingLeft: '20px',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                  }}
                  className="text-white text-lg mb-4 flex items-center gap-2 border-b border-white/70"
                >
                  <i className="bi bi-tags-fill text-white"></i>
                  熱門 TAGs
                </h4>
                <div className="w-full h-3" />
                <ul
                  className="list-none p-0 m-0 flex flex-wrap gap-2"
                  style={{
                    paddingLeft: '20px',
                    paddingTop: '10px',
                    paddingBottom: '20px',
                    paddingRight: '20px',
                  }}
                >
                  {popularTags.map((tag) => (
                    <li
                      key={tag.name}
                      style={{
                        paddingLeft: '0px',
                        paddingRight: '1px',
                      }}
                    >
                      <Link
                        href={tag.href}
                        style={{
                          paddingLeft: '0px',
                          paddingRight: '1px',
                        }}
                        className="h-7 rounded-full bg-black/50 text-[#CD861A] bg-white text-sm flex justify-center items-center hover:bg-[#CD861A] hover:text-white transition-colors"
                      >
                        &nbsp;&nbsp; {tag.name}&nbsp;&nbsp;
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
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
