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
  { name: '旅遊', href: '/ArticleCategory/Travel', count: 11 },
  { name: '桑拿', href: '/ArticleCategory/Sauna', count: 11 },
  { name: '包車', href: '/ArticleCategory/RentCar', count: 12 },
  { name: '訂房', href: '/ArticleCategory/Booking', count: 5 },
  { name: '其他娛樂', href: '/ArticleCategory/Entertainment', count: 10, active: true },
  { name: '常見問答', href: '/ArticleCategory/Question', count: 3 },
  { name: '專人客服', href: '/CustomerService', count: 0 },
];

const popularTags = [
  { name: '澳門包車', href: '/Tag/澳門包車' },
  { name: '澳門旅遊', href: '/Tag/澳門旅遊' },
  { name: '澳門訂房', href: '/Tag/澳門訂房' },
  { name: '龍匯天下包車', href: '/Tag/龍匯天下包車' },
  { name: '澳門百老匯', href: '/Tag/澳門百老匯' },
  { name: '澳門龍匯', href: '/Tag/澳門龍匯' },
  { name: '龍匯天下按摩', href: '/Tag/龍匯天下按摩' },
  { name: '龍匯澳們百老匯', href: '/Tag/龍匯澳們百老匯' },
  { name: '龍匯美高梅', href: '/Tag/龍匯美高梅' },
  { name: '龍匯澳門永利', href: '/Tag/龍匯澳門永利' },
];

function EntertainmentContent() {
  const searchParams = useSearchParams();
  const itemsPerPage = 3;
  const totalPages = Math.ceil(entertainmentArticles.length / itemsPerPage);

  // Get current page from URL params
  const pageParam = searchParams.get('PageNo');
  const currentPage = Math.max(1, Math.min(parseInt(pageParam || '1', 10), totalPages));

  // Get articles for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = entertainmentArticles.slice(startIndex, endIndex);

  return (
    <ArticleCategoryLayout
      pageTitle="其他娛樂"
      breadcrumbName="其他娛樂"
      baseUrl="/ArticleCategory/Entertainment"
      articles={entertainmentArticles}
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

export default function EntertainmentPage() {
  // Set page title/meta tags
  useEffect(() => {
    document.title = '澳門其他娛樂攻略 - 水舞間、百老匯、美高梅全指南 | 龍匯天下';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', '探索澳門其他娛樂完整攻略，包含水舞間、百老匯、美高梅、永利等娛樂場所介紹。精選澳門娛樂必看文章，從表演節目到娛樂設施一次搞定，讓您的澳門之旅更加精彩。');
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: '首頁', url: 'https://www.long-huei.com' },
    { name: '其他娛樂', url: 'https://www.long-huei.com/ArticleCategory/Entertainment' },
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "澳門其他娛樂攻略",
    description: "探索澳門其他娛樂完整攻略，包含水舞間、百老匯、美高梅、永利等娛樂場所介紹",
    url: "https://www.long-huei.com/ArticleCategory/Entertainment",
    inLanguage: "zh-TW",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: entertainmentArticles.length,
      itemListElement: entertainmentArticles.map((article, index) => ({
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
            <EntertainmentContent />
          </Suspense>
          <Footer />
        </main>

        <GoToTop />
        <BottomNav />
      </div>
    </>
  );
}

