"use client";

import { useEffect, Suspense, useState } from "react";
import { useParams } from "next/navigation";
import { generateBreadcrumbSchema } from "@/config/seo";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import GoToTop from "@/components/layout/GoToTop/GoToTop";
import BottomNav from "@/components/layout/BottomNav/BottomNav";
import Link from "next/link";
import Image from "next/image";
import ArticleSidebar from "@/components/layout/ArticleSidebar/ArticleSidebar";
import RecommendedArticles from "@/components/features/RecommendedArticles/RecommendedArticles";
import ArticleContentRenderer from "@/components/features/ArticleContentRenderer/ArticleContentRenderer";
import type { ArticleContent } from "@/types/articleContent";

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  imageMobile: string;
  link: string;
  views: number;
  tags?: string[];
  collapseId: string;
  category?: string;
  content?: string;
  contentBlocks?: ArticleContent;
}

const categories = [
  { name: "旅遊", href: "/ArticleCategory/Travel", count: 11 },
  { name: "桑拿", href: "/ArticleCategory/Sauna", count: 11 },
  { name: "包車", href: "/ArticleCategory/RentCar", count: 12 },
  { name: "訂房", href: "/ArticleCategory/Booking", count: 5 },
  { name: "其他娛樂", href: "/ArticleCategory/Entertainment", count: 10 },
  { name: "常見問答", href: "/ArticleCategory/Question", count: 3 },
  { name: "專人客服", href: "/CustomerService", count: 0 },
];

const popularTags = [
  { name: "澳門包車", href: "/Tag/澳門包車" },
  { name: "澳門旅遊", href: "/Tag/澳門旅遊" },
  { name: "龍匯天下", href: "/Tag/龍匯天下" },
  { name: "澳門訂房", href: "/Tag/澳門訂房" },
  { name: "龍匯包車", href: "/Tag/龍匯包車" },
  { name: "澳門龍匯天下", href: "/Tag/澳門龍匯天下" },
  { name: "澳門包車景點", href: "/Tag/澳門包車景點" },
  { name: "龍匯天下訂房", href: "/Tag/龍匯天下訂房" },
  { name: "澳門推薦", href: "/Tag/澳門推薦" },
  { name: "澳門旅遊找龍匯", href: "/Tag/澳門旅遊找龍匯" },
];

function ArticleContent() {
  const params = useParams();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const slug = params?.slug as string;
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Import articles from each category
    async function fetchArticle() {
      try {
        const [
          { bookingArticles },
          { travelArticles },
          { rentCarArticles },
          { saunaArticles },
          { entertainmentArticles },
          { questionArticles },
        ] = await Promise.all([
          import("@/app/ArticleCategory/Booking/page"),
          import("@/app/ArticleCategory/Travel/page"),
          import("@/app/ArticleCategory/RentCar/page"),
          import("@/app/ArticleCategory/Sauna/page"),
          import("@/app/ArticleCategory/Entertainment/page"),
          import("@/app/ArticleCategory/Question/page"),
        ]);

        // Combine all articles
        const allArticles: Article[] = [
          ...(bookingArticles || []).map((a: Article) => ({
            ...a,
            category: "訂房",
          })),
          ...(travelArticles || []).map((a: Article) => ({
            ...a,
            category: "旅遊",
          })),
          ...(rentCarArticles || []).map((a: Article) => ({
            ...a,
            category: "包車",
          })),
          ...(saunaArticles || []).map((a: Article) => ({
            ...a,
            category: "桑拿",
          })),
          ...(entertainmentArticles || []).map((a: Article) => ({
            ...a,
            category: "其他娛樂",
          })),
          ...(questionArticles || []).map((a: Article) => ({
            ...a,
            category: "常見問答",
          })),
        ];

        // Find article by slug (handle URL encoding and different formats)
        const decodedSlug = decodeURIComponent(slug);
        const foundArticle = allArticles.find((a) => {
          const articleLink = a.link.replace("/Article/", "");
          return (
            articleLink === slug ||
            articleLink === decodedSlug ||
            articleLink.includes(slug) ||
            articleLink.includes(decodedSlug) ||
            a.link === `/Article/${slug}` ||
            a.link === `/Article/${decodedSlug}`
          );
        });

        setArticle(foundArticle || null);
      } catch (error) {
        console.error("Error fetching article:", error);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | 龍匯天下`;

      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute("content", article.description);
    }
  }, [article]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white text-xl">載入中...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="relative w-full min-h-screen bg-black flex justify-center items-start">
        <Navbar />
        <main className="inner-page w-[90%] mx-auto">
          <div className="w-full "></div>
          <div className="flex flex-col items-center justify-center py-20">
            <h1 className="text-white text-3xl mb-4">文章未找到</h1>
            <Link href="/" className="text-[#FFCD83] hover:underline">
              返回首頁
            </Link>
          </div>
          <Footer />
        </main>
        <GoToTop />
        <BottomNav />
      </div>
    );
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "首頁", url: "https://longhuei.netlify.app" },
    {
      name: article.category || "文章",
      url: `https://longhuei.netlify.app/ArticleCategory/${
        article.category === "訂房"
          ? "Booking"
          : article.category === "旅遊"
          ? "Travel"
          : article.category === "包車"
          ? "RentCar"
          : article.category === "桑拿"
          ? "Sauna"
          : article.category === "其他娛樂"
          ? "Entertainment"
          : "Question"
      }`,
    },
    { name: article.title, url: `https://longhuei.netlify.app${article.link}` },
  ]);

  const getCategoryUrl = (category: string) => {
    const map: Record<string, string> = {
      訂房: "Booking",
      旅遊: "Travel",
      包車: "RentCar",
      桑拿: "Sauna",
      其他娛樂: "Entertainment",
      常見問答: "Question",
    };
    return `/ArticleCategory/${map[category] || "Travel"}`;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="relative w-full min-h-screen bg-black flex justify-center items-start">
        <Navbar />

        <main className="inner-page w-[90%] mx-auto">
          <div className="w-full "></div>

          {/* Breadcrumb */}
          <nav
            style={{
              marginTop: isMobile ? '10px' : '30px',
            }}
            className="nav-breadcrumb py-4"
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb flex items-center gap-1 md:gap-2 text-white text-xs md:text-sm flex-wrap">
              <li className="breadcrumb-item">
                <Link
                  href="/"
                  className="flex items-center gap-1 hover:text-[#FFCD83]"
                >
                  <i className="bi bi-house-door-fill"></i>
                  <span className="hidden sm:inline">首頁</span>
                </Link>
              </li>
              <li className="breadcrumb-separator text-white/70">
                &gt;
              </li>
              {article.category && (
                <>
                  <li className="breadcrumb-item">
                    <Link
                      href={getCategoryUrl(article.category)}
                      className="hover:text-[#FFCD83]"
                    >
                      {article.category}
                    </Link>
                  </li>
                  <li className="breadcrumb-separator text-white/70">
                    &gt;
                  </li>
                </>
              )}
              <li
                className="breadcrumb-item active"
                aria-current="page"
              >
                <span className="text-white/70">
                  {article.title}
                </span>
              </li>
            </ol>
          </nav>

          <div
            style={{
              paddingTop: "30px",
            }}
            className="flex flex-col w-full items-start justify-start"
          >
            {/* Article Title */}
            <h1
              style={{
                paddingBottom: "24px",
              }}
              className="text-white text-3xl md:text-[30px] font-medium mb-6"
            >
              {article.title}
            </h1>

            {/* Interactive Buttons (Tags) */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-8">
                {article.tags.map((tag, idx) => (
                  <Link
                    key={idx}
                    href={`/Tag/${tag}`}
                    style={{
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      borderRadius: "50px",
                    }}
                    className="px-4 py-2 bg-[#CD861A] text-white hover:bg-white hover:text-[#CD861A] transition-colors text-sm"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div
            style={{
              paddingTop: "10px",
            }}
            className="flex flex-col lg:flex-row gap-6 py-8"
          >
            {/* Main Content */}
            <div className="flex-1 lg:max-w-3xl ">
              <div className="flex flex-col md:flex-row  items-start justify-center">
                 {/* Left Sidebar - Social Media */}
                 <div
                   className="w-[95%] lg:w-20 flex mb-4 lg:mb-0"
                 >
                   <div
                     style={{
                      marginTop: isMobile ? "0px" : "10px",
                       paddingTop:  isMobile ? "10px" : "20px",
                       paddingLeft: isMobile ? "10px" : "10px",
                       paddingRight: isMobile ? "10px" : "10px",
                       paddingBottom: isMobile ? "10px" : "30px",
                       borderRadius: isMobile ? "50px" : "50px",
                     }}
                     className="w-full lg:w-auto bg-white flex flex-row lg:flex-col items-center lg:items-start justify-start lg:justify-start gap-4 lg:gap-0 sticky top-24"
                   >
                     <div className="text-gray-500 text-sm lg:mb-4">
                       加入
                       <br className="hidden lg:block" />
                       <span className="lg:hidden"> </span>
                       好友
                     </div>
                     <div 
                     style={{
                      marginTop: isMobile ? "0px" : "10px",
                     }}
                     className="flex flex-row lg:flex-col gap-4 lg:mt-5">
                       <a
                         href="#"
                         className="w-8 h-8 rounded-md bg-green-500 flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0"
                       >
                         <i className="bi bi-line text-white text-xl"></i>
                       </a>
                       <a
                         href="#"
                         className="w-8 h-8 rounded-md bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0"
                       >
                         <i className="bi bi-instagram text-white text-xl"></i>
                       </a>
                     </div>
                   </div>
                 </div>
                <div
                  style={{
                    paddingTop: "10px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    paddingBottom: "10px",
                    borderRadius: "50px",
                  }}
                  className="flex flex-col items-center justify-center"
                >
                  {/* Mobile Social Media - Above Image */}
                  <div className="lg:hidden w-full mb-6">
                    <div
                      className="share"
                      style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '20px',
                        padding: '10px 20px 5px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '16px',
                        height: '50px',
                        fontSize: '16px',
                        fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
                      }}
                    >
                      <div style={{ color: '#ABABAB', fontSize: '16px' }}>
                        加入
                        <br />
                        好友
                      </div>
                      <div className="flex gap-4 ml-auto">
                        <a
                          href="https://lin.ee/rQgNQ6D"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center hover:opacity-80 transition-opacity"
                        >
                          <i className="bi bi-line text-white text-base"></i>
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center hover:opacity-80 transition-opacity"
                        >
                          <i className="bi bi-instagram text-white text-base"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div
                  style={{
                    borderRadius: '50px',
                    marginBottom: '30px',
                  }}
                  className="mb-8 w-full ">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={800}
                      height={450}
                      className="w-full h-auto rounded-[50px]"
                      priority
                    />
                  </div>

                  {/* Article Content */}
                  <div className="prose prose-invert max-w-none">
                    {article.contentBlocks ? (
                      // Check if new structured format (with description, tableOfContents, sections)
                      article.contentBlocks.description || article.contentBlocks.tableOfContents || article.contentBlocks.sections ? (
                        <ArticleContentRenderer content={article.contentBlocks} />
                      ) : (
                        // Fallback to legacy blocks format
                        article.contentBlocks.blocks ? (
                          <ArticleContentRenderer blocks={article.contentBlocks.blocks} />
                        ) : (
                          <div className="text-white text-lg leading-relaxed whitespace-pre-line">
                            {article.content || article.description}
                          </div>
                        )
                      )
                    ) : (
                      <div className="text-white text-lg leading-relaxed whitespace-pre-line">
                        {article.content || article.description}
                      </div>
                    )}
                  </div>
                  {/* LINE Add Friend Button - Below Content (Mobile & Desktop) */}
                  <div className="mt-8 mb-8">
                    <a 
                      href="https://lin.ee/rQgNQ6D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Image
                        src="/zh-Hant.png"
                        alt="加入好友"
                        width={144}
                        height={36}
                        style={{ border: 0 }}
                        className="w-auto h-auto"
                      />
                    </a>
                  </div>

                  {/* Article Meta */}
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-4 text-white/70 text-sm">
                      <span>觀看人數：{article.views}</span>
                      {article.category && (
                        <span>分類：{article.category}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="sticky top-24">
                <ArticleSidebar
                  categories={categories}
                  popularTags={popularTags}
                  activeCategory={article.category}
                />
              </div>
            </div>
          </div>

          {/* Recommended Articles Section */}
          {article && (
            <RecommendedArticles
              articles={[
                {
                  id: 1,
                  title:
                    "【澳門景點】2025最強攻略!必訪10大秘境、路線、美食全收錄",
                  description:
                    "澳門不只賭場與蛋塔!這座世界遺產小城藏著葡式浪漫、漁村風情與隱藏版打卡點。本篇精選12個「連在地人都推薦」的必訪景點，從歷史古蹟到網美打卡點一次整理，搭配本文獨家的實用攻略，教你用最",
                  image:
                    "/travel/【澳門景點】2025最強攻略！必訪10大秘境、路線、美食全收錄-c.jpg",
                  link: "/Article/macao%20view",
                  tags: [
                    "澳門龍匯",
                    "龍匯天下澳門旅遊",
                    "澳門包車",
                    "澳門包車景點",
                  ],
                  date: "2025/06/02",
                },
                {
                  id: 2,
                  title:
                    "【大三巴牌坊】2025澳門自由行必訪深度攻略：歷史、周邊景點與美食全解析",
                  description:
                    "澳門大三巴牌坊是這座城市的靈魂地標,更是聯合國世界文化遺產的核心區域。無論是初訪旅客還是重返探索者,澳門大三巴牌坊將在2025年以更好的設施和更豐富的體驗迎接訪客。",
                  image:
                    "/travel/【大三巴牌坊】2025澳門自由行必訪深度攻略：歷史、周邊景點與美食全解析-c.jpg",
                  link: "/Article/macao%20dasanbaa",
                  tags: [
                    "澳門大三巴",
                    "大三巴澳門龍匯",
                    "龍匯大三巴澳門",
                    "澳門龍匯天下大三巴",
                  ],
                  date: "2025/07/04",
                },
                {
                  id: 3,
                  title: "【澳門景點】自由行必收的12個玩樂秘笈！",
                  description:
                    "澳門融合了葡式風情與中華文化,更坐擁8項世界遺產與頂級度假村,是亞洲旅客短程出遊的熱門選擇。本文精選12個「連在地人都推薦」的必訪景點，從歷史古蹟到網美打卡點一次整理",
                  image: "/travel/【澳門景點】自由行必收的12個玩樂秘笈！-c.jpg",
                  link: "/Article/travel1",
                  tags: [
                    "澳門旅遊",
                    "澳門安全",
                    "澳門景點",
                    "澳門推薦",
                    "龍匯天下",
                  ],
                  date: "2025/05/17",
                },
                {
                  id: 4,
                  title:
                    "【澳門景點】2025最強攻略!必訪10大秘境、路線、美食全收錄",
                  description:
                    "澳門不只賭場與蛋塔!這座世界遺產小城藏著葡式浪漫、漁村風情與隱藏版打卡點。本篇精選12個「連在地人都推薦」的必訪景點，從歷史古蹟到網美打卡點一次整理，搭配本文獨家的實用攻略，教你用最",
                  image:
                    "/travel/【澳門景點】2025最強攻略！必訪10大秘境、路線、美食全收錄-c.jpg",
                  link: "/Article/macao%20view",
                  tags: [
                    "澳門龍匯",
                    "龍匯天下澳門旅遊",
                    "澳門包車",
                    "澳門包車景點",
                  ],
                  date: "2025/06/02",
                },
                {
                  id: 5,
                  title:
                    "【大三巴牌坊】2025澳門自由行必訪深度攻略：歷史、周邊景點與美食全解析",
                  description:
                    "澳門大三巴牌坊是這座城市的靈魂地標,更是聯合國世界文化遺產的核心區域。無論是初訪旅客還是重返探索者,澳門大三巴牌坊將在2025年以更好的設施和更豐富的體驗迎接訪客。",
                  image:
                    "/travel/【大三巴牌坊】2025澳門自由行必訪深度攻略：歷史、周邊景點與美食全解析-c.jpg",
                  link: "/Article/macao%20dasanbaa",
                  tags: [
                    "澳門大三巴",
                    "大三巴澳門龍匯",
                    "龍匯大三巴澳門",
                    "澳門龍匯天下大三巴",
                  ],
                  date: "2025/07/04",
                },
                {
                  id: 6,
                  title: "【澳門景點】自由行必收的12個玩樂秘笈！",
                  description:
                    "澳門融合了葡式風情與中華文化,更坐擁8項世界遺產與頂級度假村,是亞洲旅客短程出遊的熱門選擇。本文精選12個「連在地人都推薦」的必訪景點，從歷史古蹟到網美打卡點一次整理",
                  image: "/travel/【澳門景點】自由行必收的12個玩樂秘笈！-c.jpg",
                  link: "/Article/travel1",
                  tags: [
                    "澳門旅遊",
                    "澳門安全",
                    "澳門景點",
                    "澳門推薦",
                    "龍匯天下",
                  ],
                  date: "2025/05/17",
                },
                {
                  id: 7,
                  title:
                    "【澳門景點】2025最強攻略!必訪10大秘境、路線、美食全收錄",
                  description:
                    "澳門不只賭場與蛋塔!這座世界遺產小城藏著葡式浪漫、漁村風情與隱藏版打卡點。本篇精選12個「連在地人都推薦」的必訪景點，從歷史古蹟到網美打卡點一次整理，搭配本文獨家的實用攻略，教你用最",
                  image:
                    "/travel/【澳門景點】2025最強攻略！必訪10大秘境、路線、美食全收錄-c.jpg",
                  link: "/Article/macao%20view",
                  tags: [
                    "澳門龍匯",
                    "龍匯天下澳門旅遊",
                    "澳門包車",
                    "澳門包車景點",
                  ],
                  date: "2025/06/02",
                },
                {
                  id: 8,
                  title:
                    "【大三巴牌坊】2025澳門自由行必訪深度攻略：歷史、周邊景點與美食全解析",
                  description:
                    "澳門大三巴牌坊是這座城市的靈魂地標,更是聯合國世界文化遺產的核心區域。無論是初訪旅客還是重返探索者,澳門大三巴牌坊將在2025年以更好的設施和更豐富的體驗迎接訪客。",
                  image:
                    "/travel/【大三巴牌坊】2025澳門自由行必訪深度攻略：歷史、周邊景點與美食全解析-c.jpg",
                  link: "/Article/macao%20dasanbaa",
                  tags: [
                    "澳門大三巴",
                    "大三巴澳門龍匯",
                    "龍匯大三巴澳門",
                    "澳門龍匯天下大三巴",
                  ],
                  date: "2025/07/04",
                },
                {
                  id: 9,
                  title: "【澳門景點】自由行必收的12個玩樂秘笈！",
                  description:
                    "澳門融合了葡式風情與中華文化,更坐擁8項世界遺產與頂級度假村,是亞洲旅客短程出遊的熱門選擇。本文精選12個「連在地人都推薦」的必訪景點，從歷史古蹟到網美打卡點一次整理",
                  image: "/travel/【澳門景點】自由行必收的12個玩樂秘笈！-c.jpg",
                  link: "/Article/travel1",
                  tags: [
                    "澳門旅遊",
                    "澳門安全",
                    "澳門景點",
                    "澳門推薦",
                    "龍匯天下",
                  ],
                  date: "2025/05/17",
                },
              ]}
            />
          )}

          <Footer />
        </main>

        <GoToTop />
        <BottomNav />
      </div>
    </>
  );
}

export default function ArticlePage() {
  return (
    <Suspense fallback={<div className="text-white p-8">Loading...</div>}>
      <ArticleContent />
    </Suspense>
  );
}
