import NavBar from '@/_components/NavBar/NavBar';
import ScrollToButton from '@/_components/ScrollToButton/ScrollToButton';
import { projectData } from '@/_data/projectData';
import { BASE_URL, MENU_ITEMS } from '@/constants';
import {
  AboutMeSection,
  ArchivingSection,
  ContactSection,
  IntroduceSection,
  ProjectsSection,
  SkillsSection,
} from '../_components/Sections';

export default function Home() {
  const project = projectData.find((p) => p.id === 'my-portfolio');

  if (!project) {
    return (
      <div className='bg-mainBlack min-h-screen flex items-center justify-center'>
        <div className='text-white text-center'>
          <h1 className='text-2xl font-bold mb-4'>
            프로젝트를 찾을 수 없습니다
          </h1>
          <p>해당 프로젝트가 존재하지 않습니다.</p>
        </div>
      </div>
    );
    // 404 페이지 만들기
  }

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '이규호 - Frontend Developer 포트폴리오',
    description: project.description,
    url: BASE_URL,
    image: `${BASE_URL}${project.imageSrc}`,
    author: {
      '@type': 'Person',
      name: '이규호',
    },
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

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
    </>
  );
}
