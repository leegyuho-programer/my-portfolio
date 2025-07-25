'use client';

import Button from '@/_components/Button/Button';
import NavBar from '@/_components/NavBar/NavBar';
import TagListWrapper from '@/_components/TagList/TagListWrapper';
import TechStackBadge from '@/_components/TechStackBadge/TechStackBadge';
import { flexCenter } from './styles';
import CloseIconButton from '@/_components/CloseIconButton/CloseIconButton';
import ProjectSectionClient from '@/_components/projectSection/ProjectSectionClient';
import Information from '@/_components/Information/Information';

export default function Home() {
  return (
    <div>
      <NavBar
        menuItems={[
          { label: 'About me', href: '#about-me' },
          { label: 'Skills', href: '#skills' },
          { label: 'Archiving', href: '#archiving' },
          { label: 'Projects', href: '#projects' },
          { label: 'Career', href: '#career' },
        ]}
      />
      <div className={`mt-[72px] ${flexCenter}`}>
        <Button>더 알아보기 ↓</Button>
      </div>
      {/* // About Me 섹션 */}
      <section
        id='about-me'
        className='scroll-mt-[72px] py-16 md:py-24 bg-[#333] mt-[72px]'
      >
        {/* About Me 콘텐츠 */}
        <h2 className='text-2xl font-bold text-white'>ABOUT ME</h2>
        {/* ... */}
      </section>
      {/* // Skills 섹션 */}
      <section
        id='skills'
        className='scroll-mt-[72px] py-16 bg-background-secondary'
      >
        {/* Skills 콘텐츠 */}
        <h2 className='text-2xl font-bold text-text-main'>SKILLS</h2>
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
      <TagListWrapper />

      <div className='my-5'></div>

      {/* <Card>
        <Card.Hidden>
          <Card.Image src='/images/WikiedImage.png' alt='Wikied 이미지' />
          <Card.Content
            title='Wikied'
            description='아야어여오요우유으이이이이이이이이이아야어여오요우유으이이이이이이이이이.'
          />
          <Card.Tags tags={['개인', '반응형']} />
        </Card.Hidden>

        <Card.Hover
          title='Wikied'
          text='자세히 보기'
          onOpenDetail={() => alert('ㅎㅇ')}
        />
      </Card> */}
      <div className='flex justify-center items-center w-[32px] h-[32px] bg-black'>
        <CloseIconButton onClick={() => {}} />
      </div>

      <ProjectSectionClient />

      <div className='my-5'></div>
      {/* // Archiving 섹션 */}
      <section
        id='archiving'
        className='scroll-mt-[72px] py-16 bg-gray-800 text-white'
      >
        {' '}
        {/* 이 섹션은 배경색이 어두우므로 텍스트 색상을 대비되게 설정 */}
        {/* Archiving 콘텐츠 */}
        <h2 className='text-2xl font-bold'>ARCHIVING</h2>
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
      {/* // Projects 섹션 */}
      <section
        id='projects'
        className='scroll-mt-[72px] py-16 bg-background-main'
      >
        {/* Projects 콘텐츠 */}
        <h2 className='text-2xl font-bold text-text-main'>PROJECTS</h2>
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
