import TechStackBadge from '@/_components/TechStackBadge/TechStackBadge';
import { sectionStyle, sectionTitle } from '@/app/styles';
import { TECH_SKILLS } from '@/constants';

export function SkillsSection() {
  return (
    <section id='skills' className={sectionStyle}>
      <h2 className={sectionTitle}>SKILLS</h2>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-[15px] w-fit mx-auto'>
        {TECH_SKILLS.map((tech, index) => (
          <TechStackBadge key={`skill-${tech}-${index}`} tech={tech} />
        ))}
      </div>
    </section>
  );
}
