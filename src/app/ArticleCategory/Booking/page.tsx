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
// import Link from 'next/link';
import { bookingArticles, type BookingArticle } from '@/data/articles/booking';

// Re-export for backward compatibility
export { bookingArticles, type BookingArticle };

const categories = [
  { name: '旅遊', href: '/ArticleCategory/Travel', count: 11 },
  { name: '桑拿', href: '/ArticleCategory/Sauna', count: 11 },
  { name: '包車', href: '/ArticleCategory/RentCar', count: 12 },
  { name: '訂房', href: '/ArticleCategory/Booking', count: 5, active: true },
  { name: '其他娛樂', href: '/ArticleCategory/Entertainment', count: 10 },
  { name: '常見問答', href: '/ArticleCategory/Question', count: 3 },
  { name: '專人客服', href: '/CustomerService', count: 0 },
];

const popularTags = [
  { name: '澳門訂房', href: '/Tag/澳門訂房' },
  { name: '龍匯天下訂房', href: '/Tag/龍匯天下訂房' },
  { name: '澳門旅遊', href: '/Tag/澳門旅遊' },
  { name: '澳門推薦', href: '/Tag/澳門推薦' },
  { name: '澳門酒店', href: '/Tag/澳門酒店' },
  { name: '澳門住宿', href: '/Tag/澳門住宿' },
  { name: '澳門龍匯天下', href: '/Tag/澳門龍匯天下' },
  { name: '龍匯天下', href: '/Tag/龍匯天下' },
  { name: '澳門包車', href: '/Tag/澳門包車' },
  { name: '澳門親子', href: '/Tag/澳門親子' },
];

function BookingContent() {
  const searchParams = useSearchParams();
  const itemsPerPage = 9;
  const totalPages = Math.ceil(bookingArticles.length / itemsPerPage);

  // Get current page from URL params
  const pageParam = searchParams.get('PageNo');
  const currentPage = Math.max(1, Math.min(parseInt(pageParam || '1', 10), totalPages));

  // Get articles for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = bookingArticles.slice(startIndex, endIndex);

  return (
    <ArticleCategoryLayout
      pageTitle="訂房"
      breadcrumbName="訂房"
      baseUrl="/ArticleCategory/Booking"
      articles={bookingArticles}
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

export default function BookingPage() {

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: '首頁', url: 'https://longhuei.netlify.app' },
    { name: '訂房', url: 'https://longhuei.netlify.app/ArticleCategory/Booking' },
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "澳門訂房攻略",
    description: "探索澳門訂房完整攻略，包含頂級酒店推薦、住宿區域指南、訂房省錢技巧等實用資訊",
    url: "https://longhuei.netlify.app/ArticleCategory/Booking",
    inLanguage: "zh-TW",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: bookingArticles.length,
      itemListElement: bookingArticles.map((article, index) => ({
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
        title="澳門訂房攻略 - 酒店推薦、住宿選擇全指南 | 龍匯天下"
        description="探索澳門訂房完整攻略，包含頂級酒店推薦、住宿區域指南、訂房省錢技巧等實用資訊。精選澳門訂房必看文章，從酒店選擇到優惠資訊一次搞定，讓您的澳門住宿體驗更加完美。"
        url="https://longhuei.netlify.app/ArticleCategory/Booking"
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
            <BookingContent />
          </Suspense>
          <Footer />
        </main>

        <GoToTop />
        <BottomNav />
      </div>
    </>
  );
}

