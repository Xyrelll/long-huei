import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '龍匯天下 - 澳門旅遊專家',
    short_name: '龍匯天下',
    description: '探索澳門，享受極致服務。提供豪華酒店訂房、專業包車導覽、桑拿體驗等高端定制服務。',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#F5CA69',
    icons: [
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}


