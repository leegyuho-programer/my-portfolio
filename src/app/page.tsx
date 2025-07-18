import Button from '@/_components/Button/Button';
import NavBar from '@/_components/NavBar/NavBar';
import { flexCenter } from './styles';
import TechStackBadge from '@/_components/TechStackBadge/TechStackBadge';
import TagListWrapper from '@/_components/TagList/TagListWrapper';
import Card from '@/_components/Card/Card';

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

      <Card>
        <Card.Hidden>
          <Card.Image src='/images/WikiedImage.png' alt='Wikied 이미지' />
          <Card.Content
            title='Wikied'
            description='아야어여오요우유으이이이이이이이이이아야어여오요우유으이이이이이이이이이.'
          />
          <Card.Tags tags={['개인', '반응형']} />
        </Card.Hidden>

        <Card.Hover title='Wikied' text='자세히 보기' />
      </Card>

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
