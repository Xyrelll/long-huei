'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { generateBreadcrumbSchema } from '@/config/seo';
import PageLayout from '@/components/layout/PageLayout/PageLayout';
import BookingArticleList from '@/components/features/BookingArticleList/BookingArticleList';
import ArticleCategoryLayout from '@/components/layout/ArticleCategoryLayout/ArticleCategoryLayout';
import PageMetadata from '@/components/SEO/PageMetadata';
// import Link from 'next/link';
import { travelArticles, type TravelArticle } from '@/data/articles/travel';

// Re-export for backward compatibility
export { travelArticles, type TravelArticle };

const categories = [
  { name: '旅遊', href: '/ArticleCategory/Travel', count: 12, active: true },
  { name: '桑拿', href: '/ArticleCategory/Sauna', count: 11 },
  { name: '包車', href: '/ArticleCategory/RentCar', count: 12 },
  { name: '訂房', href: '/ArticleCategory/Booking', count: 5 },
  { name: '其他娛樂', href: '/ArticleCategory/Entertainment', count: 10 },
  { name: '常見問答', href: '/ArticleCategory/Question', count: 3 },
  { name: '專人客服', href: '/CustomerService', count: 0 },
];

const popularTags = [
  { name: '澳門包車', href: '/Tag/澳門包車' },
  { name: '澳門旅遊', href: '/Tag/澳門旅遊' },
  { name: '龍匯天下', href: '/Tag/龍匯天下' },
  { name: '澳門訂房', href: '/Tag/澳門訂房' },
  { name: '龍匯包車', href: '/Tag/龍匯包車' },
  { name: '澳門包車景點', href: '/Tag/澳門包車景點' },
  { name: '澳門龍匯天下', href: '/Tag/澳門龍匯天下' },
  { name: '龍匯天下訂房', href: '/Tag/龍匯天下訂房' },
  { name: '澳門推薦', href: '/Tag/澳門推薦' },
  { name: '澳門通龍匯天下', href: '/Tag/澳門通龍匯天下' },
];

function TravelContent() {
  const searchParams = useSearchParams();
  const itemsPerPage = 9;
  const totalPages = Math.ceil(travelArticles.length / itemsPerPage);

  // Get current page from URL params
  const pageParam = searchParams.get('PageNo');
  const currentPage = Math.max(1, Math.min(parseInt(pageParam || '1', 10), totalPages));

  // Get articles for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = travelArticles.slice(startIndex, endIndex);

  return (
    <ArticleCategoryLayout
      pageTitle="旅遊"
      breadcrumbName="旅遊"
      baseUrl="/ArticleCategory/Travel"
      articles={travelArticles}
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

export default function TravelPage() {

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: '首頁', url: 'https://long-huei.vercel.app/' },
    { name: '旅遊', url: 'https://long-huei.vercel.app/ArticleCategory/Travel' },
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "澳門旅遊攻略",
    description: "探索澳門旅遊完整攻略，包含必訪景點、美食推薦、住宿選擇、交通指南等實用資訊",
    url: "https://long-huei.vercel.app/ArticleCategory/Travel",
    inLanguage: "zh-TW",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: travelArticles.length,
      itemListElement: travelArticles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Article",
          headline: article.title,
          description: article.description,
          url: `https://long-huei.vercel.app${article.link}`,
        },
      })),
    },
  };

  return (
    <>
      <PageMetadata
        title="澳門旅遊攻略 - 景點、美食、住宿全指南 | 龍匯天下"
        description="探索澳門旅遊完整攻略，包含必訪景點、美食推薦、住宿選擇、交通指南等實用資訊。精選澳門自由行必看文章，從簽證辦理到行程規劃一次搞定，讓您的澳門之旅更加精彩。"
        url="https://long-huei.vercel.app/ArticleCategory/Travel"
        image="https://long-huei.vercel.app/Images/logo-m.png"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageLayout>
        {/* Articles Section */}
        <Suspense fallback={<div className="text-white p-8">Loading...</div>}>
          <TravelContent />
        </Suspense>
      </PageLayout>
    </>
  );
}

