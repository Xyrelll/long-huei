'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Article {
  id: number;
  title: string;
  date: string;
  image: string;
  link: string;
}

interface ArticleCarouselProps {
  title: string;
  articles: Article[];
}

export default function ArticleCarousel({ title, articles }: ArticleCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const currentArticles = articles.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  return (
    <div className="w-full max-w-[576px]">
      <h2 className="text-center text-[15.5px] leading-[31px] tracking-[7.68px] text-white mb-[78.7px]">
        {title}
      </h2>

      <div className="relative">
        {/* Carousel Controls */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[28.8px] h-full opacity-50 hover:opacity-100 transition-opacity z-10"
          aria-label="Previous"
        >
          <svg width="29" height="32" viewBox="0 0 29 32" fill="none">
            <path d="M18 8L10 16L18 24" stroke="white" strokeWidth="2" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[28.8px] h-full opacity-50 hover:opacity-100 transition-opacity z-10"
          aria-label="Next"
        >
          <svg width="29" height="32" viewBox="0 0 29 32" fill="none">
            <path d="M10 8L18 16L10 24" stroke="white" strokeWidth="2" />
          </svg>
        </button>

        {/* Articles Grid */}
        <div className="grid grid-cols-2 gap-[10.55px] px-6">
          {currentArticles.map((article) => (
            <Link
              key={article.id}
              href={article.link}
              className="bg-[#2C261C] rounded-[40px] overflow-hidden group hover:scale-105 transition-transform"
            >
              <div className="relative w-full h-[136.61px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-[10px] leading-[26px] tracking-[0.505px] font-black text-[#F5CA69] line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-[13.1px] leading-[17px] tracking-[0.321px] text-white">
                  {article.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

