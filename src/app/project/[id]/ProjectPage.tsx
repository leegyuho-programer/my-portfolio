'use client';

import ProjectDetailContent from '@/_components/projectSection/ProjectDetailContent';
import { flexCenter } from '@/app/styles';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectData } from '../../../_data/projectData';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = params;
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
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
