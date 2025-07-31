'use client';

import { useEffect, useState } from 'react';
import IconButton from '../IconButton/IconButton';

export default function ScrollToButton() {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      // 현재 스크롤 위치가 거의 맨 아래에 있을 경우
      const isAtBottom = scrollTop + windowHeight >= docHeight - 10;
      setAtBottom(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 체크

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (typeof window === 'undefined') return;

    if (atBottom) {
      window.scrollTo({ top: 0 });
    } else {
      window.scrollTo({ top: document.body.scrollHeight });
    }
  };

  return (
    <div
      className={`fixed right-10 bottom-10 rounded-full w-[50px] h-[50px] cursor-pointer shadow-lg bg-white transition-transform duration-300 ${
        atBottom ? 'rotate-180' : ''
      }`}
    >
      <IconButton
        svgSrc='/icons/ArrowButtonIcon.svg'
        alt='ArrowButton icon'
        onClick={handleClick}
      />
    </div>
  );
}
