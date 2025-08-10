import { getProjectMetadata } from '@/lib/getProjectMetadata';
import { Metadata } from 'next';
import InterceptedProjectPage from './InterceptedProjectPage';

interface InterceptedProjectServerPageProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: InterceptedProjectServerPageProps): Promise<Metadata> {
  return getProjectMetadata(params.id);
}

export default function Page({ params }: InterceptedProjectServerPageProps) {
  return <InterceptedProjectPage params={Promise.resolve(params)} />;
}
