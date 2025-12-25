import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/metadata';

export const metadata: Metadata = genMeta({
  title: '澳門桑拿攻略 - 水療、按摩、劇本殺全指南',
  description: '探索澳門桑拿完整攻略，包含水療、按摩、劇本殺等娛樂場所介紹。精選澳門桑拿必看文章，從入門技巧到熱門店家推薦一次搞定，讓您的澳門之旅更加放鬆享受。',
  path: '/ArticleCategory/Sauna',
  image: '/Images/Logo.png',
});

export default function SaunaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

