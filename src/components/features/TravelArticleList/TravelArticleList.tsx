"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface TravelArticle {
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

interface TravelArticleListProps {
  articles: TravelArticle[];
}

export default function TravelArticleList({
  articles,
}: TravelArticleListProps) {
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
    <div className="row">
      {articles.map((article) => (
        <div key={article.id} className="col-12 pl-0">
          <div className="row article-card-row flex border-b border-gray-800 pb-4">
            <div className="col-4 col-md-4 px-0 cardpic">
              <Link href={article.link}>
                <picture>
                  <source srcSet={article.image} media="(min-width: 768px)" />
                  <Image
                    src={article.imageMobile}
                    className="img-fluid rounded-lg"
                    alt={article.title}
                    title={article.title}
                    width={150}
                    height={100}
                  />
                </picture>
              </Link>
            </div>
            <div className="col-8 col-md-8 pl-2">
              <Link href={article.link}>
                <h3 className="card-title text-sm mb-2">{article.title}</h3>
              </Link>
              <div className="card-text row flex items-center justify-between">
                <div className="col-8">
                  <small className="text-read text-white text-xs">
                    觀看人數：{article.views}
                  </small>
                </div>
                <div className="col-4 text-end d-block d-md-none">
                  <button
                    className="btn btn-link p-0 js-btn-angle"
                    data-angle={expandedCards.has(article.id) ? "up" : "down"}
                    type="button"
                    onClick={() => toggleCard(article.id)}
                    aria-label="向下展開"
                  >
                    <i
                      className="fas fa-angle-down text-white text-2xl"
                      style={{ fontSize: "30px" }}
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              </div>
              {article.tags && (
                <div className="article-title d-none d-md-block mt-4">
                  <ul className="tags flex flex-wrap gap-1">
                    {article.tags.map((tag, idx) => (
                      <li key={idx}>
                        <Link
                          href={`/Tag/${tag}`}
                          className="text-xs text-gray-400 hover:text-[#FFCD83]"
                        >
                          {tag}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {expandedCards.has(article.id) && (
              <div className="col-12 d-block d-md-none mt-3">
                <p style={{ color: "#fff" }} className="text-sm mb-2">
                  {article.description}
                </p>
                {article.tags && (
                  <ul className="tags flex flex-wrap gap-1">
                    {article.tags.map((tag, idx) => (
                      <li key={idx}>
                        <Link
                          href={`/Tag/${tag}`}
                          className="text-xs text-gray-400 hover:text-[#FFCD83]"
                        >
                          {tag}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
