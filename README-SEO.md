# SEO Setup Documentation

This project includes comprehensive SEO optimization for Next.js.

## Implemented SEO Features

### 1. Sitemap (`src/app/sitemap.ts`)
- Automatically generates XML sitemap
- Includes all main pages and article routes
- Configurable priority and change frequency
- Accessible at `/sitemap.xml`

### 2. Robots.txt (`src/app/robots.ts`)
- Automatically generates robots.txt
- Allows all search engines
- Disallows admin and API routes
- Points to sitemap
- Accessible at `/robots.txt`

### 3. Metadata System (`src/lib/metadata.ts`)
- Centralized metadata generation
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Multi-language support
- Structured metadata for all pages

### 4. Structured Data (JSON-LD)
- Organization schema in root layout
- WebSite schema on homepage
- FAQPage schema for FAQ pages
- Article schema utilities
- Breadcrumb schema utilities
- LocalBusiness schema utilities

### 5. Enhanced Next.js Config
- Image optimization (WebP, AVIF)
- Compression enabled
- Security headers
- ETags for caching
- Removed powered-by header

### 6. PWA Support
- Web manifest (`src/app/manifest.ts`)
- Theme colors
- Icons configuration
- Standalone display mode

## Usage

### Adding Metadata to Pages

```typescript
import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Page Title',
  description: 'Page description',
  path: '/page-path',
  image: '/custom-image.jpg', // optional
  noIndex: false, // optional, default false
});
```

### Adding Structured Data

```typescript
import { generateFAQSchema } from '@/lib/seo';

const faqSchema = generateFAQSchema([
  { question: 'Question?', answer: 'Answer.' },
]);

// In your component:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
/>
```

### SEO Utility Functions

Available in `src/lib/seo.ts`:
- `generateBreadcrumbSchema()` - For breadcrumb navigation
- `generateArticleSchema()` - For blog posts/articles
- `generateFAQSchema()` - For FAQ pages
- `generateLocalBusinessSchema()` - For business listings

## Required Assets

Make sure to add these files to `/public`:
- `/favicon.ico`
- `/favicon-16x16.png`
- `/favicon-32x32.png`
- `/apple-touch-icon.png`
- `/favicon-192x192.png`
- `/favicon-512x512.png`
- `/og-image.jpg` (1200x630px recommended)
- `/logo.png`

## Verification

### Google Search Console
1. Add property: https://www.long-huei.com
2. Verify ownership (add verification code to `src/lib/metadata.ts`)
3. Submit sitemap: https://www.long-huei.com/sitemap.xml

### Testing
- Test sitemap: https://www.long-huei.com/sitemap.xml
- Test robots.txt: https://www.long-huei.com/robots.txt
- Test structured data: https://search.google.com/test/rich-results
- Test Open Graph: https://www.opengraph.xyz/

## Best Practices

1. **Unique Titles**: Each page should have a unique, descriptive title
2. **Meta Descriptions**: Keep under 160 characters, include keywords
3. **Images**: Use descriptive alt text, optimize file sizes
4. **URLs**: Use clean, descriptive URLs
5. **Internal Linking**: Link related content
6. **Mobile-First**: Ensure responsive design
7. **Page Speed**: Optimize images, minimize JavaScript
8. **HTTPS**: Always use HTTPS in production

## Next Steps

1. Add verification codes to `src/lib/metadata.ts`
2. Create and add favicon files
3. Create OG image (1200x630px)
4. Add social media links to structured data
5. Set up Google Analytics
6. Configure Google Search Console
7. Submit sitemap to search engines


