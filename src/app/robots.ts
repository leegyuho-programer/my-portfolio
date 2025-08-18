import type { MetadataRoute } from 'next';
import { BASE_URL } from '../constants/index.js';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // 모든 크롤러 허용
      allow: '/', // 전체 페이지 접근 허용
      disallow: '',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
