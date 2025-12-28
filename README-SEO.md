# SEO Setup Documentation

This project includes comprehensive SEO optimization for Next.js with dynamic metadata generation, structured data, and proper page-level configurations.

## Implemented SEO Features

### 1. Sitemap
- **Static Sitemap**: `public/sitemap.xml` - Manually maintained XML sitemap with all pages and articles
- **Dynamic Sitemap** (Optional): `src/app/sitemap.ts` - Can generate sitemap dynamically
- Includes all main pages, category pages, and article routes
- Configurable priority and change frequency
- Accessible at `/sitemap.xml`

### 2. Robots.txt (`src/app/robots.ts`)
- Automatically generates robots.txt dynamically
- Allows all user agents by default
- Disallows `/api/`, `/admin/`, `/_next/` paths
- GoogleBot-specific rules
- Points to sitemap location
- Accessible at `/robots.txt`

### 3. Metadata System (`src/config/metadata.ts`)
- **Centralized metadata generation** via `generateMetadata()` function
- **Open Graph tags** for social sharing (title, description, image, type, locale)
- **Twitter Card support** (summary_large_image)
- **Canonical URLs** to prevent duplicate content
- **Multi-language support** (zh-TW, zh-CN, en-US alternate links)
- **Robots meta tags** with GoogleBot-specific rules
- **Format detection** settings (email, address, telephone)
- **Verification codes** support (Google, Yandex, Yahoo)
- **Automatic image path conversion** (relative to absolute URLs)
- **Default keywords** for Macau tourism-related content

### 4. Structured Data (Schema.org / JSON-LD)

**Root Layout Structured Data:**
- **TravelAgency** schema in `src/app/layout.tsx`
- Includes organization name, description, logo
- Contact point information
- Social media links (sameAs)

**SEO Utilities** (`src/config/seo.ts`):
- `generateBreadcrumbSchema()` - BreadcrumbList schema for navigation
- `generateArticleSchema()` - Article schema with publisher information
- `generateFAQSchema()` - FAQPage schema for rich snippets
- `generateLocalBusinessSchema()` - LocalBusiness schema for business listings

### 5. Enhanced Next.js Config (`next.config.ts`)
- **Image optimization**: AVIF and WebP formats
- **Device sizes**: 640, 750, 828, 1080, 1200, 1920, 2048, 3840
- **Image sizes**: 16, 32, 48, 64, 96, 128, 256, 384
- **Compression enabled**
- **Security headers**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, X-DNS-Prefetch-Control
- **ETags for caching**
- **Removed powered-by header**

### 6. PWA Support
- **Web manifest**: `src/app/manifest.ts` - Dynamic manifest generation
- **Static manifest**: `public/site.webmanifest` - Also available
- **Theme color**: `#F5CA69` (Primary Gold)
- **Background color**: `#000000` (Black)
- **Icons**: 192x192 and 512x512 sizes
- **Standalone display mode**
- Accessible at `/manifest.json`

### 7. Page-Level Metadata
Each route can define its own metadata:
- **Article pages**: Dynamic metadata from article data
- **Category pages**: Category-specific titles and descriptions
- **Tag pages**: Tag-based metadata
- All use centralized `generateMetadata()` utility

## Usage

### Adding Metadata to Pages

#### Static Metadata (Layout File)

```typescript
// src/app/YourPage/layout.tsx
import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/metadata';

export const metadata: Metadata = genMeta({
  title: 'Page Title',
  description: 'Page description for SEO',
  path: '/YourPage',
  image: '/path/to/og-image.jpg', // optional, auto-converts to absolute URL
  noIndex: false, // optional, default false
});

export default function YourPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

#### Dynamic Metadata (Article Pages)

```typescript
// src/app/Article/[slug]/layout.tsx
import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/metadata';
import { findArticleBySlug } from '@/data/articles';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params;
  const slug = resolvedParams?.slug || '';
  const article = await findArticleBySlug(slug);

  if (!article) {
    return genMeta({
      title: 'Article Not Found',
      description: 'The requested article could not be found',
      path: `/Article/${slug}`,
    });
  }

  return genMeta({
    title: article.title,
    description: article.description,
    path: article.link,
    image: article.image || article.imageMobile,
  });
}
```

### Adding Structured Data

#### Article Schema

```typescript
import { generateArticleSchema } from '@/config/seo';

const articleSchema = generateArticleSchema({
  title: 'Article Title',
  description: 'Article description',
  image: '/article-image.jpg',
  datePublished: '2025-01-01',
  dateModified: '2025-01-02',
  author: '龍匯天下',
  url: 'https://long-huei.vercel.app/Article/article-slug',
});

// In your component:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(articleSchema),
  }}
/>
```

#### FAQ Schema

```typescript
import { generateFAQSchema } from '@/config/seo';

const faqSchema = generateFAQSchema([
  { question: 'What is this?', answer: 'This is the answer.' },
  { question: 'How does it work?', answer: 'It works like this.' },
]);

// In your component:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
/>
```

#### Breadcrumb Schema

```typescript
import { generateBreadcrumbSchema } from '@/config/seo';

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://long-huei.vercel.app/' },
  { name: 'Articles', url: 'https://long-huei.vercel.app/ArticleCategory/Travel' },
  { name: 'Article Title', url: 'https://long-huei.vercel.app/Article/slug' },
]);

// In your component:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
/>
```

### Client-Side Metadata Updates

For dynamic content that changes after page load:

```typescript
import PageMetadata from '@/components/SEO/PageMetadata';

export default function YourComponent() {
  return (
    <>
      <PageMetadata
        title="Dynamic Page Title"
        description="Dynamic page description"
        url="https://long-huei.vercel.app/your-page"
        image="/path/to/image.jpg"
      />
      {/* Your content */}
    </>
  );
}
```

### SEO Utility Functions

Available in `src/config/seo.ts`:

- **`generateBreadcrumbSchema(items: BreadcrumbItem[])`** - For breadcrumb navigation
  - Returns BreadcrumbList schema
  - Automatically numbers items

- **`generateArticleSchema({ title, description, image, datePublished, dateModified, author, url })`** - For blog posts/articles
  - Returns Article schema with publisher information
  - Includes author and publisher organization data

- **`generateFAQSchema(questions: Array<{question: string, answer: string}>)`** - For FAQ pages
  - Returns FAQPage schema
  - Supports rich snippets in search results

- **`generateLocalBusinessSchema({ name, description, address, telephone, priceRange, openingHours })`** - For business listings
  - Returns LocalBusiness schema
  - Includes address, contact, and business hours

## Required Assets

Make sure to add these files to `/public`:

### Favicons
- `/favicon.ico` - Main favicon
- `/favicon-16x16.png` - 16x16 favicon
- `/favicon-32x32.png` - 32x32 favicon
- `/apple-touch-icon.png` - Apple touch icon (180x180px)
- `/favicon-192x192.png` - PWA icon 192x192
- `/favicon-512x512.png` - PWA icon 512x512

### Images
- `/Images/logo-m.png` - Logo (used as default OG image)
- `/og-image.jpg` - Default Open Graph image (1200x630px recommended)

### Other
- `/sitemap.xml` - Static XML sitemap
- `/site.webmanifest` - PWA manifest file (optional, also generated dynamically)

## Configuration

### Site Configuration (`src/config/site.ts`)

Update site information:
```typescript
export const siteConfig = {
  name: '龍匯天下',
  nameEn: 'Long Huei',
  description: '探索澳門，享受極致服務...',
  url: env.NEXT_PUBLIC_SITE_URL,
  ogImage: '/Images/logo-m.png',
  twitterHandle: '@longhuei',
  locale: 'zh_TW',
  // ... social links, contact info
};
```

### Environment Variables (`src/config/env.ts`)

Set in `.env.local`:
```bash
NEXT_PUBLIC_SITE_URL=https://long-huei.vercel.app
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Optional: Google Analytics
```

### Verification Codes

Add verification codes in `src/config/metadata.ts`:
```typescript
verification: {
  google: 'your-google-verification-code',
  yandex: 'your-yandex-verification-code',
  yahoo: 'your-yahoo-verification-code',
},
```

## Verification & Testing

### Google Search Console
1. Add property: `https://long-huei.vercel.app`
2. Verify ownership (add verification code to `src/config/metadata.ts`)
3. Submit sitemap: `https://long-huei.vercel.app/sitemap.xml`

### Testing Tools

**Sitemap:**
- Test sitemap: `https://long-huei.vercel.app/sitemap.xml`
- Validate: Use online XML sitemap validators

**Robots.txt:**
- Test robots.txt: `https://long-huei.vercel.app/robots.txt`
- Validate: Use Google Search Console robots.txt tester

**Structured Data:**
- Test: https://search.google.com/test/rich-results
- Validate: https://validator.schema.org/

**Open Graph:**
- Test: https://www.opengraph.xyz/
- Test: https://developers.facebook.com/tools/debug/

**Twitter Cards:**
- Test: https://cards-dev.twitter.com/validator

**Meta Tags:**
- Test: https://metatags.io/
- Test: https://www.opengraph.xyz/

## SEO Best Practices

### Content Optimization
1. **Unique Titles**: Each page should have a unique, descriptive title (50-60 characters)
2. **Meta Descriptions**: Keep under 160 characters, include relevant keywords naturally
3. **Heading Hierarchy**: Use H1 for page title, H2-H6 for sections in order
4. **Keywords**: Include relevant keywords naturally (澳門旅遊, 澳門酒店, etc.)
5. **Content Quality**: Provide valuable, comprehensive content

### Technical SEO
1. **URLs**: Use clean, descriptive, SEO-friendly URLs
2. **Canonical URLs**: Always set canonical URLs to prevent duplicate content
3. **Internal Linking**: Link related content internally
4. **Image Optimization**: 
   - Use descriptive alt text
   - Optimize file sizes (use Next.js Image component)
   - Use proper image formats (WebP, AVIF)
   - Include images in sitemap if needed
5. **Mobile-First**: Ensure responsive design, test on mobile devices
6. **Page Speed**: 
   - Optimize images
   - Minimize JavaScript
   - Use code splitting
   - Enable compression
7. **HTTPS**: Always use HTTPS in production
8. **404 Pages**: Create custom 404 pages with helpful navigation

### Structured Data
1. **Use Appropriate Schemas**: Choose the right schema type for your content
2. **Complete Data**: Fill in all relevant fields in structured data
3. **Validate**: Always validate structured data before deploying
4. **Keep Updated**: Update structured data when content changes

### Metadata
1. **Open Graph Images**: Use 1200x630px images for best social sharing
2. **Twitter Cards**: Optimize for Twitter sharing
3. **Language Tags**: Set proper lang attributes (zh-TW for this project)
4. **Robots Tags**: Use noIndex only when necessary (draft pages, etc.)

### Performance
1. **Core Web Vitals**: Monitor and optimize LCP, FID, CLS
2. **Lazy Loading**: Lazy load images and components below the fold
3. **Caching**: Implement proper caching strategies
4. **CDN**: Use CDN for static assets

## Implementation Checklist

### Initial Setup
- [x] Configure site settings in `src/config/site.ts`
- [x] Set up environment variables in `.env.local`
- [x] Create root layout with TravelAgency schema
- [x] Set up dynamic robots.txt
- [x] Create PWA manifest
- [x] Configure Next.js for image optimization

### Assets
- [ ] Create and add all favicon files
- [ ] Create OG image (1200x630px)
- [ ] Optimize logo images
- [ ] Add all required PWA icons

### Metadata
- [ ] Add verification codes to `src/config/metadata.ts`
- [ ] Ensure all pages have unique metadata
- [ ] Test Open Graph tags
- [ ] Test Twitter Card tags

### Structured Data
- [ ] Add TravelAgency schema to root layout (✅ Done)
- [ ] Add Article schema to article pages
- [ ] Add FAQ schema to FAQ pages
- [ ] Add Breadcrumb schema where appropriate
- [ ] Validate all structured data

### Sitemap & Robots
- [ ] Update `public/sitemap.xml` with all pages
- [ ] Verify robots.txt is working
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

### Analytics & Monitoring
- [ ] Set up Google Analytics (add `NEXT_PUBLIC_GA_ID`)
- [ ] Configure Google Search Console
- [ ] Set up Bing Webmaster Tools
- [ ] Monitor Core Web Vitals
- [ ] Set up error tracking

### Content
- [ ] Ensure all images have alt text
- [ ] Optimize all images
- [ ] Add internal links between related articles
- [ ] Create XML sitemap with all articles
- [ ] Review and optimize meta descriptions

## File Structure Reference

```
src/
├── app/
│   ├── layout.tsx          # Root layout with TravelAgency schema
│   ├── robots.ts          # Dynamic robots.txt
│   ├── manifest.ts        # PWA manifest
│   └── [routes]/          # Route-specific layouts with metadata
│
├── config/
│   ├── metadata.ts        # Metadata generation utility
│   ├── seo.ts             # Structured data utilities
│   ├── site.ts            # Site configuration
│   └── env.ts             # Environment variables
│
└── components/
    └── SEO/
        └── PageMetadata.tsx  # Client-side metadata component

public/
├── sitemap.xml            # Static XML sitemap
├── site.webmanifest       # PWA manifest (also generated)
└── [favicons and images]  # SEO assets
```

## Additional Resources

- [Next.js Metadata Documentation](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)


