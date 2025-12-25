import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/metadata';

export const metadata: Metadata = genMeta({
  title: '澳門旅遊攻略 - 景點、美食、住宿全指南',
  description: '探索澳門旅遊完整攻略，包含必訪景點、美食推薦、住宿選擇、交通指南等實用資訊。精選澳門自由行必看文章，從簽證辦理到行程規劃一次搞定，讓您的澳門之旅更加精彩。',
  path: '/ArticleCategory/Travel',
  image: '/Images/logo-m.png',
});

export default function TravelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

