'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

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
    image: '/Images/WebBanners/250512_龍匯天下_包車_banner_1550px.jpg', 
    imageMobile: '/Images/WebBanners/250512_龍匯天下_包車_banner_1550px-m.jpg',
    link: '/Article/rentcal',
    alt: '澳門訂車、澳門包車、澳門旅遊',
    title: '澳門包車'
  },
  { 
    id: 2, 
    image: '/Images/WebBanners/250512_龍匯天下_桑拿_banner_1550px.jpg', 
    imageMobile: '/Images/WebBanners/250512_龍匯天下_桑拿_banner_1550px-m.jpg',
    link: '/Article/sauna1',
    alt: '澳門桑拿、桑拿、龍匯天下桑拿、龍匯天下澳門桑拿',
    title: '澳門桑拿'
  },
  { 
    id: 3, 
    image: '/Images/WebBanners/250512_龍匯天下_訂房_banner_1550px.jpg', 
    imageMobile: '/Images/WebBanners/250512_龍匯天下_訂房_banner_1550px-m.jpg',
    link: '/Article/wei%20i',
    alt: '龍匯天下訂房、澳門訂房、澳門旅遊',
    title: '澳門訂房'
  },
];

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 576);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="w-full mt-[99px]">
      <div id="splide" className="splide">
        <Splide
          options={{
            type: 'loop',
            autoplay: 'playing',
            focus: 'center',
            padding: !isMobile ? { right: '7%', left: '7%' } : undefined,
            pagination: isMobile ? false : true,
          }}
          aria-label="Banner Carousel"
        >
          {heroSlides.map((slide) => (
            <SplideSlide key={slide.id}>
              <div>
                <Link href={slide.link}>
                  <picture>
                    <source srcSet={slide.image} media="(min-width: 576px)" />
                    <Image
                      src={slide.imageMobile}
                      alt={slide.alt}
                      title={slide.title}
                      width={1550}
                      height={400}
                      className="w-100"
                      priority={slide.id === 2}
                    />
                  </picture>
                </Link>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
