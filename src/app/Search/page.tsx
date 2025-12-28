"use client";

import { useEffect, useState, Suspense, useCallback, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { generateBreadcrumbSchema } from "@/config/seo";
import PageLayout from "@/components/layout/PageLayout/PageLayout";
import PageMetadata from "@/components/SEO/PageMetadata";
import Link from "next/link";
import BookingArticleList from "@/components/features/BookingArticleList/BookingArticleList";
import TagCategoryLayout from "@/components/layout/TagCategoryLayout/TagCategoryLayout";
import { bookingArticles } from "@/data/articles/booking";
import { travelArticles } from "@/data/articles/travel";
import { rentCarArticles } from "@/data/articles/rentCar";
import { saunaArticles } from "@/data/articles/sauna";
import { entertainmentArticles } from "@/data/articles/entertainment";
import { questionArticles } from "@/data/articles/question";

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

const hotKeywords = ["桑拿", "訂房", "優惠", "包車", "澳門", "澳門旅遊"];

const hotTags = [
  { name: "澳門包車", href: "/Tag/澳門包車" },
  { name: "澳門旅遊", href: "/Tag/澳門旅遊" },
  { name: "澳門桑拿", href: "/Tag/澳門桑拿" },
  { name: "澳門找龍匯包車", href: "/Tag/澳門找龍匯包車" },
  { name: "澳門訂房", href: "/Tag/澳門訂房" },
  { name: "龍匯包車", href: "/Tag/龍匯包車" },
  { name: "澳門", href: "/Tag/澳門" },
  { name: "澳門劇本殺", href: "/Tag/澳門劇本殺" },
  { name: "龍匯天下", href: "/Tag/龍匯天下" },
  { name: "澳門包車景點", href: "/Tag/澳門包車景點" },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showError, setShowError] = useState(false);

  // Initialize articles with lazy initialization to avoid setState in effect
  const [allArticles, setAllArticles] = useState<Article[]>(() => {
    // Combine all articles with category info
    return [
      ...(bookingArticles || []).map((a: Omit<Article, "category">) => ({
        ...a,
        category: "訂房",
      })),
      ...(travelArticles || []).map((a: Omit<Article, "category">) => ({
        ...a,
        category: "旅遊",
      })),
      ...(rentCarArticles || []).map((a: Omit<Article, "category">) => ({
        ...a,
        category: "包車",
      })),
      ...(saunaArticles || []).map((a: Omit<Article, "category">) => ({
        ...a,
        category: "桑拿",
      })),
      ...(entertainmentArticles || []).map((a: Omit<Article, "category">) => ({
        ...a,
        category: "其他娛樂",
      })),
      ...(questionArticles || []).map((a: Omit<Article, "category">) => ({
        ...a,
        category: "常見問答",
      })),
    ];
  });

  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Initialize window width safely
  const [windowWidth, setWindowWidth] = useState<number>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 1024;
  });

  // Perform search function
  const performSearch = useCallback(
    (keyword: string) => {
      if (!keyword.trim() || allArticles.length === 0) {
        setSearchResults([]);
        setHasSearched(false);
        return;
      }

      const lowerKeyword = keyword.toLowerCase().trim();
      const results = allArticles.filter((article) => {
        // Search in title
        const titleMatch = article.title.toLowerCase().includes(lowerKeyword);

        // Search in description
        const descMatch = article.description
          .toLowerCase()
          .includes(lowerKeyword);

        // Search in tags
        const tagMatch =
          article.tags?.some((tag) =>
            tag.toLowerCase().includes(lowerKeyword)
          ) || false;

        return titleMatch || descMatch || tagMatch;
      });

      setSearchResults(results);
      setHasSearched(true);
    },
    [allArticles]
  );

  // Reset function to clear all search state
  const resetSearch = useCallback(() => {
    setSearchKeyword("");
    setSearchResults([]);
    setHasSearched(false);
    setShowError(false);
  }, []);

  // Track previous URL keyword to detect actual changes
  const previousKeywordRef = useRef<string>("");
  const isInitialMountRef = useRef<boolean>(true);

  // Initialize from URL on mount and when URL Keyword param changes (not when user types)
  useEffect(() => {
    const keyword = searchParams.get("Keyword") || "";

    // Only update from URL if:
    // 1. It's the initial mount, OR
    // 2. The URL keyword actually changed (not just other params or re-renders)
    const urlKeywordChanged = previousKeywordRef.current !== keyword;

    if (isInitialMountRef.current || urlKeywordChanged) {
      previousKeywordRef.current = keyword;

      // If no keyword in URL, reset to initial state
      if (!keyword) {
        resetSearch();
        isInitialMountRef.current = false;
        return;
      }

      if (keyword && allArticles.length > 0) {
        // Use requestAnimationFrame to defer state update
        requestAnimationFrame(() => {
          setSearchKeyword(keyword);
          performSearch(keyword);
        });
      } else if (keyword) {
        // Use requestAnimationFrame to defer state update
        requestAnimationFrame(() => {
          setSearchKeyword(keyword);
        });
      }

      isInitialMountRef.current = false;
    }
  }, [searchParams, allArticles, performSearch, resetSearch]);

  // Handle window width for responsive design
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Only add event listener, initial width is set via state initialization
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchKeyword.trim()) {
      setShowError(true);
      return;
    }
    setShowError(false);
    // Navigate to search results with keyword and reload page
    const searchUrl = `/Search?Keyword=${encodeURIComponent(
      searchKeyword.trim()
    )}`;
    window.location.href = searchUrl;
  };

  const handleKeywordClick = (keyword: string) => {
    // Navigate and reload page
    const searchUrl = `/Search?Keyword=${encodeURIComponent(keyword)}`;
    window.location.href = searchUrl;
  };

  // Category filter
  const selectedCategory = searchParams.get("category");
  const filteredResults = selectedCategory
    ? searchResults.filter((article) => article.category === selectedCategory)
    : searchResults;

  // Calculate category counts from search results
  const categoryCounts = searchResults.reduce((acc, article) => {
    if (article.category) {
      acc[article.category] = (acc[article.category] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const categories = [
    { name: "訂房", value: "訂房" },
    { name: "旅遊", value: "旅遊" },
    { name: "包車", value: "包車" },
    { name: "桑拿", value: "桑拿" },
    { name: "其他娛樂", value: "其他娛樂" },
    { name: "常見問答", value: "常見問答" },
  ].filter((cat) => categoryCounts[cat.value] > 0);

  // Pagination for search results
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);
  const rawPage = parseInt(searchParams.get("PageNo") || "1", 10);
  const validPage = Math.max(1, Math.min(rawPage, totalPages || 1));
  const startIndex = (validPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = filteredResults.slice(startIndex, endIndex);

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedCategory === category) {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    params.set("PageNo", "1");
    router.push(`/Search?${params.toString()}`);
  };

  return (
    <>
      {/* Breadcrumb */}
      <nav className="nav-breadcrumb py-4" aria-label="breadcrumb">
        <ol className="breadcrumb flex items-center justify-left gap-2 text-white text-sm">
          <li className="breadcrumb-item">
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-[#FFCD83]"
            >
              <i className="bi bi-house-door-fill"></i>
              首頁
            </Link>
          </li>
          <li className="breadcrumb-separator text-white/70">&gt;</li>
          <li className="breadcrumb-item">
            <Link href="/Search" className="hover:text-[#FFCD83]">
              搜尋
            </Link>
          </li>
          {(() => {
            const urlKeyword = searchParams.get("Keyword") || "";
            return urlKeyword && urlKeyword.trim() ? (
              <>
                <li className="breadcrumb-separator text-white/70">&gt;</li>
                <li className="breadcrumb-item active" aria-current="page">
                  <span className="text-white/70">{urlKeyword.trim()}</span>
                </li>
              </>
            ) : null;
          })()}
        </ol>
      </nav>

      {/* Search Section */}
      <div
        className="flex flex-col items-center justify-center py-12 w-full"
        style={{
          paddingTop: "30px",
        }}
      >
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="w-[85%] mx-auto max-w-2xl">
          <div className="relative">
            <div className="absolute inset-y-0 left-6 flex items-center pl-4 pointer-events-none">
              <i className="bi bi-search text-gray-400 text-xl"></i>
            </div>
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => {
                setSearchKeyword(e.target.value);
                setShowError(false);
              }}
              placeholder="搜尋關鍵字"
              className="w-full pl-12 pr-4 py-4 text-black bg-white rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#FFCD83] placeholder-gray-400"
              style={{
                paddingLeft: "60px",
                paddingRight: "60px",
                paddingTop: "20px",
                paddingBottom: "20px",
                borderRadius: "50px",
                color: "#000000",
              }}
            />
          </div>
          {!searchKeyword.trim() && (
            <p
              style={{
                marginLeft: "50px",
                paddingTop: "1px",
                paddingBottom: "40px",
                color: "red",
              }}
              className="text-red-500 mt-2 text-left search-error-message"
            >
              請輸入關鍵字
            </p>
          )}
        </form>

        {/* No Results Message */}
        {hasSearched &&
          !loading &&
          searchResults.length === 0 &&
          searchKeyword.trim() && (
            <div
              className="w-full mt-12 flex flex-col items-center justify-center"
              style={{ paddingTop: "40px" }}
            >
              <div className="text-center mb-8">
                <p
                  className="text-red-700 text-xl font-bold mb-4"
                  style={{ fontSize: "20px" }}
                >
                  搜尋無結果
                </p>
              </div>
            </div>
          )}

        {/* Hot Keywords */}
        <div className="mt-12 text-center w-full flex flex-col items-center justify-center ">
          {!(hasSearched && !loading && searchResults.length > 0) && (
            <h2
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="text-white text-xl w-full text-center font-bold  "
            >
              熱門關鍵字
            </h2>
          )}

          <div
            style={{ width: "100%", paddingTop: "20px" }}
            className="flex flex-wrap justify-center items-center gap-2 text-gray-300"
          >
            {hotKeywords.map((keyword, index) => (
              <span key={keyword}>
                <button
                  onClick={() => handleKeywordClick(keyword)}
                  className="hover:text-[#FFCD83] text-[#CD861A] transition-colors underline"
                  style={{ fontWeight: 900 }}
                >
                  {keyword}
                </button>
                {index < hotKeywords.length - 1 && (
                  <span className="mx-2 text-gray-500">・</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Hot Tags - Hide when search results are found */}
        {!(hasSearched && !loading && searchResults.length > 0) && (
          <div className="mt-12 text-center w-full flex flex-col items-center justify-center">
            <h2
              style={{
                paddingLeft: "60px",
                paddingRight: "60px",
                paddingBottom: "20px",
              }}
              className="text-white text-xl mb-6 font-bold"
            >
              熱門標籤
            </h2>
            <div className="flex flex-wrap justify-center w-[55%] items-center gap-3">
              {hotTags.map((tag) => (
                <Link
                  key={tag.name}
                  href={tag.href}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = tag.href;
                  }}
                  style={{
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    borderRadius: "50px",
                    fontWeight: 900,
                  }}
                  className="px-4 py-2 bg-[#CD861A] text-white text-sm font-medium rounded-full hover:bg-[#FFCD83] hover:text-black transition-colors"
                >
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Title and Count - Show when search results are found */}
        {hasSearched && !loading && searchResults.length > 0 && (
          <div className="mt-12 text-center w-full flex flex-col items-center justify-center">
            <h2
              style={{ fontSize: "45px", paddingBottom: "2px" }}
              className="text-white text-center font-bold mb-2 "
            >
              {(searchParams.get("Keyword") || "").trim()}
            </h2>
            <p
              style={{ fontSize: "20px", paddingBottom: "12px" }}
              className="text-white/70 text-lg"
            >
              (共有{filteredResults.length}筆搜尋結果)
            </p>
          </div>
        )}

        {/* Category Filter Buttons - Show when search results are found */}
        {hasSearched &&
          !loading &&
          searchResults.length > 0 &&
          categories.length > 0 && (
            <div className="mt-6 text-center w-full flex flex-col items-center justify-center">
              <div className="flex flex-wrap justify-center items-center gap-3">
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat.value;
                  return (
                    <button
                      key={cat.value}
                      onClick={() => handleCategoryClick(cat.value)}
                      style={{
                        borderRadius: "50px",
                        display: "flex",
                        alignItems: "center",
                        overflow: "hidden",
                        border: isSelected ? "none" : "1px solid #CD861A",
                        background: isSelected
                          ? "linear-gradient(to left, #FFCD83, #CD861A)"
                          : "#CD861A",
                        transition: "all 0.3s ease",
                        boxShadow: isSelected
                          ? "0 0 15px rgba(205, 134, 26, 0.8)"
                          : "none",
                      }}
                      className="text-sm font-medium"
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.borderColor = "#FFA500";
                          e.currentTarget.style.boxShadow =
                            "0 0 15px rgba(205, 134, 26, 0.8)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.borderColor = "#CD861A";
                          e.currentTarget.style.boxShadow = "none";
                        }
                      }}
                    >
                      <span
                        style={{
                          paddingLeft: "15px",
                          paddingRight: "15px",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          backgroundColor: "black",
                          color: "#FFFFFF",
                          border: isSelected ? "none" : "1px solid #CD861A",
                          background: isSelected
                            ? "linear-gradient(to left, #CD861A 50%,#FFCD83 100%)"
                            : "black",
                          transition: "all 0.3s ease",
                          borderRight: isSelected
                            ? "none"
                            : "1px solid #CD861A",
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.background =
                              "linear-gradient(to left, #8B4513, #CD861A)";
                            e.currentTarget.style.borderRightColor = "#FFA500";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.background = "#000000";
                            e.currentTarget.style.borderRightColor = "#CD861A";
                          }
                        }}
                      >
                        {cat.name}
                      </span>
                      <span
                        style={{
                          paddingLeft: "15px",
                          paddingRight: "15px",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          backgroundImage: isSelected
                            ? "linear-gradient(120deg, #ffcb7e 10%, #9c5f04 100%)"
                            : "none",
                          backgroundColor: isSelected
                            ? "transparent"
                            : "#CD861A",
                          boxShadow: isSelected ? "0 0 10px 0 #ffaa2b" : "none",
                          color: "white",
                          borderLeft: isSelected
                            ? "1px solid rgba(255, 255, 255, 0.3)"
                            : "none",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.background =
                              "linear-gradient(to right, #CD861A, #FF8C00)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.background = "#CD861A";
                          }
                        }}
                      >
                        {categoryCounts[cat.value] || 0}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        {/* Search Results - Show when there are results */}
        {hasSearched && !loading && searchResults.length > 0 && (
          <div className="w-full mt-12" style={{ paddingTop: "40px" }}>
            <div className="container flex flex-col items-center justify-center mx-auto px-4">
              <TagCategoryLayout
                pageTitle=""
                breadcrumbName="搜尋結果"
                baseUrl={`/Search?Keyword=${encodeURIComponent(
                  searchParams.get("Keyword") || ""
                )}${
                  selectedCategory
                    ? `&category=${encodeURIComponent(selectedCategory)}`
                    : ""
                }`}
                articles={filteredResults}
                currentArticles={currentArticles}
                currentPage={validPage}
                totalPages={totalPages}
                itemsPerPage={itemsPerPage}
                ArticleListComponent={BookingArticleList}
                width={windowWidth < 1024 ? "90%" : "55%"}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default function SearchPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "首頁", url: "https://long-huei.vercel.app/" },
    { name: "搜尋", url: "https://long-huei.vercel.app/Search" },
  ]);

  return (
    <>
      <PageMetadata
        title="搜尋 - 龍匯天下"
        description="搜尋澳門旅遊、桑拿、訂房、包車等相關文章。快速找到您需要的澳門旅遊資訊、酒店推薦、包車服務、桑拿體驗等內容。"
        url="https://long-huei.vercel.app/Search"
        image="https://long-huei.vercel.app/Images/logo-m.png"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageLayout
        containerWidth="70%"
        outerContainerClassName="flex justify-center items-center"
        mainClassName="items-center justify-center"
      >
        <div className="w-full h-0 md:h-12 "></div>

        <Suspense fallback={<div className="text-white p-8">Loading...</div>}>
          <SearchContent />
        </Suspense>
      </PageLayout>
    </>
  );
}
