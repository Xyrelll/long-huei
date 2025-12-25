// Shared article data for Entertainment category
// Can be imported by both client and server components

export interface EntertainmentArticle {
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

export const entertainmentArticles: EntertainmentArticle[] = [
  {
    id: 1,
    title: '澳門怎麼玩？最新深度玩法大公開！',
    description: '澳門遠不止賭場和歷史遺跡，這座城市正以全新面貌迎接旅客。小編推薦這些與眾不同的體驗方式：',
    image: '/articles/251125-h.jpg',
    imageMobile: '/articles/251125-m.jpg',
    link: '/Article/macao%20play',
    views: 717,
    tags: ['澳門訂房', '澳門龍匯', '龍匯天下包車'],
    collapseId: 'collapse-macao-play',
  },
  {
    id: 2,
    title: '澳門水上樂園｜暢玩夏日的親子與朋友必訪景點',
    description: '提到澳門，很多人第一時間想到的是大三巴、美食或世界級的酒店，但其實還有一個不能錯過的玩樂去處，那就是 澳門水上樂園。炎炎夏日，最適合和家人朋友一起暢玩水上設施，體驗刺激又清涼的快感。無論是親子家庭、情',
    image: '/entertainment/waterpark-c.jpg',
    imageMobile: '/entertainment/waterpark-c.jpg',
    link: '/Article/macao-waterpark',
    views: 1119,
    tags: ['澳門包車', '澳門水上樂園', '澳門旅遊'],
    collapseId: 'collapse-macao-waterpark',
  },
  {
    id: 3,
    title: '澳門百老匯：地道美食與娛樂表演的魅力熱點',
    description: '說到澳門旅遊，不得不提「澳門百老匯」這個集美食、娛樂與文化於一體的熱門地點。無論是自由行旅客還是家庭出遊，澳門百老匯都是不可錯過的行程之一。它不僅擁有豐富多元的地道美食，更有精彩不斷的現場表演與舒適的',
    image: '/entertainment/百老匯-c.png',
    imageMobile: '/entertainment/百老匯-c.png',
    link: '/Article/bailaohuei',
    views: 1358,
    tags: ['澳門百老匯', '百老匯', '龍匯澳們百老匯'],
    collapseId: 'collapse-bailaohuei',
  },
  {
    id: 4,
    title: '【澳門永利】深度指南｜避開觀光客的質感玩法',
    description: '藝術、夜景與在地融合的極致體驗，這可不是一般來【澳門永利】的觀光客能夠擁有的，但經過小編的整理，只要看完這篇文章，你就懂啦，走起！',
    image: '/entertainment/【澳門永利】深度指南｜避開觀光客的質感玩法-c.jpg',
    imageMobile: '/entertainment/【澳門永利】深度指南｜避開觀光客的質感玩法-c.jpg',
    link: '/Article/MACAO%20yongliii',
    views: 1294,
    tags: ['澳門永利龍匯', '龍匯澳門永利', '龍匯天下永利', '永利澳門龍匯天下'],
    collapseId: 'collapse-macao-yongliii',
  },
  {
    id: 5,
    title: '【澳門永利】最淺顯易懂的遊玩寶典！',
    description: '想在澳門永利享受頂級住宿，卻擔心荷包失血或人擠人？2024年實測發現，80%台灣旅客直接官網訂房，都2025年了，可千萬別再這麼做！為什麼呢?文末我再告訴你~',
    image: '/entertainment/【澳門永利】最淺顯易懂的遊玩寶典！-c.jpg',
    imageMobile: '/entertainment/【澳門永利】最淺顯易懂的遊玩寶典！-c.jpg',
    link: '/Article/macao%20yongli',
    views: 1324,
    tags: ['澳門永利', '龍匯澳門永利', '永利澳門龍匯天下', '龍匯天下澳門永利'],
    collapseId: 'collapse-macao-yongli',
  },
  {
    id: 6,
    title: '【澳門水舞間】超絕視覺震撼！給你不得不去的理由！',
    description: '來到澳門旅遊最不能錯過的就是《水舞間》，耗資超過二十億港元，是全球最壯觀最大型的水上匯演舞台劇，還曾榮獲2011年度「HKMA/TVB 傑出市場策劃獎」金獎；表演橋段結合高難度特技、絢爛炫目燈光、特殊',
    image: '/articles/【澳門水舞間】超絕視覺震撼！給你不得不去的理由！-h.jpg',
    imageMobile: '/articles/【澳門水舞間】超絕視覺震撼！給你不得不去的理由！-m.jpg',
    link: '/Article/macao%20water',
    views: 1455,
    tags: ['澳門水舞間', '龍匯澳門水舞間', '水舞間龍匯天下', '龍匯水舞間'],
    collapseId: 'collapse-macao-water',
  },
  {
    id: 7,
    title: '【澳門按摩】2025老司機指南｜6大隱密技法、情侶私房套餐、感官覺醒暗號',
    description: '澳門的夜，指尖暗藏玄機！半島小巷裡的 「18+沉浸式按摩」 ，用熱石與精油解鎖你不敢說的渴望：雙人鴛鴦浴缸暗門、角色扮演情境理療、VIP密室筋膜調教... ',
    image: '/entertainment/【澳門按摩】2025老司機指南｜6大隱密技法、情侶私房套餐、感官覺醒暗號-c.jpg',
    imageMobile: '/entertainment/【澳門按摩】2025老司機指南｜6大隱密技法、情侶私房套餐、感官覺醒暗號-c.jpg',
    link: '/Article/macao%20massage2',
    views: 1994,
    tags: ['澳門按摩', '澳門龍匯按摩', '龍匯天下按摩', '澳門龍匯天下按摩'],
    collapseId: 'collapse-macao-massage2',
  },
  {
    id: 8,
    title: '【澳門美高梅】必玩6大秘境、隱藏免費福利、美食省錢密技',
    description: '【澳門美高梅】不只奢華賭場！從海底藝術殿堂到空中糖雕塑、免費水上大秀，這座娛樂王國藏著連在地人都驚豔的玩法。教你用賭場積分換免費下午茶、解鎖房客專屬機位，連非住客都能爽玩一整天！',
    image: '/entertainment/【澳門美高梅】必玩6大秘境、隱藏免費福利、美食省錢密技-c.jpg',
    imageMobile: '/entertainment/【澳門美高梅】必玩6大秘境、隱藏免費福利、美食省錢密技-c.jpg',
    link: '/Article/macao%20meigaomei',
    views: 1880,
    tags: ['澳門美高梅', '美高梅澳門龍匯', '龍匯美高梅', '龍匯天下澳門美高梅'],
    collapseId: 'collapse-macao-meigaomei',
  },
  {
    id: 9,
    title: '【澳門賭場】攻略來了！不賭錢也能嗨玩三天三夜的隱藏玩法大公開！',
    description: '誰說【澳門賭場】只有老虎機和牌桌？這座東方拉斯維加斯藏著太多你不知道的驚喜！今天就跟著小編解鎖【澳門賭場】的另類玩法，連本地人都驚呼"原來還能這樣玩"～',
    image: '/articles/【澳門賭場】攻略來了！不賭錢也能嗨玩三天三夜的隱藏玩法大公開！-h.jpg',
    imageMobile: '/articles/【澳門賭場】攻略來了！不賭錢也能嗨玩三天三夜的隱藏玩法大公開！-h.jpg',
    link: '/Article/macao%20casino',
    views: 2104,
    tags: ['澳門賭場攻略', '龍匯天下澳門賭場', '澳門賭場龍匯', '澳門賭場哪家好'],
    collapseId: 'collapse-macao-casino',
  },
  {
    id: 10,
    title: '【澳門永利】奢華度假攻略，解鎖不賭也能玩翻天的秘密玩法！',
    description: '澳門永利可不只是賭場那麽簡單！這座金光閃閃的度假王國，藏著米其林星星、夢幻噴泉秀和藝術珍品。今天就讓小編帶你解鎖【澳門永利】度假村的正確打開方式，就算不碰老虎機也能玩到捨不得回家～',
    image: '/entertainment/【澳門永利】奢華度假攻略，解鎖不賭也能玩翻天的秘密玩法！-c.jpg',
    imageMobile: '/entertainment/【澳門永利】奢華度假攻略，解鎖不賭也能玩翻天的秘密玩法！-c.jpg',
    link: '/Article/macao%20wynn',
    views: 1315,
    tags: ['澳門永利龍匯天下', '永利澳門龍匯', '澳門永利有什麼好玩', '永利龍匯天下'],
    collapseId: 'collapse-macao-wynn',
  },
];

