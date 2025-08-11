'use client';

import ProjectDetailContent from '@/_components/projectSection/ProjectDetailContent';
import { BASE_URL } from '@/constants';
import Head from 'next/head';
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

  if (!project) notFound();

  const handleClose = () => {
    router.back();
  };

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.description,
    url: `${BASE_URL}/project/${project.id}`,
    image: `${BASE_URL}/${project.imageSrc}`,
    datePublished: project.period?.split('~')[0]?.trim(),
    applicationCategory: 'Utility',
    operatingSystem: 'Web',
  };

  return (
    <>
      <Head>
        <title>{project.title} - 프로젝트 상세</title>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <Modal
        isOpen={true}
        onClose={handleClose}
        title={project.title}
        period={project.period}
        developmentMembers={project.developmentMembers}
      >
        <ProjectDetailContent project={project} />
      </Modal>
    </>
  );
}
