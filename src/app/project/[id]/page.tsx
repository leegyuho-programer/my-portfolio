import ProjectDetailContent from '@/_components/projectSection/ProjectDetailContent';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectData } from '../../../_data/projectData';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-8'>
        <Link
          href='/#projects'
          className='inline-flex items-center text-blue-600 hover:text-blue-800 mb-6'
        >
          ← 포트폴리오로 돌아가기
        </Link>

        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          <div className='bg-black text-white p-8 text-center'>
            <h1 className='text-3xl font-bold mb-2'>{project.title}</h1>
            <p className='text-blue-400 mb-2'>{project.period}</p>
            <p className='text-sm'>{project.developmentMembers}</p>
          </div>

          <div className='p-8'>
            <ProjectDetailContent project={project} />
          </div>
        </div>
      </div>
    </main>
  );
}
