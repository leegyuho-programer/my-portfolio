'use client';

import Card from '@/_components/Card/Card';
import { projectData, ProjectProps } from '@/_data/projectData';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef } from 'react';

interface ProjectSectionClientProps {
  selectedTag: 'All' | 'Team' | 'Single';
}

export default function ProjectSectionClient({
  selectedTag,
}: ProjectSectionClientProps) {
  const router = useRouter();
  const observerRef = useRef<IntersectionObserver | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedTag === 'All') return projectData;
    return projectData.filter((project) =>
      project.projectType.includes(selectedTag)
    );
  }, [selectedTag]);

  // 개별 프로젝트 프리페치 함수
  const handlePrefetch = (projectId: string) => {
    Promise.resolve(router.prefetch(`/project/${projectId}`)).catch(() => {});
  };

  const handleOpenModal = (project: ProjectProps) => {
    router.push(`/project/${project.id}`);
  };

  // IntersectionObserver 설정
  useEffect(() => {
    // 기존 옵저버 clean-up
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // 새로운 옵저버 생성
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const projectId = target.getAttribute('data-project-id');
            if (projectId) {
              handlePrefetch(projectId);
              observerRef.current?.unobserve(target); // 한 번 프리페칭하면 관찰 해제
            }
          }
        });
      },
      { rootMargin: '100px' } // 뷰포트 근처에 오면 미리 프리페칭
    );

    // 카드 요소들 등록
    const cards = document.querySelectorAll('[data-project-id]');
    cards.forEach((card) => observerRef.current?.observe(card));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [filteredProjects]);

  return (
    <>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-8 mx-auto'>
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            data-project-id={project.id} // ✅ IntersectionObserver 용
            data-testid={`card-${project.id}`} // ✅ 테스트용
            onMouseEnter={() => handlePrefetch(project.id)} // 보조 전략
            onFocus={() => handlePrefetch(project.id)} // 보조 전략
            onOpenDetail={() => handleOpenModal(project)}
          >
            <Card.Hidden>
              <Card.Image
                src={project.imageSrc}
                alt={`${project.title} 이미지`}
              />
              <Card.Content
                title={project.title}
                description={project.description}
              />
              <Card.Tags tags={project.tags} />
            </Card.Hidden>

            <Card.Hover
              title={project.title}
              text='자세히 보기'
              onOpenDetail={() => handleOpenModal(project)}
            />
          </Card>
        ))}
      </div>
    </>
  );
}
