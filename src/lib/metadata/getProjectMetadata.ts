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
    keywords: [
      project.title,
      '프로젝트',
      'project',
      '포트폴리오',
      'portfolio',
      'web development',
      ...(project.techStacksUsed || []),
    ],
    authors: [{ name: '이규호' }],
    creator: '이규호',
    publisher: '이규호',

    // SEO 최적화 - 일반 페이지는 완전히 색인
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
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
      siteName: "LEE GYU HO's Portfolio",
      locale: 'ko_KR',
    },
    alternates: {
      canonical: `${BASE_URL}/project/${project.id}`,
    },
    classification: 'Project Portfolio',
  };
}
