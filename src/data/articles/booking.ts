// Shared article data for Booking category
// Can be imported by both client and server components
import { ArticleContent } from '@/types/articleContent';
import { bookingArticleContentBlocks } from './bookingContentBlocks';

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
  content?: string; // Legacy plain text content
  contentBlocks?: ArticleContent; // New structured content blocks
}

export const bookingArticles: BookingArticle[] = [
  {
    id: 1,
    title: '【澳門訂房】終極指南！避開隱形消費+精選酒店',
    description: '計劃澳門自由行的旅客常面臨訂房價格不透明與區域選擇困難的問題。根據澳門消費者委員會統計，2023年酒店類投訴案件中，61%涉及未預先告知的附加費用，例如抵達後加收的度假村服務費或網絡使用費等等，但是不用擔心！小編都知道，這篇文章建議收藏，帶你避開各式隱形支出也帶你開心遊澳門！',
    image: '/booking/222-c.jpg',
    imageMobile: '/booking/222-c.jpg',
    link: '/Article/macao%20hotell',
    views: 2156,
    tags: ['澳門訂房', '龍匯訂房', '龍匯天下澳門訂房', '澳門訂房龍匯天下'],
    collapseId: 'collapse-macao-hotell',
    contentBlocks: bookingArticleContentBlocks[1],
  },
  {
    id: 2,
    title: '【澳門飯店】5大頂級奢華體驗｜科技×永續×藝術的極致融合',
    description: '澳門的飯店數不勝數，是不是不知道找哪家?沒問題！小編聽到你的困擾了，今天特別精挑細選澳門最不能錯過的五大奢華飯店各自的特點，信我一把接著看！總有你滿意的！',
    image: '/booking/【澳門飯店】5大頂級奢華體驗｜科技×永續×藝術的極致融合-c.jpg',
    imageMobile: '/booking/【澳門飯店】5大頂級奢華體驗｜科技×永續×藝術的極致融合-c.jpg',
    link: '/Article/macao%20hotell1',
    views: 1892,
    tags: ['澳門訂房', '澳門酒店', '龍匯天下', '澳門推薦'],
    collapseId: 'collapse-macao-hotell1',
    contentBlocks: bookingArticleContentBlocks[2],
  },
  {
    id: 3,
    title: '【澳門大倉酒店】日式極致服務進化論｜全球首獲「文化遺產級款待」認證',
    description: '看到這個標題應該已經知道我要介紹什麼了吧！沒錯，就是【澳門大倉酒店】，它可不單單只是酒店喔，這篇文章小編特別彙整了它有特色的亮點，有需要的趕緊收藏起來，一起來看看吧！',
    image: '/booking/【澳門大倉酒店】日式極致服務進化論｜全球首獲「文化遺產級款待」認證-c.jpg',
    imageMobile: '/booking/【澳門大倉酒店】日式極致服務進化論｜全球首獲「文化遺產級款待」認證-c.jpg',
    link: '/Article/macao%20dacang',
    views: 1634,
    tags: ['龍匯澳門大倉', '大倉龍匯天下', '龍匯天下大倉', '龍匯天下澳門大倉酒店'],
    collapseId: 'collapse-macao-dacang',
    contentBlocks: bookingArticleContentBlocks[3],
  },
  {
    id: 4,
    title: '【澳門訂房】最頂攻略它來了！(下)',
    description: '迫不及待要來分享【澳門訂房】懶人包啦！來到澳門的遊客怎麼能不找一間高級澳門住宿呢~每回去澳門旅行都開始找澳門住宿清單，先把小編這些口袋名單優質飯店收藏起來吧！',
    image: '/articles/【澳門訂房】最頂攻略它來了！-h.jpg',
    imageMobile: '/articles/【澳門訂房】最頂攻略它來了！-m.jpg',
    link: '/Article/wei2',
    views: 1360,
    tags: ['澳門訂房', '澳門龍匯天下', '澳門訂房找龍匯', '龍匯天下訂房', '訂房找龍匯'],
    collapseId: 'collapse-wei2',
    contentBlocks: bookingArticleContentBlocks[4],
  },
  {
    id: 5,
    title: '【澳門訂房】最頂攻略它來了！ (上)',
    description: '迫不及待要來分享【澳門訂房】懶人包啦！來到澳門的遊客怎麼能不找一間高級澳門住宿呢~每回去澳門旅行都開始找澳門住宿清單，先把小編這些口袋名單優質飯店收藏起來吧！',
    image: '/articles/【澳門訂房】最頂攻略它來了！-h.jpg',
    imageMobile: '/articles/【澳門訂房】最頂攻略它來了！-m.jpg',
    link: '/Article/wei%20i',
    views: 1735,
    tags: ['澳門訂房', '澳門親子', '澳門旅遊', '龍匯天下訂房'],
    collapseId: 'collapse-wei%201',
    contentBlocks: bookingArticleContentBlocks[5],
  },
];

