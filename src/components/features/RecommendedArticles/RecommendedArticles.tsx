"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

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

export default function RecommendedArticles({
  articles,
}: RecommendedArticlesProps) {
  const itemsPerPage = 3;

  // Helper function to fill articles to always have 3 items per page
  const fillArticlesToPage = (
    pageArticles: RecommendedArticle[]
  ): RecommendedArticle[] => {
    if (pageArticles.length >= itemsPerPage) {
      return pageArticles.slice(0, itemsPerPage);
    }

    // If we have less than 3 items, cycle through all available articles to fill
    const filled: RecommendedArticle[] = [...pageArticles];
    let sourceIndex = 0;

    while (filled.length < itemsPerPage && articles.length > 0) {
      // Cycle through all articles to fill the remaining slots
      const articleToAdd = articles[sourceIndex % articles.length];
      // Avoid duplicates in the same page
      if (!filled.some((a) => a.id === articleToAdd.id)) {
        filled.push(articleToAdd);
      }
      sourceIndex++;
      // Safety check to prevent infinite loop
      if (sourceIndex > articles.length * 2) break;
    }

    return filled.slice(0, itemsPerPage);
  };

  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const autoSlideIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isSliding, setIsSliding] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Create infinite loop: duplicate pages multiple times for seamless scrolling
  // Structure: [last] + [all pages] + [all pages] + [all pages] + [first]
  // This allows continuous sliding without visible jumps
  const duplicateCount = 3; // Number of times to duplicate all pages
  const extendedPages =
    totalPages > 1
      ? 1 + totalPages * duplicateCount + 1 // last + (pages * 3) + first
      : totalPages;

  // Start in the middle of the duplicated pages for infinite scroll in both directions
  // Middle set starts at index 1 (first page of first duplicate set)
  const startIndex = totalPages > 1 ? 1 : 0;
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  // Create pages array with duplicates for seamless infinite scrolling
  const createPages = () => {
    const pages: RecommendedArticle[][] = [];

    if (totalPages > 1) {
      // Add last page at the beginning (for seamless backward scroll)
      const lastPageArticles = articles.slice(-itemsPerPage);
      pages.push(fillArticlesToPage(lastPageArticles));

      // Add all pages multiple times for seamless forward scroll
      for (let dup = 0; dup < duplicateCount; dup++) {
        for (let i = 0; i < totalPages; i++) {
          const pageArticles = articles.slice(
            i * itemsPerPage,
            (i + 1) * itemsPerPage
          );
          pages.push(fillArticlesToPage(pageArticles));
        }
      }

      // Add first page at the end (for seamless forward scroll)
      const firstPageArticles = articles.slice(0, itemsPerPage);
      pages.push(fillArticlesToPage(firstPageArticles));
    } else {
      // Single page, ensure it has 3 items
      const singlePageArticles = articles.slice(0, itemsPerPage);
      pages.push(fillArticlesToPage(singlePageArticles));
    }

    return pages;
  };

  const allPages = createPages();

  const goToPrevious = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      const middleStart = 1; // First page of first duplicate set
      const middleEnd = totalPages * duplicateCount; // Last page of third duplicate set
      
      // If we're going below the middle set (index < 1), jump to end of middle set
      if (newIndex < middleStart && totalPages > 1) {
        // Disable transition, jump instantly, then re-enable
        setIsTransitioning(false);
        setTimeout(() => {
          setCurrentIndex(middleEnd);
          setTimeout(() => {
            setIsTransitioning(true);
            setIsSliding(false);
          }, 50);
        }, 50);
        return middleEnd;
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
      const middleStart = 1; // First page of first duplicate set
      const middleEnd = totalPages * duplicateCount; // Last page of third duplicate set
      
      // If we're going beyond the middle set, jump to start of middle set instantly
      if (newIndex > middleEnd && totalPages > 1) {
        // Disable transition, jump instantly, then re-enable
        setIsTransitioning(false);
        setTimeout(() => {
          setCurrentIndex(middleStart);
          setTimeout(() => {
            setIsTransitioning(true);
            setIsSliding(false);
          }, 50);
        }, 50);
        return middleStart;
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
          const middleStart = 1; // First page of first duplicate set
          const middleEnd = totalPages * duplicateCount; // Last page of third duplicate set
          
          // If we're at the end of middle set, jump to start of middle set instantly
          if (newIndex > middleEnd) {
            setIsTransitioning(false);
            setTimeout(() => {
              setCurrentIndex(middleStart);
              setTimeout(() => {
                setIsTransitioning(true);
              }, 50);
            }, 50);
            return middleStart;
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
  }, [totalPages, duplicateCount]);

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
          const middleStart = 1; // First page of first duplicate set
          const middleEnd = totalPages * duplicateCount; // Last page of third duplicate set
          
          // If we're at the end of middle set, jump to start of middle set instantly
          if (newIndex > middleEnd) {
            setIsTransitioning(false);
            setTimeout(() => {
              setCurrentIndex(middleStart);
              setTimeout(() => {
                setIsTransitioning(true);
              }, 50);
            }, 50);
            return middleStart;
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
    <div
      className="w-screen relative"
      style={{
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
      }}
    >
      <section
        style={{
          marginTop: "50px",
          marginBottom: "20px",
          paddingTop: "40px",
          paddingBottom: "20px",
        }}
        className="recommended-articles relative w-full bg-black py-12 border-t border-white/20 flex justify-center items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full md:w-3/4 h-full mx-auto relative ">
          <div className="container mx-auto px-4  flex flex-col items-center justify-center   ">
            <h2
              style={{
                marginTop: "20px",
                marginBottom: "20px",
              }}
              className="text-center text-white text-2xl md:text-3xl font-bold mb-8"
            >
              推薦文章
            </h2>

            <div className="relative flex items-center  w-[85%] max-w-5xl mx-auto">
              {/* Left Arrow - Positioned next to slide content */}
              {totalPages > 1 && (
                <button
                  onClick={goToPrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-transparent p-3 md:p-4 rounded-full transition-all shadow-lg"
                  type="button"
                  aria-label="Previous"
                  style={{ transform: "translate(calc(-100% - 16px), -50%)" }}
                >
                  <i className="bi bi-chevron-left text-white text-2xl md:text-3xl font-bold"></i>
                </button>
              )}

              {/* Right Arrow - Positioned next to slide content */}
              {totalPages > 1 && (
                <button
                  onClick={goToNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-transparent p-3 md:p-4 rounded-full transition-all shadow-lg"
                  type="button"
                  aria-label="Next"
                  style={{ transform: "translate(calc(100% + 16px), -50%)" }}
                >
                  <i className="bi bi-chevron-right text-white text-2xl md:text-3xl font-bold"></i>
                </button>
              )}
              {/* Articles Grid with overflow hidden for smooth transitions */}
              <div className="w-full overflow-hidden px-8 md:px-12">
                <div
                  className="flex"
                  style={{
                    transform: `translateX(${translateX}%)`,
                    transition: isTransitioning
                      ? "transform 700ms ease-in-out"
                      : "none",
                  }}
                >
                  {allPages.map((pageArticles, pageIndex) => {
                    // Ensure we always show exactly 3 items per slide (already filled in createPages, but double-check)
                    const displayArticles = fillArticlesToPage(pageArticles);

                    return (
                      <div
                        key={pageIndex}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 shrink-0 w-full px-2"
                      >
                        {displayArticles.map((article, idx) => {
                          if (!article)
                            return (
                              <div
                                key={`empty-${idx}`}
                                className="hidden md:block"
                              />
                            );
                          return (
                            <Link
                              key={`${article.id}-${pageIndex}`}
                              href={article.link}
                              className="bg-[#2C261C] rounded-[50px] overflow-hidden relative max-w-[365px] max-h-[580px] mx-auto w-full"
                            >
                              {/* Article Image */}
                              <div className="relative w-full h-48">
                                <Image
                                  src={article.image}
                                  alt={article.title}
                                  fill
                                  className="object-contain"
                                  style={{ width: "100%", height: "100%" ,marginTop: "-5px"}}
                                />
                              </div>

                              {/* Article Content */}
                              <div
                                style={{
                                  paddingTop: "20px",
                                  paddingLeft: "20px",
                                  paddingRight: "20px",
                                  paddingBottom: "60px",
                                }}
                                className="p-4 space-y-3 "
                              >
                                {/* Title */}
                                <h3 className="text-[#FFCD83] text-lg font-bold line-clamp-2">
                                  {article.title}
                                </h3>

                                {/* Description */}
                                <p
                                  style={{
                                    marginTop: "10px",
                                  }}
                                  className="text-white text-sm line-clamp-3 leading-relaxed"
                                >
                                  {article.description}
                                </p>

                                {/* Tags */}
                                {article.tags && article.tags.length > 0 && (
                                  <div
                                    style={{
                                      marginTop: "20px",
                                    }}
                                    className="flex flex-wrap gap-2"
                                  >
                                    {article.tags
                                      .slice(0, 4)
                                      .map((tag: string, tagIdx: number) => (
                                        <span
                                          key={tagIdx}
                                          style={{
                                            padding: "6px",
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
                                style={{
                                  fontSize: "11px",
                                }}
                                className="absolute bottom-6 right-10 text-white/70"
                              >
                                {article.date || "2025/12/26"}
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
        </div>
      </section>
    </div>
  );
}
