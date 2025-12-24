# 龍匯天下 - 澳門旅遊專家

This is a Next.js project replicating the long-huei.com website with a professional folder structure and component-based architecture.

## Project Structure

```
long-huei/
├── src/                   # Source code directory
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── Navbar/      # Navigation bar component
│   │   ├── Hero/        # Hero carousel section
│   │   ├── SelectedArticles/ # Featured articles section
│   │   ├── About/       # About section
│   │   ├── LatestArticles/ # Latest and popular articles
│   │   ├── FAQ/         # FAQ section
│   │   ├── QuestionAnswerCard/ # Q&A card component
│   │   ├── ArticleCarousel/ # Article carousel component
│   │   ├── Footer/      # Footer component
│   │   └── GoToTop/     # Scroll to top button
│   ├── lib/             # Utility functions and constants
│   │   └── constants.ts
│   └── types/           # TypeScript type definitions
│       └── index.ts
├── public/               # Static assets
│   └── [images]          # Image files
└── package.json
```

## Components

### Navbar
- Fixed navigation bar with logo and menu items
- Responsive design with icons and text labels

### Hero
- Image carousel with auto-play functionality
- Pagination dots for navigation
- Smooth transitions between slides

### SelectedArticles
- Featured article display
- Grid layout for multiple articles
- View count display

### About
- Company introduction section
- Feature cards with icons
- "Why choose us" section

### LatestArticles
- Two-column layout for latest and popular articles
- Carousel functionality for article browsing
- Article cards with images and dates

### FAQ
- Question-answer cards
- Multiple FAQ sections
- Expandable content areas

### Footer
- Footer navigation links
- Copyright information

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

## Required Images

The following images need to be added to the `public/` directory:

### Hero Images
- `/hero-1.jpg`
- `/hero-2.jpg`
- `/hero-3.jpg`

### Article Images
- `/article-featured.jpg`
- `/article-1.png` through `/article-10.jpg`
- `/article-latest-1.jpg` through `/article-latest-4.jpg`
- `/article-popular-1.png` through `/article-popular-4.jpg`

### Logo
- `/logo.png`

## Styling

The project uses:
- Tailwind CSS for utility-first styling
- Inter font family from Google Fonts
- Custom CSS variables for theming
- Responsive design principles

## Color Palette

- Background: `#000000` (Black)
- Primary Gold: `#F5CA69`
- Secondary Gold: `#CD861A`
- Card Background: `#2C261C`
- Button: `#A46912`
- Text: `#FFFFFF`

## Technologies

- Next.js 16.1.1
- React 19.2.3
- TypeScript 5
- Tailwind CSS 4
