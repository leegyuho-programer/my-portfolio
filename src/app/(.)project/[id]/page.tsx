import { getInterceptedProjectMetadata } from '@/lib/getInterceptedProjectMetadata';
import { Metadata } from 'next';
import InterceptedProjectPage from './InterceptedProjectPage';

interface InterceptedProjectServerPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: InterceptedProjectServerPageProps): Promise<Metadata> {
  const { id } = await params;
  return getInterceptedProjectMetadata(id);
}

export default async function Page({
  params,
}: InterceptedProjectServerPageProps) {
  const resolvedParams = await params;
  return <InterceptedProjectPage params={resolvedParams} />;
}
