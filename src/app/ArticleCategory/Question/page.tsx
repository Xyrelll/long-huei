'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { generateBreadcrumbSchema } from '@/config/seo';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import GoToTop from '@/components/layout/GoToTop/GoToTop';
import TravelArticleList from '@/components/features/TravelArticleList/TravelArticleList';
import Link from 'next/link';

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

const questionArticles: QuestionArticle[] = [
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
  { name: '旅遊', link: '/ArticleCategory/Travel', active: false },
  { name: '訂房', link: '/ArticleCategory/Booking', active: false },
  { name: '桑拿', link: '/ArticleCategory/Sauna', active: false },
  { name: '包車', link: '/ArticleCategory/RentCar', active: false },
  { name: '其他娛樂', link: '/ArticleCategory/Entertainment', active: false },
  { name: '常見問答', link: '/ArticleCategory/Question', active: true },
];

const popularTags = [
  '澳門旅遊',
  '澳門訂房',
  '澳門',
  '澳門龍匯天下',
  '澳門旅遊找龍匯',
  '澳門安全',
  '澳門通龍匯天下',
  '龍匯天下澳門通',
  '澳門龍匯天下澳門通',
  '龍匯澳門通',
];

function QuestionContent() {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('PageNo');
  const currentPage = parseInt(pageParam || '1', 10);
  
  const itemsPerPage = 9;
  const totalPages = Math.ceil(questionArticles.length / itemsPerPage);
  
  // Get articles for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = questionArticles.slice(startIndex, endIndex);

  return (
    <>
      {/* Articles Section */}
      <section className="articles w-full bg-black py-8" style={{ marginTop: '20px' }}>
        <div className="container mx-auto px-4">
          <h1 className="text-white text-3xl mb-8">常見問答</h1>
          
          <div className="row flex flex-col lg:flex-row gap-6">
            {/* Main Content - Articles List */}
            <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-xs-12 w-full lg:w-9/12">
              <TravelArticleList articles={currentArticles as unknown as Parameters<typeof TravelArticleList>[0]['articles']} />

              {/* Pagination */}
              <nav className="pagination mt-8" aria-label="Page navigation example">
                <div className="pagination-container">
                  <ul className="pagination flex justify-center items-center gap-2">
                    {currentPage > 1 && (
                      <li className="page-item">
                        <Link 
                          href={`/ArticleCategory/Question?PageNo=${currentPage - 1}&SortBy=DisplaySeq&SortDirection=ASC`} 
                          rel="prev"
                          className="page-link px-4 py-2 bg-[#2C261C] text-white rounded hover:bg-[#CD861A]"
                        >
                          &lt;
                        </Link>
                      </li>
                    )}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
                        {page === currentPage ? (
                          <span className="page-link px-4 py-2 bg-[#CD861A] text-white rounded">
                            {page}
                          </span>
                        ) : (
                          <Link
                            href={`/ArticleCategory/Question?PageNo=${page}&SortBy=DisplaySeq&SortDirection=ASC`}
                            className="page-link px-4 py-2 bg-[#2C261C] text-white rounded hover:bg-[#CD861A]"
                          >
                            {page}
                          </Link>
                        )}
                      </li>
                    ))}
                    {currentPage < totalPages && (
                      <li className="page-item">
                        <Link 
                          href={`/ArticleCategory/Question?PageNo=${currentPage + 1}&SortBy=DisplaySeq&SortDirection=ASC`} 
                          rel="next"
                          className="page-link px-4 py-2 bg-[#2C261C] text-white rounded hover:bg-[#CD861A]"
                        >
                          &gt;
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </nav>
            </div>

            {/* Sidebar */}
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-xs-12 w-full lg:w-3/12">
              {/* Categories Box */}
              <div className="cate-box mb-6">
                <h4 className="text-white mb-4">
                  <i className="bi bi-bookmarks-fill"></i> 所有文章分類
                </h4>
                <ul className="list-unstyled">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <Link
                        href={category.link}
                        className={`text-white hover:text-[#FFCD83] ${category.active ? 'active font-bold' : ''}`}
                      >
                        {category.name}
                        {category.name === '旅遊' && '(11)'}
                        {category.name === '桑拿' && '(11)'}
                        {category.name === '包車' && '(12)'}
                        {category.name === '訂房' && '(5)'}
                        {category.name === '其他娛樂' && '(10)'}
                        {category.name === '常見問答' && '(3)'}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags Box */}
              <div className="hot-tags-box">
                <h4 className="text-white mb-4">
                  <i className="bi bi-tags-fill"></i> 熱門TAG
                </h4>
                <ul className="tags flex flex-wrap gap-2">
                  {popularTags.map((tag, idx) => (
                    <li key={idx}>
                      <Link href={`/Tag/${tag}`} className="text-xs text-gray-400 hover:text-[#FFCD83]">
                        {tag}
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

export default function QuestionPage() {
  // Set page title/meta tags
  useEffect(() => {
    // Set page title
    document.title = '常見問答 - 龍匯天下';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', '龍匯天下-澳門旅遊-桑拿-訂房-包車-常見問題');
  }, []);

  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: '首頁', url: 'https://www.long-huei.com/' },
    { name: '常見問答', url: 'https://www.long-huei.com/ArticleCategory/Question' },
  ]);

  // Generate CollectionPage schema
  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '常見問答',
    description: '龍匯天下常見問答相關文章',
    url: 'https://www.long-huei.com/ArticleCategory/Question',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <Navbar />
      
      <main className="inner-page">
        <div className="container">
          {/* Breadcrumbs */}
          <nav className="nav-breadcrumb" style={{ '--bs-breadcrumb-divider': '>' } as React.CSSProperties} aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/"><i className="bi bi-house-door-fill"></i>首頁</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">常見問答</li>
            </ol>
          </nav>
        </div>

        <Suspense fallback={<div className="text-white p-8">Loading...</div>}>
          <QuestionContent />
        </Suspense>
      </main>

      <Footer />
      <GoToTop />
    </>
  );
}

