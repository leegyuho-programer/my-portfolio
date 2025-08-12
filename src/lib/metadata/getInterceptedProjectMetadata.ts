import { projectData } from '@/_data/projectData';
import { BASE_URL } from '@/constants';
import { Metadata } from 'next';

export function getInterceptedProjectMetadata(id: string): Metadata {
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return {
      title: '프로젝트를 찾을 수 없습니다',
      description: '해당 프로젝트가 존재하지 않습니다.',
      robots: { index: false, follow: false },
    };
  }

  return {
    // 모달용 제목 (SEO에는 영향 없음, 브라우저 탭용)
    title: `${project.title} | 프로젝트 모달`,
    description: project.description,

    // 검색 엔진 완전 차단
    robots: {
      index: false, // 색인하지 않음
      follow: true, // 링크는 따라감 (원본 페이지로)
      noarchive: true, // 캐시/아카이브 금지
      nosnippet: true, // 검색 결과 스니펫 금지
      noimageindex: true, // 이미지 색인 금지
      googleBot: {
        index: false,
        follow: true,
        noarchive: true,
        nosnippet: true,
        noimageindex: true,
      },
    },

    // 중복 콘텐츠 방지 - canonical은 항상 원본 페이지로
    alternates: {
      canonical: `${BASE_URL}/project/${project.id}`,
    },

    // 모달에서는 소셜 미디어 메타데이터 최소화
    openGraph: {
      title: project.title,
      description: project.description,
      url: `${BASE_URL}/project/${project.id}`, // 원본 페이지 URL
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

    // 구조화 데이터 없음 (중복 방지) - other 필드 완전 생략
  };
}
