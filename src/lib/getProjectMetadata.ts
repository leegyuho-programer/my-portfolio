import { projectData } from '@/_data/projectData';
import { BASE_URL } from '@/constants';
import { Metadata } from 'next';

export function getProjectMetadata(id: string): Metadata {
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return {
      title: '프로젝트를 찾을 수 없습니다',
      description: '해당 프로젝트가 존재하지 않습니다.',
      robots: { index: false, follow: false },
    };
  }
  return {
    title: `${project.title} | Project`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `${BASE_URL}/project/${project.id}`,
      images: [
        {
          url: `${BASE_URL}${project.imageSrc}`,
          width: 1200,
          height: 630,
          alt: `${project.title} 대표 이미지`,
        },
      ],
      type: 'article',
    },
    alternates: {
      canonical: `${BASE_URL}/project/${project.id}`,
    },
  };
}
