import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/metadata';

export async function generateMetadata({
  params,
}: {
  params: { tag: string };
}): Promise<Metadata> {
  // Handle Next.js 15+ where params might be a Promise
  const resolvedParams = params instanceof Promise ? await params : params;
  const tag = resolvedParams?.tag || '';

  if (!tag) {
    return genMeta({
      title: '標籤 - 龍匯天下',
      description: '探索澳門旅遊、訂房、包車、桑拿等相關文章標籤',
      path: '/Tag',
      image: '/Images/logo-m.png',
    });
  }

  // Decode the tag name from URL
  const decodedTag = decodeURIComponent(tag);
  const encodedTag = encodeURIComponent(decodedTag);
  const tagPath = `/Tag/${encodedTag}`;

  // Create descriptive title and description based on the tag
  const title = `${decodedTag} - 標籤 | 龍匯天下`;
  const description = `查看所有標籤為「${decodedTag}」的澳門旅遊相關文章。探索澳門訂房、包車、桑拿、景點等相關內容，讓您的澳門之旅更加精彩。`;

  return genMeta({
    title,
    description,
    path: tagPath,
    image: '/Images/logo-m.png',
  });
}

export default function TagLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

