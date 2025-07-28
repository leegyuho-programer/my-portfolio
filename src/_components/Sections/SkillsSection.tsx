import TechStackBadge from '@/_components/TechStackBadge/TechStackBadge';
import { flexRowCenter, sectionStyle, sectionTitle } from '@/app/styles';
import { TECH_SKILLS } from '@/constants';

export function SkillsSection() {
  return (
    <section id='skills' className={sectionStyle}>
      <h2 className={sectionTitle}>SKILLS</h2>
      <div className={`gap-[15px] ${flexRowCenter}`}>
        {TECH_SKILLS.map((tech, index) => (
          <TechStackBadge key={`skill-${tech}-${index}`} tech={tech} />
        ))}
      </div>
    </section>
  );
}
