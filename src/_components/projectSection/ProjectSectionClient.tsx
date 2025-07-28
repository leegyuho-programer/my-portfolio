'use client';

import { useState } from 'react';
import Card from '@/_components/Card/Card';
import Modal from '@/_components/Modal/Modal';
import { projectData } from '@/_data/projectData';
import ProjectDetailContent from './ProjectDetailContent';

interface ProjectProps {
  selectedTag: 'All' | 'Team' | 'Single';
}

export default function ProjectSectionClient({ selectedTag }: ProjectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );

  const handleOpenModal = (projectId: string) => {
    setSelectedProjectId(projectId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProjectId(null);
  };

  const selectedProject = projectData.find((p) => p.id === selectedProjectId);

  const filteredProjects = projectData.filter((project) => {
    if (selectedTag === 'All') return true;
    return project.projectType.includes(selectedTag);
  });

  return (
    <>
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

      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedProject.title}
          period={selectedProject.period}
          developmentMembers={selectedProject.developmentMembers}
        >
          <ProjectDetailContent project={selectedProject} />
        </Modal>
      )}
    </>
  );
}
