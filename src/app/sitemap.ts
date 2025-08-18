import type { MetadataRoute } from 'next';
import { projectData } from '@/_data/projectData';
import { BASE_URL } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // 1) 정적 페이지 경로
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];

  // 2) 프로젝트 상세 페이지
  const projectRoutes: MetadataRoute.Sitemap = projectData.map((project) => ({
    url: `${BASE_URL}/project/${project.id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 1,
  }));

  return [...staticRoutes, ...projectRoutes];
}
