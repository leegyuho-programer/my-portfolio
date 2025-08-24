'use client';

import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function VisitorTracker() {
  useEffect(() => {
    const trackVisitor = async () => {
      const today = new Date().toISOString().split('T')[0];
      const lastVisitDate = Cookies.get('lastVisit');

      if (!lastVisitDate || lastVisitDate !== today) {
        await fetch('/api/track-visitor', { method: 'POST' });
        Cookies.set('lastVisit', today, { expires: 1 });
      }
    };

    trackVisitor();
  }, []);

  return null;
}
