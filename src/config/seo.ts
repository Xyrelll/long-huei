/**
 * SEO utility functions
 */

import { siteConfig } from './site';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url,
}: {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image || `${siteConfig.url}${siteConfig.ogImage}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author || "龍匯天下",
    },
    publisher: {
      "@type": "Organization",
      name: "龍匯天下",
      logo: {
        "@type": "ImageObject",
        url: "https://long-huei.vercel.app/logo-m.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function generateFAQSchema(questions: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateLocalBusinessSchema({
  name,
  description,
  address,
  telephone,
  priceRange,
  openingHours,
}: {
  name: string;
  description: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  telephone?: string;
  priceRange?: string;
  openingHours?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    description,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    telephone,
    priceRange,
    openingHoursSpecification: openingHours?.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours,
    })),
  };
}

