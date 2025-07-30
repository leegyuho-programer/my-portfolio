import NavBar from '@/_components/NavBar/NavBar';
import { MENU_ITEMS } from '@/constants';
import {
  IntroduceSection,
  AboutMeSection,
  ArchivingSection,
  SkillsSection,
  ProjectsSection,
  // CareerSection,
} from '../_components/Sections';
import PostCard from '@/_components/PostCard/PostCard';

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
      <PostCard />
    </div>
  );
}
