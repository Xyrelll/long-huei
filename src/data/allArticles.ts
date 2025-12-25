// Consolidated article data from all categories
// This file consolidates all articles for easy access in the article detail page

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

// This will be populated by importing from category pages
// For now, we'll create a function that can be called to get all articles
export function getAllArticles(): Article[] {
  // We'll need to import articles from each category
  // Since they're not exported, we'll need to either:
  // 1. Export them from category pages, or
  // 2. Create a shared data file
  // For now, return empty - will be populated
  return [];
}

