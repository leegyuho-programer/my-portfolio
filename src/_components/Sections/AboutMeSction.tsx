import React from 'react';
import Button from '@/_components/Button/Button';
import { flexColCenter, sectionStyle, sectionTitle } from '@/app/styles';
import { SectionProps } from '@/types';

export const AboutMeSection: React.FC<SectionProps> = ({ className }) => (
  <section
    id='aboutMe'
    className={`${sectionStyle} mt-[72px] ${className || ''}`}
  >
    <h2 className={`flex flex-row ${sectionTitle}`}>ABOUT ME</h2>
    <div className={flexColCenter}>
      <h2 className='text-xl font-bold text-white'>-이규호-</h2>
      <h2 className='text-xl font-bold text-white mb-5'>
        프론트 엔드 개발자 포트폴리오
      </h2>
      <p className='text-md font-medium text-white my-10'>
        안녕하세요 ~~~~~ 이규호입니다.
      </p>
      <Button>더 알아보기 ↓</Button>
    </div>
  </section>
);
