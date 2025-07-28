import { flexRowCenter, sectionTitle } from '@/app/styles';
import { SectionProps } from '@/types';
import React from 'react';

export const CareerSection: React.FC<SectionProps> = ({ className }) => (
  <section
    id='career'
    className={`${flexRowCenter} h-[1000px] ${className || ''}`}
  >
    <h2 className={sectionTitle}>CAREER</h2>
    {/* Career 콘텐츠를 여기에 추가 */}
  </section>
);
