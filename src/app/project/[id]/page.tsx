import ProjectDetailContent from '@/_components/projectSection/ProjectDetailContent';
import { flexCenter } from '@/app/styles';
import { BASE_URL } from '@/constants';
import { getProjectMetadata } from '@/lib/metadata/getProjectMetadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectData } from '../../../_data/projectData';

interface GenerateMetadataProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const { id } = await params;
  return getProjectMetadata(id);
}

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectData.find((p) => p.id === id);

  if (!project) notFound();

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.description,
    url: `${BASE_URL}/project/${project.id}`,
    image: `${BASE_URL}${project.imageSrc}`,
    datePublished: project.period?.split('~')[0]?.trim(),
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web',
    author: { '@type': 'Person', name: '이규호' },
    potentialAction: {
      '@type': 'ViewAction',
      target: `${BASE_URL}/project/${project.id}`,
    },
    ...(project.techStacksUsed && {
      programmingLanguage: project.techStacksUsed,
    }),
    ...(project.githubLink && { codeRepository: project.githubLink }),
    ...(project.demoLink && {
      applicationSubCategory: 'Live Demo',
      sameAs: project.demoLink,
    }),
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div
        className={`w-full bg-black ${flexCenter} flex-col py-15 text-white gap-5`}
      >
        <Link
          href='/#projects'
          className='absolute lg:top-[30px] top-[10px] left-[30px] lg:text-md text-sm text-white hover:text-blue-300 transition'
        >
          ← 포트폴리오로 돌아가기
        </Link>
        <h1 className='lg:text-2xl text-xl font-bold'>{project.title}</h1>
        <p className='md:text-sm text-xs px-[10px]'>{project.period}</p>
        <p className='md:text-sm text-xs'>{project.developmentMembers}</p>
      </div>

      <div className='p-8'>
        <ProjectDetailContent project={project} />
      </div>
    </>
  );
}
