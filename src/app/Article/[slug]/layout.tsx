import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/metadata';
import { findArticleBySlug } from '@/data/articles';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const article = await findArticleBySlug(params.slug);
    
    if (!article) {
      // Debug logging in development
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Article not found for slug: ${params.slug}`);
      }
      // Fallback metadata if article not found
      return genMeta({
        title: '文章 - 龍匯天下',
        description: '探索澳門旅遊、訂房、包車、桑拿等相關文章',
        path: `/Article/${params.slug}`,
        image: 'https://longhuei.netlify.app/Images/Logo.png',
      });
    }

    // Use article image, fallback to mobile image, then logo
    // Convert relative paths to absolute URLs for Open Graph
    let articleImage = article.image || article.imageMobile || '/Images/Logo.png';
    if (articleImage.startsWith('/')) {
      articleImage = `https://longhuei.netlify.app${articleImage}`;
    } else if (!articleImage.startsWith('http')) {
      articleImage = `https://longhuei.netlify.app/${articleImage}`;
    }

    if (process.env.NODE_ENV === 'development') {
      console.log(`Generated metadata for article: ${article.title}, image: ${articleImage}`);
    }

    return genMeta({
      title: article.title,
      description: article.description,
      path: article.link,
      image: articleImage,
    });
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Fallback on error
    return genMeta({
      title: '文章 - 龍匯天下',
      description: '探索澳門旅遊、訂房、包車、桑拿等相關文章',
      path: `/Article/${params.slug}`,
      image: 'https://longhuei.netlify.app/Images/Logo.png',
    });
  }
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

