'use client';

import Button from '@/_components/Button/Button';
import NavBar from '@/_components/NavBar/NavBar';
import TagListWrapper from '@/_components/TagList/TagListWrapper';
import TechStackBadge from '@/_components/TechStackBadge/TechStackBadge';
import { flexCenter, flexColCenter } from './styles';
import CloseIconButton from '@/_components/CloseIconButton/CloseIconButton';
import ProjectSectionClient from '@/_components/projectSection/ProjectSectionClient';
import Information from '@/_components/Information/Information';

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
      <section
        id='about-me'
        className={`scroll-mt-[72px] py-16 mt-[72px] ${flexColCenter}`}
      >
        <h2 className='text-2xl font-bold text-white'>ABOUT ME</h2>
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
      <section id='skills' className={`py-16 mx-auto ${flexColCenter}`}>
        {/* Skills 콘텐츠 */}
        <h2 className='text-2xl font-bold text-white'>SKILLS</h2>
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
        {/* ... */}
      </section>

      {/* // Projects 섹션 */}
      <section id='projects' className={`py-16 mx-auto ${flexColCenter}`}>
        {/* Projects 콘텐츠 */}
        <h2 className='text-2xl font-bold text-white'>PROJECTS</h2>
        <TagListWrapper />
      </section>

      <div className='my-5'></div>
      {/* // Archiving 섹션 */}
      <section id='archiving' className={`py-16 mx-auto ${flexColCenter}`}>
        {' '}
        {/* 이 섹션은 배경색이 어두우므로 텍스트 색상을 대비되게 설정 */}
        {/* Archiving 콘텐츠 */}
        <h2 className='text-2xl font-bold text-white'>ARCHIVING</h2>
        <div className='flex flex-row gap-5'>
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
        {/* ... */}
      </section>
      {/* // Career 섹션 (예시) */}
      <section id='career' className='scroll-mt-[72px] py-16 bg-[#333]'>
        {/* Career 콘텐츠 */}
        <h2 className='text-2xl font-bold text-white'>CAREER</h2>
        {/* ... */}
      </section>
      <section
        id='career'
        className='scroll-mt-[72px] py-16 bg-[#333] h-[1000px]'
      >
        {/* Career 콘텐츠 */}
        <h2 className='text-2xl font-bold text-white'>CAREER</h2>
        {/* ... */}
      </section>
    </div>
  );
}
