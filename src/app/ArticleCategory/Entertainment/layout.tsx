import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/metadata';

export const metadata: Metadata = genMeta({
  title: '澳門其他娛樂攻略 - 水舞間、百老匯、美高梅全指南',
  description: '探索澳門其他娛樂完整攻略，包含水舞間、百老匯、美高梅、永利等娛樂場所介紹。精選澳門娛樂必看文章，從表演節目到娛樂設施一次搞定，讓您的澳門之旅更加精彩。',
  path: '/ArticleCategory/Entertainment',
  image: '/Images/logo-m.png',
});

export default function EntertainmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

