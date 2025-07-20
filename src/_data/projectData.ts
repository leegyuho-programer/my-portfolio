// 기술 스택 타입을 정의하여 자동완성 및 타입 안정성 확보
export type TechStackProps =
  | 'HTML'
  | 'CSS'
  | 'CSSModules'
  | 'Styled Components'
  | 'Tailwind'
  | 'JavaScript'
  | 'TypeScript'
  | 'React'
  | 'Next.js'
  | 'React Query'
  | 'Zustand';

// MainWork의 상세 내용을 위한 인터페이스 정의
// export interface MainWorkProps {
//   title: string; // 주요 작업의 간략한 제목 (예: "Streaming SSR 적용으로 초기 렌더링 속도 개선")
//   description?: string; // 작업에 대한 간략한 설명 (선택 사항)
//   problem?: string[]; // 발생했던 문제 (선택 사항)
//   solution?: string[]; // 해결 방법 (배열로 여러 줄 가능) (선택 사항)
//   achievements?: string[]; // 성과 (배열로 여러 줄 가능) (선택 사항)
// }
export interface MainWorkProps {
  title: string; // 작업의 제목
  overview?: string; // 작업에 대한 간략한 개요
  contributions: string[]; // 기여한 내용 (리스트 형식)
}

export interface TroubleShootingProps {
  title: string; // 트러블 슈팅의 간략한 제목 (예: "Streaming SSR 적용으로 초기 렌더링 속도 개선")
  background: string; // 문제 배경
  resolutionMethod: {
    // 해결 방법
    analysis: string[]; // 원인 분석
    process: string[]; // 해결 과정
  };
  results: string[]; // 결과 및 성능 개선
  learnings: string; // 해당 경험을 통해 알게된 점
}

// 단일 프로젝트 데이터의 타입 정의
export interface ProjectProps {
  id: string;
  title: string;
  description: string; // 카드에 표시될 간략한 설명
  imageSrc: string; // 카드 이미지
  tags: string[]; // 카드에 표시될 태그
  // --- 모달에 표시될 상세 정보 ---
  period: string; // 진행 기간
  serviceDescription: string; // 서비스 상세 소개
  developmentMembers: string; // 개발 인원
  deployLink?: string; // 배포 주소 (선택 사항)
  demoLink?: string; // 데모 영상 (선택 사항항)
  githubLink: string; // 깃허브 주소
  techStacksUsed: TechStackProps[]; // 사용 기술 스택
  mainWorks: MainWorkProps[]; // 주요 작업들
  troubleShootings: TroubleShootingProps[];
}

export const projectData: ProjectProps[] = [
  {
    id: 'wikied',
    title: 'Wikied',
    description:
      'Wikied는 위키 페이지를 만들고 친구들과 실시간으로 공유·편집할 수 있는 협업 기반 문서 플랫폼입니다.',
    imageSrc: '/images/WikiedImage.png', // 실제 이미지 경로로 변경
    tags: ['개인', '반응형'],
    period:
      '기간: 2024.05 ~ 2024.07 (초기 개발) / 추가 작업 및 리팩토링: 2024.08 ~ 2025.03',
    serviceDescription:
      'Wikied는 사용자 정의로 위키 페이지를 생성하고 편집할 수 있는 플랫폼입니다. 생성한 위키 페이지의 링크를 복사하여 친구들과 공유할 수 있으며, 그들이 함께 작성하도록 초대할 수 있습니다. 또한, 자유게시판에서 글을 작성할 수 있으며, 많은 좋아요를 받은 글은 베스트 게시글에 오를 수 있습니다.',
    developmentMembers: '개발 인원: 1인',
    deployLink: 'https://wikied.vercel.app/', // 실제 배포 주소로 변경
    githubLink: 'https://github.com/leegyuho-programer/Wikied', // 실제 GitHub 주소로 변경
    techStacksUsed: [
      'React',
      'TypeScript',
      'Next.js',
      'React Query',
      'CSSModules',
      'Zustand',
    ],
    // mainWorks: [
    //   {
    //     title: 'Streaming SSR 적용으로 초기 렌더링 속도 개선',
    //     problem: [
    //       'Article 페이지에서 모든 콘텐츠가 준비될 때까지 HTML이 지연 렌더링되어 사용자 체감 속도 저하 및 LCP 지표 악화.',
    //     ],
    //     solution: [
    //       'Next.js App Router 환경에서 React의 <Suspense>를 활용한 Streaming SSR을 적용하여, 주요 콘텐츠와 비동기 댓글 컴포넌트를 독립적으로 렌더링.',
    //       'fallback으로 Skeleton UI를 지정하여 주요 콘텐츠를 우선 표시하고, 댓글은 백그라운드에서 병렬 로딩.',
    //     ],
    //     achievements: [
    //       'LCP 2.4초 → 2.1초 (약 12.5% 단축)',
    //       '댓글 컴포넌트 렌더링 병목 제거 및 UX 개선',
    //       '서버 로그를 통해 Streaming 방식의 순차 렌더링 확인, 사용자 체감 성능 향상 및 페이지 응답성 개선',
    //     ],
    //   },
    //   {
    //     title: '낙관적 업데이트 적용으로 UI 반응 속도 개선',
    //     problem: ['API 응답 대기 시간으로 인한 UI 반응 속도 저하.'],
    //     solution: [
    //       'React Query의 useMutation 훅을 활용한 낙관적 업데이트를 적용, UI를 즉시 변경하고 응답 실패 시 롤백 기능 구현.',
    //     ],
    //     achievements: [
    //       'UI 반응 속도를 60% 개선하여 사용자 인터랙션에 대한 즉각적인 피드백을 제공하고, 데이터 정합성을 유지',
    //     ],
    //   },
    //   {
    //     title: 'SVG 최적화 및 렌더링 성능 개선',
    //     problem: ['API 응답 대기 시간으로 인한 UI 반응 속도 저하.'],
    //     solution: [
    //       'React Query의 useMutation 훅을 활용한 낙관적 업데이트를 적용, UI를 즉시 변경하고 응답 실패 시 롤백 기능 구현.',
    //     ],
    //     achievements: [
    //       'LCP(최대 콘텐츠 페인트) 시간을 28% 단축, 렌더링 시간 44%, 최대 지연 시간 51% 개선.',
    //     ],
    //   },
    //   {
    //     title: 'Lighthouse 성능 지표 90점 이상 달성',
    //     problem: [
    //       '초기 Lighthouse 점수가 60~80점대로 낮아 사용자 경험 및 SEO에 부정적 영향.',
    //     ],
    //     solution: [
    //       '데이터 패칭 최적화: `react-query` 도입으로 API 요청 캐싱 및 상태 관리 효율화.',
    //       '스켈레톤 UI 도입: 로딩 시 시각적 피드백 제공.',
    //       '렌더링 방식 최적화: 일부 페이지를 **SSR, ISR, Streaming SSR로 전환**하여 초기 로딩 성능 및 SEO 개선.',
    //     ],
    //     achievements: [
    //       '대부분의 페이지에서 Lighthouse 성능 점수 90점 이상 달성 및 실제 사용자 환경에서의 반응성/UX 대폭 향상. ',
    //     ],
    //   },
    //   {
    //     title: '검색 기능 성능 최적화',
    //     problem: ['사용자 입력 중복으로 인한 불필요한 API 호출 및 서버 부하.'],
    //     solution: [
    //       'lodash의 debounce 기능을 활용하여 사용자 최종 입력 500ms 후 검색이 트리거되도록 구현.',
    //       '엔터키/버튼 클릭 시 대기 중인 debounce 작업 즉시 취소 로직 추가.',
    //     ],
    //     achievements: [
    //       '16자 입력 시 API 호출 횟수를 94% 감소시켜 서버 부하와 네트워크 트래픽을 크게 절감',
    //     ],
    //   },
    // ],
    mainWorks: [
      {
        title: '낙관적 업데이트 적용으로 UI 반응 속도 개선',
        overview:
          'API 응답 대기 시간으로 인해 발생할 수 있는 UI 반응 속도 저하 문제를 해결했습니다.',
        contributions: [
          'React Query의 `useMutation` 훅을 활용한 낙관적 업데이트를 적용하여, 데이터 변경 요청 시 UI를 즉시 변경하고 응답 실패 시 롤백하는 기능을 구현',
          'UI 반응 속도를 60% 개선하여 사용자 인터랙션에 대한 즉각적인 피드백 제공 및 데이터 정합성 유지',
        ],
      },
      {
        title: '검색 기능 성능 최적화',
        overview:
          '사용자 입력 중복으로 인한 불필요한 API 호출 및 서버 부하를 줄이기 위한 검색 기능 성능 최적화를 진행했습니다.',
        contributions: [
          '`lodash`의 `debounce` 기능을 활용하여 사용자 최종 입력 500ms 후에만 검색 API가 트리거되도록 구현',
          '엔터키 입력이나 검색 버튼 클릭 시 대기 중인 `debounce` 작업을 즉시 취소하는 로직 추가',
          '16자 입력 시 API 호출 횟수를 94% 감소시켜 서버 부하와 네트워크 트래픽 크게 절감',
        ],
      },
      {
        title: '페이지네이션 성능 최적화',
        overview:
          '페이지 전환 시 데이터 중복 요청으로 인한 로딩 시간 증가 및 사용자 경험 저하를 해결했습니다.',
        contributions: [
          'React Query의 `useQuery` 훅과 `placeholderData` 옵션을 사용하여 페이지 전환 시 이전 데이터를 즉시 표시하며 새로운 데이터를 백그라운드에서 요청하는 방식 적용',
          '로딩 시간을 44% 단축, 화면 깜빡임을 84% 감소, 최대 지연 시간을 51% 개선하여 사용자에게 부드러운 페이지 전환 경험 제공',
        ],
      },
      {
        title: '마크다운 기반 직관적인 문서 작성 인터페이스 구현',
        overview:
          '비기술적인 사용자도 쉽게 문서를 작성하고 편집할 수 있도록 마크다운 기반의 편집기를 구현했습니다.',
        contributions: [
          'React Quill을 활용하여 텍스트 형식, 링크, 이미지 등 다양한 콘텐츠를 직관적으로 작성 및 편집할 수 있는 환경 제공',
          '사용자 접근성과 편의성을 대폭 향상시켜 누구나 쉽게 고품질의 문서를 생성할 수 있게 기여',
        ],
      },
      {
        title: '반응형 디자인 적용으로 최적화된 사용자 경험 제공',
        overview:
          '모바일, 태블릿, 데스크탑 등 다양한 디바이스에서 일관되고 최적화된 사용자 경험을 제공하기 위해 반응형 디자인을 적용했습니다.',
        contributions: [
          '다양한 화면 크기에 맞춰 레이아웃과 콘텐츠가 자동으로 조정되도록 구현',
          '어떤 디바이스에서도 일관되고 최적화된 UI/UX를 제공하여 사용자 편의성과 접근성을 개선',
        ],
      },
    ],
    troubleShootings: [
      {
        title: '?sssss?', // 간략한 제목 추가
        background:
          '초기에는 Article 페이지 전체 콘텐츠가 모두 준비된 후에야 화면이 렌더링되는 구조였습니다. 이로 인해, 사용자가 첫 번째 주요 콘텐츠를 보기까지 지연이 발생했고, LCP(Largest Contentful Paint)가 2.4초로 기준선에 근접한 느린 수준이었습니다. 특히, 댓글(CommentSection)처럼 비동기 데이터를 필요로 하는 컴포넌트가 병목으로 작용하여 초기 화면 렌더링을 지연시켰고, 사용자 체감 속도가 저하되는 문제가 있었습니다.',
        resolutionMethod: {
          analysis: [
            '모든 컴포넌트가 준비될 때까지 HTML 전송이 지연',
            '비동기 컴포넌트가 초기 렌더링 병목을 유발',
            'React의 SSR 방식이 전체 페이지를 묶어 렌더링하는 구조로 UX에 불리하게 작용',
          ],
          process: [
            'React Suspense 기반의 Streaming SSR 적용: Next.js의 App Router 환경과 React Suspense를 활용하여, 주요 콘텐츠와 댓글을 독립적인 <Suspense>로 분리, fallback={<Skeleton />}을 사용해 주요 콘텐츠(ArticlePage)는 먼저 렌더링되고, 댓글(CommentSection)은 백그라운드에서 병렬 로딩',
            '서버 콘솔 로그를 통해 Streaming SSR 적용 여부 검증: 각 컴포넌트에 console.log()를 삽입하여 순차 렌더링 확인, ArticlePage → CommentSection 순서로 출력되어 Streaming 방식으로 전달되고 있음을 확인',
          ],
        },
        results: [
          'LCP(최대 콘텐츠 페인트): 2.4초 → 2.1초 (약 12.5% 단축)',
          '주요 콘텐츠가 더 빨리 렌더링되어 사용자 체감 속도 개선',
          '댓글 컴포넌트는 백그라운드에서 로딩되어 UX 분리 및 체감 성능 향상',
        ],
        learnings:
          'Streaming SSR을 적용하면 모든 콘텐츠를 기다리지 않고 주요 콘텐츠를 먼저 렌더링할 수 있어, 초기 반응성(LCP)과 사용자 경험을 효과적으로 개선할 수 있음을 체감했습니다. 특히, React Suspense와 Next.js의 지원을 활용하면 점진적인 페이지 로딩 전략이 구현 가능하며, 이는 UX와 SEO 모두에 긍정적인 영향을 미친다는 점을 실감했습니다.',
      },
    ],
  },
];
