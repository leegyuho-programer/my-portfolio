export interface MenuItemProps {
  label: string;
  href: string;
}

export interface ArchivingItemProps {
  svgSrc: string;
  alt: string;
  title: string;
  content: string;
  link: string;
}

export type TechSkillProps =
  | 'Html'
  | 'CSS'
  | 'JavaScript'
  | 'TypeScript'
  | 'StyledComponents'
  | 'CSSModules'
  | 'Tailwind'
  | 'Zustand'
  | 'React'
  | 'ReactQuery'
  | 'NextJs';

export interface SectionProps {
  className?: string;
}
