'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSlide {
  id: number;
  image: string;
  link: string;
}

const heroSlides: HeroSlide[] = [
  { id: 1, image: '/hero-1.jpg', link: '/article/1' },
  { id: 2, image: '/hero-2.jpg', link: '/article/2' },
  { id: 3, image: '/hero-3.jpg', link: '/article/3' },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[234.47px] mt-[99px] overflow-hidden">
      <div className="relative w-full h-full max-w-[1435px] mx-auto">
        {heroSlides.map((slide, index) => (
          <Link
            key={slide.id}
            href={slide.link}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-60 z-0'
            } ${index < currentSlide ? 'blur-sm' : ''}`}
          >
            <div className="w-[1160px] h-full mx-auto rounded-[40px] overflow-hidden">
              <Image
                src={slide.image}
                alt={`Slide ${slide.id}`}
                fill
                className="object-cover"
                priority={index === currentSlide}
                sizes="1160px"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="absolute bottom-[27px] left-1/2 transform -translate-x-1/2 flex gap-[6px] z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-5 h-5 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-[#CD861A]'
                : 'bg-black/80 opacity-70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

