'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { generateBreadcrumbSchema } from '@/config/seo';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import GoToTop from '@/components/layout/GoToTop/GoToTop';
import BottomNav from '@/components/layout/BottomNav/BottomNav';
import ArticleCategoryLayout from '@/components/layout/ArticleCategoryLayout/ArticleCategoryLayout';
import BookingArticleList from '@/components/features/BookingArticleList/BookingArticleList';
import PageMetadata from '@/components/SEO/PageMetadata';
import { rentCarArticles, type RentCarArticle } from '@/data/articles/rentCar';

// Re-export for backward compatibility
export { rentCarArticles, type RentCarArticle };

const categories = [
  { name: '旅遊', href: '/ArticleCategory/Travel', count: 11 },
  { name: '桑拿', href: '/ArticleCategory/Sauna', count: 11 },
  { name: '包車', href: '/ArticleCategory/RentCar', count: 12, active: true },
  { name: '訂房', href: '/ArticleCategory/Booking', count: 5 },
  { name: '其他娛樂', href: '/ArticleCategory/Entertainment', count: 10 },
  { name: '常見問答', href: '/ArticleCategory/Question', count: 3 },
  { name: '專人客服', href: '/CustomerService', count: 0 },
];

const popularTags = [
  { name: '澳門包車', href: '/Tag/澳門包車' },
  { name: '澳門旅遊', href: '/Tag/澳門旅遊' },
  { name: '澳門找龍匯包車', href: '/Tag/澳門找龍匯包車' },
  { name: '龍匯包車', href: '/Tag/龍匯包車' },
  { name: '澳門包車景點', href: '/Tag/澳門包車景點' },
  { name: '龍匯天下包車', href: '/Tag/龍匯天下包車' },
  { name: '澳門機場接送', href: '/Tag/澳門機場接送' },
  { name: '包車接送', href: '/Tag/包車接送' },
  { name: '龍匯天下旅遊', href: '/Tag/龍匯天下旅遊' },
  { name: '澳門景點', href: '/Tag/澳門景點' },
];

function RentCarContent() {
  const searchParams = useSearchParams();
  const itemsPerPage = 9;
  const totalPages = Math.ceil(rentCarArticles.length / itemsPerPage);

  // Get current page from URL params
  const pageParam = searchParams.get('PageNo');
  const currentPage = Math.max(1, Math.min(parseInt(pageParam || '1', 10), totalPages));

  // Get articles for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = rentCarArticles.slice(startIndex, endIndex);

  return (
    <ArticleCategoryLayout
      pageTitle="包車"
      breadcrumbName="包車"
      baseUrl="/ArticleCategory/RentCar"
      articles={rentCarArticles}
      currentArticles={currentArticles}
      currentPage={currentPage}
      totalPages={totalPages}
      itemsPerPage={9}
      ArticleListComponent={BookingArticleList}
      categories={categories}
      popularTags={popularTags}
    />
  );
}

export default function RentCarPage() {

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: '首頁', url: 'https://longhuei.netlify.app' },
    { name: '包車', url: 'https://longhuei.netlify.app/ArticleCategory/RentCar' },
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "澳門包車服務",
    description: "探索澳門包車服務完整攻略，包含專車接送、機場接送、一日遊包車等實用資訊",
    url: "https://longhuei.netlify.app/ArticleCategory/RentCar",
    inLanguage: "zh-TW",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: rentCarArticles.length,
      itemListElement: rentCarArticles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Article",
          headline: article.title,
          description: article.description,
          url: `https://longhuei.netlify.app${article.link}`,
        },
      })),
    },
  };

  return (
    <>
      <PageMetadata
        title="澳門包車服務 - 專車接送、機場接送全指南 | 龍匯天下"
        description="探索澳門包車服務完整攻略，包含專車接送、機場接送、一日遊包車等實用資訊。精選澳門包車必看文章，從預訂方式到行程規劃一次搞定，讓您的澳門之旅更加輕鬆便利。"
        url="https://longhuei.netlify.app/ArticleCategory/RentCar"
        image="https://longhuei.netlify.app/Images/logo-m.png"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative w-full min-h-screen bg-black flex justify-center items-center">
        <Navbar />

        <main className="inner-page w-[90%] mx-auto">
          <div className="w-full "></div>

          {/* Articles Section */}
          <Suspense fallback={<div className="text-white p-8">Loading...</div>}>
            <RentCarContent />
          </Suspense>
          <Footer />
        </main>

        <GoToTop />
        <BottomNav />
      </div>
    </>
  );
}

