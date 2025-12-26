'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface RecommendedArticle {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
  date?: string;
}

interface RecommendedArticlesProps {
  articles: RecommendedArticle[];
}

export default function RecommendedArticles({ articles }: RecommendedArticlesProps) {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const autoSlideIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isSliding, setIsSliding] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  // Create infinite loop: duplicate pages multiple times for seamless scrolling
  // Structure: [last] + [all pages] + [all pages] + [all pages] + [first]
  // This allows continuous sliding without visible jumps
  const duplicateCount = 3; // Number of times to duplicate all pages
  const extendedPages = totalPages > 1 
    ? 1 + (totalPages * duplicateCount) + 1  // last + (pages * 3) + first
    : totalPages;
  
  // Start in the middle of the duplicated pages for infinite scroll in both directions
  const startIndex = totalPages > 1 ? totalPages : 0;
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  // Create pages array with duplicates for seamless infinite scrolling
  const createPages = () => {
    const pages: RecommendedArticle[][] = [];
    
    if (totalPages > 1) {
      // Add last page at the beginning (for seamless backward scroll)
      const lastPageArticles = articles.slice(-itemsPerPage);
      pages.push(lastPageArticles);
      
      // Add all pages multiple times for seamless forward scroll
      for (let dup = 0; dup < duplicateCount; dup++) {
        for (let i = 0; i < totalPages; i++) {
          pages.push(articles.slice(i * itemsPerPage, (i + 1) * itemsPerPage));
        }
      }
      
      // Add first page at the end (for seamless forward scroll)
      const firstPageArticles = articles.slice(0, itemsPerPage);
      pages.push(firstPageArticles);
    } else {
      // Single page, no duplicates needed
      pages.push(articles.slice(0, itemsPerPage));
    }
    
    return pages;
  };

  const allPages = createPages();

  const goToPrevious = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      // If we're at the first duplicate (index 0), instantly jump to middle position
      if (newIndex === 0 && totalPages > 1) {
        setTimeout(() => {
          setIsTransitioning(false);
          // Jump to the last page of the middle duplicate set
          setCurrentIndex(totalPages * duplicateCount);
          setTimeout(() => setIsTransitioning(true), 10);
        }, 700);
        return newIndex;
      }
      return newIndex;
    });
    setTimeout(() => setIsSliding(false), 700);
  };

  const goToNext = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      const middleStart = totalPages;
      // If we're at the last duplicate (which is same as first page), jump to middle seamlessly
      if (newIndex === extendedPages - 1 && totalPages > 1) {
        // After animation completes, instantly jump to middle (same content, invisible to user)
        setTimeout(() => {
          setIsTransitioning(false);
          // Jump to first page of middle set (same as the duplicate we just saw)
          setCurrentIndex(middleStart);
          // Re-enable transition after a tiny delay
          setTimeout(() => {
            setIsTransitioning(true);
          }, 20);
        }, 700);
        return newIndex;
      }
      return newIndex;
    });
    setTimeout(() => setIsSliding(false), 700);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (totalPages > 1) {
      autoSlideIntervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const newIndex = prev + 1;
          const middleStart = totalPages;
          // If we're at the last duplicate, instantly jump to start of middle position
          if (newIndex === extendedPages - 1) {
            setTimeout(() => {
              setIsTransitioning(false);
              // Jump to the first page of the middle duplicate set (same content as first page)
              setCurrentIndex(middleStart);
              setTimeout(() => setIsTransitioning(true), 10);
            }, 700);
            return newIndex;
          }
          return newIndex;
        });
      }, 5000); // Auto-slide every 5 seconds

      return () => {
        if (autoSlideIntervalRef.current) {
          clearInterval(autoSlideIntervalRef.current);
        }
      };
    }
  }, [totalPages, extendedPages]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (totalPages > 1) {
      autoSlideIntervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const newIndex = prev + 1;
          const middleStart = totalPages;
          // If we're at the last duplicate, instantly jump to start of middle position
          if (newIndex === extendedPages - 1) {
            setTimeout(() => {
              setIsTransitioning(false);
              // Jump to the first page of the middle duplicate set (same content as first page)
              setCurrentIndex(middleStart);
              setTimeout(() => setIsTransitioning(true), 10);
            }, 700);
            return newIndex;
          }
          return newIndex;
        });
      }, 5000);
    }
  };

  // Calculate transform for smooth sliding
  const translateX = -currentIndex * 100;

  if (articles.length === 0) {
    return null;
  }

  return (
    <section 
      style={{
        marginTop: '50px',
        marginBottom: '20px',
        paddingTop: '40px',
        paddingBottom: '20px',
      }}
      className="recommended-articles relative w-full bg-black py-12 border-t border-white/20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left Arrow - Nested inside section */}
      {totalPages > 1 && (
        <button
          onClick={goToPrevious}
          className="absolute left-0  top-1/2 -translate-y-1/2 z-20 bg-transparent  p-3 md:p-4 rounded-full transition-all shadow-lg"
          type="button"
          aria-label="Previous"
        >
          <i className="bi bi-chevron-left text-white text-2xl md:text-3xl font-bold"></i>
        </button>
      )}

      {/* Right Arrow - Nested inside section */}
      {totalPages > 1 && (
        <button
          onClick={goToNext}
          className="absolute right-0 md:right-0 lg:right-0 top-1/2 -translate-y-1/2 z-20 bg-transparent  p-3 md:p-4 rounded-full transition-all  shadow-lg"
          type="button"
          aria-label="Next"
        >
          <i className="bi bi-chevron-right text-white text-2xl md:text-3xl font-bold"></i>
        </button>
      )}

      <div className="container mx-auto px-4  flex flex-col items-center justify-center   ">
        <h2 
          style={{
            marginTop: '20px',
            marginBottom: '20px',
          }}
          className="text-center text-white text-2xl md:text-3xl font-bold mb-8">
          推薦文章
        </h2>

        <div className="relative flex items-center  w-[90%] mx-auto">
          {/* Articles Grid with overflow hidden for smooth transitions */}
          <div className="w-full overflow-hidden px-8 md:px-12">
            <div 
              className="flex"
              style={{
                transform: `translateX(${translateX}%)`,
                transition: isTransitioning ? 'transform 700ms ease-in-out' : 'none',
              }}
            >
              {allPages.map((pageArticles, pageIndex) => {
                // Ensure we always show exactly 3 items per slide
                const displayArticles = pageArticles.length === itemsPerPage 
                  ? pageArticles 
                  : [...pageArticles, ...Array(itemsPerPage - pageArticles.length).fill(null)].slice(0, itemsPerPage);
                
                return (
                  <div
                    key={pageIndex}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-shrink-0 w-full px-2"
                  >
                    {displayArticles.map((article, idx) => {
                      if (!article) return <div key={`empty-${idx}`} className="hidden md:block" />;
                      return (
                        <Link
                          key={`${article.id}-${pageIndex}`}
                          href={article.link}
                          className="bg-[#2C261C] rounded-[50px] overflow-hidden relative"
                        >
                          {/* Article Image */}
                          <div className="relative w-full h-48">
                            <Image
                              src={article.image}
                              alt={article.title}
                              fill
                              className="object-cover"
                            />
                          </div>

                          {/* Article Content */}
                          <div
                          style={{
                            padding: '30px',
                            paddingBottom: '50px',
                          }}
                           className="p-4 space-y-3 ">
                            {/* Title */}
                            <h3
                             className="text-[#FFCD83] text-lg font-bold line-clamp-2">
                              {article.title}
                            </h3>

                            {/* Description */}
                            <p
                            style={{
                              marginTop: '10px',
                            }}
                             className="text-white text-sm line-clamp-3 leading-relaxed">
                              {article.description}
                            </p>

                            {/* Tags */}
                            {article.tags && article.tags.length > 0 && (
                              <div
                              style={{
                                marginTop: '20px',
                              }} 
                              className="flex flex-wrap gap-2">
                                {article.tags.slice(0, 4).map((tag: string, tagIdx: number) => (
                                  <span
                                    key={tagIdx}
                                    style={{
                                      padding: '6px',
                                    }}
                                    className="px-3 py-1 bg-[#CD861A] hover:bg-white hover:text-[#CD861A] transition-colors text-white text-xs font-medium rounded-full"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Date - Fixed on bottom right */}
                      
                            <p 
                              className="absolute bottom-6 right-4 text-white/70 text-xs"
                            >
                              { article.date||'2025-12-26'}
                            </p>
                         
                        </Link>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

