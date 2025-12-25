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

// Helper function to get all articles with categories
// Now imports directly from shared data files (not client components)
export async function getAllArticles(): Promise<Article[]> {
  try {
    // Import directly from shared data files (these are plain TypeScript files, not client components)
    const [
      { bookingArticles },
      { travelArticles },
      { rentCarArticles },
      { saunaArticles },
      { entertainmentArticles },
      { questionArticles },
    ] = await Promise.all([
      import('@/data/articles/booking'),
      import('@/data/articles/travel'),
      import('@/data/articles/rentCar'),
      import('@/data/articles/sauna'),
      import('@/data/articles/entertainment'),
      import('@/data/articles/question'),
    ]);

    // Combine all articles with categories
    const allArticles: Article[] = [
      ...bookingArticles.map((a: ArticleInput): Article => ({ ...a, category: '訂房' })),
      ...travelArticles.map((a: ArticleInput): Article => ({ ...a, category: '旅遊' })),
      ...rentCarArticles.map((a: ArticleInput): Article => ({ ...a, category: '包車' })),
      ...saunaArticles.map((a: ArticleInput): Article => ({ ...a, category: '桑拿' })),
      ...entertainmentArticles.map((a: ArticleInput): Article => ({ ...a, category: '其他娛樂' })),
      ...questionArticles.map((a: ArticleInput): Article => ({ ...a, category: '常見問答' })),
    ];

    return allArticles;
  } catch (error) {
    console.error('Error loading all articles:', error);
    return [];
  }
}

// Helper function to find article by slug
export async function findArticleBySlug(slug: string): Promise<Article | null> {
  try {
    // Guard against undefined slug
    if (!slug || typeof slug !== 'string') {
      return null;
    }

    const allArticles = await getAllArticles();
    
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
          return true;
        }
        
        // Strategy 2: Full link match
        const normalizedLink = a.link.toLowerCase().trim();
        if (normalizedLink === `/article/${normalizedSlug}` ||
            normalizedLink === `/article/${normalizedDecodedSlug}` ||
            a.link === `/Article/${slug}` ||
            a.link === `/Article/${decodedSlug}`) {
          return true;
        }
        
        // Strategy 3: Partial match (for URL-encoded slugs)
        if (articleLinkSlug.includes(normalizedSlug) || 
            normalizedSlug.includes(articleLinkSlug) ||
            articleLinkSlug.includes(normalizedDecodedSlug) ||
            normalizedDecodedSlug.includes(articleLinkSlug)) {
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
