import { Metadata } from 'next';
import { siteConfig } from './site';

export function generateMetadata({
  title,
  description,
  path = '',
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const pageDescription = description || siteConfig.description;
  const pageUrl = `${siteConfig.url}${path}`;
  
  // Convert relative image paths to absolute URLs
  let pageImage: string;
  if (image) {
    if (image.startsWith('/')) {
      pageImage = `${siteConfig.url}${image}`;
    } else if (!image.startsWith('http')) {
      pageImage = `${siteConfig.url}/${image}`;
    } else {
      pageImage = image;
    }
  } else {
    pageImage = `${siteConfig.url}${siteConfig.ogImage}`;
  }

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageTitle,
    description: pageDescription,
    keywords: [
      '澳門旅遊',
      '澳門酒店',
      '澳門包車',
      '澳門桑拿',
      '澳門景點',
      '澳門自由行',
      '澳門訂房',
      '澳門導覽',
      '澳門娛樂',
      '澳門水療',
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        'zh-TW': pageUrl,
        'zh-CN': pageUrl,
        'en-US': pageUrl,
      },
    },
    openGraph: {
      type: siteConfig.type as 'website',
      locale: siteConfig.locale,
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add your verification codes here
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // yahoo: 'your-yahoo-verification-code',
    },
  };
}

export const siteMetadata = siteConfig;

