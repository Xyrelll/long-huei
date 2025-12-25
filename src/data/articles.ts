// Shared article data that can be imported in both client and server components
// This file consolidates all articles from different categories

export interface Article {
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

// Helper function to safely get articles from a module
async function getArticlesFromModule(
  modulePromise: Promise<Record<string, unknown>>, 
  articlesKey: string
): Promise<Article[]> {
  try {
    const moduleData = await modulePromise;
    // Try to get articles from named export first, then from default export
    let articles = moduleData[articlesKey] as ArticleInput[] | undefined;
    if (!articles && moduleData.default) {
      const defaultExport = moduleData.default as Record<string, unknown>;
      articles = defaultExport[articlesKey] as ArticleInput[] | undefined;
    }
    
    if (Array.isArray(articles)) {
      return articles;
    }
    return [];
  } catch (error) {
    console.error(`Error loading ${articlesKey}:`, error);
    return [];
  }
}

// Helper function to get all articles with categories (async for dynamic imports)
export async function getAllArticles(): Promise<Article[]> {
  const [
    booking,
    travel,
    rentCar,
    sauna,
    entertainment,
    question,
  ] = await Promise.all([
    getArticlesFromModule(import('@/app/ArticleCategory/Booking/page'), 'bookingArticles'),
    getArticlesFromModule(import('@/app/ArticleCategory/Travel/page'), 'travelArticles'),
    getArticlesFromModule(import('@/app/ArticleCategory/RentCar/page'), 'rentCarArticles'),
    getArticlesFromModule(import('@/app/ArticleCategory/Sauna/page'), 'saunaArticles'),
    getArticlesFromModule(import('@/app/ArticleCategory/Entertainment/page'), 'entertainmentArticles'),
    getArticlesFromModule(import('@/app/ArticleCategory/Question/page'), 'questionArticles'),
  ]);

  return [
    ...booking.map((a: ArticleInput): Article => ({ ...a, category: '訂房' })),
    ...travel.map((a: ArticleInput): Article => ({ ...a, category: '旅遊' })),
    ...rentCar.map((a: ArticleInput): Article => ({ ...a, category: '包車' })),
    ...sauna.map((a: ArticleInput): Article => ({ ...a, category: '桑拿' })),
    ...entertainment.map((a: ArticleInput): Article => ({ ...a, category: '其他娛樂' })),
    ...question.map((a: ArticleInput): Article => ({ ...a, category: '常見問答' })),
  ];
}

// Helper function to find article by slug
export async function findArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const allArticles = await getAllArticles();
    const decodedSlug = decodeURIComponent(slug);
    const normalizedSlug = slug.toLowerCase().trim();
    const normalizedDecodedSlug = decodedSlug.toLowerCase().trim();
    
    // Try multiple matching strategies
    const found = allArticles.find(
      a => {
        // Extract slug from article link
        const articleLink = a.link.replace('/Article/', '').toLowerCase().trim();
        const articleLinkDecoded = decodeURIComponent(articleLink).toLowerCase().trim();
        
        // Exact matches
        if (articleLink === normalizedSlug || 
            articleLink === normalizedDecodedSlug ||
            articleLinkDecoded === normalizedSlug ||
            articleLinkDecoded === normalizedDecodedSlug) {
          return true;
        }
        
        // Partial matches (handle URL encoding)
        if (articleLink.includes(normalizedSlug) || 
            articleLink.includes(normalizedDecodedSlug) ||
            normalizedSlug.includes(articleLink) ||
            normalizedDecodedSlug.includes(articleLink)) {
          return true;
        }
        
        // Full link matches
        if (a.link === `/Article/${slug}` || 
            a.link === `/Article/${decodedSlug}` ||
            a.link.toLowerCase() === `/article/${normalizedSlug}` ||
            a.link.toLowerCase() === `/article/${normalizedDecodedSlug}`) {
          return true;
        }
        
        return false;
      }
    );
    
    return found || null;
  } catch (error) {
    console.error('Error finding article by slug:', error);
    return null;
  }
}
