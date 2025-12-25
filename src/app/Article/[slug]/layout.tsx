import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/metadata';

// Import all article arrays
import { bookingArticles } from '@/app/ArticleCategory/Booking/page';
import { travelArticles } from '@/app/ArticleCategory/Travel/page';
import { rentCarArticles } from '@/app/ArticleCategory/RentCar/page';
import { saunaArticles } from '@/app/ArticleCategory/Sauna/page';
import { entertainmentArticles } from '@/app/ArticleCategory/Entertainment/page';
import { questionArticles } from '@/app/ArticleCategory/Question/page';

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  imageMobile: string;
  link: string;
  views: number;
  tags?: string[];
  collapseId: string;
  category?: string;
}

// Type for article inputs (all article types have the same structure)
type ArticleInput = Omit<Article, 'category'>;

// Helper function to get all articles
function getAllArticles(): Article[] {
  return [
    ...(bookingArticles || []).map((a: ArticleInput): Article => ({ ...a, category: '訂房' })),
    ...(travelArticles || []).map((a: ArticleInput): Article => ({ ...a, category: '旅遊' })),
    ...(rentCarArticles || []).map((a: ArticleInput): Article => ({ ...a, category: '包車' })),
    ...(saunaArticles || []).map((a: ArticleInput): Article => ({ ...a, category: '桑拿' })),
    ...(entertainmentArticles || []).map((a: ArticleInput): Article => ({ ...a, category: '其他娛樂' })),
    ...(questionArticles || []).map((a: ArticleInput): Article => ({ ...a, category: '常見問答' })),
  ];
}

// Helper function to find article by slug
function findArticleBySlug(slug: string): Article | null {
  const allArticles = getAllArticles();
  const decodedSlug = decodeURIComponent(slug);
  
  return allArticles.find(
    a => {
      const articleLink = a.link.replace('/Article/', '');
      return articleLink === slug || 
             articleLink === decodedSlug ||
             articleLink.includes(slug) ||
             articleLink.includes(decodedSlug) ||
             a.link === `/Article/${slug}` ||
             a.link === `/Article/${decodedSlug}`;
    }
  ) || null;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = findArticleBySlug(params.slug);
  
  if (!article) {
    // Fallback metadata if article not found
    return genMeta({
      title: '文章 - 龍匯天下',
      description: '探索澳門旅遊、訂房、包車、桑拿等相關文章',
      path: `/Article/${params.slug}`,
      image: '/Images/Logo.png',
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

  return genMeta({
    title: article.title,
    description: article.description,
    path: article.link,
    image: articleImage,
  });
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

