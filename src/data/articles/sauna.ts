// Shared article data for Sauna category
// Can be imported by both client and server components
import { ArticleContent } from '@/types/articleContent';
import { saunaArticleContentBlocks } from './saunaContentBlocks';

export interface SaunaArticle {
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

export const saunaArticles: SaunaArticle[] = [
  {
    id: 1,
    title: '澳門桑拿－老司機超詳細攻略',
    description: '澳門桑拿最新現況總覽：疫情後全線回歸，甚至更勝以往！如果你近期有計畫前往澳門放鬆一下，那你可能會好奇：澳門的桑拿現在恢復得怎麼樣了？答案是——不僅回來了，而且是全面升級回歸！',
    image: '/articles/澳門桑拿－老司機超詳細攻略-h.jpg',
    imageMobile: '/articles/澳門桑拿－老司機超詳細攻略-m.jpg',
    link: '/Article/sauna1',
    views: 5186,
    tags: ['澳門桑拿', '桑拿', '龍匯天下', '澳門旅遊'],
    collapseId: 'collapse-sauna1',
    contentBlocks: saunaArticleContentBlocks[1],
  },
  {
    id: 2,
    title: '🌟 澳門熱門桑拿推薦 TOP 8 (上）',
    description: '不論你是老司機，還是初次探訪澳門桑拿的新手，選對一家店真的很關鍵！以下是四間評價極高、網友熱推的澳門桑拿，每間都有不同亮點與玩法，從24小時營業的尊貴水療，到主打劇本殺玩法，總有一間適合你。',
    image: '/articles/250519_龍匯天下_部落格圖_上-h.jpg',
    imageMobile: '/articles/250519_龍匯天下_部落格圖_上-m.jpg',
    link: '/Article/sauna2',
    views: 4068,
    tags: ['澳門', '澳門桑拿', '澳門劇本殺', '桑拿'],
    collapseId: 'collapse-sauna2',
    contentBlocks: saunaArticleContentBlocks[2],
  },
  {
    id: 3,
    title: '【澳門水療】超詳細全流程大揭秘，看完直接衝！',
    description: '會點進來的相信都是老司機，那小編今天就不藏私手把手帶你們解鎖澳門水療全流程，從進門到結束，每個部分都明明白白，看完直接衝！',
    image: '/sauna/【澳門水療】超詳細全流程大揭秘，看完直接衝！-c.jpg',
    imageMobile: '/sauna/【澳門水療】超詳細全流程大揭秘，看完直接衝！-c.jpg',
    link: '/Article/macao%20waterrr',
    views: 1936,
    tags: ['澳門龍匯天下水療', '水療龍匯', '龍匯澳門水療', '龍匯天下澳門水療'],
    collapseId: 'collapse-macao-waterrr',
    contentBlocks: saunaArticleContentBlocks[3],
  },
  {
    id: 4,
    title: '【澳門水療】頂級體驗｜隱世療癒地圖',
    description: '我先說，這篇文章必須收藏好吧！小編透過專業評測後整理出3間行家才懂私藏的SPA館，多說無益，讓我們接著看吧~',
    image: '/sauna/【澳門水療】頂級體驗｜隱世療癒地圖-c.jpg',
    imageMobile: '/sauna/【澳門水療】頂級體驗｜隱世療癒地圖-c.jpg',
    link: '/Article/macao%20waterr',
    views: 1503,
    tags: ['澳門水療', '龍匯澳門水療', '澳門龍匯天下水療', '龍匯天下水療'],
    collapseId: 'collapse-macao-waterr',
    contentBlocks: saunaArticleContentBlocks[4],
  },
  {
    id: 5,
    title: '澳門按摩推薦｜舒壓放鬆一篇看懂',
    description: '澳門除了賭場與美食，其實還藏著一個旅人最愛的秘密景點——澳門按摩！無論你是第一次來澳門、還是尋找舒壓放鬆的熟門熟路旅人，一間值得信賴的桑拿店，能讓你的行程畫龍點睛。本文特別整理出受歡迎的澳門按摩桑拿推',
    image: '/sauna/pg-c.png',
    imageMobile: '/sauna/pg-c.png',
    link: '/Article/macao%20massage%201',
    views: 1885,
    tags: ['澳門按摩', '澳門桑拿', '龍匯天下按摩', '澳門龍匯天下'],
    collapseId: 'collapse-macao-massage-1',
    contentBlocks: saunaArticleContentBlocks[5],
  },
  {
    id: 6,
    title: '【澳門按摩】8大必試桑拿｜隱藏平價神店｜避坑攻略',
    description: '澳門不只賭場與豬扒包！這座不夜城藏著頂級水療會館、24小時平價足療，甚至賭場免費按摩區。教你用最聰明姿勢消除暴走疲勞！',
    image: '/sauna/【澳門按摩】8大必試桑拿、隱藏平價神店、避坑攻略-c.jpg',
    imageMobile: '/sauna/【澳門按摩】8大必試桑拿、隱藏平價神店、避坑攻略-c.jpg',
    link: '/Article/macao%20massage',
    views: 2232,
    tags: ['澳門按摩', '龍匯澳門按摩', '澳門龍匯天下', '龍匯按摩'],
    collapseId: 'collapse-macao-massage',
    contentBlocks: saunaArticleContentBlocks[6],
  },
  {
    id: 7,
    title: '澳門桑拿玩法全攻略：入門技巧、注意事項與熱門店家總整理',
    description: '說到「澳門桑拿玩法」，很多人第一時間會聯想到按摩、三溫暖、熱食區，甚至還有人將之視為澳門旅遊不可或缺的一環。不過，與香港、大陸等地的桑拿相比，澳門桑拿文化可說是自成一格，從價格、玩法到服務形式都有其特',
    image: '/sauna/文案-c.png',
    imageMobile: '/sauna/文案-c.png',
    link: '/Article/macao-sauna-how',
    views: 2307,
    tags: ['澳門桑拿', '龍匯澳門按摩', '澳門按摩', '澳門劇本殺', '澳門龍匯天下'],
    collapseId: 'collapse-macao-sauna-how',
    contentBlocks: saunaArticleContentBlocks[7],
  },
  {
    id: 8,
    title: '【澳門水療指南】推薦：顏值技師×放鬆解壓×隱藏版SPA體驗全揭密！',
    description: '想在澳門來點「不一樣的放鬆」？無論你剛從賭場大殺四方、還是想找個寧靜角落讓身體徹底釋放壓力，「澳門水療」就是那道你不該錯過的祕密選項。',
    image: '/sauna/文案3-c.png',
    imageMobile: '/sauna/文案3-c.png',
    link: '/Article/macao-spa',
    views: 2278,
    tags: ['澳門桑拿', '澳門水療', '澳門劇本殺', '澳門旅遊', '澳門龍匯天下', '龍匯天下包車', '龍匯天下'],
    collapseId: 'collapse-macao-spa',
    contentBlocks: saunaArticleContentBlocks[8],
  },
  {
    id: 9,
    title: ' 澳門劇本殺，推理遊戲還是慾望遊戲?',
    description: '想在澳門玩點不一樣的劇本殺？別以為這只是燒腦推理，澳門劇本殺已進化成結合角色、情境與慾望的現場劇演。走進這場「遊戲」，你將成為慾望推理的主角，每個場景、每句台詞、每次互動，都是一場情緒與快感的試探。',
    image: '/sauna/文案-c(1).png',
    imageMobile: '/sauna/文案-c(1).png',
    link: '/Article/sauna4',
    views: 2098,
    tags: ['澳門桑拿', '澳門劇本殺', '澳門', '龍匯天下', '桑拿'],
    collapseId: 'collapse-sauna4',
    contentBlocks: saunaArticleContentBlocks[9],
  },
  {
    id: 10,
    title: '⭐ 澳門熱門桑拿推薦 TOP 8 (下）',
    description: '🌐 氹仔＆澳門本島｜頂尖高顏值澳門桑拿會所續篇（進階玩家必看）接續上文介紹的【尊貴水療】、【壹號桑拿】等四家熱店，這次我們聚焦在氹仔區的高顏值澳門桑拿、以及價格與體驗感拉滿的高端店家。若你已經厭倦常',
    image: '/sauna/250519_龍匯天下_部落格圖_下-c.jpg',
    imageMobile: '/sauna/250519_龍匯天下_部落格圖_下-c.jpg',
    link: '/Article/sauna3',
    views: 2349,
    tags: ['澳門', '澳門推薦', '澳門旅遊', '桑拿', '澳門劇本殺', '澳門桑拿', '龍匯天下'],
    collapseId: 'collapse-sauna3',
    contentBlocks: saunaArticleContentBlocks[10],
  },
  {
    id: 11,
    title: '【澳門桑拿】身為老司機的你絕對不能錯過的澳門暗黑密笈！',
    description: '本站講解的澳門桑拿都是全套桑拿，讓人心跳加速的體驗報你知，這裡也特別整理了一些各位老司機比較感興趣的問題，讓我們一起看下去吧。',
    image: '/sauna/sauna-c.jpg',
    imageMobile: '/sauna/sauna-c.jpg',
    link: '/Article/sauna',
    views: 2364,
    tags: ['澳門旅遊', '澳門', '澳門桑拿'],
    collapseId: 'collapse-sauna',
    contentBlocks: saunaArticleContentBlocks[11],
  },
];

