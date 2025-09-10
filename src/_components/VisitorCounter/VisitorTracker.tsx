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

          // 오늘 자정 기준으로 만료 시간 계산
          const now = new Date();
          const tomorrow = new Date();
          tomorrow.setHours(24, 0, 0, 0); // 오늘 자정 기준 다음날 0시
          const expires =
            (tomorrow.getTime() - now.getTime()) / (1000 * 60 * 60 * 24); // 일 단위

          Cookies.set('lastVisit', today, { expires });
        } catch (err) {
          console.error('Failed to track visitor:', err);
        }
      }
    };

    trackVisitor();
  }, []);

  return null;
}
