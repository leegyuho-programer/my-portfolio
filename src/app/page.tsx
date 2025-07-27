'use client';

import Button from '@/_components/Button/Button';
import Information from '@/_components/Information/Information';
import NavBar from '@/_components/NavBar/NavBar';
import TagListWrapper from '@/_components/TagList/TagListWrapper';
import TechStackBadge from '@/_components/TechStackBadge/TechStackBadge';
import { sectionStyle, flexRowCenter, sectionTitle } from './styles';

export default function Home() {
  return (
    <div className='bg-mainBlack'>
      <NavBar
        menuItems={[
          { label: 'About me', href: '#about-me' },
          { label: 'Skills', href: '#skills' },
          { label: 'Archiving', href: '#archiving' },
          { label: 'Projects', href: '#projects' },
          { label: 'Career', href: '#career' },
        ]}
      />
      {/* // About Me 섹션 */}
      <section id='about-me' className={`${sectionStyle} mt-[72px]`}>
        <h2 className={`${sectionTitle}`}>ABOUT ME</h2>
        <h2 className='text-xl font-bold text-white'>-이규호-</h2>
        <h2 className='text-xl font-bold text-white mb-5'>
          프론트 엔드 개발자 포트폴리오
        </h2>
        <p className='text-md font-medium text-white my-10'>
          안녕하세요 ~~~~~ 이규호입니다.
        </p>

        <Button>더 알아보기 ↓</Button>
      </section>

      {/* // Skills 섹션 */}
      <section id='skills' className={`${sectionStyle}`}>
        <h2 className={`${sectionTitle}`}>SKILLS</h2>
        <div className='flex gap-[15px]'>
          <TechStackBadge tech='Html' />
          <TechStackBadge tech='CSS' />
          <TechStackBadge tech='JavaScript' />
          <TechStackBadge tech='TypeScript' />
          <TechStackBadge tech='StyledComponents' />
          <TechStackBadge tech='CSSModules' />
          <TechStackBadge tech='Tailwind' />
          <TechStackBadge tech='Zustand' />
          <TechStackBadge tech='React' />
          <TechStackBadge tech='ReactQuery' />
          <TechStackBadge tech='NextJs' />
        </div>
      </section>

      {/* // Projects 섹션 */}
      <section id='projects' className={`${sectionStyle}`}>
        <h2 className={`${sectionTitle}`}>PROJECTS</h2>
        <TagListWrapper />
      </section>

      <div className='my-5'></div>
      {/* // Archiving 섹션 */}
      <section id='archiving' className={`${sectionStyle}`}>
        <h2 className={`${sectionTitle}`}>ARCHIVING</h2>
        <div className={`${flexRowCenter} gap-5 w-full`}>
          <Information
            svgSrc='/icons/GithubIcon.svg'
            alt='GitHub'
            title='GitHub 저장소'
            content='프론트엔드 개발 프로젝트 저장소입니다.'
            link='https://github.com/leegyuho-programer'
          />
          <Information
            svgSrc='/icons/BlogIcon.svg'
            alt='Blog'
            title='Blog 저장소'
            content='Blog 저장소입니다.'
            link='https://velog.io/@j980303/posts'
          />
        </div>
      </section>

      {/* // Career 섹션 */}
      <section id='career' className={`${flexRowCenter}`}>
        <h2 className={`${sectionTitle}`}>CAREER</h2>
      </section>

      <section id='career' className={`${flexRowCenter} h-[1000px]`}>
        {/* Career 콘텐츠 */}
        <h2 className={`${sectionTitle}`}>CAREER</h2>
        {/* ... */}
      </section>
    </div>
  );
}
