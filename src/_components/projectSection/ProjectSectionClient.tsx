'use client';

import { useRouter } from 'next/navigation';
import Card from '@/_components/Card/Card';
import { projectData } from '@/_data/projectData';
import { startTransition } from 'react';

interface ProjectProps {
  selectedTag: 'All' | 'Team' | 'Single';
}

export default function ProjectSectionClient({ selectedTag }: ProjectProps) {
  const router = useRouter();

  const handlePrefetch = (projectId: string) => {
    // 라우트 예열 (Next.js가 라우트 번들/파일을 미리 fetch)
    router.prefetch(`/project/${projectId}`);

    // 상세 컴포넌트의 클라이언트 번들 미리 불러오기 (optional)
    import('./ProjectDetailContent'); // 번들 캐시에 올라감 (추가적 예열)
  };

  const handleOpenModal = (projectId: string) => {
    const targetUrl = `/project/${projectId}`;

    startTransition(() => {
      router.push(targetUrl);
    });
  };

  const filteredProjects = projectData.filter((project) => {
    if (selectedTag === 'All') return true;
    return project.projectType.includes(selectedTag);
  });

  return (
    <div className='grid grid-cols-3 gap-8 py-8 mx-auto'>
      {filteredProjects.map((project) => (
        <Card
          key={project.id}
          onMouseEnter={() => handlePrefetch(project.id)}
          // 마우스 오버 시 예열
          onFocus={() => handlePrefetch(project.id)}
          // 접근성: 포커스 시
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
            onOpenDetail={() => handleOpenModal(project.id)}
          />
        </Card>
      ))}
    </div>
  );
}
