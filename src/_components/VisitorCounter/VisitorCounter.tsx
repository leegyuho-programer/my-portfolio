'use client';

import { useVisitorCounter } from '@/hooks/useVisitorCounter';

export default function VisitorCounter() {
  const { visitorCount, isLoading } = useVisitorCounter();

  if (isLoading) {
    return (
      <div className='fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-lg'>
        <div className='text-sm text-gray-600'>로딩 중...</div>
      </div>
    );
  }

  return (
    <div className='fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-lg'>
      <div className='text-xs text-gray-500 mb-1'>방문자 수</div>
      <div className='flex items-center gap-2 text-sm'>
        <span className='font-medium'>
          TODAY{' '}
          <span className='text-blue-600'>
            {visitorCount.today.toLocaleString()}
          </span>
        </span>
        <span className='text-gray-300'>|</span>
        <span className='font-medium'>
          TOTAL{' '}
          <span className='text-green-600'>
            {visitorCount.total.toLocaleString()}
          </span>
        </span>
      </div>
    </div>
  );
}
