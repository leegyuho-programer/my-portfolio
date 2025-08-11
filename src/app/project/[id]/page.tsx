import { getProjectMetadata } from '@/lib/getProjectMetadata';
import { Metadata } from 'next';
import ProjectPage from './ProjectPage';

interface ProjectServerPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ProjectServerPageProps): Promise<Metadata> {
  const { id } = await params;
  return getProjectMetadata(id);
}

export default async function Page({ params }: ProjectServerPageProps) {
  const resolvedParams = await params;
  return <ProjectPage params={resolvedParams} />;
}
