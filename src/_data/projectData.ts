export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  features?: string[];
  technologies?: string[];
  challenges?: string;
  outcome?: string;
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
}

export const projectData: Project[] = [
  {
    id: 'wikied',
    title: 'Wikied',
    description:
      '위키 기반의 협업 지식 관리 플랫폼으로, 사용자들이 함께 문서를 작성하고 편집할 수 있는 웹 애플리케이션입니다. 실시간 협업 기능과 직관적인 사용자 인터페이스를 제공하여 팀의 지식 공유를 효율적으로 도와줍니다.',
    image: '/images/WikiedImage.png',
    features: [
      '실시간 협업 문서 편집',
      '마크다운 기반 문서 작성',
      '사용자 권한 관리 시스템',
      '문서 히스토리 추적',
      '반응형 디자인 지원',
      '검색 및 필터링 기능',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Supabase',
      'Socket.io',
    ],
    challenges:
      '실시간 협업 기능 구현 시 동시 편집으로 인한 충돌 문제를 해결해야 했습니다. Operational Transformation 알고리즘을 적용하여 여러 사용자가 동시에 편집할 때 발생하는 충돌을 효과적으로 처리했습니다.',
    outcome:
      '사용자 피드백을 통해 90% 이상의 만족도를 달성했으며, 팀의 문서 작성 효율성이 40% 향상되었습니다. 현재 베타 테스트 단계에서 50명 이상의 사용자가 활발히 이용하고 있습니다.',
    demoUrl: 'https://wikied-demo.vercel.app',
    githubUrl: 'https://github.com/username/wikied',
    tags: ['개인', '반응형'],
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description:
      '개인 포트폴리오 웹사이트로, 제 프로젝트들과 기술 스택, 경력 사항을 소개하는 반응형 웹 애플리케이션입니다.',
    image: '/images/portfolio.png',
    features: [
      '반응형 디자인',
      '다크 모드 지원',
      '프로젝트 모달 시스템',
      '스킬 뱃지 시스템',
      '스무스 스크롤 네비게이션',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    challenges:
      '인터셉팅 라우트를 활용한 모달 시스템 구현과 서버 컴포넌트 최적화가 주요 과제였습니다.',
    outcome:
      '깔끔한 UI/UX와 빠른 로딩 속도를 달성했으며, 포트폴리오 조회수가 지속적으로 증가하고 있습니다.',
    demoUrl: 'https://myportfolio.vercel.app',
    githubUrl: 'https://github.com/username/portfolio',
    tags: ['개인', '반응형'],
  },
];
