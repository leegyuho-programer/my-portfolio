import { getInterceptedProjectMetadata } from '@/lib/metadata/getInterceptedProjectMetadata';
import { Metadata } from 'next';
import InterceptedPageClient from './InterceptedPageClient';

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
  return <InterceptedPageClient params={resolvedParams} />;
}
