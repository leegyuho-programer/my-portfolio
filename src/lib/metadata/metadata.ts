import { Metadata } from 'next';
import { BASE_URL } from '@/constants';
import { projectData } from '@/_data/projectData';

export function getSiteMetadata(): Metadata {
  const project = projectData.find((p) => p.id === 'my-portfolio');

  if (!project) {
    return {
      title: '프로젝트를 찾을 수 없습니다',
      description: '해당 프로젝트가 존재하지 않습니다.',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: '이규호 - Frontend Developer 포트폴리오',
    description: project.description,
    keywords: [
      '프론트엔드',
      'Frontend',
      '포트폴리오',
      'Portfolio',
      '웹 개발',
      'Web Development',
    ],
    authors: [{ name: '이규호' }],
    creator: '이규호',
    publisher: '이규호',
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
      title: '이규호 - Frontend Developer 포트폴리오',
      description: project.description,
      url: BASE_URL,
      siteName: '이규호 포트폴리오',
      images: [
        {
          url: `${BASE_URL}${project.imageSrc}`,
          width: 1200,
          height: 630,
          alt: `${project.title} 대표 이미지`,
        },
      ],
      locale: 'ko_KR',
      type: 'website',
    },
    alternates: { canonical: BASE_URL },
  };
}
