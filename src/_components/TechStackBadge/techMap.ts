export const TECH_MAP = {
  Html: {
    label: 'Html',
    svgSrc: '/icons/HtmlIcon.svg',
    alt: 'Html logo',
  },
  CSS: {
    label: 'CSS',
    svgSrc: '/icons/CSSIcon.svg',
    alt: 'CSS logo',
  },
  CSSModules: {
    label: 'CSSModules',
    svgSrc: '/icons/CSSModulesIcon.svg',
    alt: 'CSSModules logo',
  },
  StyledComponents: {
    label: 'StyledComponents',
    svgSrc: '/icons/StyledComponentsIcon.svg',
    alt: 'StyledComponents logo',
  },
  Tailwind: {
    label: 'Tailwind',
    svgSrc: '/icons/TailwindIcon.svg',
    alt: 'Tailwind logo',
  },
  JavaScript: {
    label: 'JavaScript',
    svgSrc: '/icons/JavaScriptIcon.svg',
    alt: 'JavaScript logo',
  },
  TypeScript: {
    label: 'TypeScript',
    svgSrc: '/icons/TypeScriptIcon.svg',
    alt: 'TypeScript logo',
  },
  React: {
    label: 'React',
    svgSrc: '/icons/ReactIcon.svg',
    alt: 'React logo',
  },
  NextJs: {
    label: 'NextJs',
    svgSrc: '/icons/NextJsIcon.svg',
    alt: 'NextJs logo',
  },
  ReactQuery: {
    label: 'ReactQuery',
    svgSrc: '/icons/ReactQueryIcon.svg',
    alt: 'ReactQuery logo',
  },
  Zustand: {
    label: 'Zustand',
    alt: 'Zustand',
  },
} as const;

export type TechStackType = keyof typeof TECH_MAP;
