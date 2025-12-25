// Consolidated article data from all categories

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
  content?: string;
}

// Import articles from each category
// Note: In a real app, these would be imported from separate files
// For now, we'll define them here or fetch dynamically

export const getAllArticles = (): Article[] => {
  // This will be populated by fetching from all category pages
  // For now, return empty array - articles will be fetched dynamically
  return [];
};

