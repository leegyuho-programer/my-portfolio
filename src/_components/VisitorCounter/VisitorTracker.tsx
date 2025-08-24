'use client';

import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { getTodayKSTDate } from '@/utils/date';

export default function VisitorTracker() {
  useEffect(() => {
    const trackVisitor = async () => {
      const today = getTodayKSTDate();
      const lastVisitDate = Cookies.get('lastVisit');

      if (!lastVisitDate || lastVisitDate !== today) {
        try {
          await fetch('/api/track-visitor', { method: 'POST' });
          Cookies.set('lastVisit', today, { expires: 1 }); // 1일 후 만료
        } catch (err) {
          console.error('Failed to track visitor:', err);
        }
      }
    };

    trackVisitor();
  }, []);

  return null;
}
