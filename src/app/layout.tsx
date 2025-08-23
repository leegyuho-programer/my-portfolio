import type { Metadata } from 'next';
import './globals.css';
import LocalFont from 'next/font/local';
import { ReactNode } from 'react';
import { getSiteMetadata } from '@/lib/metadata/metadata';
import Script from 'next/script';
import VisitorCounter from '@/_components/VisitorCounter/VisitorCounter';

// Noto Sans KR 폰트 정의
// public 폴더를 기준으로 상대 경로를 지정합니다.
const notoSansKr = LocalFont({
  src: [
    {
      path: '../../public/fonts/noto-sans-kr-14-300-normal.woff2',
      weight: '300', // Light
      style: 'normal',
    },
    {
      path: '../../public/fonts/noto-sans-kr-14-500-normal.woff2',
      weight: '500', // Medium
      style: 'normal',
    },
    {
      path: '../../public/fonts/noto-sans-kr-16-300-normal.woff2',
      weight: '300', // Light
      style: 'normal',
    },
    {
      path: '../../public/fonts/noto-sans-kr-16-700-normal.woff2',
      weight: '700', // Bold
      style: 'normal',
    },
    {
      path: '../../public/fonts/noto-sans-kr-16-900-normal.woff2',
      weight: '900', // Black
      style: 'normal',
    },
    {
      path: '../../public/fonts/noto-sans-kr-20-300-normal.woff2',
      weight: '300', // Light
      style: 'normal',
    },
    {
      path: '../../public/fonts/noto-sans-kr-20-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/noto-sans-kr-24-700-normal.woff2',
      weight: '700', // Bold
      style: 'normal',
    },
    {
      path: '../../public/fonts/noto-sans-kr-24-900-normal.woff2',
      weight: '900', // Black
      style: 'normal',
    },
    {
      path: '../../public/fonts/noto-sans-kr-48-900-normal.woff2',
      weight: '900', // Black
      style: 'normal',
    },
    {
      path: '../../public/fonts/noto-sans-kr-64-900-normal.woff2',
      weight: '900', // Black
      style: 'normal',
    },
  ],
  display: 'swap', // 폰트 로딩 전략: 폰트 로딩 중에는 다른 폰트 표시 후 로드되면 교체
  variable: '--font-noto-sans-kr', // Tailwind CSS에서 사용할 CSS 변수 이름
});

export const metadata: Metadata = getSiteMetadata();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ko' className={`${notoSansKr.variable}`}>
      <body>{children}</body>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
      <VisitorCounter />
    </html>
  );
}
