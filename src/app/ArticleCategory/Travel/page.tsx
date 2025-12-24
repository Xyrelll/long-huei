import { Metadata } from 'next';
import { generateMetadata } from '@/config/metadata';
import { generateBreadcrumbSchema } from '@/config/seo';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import GoToTop from '@/components/layout/GoToTop/GoToTop';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = generateMetadata({
  title: '澳門旅遊攻略 - 景點、美食、住宿全指南 | 龍匯天下',
  description: '探索澳門旅遊完整攻略，包含必訪景點、美食推薦、住宿選擇、交通指南等實用資訊。精選澳門自由行必看文章，從簽證辦理到行程規劃一次搞定，讓您的澳門之旅更加精彩。',
  path: '/ArticleCategory/Travel',
});

interface TravelArticle {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  link: string;
  views?: number;
}

const travelArticles: TravelArticle[] = [
  {
    id: 1,
    title: '澳門2025最新懶人包：簽證、景點、美食、住宿全攻略',
    description: '完整收錄澳門旅遊必備資訊，從簽證辦理到景點推薦，一次搞定所有行程規劃。',
    image: '/article-latest-1.jpg',
    date: '2025/11/21',
    category: '旅遊攻略',
    link: '/article/guide-2025',
    views: 5234,
  },
  {
    id: 2,
    title: '澳門一日遊｜24 小時暢遊世界遺產與娛樂之都',
    description: '精心規劃的澳門一日遊路線，帶您走訪世界遺產景點與現代娛樂設施，體驗澳門的多元魅力。',
    image: '/article-latest-3.jpg',
    date: '2025/10/28',
    category: '行程規劃',
    link: '/article/day-tour',
    views: 3124,
  },
  {
    id: 3,
    title: '【澳門景點】自由行必收的12個玩樂秘笈！',
    description: '精選12個澳門必訪景點，包含歷史古蹟、現代地標與隱藏版打卡地點，讓您的自由行更加豐富。',
    image: '/article-10.jpg',
    date: '2025/09/15',
    category: '景點推薦',
    link: '/article/attractions',
    views: 4567,
  },
  {
    id: 4,
    title: '【澳門旅遊安全嗎？】2025重點解析',
    description: '詳細分析澳門旅遊安全狀況，包含治安資訊、女性獨遊建議與緊急聯絡方式，讓您安心出遊。',
    image: '/article-7.jpg',
    date: '2025/08/20',
    category: '旅遊安全',
    link: '/article/safety',
    views: 2890,
  },
  {
    id: 5,
    title: '澳門必吃美食｜從街邊小吃到米其林餐廳',
    description: '探索澳門美食文化，從傳統葡式料理到現代創意料理，帶您品嚐最道地的澳門味道。',
    image: '/article-food.jpg',
    date: '2025/07/10',
    category: '美食推薦',
    link: '/article/food-guide',
    views: 4123,
  },
  {
    id: 6,
    title: '澳門交通全攻略｜機場、公車、計程車一次搞懂',
    description: '完整介紹澳門交通方式，包含機場接送、公車路線、計程車費用與免費接駁車資訊。',
    image: '/article-transport.jpg',
    date: '2025/06/25',
    category: '交通指南',
    link: '/article/transport-guide',
    views: 3456,
  },
];

const categories = [
  { name: '全部', count: 24 },
  { name: '旅遊攻略', count: 8 },
  { name: '景點推薦', count: 6 },
  { name: '美食推薦', count: 5 },
  { name: '住宿指南', count: 3 },
  { name: '交通指南', count: 2 },
];

export default function TravelPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: '首頁', url: 'https://www.long-huei.com' },
    { name: '旅遊攻略', url: 'https://www.long-huei.com/ArticleCategory/Travel' },
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
          datePublished: article.date,
          category: article.category,
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
        
        <main className="w-full pt-[99px]">
          {/* Hero Section */}
          <section className="relative w-full h-[400px] bg-gradient-to-b from-[#2C261C] to-black">
            <div className="absolute inset-0 bg-[url('/travel-hero.jpg')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10 container mx-auto px-7 h-full flex flex-col justify-center items-center text-center">
              <h1 className="text-5xl md:text-6xl font-black text-[#F5CA69] mb-4 tracking-wider">
                澳門旅遊攻略
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                探索澳門，享受極致服務。完整收錄景點、美食、住宿、交通等實用資訊
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section className="w-full max-w-[1200px] mx-auto px-7 py-16">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="flex-1">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-3 mb-8 pb-6 border-b border-white/10">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="px-4 py-2 bg-[#2C261C] text-white rounded-full text-sm hover:bg-[#A46912] transition-colors"
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {travelArticles.map((article) => (
                    <Link
                      key={article.id}
                      href={article.link}
                      className="group bg-[#2C261C] rounded-[40px] overflow-hidden hover:scale-[1.02] transition-transform"
                    >
                      <div className="relative w-full h-[200px]">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-[#A46912] rounded-full text-xs text-white">
                          {article.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-[#F5CA69] mb-2 line-clamp-2 group-hover:text-[#FFCD83] transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-white/70 mb-4 line-clamp-2">
                          {article.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-white/50">
                          <span>{article.date}</span>
                          {article.views && (
                            <span>觀看人數：{article.views.toLocaleString()}</span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 mt-12">
                  <button className="px-4 py-2 bg-[#2C261C] text-white rounded-lg hover:bg-[#A46912] transition-colors">
                    上一頁
                  </button>
                  <button className="px-4 py-2 bg-[#A46912] text-white rounded-lg">
                    1
                  </button>
                  <button className="px-4 py-2 bg-[#2C261C] text-white rounded-lg hover:bg-[#A46912] transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 bg-[#2C261C] text-white rounded-lg hover:bg-[#A46912] transition-colors">
                    3
                  </button>
                  <button className="px-4 py-2 bg-[#2C261C] text-white rounded-lg hover:bg-[#A46912] transition-colors">
                    下一頁
                  </button>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="w-full lg:w-80 space-y-6">
                {/* Popular Articles */}
                <div className="bg-[#2C261C] rounded-[40px] p-6">
                  <h2 className="text-xl font-bold text-[#F5CA69] mb-4">熱門文章</h2>
                  <div className="space-y-4">
                    {travelArticles.slice(0, 5).map((article) => (
                      <Link
                        key={article.id}
                        href={article.link}
                        className="flex gap-3 group"
                      >
                        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform"
                            sizes="80px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-[#FFCD83] line-clamp-2 group-hover:text-[#F5CA69] transition-colors">
                            {article.title}
                          </h4>
                          <p className="text-xs text-white/50 mt-1">{article.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-[#2C261C] rounded-[40px] p-6">
                  <h2 className="text-xl font-bold text-[#F5CA69] mb-4">文章分類</h2>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        href={`/ArticleCategory/${category.name}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-[#A46912]/20 transition-colors"
                      >
                        <span className="text-white">{category.name}</span>
                        <span className="text-white/50 text-sm">{category.count}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </main>

        <Footer />
        <GoToTop />
      </div>
    </>
  );
}

