'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { generateBreadcrumbSchema } from '@/config/seo';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import GoToTop from '@/components/layout/GoToTop/GoToTop';
import BottomNav from '@/components/layout/BottomNav/BottomNav';
import BookingArticleList from '@/components/features/BookingArticleList/BookingArticleList';
import ArticleCategoryLayout from '@/components/layout/ArticleCategoryLayout/ArticleCategoryLayout';
// import Link from 'next/link';

interface QuestionArticle {
  id: number;
  title: string;
  description: string;
  image: string;
  imageMobile: string;
  link: string;
  views: number;
  tags?: string[];
  collapseId: string;
}

export const questionArticles: QuestionArticle[] = [
  {
    id: 1,
    title: '【澳門換錢】避坑攻略！匯率最好+免手續費據點實測',
    description: '在澳門自由行，換匯是影響旅費的關鍵！2025年實測全澳30+個換錢點，結合匯率、安全性與隱藏技巧，整理這份最新攻略。掌握這些情報，比用信用卡多省8%旅費！',
    image: '/articles/250513_龍匯天下_部落格圖-h.jpg',
    imageMobile: '/articles/250513_龍匯天下_部落格圖-h.jpg',
    link: '/Article/money-exchange',
    views: 2333,
    tags: ['澳門龍匯天下', '澳門換錢', '澳門旅遊找龍匯', '澳門訂房'],
    collapseId: 'collapse-money-exchange',
  },
  {
    id: 2,
    title: '【澳門通】完整攻略：交通、消費、景點優惠一卡整合',
    description: '澳門通（Macau Pass）是旅客探索澳門的智慧神卡，2025年全面升級後，整合交通、消費、景點門票等多元功能，成為自由行省錢省時的必備工具。本文從最新功能、使用範圍到隱藏優惠，帶你掌握這張小卡的無',
    image: '/articles/macao_pass-h.jpg',
    imageMobile: '/articles/macao_pass-m.jpg',
    link: '/Article/macao%20pass',
    views: 2513,
    tags: ['澳門通龍匯天下', '龍匯澳門通', '澳門龍匯天下澳門通', '龍匯天下澳門通'],
    collapseId: 'collapse-macao-pass',
  },
  {
    id: 3,
    title: '【澳門旅遊安全嗎？】2025重點解析',
    description: '澳門連續7年穩居「亞洲最安全旅遊城市」前三名，根據2024年最新數據顯示，每10萬旅客犯罪率僅1.5件。本文建議收藏，廢話不多說，讓小編帶你快速掌握安全要點。',
    image: '/articles/250513_龍匯天下_部落格圖-h.jpg',
    imageMobile: '/articles/250513_龍匯天下_部落格圖-h.jpg',
    link: '/Article/safe1',
    views: 2493,
    tags: ['澳門旅遊', '澳門安全', '澳門'],
    collapseId: 'collapse-safe1',
  },
];

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
  // Set page title/meta tags
  useEffect(() => {
    document.title = '澳門常見問答 - 換錢、澳門通、旅遊安全全指南 | 龍匯天下';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', '探索澳門常見問答完整攻略，包含換錢、澳門通、旅遊安全等實用資訊。精選澳門常見問題必看文章，從實用技巧到安全指南一次搞定，讓您的澳門之旅更加順利。');
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: '首頁', url: 'https://www.long-huei.com' },
    { name: '常見問答', url: 'https://www.long-huei.com/ArticleCategory/Question' },
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "澳門常見問答",
    description: "探索澳門常見問答完整攻略，包含換錢、澳門通、旅遊安全等實用資訊",
    url: "https://www.long-huei.com/ArticleCategory/Question",
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
          url: `https://www.long-huei.com${article.link}`,
        },
      })),
    },
  };

  return (
    <>
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

