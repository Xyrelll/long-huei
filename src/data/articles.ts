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
    
    // Debug: log what we got
    if (process.env.NODE_ENV === 'development') {
      console.log(`Loading ${articlesKey}, module keys:`, Object.keys(moduleData));
    }
    
    // Try to get articles from named export first
    let articles = moduleData[articlesKey] as ArticleInput[] | undefined;
    
    // If not found, try from default export
    if (!articles && moduleData.default) {
      const defaultExport = moduleData.default as Record<string, unknown>;
      articles = defaultExport[articlesKey] as ArticleInput[] | undefined;
    }
    
    // If still not found, try accessing the module directly (for client components)
    if (!articles) {
      // Try all possible keys
      const possibleKeys = Object.keys(moduleData).filter(key => 
        key.toLowerCase().includes('article') || 
        key.toLowerCase().includes(articlesKey.toLowerCase().replace('articles', ''))
      );
      
      for (const key of possibleKeys) {
        const value = moduleData[key];
        if (Array.isArray(value) && value.length > 0) {
          articles = value as ArticleInput[];
          break;
        }
      }
    }
    
    if (Array.isArray(articles) && articles.length > 0) {
      if (process.env.NODE_ENV === 'development') {
        console.log(`Successfully loaded ${articles.length} articles from ${articlesKey}`);
      }
      return articles;
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.warn(`No articles found for ${articlesKey}`);
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
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`Looking for article with slug: ${slug}`);
      console.log(`Total articles loaded: ${allArticles.length}`);
      if (allArticles.length > 0) {
        console.log(`Sample article links:`, allArticles.slice(0, 3).map(a => a.link));
      }
    }
    
    const decodedSlug = decodeURIComponent(slug);
    const normalizedSlug = slug.toLowerCase().trim();
    const normalizedDecodedSlug = decodedSlug.toLowerCase().trim();
    
    // Try multiple matching strategies
    const found = allArticles.find(
      a => {
        // Extract slug from article link (remove /Article/ prefix)
        const articleLinkSlug = a.link.replace(/^\/Article\//, '').toLowerCase().trim();
        const articleLinkSlugDecoded = decodeURIComponent(articleLinkSlug).toLowerCase().trim();
        
        // Strategy 1: Direct slug match (most common case)
        if (articleLinkSlug === normalizedSlug || 
            articleLinkSlug === normalizedDecodedSlug ||
            articleLinkSlugDecoded === normalizedSlug ||
            articleLinkSlugDecoded === normalizedDecodedSlug) {
          if (process.env.NODE_ENV === 'development') {
            console.log(`Found article by slug match: ${a.title}`);
          }
          return true;
        }
        
        // Strategy 2: Full link match
        const normalizedLink = a.link.toLowerCase().trim();
        if (normalizedLink === `/article/${normalizedSlug}` ||
            normalizedLink === `/article/${normalizedDecodedSlug}` ||
            a.link === `/Article/${slug}` ||
            a.link === `/Article/${decodedSlug}`) {
          if (process.env.NODE_ENV === 'development') {
            console.log(`Found article by link match: ${a.title}`);
          }
          return true;
        }
        
        // Strategy 3: Partial match (for URL-encoded slugs)
        if (articleLinkSlug.includes(normalizedSlug) || 
            normalizedSlug.includes(articleLinkSlug) ||
            articleLinkSlug.includes(normalizedDecodedSlug) ||
            normalizedDecodedSlug.includes(articleLinkSlug)) {
          if (process.env.NODE_ENV === 'development') {
            console.log(`Found article by partial match: ${a.title}`);
          }
          return true;
        }
        
        return false;
      }
    );
    
    if (!found && process.env.NODE_ENV === 'development') {
      console.warn(`Article not found for slug: ${slug}`);
      console.log(`Available slugs:`, allArticles.slice(0, 5).map(a => a.link.replace('/Article/', '')));
    }
    
    return found || null;
  } catch (error) {
    console.error('Error finding article by slug:', error);
    return null;
  }
}
