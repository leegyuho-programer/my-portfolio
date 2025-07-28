'use client';

import Information from '@/_components/Information/Information';
import { flexRowCenter, sectionStyle, sectionTitle } from '@/app/styles';
import { ARCHIVING_DATA } from '@/constants';

export function ArchivingSection() {
  return (
    <section id='archiving' className={sectionStyle}>
      <h2 className={sectionTitle}>ARCHIVING</h2>
      <div className={`${flexRowCenter} gap-5 w-full`}>
        {ARCHIVING_DATA.map((item, index) => (
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
