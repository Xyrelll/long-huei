# Project Structure

This document describes the professional Next.js folder structure used in this project.

```
long-huei/
├── public/                 # Static assets (images, fonts, robots.txt)
│   ├── favicon.ico
│   ├── og-image.jpg
│   └── site.webmanifest
│
├── src/
│   ├── app/                # App Router (Routes & Pages)
│   │   ├── faq/            # FAQ page route
│   │   │   └── page.tsx
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── sitemap.ts      # Dynamic sitemap generation
│   │   ├── robots.ts        # Dynamic robots.txt generation
│   │   └── manifest.ts     # PWA manifest
│   │
│   ├── components/          # Shared/Reusable UI Components
│   │   ├── ui/             # Primitive components (Button, Input, Card)
│   │   │                    # (Empty - ready for future components)
│   │   ├── layout/         # Structural components
│   │   │   ├── Navbar/     # Navigation bar
│   │   │   ├── Footer/      # Footer component
│   │   │   └── GoToTop/    # Scroll to top button
│   │   └── features/       # Complex components specific to features
│   │       ├── Hero/       # Hero carousel section
│   │       ├── About/      # About section
│   │       ├── SelectedArticles/  # Featured articles
│   │       ├── LatestArticles/    # Latest/Popular articles
│   │       ├── FAQ/        # FAQ section
│   │       ├── QuestionAnswerCard/  # Q&A card component
│   │       └── ArticleCarousel/    # Article carousel
│   │
│   ├── lib/                # Libraries & Singletons (DB clients, Stripe, Auth)
│   │                        # (Empty - ready for external service integrations)
│   │
│   ├── utils/              # Pure utility functions
│   │   ├── format.ts       # Date, currency, number formatting
│   │   ├── validation.ts  # Input validation functions
│   │   └── index.ts        # Barrel export
│   │
│   ├── hooks/              # Custom React Hooks
│   │   ├── useScrollToTop.ts  # Scroll to top hook
│   │   ├── useDebounce.ts     # Debounce hook
│   │   └── index.ts           # Barrel export
│   │
│   ├── types/              # TypeScript interfaces/types
│   │   └── index.ts        # Shared type definitions
│   │
│   ├── styles/             # Global styles
│   │   └── globals.css     # Global CSS and Tailwind imports
│   │
│   ├── config/             # Constants & environment variable validation
│   │   ├── constants.ts    # App constants
│   │   ├── env.ts          # Environment variable validation
│   │   ├── site.ts         # Site configuration
│   │   ├── metadata.ts     # Metadata generation utilities
│   │   └── seo.ts          # SEO schema generation utilities
│   │
│   └── middleware.ts       # Next.js Middleware (security headers, redirects)
│
├── .env.local              # Environment variables (not in repo)
├── next.config.ts          # Next.js configuration
├── package.json
└── tsconfig.json
```

## Folder Purposes

### `src/app/`
Next.js App Router directory. Contains routes and pages. Special files:
- `layout.tsx` - Root layout wrapper
- `page.tsx` - Route pages
- `sitemap.ts` - Dynamic sitemap generation
- `robots.ts` - Dynamic robots.txt generation
- `manifest.ts` - PWA manifest

### `src/components/`
Reusable UI components organized by purpose:
- **`ui/`** - Primitive, reusable components (buttons, inputs, cards)
- **`layout/`** - Structural components (navbar, footer, sidebar)
- **`features/`** - Feature-specific complex components

### `src/lib/`
External library integrations and singletons:
- Database clients
- Third-party service clients (Stripe, Auth providers)
- API clients

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
- `globals.css` - Global CSS, Tailwind imports, CSS variables

### `src/config/`
Configuration and constants:
- `constants.ts` - App-wide constants
- `env.ts` - Environment variable validation
- `site.ts` - Site configuration
- `metadata.ts` - SEO metadata utilities
- `seo.ts` - Structured data generation

### `src/middleware.ts`
Next.js middleware for:
- Security headers
- URL redirects
- Request/response manipulation

## Import Paths

All imports use the `@/` alias configured in `tsconfig.json`:

```typescript
// Components
import Navbar from '@/components/layout/Navbar/Navbar';
import Hero from '@/components/features/Hero/Hero';

// Utils
import { formatDate, formatCurrency } from '@/utils';

// Hooks
import { useScrollToTop, useDebounce } from '@/hooks';

// Config
import { siteConfig } from '@/config/site';
import { generateMetadata } from '@/config/metadata';

// Types
import type { Article } from '@/types';

// Styles
import '@/styles/globals.css';
```

## Best Practices

1. **Component Organization**: Group by purpose (ui, layout, features)
2. **Barrel Exports**: Use `index.ts` files for cleaner imports
3. **Type Safety**: Define types in `types/` folder
4. **Pure Functions**: Keep `utils/` functions pure (no side effects)
5. **Configuration**: Centralize config in `config/` folder
6. **Environment Variables**: Validate in `config/env.ts`


