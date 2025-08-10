import { getProjectMetadata } from '@/lib/getProjectMetadata';
import { Metadata } from 'next';
import ProjectPage from './ProjectPage';

interface ProjectServerPageProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: ProjectServerPageProps): Promise<Metadata> {
  return getProjectMetadata(params.id);
}

export default function Page({ params }: ProjectServerPageProps) {
  return <ProjectPage params={Promise.resolve(params)} />;
}
