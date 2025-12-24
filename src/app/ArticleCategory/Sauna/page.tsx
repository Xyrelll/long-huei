'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { generateBreadcrumbSchema } from '@/config/seo';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import GoToTop from '@/components/layout/GoToTop/GoToTop';
import TravelArticleList from '@/components/features/TravelArticleList/TravelArticleList';
import Link from 'next/link';

interface SaunaArticle {
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

const saunaArticles: SaunaArticle[] = [
  {
    id: 1,
    title: '澳門桑拿－老司機超詳細攻略',
    description: '澳門桑拿最新現況總覽：疫情後全線回歸，甚至更勝以往！如果你近期有計畫前往澳門放鬆一下，那你可能會好奇：澳門的桑拿現在恢復得怎麼樣了？答案是——不僅回來了，而且是全面升級回歸！',
    image: '/articles/澳門桑拿－老司機超詳細攻略-h.jpg',
    imageMobile: '/articles/澳門桑拿－老司機超詳細攻略-m.jpg',
    link: '/Article/sauna1',
    views: 5186,
    tags: ['澳門桑拿', '桑拿', '龍匯天下', '澳門旅遊'],
    collapseId: 'collapse-sauna1',
  },
  {
    id: 2,
    title: '🌟 澳門熱門桑拿推薦 TOP 8 (上）',
    description: '不論你是老司機，還是初次探訪澳門桑拿的新手，選對一家店真的很關鍵！以下是四間評價極高、網友熱推的澳門桑拿，每間都有不同亮點與玩法，從24小時營業的尊貴水療，到主打劇本殺玩法，總有一間適合你。',
    image: '/articles/250519_龍匯天下_部落格圖_上-h.jpg',
    imageMobile: '/articles/250519_龍匯天下_部落格圖_上-m.jpg',
    link: '/Article/sauna2',
    views: 4068,
    tags: ['澳門', '澳門桑拿', '澳門劇本殺', '桑拿'],
    collapseId: 'collapse-sauna2',
  },
  {
    id: 3,
    title: '【澳門水療】超詳細全流程大揭秘，看完直接衝！',
    description: '會點進來的相信都是老司機，那小編今天就不藏私手把手帶你們解鎖澳門水療全流程，從進門到結束，每個部分都明明白白，看完直接衝！',
    image: '/articles/250512_龍匯天下_桑拿_banner_1550px-m.jpg',
    imageMobile: '/articles/250512_龍匯天下_桑拿_banner_1550px-m.jpg',
    link: '/Article/macao%20waterrr',
    views: 1936,
    tags: ['澳門龍匯天下水療', '水療龍匯', '龍匯澳門水療', '龍匯天下澳門水療'],
    collapseId: 'collapse-macao-waterrr',
  },
  {
    id: 4,
    title: '【澳門水療】頂級體驗｜隱世療癒地圖',
    description: '我先說，這篇文章必須收藏好吧！小編透過專業評測後整理出3間行家才懂私藏的SPA館，多說無益，讓我們接著看吧~',
    image: '/articles/250512_龍匯天下_桑拿_banner_1550px-m.jpg',
    imageMobile: '/articles/250512_龍匯天下_桑拿_banner_1550px-m.jpg',
    link: '/Article/macao%20waterr',
    views: 1503,
    tags: ['澳門水療', '龍匯澳門水療', '澳門龍匯天下水療', '龍匯天下水療'],
    collapseId: 'collapse-macao-waterr',
  },
  {
    id: 5,
    title: '澳門按摩推薦｜舒壓放鬆一篇看懂',
    description: '澳門除了賭場與美食，其實還藏著一個旅人最愛的秘密景點——澳門按摩！無論你是第一次來澳門、還是尋找舒壓放鬆的熟門熟路旅人，一間值得信賴的桑拿店，能讓你的行程畫龍點睛。本文特別整理出受歡迎的澳門按摩桑拿推',
    image: '/articles/250512_龍匯天下_桑拿_banner_1550px-m.jpg',
    imageMobile: '/articles/250512_龍匯天下_桑拿_banner_1550px-m.jpg',
    link: '/Article/macao%20massage%201',
    views: 1885,
    tags: ['澳門按摩', '澳門桑拿', '龍匯天下按摩', '澳門龍匯天下'],
    collapseId: 'collapse-macao-massage-1',
  },
  {
    id: 6,
    title: '【澳門按摩】8大必試桑拿｜隱藏平價神店｜避坑攻略',
    description: '澳門不只賭場與豬扒包！這座不夜城藏著頂級水療會館、24小時平價足療，甚至賭場免費按摩區。教你用最聰明姿勢消除暴走疲勞！',
    image: '/articles/【澳門按摩】8大必試桑拿、隱藏平價神店、避坑攻略-h.jpg',
    imageMobile: '/articles/【澳門按摩】8大必試桑拿、隱藏平價神店、避坑攻略-m.jpg',
    link: '/Article/macao%20massage',
    views: 2232,
    tags: ['澳門按摩', '龍匯澳門按摩', '澳門龍匯天下', '龍匯按摩'],
    collapseId: 'collapse-macao-massage',
  },
  {
    id: 7,
    title: '澳門桑拿玩法全攻略：入門技巧、注意事項與熱門店家總整理',
    description: '說到「澳門桑拿玩法」，很多人第一時間會聯想到按摩、三溫暖、熱食區，甚至還有人將之視為澳門旅遊不可或缺的一環。不過，與香港、大陸等地的桑拿相比，澳門桑拿文化可說是自成一格，從價格、玩法到服務形式都有其特',
    image: '/articles/250512_龍匯天下_桑拿_banner_1550px-m.jpg',
    imageMobile: '/articles/250512_龍匯天下_桑拿_banner_1550px-m.jpg',
    link: '/Article/macao-sauna-how',
    views: 2307,
    tags: ['澳門桑拿', '龍匯澳門按摩', '澳門按摩', '澳門劇本殺', '澳門龍匯天下'],
    collapseId: 'collapse-macao-sauna-how',
  },
  {
    id: 8,
    title: '【澳門水療指南】推薦：顏值技師×放鬆解壓×隱藏版SPA體驗全揭密！',
    description: '想在澳門來點「不一樣的放鬆」？無論你剛從賭場大殺四方、還是想找個寧靜角落讓身體徹底釋放壓力，「澳門水療」就是那道你不該錯過的祕密選項。',
    image: '/articles/250512_龍匯天下_桑拿_banner_1550px-m.jpg',
    imageMobile: '/articles/250512_龍匯天下_桑拿_banner_1550px-m.jpg',
    link: '/Article/macao-spa',
    views: 2278,
    tags: ['澳門桑拿', '澳門水療', '澳門劇本殺', '澳門旅遊', '澳門龍匯天下', '龍匯天下包車', '龍匯天下'],
    collapseId: 'collapse-macao-spa',
  },
  {
    id: 9,
    title: ' 澳門劇本殺，推理遊戲還是慾望遊戲?',
    description: '想在澳門玩點不一樣的劇本殺？別以為這只是燒腦推理，澳門劇本殺已進化成結合角色、情境與慾望的現場劇演。走進這場「遊戲」，你將成為慾望推理的主角，每個場景、每句台詞、每次互動，都是一場情緒與快感的試探。',
    image: '/articles/250512_龍匯天下_桑拿_banner_1550px-m.jpg',
    imageMobile: '/articles/250512_龍匯天下_桑拿_banner_1550px-m.jpg',
    link: '/Article/sauna4',
    views: 2098,
    tags: ['澳門桑拿', '澳門劇本殺', '澳門', '龍匯天下', '桑拿'],
    collapseId: 'collapse-sauna4',
  },
];

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

export default function SaunaPage() {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('PageNo');
  const currentPage = parseInt(pageParam || '1', 10);
  
  const itemsPerPage = 9;
  const totalPages = Math.ceil(saunaArticles.length / itemsPerPage);
  
  // Get articles for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = saunaArticles.slice(startIndex, endIndex);

  // Set page title/meta tags
  useEffect(() => {
    // Set page title
    document.title = '桑拿-澳門桑拿-龍匯天下';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', '澳門桑拿，桑拿旅遊-龍匯天下');
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: '首頁', url: 'https://www.long-huei.com' },
    { name: '桑拿', url: 'https://www.long-huei.com/ArticleCategory/Sauna' },
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "澳門桑拿攻略",
    description: "澳門桑拿，桑拿旅遊-龍匯天下",
    url: "https://www.long-huei.com/ArticleCategory/Sauna",
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
                  <span className="text-white/70">桑拿</span>
                </li>
              </ol>
            </nav>
          </div>

          {/* Articles Section */}
          <section className="articles w-full bg-black py-8" style={{ marginTop: '20px' }}>
            <div className="container mx-auto px-4">
              <h1 className="text-white text-3xl mb-8">桑拿</h1>
              
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
                              href={`/ArticleCategory/Sauna?PageNo=${currentPage - 1}&SortBy=DisplaySeq&SortDirection=ASC`} 
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
                                href={`/ArticleCategory/Sauna?PageNo=${pageNum}&SortBy=DisplaySeq&SortDirection=ASC`}
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
                              href={`/ArticleCategory/Sauna?PageNo=${currentPage + 1}&SortBy=DisplaySeq&SortDirection=ASC`} 
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

