import Image from 'next/image';
import Link from 'next/link';

interface Article {
  id: number;
  title: string;
  image: string;
  views: number;
  link: string;
}

const featuredArticle: Article = {
  id: 1,
  title: '澳門桑拿－老司機超詳細攻略',
  image: '/article-featured.jpg',
  views: 5175,
  link: '/article/sauna-guide',
};

const articles: Article[] = [
  { id: 2, title: '澳門包車推薦｜自由暢遊澳門的最佳選擇！', image: '/article-1.png', views: 1477, link: '/article/car-rental' },
  { id: 3, title: '澳門劇本殺，推理遊戲還是慾望遊戲?', image: '/article-2.png', views: 2095, link: '/article/script-killing' },
  { id: 4, title: '【澳門水舞間】超絕視覺震撼！給你不不得不去的理由！', image: '/article-3.jpg', views: 1454, link: '/article/water-show' },
  { id: 5, title: '【澳門訂房】最頂攻略它來了！(上)', image: '/article-4.jpg', views: 1732, link: '/article/booking-guide' },
  { id: 6, title: '🌟 澳門熱門桑拿推薦 TOP 8 (上）', image: '/article-5.jpg', views: 4062, link: '/article/sauna-top8' },
  { id: 7, title: '【澳門賭場】攻略來了！不賭錢也能嗨玩三天三夜的隱藏玩法大公開！', image: '/article-6.jpg', views: 2100, link: '/article/casino-guide' },
  { id: 8, title: '【澳門旅遊安全嗎？】2025重點解析', image: '/article-7.jpg', views: 2490, link: '/article/safety' },
  { id: 9, title: '🌟 澳門熱門桑拿推薦 TOP 8 (下）', image: '/article-8.jpg', views: 2329, link: '/article/sauna-top8-2' },
  { id: 10, title: '澳門按摩推薦｜舒壓放鬆一篇看懂', image: '/article-9.png', views: 1882, link: '/article/massage' },
  { id: 11, title: '【澳門景點】自由行必收的12個玩樂秘笈！', image: '/article-10.jpg', views: 1514, link: '/article/attractions' },
];

export default function SelectedArticles() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-[117.5px] py-[78.7px]">
      <h2 className="text-center text-[15.5px] leading-[31px] tracking-[7.68px] text-white mb-[78.7px]">
        精選文章
      </h2>

      <div className="flex gap-0">
        {/* Featured Article */}
        <div className="w-[400px] flex-shrink-0">
          <Link href={featuredArticle.link} className="block group">
            <div className="relative w-[358px] h-[199.75px] mb-4 rounded-[10px] overflow-hidden">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                sizes="358px"
              />
            </div>
            <h3 className="text-[13.5px] leading-[29px] tracking-[0.643px] text-[#FFCD83] mb-2 w-[184px]">
              {featuredArticle.title}
            </h3>
            <p className="text-[9.9px] leading-[24px] tracking-[0.459px] text-white">
              觀看人數：{featuredArticle.views.toLocaleString()}
            </p>
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="flex-1 grid grid-cols-2 gap-[10.55px] ml-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={article.link}
              className="flex gap-3 group"
            >
              <div className="relative w-[188px] h-[104.9px] rounded-[10px] overflow-hidden flex-shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="188px"
                />
              </div>
              <div className="flex flex-col justify-between py-1 min-w-0">
                <h3 className="text-[9.6px] leading-[22px] tracking-[0.459px] text-[#FFCD83] line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-[9.9px] leading-[24px] tracking-[0.459px] text-white">
                  觀看人數：{article.views.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

