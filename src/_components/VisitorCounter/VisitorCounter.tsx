'use client';

import { useVisitorCounter } from '@/hooks/useVisitorCounter';

export default function VisitorCounter() {
  const { visitorCount } = useVisitorCounter();

  return (
    <div className='w-full py-4 text-center md:text-sm text-xs text-gray-400'>
      © 2025 GYUHO LEE — Visitors: {visitorCount.today.toLocaleString()} /
      {visitorCount.total.toLocaleString()}
    </div>
  );
}
