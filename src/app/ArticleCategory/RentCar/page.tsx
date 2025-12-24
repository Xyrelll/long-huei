'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { generateBreadcrumbSchema } from '@/config/seo';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import GoToTop from '@/components/layout/GoToTop/GoToTop';
import TravelArticleList from '@/components/features/TravelArticleList/TravelArticleList';
import Link from 'next/link';

interface RentCarArticle {
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

const rentCarArticles: RentCarArticle[] = [
  {
    id: 1,
    title: '💎 澳門包車旅遊推薦：龍匯天下專屬私人行程，深度暢遊四大區域！',
    description: '❓ 為什麼澳門旅遊您需要選擇包車服務？澳門雖然面積不大，但其豐富的世遺景點分散於各區，且四季陽光熱烈。對於拖家帶口、有老有小的家庭旅客，或是不想在烈日下日均暴走 3 萬步的貴賓來說，傳統的公共交通',
    image: '/articles/251219-h.jpg',
    imageMobile: '/articles/251219-m.jpg',
    link: '/Article/macao-rentalcar',
    views: 154,
    tags: ['澳門包車景點', '澳門包車'],
    collapseId: 'collapse-macao-rentalcar',
  },
  {
    id: 2,
    title: '龍匯天下澳門專車接送服務推薦與預訂指南',
    description: '在澳門這座融合了商業與旅遊的城市中，時間就是金錢，舒適度更是決定行程品質的關鍵。',
    image: '/articles/251211_(2)-h.jpg',
    imageMobile: '/articles/251211_(2)-m.jpg',
    link: '/Article/privatecar',
    views: 251,
    tags: ['澳門找龍匯包車', '澳門包車', '包車接送'],
    collapseId: 'collapse-privatecar',
  },
  {
    id: 3,
    title: '【2026 澳門機場接送推薦】如何預訂最快、最舒適的澳門機場接送服務？',
    description: '為什麼您需要預訂澳門機場接送服務？您剛抵達澳門國際機場（Macau International Airport, MFM），拖著行李',
    image: '/articles/251205-h.jpg',
    imageMobile: '/articles/251205-m.jpg',
    link: '/Article/airplane-rentcar',
    views: 513,
    tags: ['澳門包車', '澳門包車景點', '澳門找龍匯包車'],
    collapseId: 'collapse-airplane-rentcar',
  },
  {
    id: 4,
    title: ' 澳門包車服務全攻略  一次搞懂價格、行程與預約方式',
    description: '澳門雖然不大，但景點分散，加上天氣炎熱、交通複雜，對初次來訪的旅客來說並不容易安排行程。若想輕鬆探索這座「東西交融的城市」，包車服務 就是最聰明的選擇。',
    image: '/articles/251107-h.jpg',
    imageMobile: '/articles/251107-m.jpg',
    link: '/Article/macao-carpass',
    views: 1147,
    tags: ['澳門找龍匯包車', '澳門包車景點', '澳門包車'],
    collapseId: 'collapse-macao-carpass',
  },
  {
    id: 5,
    title: '澳門機場接送｜舒適便捷的專屬交通服務',
    description: '來到澳門旅遊或出差，第一件需要解決的事情就是交通。無論是剛下飛機抵達，還是準備返程回家，選擇 澳門機場接送 都能讓你的行程更加輕鬆自在。相比自己搭巴士或計程車，澳門機場接送 提供專屬司機、舒適車輛以及',
    image: '/articles/251013jpg-h.jpg',
    imageMobile: '/articles/251013jpg-m.jpg',
    link: '/Article/airportrencar1',
    views: 1132,
    tags: ['澳門機場接送', '澳門包車', '龍匯包車'],
    collapseId: 'collapse-airportrencar1',
  },
  {
    id: 6,
    title: '澳門包車接送｜玩轉澳門最省心的交通秘訣',
    description: '你是不是常常遇到這種情況？飛機剛落地，還要拖著行李排隊等的士；準備去景點，卻因為不熟悉路線而浪費一大堆時間。想在短短幾天裡把澳門好玩、好吃、好拍的地方一次收集？答案其實很簡單——選擇 澳門包車接送。',
    image: '/articles/251013jpg-h.jpg',
    imageMobile: '/articles/251013jpg-m.jpg',
    link: '/Article/macao-baocar',
    views: 1137,
    tags: ['澳門包車', '包車接送', '澳門機場接送', '澳門接送'],
    collapseId: 'collapse-macao-baocar',
  },
  {
    id: 7,
    title: '澳門包車一日遊｜輕鬆暢遊澳門的最佳選擇',
    description: '來到澳門旅遊，許多人會安排世界遺產、威尼斯人、官也街、美食之旅等經典景點，但若想在有限的時間內輕鬆走遍大大小小的必玩之地，澳門包車一日遊 就成為最便利的選擇。透過 澳門包車一日遊，你可以自由規劃行程、',
    image: '/articles/251013jpg-h.jpg',
    imageMobile: '/articles/251013jpg-m.jpg',
    link: '/Article/macao-onedaytrvl',
    views: 1117,
    tags: ['澳門包車', '澳門旅遊'],
    collapseId: 'collapse-macao-onedaytrvl',
  },
  {
    id: 8,
    title: '澳門機場接送：舒適便捷的專屬交通服務',
    description: '到澳門旅遊或洽公，交通安排往往是旅程中最重要的一環。選擇可靠的 「澳門機場接送」 服務，不僅能讓你從落地開始就享受舒適旅程，更能節省時間、避免舟車勞頓。無論是個人旅遊、家庭出行或商務行程，澳門機場接送',
    image: '/articles/251013jpg-h.jpg',
    imageMobile: '/articles/251013jpg-m.jpg',
    link: '/Article/airportrencar',
    views: 1180,
    tags: ['澳門機場接送', '澳門機場', '澳門找龍匯包車', '龍匯包車'],
    collapseId: 'collapse-airportrencar',
  },
  {
    id: 9,
    title: '澳門包車旅遊｜舒適自由的深度玩法',
    description: '如果你想用最自在的方式探索澳門，享受量身訂製的行程規劃，那麼 澳門包車旅遊 絕對是最佳選擇。相比傳統團體旅遊，澳門包車旅遊 提供更高的自由度與舒適度，不管是家庭出行、商務行程，還是好友聚會，都能依照需',
    image: '/articles/251013jpg-h.jpg',
    imageMobile: '/articles/251013jpg-m.jpg',
    link: '/Article/rentcar1',
    views: 1139,
    tags: ['澳門包車', '澳門旅遊', '龍匯澳門', '包車推薦'],
    collapseId: 'collapse-rentcar1',
  },
];

const categories = [
  { name: '旅遊', link: '/ArticleCategory/Travel', active: false },
  { name: '訂房', link: '/ArticleCategory/Booking', active: false },
  { name: '桑拿', link: '/ArticleCategory/Sauna', active: false },
  { name: '包車', link: '/ArticleCategory/RentCar', active: true },
];

const popularTags = [
  '澳門包車',
  '澳門旅遊',
  '澳門找龍匯包車',
  '龍匯包車',
  '澳門包車景點',
  '龍匯天下包車',
  '澳門機場接送',
  '包車接送',
  '龍匯天下旅遊',
  '澳門景點',
];

export default function RentCarPage() {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('PageNo');
  const currentPage = parseInt(pageParam || '1', 10);
  
  const itemsPerPage = 9;
  const totalPages = Math.ceil(rentCarArticles.length / itemsPerPage);
  
  // Get articles for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = rentCarArticles.slice(startIndex, endIndex);

  // Set page title/meta tags
  useEffect(() => {
    // Set page title
    document.title = '包車 - 龍匯天下';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', '龍匯天下');
  }, []);

  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: '首頁', url: 'https://www.long-huei.com/' },
    { name: '包車', url: 'https://www.long-huei.com/ArticleCategory/RentCar' },
  ]);

  // Generate CollectionPage schema
  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '包車',
    description: '龍匯天下包車服務相關文章',
    url: 'https://www.long-huei.com/ArticleCategory/RentCar',
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
              <li className="breadcrumb-item active" aria-current="page">包車</li>
            </ol>
          </nav>
        </div>

        {/* Articles Section */}
        <section className="articles w-full bg-black py-8" style={{ marginTop: '20px' }}>
          <div className="container mx-auto px-4">
            <h1 className="text-white text-3xl mb-8">包車</h1>
            
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
                            href={`/ArticleCategory/RentCar?PageNo=${currentPage - 1}&SortBy=DisplaySeq&SortDirection=ASC`} 
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
                              href={`/ArticleCategory/RentCar?PageNo=${page}&SortBy=DisplaySeq&SortDirection=ASC`}
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
                            href={`/ArticleCategory/RentCar?PageNo=${currentPage + 1}&SortBy=DisplaySeq&SortDirection=ASC`} 
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
      </main>

      <Footer />
      <GoToTop />
    </>
  );
}

