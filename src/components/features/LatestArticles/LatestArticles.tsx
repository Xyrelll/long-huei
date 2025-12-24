import ArticleCarousel from '../ArticleCarousel/ArticleCarousel';

const latestArticles = [
  {
    id: 1,
    title: '澳門2025最新懶人包：簽證、景點、美食、住宿全攻略',
    date: '2025/11/21',
    image: '/article-latest-1.jpg',
    link: '/article/guide-2025',
  },
  {
    id: 2,
    title: '澳門包車服務全攻略 一次搞懂價格、行程與預約方式',
    date: '2025/11/07',
    image: '/article-latest-2.jpg',
    link: '/article/car-service',
  },
  {
    id: 3,
    title: '澳門一日遊｜24 小時暢遊世界遺產與娛樂之都',
    date: '2025/10/28',
    image: '/article-latest-3.jpg',
    link: '/article/day-tour',
  },
  {
    id: 4,
    title: '澳門機場接送｜舒適便捷的專屬交通服務',
    date: '2025/10/26',
    image: '/article-latest-4.jpg',
    link: '/article/airport-transfer',
  },
];

const popularArticles = [
  {
    id: 1,
    title: '【澳門水療指南】推薦：顏值技師×放鬆解壓×隱藏版SPA體驗全揭密！',
    date: '2025/05/31',
    image: '/article-popular-1.png',
    link: '/article/spa-guide',
  },
  {
    id: 2,
    title: '【澳門按摩】8大必試桑拿｜隱藏平價神店｜避坑攻略',
    date: '2025/06/11',
    image: '/article-popular-2.jpg',
    link: '/article/massage-guide',
  },
  {
    id: 3,
    title: '澳門劇本殺，推理遊戲還是慾望遊戲?',
    date: '2025/05/27',
    image: '/article-popular-3.png',
    link: '/article/script-killing',
  },
  {
    id: 4,
    title: '【澳門通】完整攻略：交通、消費、景點優惠一卡整合',
    date: '2025/07/18',
    image: '/article-popular-4.jpg',
    link: '/article/macau-pass',
  },
];

export default function LatestArticles() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-[117.5px] py-[78.7px]">
      <div className="flex gap-6">
        <ArticleCarousel title="最新文章" articles={latestArticles} />
        <ArticleCarousel title="熱門文章" articles={popularArticles} />
      </div>
    </section>
  );
}

