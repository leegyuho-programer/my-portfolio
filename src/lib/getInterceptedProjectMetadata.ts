import { Metadata } from 'next';
import { getProjectMetadata } from './getProjectMetadata';

export function getInterceptedProjectMetadata(id: string): Metadata {
  const meta = getProjectMetadata(id);
  return {
    ...meta,
    robots: { index: false, follow: true }, // 모달 버전은 색인 제외
  };
}
