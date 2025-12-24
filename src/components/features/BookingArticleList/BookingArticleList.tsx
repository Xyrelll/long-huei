'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className="row bg-green-500">
      {articles.map((article) => (
        <div key={article.id} className="col-12 pl-0">
          <div className="row article-card-row flex  pb-4">
            {/* Thumbnail - Left side on mobile, larger on desktop */}
            <div className="col-4 col-md-4 px-0 cardpic md:w-2/7">
              <Link href={article.link}>
                <picture>
                  <source srcSet={article.image} media="(min-width: 768px)" />
                  <Image
                    src={article.imageMobile || article.image}
                    className="img-fluid rounded-lg md:rounded-[50px]"
                    alt={article.title}
                    title={article.title}
                    width={150}
                    height={100}
                  />
                </picture>
              </Link>
            </div>
            
            {/* Article Details - Right side */}
            <div className="col-8 col-md-8 pl-2 md:w-5/7">
              <Link href={article.link}>
                <h3 className="card-title text-[#FFCD83] text-sm md:text-2xl md:text-3xl font-bold mb-2 md:mb-3 hover:text-[#CD861A] transition-colors">
                  {article.title}
                </h3>
              </Link>
              <div className="card-text row flex items-center justify-between">
                <div className="col-8">
                  <small className="text-read text-white text-xs">觀看人數：{article.views}</small>
                </div>
                <div className="col-4 text-end d-block d-md-none">
                  <button
                    className="btn btn-link p-0 js-btn-angle transition-transform duration-300"
                    data-angle={expandedCards.has(article.id) ? 'up' : 'down'}
                    type="button"
                    onClick={() => toggleCard(article.id)}
                    aria-label="向下展開"
                    aria-expanded={expandedCards.has(article.id)}
                  >
                    <i 
                      className={`fas fa-angle-down text-white text-2xl transition-transform duration-300 ${
                        expandedCards.has(article.id) ? 'rotate-180' : ''
                      }`} 
                      style={{ fontSize: '30px' }} 
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              </div>
              
              {/* Tags - Shown on desktop in the right column, in accordion on mobile */}
              {article.tags && article.tags.length > 0 && (
                <div className="d-none d-md-block mt-4">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, idx) => (
                      <Link
                        key={idx}
                        href={`/Tag/${tag}`}
                        className="px-4 py-2 bg-[#ce8211] text-black text-xs font-medium rounded-lg hover:bg-[#CD861A] hover:text-white transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Expanded content - Accordion for mobile only, hidden on desktop */}
            <div 
              className={`col-12 overflow-hidden transition-all duration-300 ease-in-out block md:hidden ${
                expandedCards.has(article.id) 
                  ? 'max-h-[1000px] opacity-100 mt-3' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              <p style={{ color: '#fff' }} className="text-sm mb-2">{article.description}</p>
              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, idx) => (
                    <Link
                      key={idx}
                      href={`/Tag/${tag}`}
                      className="px-3 py-1 bg-[#ce8211] text-black text-xs font-medium rounded-lg hover:bg-[#CD861A] hover:text-white transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

