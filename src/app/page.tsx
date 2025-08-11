import NavBar from '@/_components/NavBar/NavBar';
import { BASE_URL, MENU_ITEMS } from '@/constants';
import {
  AboutMeSection,
  ArchivingSection,
  IntroduceSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
} from '../_components/Sections';
import ScrollToButton from '@/_components/ScrollToButton/ScrollToButton';
import Head from 'next/head';

export default function Home() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: '이규호',
    url: `${BASE_URL}`,
    sameAs: [
      'https://github.com/leegyuho-programer',
      'https://velog.io/@j980303/posts',
    ],
    jobTitle: 'Frontend Developer',
    description:
      '사용자가 웹에서 자연스럽고 쾌적한 경험을 누릴 수 있도록 고민하는 프론트엔드 개발자입니다.',
  };

  return (
    <div className='bg-mainBlack'>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

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
