'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Article {
  id: number;
  title: string;
  image: string;
  imageMobile: string;
  views: number;
  link: string;
  tags?: string[];
  description?: string;
}

const featuredArticle: Article = {
  id: 1,
  title: '澳門桑拿－老司機超詳細攻略',
  image: '/articles/澳門桑拿－老司機超詳細攻略-h.jpg',
  imageMobile: '/articles/澳門桑拿－老司機超詳細攻略-h.jpg',
  views: 5186,
  link: '/Article/sauna1',
  tags: ['澳門桑拿', '桑拿', '龍匯天下', '澳門旅遊'],
  description: '澳門桑拿最新現況總覽：疫情後全線回歸，甚至更勝以往！如果你近期有計畫前往澳門放鬆一下，那你可能會好奇：澳門的桑拿現在恢復得怎麼樣了？答案是——不僅回來了，而且是全面升級回歸！',
};

const articles: Article[] = [
  { 
    id: 2, 
    title: '澳門包車推薦｜自由暢遊澳門的最佳選擇！', 
    image: '/articles/99-h.png',
    imageMobile: '/articles/99-h.png',
    views: 1480, 
    link: '/Article/macao-rent-car',
    tags: ['澳門包車', '包車', '龍匯包車'],
    description: '想在澳門輕鬆暢遊，無須擔心交通問題？無論是商務出差、家庭旅遊、婚禮接送還是私人觀光，【澳門包車推薦】的最佳選擇就在這裡！我們提供高品質、彈性十足的包車服務，為您量身打造最舒適、便捷的出行體驗。',
  },
  { 
    id: 3, 
    title: '澳門劇本殺，推理遊戲還是慾望遊戲?', 
    image: '/articles/文案-h.png',
    imageMobile: '/articles/文案-h.png',
    views: 2098, 
    link: '/Article/sauna4',
    tags: ['澳門桑拿', '澳門劇本殺', '澳門', '龍匯天下', '桑拿'],
    description: '想在澳門玩點不一樣的劇本殺？別以為這只是燒腦推理，澳門劇本殺已進化成結合角色、情境與慾望的現場劇演。走進這場「遊戲」，你將成為慾望推理的主角，每個場景、每句台詞、每次互動，都是一場情緒與快感的試探。',
  },
  { 
    id: 4, 
    title: '【澳門訂房】最頂攻略它來了！(上)', 
    image: '/articles/【澳門訂房】最頂攻略它來了！-h.jpg',
    imageMobile: '/articles/【澳門訂房】最頂攻略它來了！-h.jpg',
    views: 1735, 
    link: '/Article/wei%20i',
    description: '迫不及待要來分享【澳門訂房】懶人包啦！來到澳門的遊客怎麼能不找一間高級澳門住宿呢~每回去澳門旅行都開始找澳門住宿清單，先把小編這些口袋名單優質飯店收藏起來吧！',
  },
  { 
    id: 5, 
    title: '【澳門水舞間】超絕視覺震撼！給你不得不去的理由！', 
    image: '/articles/【澳門水舞間】超絕視覺震撼！給你不得不去的理由！-h.jpg',
    imageMobile: '/articles/【澳門水舞間】超絕視覺震撼！給你不得不去的理由！-h.jpg',
    views: 1455, 
    link: '/Article/macao%20water',
    tags: ['澳門水舞間', '龍匯澳門水舞間', '水舞間龍匯天下', '龍匯水舞間'],
    description: '來到澳門旅遊最不能錯過的就是《水舞間》，耗資超過二十億港元，是全球最壯觀最大型的水上匯演舞台劇，還曾榮獲2011年度「HKMA/TVB 傑出市場策劃獎」金獎；表演橋段結合高難度特技、絢爛炫目燈光、特殊',
  },
  { 
    id: 6, 
    title: '★澳門熱門桑拿推薦 TOP 8 (上)', 
    image: '/articles/250519_龍匯天下_部落格圖_上-h.jpg',
    imageMobile: '/articles/250519_龍匯天下_部落格圖_上-h.jpg',
    views: 4068, 
    link: '/Article/sauna2',
    tags: ['澳門', '澳門桑拿', '澳門劇本殺', '桑拿'],
    description: '不論你是老司機，還是初次探訪澳門桑拿的新手，選對一家店真的很關鍵！以下是四間評價極高、網友熱推的澳門桑拿，每間都有不同亮點與玩法，從24小時營業的尊貴水療，到主打劇本殺玩法，總有一間適合你。',
  },
  { 
    id: 7, 
    title: '【澳門賭場】攻略來了！不賭錢也能嗨玩三天三夜的隱藏玩法大公開！', 
    image: '/articles/【澳門賭場】攻略來了！不賭錢也能嗨玩三天三夜的隱藏玩法大公開！-h.jpg',
    imageMobile: '/articles/【澳門賭場】攻略來了！不賭錢也能嗨玩三天三夜的隱藏玩法大公開！-h.jpg',
    views: 2104, 
    link: '/Article/macao%20casino',
    description: '澳門賭場不只是賭博！這座不夜城藏著無數免費娛樂、美食、表演與奢華體驗。從免費接駁車、米其林餐廳到世界級水舞秀，教你用最聰明的方式嗨玩三天三夜，完全不花一毛賭金！',
  },
  { 
    id: 8, 
    title: '【澳門旅遊安全嗎？】2025重點解析', 
    image: '/articles/250513_龍匯天下_部落格圖-h.jpg',
    imageMobile: '/articles/250513_龍匯天下_部落格圖-h.jpg',
    views: 2493, 
    link: '/Article/safe1',
    tags: ['澳門旅遊', '澳門旅遊安全', '澳門安全', '龍匯天下澳門'],
    description: '澳門是亞洲最安全的旅遊城市之一，連續7年名列亞洲前三安全城市。犯罪率低、夜間安全感高達94%，無論是獨自旅行還是家庭出遊，都能安心享受這座融合中西文化的魅力之城。',
  },
  { 
    id: 9, 
    title: '★澳門熱門桑拿推薦 TOP 8 (下)', 
    image: '/articles/250519_龍匯天下_部落格圖_下-h.jpg',
    imageMobile: '/articles/250519_龍匯天下_部落格圖_下-h.jpg',
    views: 2349, 
    link: '/Article/sauna3',
    tags: ['澳門桑拿', '桑拿推薦', '龍匯天下桑拿', '澳門劇本殺'],
    description: '🌐 氹仔＆澳門本島｜頂尖高顏值澳門桑拿會所續篇（進階玩家必看）接續上文介紹的【尊貴水療】、【壹號桑拿】等四家熱店，這次我們聚焦在氹仔區的高顏值澳門桑拿、以及價格與體驗感拉滿的高端店家。若你已經厭倦常',
  },
  { 
    id: 10, 
    title: '澳門按摩推薦｜舒壓放鬆一篇看懂', 
    image: '/articles/pg-h.png',
    imageMobile: '/articles/pg-h.png',
    views: 1885, 
    link: '/Article/macao%20massage%201',
    description: '澳門不只賭場與豬扒包！這座不夜城藏著頂級水療會館、24小時平價足療，甚至賭場免費按摩區。教你用最聰明姿勢消除暴走疲勞！',
  },
  { 
    id: 11, 
    title: '【澳門景點】自由行必收的12個玩樂秘笈！', 
    image: '/articles/【澳門景點】自由行必收的12個玩樂秘笈！-h.jpg',
    imageMobile: '/articles/【澳門景點】自由行必收的12個玩樂秘笈！-h.jpg',
    views: 1515, 
    link: '/Article/travel1',
    tags: ['澳門旅遊', '澳門景點', '澳門', '澳門安全嗎', '龍匯天下', '澳門桑拿'],
  },
];

export default function SelectedArticles() {
  const [showMore, setShowMore] = useState(false);
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

  const visibleArticles = showMore ? articles : articles.slice(0, 3);

  return (
    <section className="selected js-feature w-full bg-black py-12">
      <style jsx>{`
        .featured img {
          border-radius: 10px;
          margin-bottom: 10px;
        }
        .featured .featured-sm img {
          margin-bottom: 0px;
        }
        .featured h3 {
          line-height: 1.3em;
          font-size: 1.4rem;
          color: #ffcd83;
          margin-bottom: 0px;
          padding: 5px;
        }
        .featured .featured-sm h3 {
          line-height: 1.4em;
          font-size: 1rem;
          padding: 0 0 5px 0;
        }
        .featured a {
          text-decoration: none;
        }
        .featured .views {
          color: white;
          padding: 5px;
        }
        .featured .featured-sm .views {
          padding: 0px;
        }
      `}</style>

      <h2 className="text-center text-white text-2xl mb-8">精選文章</h2>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="row featured flex gap-6">
            <div className="w-1/3 flex-shrink-0">
              <Link href={featuredArticle.link} className="block" target="_blank">
                <Image
                  src={featuredArticle.image}
                  title={featuredArticle.title}
                  alt={featuredArticle.title}
                  width={358}
                  height={200}
                  className="w-full rounded-lg mb-2"
                />
              </Link>
              <Link href={featuredArticle.link} className="block" target="_blank">
                <h3>{featuredArticle.title}</h3>
              </Link>
              <div className="views">
                <span>觀看人數：{featuredArticle.views}</span>
              </div>
            </div>
            <div className="w-2/3 flex-shrink-0">
              <div className="row featured-sm grid grid-cols-2 gap-4">
                {articles.map((article) => (
                  <div key={article.id} className="mb-3">
                    <div className="row flex gap-3">
                      <div className="flex-shrink-0">
                        <Link href={article.link} className="block" target="_blank">
                          <Image
                            src={article.image}
                            title={article.title}
                            alt={article.title}
                            width={188}
                            height={105}
                            className="w-full rounded-lg"
                          />
                        </Link>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div>
                          <Link href={article.link} className="block" target="_blank">
                            <h3>{article.title}</h3>
                          </Link>
                        </div>
                        <div className="views">
                          <span>觀看人數：{article.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="row">
            <div className="col-12 pl-0">
              <div className="row mb-4 article-card-row flex items-start border-b border-gray-800 pb-4" style={{ position: 'relative' }}>
                <div className="col-4 col-md-4 px-0 cardpic" style={{ flexShrink: 0 }}>
                  <Link href={featuredArticle.link}>
                    <picture>
                      <source srcSet={featuredArticle.image} media="(min-width: 768px)" />
                      <Image
                        src={featuredArticle.imageMobile}
                        className="img-fluid rounded-start"
                        alt={featuredArticle.title}
                        title={featuredArticle.title}
                        width={150}
                        height={100}
                      />
                    </picture>
                  </Link>
                </div>
                <div className="col-8 col-md-8 pl-2" style={{ position: 'relative', flex: '1', minWidth: 0 }}>
                  <Link href={featuredArticle.link}>
                    <h3 className="card-title text-white text-sm mb-2">{featuredArticle.title}</h3>
                  </Link>
                  <div className="card-text" style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%', paddingRight: '32px' }}>
                    <div style={{ flex: '1', minWidth: 0 }}>
                      <small className="text-read text-white text-xs">觀看人數：{featuredArticle.views}</small>
                    </div>
                    <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="d-block d-md-none">
                      <button
                        className="btn btn-link p-0 js-btn-angle"
                        data-angle={expandedCards.has(featuredArticle.id) ? 'up' : 'down'}
                        type="button"
                        onClick={() => toggleCard(featuredArticle.id)}
                        aria-label="向下展開"
                        style={{ margin: 0, lineHeight: 1 }}
                      >
                        <i 
                          className="fas fa-angle-down text-white text-2xl" 
                          aria-hidden="true"
                          style={{
                            transform: expandedCards.has(featuredArticle.id) ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease'
                          }}
                        ></i>
                      </button>
                    </div>
                  </div>
                  {expandedCards.has(featuredArticle.id) && (
                    <div className="d-block d-md-none mt-3">
                      {featuredArticle.description && (
                        <p style={{ color: '#fff' }} className="text-sm mb-2">{featuredArticle.description}</p>
                      )}
                      {featuredArticle.tags && (
                        <ul className="tags flex flex-wrap" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {featuredArticle.tags.map((tag, idx) => (
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
                  {featuredArticle.tags && (
                    <div className="article-title d-none d-md-block mt-4">
                      <ul className="tags flex flex-wrap" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {featuredArticle.tags.map((tag, idx) => (
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

            {visibleArticles.map((article) => (
              <div key={article.id} className="col-12 pl-0">
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
                        <small className="text-read text-white text-xs">觀看人數：{article.views}</small>
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

            {!showMore && (
              <button
                type="button"
                className="btn btn-primary btn-a-top mx-auto block mt-4 px-6 py-2 bg-[#CD861A] text-white rounded"
                id="show-more-article"
                onClick={() => setShowMore(true)}
                aria-label="更多文章"
              >
                更多文章
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
