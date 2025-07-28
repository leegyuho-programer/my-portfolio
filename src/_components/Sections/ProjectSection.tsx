import TagListWrapper from '@/_components/TagList/TagListWrapper';
import { flexCenter, sectionStyle, sectionTitle } from '@/app/styles';
import { SectionProps } from '@/types';
import React from 'react';

export const ProjectsSection: React.FC<SectionProps> = ({ className }) => (
  <section id='projects' className={`${sectionStyle} ${className || ''}`}>
    <h2 className={sectionTitle}>PROJECTS</h2>
    <div className={flexCenter}>
      <TagListWrapper />
    </div>
  </section>
);
