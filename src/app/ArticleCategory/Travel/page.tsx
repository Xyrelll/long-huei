'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { generateBreadcrumbSchema } from '@/config/seo';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import GoToTop from '@/components/layout/GoToTop/GoToTop';
import TravelArticleList from '@/components/features/TravelArticleList/TravelArticleList';
import Link from 'next/link';

interface TravelArticle {
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

const travelArticles: TravelArticle[] = [
  {
    id: 1,
    title: '澳門2025最新懶人包：簽證、景點、美食、住宿全攻略',
    description: 'As a special administrative region that blends Chinese and Western cultures, Macau will continue to launch new attractions and upgrade services in 2025. Key updates of greatest interest to Taiwanese travelers include: New Visa System: Taiwanese travelers holding passports valid for more than six months can stay visa-free for up to 30 days. Entry will now utilize "electronic clearance + facial recognition," resulting in faster clearance.',
    image: '/articles/251121-h.jpg',
    imageMobile: '/articles/251121-m.jpg',
    link: '/Article/macau-all',
    views: 1021,
    tags: ['澳門通龍匯天下', '龍匯包車', '龍匯天下訂房'],
    collapseId: 'collapse-macau-all',
  },
  {
    id: 2,
    title: '澳門一日遊｜24 小時暢遊世界遺產與娛樂之都',
    description: 'If you only have one day in Macau, how can you make the most of your visit? That\'s the charm of a one-day trip to Macau. This small city blends Chinese and Western cultures, boasting both ancient historical buildings and world-class entertainment resorts. With a well-planned itinerary, even with just 24 hours, you can experience the best of both worlds.',
    image: '/articles/251022-h.jpg',
    imageMobile: '/articles/251022-m.jpg',
    link: '/Article/macao-onedaypass',
    views: 1109,
    tags: ['澳門一日遊', '澳門包車', '澳門龍匯天下'],
    collapseId: 'collapse-macao-onedaypass',
  },
  {
    id: 3,
    title: '澳門親子自由行：全家出遊必做行程',
    description: 'Looking for a relaxing and surprising trip with your kids? In recent years, Macau has become a popular choice for family travel. Unlike simple sightseeing and shopping, Macau offers more than just World Heritage sites and culinary culture; it boasts numerous attractions and activities suitable for families, ranging from educational to fun-filled experiences.',
    image: '/articles/251125-h.jpg',
    imageMobile: '/articles/251125-m.jpg',
    link: '/Article/macao-parent-child',
    views: 1189,
    tags: ['澳門親子自由行', '澳門旅遊', '龍匯天下訂房', '澳門包車'],
    collapseId: 'collapse-macao-parent-child',
  },
  {
    id: 4,
    title: '澳門旅遊團｜深度探索東西文化交融的魅力之城',
    description: 'Macau, known as the "Las Vegas of the East," boasts a unique charm born from the fusion of Chinese and Portuguese cultures. For those seeking an easy itinerary, minimal travel time, and a deep immersion in Macau\'s cuisine and culture, choosing a Macau tour group is undoubtedly the smartest option. Through a Macau tour group, you can enjoy expert guided tours...',
    image: '/articles/251121-h.jpg',
    imageMobile: '/articles/251121-m.jpg',
    link: '/Article/macao-travelgroup1',
    views: 1127,
    tags: ['澳門訂房', '澳門推薦', '澳門旅遊'],
    collapseId: 'collapse-macao-travelgroup1',
  },
  {
    id: 5,
    title: '澳門團體旅遊首選攻略｜吃喝玩樂一次滿足！',
    description: 'Macau, a small city blending Chinese and Portuguese cultures, is not only famous for its glamorous casinos and historical buildings, but also a top choice for many companies, schools, or family and friends trips. If you are planning an unforgettable group tour to Macau, this article will guide you through the itinerary, must-see attractions, food recommendations, and important notes.',
    image: '/articles/251022-h.jpg',
    imageMobile: '/articles/251022-m.jpg',
    link: '/Article/grouptravel',
    views: 1149,
    tags: ['澳門旅遊', '澳門包車', '澳門訂房', '澳門團體旅遊'],
    collapseId: 'collapse-grouptravel',
  },
  {
    id: 6,
    title: '【大三巴牌坊】2025澳門自由行必訪深度攻略：歷史、周邊景點與美食全解析',
    description: 'The Ruins of St. Paul\'s in Macau is the city\'s iconic landmark and the core area of a UNESCO World Heritage Site. Whether it\'s a first-time visitor or a returning explorer, the Ruins of St. Paul\'s in Macau will welcome visitors with even better facilities and richer experiences in 2025.',
    image: '/articles/【澳門景點】自由行必收的12個玩樂秘笈！-h.jpg',
    imageMobile: '/articles/【澳門景點】自由行必收的12個玩樂秘笈！-h.jpg',
    link: '/Article/macao%20dasanbaa',
    views: 1630,
    tags: ['澳門大三巴', '大三巴澳門龍匯', '龍匯大三巴澳門', '澳門龍匯天下大三巴'],
    collapseId: 'collapse-macao-dasanbaa',
  },
  {
    id: 7,
    title: '【澳門百老匯】平民美食元宇宙｜全球首創「街市娛樂綜合體」',
    description: 'Are you curious about what Broadway Macau is like? Since its opening in 2015, it has added many interesting new features by 2025! Let\'s rediscover Broadway Macau together!',
    image: '/articles/251121-h.jpg',
    imageMobile: '/articles/251121-m.jpg',
    link: '/Article/macao%20hundred%20old',
    views: 1173,
    tags: ['澳門百老匯', '龍匯澳們百老匯', '龍匯百老匯', '百老匯龍匯天下'],
    collapseId: 'collapse-macao-hundred-old',
  },
  {
    id: 8,
    title: '【澳門景點】2025最強攻略！必訪10大秘境、路線、美食全收錄',
    description: 'Macau is more than just casinos and egg tarts! This World Heritage city hides Portuguese romance, fishing village charm, and secret photo spots. This carefully selected list of the TOP 10 attractions in Macau, from classic landmarks to hidden gems known only to locals, teaches you how to experience the best of Macau in the shortest amount of time, and even provides a pre-planned itinerary. Save this article to your phone for future reference.',
    image: '/articles/【澳門景點】自由行必收的12個玩樂秘笈！-h.jpg',
    imageMobile: '/articles/【澳門景點】自由行必收的12個玩樂秘笈！-h.jpg',
    link: '/Article/macao%20view',
    views: 1816,
    tags: ['澳門龍匯', '龍匯天下澳門旅遊', '澳門包車', '澳門包車景點'],
    collapseId: 'collapse-macao-view',
  },
  {
    id: 9,
    title: '【澳門自由行】怎麼玩才好玩？最佳路線報你知！',
    description: 'Macau is more than just casinos! This charming city, a blend of Chinese and Western cultures, boasts history, character, delicious food, and art. For those with limited time but a desire to deeply experience Macau, a well-planned itinerary is paramount. Follow this Macau travel guide for a smooth and efficient journey.',
    image: '/articles/251125-h.jpg',
    imageMobile: '/articles/251125-m.jpg',
    link: '/Article/macao%20free%20go',
    views: 1304,
    tags: ['澳門自由行龍匯', '龍匯天下旅遊', '澳門自由行龍匯天下', '龍匯天下自由行'],
    collapseId: 'collapse-macao-free-go',
  },
  // Page 2 articles
  {
    id: 10,
    title: '【澳門旅遊】性價比最高的玩法，它來了！',
    description: '說到澳門旅遊，想必你心中肯定有很多問號，想去澳門但不知道去哪裡玩，澳門旅遊去哪裡cp值最高，最值回票價的美景在澳門的哪裡，你的疑問小編都聽到啦，於是特別替大家精挑細選並濃縮成懶人包，事不宜遲，快跟著小',
    image: '/articles/【澳門景點】自由行必收的12個玩樂秘笈！-h.jpg',
    imageMobile: '/articles/【澳門景點】自由行必收的12個玩樂秘笈！-h.jpg',
    link: '/Article/macao%20travel',
    views: 1269,
    tags: ['澳門旅遊找龍匯', '龍匯天下澳門', '龍匯旅遊澳門', '澳門旅遊龍匯天下'],
    collapseId: 'collapse-macao-travel',
  },
  {
    id: 11,
    title: '【澳門景點】自由行必收的12個玩樂秘笈！',
    description: '澳門融合了葡式風情與中華文化，更坐擁8項世界遺產與頂級度假村，是亞洲旅客短程出遊的熱門選擇。本文精選12個「連在地人都推薦」的必訪景點，從歷史古蹟到網美打卡點一次整理，搭配本文獨家的實用攻略，教你用最',
    image: '/articles/【澳門景點】自由行必收的12個玩樂秘笈！-h.jpg',
    imageMobile: '/articles/【澳門景點】自由行必收的12個玩樂秘笈！-h.jpg',
    link: '/Article/travel1',
    views: 1515,
    tags: ['澳門旅遊', '澳門安全', '澳門景點', '澳門推薦', '龍匯天下'],
    collapseId: 'collapse-travel1',
  },
];

const categories = [
  { name: '旅遊', href: '/ArticleCategory/Travel', count: 11, active: true },
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
  { name: '澳門龍匯天下', href: '/Tag/澳門龍匯天下' },
  { name: '澳門包車景點', href: '/Tag/澳門包車景點' },
  { name: '龍匯天下訂房', href: '/Tag/龍匯天下訂房' },
  { name: '澳門推薦', href: '/Tag/澳門推薦' },
  { name: '澳門旅遊找龍匯', href: '/Tag/澳門旅遊找龍匯' },
];

export default function TravelPage() {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('PageNo');
  const currentPage = parseInt(pageParam || '1', 10);
  
  const itemsPerPage = 9;
  const totalPages = Math.ceil(travelArticles.length / itemsPerPage);
  
  // Get articles for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = travelArticles.slice(startIndex, endIndex);

  // Set page title/meta tags
  useEffect(() => {
    // Set page title
    document.title = '澳門旅遊攻略 - 景點、美食、住宿全指南 | 龍匯天下';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', '探索澳門旅遊完整攻略，包含必訪景點、美食推薦、住宿選擇、交通指南等實用資訊。精選澳門自由行必看文章，從簽證辦理到行程規劃一次搞定，讓您的澳門之旅更加精彩。');
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: '首頁', url: 'https://www.long-huei.com' },
    { name: '旅遊', url: 'https://www.long-huei.com/ArticleCategory/Travel' },
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "澳門旅遊攻略",
    description: "探索澳門旅遊完整攻略，包含必訪景點、美食推薦、住宿選擇、交通指南等實用資訊",
    url: "https://www.long-huei.com/ArticleCategory/Travel",
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
        
        <main className="inner-page w-full pt-[99px] mt-1000">
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
                  <span className="text-white/70">旅遊</span>
                </li>
              </ol>
            </nav>
          </div>

          {/* Articles Section */}
          <section className="articles w-full bg-black py-8" style={{ marginTop: '20px' }}>
            <div className="container mx-auto px-4">
              <h1 className="text-white text-3xl mb-8">旅遊</h1>
              
              <div className="row flex flex-col lg:flex-row gap-6">
                {/* Main Content - Articles List */}
                <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-xs-12 w-full lg:w-9/12">
                  <TravelArticleList articles={currentArticles} />

                  {/* Pagination */}
                  <nav className="pagination mt-8" aria-label="Page navigation example">
                    <div className="pagination-container">
                      <ul className="pagination flex justify-center items-center gap-2">
                        {currentPage > 1 && (
                          <li className="page-item">
                            <Link 
                              href={`/ArticleCategory/Travel?PageNo=${currentPage - 1}&SortBy=DisplaySeq&SortDirection=ASC`} 
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
                                href={`/ArticleCategory/Travel?PageNo=${pageNum}&SortBy=DisplaySeq&SortDirection=ASC`}
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
                              href={`/ArticleCategory/Travel?PageNo=${currentPage + 1}&SortBy=DisplaySeq&SortDirection=ASC`} 
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
