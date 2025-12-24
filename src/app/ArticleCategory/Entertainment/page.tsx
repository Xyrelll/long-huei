'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { generateBreadcrumbSchema } from '@/config/seo';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import GoToTop from '@/components/layout/GoToTop/GoToTop';
import TravelArticleList from '@/components/features/TravelArticleList/TravelArticleList';
import Link from 'next/link';

interface EntertainmentArticle {
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

const entertainmentArticles: EntertainmentArticle[] = [
  {
    id: 1,
    title: '澳門怎麼玩？最新深度玩法大公開！',
    description: '澳門遠不止賭場和歷史遺跡，這座城市正以全新面貌迎接旅客。小編推薦這些與眾不同的體驗方式：',
    image: '/articles/251125-h.jpg',
    imageMobile: '/articles/251125-m.jpg',
    link: '/Article/macao%20play',
    views: 717,
    tags: ['澳門訂房', '澳門龍匯', '龍匯天下包車'],
    collapseId: 'collapse-macao-play',
  },
  {
    id: 2,
    title: '澳門水上樂園｜暢玩夏日的親子與朋友必訪景點',
    description: '提到澳門，很多人第一時間想到的是大三巴、美食或世界級的酒店，但其實還有一個不能錯過的玩樂去處，那就是 澳門水上樂園。炎炎夏日，最適合和家人朋友一起暢玩水上設施，體驗刺激又清涼的快感。無論是親子家庭、情',
    image: '/articles/251125-h.jpg',
    imageMobile: '/articles/251125-m.jpg',
    link: '/Article/macao-waterpark',
    views: 1119,
    tags: ['澳門包車', '澳門水上樂園', '澳門旅遊'],
    collapseId: 'collapse-macao-waterpark',
  },
  {
    id: 3,
    title: '澳門百老匯：地道美食與娛樂表演的魅力熱點',
    description: '說到澳門旅遊，不得不提「澳門百老匯」這個集美食、娛樂與文化於一體的熱門地點。無論是自由行旅客還是家庭出遊，澳門百老匯都是不可錯過的行程之一。它不僅擁有豐富多元的地道美食，更有精彩不斷的現場表演與舒適的',
    image: '/articles/251125-h.jpg',
    imageMobile: '/articles/251125-m.jpg',
    link: '/Article/bailaohuei',
    views: 1358,
    tags: ['澳門百老匯', '百老匯', '龍匯澳們百老匯'],
    collapseId: 'collapse-bailaohuei',
  },
  {
    id: 4,
    title: '【澳門永利】深度指南｜避開觀光客的質感玩法',
    description: '藝術、夜景與在地融合的極致體驗，這可不是一般來【澳門永利】的觀光客能夠擁有的，但經過小編的整理，只要看完這篇文章，你就懂啦，走起！',
    image: '/articles/251125-h.jpg',
    imageMobile: '/articles/251125-m.jpg',
    link: '/Article/MACAO%20yongliii',
    views: 1294,
    tags: ['澳門永利龍匯', '龍匯澳門永利', '龍匯天下永利', '永利澳門龍匯天下'],
    collapseId: 'collapse-macao-yongliii',
  },
  {
    id: 5,
    title: '【澳門永利】最淺顯易懂的遊玩寶典！',
    description: '想在澳門永利享受頂級住宿，卻擔心荷包失血或人擠人？2024年實測發現，80%台灣旅客直接官網訂房，都2025年了，可千萬別再這麼做！為什麼呢?文末我再告訴你~',
    image: '/articles/251125-h.jpg',
    imageMobile: '/articles/251125-m.jpg',
    link: '/Article/macao%20yongli',
    views: 1324,
    tags: ['澳門永利', '龍匯澳門永利', '永利澳門龍匯天下', '龍匯天下澳門永利'],
    collapseId: 'collapse-macao-yongli',
  },
  {
    id: 6,
    title: '【澳門水舞間】超絕視覺震撼！給你不得不去的理由！',
    description: '來到澳門旅遊最不能錯過的就是《水舞間》，耗資超過二十億港元，是全球最壯觀最大型的水上匯演舞台劇，還曾榮獲2011年度「HKMA/TVB 傑出市場策劃獎」金獎；表演橋段結合高難度特技、絢爛炫目燈光、特殊',
    image: '/articles/【澳門水舞間】超絕視覺震撼！給你不得不去的理由！-h.jpg',
    imageMobile: '/articles/【澳門水舞間】超絕視覺震撼！給你不得不去的理由！-m.jpg',
    link: '/Article/macao%20water',
    views: 1455,
    tags: ['澳門水舞間', '龍匯澳門水舞間', '水舞間龍匯天下', '龍匯水舞間'],
    collapseId: 'collapse-macao-water',
  },
  {
    id: 7,
    title: '【澳門按摩】2025老司機指南｜6大隱密技法、情侶私房套餐、感官覺醒暗號',
    description: '澳門的夜，指尖暗藏玄機！半島小巷裡的 「18+沉浸式按摩」 ，用熱石與精油解鎖你不敢說的渴望：雙人鴛鴦浴缸暗門、角色扮演情境理療、VIP密室筋膜調教... ',
    image: '/articles/251125-h.jpg',
    imageMobile: '/articles/251125-m.jpg',
    link: '/Article/macao%20massage2',
    views: 1994,
    tags: ['澳門按摩', '澳門龍匯按摩', '龍匯天下按摩', '澳門龍匯天下按摩'],
    collapseId: 'collapse-macao-massage2',
  },
  {
    id: 8,
    title: '【澳門美高梅】必玩6大秘境、隱藏免費福利、美食省錢密技',
    description: '【澳門美高梅】不只奢華賭場！從海底藝術殿堂到空中糖雕塑、免費水上大秀，這座娛樂王國藏著連在地人都驚豔的玩法。教你用賭場積分換免費下午茶、解鎖房客專屬機位，連非住客都能爽玩一整天！',
    image: '/articles/251125-h.jpg',
    imageMobile: '/articles/251125-m.jpg',
    link: '/Article/macao%20meigaomei',
    views: 1880,
    tags: ['澳門美高梅', '美高梅澳門龍匯', '龍匯美高梅', '龍匯天下澳門美高梅'],
    collapseId: 'collapse-macao-meigaomei',
  },
  {
    id: 9,
    title: '【澳門賭場】攻略來了！不賭錢也能嗨玩三天三夜的隱藏玩法大公開！',
    description: '誰說【澳門賭場】只有老虎機和牌桌？這座東方拉斯維加斯藏著太多你不知道的驚喜！今天就跟著小編解鎖【澳門賭場】的另類玩法，連本地人都驚呼"原來還能這樣玩"～',
    image: '/articles/【澳門賭場】攻略來了！不賭錢也能嗨玩三天三夜的隱藏玩法大公開！-h.jpg',
    imageMobile: '/articles/【澳門賭場】攻略來了！不賭錢也能嗨玩三天三夜的隱藏玩法大公開！-h.jpg',
    link: '/Article/macao%20casino',
    views: 2104,
    tags: ['澳門賭場攻略', '龍匯天下澳門賭場', '澳門賭場龍匯', '澳門賭場哪家好'],
    collapseId: 'collapse-macao-casino',
  },
];

const categories = [
  { name: '旅遊', link: '/ArticleCategory/Travel', active: false },
  { name: '訂房', link: '/ArticleCategory/Booking', active: false },
  { name: '桑拿', link: '/ArticleCategory/Sauna', active: false },
  { name: '包車', link: '/ArticleCategory/RentCar', active: false },
  { name: '其他娛樂', link: '/ArticleCategory/Entertainment', active: true },
];

const popularTags = [
  '澳門包車',
  '澳門旅遊',
  '澳門訂房',
  '龍匯天下包車',
  '澳門百老匯',
  '澳門龍匯',
  '龍匯天下按摩',
  '龍匯澳們百老匯',
  '龍匯美高梅',
  '龍匯澳門永利',
];

export default function EntertainmentPage() {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('PageNo');
  const currentPage = parseInt(pageParam || '1', 10);
  
  const itemsPerPage = 9;
  const totalPages = Math.ceil(entertainmentArticles.length / itemsPerPage);
  
  // Get articles for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = entertainmentArticles.slice(startIndex, endIndex);

  // Set page title/meta tags
  useEffect(() => {
    // Set page title
    document.title = '其他娛樂 - 龍匯天下';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', '龍匯天下-包車-訂房-桑拿-其他娛樂');
  }, []);

  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: '首頁', url: 'https://www.long-huei.com/' },
    { name: '其他娛樂', url: 'https://www.long-huei.com/ArticleCategory/Entertainment' },
  ]);

  // Generate CollectionPage schema
  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '其他娛樂',
    description: '龍匯天下其他娛樂相關文章',
    url: 'https://www.long-huei.com/ArticleCategory/Entertainment',
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
              <li className="breadcrumb-item active" aria-current="page">其他娛樂</li>
            </ol>
          </nav>
        </div>

        {/* Articles Section */}
        <section className="articles w-full bg-black py-8" style={{ marginTop: '20px' }}>
          <div className="container mx-auto px-4">
            <h1 className="text-white text-3xl mb-8">其他娛樂</h1>
            
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
                            href={`/ArticleCategory/Entertainment?PageNo=${currentPage - 1}&SortBy=DisplaySeq&SortDirection=ASC`} 
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
                              href={`/ArticleCategory/Entertainment?PageNo=${page}&SortBy=DisplaySeq&SortDirection=ASC`}
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
                            href={`/ArticleCategory/Entertainment?PageNo=${currentPage + 1}&SortBy=DisplaySeq&SortDirection=ASC`} 
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

