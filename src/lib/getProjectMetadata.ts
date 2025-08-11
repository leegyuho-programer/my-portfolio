import { projectData } from '@/_data/projectData';
import { Metadata } from 'next';

export function getProjectMetadata(id: string): Metadata {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_HOST;
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
      url: `${baseUrl}/project/${project.id}`,
      images: [
        {
          url: `${baseUrl}${project.imageSrc}`,
          width: 1200,
          height: 630,
          alt: `${project.title} 대표 이미지`,
        },
      ],
      type: 'article',
    },
    alternates: {
      canonical: `${baseUrl}/project/${project.id}`,
    },
  };
}
