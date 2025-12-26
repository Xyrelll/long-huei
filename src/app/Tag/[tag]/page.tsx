'use client';

import { useEffect, useState, Suspense } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import GoToTop from '@/components/layout/GoToTop/GoToTop';
import BottomNav from '@/components/layout/BottomNav/BottomNav';
import BookingArticleList from '@/components/features/BookingArticleList/BookingArticleList';
import TagCategoryLayout from '@/components/layout/TagCategoryLayout/TagCategoryLayout';
import Link from 'next/link';
import { bookingArticles } from '@/data/articles/booking';
import { travelArticles } from '@/data/articles/travel';
import { rentCarArticles } from '@/data/articles/rentCar';
import { saunaArticles } from '@/data/articles/sauna';
import { entertainmentArticles } from '@/data/articles/entertainment';
import { questionArticles } from '@/data/articles/question';

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

function TagContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const tagName = params?.tag as string;
  const [allFilteredArticles, setAllFilteredArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Get selected category from URL params, or null if none selected
  // Decode the category to handle URL encoding properly and trim whitespace
  const categoryParam = searchParams.get('category');
  const selectedCategory = categoryParam ? decodeURIComponent(categoryParam).trim() : null;
  
  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerPage = 9;
  
  // Filter articles by selected category (if any)
  const filteredArticles = selectedCategory
    ? allFilteredArticles.filter((article) => article.category === selectedCategory)
    : allFilteredArticles;
  
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  
  // Get current page from URL, default to 1, and ensure it's within valid range
  const rawPage = parseInt(searchParams.get('PageNo') || '1', 10);
  const currentPage = Math.max(1, Math.min(rawPage, totalPages || 1));
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  useEffect(() => {
    // Combine all articles with category info
    const allArticles: Article[] = [
      ...(bookingArticles || []).map((a: Omit<Article, 'category'>) => ({ ...a, category: '訂房' })),
      ...(travelArticles || []).map((a: Omit<Article, 'category'>) => ({ ...a, category: '旅遊' })),
      ...(rentCarArticles || []).map((a: Omit<Article, 'category'>) => ({ ...a, category: '包車' })),
      ...(saunaArticles || []).map((a: Omit<Article, 'category'>) => ({ ...a, category: '桑拿' })),
      ...(entertainmentArticles || []).map((a: Omit<Article, 'category'>) => ({ ...a, category: '其他娛樂' })),
      ...(questionArticles || []).map((a: Omit<Article, 'category'>) => ({ ...a, category: '常見問答' })),
    ];

    // Decode the tag name from URL
    const decodedTag = decodeURIComponent(tagName);

    // Filter articles by tag
    const filtered = allArticles.filter((article) => {
      return article.tags && article.tags.some((tag) => tag === decodedTag);
    });

    setAllFilteredArticles(filtered);
    setLoading(false);
  }, [tagName]);

  // Metadata is now handled by server-side layout.tsx

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

  // Calculate category counts for ALL filtered articles (not just displayed ones)
  const categoryCounts = allFilteredArticles.reduce((acc, article) => {
    const cat = article.category || '其他';
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Create category filter buttons (only show categories that have articles)
  const categoryFilters = categories
    .filter(cat => categoryCounts[cat.name] > 0)
    .map(cat => ({
      name: cat.name,
      count: categoryCounts[cat.name] || 0,
      href: (selectedCategory !== null && selectedCategory.trim() === cat.name.trim())
        ? `/Tag/${encodeURIComponent(decodedTag)}` 
        : `/Tag/${encodeURIComponent(decodedTag)}?category=${encodeURIComponent(cat.name)}`,
    }));

  return (
    <>
      <Navbar />
      <div className="relative w-full min-h-screen bg-black flex flex-col">
        <main className="inner-page w-[90%] mx-auto">
         

          {/* Articles Section */}
          <section className="articles w-full bg-black py-8">
 {/* Breadcrumb */}
 <div className="w-full bg-black">
            <div className="container mx-auto">
              <nav className="nav-breadcrumb" aria-label="breadcrumb"
               style={{ 
                 display: 'flex', 
                 alignItems: 'center', 
                 paddingTop: isMobile ? '100px' : '140px',
                 paddingLeft: isMobile ? '0px' : '50px', 
                 paddingBottom: '16px' 
               }}>
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
                 className="text-white/70 text-[30px]">
                  (共有{filteredArticles.length}筆搜尋結果{selectedCategory ? ` - ${selectedCategory}` : ''})
                </p>
              </div>

              {/* Category Filter Buttons */}
              {categoryFilters.length > 0 && (
                <div
                 style={{
                  marginTop: '50px',
                 }}
                  className="flex flex-wrap gap-3 mb-8 w-full text-center justify-center items-center">
                  {categoryFilters.map((cat) => {
                    // Check if this category is currently selected (strict comparison with trimmed values)
                    const isSelected = selectedCategory !== null && selectedCategory.trim() === cat.name.trim();
                    
                    return (
                      <Link
                        key={cat.name}
                        href={cat.href}
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
                            backgroundColor: isSelected ? undefined : '#000000',
                            background: isSelected ? 'linear-gradient(to left, #CD861A 50%, #FFCD83 100%)' : 'black',
                            color: 'white',
                            transition: 'background 0.3s ease',
                            borderRight: isSelected ? 'none' : '1px solid #CD861A',
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
                            backgroundImage: isSelected ? 'linear-gradient(120deg, #ffcb7e 10%, #9c5f04 100%)' : 'none',
                            backgroundColor: isSelected ? 'transparent' : '#CD861A',
                            boxShadow: isSelected ? '0 0 10px 0 #ffaa2b' : 'none',
                            color: 'white',
                            transition: 'background 0.3s ease',
                            borderLeft: isSelected ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
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
                baseUrl={selectedCategory 
                  ? `/Tag/${tagName}?category=${encodeURIComponent(selectedCategory)}`
                  : `/Tag/${tagName}`
                }
                articles={filteredArticles}
                currentArticles={currentArticles}
                currentPage={currentPage}
                totalPages={totalPages}
                itemsPerPage={itemsPerPage}
                ArticleListComponent={BookingArticleList}
                width={isMobile ? "90%" : "60%"}
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

