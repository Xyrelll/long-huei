// Shared article data for Question category
// Can be imported by both client and server components
import { ArticleContent } from '@/types/articleContent';
import { questionArticleContentBlocks } from './questionContentBlocks';

export interface QuestionArticle {
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

export const questionArticles: QuestionArticle[] = [
  {
    id: 1,
    title: '【澳門換錢】避坑攻略！匯率最好+免手續費據點實測',
    description: '在澳門自由行，換匯是影響旅費的關鍵！2025年實測全澳30+個換錢點，結合匯率、安全性與隱藏技巧，整理這份最新攻略。掌握這些情報，比用信用卡多省8%旅費！',
    image: '/question/250915_money-c.jpg',
    imageMobile: '/question/250915_money-c.jpg',
    link: '/Article/money-exchange',
    views: 2333,
    tags: ['澳門龍匯天下', '澳門換錢', '澳門旅遊找龍匯', '澳門訂房'],
    collapseId: 'collapse-money-exchange',
    contentBlocks: questionArticleContentBlocks[1],
  },
  {
    id: 2,
    title: '【澳門通】完整攻略：交通、消費、景點優惠一卡整合',
    description: '澳門通（Macau Pass）是旅客探索澳門的智慧神卡，2025年全面升級後，整合交通、消費、景點門票等多元功能，成為自由行省錢省時的必備工具。本文從最新功能、使用範圍到隱藏優惠，帶你掌握這張小卡的無',
    image: '/question/macao_pass-c.jpg',
    imageMobile: '/question/macao_pass-c.jpg',
    link: '/Article/macao%20pass',
    views: 2513,
    tags: ['澳門通龍匯天下', '龍匯澳門通', '澳門龍匯天下澳門通', '龍匯天下澳門通'],
    collapseId: 'collapse-macao-pass',
    contentBlocks: questionArticleContentBlocks[2],
  },
  {
    id: 3,
    title: '【澳門旅遊安全嗎？】2025重點解析',
    description: '澳門連續7年穩居「亞洲最安全旅遊城市」前三名，根據2024年最新數據顯示，每10萬旅客犯罪率僅1.5件。本文建議收藏，廢話不多說，讓小編帶你快速掌握安全要點。',
    image: '/articles/250513_龍匯天下_部落格圖-h.jpg',
    imageMobile: '/articles/250513_龍匯天下_部落格圖-h.jpg',
    link: '/Article/safe1',
    views: 2493,
    tags: ['澳門旅遊', '澳門安全', '澳門'],
    collapseId: 'collapse-safe1',
    contentBlocks: questionArticleContentBlocks[3],
  },
];

