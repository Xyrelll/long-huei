# Project Structure

This document describes the professional Next.js folder structure used in this project.

```
long-huei/
├── public/                      # Static assets (images, fonts, sitemap, manifest)
│   ├── articles/                # Article images organized by article
│   ├── booking/                 # Booking-related images
│   ├── CustomerService/         # Customer service assets
│   ├── entertainment/           # Entertainment images
│   ├── homepage/                # Homepage banner images
│   ├── question/                # Q&A article images
│   ├── rentcar/                 # Car rental images
│   ├── sauna/                   # Sauna article images
│   ├── travel/                  # Travel article images
│   ├── Images/                  # General site images (logos, etc.)
│   ├── sitemap.xml              # Static XML sitemap
│   ├── site.webmanifest         # PWA manifest file
│   └── favicon.ico              # Site favicon
│
├── src/
│   ├── app/                     # App Router (Routes & Pages)
│   │   ├── Article/             # Individual article pages
│   │   │   └── [slug]/          # Dynamic article route
│   │   │       ├── layout.tsx   # Article page metadata
│   │   │       └── page.tsx     # Article page component
│   │   │
│   │   ├── ArticleCategory/     # Article category pages
│   │   │   ├── Booking/         # Booking articles category
│   │   │   │   ├── layout.tsx   # Category metadata
│   │   │   │   └── page.tsx    # Category page
│   │   │   ├── Entertainment/   # Entertainment articles
│   │   │   ├── Question/        # Q&A articles
│   │   │   ├── RentCar/         # Car rental articles
│   │   │   ├── Sauna/           # Sauna articles
│   │   │   └── Travel/           # Travel articles
│   │   │
│   │   ├── Tag/                 # Tag-based article listing
│   │   │   └── [tag]/           # Dynamic tag route
│   │   │       ├── layout.tsx   # Tag page metadata
│   │   │       └── page.tsx    # Tag page component
│   │   │
│   │   ├── Search/              # Search page
│   │   │   ├── layout.tsx       # Search page metadata
│   │   │   └── page.tsx        # Search page component
│   │   │
│   │   ├── CustomerService/     # Customer service page
│   │   │   ├── layout.tsx       # Customer service metadata
│   │   │   └── page.tsx        # Customer service page
│   │   │
│   │   ├── Privacy/             # Privacy policy page
│   │   │   └── page.tsx        # Privacy policy
│   │   │
│   │   ├── faq/                 # FAQ page
│   │   │   └── page.tsx        # FAQ page component
│   │   │
│   │   ├── layout.tsx           # Root layout with global metadata
│   │   ├── page.tsx            # Home page
│   │   ├── sitemap.ts          # Dynamic sitemap generation (optional)
│   │   ├── robots.ts            # Dynamic robots.txt generation
│   │   ├── manifest.ts          # PWA manifest generation
│   │   └── favicon.ico          # Site favicon
│   │
│   ├── components/              # Shared/Reusable UI Components
│   │   ├── ui/                  # Primitive UI components
│   │   │   └── Pagination/      # Pagination component
│   │   │
│   │   ├── layout/              # Structural components
│   │   │   ├── Navbar/          # Navigation bar
│   │   │   ├── Footer/          # Footer component
│   │   │   ├── BottomNav/       # Mobile bottom navigation
│   │   │   ├── GoToTop/         # Scroll to top button
│   │   │   ├── PageLayout/      # Page layout wrapper
│   │   │   ├── ArticleCategoryLayout/  # Article category layout
│   │   │   ├── TagCategoryLayout/      # Tag category layout
│   │   │   ├── ArticleSidebar/         # Article sidebar
│   │   │
│   │   ├── features/            # Feature-specific components
│   │   │   ├── Hero/            # Hero carousel section
│   │   │   ├── About/           # About section
│   │   │   ├── SelectedArticles/       # Featured articles
│   │   │   ├── LatestArticles/         # Latest/Popular articles
│   │   │   ├── RecommendedArticles/    # Recommended articles
│   │   │   ├── ArticleCarousel/         # Article carousel
│   │   │   ├── ArticleContentRenderer/  # Article content renderer
│   │   │   ├── BookingArticleList/      # Booking article list
│   │   │   ├── TravelArticleList/       # Travel article list
│   │   │   ├── FAQ/                     # FAQ section
│   │   │   ├── QuestionAnswerCard/      # Q&A card component
│   │   │   └── Marquee/                 # Marquee component
│   │   │
│   │   └── SEO/                 # SEO components
│   │       └── PageMetadata/    # Client-side metadata component
│   │
│   ├── data/                    # Data and content
│   │   ├── articles/            # Article data files
│   │   │   ├── booking.ts              # Booking articles metadata
│   │   │   ├── bookingContentBlocks.ts # Booking article content
│   │   │   ├── entertainment.ts
│   │   │   ├── entertainmentContentBlocks.ts
│   │   │   ├── question.ts
│   │   │   ├── questionContentBlocks.ts
│   │   │   ├── rentCar.ts
│   │   │   ├── rentCarContentBlocks.ts
│   │   │   ├── sauna.ts
│   │   │   ├── saunaContentBlocks.ts
│   │   │   ├── travel.ts
│   │   │   └── travelContentBlocks.ts
│   │   ├── allArticles.ts       # Aggregated article data
│   │   └── articles.ts          # Article utility functions
│   │
│   ├── config/                  # Configuration and constants
│   │   ├── constants.ts         # App-wide constants (colors, breakpoints)
│   │   ├── env.ts               # Environment variable validation
│   │   ├── site.ts              # Site configuration (name, URL, social)
│   │   ├── metadata.ts           # Metadata generation utilities
│   │   └── seo.ts               # SEO schema generation utilities
│   │
│   ├── hooks/                   # Custom React Hooks
│   │   ├── useScrollToTop.ts    # Scroll to top hook
│   │   ├── useDebounce.ts       # Debounce hook
│   │   └── index.ts             # Barrel export
│   │
│   ├── types/                   # TypeScript interfaces/types
│   │   └── index.ts             # Shared type definitions
│   │
│   ├── utils/                   # Pure utility functions
│   │   ├── format.ts            # Date, currency, number formatting
│   │   ├── validation.ts        # Input validation functions
│   │   └── index.ts             # Barrel export
│   │
│   ├── styles/                  # Global styles
│   │   ├── globals.css          # Global CSS and Tailwind imports
│   │   ├── navbar.css           # Navbar-specific styles
│   │   └── bottomnav.css        # Bottom navigation styles
│   │
│   └── proxy.ts                 # Proxy configuration
│
├── .env.local                   # Environment variables (not in repo)
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── eslint.config.mjs            # ESLint configuration
├── postcss.config.mjs           # PostCSS configuration
└── STRUCTURE.md                 # This file
```

## Folder Purposes

### `src/app/`
Next.js App Router directory. Contains routes and pages.

**Root Level Files:**
- `layout.tsx` - Root layout with global metadata, TravelAgency schema, favicons
- `page.tsx` - Home page with hero, featured articles, latest articles, about, FAQ
- `sitemap.ts` - Dynamic sitemap generation (optional, static sitemap.xml also exists)
- `robots.ts` - Dynamic robots.txt generation with crawl rules
- `manifest.ts` - PWA manifest generation

**Route Structure:**
- `/Article/[slug]` - Dynamic article pages with article-specific metadata
- `/ArticleCategory/{category}` - Category pages (Booking, Travel, Sauna, etc.)
- `/Tag/[tag]` - Tag-based article filtering
- `/Search` - Article search functionality
- `/CustomerService` - Customer service information
- `/Privacy` - Privacy policy page
- `/faq` - FAQ page with expandable Q&A sections

**Layout Files:**
Each route can have its own `layout.tsx` for route-specific metadata:
- Article layouts use `generateMetadata` with article data
- Category layouts have category-specific titles and descriptions
- All layouts use the centralized `generateMetadata` utility from `@/config/metadata`

### `src/components/`
Reusable UI components organized by purpose:

**`ui/`** - Primitive, reusable components:
- `Pagination/` - Pagination component for article lists

**`layout/`** - Structural components:
- `Navbar/` - Main navigation bar with logo and menu
- `Footer/` - Footer with links and copyright
- `BottomNav/` - Mobile bottom navigation bar
- `GoToTop/` - Scroll to top button with visibility detection
- `PageLayout/` - Page layout wrapper component
- `ArticleCategoryLayout/` - Layout for article category pages
- `TagCategoryLayout/` - Layout for tag-based article listings
- `ArticleSidebar/` - Sidebar for article pages with related articles

**`features/`** - Feature-specific complex components:
- `Hero/` - Hero carousel with auto-play and pagination
- `About/` - About section with feature cards
- `SelectedArticles/` - Featured articles display
- `LatestArticles/` - Latest and popular articles section
- `RecommendedArticles/` - Recommended articles component
- `ArticleCarousel/` - Carousel for article browsing
- `ArticleContentRenderer/` - Renders article content blocks
- `BookingArticleList/` - Booking article list component
- `TravelArticleList/` - Travel article list component
- `FAQ/` - FAQ section with expandable items
- `QuestionAnswerCard/` - Individual Q&A card component
- `Marquee/` - Scrolling marquee component

**`SEO/`** - SEO components:
- `PageMetadata/` - Client-side metadata updates (title, OG tags, Twitter cards)

### `src/data/`
Data and content management:
- **`articles/`** - Article data organized by category:
  - Each category has two files: metadata file (e.g., `booking.ts`) and content blocks file (e.g., `bookingContentBlocks.ts`)
  - Metadata files contain article titles, descriptions, images, links, dates, views
  - Content blocks files contain the actual article content in structured block format
- **`allArticles.ts`** - Aggregated article data from all categories
- **`articles.ts`** - Article utility functions (findArticleBySlug, etc.)

### `src/utils/`
Pure utility functions with no side effects:
- Formatting functions
- Validation functions
- Helper functions

### `src/hooks/`
Custom React hooks for reusable logic:
- `useScrollToTop` - Scroll visibility and scroll to top
- `useDebounce` - Debounce values

### `src/types/`
TypeScript type definitions and interfaces shared across the app.

### `src/styles/`
Global stylesheets:
- `globals.css` - Global CSS, Tailwind imports, CSS variables, theme colors
- `navbar.css` - Navbar-specific styles
- `bottomnav.css` - Bottom navigation styles

### `src/config/`
Configuration and constants:

**`constants.ts`** - App-wide constants:
- `SITE_CONFIG` - Site name, description, URL
- `COLORS` - Color palette (background, golds, cards, buttons, text)
- `BREAKPOINTS` - Responsive breakpoints (mobile, tablet, desktop, wide)

**`env.ts`** - Environment variable validation:
- Validates required environment variables at build time
- Provides optional defaults for `NEXT_PUBLIC_SITE_URL`
- Exports `isDevelopment` and `isProduction` flags

**`site.ts`** - Site configuration:
- Site name (Chinese and English)
- Description, URL, OG image
- Social media handles and links
- Contact information
- Locale settings

**`metadata.ts`** - SEO metadata generation:
- `generateMetadata()` - Centralized metadata generation function
- Generates title, description, Open Graph, Twitter Cards, robots tags
- Handles canonical URLs, alternate languages, verification codes
- Converts relative image paths to absolute URLs

**`seo.ts`** - Structured data (Schema.org) generation:
- `generateBreadcrumbSchema()` - BreadcrumbList schema
- `generateArticleSchema()` - Article schema with publisher info
- `generateFAQSchema()` - FAQPage schema for rich snippets
- `generateLocalBusinessSchema()` - LocalBusiness schema

### `public/`
Static assets directory:
- **Image folders** organized by content type (articles, booking, travel, etc.)
- **`sitemap.xml`** - Static XML sitemap with all pages and articles
- **`site.webmanifest`** - PWA manifest file
- **`favicon.ico`** - Site favicon
- Images follow naming conventions: `-h.jpg` (desktop), `-m.jpg` (mobile), `-c.jpg` (category)

## Import Paths

All imports use the `@/` alias configured in `tsconfig.json`:

```typescript
// Components
import Navbar from '@/components/layout/Navbar/Navbar';
import Hero from '@/components/features/Hero/Hero';
import PageMetadata from '@/components/SEO/PageMetadata';

// Utils
import { formatDate, formatCurrency } from '@/utils';
import { validateEmail } from '@/utils/validation';

// Hooks
import { useScrollToTop, useDebounce } from '@/hooks';

// Config
import { siteConfig } from '@/config/site';
import { generateMetadata } from '@/config/metadata';
import { generateArticleSchema } from '@/config/seo';
import { COLORS, BREAKPOINTS } from '@/config/constants';
import { env } from '@/config/env';

// Data
import { findArticleBySlug } from '@/data/articles';
import { allArticles } from '@/data/allArticles';

// Types
import type { Article, FAQItem, HeroSlide } from '@/types';

// Styles
import '@/styles/globals.css';
import '@/styles/navbar.css';
import '@/styles/bottomnav.css';
```

## SEO & Metadata Architecture

### Metadata Generation Flow

1. **Root Layout** (`src/app/layout.tsx`):
   - Sets default site-wide metadata using `generateMetadata()`
   - Includes TravelAgency Schema.org structured data
   - Configures favicons, manifest, theme color

2. **Page Layouts** (e.g., `src/app/Article/[slug]/layout.tsx`):
   - Each route can define its own `generateMetadata()` function
   - Uses route-specific data (article, category, etc.)
   - Automatically generates Open Graph and Twitter Card tags

3. **Metadata Utility** (`src/config/metadata.ts`):
   - Centralized `generateMetadata()` function
   - Handles title formatting, canonical URLs, image path conversion
   - Generates all meta tags (OG, Twitter, robots, etc.)

4. **Structured Data** (`src/config/seo.ts`):
   - Schema.org utilities for rich snippets
   - Article, FAQ, Breadcrumb, LocalBusiness schemas
   - Can be added to pages via JSON-LD script tags

5. **Client-Side Metadata** (`src/components/SEO/PageMetadata.tsx`):
   - Updates metadata dynamically on client-side
   - Useful for dynamic content that changes after page load

### Sitemap & Robots

- **Static Sitemap**: `public/sitemap.xml` - Manually maintained XML sitemap
- **Dynamic Sitemap**: `src/app/sitemap.ts` - Optional dynamic generation
- **Robots.txt**: `src/app/robots.ts` - Dynamic robots.txt with crawl rules

### PWA Support

- **Manifest**: `src/app/manifest.ts` - Generates PWA manifest
- **Static Manifest**: `public/site.webmanifest` - Also available
- **Icons**: Favicon and app icons in `public/` directory

## Best Practices

1. **Component Organization**: Group by purpose (ui, layout, features, SEO)
2. **Barrel Exports**: Use `index.ts` files for cleaner imports
3. **Type Safety**: Define types in `types/` folder, use TypeScript strictly
4. **Pure Functions**: Keep `utils/` functions pure (no side effects)
5. **Configuration**: Centralize config in `config/` folder
6. **Environment Variables**: Validate in `config/env.ts` with defaults
7. **Metadata**: Always use `generateMetadata()` for page metadata
8. **Structured Data**: Add Schema.org markup for better SEO
9. **Image Optimization**: Use Next.js Image component with proper sizes
10. **Route Organization**: Group related routes in folders with layouts


