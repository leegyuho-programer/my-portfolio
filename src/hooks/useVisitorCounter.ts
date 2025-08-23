'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface VisitorCount {
  today: number;
  total: number;
}

export const useVisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<VisitorCount>({
    today: 0,
    total: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // 오늘 이미 방문했는지 쿠키로 확인
        const today = new Date().toISOString().split('T')[0];
        const lastVisitDate = Cookies.get('lastVisit');

        // 개발 환경에서는 쿠키 체크 비활성화 (매번 방문 카운트)
        const isDev = process.env.NODE_ENV === 'development';
        const shouldTrack = isDev || !lastVisitDate || lastVisitDate !== today;

        if (shouldTrack) {
          // 방문 기록 API 호출
          await fetch('/api/track-visitor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          });

          // 쿠키에 오늘 날짜 저장 (자정에 만료)
          // 프로덕션 환경에서만 쿠키 저장
          if (!isDev) {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(0, 0, 0, 0);
            Cookies.set('lastVisit', today, { expires: tomorrow });
          }
        }

        // 방문자 수 조회
        const response = await fetch('/api/visitor-count');
        const data = await response.json();
        setVisitorCount(data);
      } catch (error) {
        console.error('방문자 추적 오류:', error);
      } finally {
        setIsLoading(false);
      }
    };

    trackVisitor();
  }, []);

  return { visitorCount, isLoading };
};
