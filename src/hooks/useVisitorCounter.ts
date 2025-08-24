'use client';

import { useEffect } from 'react';
import Cookies from 'js-cookie';

export const useVisitorTracker = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const today = new Date().toISOString().split('T')[0];
        const lastVisitDate = Cookies.get('lastVisit');

        const shouldTrack = !lastVisitDate || lastVisitDate !== today;

        if (shouldTrack) {
          await fetch('/api/track-visitor', { method: 'POST' });

          // 오늘 날짜를 쿠키에 기록 (자정 만료)
          const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          tomorrow.setHours(0, 0, 0, 0);
          Cookies.set('lastVisit', today, { expires: tomorrow });
        }
      } catch (error) {
        console.error('방문자 추적 오류:', error);
      }
    };

    trackVisitor();
  }, []);
};
