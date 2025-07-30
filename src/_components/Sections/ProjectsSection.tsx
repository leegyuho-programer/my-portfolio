import TagListWrapper from '@/_components/TagList/TagListWrapper';
import { flexCenter, sectionStyle, sectionTitle } from '@/app/styles';

export function ProjectsSection() {
  return (
    <section id='projects' className={sectionStyle}>
      <h2 className={sectionTitle}>PROJECTS</h2>
      <div className={flexCenter}>
        <TagListWrapper />
      </div>
    </section>
  );
}
