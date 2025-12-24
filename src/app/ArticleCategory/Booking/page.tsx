'use client';

import { useEffect, useState } from 'react';
import { generateBreadcrumbSchema } from '@/config/seo';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import GoToTop from '@/components/layout/GoToTop/GoToTop';
import BookingArticleList from '@/components/features/BookingArticleList/BookingArticleList';
import Link from 'next/link';
import BottomNav from '@/components/layout/BottomNav/BottomNav';

interface BookingArticle {
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

const bookingArticles: BookingArticle[] = [
  {
    id: 1,
    title: '【澳門訂房】最頂攻略它來了！',
    description: '澳門作為世界知名的旅遊勝地，擁有眾多頂級酒店和度假村。無論是奢華的五星級酒店還是經濟實惠的精品旅館，澳門都能滿足不同旅客的需求。本文將為您提供最完整的澳門訂房攻略，包含酒店選擇、訂房技巧、優惠資訊等實用內容，讓您的澳門之旅更加完美。',
    image: '/articles/【澳門訂房】最頂攻略它來了！-h.jpg',
    imageMobile: '/articles/【澳門訂房】最頂攻略它來了！-m.jpg',
    link: '/Article/macau-booking',
    views: 2156,
    tags: ['澳門訂房', '龍匯天下訂房', '澳門推薦', '澳門旅遊'],
    collapseId: 'collapse-macau-booking',
  },
  {
    id: 2,
    title: '澳門酒店推薦｜精選5大必住度假村',
    description: '澳門擁有世界級的度假村和酒店，從威尼斯人、新濠天地到永利皇宮，每一間都提供獨特的住宿體驗。本文精選5大必住度假村，詳細介紹各酒店的設施、服務、地理位置和特色，幫助您選擇最適合的住宿選擇。',
    image: '/articles/【澳門訂房】最頂攻略它來了！-h.jpg',
    imageMobile: '/articles/【澳門訂房】最頂攻略它來了！-m.jpg',
    link: '/Article/macau-hotels',
    views: 1892,
    tags: ['澳門訂房', '澳門酒店', '龍匯天下', '澳門推薦'],
    collapseId: 'collapse-macau-hotels',
  },
  {
    id: 3,
    title: '澳門訂房省錢攻略｜最佳預訂時機與優惠技巧',
    description: '想要在澳門訂到最划算的酒店？本文分享專業的訂房省錢技巧，包括最佳預訂時機、優惠碼使用、會員福利、淡旺季價格差異等實用資訊，讓您用最優惠的價格享受最優質的住宿體驗。',
    image: '/articles/【澳門訂房】最頂攻略它來了！-h.jpg',
    imageMobile: '/articles/【澳門訂房】最頂攻略它來了！-m.jpg',
    link: '/Article/macau-booking-tips',
    views: 1634,
    tags: ['澳門訂房', '澳門旅遊', '龍匯天下訂房', '澳門推薦'],
    collapseId: 'collapse-macau-booking-tips',
  },
  {
    id: 4,
    title: '澳門住宿區域指南｜選對地點讓旅程更完美',
    description: '澳門雖然面積不大，但不同區域各有特色。從路氹城的度假村區到澳門半島的歷史文化區，每個區域都提供不同的住宿體驗。本文詳細介紹各區域的特色、交通便利性和適合的旅客類型，幫助您選擇最理想的住宿地點。',
    image: '/articles/【澳門訂房】最頂攻略它來了！-h.jpg',
    imageMobile: '/articles/【澳門訂房】最頂攻略它來了！-m.jpg',
    link: '/Article/macau-areas',
    views: 1521,
    tags: ['澳門訂房', '澳門住宿', '澳門旅遊', '龍匯天下'],
    collapseId: 'collapse-macau-areas',
  },
  {
    id: 5,
    title: '澳門親子住宿推薦｜適合家庭的酒店選擇',
    description: '帶著孩子出遊，住宿選擇格外重要。澳門有許多適合親子同遊的酒店，提供兒童設施、家庭房型、親子活動等服務。本文推薦最適合家庭的澳門住宿選擇，讓您的親子之旅更加輕鬆愉快。',
    image: '/articles/【澳門訂房】最頂攻略它來了！-h.jpg',
    imageMobile: '/articles/【澳門訂房】最頂攻略它來了！-m.jpg',
    link: '/Article/macau-family',
    views: 1347,
    tags: ['澳門訂房', '澳門親子', '澳門旅遊', '龍匯天下訂房'],
    collapseId: 'collapse-macau-family',
  },
];

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

export default function BookingPage() {
  // Initialize page from URL using lazy initializer (client-side only)
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      return parseInt(urlParams.get('PageNo') || '1', 10);
    }
    return 1;
  });
  
  const itemsPerPage = 9;
  const totalPages = Math.ceil(bookingArticles.length / itemsPerPage);
  
  // Get articles for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = bookingArticles.slice(startIndex, endIndex);

  // Set page title/meta tags and listen for navigation changes
  useEffect(() => {
    // Set page title
    document.title = '澳門訂房攻略 - 酒店推薦、住宿選擇全指南 | 龍匯天下';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', '探索澳門訂房完整攻略，包含頂級酒店推薦、住宿區域指南、訂房省錢技巧等實用資訊。精選澳門訂房必看文章，從酒店選擇到優惠資訊一次搞定，讓您的澳門住宿體驗更加完美。');
    
    // Listen for navigation changes (back/forward buttons)
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const pageNo = parseInt(urlParams.get('PageNo') || '1', 10);
      setCurrentPage(pageNo);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: '首頁', url: 'https://www.long-huei.com' },
    { name: '訂房', url: 'https://www.long-huei.com/ArticleCategory/Booking' },
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "澳門訂房攻略",
    description: "探索澳門訂房完整攻略，包含頂級酒店推薦、住宿區域指南、訂房省錢技巧等實用資訊",
    url: "https://www.long-huei.com/ArticleCategory/Booking",
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
      <div className="relative w-full min-h-screen bg-black">
        <Navbar />
        
        <main className="inner-page w-full ">
        <div className="w-full h-30"></div>
          {/* Breadcrumbs */}
         

          {/* Articles Section */}
          <section className="articles w-full bg-black py-8" style={{ marginTop: '20px' }}>
          <div className="container mx-auto  h-15">
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
                  <span className="text-white/70">訂房</span>
                </li>
              </ol>
            </nav>
          </div>




            <div className="container mx-auto px-4">
              <h1 className="text-white text-3xl mb-8 h-15">訂房</h1>
              
              <div className="row flex flex-col lg:flex-row gap-6">
                {/* Main Content - Articles List */}
                <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-xs-12 w-full lg:w-9/12">
                  <BookingArticleList articles={currentArticles} />

                  {/* Pagination */}
                  <nav className="pagination mt-8" aria-label="Page navigation example">
                    <div className="pagination-container flex justify-center">
                      <ul className="pagination flex justify-center items-center border border-white rounded-lg overflow-hidden">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum, index) => (
                          <li key={pageNum} className="page-item">
                            {pageNum === currentPage ? (
                              <span className={`page-link px-6 py-2 bg-[#CD861A] text-white ${index < totalPages - 1 ? 'border-r border-white' : ''}`}>
                                {pageNum}
                              </span>
                            ) : (
                              <Link 
                                href={`/ArticleCategory/Booking?PageNo=${pageNum}&SortBy=DisplaySeq&SortDirection=ASC`}
                                className={`page-link px-6 py-2 bg-black text-white hover:bg-[#2C261C] transition-colors ${index < totalPages - 1 ? 'border-r border-white' : ''}`}
                              >
                                {pageNum}
                              </Link>
                            )}
                          </li>
                        ))}
                        {currentPage < totalPages && (
                          <li className="page-item">
                            <Link 
                              href={`/ArticleCategory/Booking?PageNo=${currentPage + 1}&SortBy=DisplaySeq&SortDirection=ASC`} 
                              rel="next"
                              className="page-link px-6 py-2 bg-black text-white hover:bg-[#2C261C] transition-colors"
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
                  <div 
                    className="cate-box rounded-[40px] mb-[30px]"
                    style={{
                      backgroundImage: 'linear-gradient(180deg, #151515 0%, #2d2d2d 100%)',
                      padding: '20px 0 10px',
                      paddingLeft: '20px',
                      height: '300px',
                      width: '100%',
                    }}
                  >
                    <h4 className="text-white text-lg mb-4 flex items-center gap-2 border-b border-white/10 ">
                      <i className="bi bi-bookmarks-fill text-[#FFCD83]"></i>
                      所有文章分類
                    </h4>
                    <ul className="list-none p-0 m-0">
                      {categories.map((category) => (
                        <li key={category.name} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-white rounded-sm flex-shrink-0"></span>
                          <Link
                            href={category.href}
                            className={`block py-2 text-white hover:text-[#FFCD83] transition-colors ${category.active ? 'text-[#FFCD83] font-bold' : ''}`}
                          >
                            {category.name} ({category.count})
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Popular Tags Box */}
                  <div 
                    className="hot-tags-box rounded-[40px] "
                    style={{
                      marginTop: '15px',
                      backgroundImage: 'linear-gradient(180deg, #301e03 0%, #a76909 100%)',
                      padding: '20px 10px 10px 20px',
                      height: '300px',
                      width: '100%',
                    }}
                  >
                    <h4 className="text-white text-lg mb-4 flex items-center gap-2 border-b border-white/10 ">
                      <i className="bi bi-tags-fill text-[#FFCD83]"></i>
                      熱門 TAGs
                    </h4>
                    <ul className="list-none p-0 m-0 flex flex-wrap gap-2">
                      {popularTags.map((tag) => (
                        <li key={tag.name}>
                          <Link
                            href={tag.href}
                            className="inline-block px-3 py-1 bg-black/50 text-[#CD861A] bg-white   text-sm rounded-lg hover:bg-[#CD861A] transition-colors"
                          >
                            {tag.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <GoToTop />
        <BottomNav />
      </div>
    </>
  );
}

