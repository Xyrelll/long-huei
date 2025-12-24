import FAQ from '@/components/features/FAQ/FAQ';
import { Metadata } from 'next';
import { generateMetadata } from '@/config/metadata';
import { generateFAQSchema } from '@/config/seo';

export const metadata: Metadata = generateMetadata({
  title: '常見問答',
  description: '關於澳門旅遊、訂房、包車、桑拿等服務的常見問題與解答',
  path: '/faq',
});

export default function FAQPage() {
  const faqData = [
    {
      question: '澳門旅遊安全嗎？',
      answer: '澳門是亞洲最安全的旅遊城市之一，連續7年名列亞洲前三安全城市，犯罪率低，夜間安全感高達94%。',
    },
    {
      question: '治安比台灣好嗎？',
      answer: '竊盜率低、詐騙破獲率高，反應快。',
    },
    {
      question: '女生可以一人旅遊嗎？',
      answer: '飯店有女性專層，夜間搭正規車就安心。',
    },
    {
      question: '遇到緊急情況怎麼辦？',
      answer: '打緊急熱線、找警局或聯繫飯店保全即可。',
    },
    {
      question: '澳門必去哪？',
      answer: '大三巴、媽閣廟、旅遊塔、teamLab、議事亭前地。',
    },
    {
      question: '有刺激或浪漫活動嗎？',
      answer: '空中漫步、雙人跳傘、永利纜車晚餐看水舞！',
    },
    {
      question: '必吃美食？',
      answer: '安德魯葡撻、義順燉奶、永利米其林晚餐。',
    },
    {
      question: '什麼時候去最好？',
      answer: '春秋最舒適，夏季注意防曬雨具。',
    },
    {
      question: '交通怎麼省？',
      answer: '澳門通搭公車＋免費酒店接駁最方便！',
    },
  ];

  const faqSchema = generateFAQSchema(faqData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="relative w-full min-h-screen bg-black">
        <FAQ />
      </div>
    </>
  );
}

