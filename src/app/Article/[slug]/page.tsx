'use client';

import { useEffect, Suspense, useState } from 'react';
import { useParams } from 'next/navigation';
import { generateBreadcrumbSchema } from '@/config/seo';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import GoToTop from '@/components/layout/GoToTop/GoToTop';
import BottomNav from '@/components/layout/BottomNav/BottomNav';
import Link from 'next/link';
import Image from 'next/image';

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
}

const categories = [
  { name: '旅遊', href: '/ArticleCategory/Travel', count: 11 },
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

function ArticleContent() {
  const params = useParams();
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
          import('@/app/ArticleCategory/Booking/page'),
          import('@/app/ArticleCategory/Travel/page'),
          import('@/app/ArticleCategory/RentCar/page'),
          import('@/app/ArticleCategory/Sauna/page'),
          import('@/app/ArticleCategory/Entertainment/page'),
          import('@/app/ArticleCategory/Question/page'),
        ]);

        // Combine all articles
        const allArticles: Article[] = [
          ...(bookingArticles || []).map((a: any) => ({ ...a, category: '訂房' })),
          ...(travelArticles || []).map((a: any) => ({ ...a, category: '旅遊' })),
          ...(rentCarArticles || []).map((a: any) => ({ ...a, category: '包車' })),
          ...(saunaArticles || []).map((a: any) => ({ ...a, category: '桑拿' })),
          ...(entertainmentArticles || []).map((a: any) => ({ ...a, category: '其他娛樂' })),
          ...(questionArticles || []).map((a: any) => ({ ...a, category: '常見問答' })),
        ];

        // Find article by slug (handle URL encoding and different formats)
        const decodedSlug = decodeURIComponent(slug);
        const foundArticle = allArticles.find(
          a => {
            const articleLink = a.link.replace('/Article/', '');
            return articleLink === slug || 
                   articleLink === decodedSlug ||
                   articleLink.includes(slug) ||
                   articleLink.includes(decodedSlug) ||
                   a.link === `/Article/${slug}` ||
                   a.link === `/Article/${decodedSlug}`;
          }
        );

        setArticle(foundArticle || null);
      } catch (error) {
        console.error('Error fetching article:', error);
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
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', article.description);
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
          <div className="w-full h-18 md:h-30"></div>
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
    { name: '首頁', url: 'https://www.long-huei.com' },
    { name: article.category || '文章', url: `https://www.long-huei.com/ArticleCategory/${article.category === '訂房' ? 'Booking' : article.category === '旅遊' ? 'Travel' : article.category === '包車' ? 'RentCar' : article.category === '桑拿' ? 'Sauna' : article.category === '其他娛樂' ? 'Entertainment' : 'Question'}` },
    { name: article.title, url: `https://www.long-huei.com${article.link}` },
  ]);

  const getCategoryUrl = (category: string) => {
    const map: Record<string, string> = {
      '訂房': 'Booking',
      '旅遊': 'Travel',
      '包車': 'RentCar',
      '桑拿': 'Sauna',
      '其他娛樂': 'Entertainment',
      '常見問答': 'Question',
    };
    return `/ArticleCategory/${map[category] || 'Travel'}`;
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
          <div className="w-full h-18 md:h-30"></div>

          {/* Breadcrumb */}
          <nav className="nav-breadcrumb py-4" aria-label="breadcrumb">
            <ol className="breadcrumb flex items-center gap-2 text-white text-sm">
              <li className="breadcrumb-item">
                <Link href="/" className="flex items-center gap-1 hover:text-[#FFCD83]">
                  <i className="bi bi-house-door-fill"></i>
                  首頁
                </Link>
              </li>
              <li className="breadcrumb-separator text-white/70">&gt;</li>
              {article.category && (
                <>
                  <li className="breadcrumb-item">
                    <Link href={getCategoryUrl(article.category)} className="hover:text-[#FFCD83]">
                      {article.category}
                    </Link>
                  </li>
                  <li className="breadcrumb-separator text-white/70">&gt;</li>
                </>
              )}
              <li className="breadcrumb-item active" aria-current="page">
                <span className="text-white/70">{article.title}</span>
              </li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row gap-6 py-8">
            {/* Left Sidebar - Social Media */}
            <div className="hidden lg:block lg:w-20 flex-shrink-0">
              <div className="sticky top-24">
                <div className="text-white mb-4 text-sm">加入好友</div>
                <div className="flex flex-col gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center hover:opacity-80 transition-opacity">
                    <i className="bi bi-line text-white text-xl"></i>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity">
                    <i className="bi bi-telephone text-black text-xl"></i>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center hover:opacity-80 transition-opacity">
                    <i className="bi bi-instagram text-white text-xl"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 lg:max-w-3xl">
              {/* Article Title */}
              <h1 className="text-white text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>

              {/* Interactive Buttons (Tags) */}
              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-8">
                  {article.tags.map((tag, idx) => (
                    <Link
                      key={idx}
                      href={`/Tag/${tag}`}
                      className="px-4 py-2 bg-[#2C261C] text-white rounded-lg hover:bg-[#CD861A] transition-colors text-sm"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}

              {/* Featured Image */}
              <div className="mb-8">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-invert max-w-none">
                <div className="text-white text-lg leading-relaxed whitespace-pre-line">
                  {article.content || article.description}
                </div>
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

            {/* Right Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="sticky top-24">
                {/* Categories Box */}
                <div
                  className="cate-box rounded-[40px] mb-[30px]"
                  style={{
                    backgroundImage: 'linear-gradient(180deg, #151515 0%, #2d2d2d 100%)',
                    padding: '20px 0 10px',
                    paddingLeft: '0px',
                    height: 'auto',
                    width: '100%',
                  }}
                >
                  <h4
                    style={{
                      paddingLeft: '20px',
                      paddingTop: '10px',
                      paddingBottom: '10px',
                    }}
                    className="text-white text-lg mb-4 flex items-center gap-2 border-b border-white/"
                  >
                    <i className="bi bi-bookmarks-fill text-white"></i>
                    所有文章分類
                  </h4>
                  <ul
                    className="list-none p-0 m-0"
                    style={{
                      paddingTop: '10px',
                      paddingBottom: '10px',
                    }}
                  >
                    {categories.map((category) => (
                      <li
                        key={category.name}
                        style={{
                          paddingLeft: '20px',
                          paddingTop: '5px',
                          paddingBottom: '5px',
                        }}
                        className="flex items-center gap-2"
                      >
                        <span className="w-2 h-2 bg-white rounded-sm flex-shrink-0"></span>
                        <Link
                          href={category.href}
                          className={`block py-2 transition-colors ${
                            category.name === article.category
                              ? 'text-[#FFCD83] font-bold'
                              : 'text-white hover:text-[#FFCD83]'
                          }`}
                        >
                          {category.name} ({category.count})
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Popular Tags Box */}
                <div
                  className="hot-tags-box rounded-[40px]"
                  style={{
                    marginTop: '15px',
                    backgroundImage: 'linear-gradient(180deg, #301e03 0%, #a76909 100%)',
                    paddingRight: '0px',
                    paddingBottom: '10px',
                    paddingTop: '10px',
                    paddingLeft: '0px',
                    height: 'auto',
                    width: '100%',
                  }}
                >
                  <h4
                    style={{
                      paddingLeft: '20px',
                      paddingTop: '10px',
                      paddingBottom: '10px',
                    }}
                    className="text-white text-lg mb-4 flex items-center gap-2 border-b border-white/70"
                  >
                    <i className="bi bi-tags-fill text-white"></i>
                    熱門 TAGs
                  </h4>
                  <div className="w-full h-3" />
                  <ul
                    className="list-none p-0 m-0 flex flex-wrap gap-2"
                    style={{
                      paddingLeft: '20px',
                      paddingTop: '10px',
                      paddingBottom: '20px',
                      paddingRight: '20px',
                    }}
                  >
                    {popularTags.map((tag) => (
                      <li
                        key={tag.name}
                        style={{
                          paddingLeft: '0px',
                          paddingRight: '1px',
                        }}
                      >
                        <Link
                          href={tag.href}
                          style={{
                            paddingLeft: '0px',
                            paddingRight: '1px',
                          }}
                          className="h-7 rounded-full bg-black/50 text-[#CD861A] bg-white text-sm flex justify-center items-center hover:bg-[#CD861A] hover:text-white transition-colors"
                        >
                          &nbsp;&nbsp; {tag.name}&nbsp;&nbsp;
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

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
