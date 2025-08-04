'use client';

import { useRouter } from 'next/navigation';
import Card from '@/_components/Card/Card';
import { projectData } from '@/_data/projectData';

interface ProjectProps {
  selectedTag: 'All' | 'Team' | 'Single';
}

export default function ProjectSectionClient({ selectedTag }: ProjectProps) {
  const router = useRouter();

  const handleOpenModal = (projectId: string) => {
    const targetUrl = `/project/${projectId}`;
    router.push(targetUrl);
  };

  const filteredProjects = projectData.filter((project) => {
    if (selectedTag === 'All') return true;
    return project.projectType.includes(selectedTag);
  });

  return (
    <div className='grid grid-cols-3 gap-8 py-8 mx-auto'>
      {filteredProjects.map((project) => (
        <Card key={project.id}>
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
