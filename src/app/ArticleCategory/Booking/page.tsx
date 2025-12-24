'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { generateBreadcrumbSchema } from '@/config/seo';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import GoToTop from '@/components/layout/GoToTop/GoToTop';
import TravelArticleList from '@/components/features/TravelArticleList/TravelArticleList';
import Link from 'next/link';

// Using the same interface structure as TravelArticle for compatibility
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
    title: '【澳門訂房】終極指南！避開隱形消費+精選酒店',
    description: '計劃澳門自由行的旅客常面臨訂房價格不透明與區域選擇困難的問題。根據澳門消費者委員會統計，2023年酒店類投訴案件中，61%涉及未預先告知的附加費用，例如抵達後加收的度假村服務費或網絡使用費等等，但是不',
    image: '/articles/250512_龍匯天下_訂房_banner_1550px-m.jpg',
    imageMobile: '/articles/250512_龍匯天下_訂房_banner_1550px-m.jpg',
    link: '/Article/macao%20hotell',
    views: 1356,
    tags: ['澳門訂房', '龍匯訂房', '龍匯天下澳門訂房', '澳門訂房龍匯天下'],
    collapseId: 'collapse-macao-hotell',
  },
  {
    id: 2,
    title: '【澳門飯店】5大頂級奢華體驗｜科技×永續×藝術的極致融合',
    description: '澳門的飯店數不勝數，是不是不知道找哪家?沒問題！小編聽到你的困擾了，今天特別精挑細選澳門最不能錯過的五大奢華飯店各自的特點，信我一把接著看！總有你滿意的！',
    image: '/articles/250512_龍匯天下_訂房_banner_1550px-m.jpg',
    imageMobile: '/articles/250512_龍匯天下_訂房_banner_1550px-m.jpg',
    link: '/Article/macao%20hotell1',
    views: 1202,
    tags: [],
    collapseId: 'collapse-macao-hotell1',
  },
  {
    id: 3,
    title: '【澳門大倉酒店】日式極致服務進化論｜全球首獲「文化遺產級款待」認證',
    description: '看到這個標題應該已經知道我要介紹什麼了吧！沒錯，就是【澳門大倉酒店】，它可不單單只是酒店喔，這篇文章小編特別彙整了它有特色的亮點，有需要的趕緊收藏起來，一起來看看吧！',
    image: '/articles/250512_龍匯天下_訂房_banner_1550px-m.jpg',
    imageMobile: '/articles/250512_龍匯天下_訂房_banner_1550px-m.jpg',
    link: '/Article/macao%20dacang',
    views: 1259,
    tags: ['龍匯澳門大倉', '大倉龍匯天下', '龍匯天下大倉', '龍匯天下澳門大倉酒店'],
    collapseId: 'collapse-macao-dacang',
  },
  {
    id: 4,
    title: '【澳門訂房】最頂攻略它來了！(下)',
    description: '迫不及待要來分享【澳門訂房】懶人包啦！來到澳門的遊客怎麼能不找一間高級澳門住宿呢~每回去澳門旅行都開始找澳門住宿清單，先把小編這些口袋名單優質飯店收藏起來吧！',
    image: '/articles/【澳門訂房】最頂攻略它來了！-h.jpg',
    imageMobile: '/articles/【澳門訂房】最頂攻略它來了！-m.jpg',
    link: '/Article/wei2',
    views: 1360,
    tags: ['澳門訂房', '澳門龍匯天下', '澳門訂房找龍匯', '龍匯天下訂房', '訂房找龍匯'],
    collapseId: 'collapse-wei2',
  },
  {
    id: 5,
    title: '【澳門訂房】最頂攻略它來了！ (上)',
    description: '迫不及待要來分享【澳門訂房】懶人包啦！來到澳門的遊客怎麼能不找一間高級澳門住宿呢~每回去澳門旅行都開始找澳門住宿清單，先把小編這些口袋名單優質飯店收藏起來吧！',
    image: '/articles/【澳門訂房】最頂攻略它來了！-h.jpg',
    imageMobile: '/articles/【澳門訂房】最頂攻略它來了！-m.jpg',
    link: '/Article/wei%20i',
    views: 1733,
    tags: [],
    collapseId: 'collapse-wei-i',
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
  { name: '澳門龍匯天下', href: '/Tag/澳門龍匯天下' },
  { name: '龍匯天下訂房', href: '/Tag/龍匯天下訂房' },
  { name: '龍匯天下大倉', href: '/Tag/龍匯天下大倉' },
  { name: '龍匯訂房', href: '/Tag/龍匯訂房' },
  { name: '龍匯天下澳門大倉酒店', href: '/Tag/龍匯天下澳門大倉酒店' },
  { name: '龍匯天下澳門訂房', href: '/Tag/龍匯天下澳門訂房' },
  { name: '澳門訂房龍匯天下', href: '/Tag/澳門訂房龍匯天下' },
  { name: '澳門訂房找龍匯', href: '/Tag/澳門訂房找龍匯' },
];

export default function BookingPage() {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('PageNo');
  const currentPage = parseInt(pageParam || '1', 10);
  
  const itemsPerPage = 9;
  const totalPages = Math.ceil(bookingArticles.length / itemsPerPage);
  
  // Get articles for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = bookingArticles.slice(startIndex, endIndex);

  // Set page title/meta tags
  useEffect(() => {
    // Set page title
    document.title = '訂房，優惠訂房，澳門訂房，龍匯天下';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', '龍匯天下訂房，澳門訂房，澳門優惠訂房，澳門酒店');
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: '首頁', url: 'https://www.long-huei.com' },
    { name: '訂房', url: 'https://www.long-huei.com/ArticleCategory/Booking' },
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "澳門訂房攻略",
    description: "龍匯天下訂房，澳門訂房，澳門優惠訂房，澳門酒店",
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
        
        <main className="inner-page w-full pt-[99px]">
          {/* Breadcrumbs */}
          <div className="container mx-auto px-4">
            <nav className="nav-breadcrumb py-4" aria-label="breadcrumb">
              <ol className="breadcrumb flex items-center gap-2 text-white text-sm">
                <li className="breadcrumb-item">
                  <Link href="/" className="flex items-center gap-1 hover:text-[#FFCD83]">
                    <i className="bi bi-house-door-fill"></i>
                    首頁
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <span className="text-white/70">訂房</span>
                </li>
              </ol>
            </nav>
          </div>

          {/* Articles Section */}
          <section className="articles w-full bg-black py-8" style={{ marginTop: '20px' }}>
            <div className="container mx-auto px-4">
              <h1 className="text-white text-3xl mb-8">訂房</h1>
              
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
                              href={`/ArticleCategory/Booking?PageNo=${currentPage - 1}&SortBy=DisplaySeq&SortDirection=ASC`} 
                              rel="prev"
                              className="page-link px-4 py-2 bg-[#2C261C] text-white rounded hover:bg-[#CD861A]"
                            >
                              &lt;
                            </Link>
                          </li>
                        )}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                          <li key={pageNum} className="page-item">
                            {pageNum === currentPage ? (
                              <span className="page-link px-4 py-2 bg-[#CD861A] text-white rounded">{pageNum}</span>
                            ) : (
                              <Link 
                                href={`/ArticleCategory/Booking?PageNo=${pageNum}&SortBy=DisplaySeq&SortDirection=ASC`}
                                className="page-link px-4 py-2 bg-[#2C261C] text-white rounded hover:bg-[#CD861A]"
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
                  <div className="cate-box bg-[#2C261C] rounded-lg p-6 mb-6">
                    <h4 className="text-white text-lg mb-4 flex items-center gap-2">
                      <i className="bi bi-bookmarks-fill text-[#FFCD83]"></i>
                      所有文章分類
                    </h4>
                    <ul className="list-none p-0 m-0">
                      {categories.map((category) => (
                        <li key={category.name}>
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
                  <div className="hot-tags-box bg-[#2C261C] rounded-lg p-6">
                    <h4 className="text-white text-lg mb-4 flex items-center gap-2">
                      <i className="bi bi-tags-fill text-[#FFCD83]"></i>
                      熱門 TAGs
                    </h4>
                    <ul className="list-none p-0 m-0 flex flex-wrap gap-2">
                      {popularTags.map((tag) => (
                        <li key={tag.name}>
                          <Link
                            href={tag.href}
                            className="inline-block px-3 py-1 bg-black/50 text-white text-sm rounded hover:bg-[#CD861A] transition-colors"
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
      </div>
    </>
  );
}

