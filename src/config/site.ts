/**
 * Site configuration
 */

import { env } from './env';

export const siteConfig = {
  name: '龍匯天下',
  nameEn: 'Long Huei',
  description: '探索澳門，享受極致服務。提供豪華酒店訂房、專業包車導覽、桑拿體驗等高端定制服務。',
  url: env.NEXT_PUBLIC_SITE_URL,
  ogImage: '/Images/logo-m.png',
  twitterHandle: '@longhuei',
  locale: 'zh_TW',
  type: 'website',
  contact: {
    email: 'contact@long-huei.com',
    phone: '+853-XXXX-XXXX',
  },
  social: {
    facebook: 'https://www.facebook.com/longhuei',
    instagram: 'https://www.instagram.com/longhuei',
    twitter: 'https://twitter.com/longhuei',
  },
} as const;


