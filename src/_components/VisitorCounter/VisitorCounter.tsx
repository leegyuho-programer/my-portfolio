'use client';

import { useEffect, useState, useMemo } from 'react';

interface VisitorCount {
  today: number;
  total: number;
}

export default function VisitorCounter() {
  const [displayCount, setDisplayCount] = useState<VisitorCount>({
    today: 0,
    total: 0,
  });

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const res = await fetch('/api/visitor-count', { cache: 'no-store' });
        if (!res.ok) throw new Error('visitor count fetch 실패');
        const data: VisitorCount = await res.json();

        // 0부터 목표값까지 애니메이션
        const animateFromOne = (to: number, key: 'today' | 'total') => {
          let current = 0; // 항상 0부터 시작
          const duration = 1000;
          const frameRate = 60;
          const totalFrames = Math.round((duration / 1000) * frameRate);

          const increment = Math.max(1, to / totalFrames); // 최소 1씩 증가

          const counter = setInterval(() => {
            current = Math.min(to, current + increment);
            setDisplayCount((prev) => ({
              ...prev,
              [key]: Math.floor(current),
            }));
            if (current >= to) clearInterval(counter);
          }, duration / totalFrames);
        };

        // fetch된 값이 0보다 크면 애니메이션 실행
        if (data.today > 0) animateFromOne(data.today, 'today');
        if (data.total > 0) animateFromOne(data.total, 'total');
      } catch (err) {
        console.error(err);
      }
    };

    fetchVisitorCount();
  }, []);

  const formattedNumbers = useMemo(
    () => ({
      today: displayCount.today.toLocaleString(),
      total: displayCount.total.toLocaleString(),
    }),
    [displayCount.today, displayCount.total]
  );

  return (
    <div className='w-full py-4 text-center md:text-sm text-xs text-gray-400'>
      © 2025 GYUHO LEE — Visitors: {formattedNumbers.today} /{' '}
      {formattedNumbers.total}
    </div>
  );
}
