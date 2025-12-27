'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { useState, useEffect } from 'react';

interface HeroSlide {
  id: number;
  image: string;
  imageMobile: string;
  link: string;
  alt: string;
  title: string;
}

const heroSlides: HeroSlide[] = [
  { 
    id: 1, 
    image: '/homepage/250512_龍匯天下_包車_banner_1550px.jpg', 
    imageMobile: '/homepage/250512_龍匯天下_包車_banner_1550px-m.jpg',
    link: '/Article/rentcal',
    alt: '澳門訂車、澳門包車、澳門旅遊',
    title: '澳門包車'
  },
  { 
    id: 2, 
    image: '/homepage/250512_龍匯天下_桑拿_banner_1550px.jpg', 
    imageMobile: '/homepage/250512_龍匯天下_桑拿_banner_1550px-m.jpg',
    link: '/Article/sauna1',
    alt: '澳門桑拿、桑拿、龍匯天下桑拿、龍匯天下澳門桑拿',
    title: '澳門桑拿'
  },
  { 
    id: 3, 
    image: '/homepage/250512_龍匯天下_訂房_banner_1550px.jpg', 
    imageMobile: '/homepage/250512_龍匯天下_訂房_banner_1550px-m.jpg',
    link: '/Article/wei%20i',
    alt: '龍匯天下訂房、澳門訂房、澳門旅遊',
    title: '澳門訂房'
  },
];

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // Check initial size
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section className="w-full mt-[10px] md:mt-[110px] hero-section" style={{ marginBottom: '2.5rem' }}>
      <div id="splide" className="splide">
        <Splide
          options={{
            type: 'loop',
            autoplay: 'playing',
            focus: 'center',
            padding: { right: '5%', left: '5%' },
            pagination: true,
            arrows: false,
            perPage: 1,
            gap: '1rem',
            trimSpace: false,
          }}
          aria-label="Banner Carousel"
        >
          {heroSlides.map((slide) => (
            <SplideSlide key={slide.id}>
              <div className="splide-slide-wrapper">
                <Link href={slide.link}>
                  <Image
                    src={isMobile ? slide.imageMobile : slide.image}
                    alt={slide.alt}
                    title={slide.title}
                    width={isMobile ? 390 : 1550}
                    height={isMobile ? 79 : 400}
                    className="w-100 splide-image"
                    priority={slide.id === 2}
                    sizes="(max-width: 768px) 90vw, 90vw"
                  />
                </Link>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
