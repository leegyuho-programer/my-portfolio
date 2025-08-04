'use client';

import ProjectDetailContent from '@/_components/projectSection/ProjectDetailContent';
import { notFound, useRouter } from 'next/navigation';
import { use } from 'react';
import Modal from '../../../_components/Modal/Modal';
import { projectData } from '../../../_data/projectData';

interface InterceptedProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function InterceptedProjectPage({
  params,
}: InterceptedProjectPageProps) {
  const { id } = use(params);
  const router = useRouter();

  const project = projectData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal
      isOpen={true}
      onClose={handleClose}
      title={project.title}
      period={project.period}
      developmentMembers={project.developmentMembers}
    >
      <ProjectDetailContent project={project} />
    </Modal>
  );
}
