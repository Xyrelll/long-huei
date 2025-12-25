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
import { entertainmentArticles, type EntertainmentArticle } from '@/data/articles/entertainment';

// Re-export for backward compatibility
export { entertainmentArticles, type EntertainmentArticle };

const categories = [
  { name: '旅遊', href: '/ArticleCategory/Travel', count: 11 },
  { name: '桑拿', href: '/ArticleCategory/Sauna', count: 11 },
  { name: '包車', href: '/ArticleCategory/RentCar', count: 12 },
  { name: '訂房', href: '/ArticleCategory/Booking', count: 5 },
  { name: '其他娛樂', href: '/ArticleCategory/Entertainment', count: 10, active: true },
  { name: '常見問答', href: '/ArticleCategory/Question', count: 3 },
  { name: '專人客服', href: '/CustomerService', count: 0 },
];

const popularTags = [
  { name: '澳門包車', href: '/Tag/澳門包車' },
  { name: '澳門旅遊', href: '/Tag/澳門旅遊' },
  { name: '澳門訂房', href: '/Tag/澳門訂房' },
  { name: '龍匯天下包車', href: '/Tag/龍匯天下包車' },
  { name: '澳門百老匯', href: '/Tag/澳門百老匯' },
  { name: '澳門龍匯', href: '/Tag/澳門龍匯' },
  { name: '龍匯天下按摩', href: '/Tag/龍匯天下按摩' },
  { name: '龍匯澳們百老匯', href: '/Tag/龍匯澳們百老匯' },
  { name: '龍匯美高梅', href: '/Tag/龍匯美高梅' },
  { name: '龍匯澳門永利', href: '/Tag/龍匯澳門永利' },
];

function EntertainmentContent() {
  const searchParams = useSearchParams();
  const itemsPerPage = 9;
  const totalPages = Math.ceil(entertainmentArticles.length / itemsPerPage);

  // Get current page from URL params
  const pageParam = searchParams.get('PageNo');
  const currentPage = Math.max(1, Math.min(parseInt(pageParam || '1', 10), totalPages));

  // Get articles for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = entertainmentArticles.slice(startIndex, endIndex);

  return (
    <ArticleCategoryLayout
      pageTitle="其他娛樂"
      breadcrumbName="其他娛樂"
      baseUrl="/ArticleCategory/Entertainment"
      articles={entertainmentArticles}
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

export default function EntertainmentPage() {

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: '首頁', url: 'https://longhuei.netlify.app' },
    { name: '其他娛樂', url: 'https://longhuei.netlify.app/ArticleCategory/Entertainment' },
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "澳門其他娛樂攻略",
    description: "探索澳門其他娛樂完整攻略，包含水舞間、百老匯、美高梅、永利等娛樂場所介紹",
    url: "https://longhuei.netlify.app/ArticleCategory/Entertainment",
    inLanguage: "zh-TW",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: entertainmentArticles.length,
      itemListElement: entertainmentArticles.map((article, index) => ({
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
        title="澳門其他娛樂攻略 - 水舞間、百老匯、美高梅全指南 | 龍匯天下"
        description="探索澳門其他娛樂完整攻略，包含水舞間、百老匯、美高梅、永利等娛樂場所介紹。精選澳門娛樂必看文章，從表演節目到娛樂設施一次搞定，讓您的澳門之旅更加精彩。"
        url="https://longhuei.netlify.app/ArticleCategory/Entertainment"
        image="https://longhuei.netlify.app/Images/Logo.png"
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
            <EntertainmentContent />
          </Suspense>
          <Footer />
        </main>

        <GoToTop />
        <BottomNav />
      </div>
    </>
  );
}

