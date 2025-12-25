'use client';

import { useEffect, useState, Suspense } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { generateBreadcrumbSchema } from '@/config/seo';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import GoToTop from '@/components/layout/GoToTop/GoToTop';
import BottomNav from '@/components/layout/BottomNav/BottomNav';
import BookingArticleList from '@/components/features/BookingArticleList/BookingArticleList';
import TagCategoryLayout from '@/components/layout/TagCategoryLayout/TagCategoryLayout';
import Link from 'next/link';

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
  { name: '澳門旅遊找龍匯', href: '/Tag/澳門旅遊找龍匯' },
  { name: '澳門通龍匯天下', href: '/Tag/澳門通龍匯天下' },
];

function TagContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const tagName = params?.tag as string;
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  useEffect(() => {
    async function fetchArticles() {
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

        // Combine all articles with category info
        const allArticles: Article[] = [
          ...(bookingArticles || []).map((a: any) => ({ ...a, category: '訂房' })),
          ...(travelArticles || []).map((a: any) => ({ ...a, category: '旅遊' })),
          ...(rentCarArticles || []).map((a: any) => ({ ...a, category: '包車' })),
          ...(saunaArticles || []).map((a: any) => ({ ...a, category: '桑拿' })),
          ...(entertainmentArticles || []).map((a: any) => ({ ...a, category: '其他娛樂' })),
          ...(questionArticles || []).map((a: any) => ({ ...a, category: '常見問答' })),
        ];

        // Decode the tag name from URL
        const decodedTag = decodeURIComponent(tagName);

        // Filter articles by tag
        const filtered = allArticles.filter((article) => {
          return article.tags && article.tags.some((tag) => tag === decodedTag);
        });

        setFilteredArticles(filtered);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    }

    if (tagName) {
      fetchArticles();
    }
  }, [tagName]);

  useEffect(() => {
    if (tagName) {
      const decodedTag = decodeURIComponent(tagName);
      document.title = `${decodedTag} - 龍匯天下`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `查看所有標籤為「${decodedTag}」的文章`);
      }
    }
  }, [tagName]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <p>載入中...</p>
        </div>
        <Footer />
        <GoToTop />
        <BottomNav />
      </>
    );
  }

  const decodedTag = decodeURIComponent(tagName);

  // Calculate category counts for filtered articles
  const categoryCounts = filteredArticles.reduce((acc, article) => {
    const cat = article.category || '其他';
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Create category filter buttons (only show categories that have articles)
  // Link to tag pages instead of category pages
  const categoryFilters = categories
    .filter(cat => categoryCounts[cat.name] > 0)
    .map(cat => ({
      name: cat.name,
      count: categoryCounts[cat.name] || 0,
      href: `/Tag/${encodeURIComponent(decodedTag)}?category=${encodeURIComponent(cat.name)}`,
      tagHref: `/Tag/${encodeURIComponent(cat.name)}`,
    }));

  return (
    <>
      <Navbar />
      <div className="relative w-full min-h-screen bg-black flex justify-center items-center">
        <main className="inner-page w-[90%] mx-auto">
          <div className="w-full "></div>

          {/* Articles Section */}
          <section className="articles w-full bg-black py-8">
            <div className="container mx-auto h-15 ">
              <nav className="nav-breadcrumb py-4" aria-label="breadcrumb">
                <ol className="breadcrumb flex items-center gap-2 text-white text-sm">
                  <li className="breadcrumb-item">
                    <Link href="/" className="flex items-center gap-1 hover:text-[#FFCD83]">
                      <i className="bi bi-house-door-fill"></i>
                      首頁
                    </Link>
                  </li>
                  <li className="breadcrumb-separator text-white/70">&gt;</li>
                  <li className="breadcrumb-item">
                    <span className="text-white/70">標籤</span>
                  </li>
                  <li className="breadcrumb-separator text-white/70">&gt;</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <span className="text-white/70">{decodedTag}</span>
                  </li>
                </ol>
              </nav>
            </div>

            <div className="container mx-auto px-4  flex flex-col items-center justify-center ">
              {/* Page Title with Search Result Count */}
              <div 
                style={ 
                   {
                    paddingTop: '60px',
                    fontSize: '45px',
                   }               
                }
              className="mb-6 flex flex-col items-center justify-center ">
                <h1 className="text-white text-[45px] font-medium ">{decodedTag}</h1>
                <p
                style={ {fontSize: '20px', }     }
                 className="text-white/70 text-[30px]">(共有{filteredArticles.length}筆搜尋結果)</p>
              </div>

              {/* Category Filter Buttons */}
              {categoryFilters.length > 0 && (
                <div
                 style={{
                  marginTop: '50px',
                 }}
                  className="flex flex-wrap gap-3 mb-8">
                  {categoryFilters.map((cat) => {
                    // Check if this category tag is currently selected (same as current tag)
                    const isSelected = cat.name === decodedTag;
                    
                    return (
                      <Link
                        key={cat.name}
                        href={cat.tagHref}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          borderRadius: '50px',
                          border: isSelected ? '1px solid #FFA500' : '1px solid #CD861A',
                          overflow: 'hidden',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          boxShadow: isSelected ? '0 0 15px rgba(205, 134, 26, 0.8)' : 'none',
                          background: isSelected ? 'linear-gradient(to right, #8B4513, #CD861A, #FF8C00)' : 'transparent',
                        }}
                        className="group"
                        onMouseEnter={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.borderColor = '#FFA500';
                            e.currentTarget.style.boxShadow = '0 0 15px rgba(205, 134, 26, 0.8)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.borderColor = '#CD861A';
                            e.currentTarget.style.boxShadow = 'none';
                          }
                        }}
                      >
                        {/* Left section - Category name */}
                        <span
                          style={{
                            paddingLeft: '15px',
                            paddingRight: '15px',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            backgroundColor: isSelected ? 'transparent' : '#000000',
                            color: 'white',
                            transition: 'background 0.3s ease',
                            borderRight: '1px solid #CD861A',
                          }}
                          className="text-white"
                          onMouseEnter={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.background = 'linear-gradient(to left, #8B4513, #CD861A)';
                              e.currentTarget.style.borderRightColor = '#FFA500';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.background = '#000000';
                              e.currentTarget.style.borderRightColor = '#CD861A';
                            }
                          }}
                        >
                          {cat.name}
                        </span>
                        {/* Right section - Count */}
                        <span
                          style={{
                            paddingLeft: '15px',
                            paddingRight: '15px',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            backgroundColor: isSelected ? 'transparent' : '#CD861A',
                            color: 'white',
                            transition: 'background 0.3s ease',
                          }}
                          className="text-white"
                          onMouseEnter={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.background = 'linear-gradient(to right, #CD861A, #FF8C00)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.background = '#CD861A';
                            }
                          }}
                        >
                          {cat.count}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Use TagCategoryLayout for article list (without sidebar) */}
            <div
             style={{
              marginTop: '50px',
             }}
             className="container flex flex-col items-center justify-center mx-auto px-4
            ">
              <TagCategoryLayout
                pageTitle=""
                breadcrumbName={decodedTag}
                baseUrl={`/Tag/${tagName}`}
                articles={filteredArticles}
                currentArticles={currentArticles}
                currentPage={currentPage}
                totalPages={totalPages}
                itemsPerPage={itemsPerPage}
                ArticleListComponent={BookingArticleList}
              />
            </div>
          </section>

          <Footer />
        </main>

        <GoToTop />
        <BottomNav />
      </div>
    </>
  );
}

export default function TagPage() {
  return (
    <Suspense fallback={
      <>
        <Navbar />
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <p>載入中...</p>
        </div>
        <Footer />
        <GoToTop />
        <BottomNav />
      </>
    }>
      <TagContent />
    </Suspense>
  );
}

