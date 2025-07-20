'use client';

import { useState } from 'react';
import Card from '@/_components/Card/Card';
import Modal from '@/_components/Modal/Modal';
import { projectData } from '@/_data/projectData'; // Project, TechStack 타입은 ProjectDetailContent에서 필요하므로 여기서 제거
import ProjectDetailContent from './ProjectDetailContent';

export default function ProjectSectionClient() {
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

  return (
    <>
      <div className='flex flex-wrap justify-center gap-8 py-8'>
        {projectData.map((project) => (
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
