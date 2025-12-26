'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './BookingArticleList.css';

interface BookingArticle {
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

interface BookingArticleListProps {
  articles: BookingArticle[];
}

export default function BookingArticleList({ articles }: BookingArticleListProps) {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleCard = (id: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  return (
    <div className="flex flex-col gap-6" style={{ width: isMobile ? '100%' : 'auto' }}>
      {articles.map((article, index) => {
        const isExpanded = expandedCards.has(article.id);
        // Use link as key since it's unique, fallback to index if link is missing
        const uniqueKey = article.link || `article-${index}`;
        
        return (
          <article key={uniqueKey} className="flex flex-col pb-6 last:border-b-0" style={{ width: isMobile ? '100%' : 'auto' }}>
            {/* Top row: Image and Title */}
            <div className="flex flex-row gap-3 md:gap-4" style={{ width: '100%' }}>
              {/* Thumbnail - Left side */}
              <div className="flex-shrink-0" style={{ width: isMobile ? '36%' : '40%' }}>
                <Link href={article.link} className="block">
                  <picture>
                    <source srcSet={article.image} media="(min-width: 768px)" />
                    <Image
                      src={article.imageMobile || article.image}
                      className="w-full h-auto rounded-full md:rounded-[50px] object-cover"
                      alt={article.title}
                      title={article.title}
                      width={150}
                      height={100}
                    />
                  </picture>
                </Link>
              </div>
              
              {/* Article Details - Right side */}
              <div className="flex-1 flex flex-col gap-2" style={{ width: isMobile ? '70%' : '60%' }}>
                <Link href={article.link}>
                  <h3
                   style={{ fontSize: isMobile ? '15px' : '20px',
                    color:isMobile ? '#f5ca69' : '#ce8211',
                    fontWeight: '600',
                    }}
                  className="text-[#FFCD83] font-bold mb-2 md:mb-3 transition-colors duration-300 leading-tight">
                    {article.title}
                  </h3>
                </Link>
                
                <div className="flex items-center justify-between mb-2 md:mb-0">
                  <span className="text-white text-xs md:text-[15px]">觀看人數：{article.views}</span>
                 
                  {/* Mobile expand button */}
                  <button
                    className="md:hidden  p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-[#FFCD83] rounded"
                    type="button"
                    onClick={() => toggleCard(article.id)}
                    aria-label={isExpanded ? '收起內容' : '展開內容'}
                    aria-expanded={isExpanded}
                  >
                    <i 
                      className="fas fa-angle-down accordion-icon text-white text-2xl"
                      style={{
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div className="w-full h-2"/>
                
                {/* Tags - Desktop only */}
                {article.tags && article.tags.length > 0 && (
                  <div
                  
                   className="hidden md:flex flex-wrap gap-1 mt-4 ">
                    {article.tags.map((tag, idx) => (
                      <Link
                        key={idx}
                        href={`/Tag/${tag}`}
                        style={{
                          paddingTop: '5px',
                          paddingBottom: '5px',
                          paddingLeft: '10px',
                          paddingRight: '10px',
                        }}
                        className="px-4 py-2 bg-[#ce8211] text-white text-xs font-medium
                        flex justify-center items-center px-3
                        rounded-full hover:bg-white hover:text-[#CD861A] transition-colors duration-300"
                      >
                      <span className="text-xs w-full px-2 ">{tag} </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Expanded content - Mobile accordion - Below image and title */}
            <div 
              className="md:hidden accordion-content"
              style={{
                maxHeight: isExpanded ? '1000px' : '0',
                opacity: isExpanded ? 1 : 0,
                marginTop: isExpanded ? '0.75rem' : '0',
              }}
            >
              <div className="pt-3">
                <p className="text-white text-sm mb-3 leading-relaxed">{article.description}</p>
                {article.tags && article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2"
                  style={{
                   paddingTop: '20px',
                   paddingBottom: '20px',
                  }}
                  >
                    {article.tags.map((tag, idx) => (
                      <Link
                        key={idx}
                        href={`/Tag/${tag}`}
                        style={{    
                        paddingLeft: '12px',
                        paddingRight: '12px',
                        paddingTop: '12px',
                        paddingBottom: '12px',
                        borderRadius: '50px',
                        }}
                        className="px-3 py-1 h-5 flex justify-center items-center rounded-full bg-[#ce8211] text-white text-xs font-medium rounded-lg hover:bg-[#CD861A] hover:text-white transition-colors duration-300"
                      >
                     {tag}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

