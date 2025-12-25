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
import { questionArticles, type QuestionArticle } from '@/data/articles/question';

// Re-export for backward compatibility
export { questionArticles, type QuestionArticle };

const categories = [
  { name: '旅遊', href: '/ArticleCategory/Travel', count: 11 },
  { name: '桑拿', href: '/ArticleCategory/Sauna', count: 11 },
  { name: '包車', href: '/ArticleCategory/RentCar', count: 12 },
  { name: '訂房', href: '/ArticleCategory/Booking', count: 5 },
  { name: '其他娛樂', href: '/ArticleCategory/Entertainment', count: 10 },
  { name: '常見問答', href: '/ArticleCategory/Question', count: 3, active: true },
  { name: '專人客服', href: '/CustomerService', count: 0 },
];

const popularTags = [
  { name: '澳門旅遊', href: '/Tag/澳門旅遊' },
  { name: '澳門訂房', href: '/Tag/澳門訂房' },
  { name: '澳門', href: '/Tag/澳門' },
  { name: '澳門龍匯天下', href: '/Tag/澳門龍匯天下' },
  { name: '澳門旅遊找龍匯', href: '/Tag/澳門旅遊找龍匯' },
  { name: '澳門安全', href: '/Tag/澳門安全' },
  { name: '澳門通龍匯天下', href: '/Tag/澳門通龍匯天下' },
  { name: '龍匯天下澳門通', href: '/Tag/龍匯天下澳門通' },
  { name: '澳門龍匯天下澳門通', href: '/Tag/澳門龍匯天下澳門通' },
  { name: '龍匯澳門通', href: '/Tag/龍匯澳門通' },
];

function QuestionContent() {
  const searchParams = useSearchParams();
  const itemsPerPage = 3;
  const totalPages = Math.ceil(questionArticles.length / itemsPerPage);

  // Get current page from URL params
  const pageParam = searchParams.get('PageNo');
  const currentPage = Math.max(1, Math.min(parseInt(pageParam || '1', 10), totalPages));

  // Get articles for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = questionArticles.slice(startIndex, endIndex);

  return (
    <ArticleCategoryLayout
      pageTitle="常見問答"
      breadcrumbName="常見問答"
      baseUrl="/ArticleCategory/Question"
      articles={questionArticles}
      currentArticles={currentArticles}
      currentPage={currentPage}
      totalPages={totalPages}
      itemsPerPage={3}
      ArticleListComponent={BookingArticleList}
      categories={categories}
      popularTags={popularTags}
    />
  );
}

export default function QuestionPage() {

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: '首頁', url: 'https://longhuei.netlify.app' },
    { name: '常見問答', url: 'https://longhuei.netlify.app/ArticleCategory/Question' },
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "澳門常見問答",
    description: "探索澳門常見問答完整攻略，包含換錢、澳門通、旅遊安全等實用資訊",
    url: "https://longhuei.netlify.app/ArticleCategory/Question",
    inLanguage: "zh-TW",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: questionArticles.length,
      itemListElement: questionArticles.map((article, index) => ({
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
        title="澳門常見問答 - 換錢、澳門通、旅遊安全全指南 | 龍匯天下"
        description="探索澳門常見問答完整攻略，包含換錢、澳門通、旅遊安全等實用資訊。精選澳門常見問題必看文章，從實用技巧到安全指南一次搞定，讓您的澳門之旅更加順利。"
        url="https://longhuei.netlify.app/ArticleCategory/Question"
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
            <QuestionContent />
          </Suspense>
          <Footer />
        </main>

        <GoToTop />
        <BottomNav />
      </div>
    </>
  );
}

