import { projectData } from '@/_data/projectData';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Props {
  params: { id: string };
}

export default function ProjectPage({ params }: Props) {
  const project = projectData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-4xl mx-auto px-4'>
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <div className='mb-6'>
            <Link
              href='/#projects'
              className='text-blue-600 hover:text-blue-800 text-sm font-medium'
            >
              ← 프로젝트 목록으로 돌아가기
            </Link>
          </div>

          <div className='space-y-8'>
            <div>
              <h1 className='text-3xl font-bold text-gray-900 mb-4'>
                {project.title}
              </h1>
              {project.image && (
                <div className='relative w-full h-[400px] mb-6'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover rounded-lg'
                  />
                </div>
              )}
            </div>

            <div>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                프로젝트 개요
              </h2>
              <p className='text-gray-700 leading-relaxed text-lg'>
                {project.description}
              </p>
            </div>

            {project.features && (
              <div>
                <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                  주요 기능
                </h2>
                <ul className='list-disc list-inside space-y-3 text-gray-700'>
                  {project.features.map((feature, index) => (
                    <li key={index} className='text-lg'>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.technologies && (
              <div>
                <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                  사용 기술
                </h2>
                <div className='flex flex-wrap gap-3'>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className='px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.challenges && (
              <div>
                <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                  도전과제 및 해결방법
                </h2>
                <p className='text-gray-700 leading-relaxed text-lg'>
                  {project.challenges}
                </p>
              </div>
            )}

            {project.outcome && (
              <div>
                <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                  결과 및 성과
                </h2>
                <p className='text-gray-700 leading-relaxed text-lg'>
                  {project.outcome}
                </p>
              </div>
            )}

            <div className='flex gap-4 pt-6'>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium'
                >
                  데모 보기
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-lg font-medium'
                >
                  GitHub 보기
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
