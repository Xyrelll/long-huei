# 龍匯天下 - 澳門旅遊專家

This is a Next.js project replicating the long-huei.com website with a professional folder structure and component-based architecture.

## Project Structure

```
long-huei/
├── src/                      # Source code directory
│   ├── app/                  # Next.js App Router (Routes & Pages)
│   │   ├── Article/          # Individual article pages
│   │   │   └── [slug]/       # Dynamic article route
│   │   ├── ArticleCategory/  # Article category pages
│   │   │   ├── Booking/      # Booking articles
│   │   │   ├── Entertainment/# Entertainment articles
│   │   │   ├── Question/     # Q&A articles
│   │   │   ├── RentCar/      # Car rental articles
│   │   │   ├── Sauna/        # Sauna articles
│   │   │   └── Travel/       # Travel articles
│   │   ├── CustomerService/  # Customer service page
│   │   ├── Privacy/          # Privacy policy page
│   │   ├── Search/           # Search page
│   │   ├── Tag/              # Tag-based article listing
│   │   │   └── [tag]/        # Dynamic tag route
│   │   ├── faq/              # FAQ page
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── sitemap.ts        # Dynamic sitemap generation
│   │   ├── robots.ts         # Dynamic robots.txt generation
│   │   └── manifest.ts       # PWA manifest
│   │
│   ├── components/           # React components
│   │   ├── features/         # Feature-specific components
│   │   │   ├── About/        # About section
│   │   │   ├── ArticleCarousel/      # Article carousel
│   │   │   ├── ArticleContentRenderer/# Article content renderer
│   │   │   ├── BookingArticleList/   # Booking article list
│   │   │   ├── FAQ/                  # FAQ section
│   │   │   ├── Hero/                 # Hero carousel section
│   │   │   ├── LatestArticles/       # Latest and popular articles
│   │   │   ├── Marquee/              # Marquee component
│   │   │   ├── QuestionAnswerCard/   # Q&A card component
│   │   │   ├── RecommendedArticles/  # Recommended articles
│   │   │   ├── SelectedArticles/     # Featured articles section
│   │   │   └── TravelArticleList/    # Travel article list
│   │   ├── layout/           # Structural components
│   │   │   ├── ArticleCategoryLayout/ # Article category layout
│   │   │   ├── ArticleSidebar/       # Article sidebar
│   │   │   ├── BottomNav/            # Bottom navigation
│   │   │   ├── Footer/               # Footer component
│   │   │   ├── GoToTop/              # Scroll to top button
│   │   │   ├── Navbar/               # Navigation bar
│   │   │   ├── PageLayout/           # Page layout wrapper
│   │   │   └── TagCategoryLayout/    # Tag category layout
│   │   ├── SEO/              # SEO components
│   │   │   └── PageMetadata/         # Page metadata component
│   │   └── ui/               # Primitive UI components
│   │       └── Pagination/           # Pagination component
│   │
│   ├── config/              # Configuration and constants
│   │   ├── constants.ts     # App-wide constants
│   │   ├── env.ts           # Environment variable validation
│   │   ├── metadata.ts      # SEO metadata utilities
│   │   ├── seo.ts           # Structured data generation
│   │   └── site.ts          # Site configuration
│   │
│   ├── data/                # Data and content
│   │   ├── articles/        # Article data files
│   │   │   ├── booking.ts & bookingContentBlocks.ts
│   │   │   ├── entertainment.ts & entertainmentContentBlocks.ts
│   │   │   ├── question.ts & questionContentBlocks.ts
│   │   │   ├── rentCar.ts & rentCarContentBlocks.ts
│   │   │   ├── sauna.ts & saunaContentBlocks.ts
│   │   │   └── travel.ts & travelContentBlocks.ts
│   │   ├── allArticles.ts   # Aggregated article data
│   │   └── articles.ts      # Article utilities
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── useDebounce.ts   # Debounce hook
│   │   ├── useScrollToTop.ts# Scroll to top hook
│   │   └── index.ts         # Barrel export
│   │
│   ├── styles/              # Global styles
│   │   ├── globals.css      # Global CSS and Tailwind imports
│   │   └── bottomnav.css    # Bottom navigation styles
│   │
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts         # Shared type definitions
│   │
│   ├── utils/               # Utility functions
│   │   ├── format.ts        # Date, currency, number formatting
│   │   ├── validation.ts    # Input validation functions
│   │   └── index.ts         # Barrel export
│   │
│   └── proxy.ts             # Proxy configuration
│
├── public/                  # Static assets
│   ├── articles/            # Article images
│   ├── booking/            # Booking-related images
│   ├── CustomerService/    # Customer service assets
│   ├── entertainment/      # Entertainment images
│   ├── homepage/           # Homepage images
│   ├── question/           # Q&A images
│   ├── rentcar/            # Car rental images
│   ├── sauna/              # Sauna images
│   ├── travel/             # Travel images
│   ├── sitemap.xml         # Static sitemap
│   └── site.webmanifest    # PWA manifest
│
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── eslint.config.mjs       # ESLint configuration
├── postcss.config.mjs       # PostCSS configuration
└── STRUCTURE.md             # Detailed project structure documentation
```

## Components

### Layout Components

#### Navbar
- Fixed navigation bar with logo and menu items
- Responsive design with icons and text labels
- Mobile-friendly navigation

#### Footer
- Footer navigation links
- Copyright information
- Social media links

#### BottomNav
- Mobile bottom navigation bar
- Quick access to main sections

#### GoToTop
- Scroll to top button
- Appears on scroll with smooth animation

#### PageLayout
- Page layout wrapper component
- Consistent page structure

#### ArticleCategoryLayout
- Layout for article category pages
- Sidebar and content area

#### TagCategoryLayout
- Layout for tag-based article listings

#### ArticleSidebar
- Sidebar component for article pages
- Related articles and navigation

### Feature Components

#### Hero
- Image carousel with auto-play functionality
- Pagination dots for navigation
- Smooth transitions between slides

#### About
- Company introduction section
- Feature cards with icons
- "Why choose us" section

#### SelectedArticles
- Featured article display
- Grid layout for multiple articles
- View count display

#### LatestArticles
- Two-column layout for latest and popular articles
- Carousel functionality for article browsing
- Article cards with images and dates

#### RecommendedArticles
- Recommended articles section
- Personalized content display

#### ArticleCarousel
- Carousel component for article browsing
- Responsive design

#### ArticleContentRenderer
- Renders article content blocks
- Supports various content types

#### BookingArticleList
- Displays booking-related articles
- Category-specific layout

#### TravelArticleList
- Displays travel-related articles
- Category-specific layout

#### FAQ
- Question-answer cards
- Multiple FAQ sections
- Expandable content areas

#### QuestionAnswerCard
- Individual Q&A card component
- Expandable answer section

#### Marquee
- Scrolling marquee component
- Animated text display

### SEO Components

#### PageMetadata
- Dynamic metadata generation
- SEO optimization

### UI Components

#### Pagination
- Pagination component for article lists
- Page navigation

## Pages & Routes

### Home Page (`/`)
- Hero carousel
- Featured articles
- Latest articles
- About section
- FAQ preview

### Article Pages (`/Article/[slug]`)
- Individual article display
- Article content renderer
- Related articles sidebar

### Article Categories
- `/ArticleCategory/Booking` - Booking articles
- `/ArticleCategory/Entertainment` - Entertainment articles
- `/ArticleCategory/Question` - Q&A articles
- `/ArticleCategory/RentCar` - Car rental articles
- `/ArticleCategory/Sauna` - Sauna articles
- `/ArticleCategory/Travel` - Travel articles

### Tag Pages (`/Tag/[tag]`)
- Articles filtered by tag
- Tag-based navigation

### Search Page (`/Search`)
- Article search functionality
- Search results display

### FAQ Page (`/faq`)
- Complete FAQ section
- Categorized questions and answers

### Customer Service (`/CustomerService`)
- Customer service information
- Contact details

### Privacy Policy (`/Privacy`)
- Privacy policy page

## SEO & Metadata Setup

The project includes comprehensive SEO optimization with dynamic metadata generation, structured data, and proper page-level configurations.

### Metadata Configuration

#### Root Layout Metadata (`src/app/layout.tsx`)
- Sets default site-wide metadata
- Includes TravelAgency schema.org structured data
- Configures favicons and PWA manifest links
- Sets theme color and viewport meta tags

#### Page-Level Metadata
Each page route can define its own metadata using Next.js `generateMetadata` function:

**Article Pages** (`src/app/Article/[slug]/layout.tsx`)
- Dynamic metadata based on article data
- Uses article title, description, and image
- Automatically generates Open Graph and Twitter Card tags
- Falls back to default metadata if article not found

**Category Pages** (e.g., `src/app/ArticleCategory/Booking/layout.tsx`)
- Category-specific titles and descriptions
- Optimized for category-specific keywords
- Custom Open Graph images

### Metadata Utilities (`src/config/metadata.ts`)

The `generateMetadata` function provides a centralized way to generate metadata:

```typescript
generateMetadata({
  title?: string,        // Page title (appended with site name)
  description?: string,  // Meta description
  path?: string,         // URL path for canonical and Open Graph
  image?: string,        // Open Graph image (auto-converts to absolute URL)
  noIndex?: boolean,     // Control robots indexing
})
```

**Features:**
- Automatic title formatting: `{title} | {siteName}`
- Canonical URL generation
- Open Graph tags (title, description, image, type, locale)
- Twitter Card tags (summary_large_image)
- Robots meta tags with GoogleBot-specific rules
- Multi-language alternate links (zh-TW, zh-CN, en-US)
- Format detection settings (email, address, telephone)
- Verification codes support (Google, Yandex, Yahoo)

**Default Keywords:**
- 澳門旅遊, 澳門酒店, 澳門包車, 澳門桑拿, 澳門景點, 澳門自由行, 澳門訂房, 澳門導覽, 澳門娛樂, 澳門水療

### Structured Data (Schema.org)

#### SEO Utilities (`src/config/seo.ts`)

The project includes utilities for generating structured data:

**1. Breadcrumb Schema**
```typescript
generateBreadcrumbSchema(items: BreadcrumbItem[])
```
- Generates BreadcrumbList schema for navigation

**2. Article Schema**
```typescript
generateArticleSchema({
  title, description, image, datePublished, 
  dateModified, author, url
})
```
- Generates Article schema with publisher information
- Includes author and publisher organization data

**3. FAQ Schema**
```typescript
generateFAQSchema(questions: Array<{question: string, answer: string}>)
```
- Generates FAQPage schema for FAQ sections
- Supports rich snippets in search results

**4. Local Business Schema**
```typescript
generateLocalBusinessSchema({
  name, description, address, telephone, 
  priceRange, openingHours
})
```
- Generates LocalBusiness schema for business information

#### Root Layout Structured Data
- **TravelAgency** schema in root layout
- Includes organization name, description, logo
- Contact point information
- Social media links (sameAs)

### Sitemap (`public/sitemap.xml`)

- Includes static pages and dynamic article routes
- Configurable base URL
- Automatically accessible at `/sitemap.xml`

### Robots.txt (`src/app/robots.ts`)

- Dynamic robots.txt generation
- Allows all user agents by default
- Disallows `/api/`, `/admin/`, `/_next/` paths
- GoogleBot-specific rules
- References sitemap location

### PWA Manifest (`src/app/manifest.ts`)

- Progressive Web App support
- App name: "龍匯天下 - 澳門旅遊專家"
- Standalone display mode
- Theme color: `#F5CA69` (Primary Gold)
- Background color: `#000000` (Black)
- Icon sizes: 192x192, 512x512
- Accessible at `/manifest.json`

### Client-Side Metadata (`src/components/SEO/PageMetadata.tsx`)

Client component for dynamic metadata updates:
- Updates document title
- Sets meta description
- Updates Open Graph tags
- Updates Twitter Card tags
- Sets canonical URL

**Usage:**
```tsx
<PageMetadata 
  title="Page Title"
  description="Page description"
  url="https://long-huei.vercel.app/page"
  image="/path/to/image.jpg"
/>
```

### Environment Configuration

#### Site Configuration (`src/config/site.ts`)
- Site name and description
- Base URL from environment variables
- Open Graph image path
- Social media handles
- Contact information
- Locale settings

#### Environment Variables (`src/config/env.ts`)
- Validates required environment variables
- Provides optional defaults
- `NEXT_PUBLIC_SITE_URL`: Site base URL (default: `https://long-huei.vercel.app`)

### SEO Best Practices Implemented

✅ **Meta Tags**
- Title tags with site name suffix
- Unique descriptions per page
- Canonical URLs to prevent duplicate content
- Open Graph tags for social sharing
- Twitter Card tags for Twitter sharing
- Robots meta tags for search engine control

✅ **Structured Data**
- TravelAgency schema in root layout
- Article schema for blog posts
- FAQ schema for FAQ pages
- Breadcrumb schema for navigation
- LocalBusiness schema support

✅ **Technical SEO**
- Dynamic sitemap generation
- Robots.txt configuration
- PWA manifest for mobile experience
- Image optimization with Next.js Image component
- Security headers in `next.config.ts`
- Performance optimizations

✅ **Accessibility**
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- ARIA labels where needed

### Example: Adding Metadata to a New Page

```typescript
// src/app/NewPage/layout.tsx
import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/metadata';

export const metadata: Metadata = genMeta({
  title: 'New Page Title',
  description: 'Page description for SEO',
  path: '/NewPage',
  image: '/path/to/og-image.jpg',
});

export default function NewPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

### Example: Adding Structured Data

```typescript
// In a page component
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

// Add to page
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(articleSchema),
  }}
/>
```

## Data Structure

Articles are organized by category with separate data files:
- Each category has a main file (e.g., `booking.ts`) and a content blocks file (e.g., `bookingContentBlocks.ts`)
- Articles include metadata (title, image, views, date, link)
- Content blocks support various content types (text, images, lists, etc.)

## Getting Started

1. Install dependencies:
```bash
npm install
# or
bun install
```

2. Run the development server:
```bash
npm run dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deploy

1. Build for production:
```bash
npm run build
# or
bun run build
```

2. Start production server:
```bash
npm start
# or
bun start
```

## Styling

The project uses:
- **Tailwind CSS 4** for utility-first styling
- **Custom CSS** for component-specific styles
- **CSS Variables** for theming and color management
- **Responsive design** principles with mobile-first approach

## Color Palette

- Background: `#000000` (Black)
- Primary Gold: `#F5CA69`
- Secondary Gold: `#CD861A`
- Card Background: `#2C261C`
- Button: `#A46912`
- Button Border: `#694105`
- Text: `#FFFFFF`
- Text Secondary: `#DDDDDD`
- Article Title: `#FFCD83`

## Breakpoints

- Mobile: `640px`
- Tablet: `768px`
- Desktop: `1024px`
- Wide: `1280px`

## Technologies

- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Splide.js** - Carousel/slider functionality
- **Font Awesome** - Icon library

## Key Features

### SEO & Performance
- ✅ **Comprehensive SEO**: Dynamic metadata generation per page
- ✅ **Structured Data**: Schema.org markup (Article, FAQ, Breadcrumb, TravelAgency)
- ✅ **Dynamic Sitemap**: Auto-generated XML sitemap at `/sitemap.xml`
- ✅ **Robots.txt**: Dynamic robots.txt with proper crawl directives
- ✅ **Open Graph & Twitter Cards**: Rich social media previews
- ✅ **Canonical URLs**: Prevents duplicate content issues
- ✅ **Image Optimization**: Next.js Image component with AVIF/WebP support
- ✅ **Security Headers**: X-Frame-Options, X-Content-Type-Options, etc.

### PWA & Mobile
- ✅ **PWA Support**: Manifest file for installable web app
- ✅ **Responsive Design**: Mobile-first approach with breakpoints
- ✅ **Bottom Navigation**: Mobile-optimized navigation

### Content Management
- ✅ **Article Categorization**: Organized by Booking, Travel, Sauna, Entertainment, etc.
- ✅ **Tag System**: Tag-based article filtering and navigation
- ✅ **Search Functionality**: Full-text article search
- ✅ **Dynamic Routing**: SEO-friendly URLs for articles and categories
- ✅ **Content Blocks**: Flexible content structure with various block types

### User Experience
- ✅ **Hero Carousel**: Auto-playing image carousel with pagination
- ✅ **Article Carousels**: Multiple carousel components for article browsing
- ✅ **FAQ System**: Expandable Q&A sections with schema markup
- ✅ **Scroll to Top**: Smooth scroll-to-top button
- ✅ **Pagination**: Article list pagination component

## Project Configuration

### Import Paths
All imports use the `@/` alias configured in `tsconfig.json`:
```typescript
import Component from '@/components/...';
import { utility } from '@/utils';
import { config } from '@/config/...';
```

### Environment Variables
- Validated in `src/config/env.ts`
- Required variables are checked at build time
- Optional variables have sensible defaults
- `NEXT_PUBLIC_SITE_URL`: Site base URL (default: `https://long-huei.vercel.app`)
- `NEXT_PUBLIC_GA_ID`: Google Analytics ID (optional)

### Site Configuration
- Centralized in `src/config/site.ts`
- Includes site name, description, URL, social links
- Used across metadata generation and SEO utilities

### Metadata & SEO
- **Metadata Generation**: `src/config/metadata.ts` - Centralized metadata generation function
- **SEO Utilities**: `src/config/seo.ts` - Structured data schema generators
- **Page Metadata Component**: `src/components/SEO/PageMetadata.tsx` - Client-side metadata updates
- See [SEO & Metadata Setup](#seo--metadata-setup) section for detailed documentation

### Next.js Configuration (`next.config.ts`)
- Image optimization with AVIF and WebP formats
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- Compression enabled
- ETags generation
- Custom device and image sizes

For more detailed information about the project structure, see [STRUCTURE.md](./STRUCTURE.md).
