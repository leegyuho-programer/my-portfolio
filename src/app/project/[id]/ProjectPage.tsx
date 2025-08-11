'use client';

import ProjectDetailContent from '@/_components/projectSection/ProjectDetailContent';
import { flexCenter } from '@/app/styles';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { projectData } from '../../../_data/projectData';
import { BASE_URL } from '@/constants';
import Head from 'next/head';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = use(params);
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

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

      <div
        className={`w-full bg-black ${flexCenter} flex-col py-15 text-white gap-5`}
      >
        <Link
          href='/#projects'
          className='absolute top-[30px] left-[30px] text-md text-white hover:text-blue-300 transition'
        >
          ← 포트폴리오로 돌아가기
        </Link>
        <h1 className='text-2xl font-bold'>{project.title}</h1>
        <p className='text-sm'>{project.period}</p>
        <p className='text-sm'>{project.developmentMembers}</p>
      </div>

      <div className='p-8'>
        <ProjectDetailContent project={project} />
      </div>
    </>
  );
}
