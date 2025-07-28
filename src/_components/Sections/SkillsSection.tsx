import TechStackBadge from '@/_components/TechStackBadge/TechStackBadge';
import { flexRowCenter, sectionStyle, sectionTitle } from '@/app/styles';
import { TECH_SKILLS } from '@/constants';
import { SectionProps } from '@/types';
import React from 'react';

export const SkillsSection: React.FC<SectionProps> = ({ className }) => (
  <section id='skills' className={`${sectionStyle} ${className || ''}`}>
    <h2 className={sectionTitle}>SKILLS</h2>
    <div className={`gap-[15px] ${flexRowCenter}`}>
      {TECH_SKILLS.map((tech, index) => (
        <TechStackBadge key={`skill-${tech}-${index}`} tech={tech} />
      ))}
    </div>
  </section>
);
