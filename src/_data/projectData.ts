// 기술 스택 타입을 정의하여 자동완성 및 타입 안정성 확보
export type TechStackProps =
  | 'Html'
  | 'CSS'
  | 'CSSModules'
  | 'StyledComponents'
  | 'Tailwind'
  | 'JavaScript'
  | 'TypeScript'
  | 'React'
  | 'NextJs'
  | 'ReactQuery'
  | 'Zustand';

// 팀 여부 정의
export type ProjectType = 'Team' | 'Single';

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
  projectType: ProjectType; // 개인/팀 여부
  developmentMembers: string; // 개발 인원
  myContributions?: string; // 내가 맡은 역할 간단 요약
  deployLink?: string; // 배포 주소 (선택 사항)
  demoLink?: string; // 데모 영상 (선택 사항)
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
    imageSrc: '/Images/WikiedImage.png', // 실제 이미지 경로로 변경
    tags: ['개인', '반응형'],
    period:
      '기간: 2024.05 ~ 2024.07 (초기 개발) / 추가 작업 및 리팩토링: 2024.08 ~ 2025.03',
    serviceDescription:
      'Wikied는 사용자 정의로 위키 페이지를 생성하고 편집할 수 있는 플랫폼입니다. 생성한 위키 페이지의 링크를 복사하여 친구들과 공유할 수 있으며, 그들이 함께 작성하도록 초대할 수 있습니다. 또한, **자유게시판**에서 글을 작성할 수 있으며, 많은 좋아요를 받은 글은 **베스트 게시글**에 오를 수 있습니다.',
    developmentMembers: '개발 인원: **1명**',
    projectType: 'Single',
    deployLink: 'https://wikied.vercel.app/',
    githubLink: 'https://github.com/leegyuho-programer/Wikied',
    techStacksUsed: [
      'React',
      'TypeScript',
      'NextJs',
      'ReactQuery',
      'CSSModules',
      'Zustand',
    ],
    mainWorks: [
      {
        title: '낙관적 업데이트 적용으로 UI 반응 속도 개선',
        overview:
          'API 응답 대기 시간으로 인해 발생할 수 있는 **UI 반응 속도 저하 문제**를 해결했습니다.',
        contributions: [
          '**React Query**의 `useMutation` 훅을 활용한 **낙관적 업데이트**를 적용하여, 데이터 변경 요청 시 UI를 즉시 변경하고 응답 실패 시 롤백하는 기능을 구현',
          '**UI 반응 속도를 60% 개선**하여 사용자 인터랙션에 대한 즉각적인 피드백 제공 및 데이터 정합성 유지',
        ],
      },
      {
        title: '검색 기능 성능 최적화',
        overview:
          '사용자 입력 중복으로 인한 불필요한 API 호출 및 서버 부하를 줄이기 위한 **검색 기능 성능 최적화**를 진행했습니다.',
        contributions: [
          '`lodash`의 `debounce` 기능을 활용하여 **사용자 최종 입력 500ms 후에만 검색 API가 트리거**되도록 구현',
          '**엔터키 입력**이나 **검색 버튼 클릭 시 대기 중인** `debounce` **작업을 즉시 취소**하는 로직 추가',
          '**16자 입력 시 API 호출 횟수를 94% 감소**시켜 서버 부하와 네트워크 트래픽 크게 절감',
        ],
      },
      {
        title: '페이지네이션 성능 최적화',
        overview:
          '페이지 전환 시 데이터 중복 요청으로 인한 **로딩 시간 증가 및 사용자 경험 저하**를 해결했습니다.',
        contributions: [
          '**React Query**의 `useQuery` 훅과 `placeholderData` 옵션을 사용하여 **페이지 전환 시 이전 데이터를 즉시 표시**하며 새로운 데이터를 백그라운드에서 요청하는 방식 적용',
          '**로딩 시간을 44% 단축**, **화면 깜빡임을 84% 감소**, **최대 지연 시간을 51% 개선**하여 사용자에게 부드러운 페이지 전환 경험 제공',
        ],
      },
      {
        title: '마크다운 기반 직관적인 문서 작성 인터페이스 구현',
        overview:
          '비기술적인 사용자도 쉽게 문서를 작성하고 편집할 수 있도록 **마크다운 기반의 편집기**를 구현했습니다.',
        contributions: [
          '**React Quill**을 활용하여 텍스트 형식, 링크, 이미지 등 다양한 콘텐츠를 직관적으로 작성 및 편집할 수 있는 환경 제공',
          '**사용자 접근성과 편의성을 대폭 향상**시켜 누구나 쉽게 고품질의 문서를 생성할 수 있게 기여',
        ],
      },
      {
        title: '반응형 디자인 적용으로 최적화된 사용자 경험 제공',
        overview:
          '모바일, 태블릿, 데스크탑 등 **다양한 디바이스에서 일관되고 최적화된 사용자 경험**을 제공하기 위해 **반응형 디자인**을 적용했습니다.',
        contributions: [
          '**다양한 화면 크기에 맞춰 레이아웃과 콘텐츠가 자동으로 조정**되도록 구현',
          '어떤 디바이스에서도 **일관되고 최적화된 UI/UX**를 제공하여 사용자 편의성과 접근성을 개선',
        ],
      },
    ],
    troubleShootings: [
      {
        title: 'Streaming SSR 적용으로 초기 렌더링 속도 개선',
        background:
          'Article 페이지 전체 콘텐츠가 모두 준비된 후 렌더링되는 구조로 인해 주요 콘텐츠 표시까지 지연이 발생했고, 특히 **댓글 영역의 비동기 로딩**이 병목이 되어 **LCP가 2.4초로 느린 편**이었습니다.',
        resolutionMethod: {
          analysis: [
            '모든 컴포넌트가 준비될 때까지 HTML 전송이 지연됨', // 이 부분은 강조하지 않아도 내용상 이해 가능
            '**비동기 컴포넌트**가 초기 렌더링 병목을 유발',
            'React SSR이 페이지 전체를 묶어 렌더링하여 UX 저하', // 이 부분은 강조하지 않아도 내용상 이해 가능
          ],
          process: [
            '**React Suspense 기반의 Streaming SSR**을 도입해 주요 콘텐츠와 댓글을 `<Suspense>`로 분리',
            '**fallback 컴포넌트**를 사용하여 주요 콘텐츠 먼저 렌더링 후 **댓글 병렬 로딩**',
            '서버 로그를 활용해 렌더링 순서를 검증하여 Streaming SSR 정상 작동 확인', // 이 부분은 강조하지 않아도 내용상 이해 가능
          ],
        },
        results: [
          '**LCP 2.4초 → 2.1초로 약 12.5% 개선**',
          '**중요 콘텐츠가 더 빠르게 렌더링**되어 사용자 체감 속도 향상',
          '댓글 컴포넌트를 백그라운드 로딩하여 초기 UX 분리', // 이 부분은 강조하지 않아도 내용상 이해 가능
        ],
        learnings:
          '**Streaming SSR**을 통해 주요 콘텐츠를 우선 렌더링하면 초기 반응성과 SEO를 동시에 개선할 수 있으며, **React Suspense와 Next.js App Router의 조합**이 유용하다는 점을 체감했습니다.',
      },
      {
        title: 'SVG 최적화 및 렌더링 성능 개선',
        background:
          'SVG 아이콘을 인라인 삽입하거나 `<Image>`로 불러올 경우, **파일 용량 증가와 중복 속성**으로 인해 렌더링 속도가 저하되고 **LCP 점수가 낮아졌습니다.**',
        resolutionMethod: {
          analysis: [
            'SVG에 불필요한 속성과 중복된 코드 포함됨',
            '**인라인 SVG**로 인해 DOM 복잡도 증가',
            '스타일 오버라이드 어려움 및 **SVG 파일 크기 증가로 렌더링 성능 저하**',
          ],
          process: [
            '**SVGR로 SVG를 React 컴포넌트화**하여 props 기반 스타일 변경 지원',
            '**SVGO를 사용해 속성 정리 및 용량 최적화**',
            '자주 쓰는 아이콘은 컴포넌트, 단발성 이미지는 `next/image`로 처리',
          ],
        },
        results: [
          '**LCP 약 28% 단축**',
          '**렌더링 속도 44% 향상**',
          '**최대 지연 시간 51% 감소**',
        ],
        learnings:
          '**SVG 최적화**는 렌더링 성능과 유지보수 모두에 긍정적인 영향을 주며, **SVGR과 SVGO 조합**은 아이콘 관리에 효율적인 방법임을 알게 되었습니다.',
      },
      {
        title: 'Next.js 내장 모달 라우팅 vs React 포탈 선택',
        background:
          '**Next.js의 모달 라우팅**을 사용했지만, **URL 변경과 상태 관리의 복잡성**이 커지면서 UI 유지 관리가 어려워졌습니다.',
        resolutionMethod: {
          analysis: [
            '**URL 상태와 모달 UI 상태를 일관되게 동기화**해야 하며, 이로 인해 코드 복잡도 상승',
            '라우팅 변화에 따른 예외 처리 및 side effect 관리가 필요',
          ],
          process: [
            '초기에는 **route intercepting 기반 모달 구현**',
            '**라우팅 복잡도와 상태 충돌**을 경험한 후, **React Portal 기반 모달로 전환**',
            '전역 layout에 모달 portal 위치를 지정하고 상태는 context로 관리',
          ],
        },
        results: [
          '**URL 상태와 분리된 모달 제어**로 **유지보수 간소화**',
          '브라우저 히스토리 간섭 없이 모달 상태를 독립적으로 관리 가능',
        ],
        learnings:
          '**모달 상태 관리 복잡도**에 따라 **라우팅 기반 방식보다 React Portal이 더 적절**할 수 있으며, **기술 선택은 요구되는 UX 및 관리 비용에 따라 달라져야 함**을 깨달았습니다.',
      },
    ],
  },
  {
    id: 'my-portfolio',
    title: 'MyPortfolio',
    description: '일상의 업무를 효율적으로 계획할 수 있는 웹사이트입니다.',
    imageSrc: '/Images/MyPortfolioImage.png',
    tags: ['개인'],
    period: '2025.07 ~ 2024.08',
    serviceDescription:
      'TaskyTasky는 일상의 업무를 효율적으로 계획할 수 있는 플랫폼입니다. 날짜와 시간에 따라 할 일을 간편하게 정리하고 일정을 효과적으로 관리할 수 있습니다. 칼럼을 이용해 할 일을 구분하고 카테고리로 정리할 수 있으며, 마감일, 태그, 사진 등을 이용해 다양하게 할 일을 기록할 수 있습니다.',
    projectType: 'Single',
    developmentMembers: '개발 인원: 1명',
    myContributions:
      '공통 컴포넌트 개발, 로그인/회원가입 페이지 구현, proxy 기능 이용하여 API 연결 함수 제공, 사이드 메뉴 무한스크롤',
    deployLink: 'https://leegyuho-portfolio.vercel.app/',
    githubLink: 'https://github.com/leegyuho-programer/my-portfolio',
    techStacksUsed: [
      'React',
      'TypeScript',
      'ReactQuery',
      'Zustand',
      'NextJs',
      'StyledComponents',
    ],
    mainWorks: [
      {
        title: '공통 컴포넌트 개발 및 인증 시스템 개선',
        overview:
          '로그인/회원가입 페이지의 중복되는 에러 메시지 관리 문제를 해결했습니다.',
        contributions: [
          '모든 에러 메시지와 Input 에러 처리 규칙을 상수화하여 재사용성을 높이고, 공통 컴포넌트(입력 필드, 버튼, 모달, 알림 등)를 설계했습니다.',
          '중복 코드량을 약 30% 감소시켜 유지보수성을 향상시키고, 에러 관리의 일관성을 확보했습니다.',
          '일관된 UI/UX를 제공하며 코드 재사용성을 극대화했습니다. 로그인/회원가입, 마이페이지, 계정 정보 페이지 등의 UI를 구현했습니다.',
        ],
      },
      {
        title: 'Zustand 도입을 통한 전역 상태 관리 및 성능 최적화',
        overview:
          '기존 Context API 방식에서 발생하던 상태 변경 시 불필요한 전체 컴포넌트 리렌더링 문제로 인한 성능 저하를 해결했습니다.',
        contributions: [
          '가볍고 효율적인 전역 상태 관리 라이브러리인 Zustand를 도입하여 전역 상태를 관리했습니다.',
          '불필요한 렌더링을 40% 감소시키고, 전역 상태 관련 코드량을 약 25% 줄였습니다.',
          '불필요한 prop drilling을 제거하여 컴포넌트 간 데이터 흐름을 최적화하고 유지보수성을 크게 개선했습니다.',
        ],
      },
      {
        title: 'React Infinite Scroller 기반 무한 스크롤 기능 구현',
        overview:
          '페이지 전환 없이 대량의 데이터를 동적으로 로드해야 하는 요구사항과 촉박한 구현 시간.',
        contributions: [
          'React Infinite Scroller 라이브러리를 활용하여 무한 스크롤 기능을 빠르고 효율적으로 구현했습니다.',
          '페이지 전환 없이 연속적으로 데이터를 로드함으로써 **로딩 시간을 50% 단축(600ms → 300ms)**시켰습니다.',
          '불필요한 네트워크 요청 감소로 성능을 최적화하고, 사용자가 자연스럽게 콘텐츠를 탐색할 수 있도록 UX를 개선했습니다.',
        ],
      },
      {
        title: 'react-query를 활용한 API 통신 및 성능 향상',
        overview: '비효율적인 API 통신 및 데이터 로딩 문제.',
        contributions: [
          'react-query를 도입하여 API 요청 캐싱, 데이터 패칭, 상태 동기화 프로세스를 효율적으로 관리했습니다.',
          '데이터 캐싱을 활용하여 불필요한 API 요청을 감소시켰고, 백그라운드에서 자동으로 최신 정보를 동기화하여 사용자에게 항상 최신 데이터를 제공했습니다.',
          '스켈레톤 UI를 적용하여 데이터 로딩 중 사용자 경험을 향상시켰습니다.',
        ],
      },
      {
        title: '애자일 방법론 적용 및 효과적인 팀워크 관리',
        overview:
          '매일 데일리 스크럼을 진행하여 팀원 간 작업 상황을 공유하고 실시간 피드백을 제공했습니다.',
        contributions: [
          '프로젝트 종료 후 KPT(Keep, Problem, Try) 회고를 실시하여 지속적인 개선을 도모했습니다.',
          '팀원 간 원활한 커뮤니케이션을 유지하고, 프로젝트 진행 속도를 효율적으로 관리하여 성공적인 프로젝트 완수에 기여했습니다.',
        ],
      },
      {
        title: '반응형 디자인 적용으로 최적화된 사용자 경험 제공',
        overview:
          '모바일, 태블릿, 데스크탑 등 다양한 디바이스에서 일관되고 최적화된 사용자 경험을 제공하기 위해 반응형 디자인을 적용했습니다.',
        contributions: [
          '다양한 화면 크기에 맞춰 레이아웃과 콘텐츠가 자동으로 조정되도록 구현하여, 어떤 디바이스에서도 일관되고 최적화된 UI/UX를 제공함으로써 사용자 편의성과 접근성을 개선했습니다.',
        ],
      },
    ],
    troubleShootings: [
      {
        title: '무한 스크롤 기능 구현 시간 제약 문제 해결',
        background:
          '원래 팀원 중 한 분이 무한 스크롤을 커스텀 훅으로 구현하기로 했지만, 발표 전날까지 완료하지 못해 각자가 맡은 페이지에서 직접 무한 스크롤을 구현해야 하는 상황이 되었습니다. 그러나 무한 스크롤을 처음 시도하는 상황에서 시간도 촉박해 빠르게 적용할 방법이 필요했습니다.',
        resolutionMethod: {
          analysis: [
            '직접 구현 시 Intersection Observer API 또는 scroll 이벤트 활용 및 디바운싱, 최적화 작업 필요',
            '추가적인 커스텀 훅을 만들어야 하고, 테스트 및 디버깅에 시간이 소요될 가능성이 높음',
            '프로젝트 일정 문제와 구현 난이도를 고려해야 함',
          ],
          process: [
            '직접 구현하는 방법과 라이브러리를 활용하는 방법을 비교',
            '프로젝트 일정 문제와 구현 난이도를 고려하여 `react-infinite-scroller` 라이브러리 선택',
            '`InfiniteScroll` 컴포넌트를 활용하여 간단하게 적용',
            '라이브러리 내부적으로 Intersection Observer를 사용해 최적화된 동작 제공',
            'API 요청과 로딩 상태 관리를 손쉽게 처리 가능',
          ],
        },
        results: [
          '프로젝트 일정과 안정성을 고려하여 `react-infinite-scroller` 라이브러리를 성공적으로 활용했습니다.',
          '페이지 전환 없이 연속적으로 데이터를 로드함으로써 **로딩 시간을 50% 단축(600ms → 300ms)**시켰습니다.',
          '불필요한 네트워크 요청 감소로 성능을 최적화하고, 사용자가 자연스럽게 콘텐츠를 탐색할 수 있도록 UX를 개선했습니다.',
        ],
        learnings:
          '시간 제약이 있는 상황에서는 적절한 라이브러리를 선택해 빠르게 해결하는 것이 중요하다는 점을 배웠습니다. 처음 접하는 기능도 적절한 도구를 활용하면 효율적으로 구현할 수 있으며, 불필요한 작업을 줄여 개발 속도를 높일 수 있었습니다. 팀원 간 작업 분배와 일정 관리의 중요성을 다시 한 번 실감했으며, 일정이 지연될 경우 대체할 수 있는 대안을 빠르게 마련하는 것이 필요하다는 점을 배웠습니다.',
      },
    ],
  },
  {
    id: 'arttalktalk',
    title: 'ArtTalkTalk',
    description:
      '신진 작가의 작품을 자유롭게 공유하고 소통할 수 있는 온라인 아트 커뮤니티 플랫폼입니다.',
    imageSrc: '/Images/ArtTalkTalkImage.png',
    tags: ['팀', '반응형'],
    period: '기간: 2024.01 ~ 2024.02',
    serviceDescription:
      '**ArtTalkTalk**은 **신진 작가**들이 자신의 작품을 **전시**하고, **피드백**을 받으며, 자유롭게 **소통**할 수 있는 온라인 플랫폼입니다. **작품 구매 및 나눔**, **기부 기능**도 지원하여 **예술 생태계 형성**을 목표로 합니다.',
    projectType: 'Team',
    developmentMembers:
      '개발 인원: 7명 (프론트엔드 4명, 백엔드 2명, 디자이너 1명)',
    myContributions:
      '공통 컴포넌트 개발, 마이 페이지 / 프로필 수정 페이지 / 계정 정보 페이지 구현, 탈퇴 기능 구현, 댓글 CRUD 구현',
    demoLink: 'https://www.youtube.com/watch?v=JJ74mI6L7LE',
    githubLink: 'https://github.com/leegyuho-programer/ArtTalkTalk_frontend',
    techStacksUsed: [
      'React',
      'TypeScript',
      'ReactQuery',
      'Zustand',
      'NextJs',
      'Tailwind',
    ],

    mainWorks: [
      {
        title: 'react-hook-form 기반 입력 필드 상태 관리 최적화',
        overview:
          '**복잡한 입력 필드 상태 관리**를 단순화하고 **성능을 개선**했습니다.',
        contributions: [
          '`react-hook-form`의 `Controller`를 사용하여 **폼 상태**와 **유효성 검사 로직 통합**',
          '**불필요한 리렌더링 제거** 및 **코드 재사용성 향상**',
        ],
      },
      {
        title: '이미지 최적화를 통한 페이지 로드 성능 개선',
        overview:
          '**고화질 이미지**로 인한 **페이지 성능 저하**를 개선했습니다.',
        contributions: [
          '`AVIF` 포맷 도입 및 Next.js `Image` 컴포넌트를 활용한 **lazy loading 적용**',
          '**이미지 품질 유지**와 함께 **로딩 시간 최적화**',
        ],
      },
      {
        title: 'react-query로 API 통신 최적화',
        overview:
          'API 요청 최적화를 통해 **성능 향상** 및 **데이터 동기화 효율화**',
        contributions: [
          '`react-query`를 도입하여 **API 응답 캐싱** 및 **중복 요청 방지**',
          '**비동기 상태 관리 일관성 확보** 및 **UX 향상**',
        ],
      },
      {
        title: '공통 컴포넌트 및 사용자 계정 관련 페이지 구현',
        overview:
          '**계정 관련 핵심 페이지**(Mypage, 프로필 수정 등)를 **일관된 UI/UX**로 구축했습니다.',
        contributions: [
          '**공통 컴포넌트 설계** 및 **재사용 구조 구현**',
          '**탈퇴 기능 포함** 계정 관련 핵심 페이지 완성',
        ],
      },
      {
        title: '반응형 디자인 적용으로 다양한 디바이스 대응',
        overview:
          '모바일, 태블릿, 데스크탑에서 **최적의 사용자 경험 제공**을 위한 UI 대응 작업',
        contributions: [
          '`Tailwind CSS`로 **반응형 레이아웃 구현**',
          '**접근성**과 **편의성**을 고려한 디바이스 **호환성 확보**',
        ],
      },
    ],

    troubleShootings: [
      {
        title:
          '복잡한 입력 필드 상태 관리 및 유효성 검사로 인한 코드 복잡도 증가',
        background:
          '`useState`로 개별 관리하던 폼 상태와 유효성 로직이 **중복**되며 **유지보수성 저하**, **리렌더링 성능 문제** 발생',
        resolutionMethod: {
          analysis: [
            '`useState` 기반 관리로 인해 **상태 코드 장황**, **이벤트 핸들러 복잡**',
            '**중복 로직**과 **리렌더링 발생**',
          ],
          process: [
            '`react-hook-form`과 `Controller`를 도입하여 **상태 및 유효성 검사 통합**',
            '**중복 코드 제거**, **불필요한 렌더 제거**로 **성능 최적화**',
          ],
        },
        results: [
          '**입력 필드 구조 단순화** 및 **코드 유지보수성 향상**',
          '**성능 최적화** 및 **UX 개선**',
        ],
        learnings:
          '**폼 상태 관리**를 효과적으로 설계하면 **성능** 및 **유지보수** 모두에 긍정적이며, `react-hook-form`은 폼 유효성 검사에 **매우 적합한 도구**임을 알게 됐습니다.',
      },
      {
        title: '팀 간 소통 미흡으로 인한 작업 병목 발생',
        background:
          '**프론트/백엔드/디자이너 간 커뮤니케이션 부족**으로 인해 **요구사항 전달 오류**와 **타임라인 지연** 발생',
        resolutionMethod: {
          analysis: [
            '**비동기 피드백**으로 인한 **결정 지연**',
            '**우선순위 불일치**로 인해 **병목 발생**',
          ],
          process: [
            '**평일 19~22시 코어타임** 지정으로 **실시간 협업 강화**',
            '`GitHub Discussions`를 활용한 **데일리 스크럼** 도입 (Block / Done / To-do 공유)',
          ],
        },
        results: [
          '**팀원 간 작업 진행 상황 실시간 공유** 및 **대응 속도 향상**',
          '**프로젝트 일정**에 맞춘 **효율적인 협업 체계 확립**',
        ],
        learnings:
          '**코어타임**과 **데일리 스크럼**을 통한 **정기적인 소통**이 **협업 효율**을 높이고, **프로젝트 퀄리티**에 **직접적인 기여**함을 체감했습니다.',
      },
    ],
  },
  {
    id: 'taskytasky',
    title: 'TaskyTasky',
    description: '일상의 업무를 효율적으로 계획할 수 있는 웹사이트입니다.',
    imageSrc: '/Images/TaskyTaskyImage.png',
    tags: ['팀', '반응형'],
    period: '2023.12 ~ 2024.01',
    serviceDescription:
      'TaskyTasky는 일상의 업무를 **효율적으로 계획**할 수 있는 플랫폼입니다. 날짜와 시간에 따라 할 일을 간편하게 정리하고 **일정을 효과적으로 관리**할 수 있습니다. 칼럼을 이용해 할 일을 구분하고 카테고리로 정리할 수 있으며, 마감일, 태그, 사진 등을 이용해 다양하게 할 일을 기록할 수 있습니다.',
    projectType: 'Team',
    developmentMembers: '개발 인원: 5명',
    myContributions:
      '공통 컴포넌트 개발, 로그인/회원가입 페이지 구현, `proxy` 기능 이용하여 API 연결 함수 제공, 사이드 메뉴 무한스크롤',
    deployLink: 'https://taskytasky.netlify.app/',
    githubLink: 'https://github.com/leegyuho-programer/TaskyTasky',
    techStacksUsed: [
      'React',
      'TypeScript',
      'ReactQuery',
      'Zustand',
      'NextJs',
      'StyledComponents',
    ],
    mainWorks: [
      {
        title: '공통 컴포넌트 개발 및 인증 시스템 개선',
        overview:
          '로그인/회원가입 페이지의 **중복되는 에러 메시지 관리 문제**를 해결했습니다.',
        contributions: [
          '모든 에러 메시지와 `Input` 에러 처리 규칙을 **상수화하여 재사용성을 높이고**, **공통 컴포넌트** (입력 필드, 버튼, 모달, 알림 등)를 설계했습니다.',
          '**중복 코드량을 약 30% 감소**시켜 유지보수성을 향상시키고, 에러 관리의 일관성을 확보했습니다.',
          '일관된 UI/UX를 제공하며 **코드 재사용성**을 극대화했습니다. 로그인/회원가입, 마이페이지, 계정 정보 페이지 등의 UI를 구현했습니다.',
        ],
      },
      {
        title: 'Zustand 도입을 통한 전역 상태 관리 및 성능 최적화',
        overview:
          '기존 `Context API` 방식에서 발생하던 **상태 변경 시 불필요한 전체 컴포넌트 리렌더링 문제**로 인한 성능 저하를 해결했습니다.',
        contributions: [
          '**가볍고 효율적인 전역 상태 관리 라이브러리인** `Zustand`**를 도입**하여 전역 상태를 관리했습니다.',
          '**불필요한 렌더링을 40% 감소**시키고, 전역 상태 관련 코드량을 약 25% 줄였습니다.',
          '**불필요한** `prop drilling`**을 제거**하여 컴포넌트 간 데이터 흐름을 최적화하고 유지보수성을 크게 개선했습니다.',
        ],
      },
      {
        title: 'React Infinite Scroller 기반 무한 스크롤 기능 구현',
        overview:
          '**페이지 전환 없이 대량의 데이터를 동적으로 로드**해야 하는 요구사항과 촉박한 구현 시간.',
        contributions: [
          '`React Infinite Scroller` 라이브러리를 활용하여 **무한 스크롤 기능을 빠르고 효율적으로 구현**했습니다.',
          '**페이지 전환 없이 연속적으로 데이터를 로드**함으로써 **로딩 시간을 50% 단축(**`600ms`** → **`300ms`**)**시켰습니다.',
          '**불필요한 네트워크 요청 감소**로 성능을 최적화하고, 사용자가 자연스럽게 콘텐츠를 탐색할 수 있도록 UX를 개선했습니다.',
        ],
      },
      {
        title: 'react-query를 활용한 API 통신 및 성능 향상',
        overview: '**비효율적인 API 통신 및 데이터 로딩 문제**.',
        contributions: [
          '`react-query`를 도입하여 **API 요청 캐싱**, **데이터 패칭**, **상태 동기화 프로세스**를 효율적으로 관리했습니다.',
          '**데이터 캐싱**을 활용하여 불필요한 API 요청을 감소시켰고, **백그라운드에서 자동으로 최신 정보를 동기화**하여 사용자에게 항상 최신 데이터를 제공했습니다.',
          '**스켈레톤 UI**를 적용하여 데이터 로딩 중 사용자 경험을 향상시켰습니다.',
        ],
      },
      {
        title: '애자일 방법론 적용 및 효과적인 팀워크 관리',
        overview:
          '매일 **데일리 스크럼**을 진행하여 팀원 간 작업 상황을 공유하고 실시간 피드백을 제공했습니다.',
        contributions: [
          '프로젝트 종료 후 **KPT(**`Keep`**, **`Problem`**, **`Try`**) 회고**를 실시하여 지속적인 개선을 도모했습니다.',
          '**팀원 간 원활한 커뮤니케이션**을 유지하고, **프로젝트 진행 속도를 효율적으로 관리**하여 성공적인 프로젝트 완수에 기여했습니다.',
        ],
      },
      {
        title: '반응형 디자인 적용으로 최적화된 사용자 경험 제공',
        overview:
          '모바일, 태블릿, 데스크탑 등 다양한 디바이스에서 **일관되고 최적화된 사용자 경험을 제공**하기 위해 반응형 디자인을 적용했습니다.',
        contributions: [
          '**다양한 화면 크기에 맞춰 레이아웃과 콘텐츠가 자동으로 조정**되도록 구현하여, 어떤 디바이스에서도 **일관되고 최적화된 UI/UX**를 제공함으로써 **사용자 편의성과 접근성을 개선**했습니다.',
        ],
      },
    ],
    troubleShootings: [
      {
        title: '무한 스크롤 기능 구현 시간 제약 문제 해결',
        background:
          '원래 팀원 중 한 분이 무한 스크롤을 커스텀 훅으로 구현하기로 했지만, **발표 전날까지 완료하지 못해 각자가 맡은 페이지에서 직접 무한 스크롤을 구현해야 하는 상황**이 되었습니다. 그러나 무한 스크롤을 처음 시도하는 상황에서 **시간도 촉박해 빠르게 적용할 방법이 필요**했습니다.',
        resolutionMethod: {
          analysis: [
            '직접 구현 시 `Intersection Observer API` 또는 `scroll` 이벤트 활용 및 디바운싱, 최적화 작업 필요',
            '추가적인 커스텀 훅을 만들어야 하고, **테스트 및 디버깅에 시간이 소요될 가능성이 높음**',
            '**프로젝트 일정 문제**와 구현 난이도를 고려해야 함',
          ],
          process: [
            '직접 구현하는 방법과 라이브러리를 활용하는 방법을 비교',
            '**프로젝트 일정 문제와 구현 난이도를 고려**하여 `react-infinite-scroller` **라이브러리 선택**',
            '`InfiniteScroll` 컴포넌트를 활용하여 **간단하게 적용**',
            '라이브러리 내부적으로 `Intersection Observer`를 사용해 최적화된 동작 제공',
            '`API` **요청과 로딩 상태 관리를 손쉽게 처리 가능**',
          ],
        },
        results: [
          '**프로젝트 일정과 안정성을 고려**하여 `react-infinite-scroller` 라이브러리를 성공적으로 활용했습니다.',
          '페이지 전환 없이 연속적으로 데이터를 로드함으로써 **로딩 시간을 50% 단축(**`600ms`** → **`300ms`**)**시켰습니다.',
          '**불필요한 네트워크 요청 감소**로 성능을 최적화하고, 사용자가 자연스럽게 콘텐츠를 탐색할 수 있도록 UX를 개선했습니다.',
        ],
        learnings:
          '**시간 제약이 있는 상황에서는 적절한 라이브러리를 선택해 빠르게 해결하는 것이 중요**하다는 점을 배웠습니다. 처음 접하는 기능도 적절한 도구를 활용하면 효율적으로 구현할 수 있으며, **불필요한 작업을 줄여 개발 속도를 높일 수 있었습니다.** **팀원 간 작업 분배와 일정 관리의 중요성**을 다시 한 번 실감했으며, **일정이 지연될 경우 대체할 수 있는 대안을 빠르게 마련**하는 것이 필요하다는 점을 배웠습니다.',
      },
    ],
  },
];
