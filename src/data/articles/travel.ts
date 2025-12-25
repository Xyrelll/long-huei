// Shared article data for Travel category
// Can be imported by both client and server components
import { ArticleContent } from '@/types/articleContent';
import { travelArticleContentBlocks } from './travelContentBlocks';

export interface TravelArticle {
  id: number;
  title: string;
  description: string;
  image: string;
  imageMobile: string;
  link: string;
  views: number;
  tags?: string[];
  collapseId: string;
  content?: string; // Legacy plain text content
  contentBlocks?: ArticleContent; // New structured content blocks
}

export const travelArticles: TravelArticle[] = [
  {
    id: 1,
    title: '澳門2025最新懶人包：簽證、景點、美食、住宿全攻略',
    description: '澳門作為融合中西文化的特別行政區,2025年持續推出新景點與服務升級。台灣旅客最關心的重點更新: 簽證新制、交通升級、支付便利等完整攻略。',
    image: '/travel/251121-c.jpg',
    imageMobile: '/travel/251121-m.jpg',
    link: '/Article/macau-all',
    views: 1021,
    tags: ['澳門通龍匯天下', '龍匯包車', '龍匯天下訂房'],
    collapseId: 'collapse-macau-all',
    contentBlocks: travelArticleContentBlocks[1],
  },
  {
    id: 2,
    title: '澳門一日遊｜24 小時暢遊世界遺產與娛樂之都',
    description: '如果你只有一天時間在澳門停留，該怎麼玩才能值回票價？這就是 澳門一日遊 的魅力所在。這座小城融合了中西文化，既有古老的歷史建築，又有國際級的娛樂度假村，只要行程安排得宜，即使僅有 24 小時，也能從清晨到深夜都充實難忘。',
    image: '/travel/251022-c.jpg',
    imageMobile: '/travel/251022-m.jpg',
    link: '/Article/macao-onedaypass',
    views: 1109,
    tags: ['澳門一日遊', '澳門包車', '澳門龍匯天下'],
    collapseId: 'collapse-macao-onedaypass',
    contentBlocks: travelArticleContentBlocks[2],
  },
  {
    id: 3,
    title: '澳門親子自由行：全家出遊必做行程',
    description: '想帶著孩子來一趟輕鬆又充滿驚喜的旅程嗎？近年來，澳門親子自由行 成為許多家庭旅遊的熱門選擇。不同於單純的觀光購物，澳門除了世界遺產與美食文化，更有許多適合親子同樂的景點與活動，無論是寓教於樂的體驗，還是盡情放鬆的休閒空間，都能讓爸媽與小孩留下難忘回憶。',
    image: '/travel/parenttravel-c.jpg',
    imageMobile: '/travel/parenttravel-m.jpg',
    link: '/Article/macao-parent-child',
    views: 1189,
    tags: ['澳門親子自由行', '澳門旅遊', '龍匯天下訂房', '澳門包車'],
    collapseId: 'collapse-macao-parent-child',
    contentBlocks: travelArticleContentBlocks[3],
  },
  {
    id: 4,
    title: '澳門旅遊團｜深度探索東西文化交融的魅力之城',
    description: '澳門被譽為「東方拉斯維加斯」，同時擁有中葡文化交融的獨特魅力。想要輕鬆規劃行程、節省交通時間、深入體驗澳門的美食與文化，選擇 澳門旅遊團 絕對是最聰明的方式。透過 澳門旅遊團，不僅能享受專業導遊的講解，更能輕鬆走訪必去的世界文化遺產、人氣娛樂場與隱藏版美食，讓旅程充滿驚喜。',
    image: '/travel/9_8澳門旅遊團｜深度探索東西文化交融的魅力之城-c.jpg',
    imageMobile: '/travel/9_8澳門旅遊團｜深度探索東西文化交融的魅力之城-m.jpg',
    link: '/Article/macao-travelgroup1',
    views: 1127,
    tags: ['澳門訂房', '澳門推薦', '澳門旅遊'],
    collapseId: 'collapse-macao-travelgroup1',
    contentBlocks: travelArticleContentBlocks[4],
  },
  {
    id: 5,
    title: '澳門團體旅遊首選攻略｜吃喝玩樂一次滿足！',
    description: '澳門，這座融合中葡文化的小城，不僅以華麗的賭場和歷史建築聞名，更是許多公司、學校或親友出遊的首選地點。若您正規劃一次難忘的澳門團體旅遊，那麼這篇文章將帶您深入了解行程安排、必訪景點、美食推薦與注意事項，讓整趟旅程順利又精彩。',
    image: '/travel/澳門團體旅遊首選攻略｜吃喝玩樂一次滿足！-c.jpg',
    imageMobile: '/travel/澳門團體旅遊首選攻略｜吃喝玩樂一次滿足！-m.jpg',
    link: '/Article/grouptravel',
    views: 1149,
    tags: ['澳門旅遊', '澳門包車', '澳門訂房', '澳門團體旅遊'],
    collapseId: 'collapse-grouptravel',
    contentBlocks: travelArticleContentBlocks[5],
  },
  {
    id: 6,
    title: '【大三巴牌坊】2025澳門自由行必訪深度攻略：歷史、周邊景點與美食全解析',
    description: '澳門大三巴牌坊是這座城市的靈魂地標，更是聯合國世界文化遺產的核心區域。無論是初次造訪或重返探索，2025年的澳門大三巴將以更完善的設施與豐富體驗迎接旅客。小編整理了最新參觀資訊、周邊玩法與在地美食，帶你深度感受這座地標的魅力。',
    image: '/travel/【大三巴牌坊】2025澳門自由行必訪深度攻略：歷史、周邊景點與美食全解析-c.jpg',
    imageMobile: '/travel/【大三巴牌坊】2025澳門自由行必訪深度攻略：歷史、周邊景點與美食全解析-m.jpg',
    link: '/Article/macao%20dasanbaa',
    views: 1630,
    tags: ['澳門大三巴', '大三巴澳門龍匯', '龍匯大三巴澳門', '澳門龍匯天下大三巴'],
    collapseId: 'collapse-macao-dasanbaa',
    contentBlocks: travelArticleContentBlocks[6],
  },
  {
    id: 7,
    title: '【澳門百老匯】平民美食元宇宙｜全球首創「街市娛樂綜合體」',
    description: '是不是很好奇【澳門百老匯】是個什麼樣的地方呀！從2015年開幕走到2025年的它可多了不少有意思的新玩意兒呢~跟著小編一起來重新認識【澳門百老匯】吧！',
    image: '/travel/【澳門百老匯】平民美食元宇宙｜全球首創「街市娛樂綜合體」-c.jpg',
    imageMobile: '/travel/【澳門百老匯】平民美食元宇宙｜全球首創「街市娛樂綜合體」-m.jpg',
    link: '/Article/macao%20hundred%20old',
    views: 1173,
    tags: ['澳門百老匯', '龍匯澳們百老匯', '龍匯百老匯', '百老匯龍匯天下'],
    collapseId: 'collapse-macao-hundred-old',
    contentBlocks: travelArticleContentBlocks[7],
  },
  {
    id: 8,
    title: '【澳門景點】2025最強攻略！必訪10大秘境、路線、美食全收錄',
    description: '澳門不只賭場與蛋塔！這座世界遺產小城藏著葡式浪漫、漁村風情與隱藏版打卡點。本篇嚴選【澳門景點】TOP 10清單，從經典地標到在地人才知的秘境，教你用最少時間玩最精華，直接幫你規劃好路線，手機存這篇就GO！',
    image: '/travel/【澳門景點】2025最強攻略！必訪10大秘境、路線、美食全收錄-c.jpg',
    imageMobile: '/travel/【澳門景點】2025最強攻略！必訪10大秘境、路線、美食全收錄-m.jpg',
    link: '/Article/macao%20view',
    views: 1816,
    tags: ['澳門龍匯', '龍匯天下澳門旅遊', '澳門包車', '澳門包車景點'],
    collapseId: 'collapse-macao-view',
    contentBlocks: travelArticleContentBlocks[8],
  },
  {
    id: 9,
    title: '【澳門自由行】怎麼玩才好玩？最佳路線報你知！',
    description: '澳門，不只是賭場那麽簡單！這座融合中西文化的小城，有歷史、有風情，有美食、有藝術。對於時間不多但又想深入體驗澳門的人來說，一條合理的自由行路線，比什麽都重要。跟著這篇澳門自由行攻略，不走馬看花，也不踩雷，哪怕只有一天時間照樣玩得盡興！',
    image: '/travel/【澳門自由行】怎麼玩才好玩？最佳路線報你知！-c.jpg',
    imageMobile: '/travel/【澳門自由行】怎麼玩才好玩？最佳路線報你知！-m.jpg',
    link: '/Article/macao%20free%20go',
    views: 1304,
    tags: ['澳門自由行龍匯', '龍匯天下旅遊', '澳門自由行龍匯天下', '龍匯天下自由行'],
    collapseId: 'collapse-macao-free-go',
    contentBlocks: travelArticleContentBlocks[9],
  },
  {
    id: 10,
    title: '【澳門旅遊】性價比最高的玩法，它來了！',
    description: '說到澳門旅遊，想必你心中肯定有很多問號，想去澳門但不知道去哪裡玩，澳門旅遊去哪裡cp值最高，最值回票價的美景在澳門的哪裡，你的疑問小編都聽到啦，於是特別替大家精挑細選並濃縮成懶人包，事不宜遲，快跟著小編一起來了解吧！',
    image: '/travel/【澳門旅遊】性價比最高的玩法，它來了-c.jpg',
    imageMobile: '/travel/【澳門旅遊】性價比最高的玩法，它來了-m.jpg',
    link: '/Article/macao%20travel',
    views: 1269,
    tags: ['澳門旅遊找龍匯', '龍匯天下澳門', '龍匯旅遊澳門', '澳門旅遊龍匯天下'],
    collapseId: 'collapse-macao-travel',
    contentBlocks: travelArticleContentBlocks[10],
  },
  {
    id: 11,
    title: '【澳門景點】自由行必收的12個玩樂秘笈！',
    description: '澳門景點融合了葡式風情與中華文化，更坐擁8項世界遺產與頂級度假村，是亞洲旅客短程出遊的熱門選擇。本文精選12個「連在地人都推薦」的必訪景點，從歷史古蹟到網美打卡點一次整理，搭配本文獨家的實用攻略，教你用最省時省力的方式玩遍澳門精華！',
    image: '/travel/【澳門景點】自由行必收的12個玩樂秘笈！-c.jpg',
    imageMobile: '/travel/【澳門景點】自由行必收的12個玩樂秘笈！-m.jpg',
    link: '/Article/travel1',
    views: 1515,
    tags: ['澳門旅遊', '澳門安全', '澳門景點', '澳門推薦', '龍匯天下'],
    collapseId: 'collapse-travel1',
    contentBlocks: travelArticleContentBlocks[11],
  },
];

