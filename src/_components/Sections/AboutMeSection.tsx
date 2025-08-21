'use client';

import { sectionStyle, sectionTitle } from '@/app/styles';
import { INFORMATION_DATA } from '@/constants';
import Information from '../Information/Information';

export function AboutMeSection() {
  return (
    <section id='aboutMe' className={sectionStyle}>
      <h2 className={sectionTitle}>ABOUT ME</h2>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-[15px] w-fit mx-auto'>
        {INFORMATION_DATA.map((item, index) => (
          <Information
            key={`archiving-${index}`}
            svgSrc={item.svgSrc}
            alt={item.alt}
            title={item.title}
            content={item.content}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}
