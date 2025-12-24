'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Article {
  id: number;
  title: string;
  date: string;
  image: string;
  imageMobile: string;
  link: string;
  views?: number;
  tags?: string[];
  description?: string;
}

const latestArticles: Article[] = [
  {
    id: 1,
    title: '💎 澳門包車旅遊推薦：龍匯天下專屬私人行程，深度暢遊四大區域！',
    date: '2025/12/19',
    image: '/Images/Articles/2357/251219-h.jpg',
    imageMobile: '/Images/Articles/2357/251219-m.jpg',
    link: '/Article/macao-rentalcar',
    views: 143,
    tags: ['澳門包車景點', '澳門包車'],
  },
  {
    id: 2,
    title: '龍匯天下澳門專車接送服務推薦與預訂指南',
    date: '2025/12/16',
    image: '/Images/Articles/2356/251211_(2)-h.jpg',
    imageMobile: '/Images/Articles/2356/251211_(2)-m.jpg',
    link: '/Article/privatecar',
    views: 241,
    tags: ['澳門找龍匯包車', '澳門包車', '包車接送'],
  },
  {
    id: 3,
    title: '【2026 澳門機場接送推薦】如何預訂最快、最舒適的澳門機場接送服務？',
    date: '2025/12/08',
    image: '/Images/Articles/2355/251205-h.jpg',
    imageMobile: '/Images/Articles/2355/251205-m.jpg',
    link: '/Article/airplane-rentcar',
    views: 501,
    tags: ['澳門包車', '澳門包車景點', '澳門找龍匯包車'],
  },
  {
    id: 4,
    title: '澳門怎麼玩？最新深度玩法大公開！',
    date: '2025/12/01',
    image: '/Images/Articles/2354/251125-h.jpg',
    imageMobile: '/Images/Articles/2354/251125-m.jpg',
    link: '/Article/macao%20play',
    views: 708,
    tags: ['澳門訂房', '澳門龍匯', '龍匯天下包車'],
  },
  {
    id: 5,
    title: '澳門2025最新懶人包：簽證、景點、美食、住宿全攻略',
    date: '2025/11/21',
    image: '/Images/Articles/2353/251121-h.jpg',
    imageMobile: '/Images/Articles/2353/251121-m.jpg',
    link: '/Article/macau-all',
    views: 1014,
    tags: ['澳門通龍匯天下', '龍匯包車', '龍匯天下訂房'],
  },
  {
    id: 6,
    title: ' 澳門包車服務全攻略  一次搞懂價格、行程與預約方式',
    date: '2025/11/07',
    image: '/Images/Articles/2351/251107-h.jpg',
    imageMobile: '/Images/Articles/2351/251107-m.jpg',
    link: '/Article/macao-carpass',
    views: 1147,
    tags: ['澳門找龍匯包車', '澳門包車景點', '澳門包車'],
  },
  {
    id: 7,
    title: '澳門一日遊｜24 小時暢遊世界遺產與娛樂之都',
    date: '2025/10/28',
    image: '/Images/Articles/2350/251022-h.jpg',
    imageMobile: '/Images/Articles/2350/251022-m.jpg',
    link: '/Article/macao-onedaypass',
    views: 1108,
    tags: ['澳門一日遊', '澳門包車', '澳門龍匯天下'],
  },
  {
    id: 8,
    title: '澳門機場接送｜舒適便捷的專屬交通服務',
    date: '2025/10/26',
    image: '/Images/Articles/2346/251013jpg-h.jpg',
    imageMobile: '/Images/Articles/2346/251013jpg-m.jpg',
    link: '/Article/airportrencar1',
    views: 1131,
    tags: ['澳門機場接送', '澳門包車', '龍匯包車'],
  },
];

const popularArticles: Article[] = [
  {
    id: 1,
    title: '澳門桑拿－老司機超詳細攻略',
    date: '2025/05/20',
    image: '/Images/Articles/2307/澳門桑拿－老司機超詳細攻略-h.jpg',
    imageMobile: '/Images/Articles/2307/澳門桑拿－老司機超詳細攻略-m.jpg',
    link: '/Article/sauna1',
    views: 5179,
    tags: ['澳門桑拿', '桑拿', '龍匯天下', '澳門旅遊'],
  },
  {
    id: 2,
    title: '🌟 澳門熱門桑拿推薦 TOP 8 (上）',
    date: '2025/05/20',
    image: '/Images/Articles/2308/250519_龍匯天下_部落格圖_上-h.jpg',
    imageMobile: '/Images/Articles/2308/250519_龍匯天下_部落格圖_上-m.jpg',
    link: '/Article/sauna2',
    views: 4064,
    tags: ['澳門', '澳門桑拿', '澳門劇本殺', '桑拿'],
  },
  {
    id: 3,
    title: '🌟 澳門熱門桑拿推薦 TOP 8 (下）',
    date: '2025/05/21',
    image: '/Images/Articles/2309/250519_龍匯天下_部落格圖_下-h.jpg',
    imageMobile: '/Images/Articles/2309/250519_龍匯天下_部落格圖_下-m.jpg',
    link: '/Article/sauna3',
    views: 2331,
    tags: ['澳門', '澳門推薦', '澳門旅遊', '桑拿', '澳門劇本殺', '澳門桑拿', '龍匯天下'],
  },
  {
    id: 4,
    title: '澳門桑拿玩法全攻略：入門技巧、注意事項與熱門店家總整理',
    date: '2025/06/03',
    image: '/Images/Articles/2322/文案-h.png',
    imageMobile: '/Images/Articles/2322/文案-m.png',
    link: '/Article/macao-sauna-how',
    views: 2305,
    tags: ['澳門桑拿', '龍匯澳門按摩', '澳門按摩', '澳門劇本殺', '澳門龍匯天下'],
  },
  {
    id: 5,
    title: '【澳門水療指南】推薦：顏值技師×放鬆解壓×隱藏版SPA體驗全揭密！',
    date: '2025/05/31',
    image: '/Images/Articles/2320/文案3-h.png',
    imageMobile: '/Images/Articles/2320/文案3-m.png',
    link: '/Article/macao-spa',
    views: 2275,
    tags: ['澳門桑拿', '澳門水療', '澳門劇本殺', '澳門旅遊', '澳門龍匯天下', '龍匯天下包車', '龍匯天下'],
  },
  {
    id: 6,
    title: '【澳門按摩】8大必試桑拿｜隱藏平價神店｜避坑攻略',
    date: '2025/06/11',
    image: '/Images/Articles/2321/【澳門按摩】8大必試桑拿、隱藏平價神店、避坑攻略-h.jpg',
    imageMobile: '/Images/Articles/2321/【澳門按摩】8大必試桑拿、隱藏平價神店、避坑攻略-m.jpg',
    link: '/Article/macao%20massage',
    views: 2227,
    tags: ['澳門按摩', '龍匯澳門按摩', '澳門龍匯天下', '龍匯按摩'],
  },
  {
    id: 7,
    title: ' 澳門劇本殺，推理遊戲還是慾望遊戲?',
    date: '2025/05/27',
    image: '/Images/Articles/2314/文案-h.png',
    imageMobile: '/Images/Articles/2314/文案-m.png',
    link: '/Article/sauna4',
    views: 2095,
    tags: ['澳門桑拿', '澳門劇本殺', '澳門', '龍匯天下', '桑拿'],
  },
  {
    id: 8,
    title: '【澳門通】完整攻略：交通、消費、景點優惠一卡整合',
    date: '2025/07/18',
    image: '/Images/Articles/2336/macao_pass-h.jpg',
    imageMobile: '/Images/Articles/2336/macao_pass-m.jpg',
    link: '/Article/macao%20pass',
    views: 2508,
    tags: ['澳門通龍匯天下', '龍匯澳門通', '澳門龍匯天下澳門通', '龍匯天下澳門通'],
  },
];

function ArticleCarousel({ title, articles }: { title: string; articles: Article[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const currentArticles = articles.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className="w-full">
      <h2 className="text-center text-white text-2xl mb-8">{title}</h2>
      
      {/* Desktop Carousel */}
      <div className="hidden md:block relative">
        <button
          onClick={goToPrevious}
          className="carousel-control-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded"
          type="button"
          aria-label="Previous"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">‹</span>
        </button>
        
        <div className="container mx-auto">
          <ul className="four-article-box row grid grid-cols-2 gap-4">
            {currentArticles.map((article) => (
              <li key={article.id} className="list-none">
                <Link href={article.link} target="_blank" className="block">
                  <div className="article-img relative w-full h-40 mb-2 rounded-lg overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      title={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="article-title">
                    <h3 className="article-card-title text-[#FFCD83] text-sm mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="row flex justify-between">
                      <div className="col-6">
                        <span className="date text-white text-xs">{article.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={goToNext}
          className="carousel-control-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded"
          type="button"
          aria-label="Next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true">›</span>
        </button>
      </div>

      {/* Mobile List */}
      <div className="block md:hidden">
        <div className="row">
          {articles.map((article) => (
            <div key={article.id} className="col-12 pl-0 mb-4">
              <div className="row mb-4 article-card-row flex border-b border-gray-800 pb-4">
                <div className="col-4 col-md-4 px-0 cardpic">
                  <Link href={article.link}>
                    <picture>
                      <source srcSet={article.image} media="(min-width: 768px)" />
                      <Image
                        src={article.imageMobile}
                        className="img-fluid rounded-start"
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
                    <h3 className="card-title text-white text-sm mb-2">{article.title}</h3>
                  </Link>
                  <div className="card-text row flex items-center justify-between">
                    <div className="col-8">
                      {article.views && (
                        <small className="text-read text-white text-xs">觀看人數：{article.views}</small>
                      )}
                      {!article.views && (
                        <small className="text-read text-white text-xs">{article.date}</small>
                      )}
                    </div>
                  </div>
                  {article.tags && (
                    <div className="article-title d-none d-md-block mt-4">
                      <ul className="tags flex flex-wrap gap-2">
                        {article.tags.map((tag, idx) => (
                          <li key={idx}>
                            <Link href={`/Tag/${tag}`} className="text-xs text-gray-400">{tag}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LatestArticles() {
  return (
    <section className="articles w-full bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="row js-article-block flex flex-col lg:flex-row gap-8">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <ArticleCarousel title="最新文章" articles={latestArticles} />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <ArticleCarousel title="熱門文章" articles={popularArticles} />
          </div>
        </div>
      </div>
    </section>
  );
}
