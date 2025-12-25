// Shared article data for RentCar category
// Can be imported by both client and server components

export interface RentCarArticle {
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

export const rentCarArticles: RentCarArticle[] = [
  {
    id: 1,
    title: '💎 澳門包車旅遊推薦：龍匯天下專屬私人行程，深度暢遊四大區域！',
    description: '❓ 為什麼澳門旅遊您需要選擇包車服務？澳門雖然面積不大，但其豐富的世遺景點分散於各區，且四季陽光熱烈。對於拖家帶口、有老有小的家庭旅客，或是不想在烈日下日均暴走 3 萬步的貴賓來說，傳統的公共交通',
    image: '/articles/251219-h.jpg',
    imageMobile: '/articles/251219-m.jpg',
    link: '/Article/macao-rentalcar',
    views: 154,
    tags: ['澳門包車景點', '澳門包車'],
    collapseId: 'collapse-macao-rentalcar',
  },
  {
    id: 2,
    title: '龍匯天下澳門專車接送服務推薦與預訂指南',
    description: '在澳門這座融合了商業與旅遊的城市中，時間就是金錢，舒適度更是決定行程品質的關鍵。',
    image: '/articles/251211_(2)-h.jpg',
    imageMobile: '/articles/251211_(2)-m.jpg',
    link: '/Article/privatecar',
    views: 251,
    tags: ['澳門找龍匯包車', '澳門包車', '包車接送'],
    collapseId: 'collapse-privatecar',
  },
  {
    id: 3,
    title: '【2026 澳門機場接送推薦】如何預訂最快、最舒適的澳門機場接送服務？',
    description: '為什麼您需要預訂澳門機場接送服務？您剛抵達澳門國際機場（Macau International Airport, MFM），拖著行李',
    image: '/articles/251205-h.jpg',
    imageMobile: '/articles/251205-m.jpg',
    link: '/Article/airplane-rentcar',
    views: 513,
    tags: ['澳門包車', '澳門包車景點', '澳門找龍匯包車'],
    collapseId: 'collapse-airplane-rentcar',
  },
  {
    id: 4,
    title: ' 澳門包車服務全攻略  一次搞懂價格、行程與預約方式',
    description: '澳門雖然不大，但景點分散，加上天氣炎熱、交通複雜，對初次來訪的旅客來說並不容易安排行程。若想輕鬆探索這座「東西交融的城市」，包車服務 就是最聰明的選擇。',
    image: '/articles/251107-h.jpg',
    imageMobile: '/articles/251107-m.jpg',
    link: '/Article/macao-carpass',
    views: 1147,
    tags: ['澳門找龍匯包車', '澳門包車景點', '澳門包車'],
    collapseId: 'collapse-macao-carpass',
  },
  {
    id: 5,
    title: '澳門機場接送｜舒適便捷的專屬交通服務',
    description: '來到澳門旅遊或出差，第一件需要解決的事情就是交通。無論是剛下飛機抵達，還是準備返程回家，選擇 澳門機場接送 都能讓你的行程更加輕鬆自在。相比自己搭巴士或計程車，澳門機場接送 提供專屬司機、舒適車輛以及',
    image: '/articles/251013jpg-h.jpg',
    imageMobile: '/articles/251013jpg-m.jpg',
    link: '/Article/airportrencar1',
    views: 1132,
    tags: ['澳門機場接送', '澳門包車', '龍匯包車'],
    collapseId: 'collapse-airportrencar1',
  },
  {
    id: 6,
    title: '澳門包車接送｜玩轉澳門最省心的交通秘訣',
    description: '你是不是常常遇到這種情況？飛機剛落地，還要拖著行李排隊等的士；準備去景點，卻因為不熟悉路線而浪費一大堆時間。想在短短幾天裡把澳門好玩、好吃、好拍的地方一次收集？答案其實很簡單——選擇 澳門包車接送。',
    image: '/rentcar/rentcar-c.jpg',
    imageMobile: '/rentcar/rentcar-c.jpg',
    link: '/Article/macao-baocar',
    views: 1137,
    tags: ['澳門包車', '包車接送', '澳門機場接送', '澳門接送'],
    collapseId: 'collapse-macao-baocar',
  },
  {
    id: 7,
    title: '澳門包車一日遊｜輕鬆暢遊澳門的最佳選擇',
    description: '來到澳門旅遊，許多人會安排世界遺產、威尼斯人、官也街、美食之旅等經典景點，但若想在有限的時間內輕鬆走遍大大小小的必玩之地，澳門包車一日遊 就成為最便利的選擇。透過 澳門包車一日遊，你可以自由規劃行程、',
    image: '/rentcar/baocar-c.jpg',
    imageMobile: '/rentcar/baocar-c.jpg',
    link: '/Article/macao-onedaytrvl',
    views: 1117,
    tags: ['澳門包車', '澳門旅遊'],
    collapseId: 'collapse-macao-onedaytrvl',
  },
  {
    id: 8,
    title: '澳門機場接送：舒適便捷的專屬交通服務',
    description: '到澳門旅遊或洽公，交通安排往往是旅程中最重要的一環。選擇可靠的 「澳門機場接送」 服務，不僅能讓你從落地開始就享受舒適旅程，更能節省時間、避免舟車勞頓。無論是個人旅遊、家庭出行或商務行程，澳門機場接送',
    image: '/rentcar/plane-c.jpg',
    imageMobile: '/rentcar/plane-c.jpg',
    link: '/Article/airportrencar',
    views: 1180,
    tags: ['澳門機場接送', '澳門機場', '澳門找龍匯包車', '龍匯包車'],
    collapseId: 'collapse-airportrencar',
  },
  {
    id: 9,
    title: '澳門包車旅遊｜舒適自由的深度玩法',
    description: '如果你想用最自在的方式探索澳門，享受量身訂製的行程規劃，那麼 澳門包車旅遊 絕對是最佳選擇。相比傳統團體旅遊，澳門包車旅遊 提供更高的自由度與舒適度，不管是家庭出行、商務行程，還是好友聚會，都能依照需',
    image: '/rentcar/9_8澳門包車旅遊｜舒適自由的深度玩法-c.jpg',
    imageMobile: '/rentcar/9_8澳門包車旅遊｜舒適自由的深度玩法-c.jpg',
    link: '/Article/rentcar1',
    views: 1139,
    tags: ['澳門包車', '澳門旅遊', '龍匯澳門', '包車推薦'],
    collapseId: 'collapse-rentcar1',
  },
  {
    id: 10,
    title: '澳門包車推薦｜自由暢遊澳門的最佳選擇！',
    description: '想在澳門輕鬆暢遊，無須擔心交通問題？無論是商務出差、家庭旅遊、婚禮接送還是私人觀光，【澳門包車推薦】的最佳選擇就在這裡！我們提供高品質、彈性十足的包車服務，為您量身打造最舒適、便捷的出行體驗。',
    image: '/articles/99-h.png',
    imageMobile: '/articles/99-m.png',
    link: '/Article/macao-rent-car',
    views: 1480,
    tags: ['澳門包車', '包車', '龍匯包車'],
    collapseId: 'collapse-macao-rent-car',
  },
  {
    id: 11,
    title: '澳門包車｜豪華專車接送，尊享舒適旅程',
    description: '想在澳門自由暢遊、舒適無憂？選擇【澳門包車】服務，讓您的旅程升級，無論是商務接待、婚禮包車、家庭出遊，還是私人觀光，我們都能為您量身打造專屬路線和尊榮體驗。',
    image: '/rentcar/【澳門包車】三種頂級車種聰明挑，輕鬆解鎖高品質旅程_(1)-c.jpg',
    imageMobile: '/articles/【澳門包車】三種頂級車種聰明挑，輕鬆解鎖高品質旅程_(1)-c.jpg',
    link: '/Article/rentcal',
    views: 1813,
    tags: ['澳門包車', '澳門找龍匯包車', '龍匯天下旅遊', '澳門旅遊', '澳門景點'],
    collapseId: 'collapse-rentcal',
  },
  {
    id: 12,
    title: '【澳門包車】三種頂級車種聰明挑，輕鬆解鎖高品質旅程',
    description: '和家人朋友出遊澳門卻不知道要包什麼車嗎?那你來對地方了，小編給您統整了三種頂級車款的受眾，只要根據你的需求選擇就行了，怎麼樣?是不是很方便呀~廢話不多說，進正片！',
    image: '/rentcar/包車-c.png',
    imageMobile: '/rentcart/包車-c.png',
    link: '/Article/wei123',
    views: 1548,
    tags: ['龍匯天下包車', '包車澳門龍匯', '龍匯包車', '澳門找龍匯包車'],
    collapseId: 'collapse-wei123',
  },
];

