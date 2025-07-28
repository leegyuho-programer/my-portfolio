import { MenuItemProps, ArchivingItemProps, TechSkillProps } from '@/types';

export const MENU_ITEMS: MenuItemProps[] = [
  { label: 'About me', href: '#aboutMe' },
  { label: 'Skills', href: '#skills' },
  { label: 'Archiving', href: '#archiving' },
  { label: 'Projects', href: '#projects' },
  { label: 'Career', href: '#career' },
] as const;

export const ARCHIVING_DATA: ArchivingItemProps[] = [
  {
    svgSrc: '/icons/GithubIcon.svg',
    alt: 'GitHub',
    title: 'GitHub 저장소',
    content: '프론트엔드 개발 프로젝트 저장소입니다.',
    link: 'https://github.com/leegyuho-programer',
  },
  {
    svgSrc: '/icons/BlogIcon.svg',
    alt: 'Blog',
    title: 'Blog 저장소',
    content: 'Blog 저장소입니다.',
    link: 'https://velog.io/@j980303/posts',
  },
] as const;

export const TECH_SKILLS: TechSkillProps[] = [
  'Html',
  'CSS',
  'JavaScript',
  'TypeScript',
  'StyledComponents',
  'CSSModules',
  'Tailwind',
  'Zustand',
  'React',
  'ReactQuery',
  'NextJs',
] as const;
