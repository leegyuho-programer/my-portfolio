import { InformationProps } from '@/_components/Information/Information';
import { MenuItemProps } from '@/_components/NavBar/NavBar';
import { TechStackType } from '@/_components/TechStackBadge/techMap';

export const MENU_ITEMS: MenuItemProps[] = [
  { label: 'About me', href: '#aboutMe' },
  { label: 'Archiving', href: '#archiving' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  // { label: 'Career', href: '#career' },
] as const;

export const INFORMATION_DATA: InformationProps[] = [
  {
    svgSrc: '/icons/HumanIcon.svg',
    alt: 'HumanIcon',
    title: '이름',
    content: '이규호',
  },
  {
    svgSrc: '/icons/CalendarIcon.svg',
    alt: 'CalendarIcon',
    title: '생년월일',
    content: '98.03.03',
  },
  {
    svgSrc: '/icons/MessageIcon.svg',
    alt: 'MessageIcon',
    title: '이메일',
    content: 'leegyuho98@gmail.com',
  },
  {
    svgSrc: '/icons/LocationIcon.svg',
    alt: 'LocationIcon',
    title: '위치',
    content: '경기도 안양시',
  },
  {
    svgSrc: '/icons/PhoneIcon.svg',
    alt: 'PhoneIcon',
    title: '연락처',
    content: '010-4172-0387',
  },
] as const;

export const ARCHIVING_DATA: InformationProps[] = [
  {
    svgSrc: '/icons/GitHubIcon.svg',
    alt: 'GitHub',
    title: 'GitHub 저장소',
    content: '프론트엔드 개발 프로젝트 저장소입니다.',
    link: 'https://github.com/leegyuho-programer',
  },
  {
    svgSrc: '/icons/BlogIcon.svg',
    alt: 'Blog',
    title: 'Blog 저장소',
    content:
      '프론트엔드 개발 지식과 성장 과정을 기록하고 공유하는 기술 블로그입니다.',
    link: 'https://velog.io/@j980303/posts',
  },
] as const;

export const TECH_SKILLS: TechStackType[] = [
  'Html',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'NextJs',
  'StyledComponents',
  'CSSModules',
  'Tailwind',
  'ReactQuery',
  'Zustand',
] as const;
