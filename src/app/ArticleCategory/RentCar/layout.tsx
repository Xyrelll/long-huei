import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/metadata';

export const metadata: Metadata = genMeta({
  title: '澳門包車服務 - 專車接送、機場接送全指南',
  description: '探索澳門包車服務完整攻略，包含專車接送、機場接送、一日遊包車等實用資訊。精選澳門包車必看文章，從預訂方式到行程規劃一次搞定，讓您的澳門之旅更加輕鬆便利。',
  path: '/ArticleCategory/RentCar',
  image: '/Images/Logo.png',
});

export default function RentCarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

