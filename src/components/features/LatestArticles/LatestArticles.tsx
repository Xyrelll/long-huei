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
    title: '💎澳門包車旅遊推薦：龍匯天下專屬私人行程，深度暢遊四大區域！',
    date: '2025/12/19',
    image: '/articles/251219-h.jpg',
    imageMobile: '/articles/251219-m.jpg',
    link: '/Article/macao-rentalcar',
    views: 154,
    tags: ['澳門包車景點', '澳門包車'],
    description: '❓ 為什麼澳門旅遊您需要選擇包車服務？ 澳門雖然面積不大，但其豐富的世遺景點分散於各區，且四季陽光熱烈。對於拖家帶口、有老有小的家庭旅客，或是不想在烈日下日均暴走 3 萬步的貴賓來說，傳統的公共交通',
  },
  {
    id: 2,
    title: '龍匯天下澳門專車接送服務推薦與預訂指南',
    date: '2025/12/16',
    image: '/articles/251211_(2)-h.jpg',
    imageMobile: '/articles/251211_(2)-h.jpg',
    link: '/Article/privatecar',
    views: 251,
    tags: ['澳門找龍匯包車', '澳門包車', '包車接送'],
    description: '在澳門這座融合了商業與旅遊的城市中，時間就是金錢，舒適度更是決定行程品質的關鍵。',
  },
  {
    id: 3,
    title: '【2026 澳門機場接送推薦】如何預訂最快、最舒適的澳門機場接送服務？',
    date: '2025/12/08',
    image: '/articles/251205-h.jpg',
    imageMobile: '/articles/251205-h.jpg',
    link: '/Article/airplane-rentcar',
    views: 513,
    tags: ['澳門包車', '澳門包車景點', '澳門找龍匯包車'],
    description: '為什麼您需要預訂澳門機場接送服務？您剛抵達澳門國際機場（Macau International Airport, MFM），拖著行李',
  },
  {
    id: 4,
    title: '澳門怎麼玩？最新深度玩法大公開！',
    date: '2025/12/01',
    image: '/articles/251125-h.jpg',
    imageMobile: '/articles/251125-h.jpg',
    link: '/Article/macao%20play',
    views: 717,
    tags: ['澳門訂房', '澳門龍匯', '龍匯天下包車'],
    description: '澳門遠不止賭場和歷史遺跡，這座城市正以全新面貌迎接旅客。小編推薦這些與眾不同的體驗方式：',
  },
  {
    id: 5,
    title: '澳門2025最新懶人包：簽證、景點、美食、住宿全攻略',
    date: '2025/11/21',
    image: '/articles/251121-h.jpg',
    imageMobile: '/articles/251121-h.jpg',
    link: '/Article/macau-all',
    views: 1021,
    tags: ['澳門通龍匯天下', '龍匯包車', '龍匯天下訂房'],
    description: '澳門作為融合中西文化的特別行政區，2025年持續推出新景點與服務升級。',
  },
  {
    id: 6,
    title: '澳門包車服務全攻略  一次搞懂價格、行程與預約方式',
    date: '2025/11/07',
    image: '/articles/251107-h.jpg',
    imageMobile: '/articles/251107-h.jpg',
    link: '/Article/macao-carpass',
    views: 1147,
    tags: ['澳門找龍匯包車', '澳門包車景點', '澳門包車'],
    description: '澳門雖然不大，但景點分散，加上天氣炎熱、交通複雜，對初次來訪的旅客來說並不容易安排行程。若想輕鬆探索這座「東西交融的城市」，包車服務 就是最聰明的選擇。',
  },
  {
    id: 7,
    title: '澳門一日遊｜24 小時暢遊世界遺產與娛樂之都',
    date: '2025/10/28',
    image: '/articles/251022-h.jpg',
    imageMobile: '/articles/251022-h.jpg',
    link: '/Article/macao-onedaypass',
    views: 1109,
    tags: ['澳門一日遊', '澳門包車', '澳門龍匯天下'],
    description: '如果你只有一天時間在澳門停留，該怎麼玩才能值回票價？這就是 澳門一日遊 的魅力所在。這座小城融合了中西文化，既有古老的歷史建築，又有國際級的娛樂度假村，只要行程安排得宜，即使僅有 24 小時，也能從清',
  },
  {
    id: 8,
    title: '澳門機場接送｜舒適便捷的專屬交通服務',
    date: '2025/10/26',
    image: '/articles/251013jpg-h.jpg',
    imageMobile: '/articles/251013jpg-h.jpg',
    link: '/Article/airportrencar1',
    views: 1132,
    tags: ['澳門機場接送', '澳門包車', '龍匯包車'],
    description: '來到澳門旅遊或出差，第一件需要解決的事情就是交通。無論是剛下飛機抵達，還是準備返程回家，選擇 澳門機場接送 都能讓你的行程更加輕鬆自在。相比自己搭巴士或計程車，澳門機場接送 提供專屬司機、舒適車輛以及',
  },
];

const popularArticles: Article[] = [
  {
    id: 1,
    title: '澳門桑拿－老司機超詳細攻略',
    date: '2025/05/20',
    image: '/articles/澳門桑拿－老司機超詳細攻略-h.jpg',
    imageMobile: '/articles/澳門桑拿－老司機超詳細攻略-h.jpg',
    link: '/Article/sauna1',
    views: 5186,
    tags: ['澳門桑拿', '桑拿', '龍匯天下', '澳門旅遊'],
    description: '澳門桑拿最新現況總覽：疫情後全線回歸，甚至更勝以往！如果你近期有計畫前往澳門放鬆一下，那你可能會好奇：澳門的桑拿現在恢復得怎麼樣了？答案是——不僅回來了，而且是全面升級回歸！',
  },
  {
    id: 2,
    title: '★澳門熱門桑拿推薦 TOP 8 (上)',
    date: '2025/05/20',
    image: '/articles/250519_龍匯天下_部落格圖_上-h.jpg',
    imageMobile: '/articles/250519_龍匯天下_部落格圖_上-h.jpg',
    link: '/Article/sauna2',
    views: 4068,
    tags: ['澳門', '澳門桑拿', '澳門劇本殺', '桑拿'],
    description: '不論你是老司機，還是初次探訪澳門桑拿的新手，選對一家店真的很關鍵！以下是四間評價極高、網友熱推的澳門桑拿，每間都有不同亮點與玩法，從24小時營業的尊貴水療，到主打劇本殺玩法，總有一間適合你。',
  },
  {
    id: 3,
    title: '★澳門熱門桑拿推薦 TOP 8 (下)',
    date: '2025/05/21',
    image: '/articles/250519_龍匯天下_部落格圖_下-h.jpg',
    imageMobile: '/articles/250519_龍匯天下_部落格圖_下-h.jpg',
    link: '/Article/sauna3',
    views: 2349,
    tags: ['澳門', '澳門推薦', '澳門旅遊', '桑拿', '澳門劇本殺', '澳門桑拿', '龍匯天下'],
    description: '🌐 氹仔＆澳門本島｜頂尖高顏值澳門桑拿會所續篇（進階玩家必看）接續上文介紹的【尊貴水療】、【壹號桑拿】等四家熱店，這次我們聚焦在氹仔區的高顏值澳門桑拿、以及價格與體驗感拉滿的高端店家。若你已經厭倦常',
  },
  {
    id: 4,
    title: '澳門桑拿玩法全攻略：入門技巧、注意事項與熱門店家總整理',
    date: '2025/06/03',
    image: '/articles/文案-h(1).png',
    imageMobile: '/articles/文案-h(1).png',
    link: '/Article/macao-sauna-how',
    views: 2307,
    tags: ['澳門桑拿', '龍匯澳門按摩', '澳門按摩', '澳門劇本殺', '澳門龍匯天下'],
    description: '說到「澳門桑拿玩法」，很多人第一時間會聯想到按摩、三溫暖、熱食區，甚至還有人將之視為澳門旅遊不可或缺的一環。不過，與香港、大陸等地的桑拿相比，澳門桑拿文化可說是自成一格，從價格、玩法到服務形式都有其特',
  },
  {
    id: 5,
    title: '【澳門水療指南】推薦：顏值技師×放鬆解壓×隱藏版SPA體驗全揭密！',
    date: '2025/05/31',
    image: '/articles/文案3-h.png',
    imageMobile: '/articles/文案3-h.png',
    link: '/Article/macao-spa',
    views: 2278,
    tags: ['澳門桑拿', '澳門水療', '澳門劇本殺', '澳門旅遊', '澳門龍匯天下', '龍匯天下包車', '龍匯天下'],
    description: '想在澳門來點「不一樣的放鬆」？無論你剛從賭場大殺四方、還是想找個寧靜角落讓身體徹底釋放壓力，「澳門水療」就是那道你不該錯過的祕密選項。',
  },
  {
    id: 6,
    title: '【澳門按摩】8大必試桑拿｜隱藏平價神店｜避坑攻略',
    date: '2025/06/11',
    image: '/articles/【澳門按摩】8大必試桑拿、隱藏平價神店、避坑攻略-h.jpg',
    imageMobile: '/articles/【澳門按摩】8大必試桑拿、隱藏平價神店、避坑攻略-h.jpg',
    link: '/Article/macao%20massage',
    views: 2232,
    tags: ['澳門按摩', '龍匯澳門按摩', '澳門龍匯天下', '龍匯按摩'],
    description: '澳門不只賭場與豬扒包！這座不夜城藏著頂級水療會館、24小時平價足療，甚至賭場免費按摩區。教你用最聰明姿勢消除暴走疲勞！',
  },
  {
    id: 7,
    title: '澳門劇本殺，推理遊戲還是慾望遊戲?',
    date: '2025/05/27',
    image: '/articles/文案-h.png',
    imageMobile: '/articles/文案-h.png',
    link: '/Article/sauna4',
    views: 2098,
    tags: ['澳門桑拿', '澳門劇本殺', '澳門', '龍匯天下', '桑拿'],
    description: '想在澳門玩點不一樣的劇本殺？別以為這只是燒腦推理，澳門劇本殺已進化成結合角色、情境與慾望的現場劇演。走進這場「遊戲」，你將成為慾望推理的主角，每個場景、每句台詞、每次互動，都是一場情緒與快感的試探。',
  },
  {
    id: 8,
    title: '【澳門通】完整攻略：交通、消費、景點優惠一卡整合',
    date: '2025/07/18',
    image: '/articles/macao_pass-h.jpg',
    imageMobile: '/articles/macao_pass-h.jpg',
    link: '/Article/macao%20pass',
    views: 2513,
    tags: ['澳門通龍匯天下', '龍匯澳門通', '澳門龍匯天下澳門通', '龍匯天下澳門通'],
    description: '澳門通（Macau Pass）是旅客探索澳門的智慧神卡，2025年全面升級後，整合交通、消費、景點門票等多元功能，成為自由行省錢省時的必備工具。本文從最新功能、使用範圍到隱藏優惠，帶你掌握這張小卡的無',
  },
];

function ArticleCarousel({ title, articles }: { title: string; articles: Article[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const itemsPerPage = 4;
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const toggleCard = (id: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

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
              <div className="row mb-4 article-card-row flex items-start border-b border-gray-800 pb-4" style={{ position: 'relative' }}>
                <div className="col-4 col-md-4 px-0 cardpic" style={{ flexShrink: 0 }}>
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
                <div className="col-8 col-md-8 pl-2" style={{ position: 'relative', flex: '1', minWidth: 0 }}>
                  <Link href={article.link}>
                    <h3 className="card-title text-white text-sm mb-2">{article.title}</h3>
                  </Link>
                  <div className="card-text" style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%', paddingRight: '32px' }}>
                    <div style={{ flex: '1', minWidth: 0 }}>
                      {article.views && (
                        <small className="text-read text-white text-xs">觀看人數：{article.views}</small>
                      )}
                      {!article.views && (
                        <small className="text-read text-white text-xs">{article.date}</small>
                      )}
                    </div>
                    <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="d-block d-md-none">
                      <button
                        className="btn btn-link p-0 js-btn-angle"
                        data-angle={expandedCards.has(article.id) ? 'up' : 'down'}
                        type="button"
                        onClick={() => toggleCard(article.id)}
                        aria-label="向下展開"
                        style={{ margin: 0, lineHeight: 1 }}
                      >
                        <i 
                          className="fas fa-angle-down text-white text-2xl" 
                          aria-hidden="true"
                          style={{
                            transform: expandedCards.has(article.id) ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease'
                          }}
                        ></i>
                      </button>
                    </div>
                  </div>
                  {expandedCards.has(article.id) && (
                    <div className="d-block d-md-none mt-3">
                      {article.description && (
                        <p style={{ color: '#fff' }} className="text-sm mb-2">{article.description}</p>
                      )}
                      {article.tags && (
                        <ul className="tags flex flex-wrap" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {article.tags.map((tag, idx) => (
                            <li key={idx} style={{ margin: '0 5px 5px 0' }}>
                              <Link 
                                href={`/Tag/${tag}`} 
                                className="text-xs text-white"
                                style={{
                                  display: 'inline-block',
                                  backgroundColor: '#CD861A',
                                  padding: '0 10px',
                                  height: '28px',
                                  lineHeight: '28px',
                                  borderRadius: '4px',
                                  textDecoration: 'none',
                                  color: '#fff'
                                }}
                              >
                                {tag}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                  {article.tags && (
                    <div className="article-title d-none d-md-block mt-4">
                      <ul className="tags flex flex-wrap" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {article.tags.map((tag, idx) => (
                          <li key={idx} style={{ margin: '0 5px 5px 0' }}>
                            <Link 
                              href={`/Tag/${tag}`} 
                              className="text-xs text-white"
                              style={{
                                display: 'inline-block',
                                backgroundColor: '#CD861A',
                                padding: '0 10px',
                                height: '28px',
                                lineHeight: '28px',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                color: '#fff'
                              }}
                            >
                              {tag}
                            </Link>
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
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="row js-article-block flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <ArticleCarousel title="最新文章" articles={latestArticles} />
          </div>
          <div className="w-full lg:w-1/2">
            <ArticleCarousel title="熱門文章" articles={popularArticles} />
          </div>
        </div>
      </div>
    </section>
  );
}
