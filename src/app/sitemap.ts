import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://yourdomain.com'

  const staticPages = [
    '',
    '/booking',
    '/travel',
    '/car-service',
    '/wellness',
    '/entertainment',
    '/faq',
    '/contact',
  ]

  const travelPosts = [
    'macau-1-day',
    'macau-guide-2025',
    'macau-family',
  ]

  return [
    ...staticPages.map(path => ({
      url: `${baseUrl}${path}`,
    })),
    ...travelPosts.map(slug => ({
      url: `${baseUrl}/travel/${slug}`,
    })),
  ]
}
