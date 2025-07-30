import NavBar from '@/_components/NavBar/NavBar';
import { MENU_ITEMS } from '@/constants';
import {
  IntroduceSection,
  AboutMeSection,
  ArchivingSection,
  SkillsSection,
  ProjectsSection,
  CareerSection,
} from '../_components/Sections';

export default function Home() {
  return (
    <div className='bg-mainBlack'>
      <NavBar menuItems={MENU_ITEMS} />
      <IntroduceSection />
      <AboutMeSection />
      <ArchivingSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <CareerSection /> */}
    </div>
  );
}
