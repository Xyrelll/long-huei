// Shared article data for Booking category
// Can be imported by both client and server components

export interface BookingArticle {
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

export const bookingArticles: BookingArticle[] = [
  {
    id: 1,
    title: '【澳門訂房】最頂攻略它來了！',
    description: '澳門作為世界知名的旅遊勝地，擁有眾多頂級酒店和度假村。無論是奢華的五星級酒店還是經濟實惠的精品旅館，澳門都能滿足不同旅客的需求。本文將為您提供最完整的澳門訂房攻略，包含酒店選擇、訂房技巧、優惠資訊等實用內容，讓您的澳門之旅更加完美。',
    image: '/booking/222-c.jpg',
    imageMobile: '/booking/222-c.jpg',
    link: '/Article/macau-booking',
    views: 2156,
    tags: ['澳門訂房', '龍匯天下訂房', '澳門推薦', '澳門旅遊'],
    collapseId: 'collapse-macau-booking',
  },
  {
    id: 2,
    title: '澳門酒店推薦｜精選5大必住度假村',
    description: '澳門擁有世界級的度假村和酒店，從威尼斯人、新濠天地到永利皇宮，每一間都提供獨特的住宿體驗。本文精選5大必住度假村，詳細介紹各酒店的設施、服務、地理位置和特色，幫助您選擇最適合的住宿選擇。',
    image: '/booking/【澳門飯店】5大頂級奢華體驗｜科技×永續×藝術的極致融合-c.jpg',
    imageMobile: '/booking/【澳門飯店】5大頂級奢華體驗｜科技×永續×藝術的極致融合-c.jpg',
    link: '/Article/macau-hotels',
    views: 1892,
    tags: ['澳門訂房', '澳門酒店', '龍匯天下', '澳門推薦'],
    collapseId: 'collapse-macau-hotels',
  },
  {
    id: 3,
    title: '澳門訂房省錢攻略｜最佳預訂時機與優惠技巧',
    description: '想要在澳門訂到最划算的酒店？本文分享專業的訂房省錢技巧，包括最佳預訂時機、優惠碼使用、會員福利、淡旺季價格差異等實用資訊，讓您用最優惠的價格享受最優質的住宿體驗。',
    image: '/booking/【澳門大倉酒店】日式極致服務進化論｜全球首獲「文化遺產級款待」認證-c.jpg',
    imageMobile: '/booking/【澳門大倉酒店】日式極致服務進化論｜全球首獲「文化遺產級款待」認證-c.jpg',
    link: '/Article/macau-booking-tips',
    views: 1634,
    tags: ['澳門訂房', '澳門旅遊', '龍匯天下訂房', '澳門推薦'],
    collapseId: 'collapse-macau-booking-tips',
  },
  {
    id: 4,
    title: '澳門住宿區域指南｜選對地點讓旅程更完美',
    description: '澳門雖然面積不大，但不同區域各有特色。從路氹城的度假村區到澳門半島的歷史文化區，每個區域都提供不同的住宿體驗。本文詳細介紹各區域的特色、交通便利性和適合的旅客類型，幫助您選擇最理想的住宿地點。',
    image: '/articles/【澳門訂房】最頂攻略它來了！-h.jpg',
    imageMobile: '/articles/【澳門訂房】最頂攻略它來了！-m.jpg',
    link: '/Article/macau-areas',
    views: 1521,
    tags: ['澳門訂房', '澳門住宿', '澳門旅遊', '龍匯天下'],
    collapseId: 'collapse-macau-areas',
  },
  {
    id: 5,
    title: '澳門親子住宿推薦｜適合家庭的酒店選擇',
    description: '帶著孩子出遊，住宿選擇格外重要。澳門有許多適合親子同遊的酒店，提供兒童設施、家庭房型、親子活動等服務。本文推薦最適合家庭的澳門住宿選擇，讓您的親子之旅更加輕鬆愉快。',
    image: '/articles/【澳門訂房】最頂攻略它來了！-h.jpg',
    imageMobile: '/articles/【澳門訂房】最頂攻略它來了！-m.jpg',
    link: '/Article/macau-family',
    views: 1347,
    tags: ['澳門訂房', '澳門親子', '澳門旅遊', '龍匯天下訂房'],
    collapseId: 'collapse-macau-family',
  },
];

