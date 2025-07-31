import NavBar from '@/_components/NavBar/NavBar';
import { MENU_ITEMS } from '@/constants';
import {
  AboutMeSection,
  ArchivingSection,
  IntroduceSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
} from '../_components/Sections';
import ScrollToButton from '@/_components/ScrollToButton/ScrollToButton';

export default function Home() {
  return (
    <div className='bg-mainBlack'>
      <NavBar menuItems={MENU_ITEMS} />
      <IntroduceSection />
      <AboutMeSection />
      <ArchivingSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      {/* <CareerSection /> */}
      <ScrollToButton />
    </div>
  );
}
