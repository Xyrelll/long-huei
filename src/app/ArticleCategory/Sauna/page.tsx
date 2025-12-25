'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { generateBreadcrumbSchema } from '@/config/seo';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import GoToTop from '@/components/layout/GoToTop/GoToTop';
import BottomNav from '@/components/layout/BottomNav/BottomNav';
import BookingArticleList from '@/components/features/BookingArticleList/BookingArticleList';
import ArticleCategoryLayout from '@/components/layout/ArticleCategoryLayout/ArticleCategoryLayout';
import PageMetadata from '@/components/SEO/PageMetadata';
import { saunaArticles, type SaunaArticle } from '@/data/articles/sauna';

// Re-export for backward compatibility
export { saunaArticles, type SaunaArticle };

const categories = [
  { name: '旅遊', href: '/ArticleCategory/Travel', count: 11 },
  { name: '桑拿', href: '/ArticleCategory/Sauna', count: 11, active: true },
  { name: '包車', href: '/ArticleCategory/RentCar', count: 12 },
  { name: '訂房', href: '/ArticleCategory/Booking', count: 5 },
  { name: '其他娛樂', href: '/ArticleCategory/Entertainment', count: 10 },
  { name: '常見問答', href: '/ArticleCategory/Question', count: 3 },
  { name: '專人客服', href: '/CustomerService', count: 0 },
];

const popularTags = [
  { name: '澳門旅遊', href: '/Tag/澳門旅遊' },
  { name: '澳門桑拿', href: '/Tag/澳門桑拿' },
  { name: '澳門', href: '/Tag/澳門' },
  { name: '澳門劇本殺', href: '/Tag/澳門劇本殺' },
  { name: '龍匯天下', href: '/Tag/龍匯天下' },
  { name: '桑拿', href: '/Tag/桑拿' },
  { name: '澳門龍匯天下', href: '/Tag/澳門龍匯天下' },
  { name: '澳門推薦', href: '/Tag/澳門推薦' },
  { name: '龍匯天下包車', href: '/Tag/龍匯天下包車' },
];

function SaunaContent() {
  const searchParams = useSearchParams();
  const itemsPerPage = 9;
  const totalPages = Math.ceil(saunaArticles.length / itemsPerPage);

  // Get current page from URL params
  const pageParam = searchParams.get('PageNo');
  const currentPage = Math.max(1, Math.min(parseInt(pageParam || '1', 10), totalPages));

  // Get articles for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = saunaArticles.slice(startIndex, endIndex);

  return (
    <ArticleCategoryLayout
      pageTitle="桑拿"
      breadcrumbName="桑拿"
      baseUrl="/ArticleCategory/Sauna"
      articles={saunaArticles}
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

export default function SaunaPage() {

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: '首頁', url: 'https://longhuei.netlify.app' },
    { name: '桑拿', url: 'https://longhuei.netlify.app/ArticleCategory/Sauna' },
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "澳門桑拿攻略",
    description: "探索澳門桑拿完整攻略，包含水療、按摩、劇本殺等娛樂場所介紹",
    url: "https://longhuei.netlify.app/ArticleCategory/Sauna",
    inLanguage: "zh-TW",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: saunaArticles.length,
      itemListElement: saunaArticles.map((article, index) => ({
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
        title="澳門桑拿攻略 - 水療、按摩、劇本殺全指南 | 龍匯天下"
        description="探索澳門桑拿完整攻略，包含水療、按摩、劇本殺等娛樂場所介紹。精選澳門桑拿必看文章，從入門技巧到熱門店家推薦一次搞定，讓您的澳門之旅更加放鬆享受。"
        url="https://longhuei.netlify.app/ArticleCategory/Sauna"
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
          <div className="w-full h-18 md:h-30"></div>

          {/* Articles Section */}
          <Suspense fallback={<div className="text-white p-8">Loading...</div>}>
            <SaunaContent />
          </Suspense>
          <Footer />
        </main>

        <GoToTop />
        <BottomNav />
      </div>
    </>
  );
}

