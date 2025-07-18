import Modal from '@/_components/Modal/Modal';
import { projectData } from '@/_data/projectData';

interface Props {
  params: { id: string };
}

export default function InterceptedProjectModal({ params }: Props) {
  const project = projectData.find((p) => p.id === params.id);

  if (!project) {
    return null;
  }

  return (
    <Modal>
      <div className='bg-white rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold text-gray-900'>{project.title}</h2>
        </div>

        <div className='space-y-6'>
          {project.image && (
            <div className='relative w-full h-[300px]'>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
          )}

          <div>
            <h3 className='text-lg font-semibold text-gray-900 mb-3'>
              프로젝트 개요
            </h3>
            <p className='text-gray-700 leading-relaxed'>
              {project.description}
            </p>
          </div>

          {project.features && (
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                주요 기능
              </h3>
              <ul className='list-disc list-inside space-y-2 text-gray-700'>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.technologies && (
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                사용 기술
              </h3>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.challenges && (
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                도전과제 및 해결방법
              </h3>
              <p className='text-gray-700 leading-relaxed'>
                {project.challenges}
              </p>
            </div>
          )}

          {project.outcome && (
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                결과 및 성과
              </h3>
              <p className='text-gray-700 leading-relaxed'>{project.outcome}</p>
            </div>
          )}

          <div className='flex gap-4 pt-4'>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
              >
                데모 보기
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors'
              >
                GitHub 보기
              </a>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}
