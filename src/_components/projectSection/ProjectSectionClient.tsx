'use client';

import Card from '@/_components/Card/Card';
import { projectData, ProjectProps } from '@/_data/projectData';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';

interface ProjectSectionClientProps {
  selectedTag: 'All' | 'Team' | 'Single';
}

export default function ProjectSectionClient({
  selectedTag,
}: ProjectSectionClientProps) {
  const router = useRouter();

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

  // 마운트 혹은 필터 변경 시 라우트/번들 예열
  useEffect(() => {
    // 라우트 예열 (브라우저가 라우트 번들/자원 미리 fetch)
    filteredProjects.forEach((p) => {
      // prefetch는 실패해도 치명적이지 않으므로 에러 무시
      Promise.resolve(router.prefetch(`/project/${p.id}`)).catch(() => {});
    });
  }, [filteredProjects, router]);

  return (
    <>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-8 mx-auto'>
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            onMouseEnter={() => handlePrefetch(project.id)}
            onFocus={() => handlePrefetch(project.id)}
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
