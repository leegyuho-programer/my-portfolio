import { getInterceptedProjectMetadata } from '@/lib/getInterceptedProjectMetadata';
import { Metadata } from 'next';
import InterceptedProjectPage from './InterceptedProjectPage';

interface InterceptedProjectServerPageProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: InterceptedProjectServerPageProps): Promise<Metadata> {
  return getInterceptedProjectMetadata(params.id);
}

export default function Page({ params }: InterceptedProjectServerPageProps) {
  return <InterceptedProjectPage params={Promise.resolve(params)} />;
}
