import { TechStackType } from '@/_components/TechStackBadge/techMap';

// 팀 여부 정의
export type ProjectType = 'Team' | 'Single';

export type ProcessStep = {
  title: string;
  content?: {
    description: string;
  }[];
};

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
    process: ProcessStep[]; // 해결 과정
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
  techStacksUsed: TechStackType[]; // 사용 기술 스택
  mainWorks: MainWorkProps[]; // 주요 작업들
  troubleShootings: TroubleShootingProps[]; // 트러블 슈팅들
}

export const projectData: ProjectProps[] = [
  // Wikied
  {
    id: 'wikied',
    title: 'Wikied',
    description:
      'Wikied는 위키 페이지를 사용자 정의로 생성하고 편집할 수 있는 플랫폼입니다.',
    imageSrc: '/Images/WikiedImage.png',
    tags: ['개인', '반응형'],
    period:
      '기간: 2024.05 ~ 2024.07 (초기 개발) / 추가 작업 및 리팩토링: 2024.08 ~ 2025.03',
    serviceDescription:
      '**Wikied**는 사용자들이 **자유롭게 인물에 대한 문서를 생성하고 편집**할 수 있는 플랫폼입니다. 생성한 위키 페이지의 링크를 복사하여 친구들과 공유할 수 있으며, 그들이 함께 작성하도록 초대할 수 있습니다. 또한, 자유게시판에서 글을 작성할 수 있으며, 많은 좋아요를 받은 글은 베스트 게시글에 오를 수 있습니다.',
    projectType: 'Single',
    developmentMembers: '개발 인원: 1명',
    deployLink: 'https://wikied.vercel.app/',
    githubLink: 'https://github.com/leegyuho-programer/Wikied',
    techStacksUsed: [
      'CSSModules',
      'TypeScript',
      'React',
      'NextJs',
      'ReactQuery',
      'Zustand',
    ],

    mainWorks: [
      {
        title: '낙관적 업데이트 적용으로 UI 반응 속도 개선',
        overview:
          'API 응답 대기 시간으로 인한 **UI 반응 속도 저하 문제**를 낙관적 업데이트 적용으로 해결',
        contributions: [
          '**React Query**의 `useMutation` 훅을 활용한 **낙관적 업데이트**를 적용하여, 데이터 변경 요청 시 UI를 즉시 변경하고 응답 실패 시 롤백하는 기능을 구현',
          '**UI 반응 속도를 약 60% 개선**하여 사용자 인터랙션에 대한 즉각적인 피드백 제공 및 데이터 정합성 유지',
        ],
      },
      {
        title: '검색 기능 성능 최적화',
        overview:
          '사용자 입력 중복으로 인한 불필요한 API 호출 및 서버 부하를 줄이기 위한 **검색 기능 성능 최적화**를 진행',
        contributions: [
          '`lodash`의 `debounce` 를 적용하여 **사용자 입력이 멈춘 후 500ms 뒤에만 API 호출**되도록 구현',
          '**엔터키 입력**이나 **검색 버튼 클릭 시 대기 중인** `debounce` **작업을 즉시 취소**하는 로직 추가',
          '**16자 입력 시 API 호출 횟수를 약 94% 감소**시켜 서버 부하와 네트워크 트래픽 크게 절감',
        ],
      },
      {
        title: 'Streaming SSR 적용으로 렌더링 성능 최적화',
        overview:
          '전체 페이지가 로딩된 후에야 렌더링되는 문제를 해결하기 위해 **Streaming SSR**을 도입하여 초기 로딩 속도와 사용자 경험을 개선했습니다.',
        contributions: [
          '**React Suspense** 기반의 Streaming SSR을 활용, 비동기 데이터가 필요한 컴포넌트(댓글 등)를 지연 렌더링 처리',
          '**LCP를 약 12.5% 개선**하고, 주요 콘텐츠가 먼저 노출되도록 구현하여 사용자 체감 속도 향상',
        ],
      },
      {
        title: 'SVG 최적화 및 초기 렌더링 속도 개선',
        overview:
          '최적화되지 않은 SVG로 인한 초기 렌더링 지연 문제를 해결하기 위해 **SVG 최적화 전략**을 수립하고 적용했습니다.',
        contributions: [
          '**SVGR, SVGO** 등을 활용하여 SVG를 컴포넌트화하고 용량을 최적화',
          '**LCP를 약 28% 개선**하고 **렌더링 시간을 약 44% 단축**하여 초기 화면 노출 속도 향상',
        ],
      },
      {
        title: '페이지네이션 성능 최적화',
        overview:
          '페이지 전환 시 데이터 중복 요청으로 인한 **로딩 시간 증가 및 사용자 경험 저하**를 해결',
        contributions: [
          '**React Query**의 `useQuery` 훅과 `placeholderData` 옵션을 사용하여 **페이지 전환 시 이전 데이터를 즉시 표시**하며 새로운 데이터를 백그라운드에서 요청하는 방식 적용',
          '**로딩 시간을 약 44% 단축**, **화면 깜빡임 감소**, **최대 지연 시간을 약 51% 개선**하여 사용자에게 부드러운 페이지 전환 경험 제공',
        ],
      },
      {
        title: '효율적인 문서 작성 인터페이스 구축',
        overview:
          '**마크다운 기반 편집기** 구현을 위해 **React Quill 라이브러리를 도입**하여, 비기술적인 사용자도 쉽게 문서를 작성할 수 있는 환경 구축',
        contributions: [
          '**React Quill 라이브러리**를 선택하고, 프로젝트 요구사항에 맞게 초기 설정 및 통합 작업 진행',
          '**텍스트 형식, 링크** 등 핵심 편집 기능을 구현하여 **개발 시간 단축** 및 **생산성 향상**에 기여',
          '라이브러리 활용을 통해 **사용자 접근성 및 편의성을 개선**',
        ],
      },
      {
        title: '반응형 디자인 적용으로 최적화된 사용자 경험 제공',
        overview:
          '모바일, 태블릿, 데스크탑 등 **다양한 디바이스에서 일관되고 최적화된 사용자 경험**을 제공하기 위해 **반응형 디자인**을 적용',
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
          '초기에는 Article 페이지 전체 콘텐츠가 모두 준비된 후에야 화면이 렌더링되는 구조였습니다. 이로 인해, 사용자가 첫 번째 주요 콘텐츠를 보기까지 지연이 발생했고, **LCP가 2.4초로 기준선에 근접한 느린 수준**이었습니다. 특히, **댓글(CommentSection)처럼 비동기 데이터를 필요로 하는 컴포넌트**가 병목으로 작용하여 초기 화면 렌더링을 지연시켰고, 사용자 체감 속도가 저하되는 문제가 있었습니다.',
        resolutionMethod: {
          analysis: [
            '모든 컴포넌트가 준비될 때까지 HTML 전송이 지연',
            '**비동기 컴포넌트가 초기 렌더링 병목을 유발**',
            'React의 SSR 방식이 전체 페이지를 묶어 렌더링하는 구조로 UX에 불리하게 작용',
          ],
          process: [
            {
              title: '**React Suspense 기반의 Streaming SSR 적용**',
              content: [
                {
                  description:
                    'Next.js의 App Router 환경과 `React Suspense`를 활용하여, 주요 콘텐츠와 댓글을 독립적인 `<Suspense>`로 분리',
                },
                {
                  description:
                    '`fallback={<Skeleton />}`을 사용해 주요 콘텐츠(ArticlePage)는 먼저 렌더링되고, 댓글(CommentSection)은 **백그라운드에서 병렬 로딩**',
                },
              ],
            },
            {
              title: '**서버 콘솔 로그를 통해 Streaming SSR 적용 여부 검증**',
              content: [
                {
                  description:
                    '각 컴포넌트에 console.log()를 삽입하여 순차 렌더링 확인',
                },
                {
                  description:
                    'ArticlePage → CommentSection 순서로 출력되어 Streaming 방식으로 전달되고 있음을 확인',
                },
              ],
            },
          ],
        },
        results: [
          '**LCP 약 12.5% 단축**(2.4초 → 2.1초)',
          '**주요 콘텐츠가 더 빨리 렌더링**되어 사용자 체감 속도 개선',
          '댓글 컴포넌트를 백그라운드에서 로딩하여 **UX 분리 및 체감 성능 향상**',
        ],
        learnings:
          '`Streaming SSR`을 적용하면 모든 콘텐츠를 기다리지 않고 주요 콘텐츠를 먼저 렌더링할 수 있어, **초기 반응성(LCP)**과 **사용자 경험을 효과적으로 개선**할 수 있음을 체감했습니다. 특히, React Suspense와 Next.js의 지원을 활용하면 **점진적인 페이지 로딩 전략**이 구현 가능하며, 이는 **UX와 SEO 모두에 긍정적인 영향**을 미친다는 점을 실감했습니다.',
      },
      {
        title: 'SVG 최적화 및 렌더링 성능 개선',
        background:
          '초기 프로젝트에서는 `SVG` 아이콘을 직접 인라인으로 삽입하거나, public/ 폴더에 저장한 후 `<Image>` 태그로 불러오는 방식으로 사용했습니다. 하지만, SVG 파일 용량이 커지고, 불필요한 속성이 포함되어 렌더링 속도가 저하되는 문제가 발생했습니다. 특히, 자주 사용되는 아이콘이 여러 번 렌더링되면서 초기 로딩 시간이 증가했고, Lighthouse 성능 점수에서도 **LCP(최대 콘텐츠 페인트) 지연**이 확인되었습니다.',
        resolutionMethod: {
          analysis: [
            'SVG 파일이 최적화되지 않아 **불필요한 속성과 중복된 코드가 포함**됨',
            '**SVG가 직접 인라인으로 삽입되면서 DOM이 복잡해짐**',
            '필요하지 않은 `fill`, `stroke` 속성이 유지되면서 스타일 오버라이드가 어려움',
            '**SVG 파일 크기가 커질수록 브라우저 렌더링 속도 저하**',
          ],
          process: [
            {
              title: '`SVGR`**을 활용하여 React 컴포넌트로 변환**',
              content: [
                {
                  description:
                    'SVG 아이콘을 React 컴포넌트로 변환하여 필요할 때만 렌더링하도록 변경',
                },
                {
                  description:
                    '`fill`, `stroke` 속성을 props로 받아 동적으로 스타일 변경 가능하도록 처리',
                },
              ],
            },
            {
              title: '`SVGO`**를 사용하여 불필요한 속성 제거 및 용량 최적화**',
            },
            {
              title: 'SVG 사용 방식 개선',
              content: [
                {
                  description:
                    '자주 사용되는 아이콘 → `SVGR`을 활용한 React 컴포넌트 변환',
                },
                {
                  description:
                    '한 번만 사용되는 이미지 → `public/` 폴더에 저장 후 `next/image` 활용',
                },
              ],
            },
          ],
        },
        results: [
          '**LCP 시간 28% 단축**',
          '불필요한 SVG 속성 제거 후 **렌더링 시간 약 44% 단축**',
          '`React`에서 불필요한 리렌더링을 줄이면서 **최대 지연 시간 약 51% 감소**',
        ],
        learnings:
          '**SVG 최적화**는 단순한 파일 크기 감소뿐만 아니라 **렌더링 성능과 유지보수성**에도 큰 영향을 준다는 것을 확인했습니다. `SVGR`과 `SVGO`를 함께 활용하면 아이콘을 **효율적으로 관리**할 수 있고, **브라우저 성능도 최적화**할 수 있습니다.',
      },
      {
        title: 'Next.js 내장 모달 라우팅 vs React 포털 선택',
        background:
          'Next.js**의 내장 모달 라우팅**을 사용하여 모달을 열고 닫는 기능을 구현할 때, **URL 변경이 계속 발생**하면서 `Params`와 배경 상태를 일관되게 관리해야 하는 문제가 생겼습니다. 모달 상태를 라우팅과 동기화하려다 보니 코드가 복잡해지고, **URL과 UI 상태를 일관되게 유지하는 데 추가적인 관리가 필요**해졌습니다. 이러한 과정에서 라우팅 의존성이 과도하게 커지는 점이 불편함을 느꼈습니다.',
        resolutionMethod: {
          analysis: [
            'Next.js 내장 모달 라우팅을 사용한 방식에서는, **URL 상태와 모달의 상태를 동기화하려면 복잡한 코드가 필요**',
            'URL이 변경되는 특성상, **모달 상태와 UI를 관리하는 과정이 번거로움**',
          ],
          process: [
            {
              title:
                '**Next.js 내장 모달 라우팅**을 사용한 방식에서는, **URL 상태와 모달의 상태를 동기화**하려면 **복잡한 코드가 필요**했지만, URL이 변경되는 특성상, 모달 상태와 UI를 관리하는 과정이 번거로워짐',
            },
            {
              title:
                '이를 해결하기 위해, **Root Layout**에서 **React 포털**을 사용하여 모달을 **URL과 독립적인 상태로 관리**했으며 이렇게 하면 URL 변경 없이 **모달의 상태를 간단하게 관리**할 수 있었고, UI와 라우팅의 복잡성을 줄일 수 있게됨',
            },
          ],
        },
        results: [
          '**URL과 독립적으로 모달 상태를 관리**하여 유지보수성 개선',
          'UI와 라우팅의 복잡성을 줄여 **코드 간소화 및 개발 생산성 향상**',
        ],
        learnings:
          'Next.js **내장 모달 라우팅**은 URL을 통해 모달 상태를 기록하고 브라우저 히스토리를 유지하는 데 유용하지만, 복잡한 UI 상태 관리가 필요한 경우에는 과도한 접근 방식이 될 수 있습니다. 반면에, **React 포털**을 사용한 모달은 URL과 독립적인 상태 관리가 가능하며, 간단한 UI 관리가 필요할 때 효율적인 방법입니다. 프로젝트에서 **상황에 맞는 기술을 선택하는 중요성**을 깨닫게 되었고, **단순한 UI 관리에는 React 포털**, **상태 관리와 라우팅 연동이 중요한 경우에는 내장 모달 라우팅**을 사용하는 것이 효과적이라는 점을 알게 되었습니다.',
      },
    ],
  },

  // MyPortfolio
  {
    id: 'my-portfolio',
    title: 'MyPortfolio',
    description:
      '사용자 경험과 성능 최적화에 집중하는 프론트엔드 개발자 이규호의 포트폴리오입니다.',
    imageSrc: '/Images/MyPortfolioImage.png',
    tags: ['개인'],
    period: '2025.07 ~ 2024.08',
    serviceDescription:
      'MyPortfolio는 제가 프론트엔드 개발자로서 쌓아온 **기술 역량과 프로젝트 성과**를 한눈에 보여주기 위해 제작되었습니다. 각 프로젝트는 사용된 **기술 스택, 구현 기능, 그리고 해결했던 문제**를 구체적으로 담고 있습니다. **GitHub 저장소와 라이브 데모 링크**를 통해 제 코딩 스타일과 결과물을 직접 확인할 수 있습니다. 사용자(방문자)가 제 개발 스타일을 쉽게 파악하고, 포트폴리오를 통해 저의 잠재력을 느낄 수 있도록 **사용자 경험(UX)**에 집중했습니다.',
    projectType: 'Single',
    developmentMembers: '개발 인원: 1명',
    deployLink: 'https://leegyuho-portfolio.vercel.app/',
    githubLink: 'https://github.com/leegyuho-programer/my-portfolio',
    techStacksUsed: ['Tailwind', 'TypeScript', 'React', 'NextJs'],

    mainWorks: [
      {
        title: '인터셉팅 라우트를 활용한 프로젝트 상세 모달 구현',
        overview:
          '**SEO 최적화**와 링크 공유 가능성을 위해 기존 상태 기반 모달에서 `Intercepting Routes`로 전환했습니다.',
        contributions: [
          'Next.js의 `Intercepting Routes` 기능을 활용하여 프로젝트 상세 모달이 **고유 URL**을 가지도록 구현',
          '각 프로젝트에 대한 **직접 링크 공유 및 검색 엔진 인덱싱** 가능 → **SEO 성능 향상**',
          '모달 URL 접근 시에도 동일한 **UI 유지**로 사용자 경험 최적화',
        ],
      },
      {
        title: '이미지 렌더링 최적화를 통한 UX 및 성능 향상',
        overview:
          'Next.js 앱에서 이미지 지연 로딩 및 깜빡임 현상을 해결하고, Vercel CDN 캐시 활용을 통해 **LCP를 약 48% 단축**하는 등의 성능 최적화를 달성했습니다.',
        contributions: [
          '**vercel.json**을 통해 **`public`** 폴더 내 정적 이미지에 대한 강력한 **CDN 캐시 정책**을 적용',
          '모달 전후 이미지 재로딩 이슈를 해결하여 **모달 전환 시 이미지 깜빡임 제거**',
          '이미지 로딩 시간을 **약 86.7% 단축**(450ms → 59.73ms)하고, **LCP 약 48% 개선** (2.3s → 1.2s), 그리고 **CDN 캐시 HIT율을 90% 이상**으로 향상',
        ],
      },
      {
        title: '라우트 프리페칭 기반 프로젝트 상세 모달 로딩 최적화',
        overview:
          '모달 표시 지연 문제를 해결하기 위해 Next.js의 `router.prefetch`를 활용하여 프로젝트 상세 페이지 관련 리소스를 사전에 로드하는 전략을 도입했습니다.',
        contributions: [
          '카드에 **마우스 오버/포커스** 시 해당 상세 페이지 라우트를 미리 로드하도록 구현',
          '컴포넌트 마운트 시 모든 프로젝트 경로를 백그라운드에서 프리페칭하여 클릭 시 로딩 시간 최소화',
          '모달 렌더링 관련 스크립트 실행 시간을 **약 41% 감소**시키고, 모달을 포함한 페이지의 전체 이벤트 시간을 **약 30% 단축**(5,478ms → 3,844ms)',
        ],
      },
      {
        title: 'Storybook 도입을 통한 UI 컴포넌트 문서화 및 시각 테스트 적용',
        overview:
          '**실무 도입 전 사전 경험을 위해 Storybook을 사용**하여 UI 컴포넌트를 문서화하고 시각적 테스트를 진행했습니다.',
        contributions: [
          '**컴포넌트 단위 문서화**를 통해 UI 구성 요소를 독립적으로 테스트하고 구조화된 개발 환경을 경험',
          '**독립된 환경에서 시각적 피드백**을 빠르게 확인하고, 디자인 일관성 유지에 도움이 되는 워크플로우를 체험',
        ],
      },
      {
        title: 'CI 파이프라인 구축 및 시각/정적 테스트 자동화',
        overview:
          '코드 품질 보장과 배포 전 자동 검증을 위한 **CI 파이프라인을 구성**했습니다.',
        contributions: [
          '**GitHub Actions 기반 CI**로 lint, build, typecheck 자동화',
          '**Chromatic 연동**을 통한 **시각 회귀 테스트**로 UI 변경 자동 감지',
          'Storybook 기반 **접근성 테스트 환경 구성** 및 조건부 실행 처리',
        ],
      },
      {
        title: 'Google Analytics 도입을 통한 방문자 데이터 분석',
        overview:
          'SEO 설정 후 실제 검색 노출 및 방문자 변화 추이를 데이터 기반으로 측정하기 위해 **Google Analytics**를 도입했습니다.',
        contributions: [
          '포트폴리오 프로젝트에 **robots.txt**, **sitemap.xml**, **metadata**, **구조화 데이터(Structured Data)**를 적용한 뒤 변화 측정을 위해 Google Analytics 연동',
          '**실시간 방문자 수**, **유입 경로**, **페이지별 조회수**를 추적하여 SEO 효과를 수치로 검증',
          'GA4의 **이벤트 추적 기능**을 통해 프로젝트 상세 모달 열기, 외부 링크 클릭 등 사용자 행동 데이터 수집',
          '분석 데이터 기반으로 **UI·콘텐츠 개선 방향 도출** 및 향후 SEO 전략 수립',
        ],
      },
      {
        title: 'EmailJS 연동을 통한 피드백 폼 구현',
        overview:
          '방문자가 포트폴리오에 대해 피드백을 남길 수 있도록 **서버리스** 메일 전송 기능 구현했습니다.',
        contributions: [
          '**EmailJS**를 활용하여 별도 서버 없이 사용자 입력 내용을 이메일로 수신',
          '간편하고 빠른 구현으로 **사용자 커뮤니케이션 채널 확보**',
        ],
      },
      {
        title: 'ScrollToButton 구현으로 페이지 탐색 편의성 제공',
        overview:
          '상/하단 이동이 자유로운 버튼 구현으로 사용자의 편의성을 향상시켰습니다.',
        contributions: [
          '**스크롤 위치 감지**를 통해 버튼 방향을 **동적으로 전환하는 UX** 구현',
          '**상단/하단 이동**을 직관적으로 처리하여 페이지 탐색 편의성 향상',
        ],
      },
    ],

    troubleShootings: [
      {
        title: '모달 전환 후 이미지 재렌더링 지연 및 깜빡임 현상 해결',
        background:
          '프로젝트의 ProjectsSection에서 카드 클릭 시 모달이 열리고 닫히는 구조였는데, 모달 종료 후 카드 이미지가 다시 렌더링되면서 **이미지 깜빡임**과 **지연 로딩 현상**이 발생했습니다.',
        resolutionMethod: {
          analysis: [
            '`public` 폴더 이미지 사용 시 `next/image`의 최적화 기능이 적용되지 않음',
            '모달이 닫힐 때 이미지가 다시 렌더링되면서 네트워크 요청이 반복됨',
            '브라우저나 CDN에서 캐시가 충분히 작동하지 않아, 이미지가 깜빡이거나 느리게 나타남',
          ],
          process: [
            {
              title: '**vercel.json을 통한 정적 이미지에 대한 캐시 정책 강화**',
              content: [
                {
                  description:
                    '`vercel.json` 설정 파일을 추가하여 `public` 폴더 내 이미지 파일에 대해 `max-age=31536000, immutable` 설정을 적용',
                },
                {
                  description:
                    'Vercel CDN을 통해 정적 이미지 리소스가 1년간 캐싱되도록 설정하여, 반복 요청 시 캐시에서 즉시 로딩되도록 개선',
                },
                {
                  description:
                    '모달 종료 후에도 이미지가 네트워크가 아닌 캐시에서 로딩되어 깜빡임 없이 즉시 렌더링되도록 처리',
                },
              ],
            },
          ],
        },
        results: [
          '이미지 로딩 시간 **450ms → 59.73ms**로 약 86.7% 단축',
          'CDN 캐시 HIT율 **10~20% → 90% 이상**으로 약 4~9배 향상',
          'LCP **2.3초 → 1.2초**로 약 48% 성능 개선',
          '모달 전환 시 이미지 깜빡임 제거로 사용자 경험 향상',
        ],
        learnings:
          '이미지 최적화를 통해 성능 지표를 실질적으로 개선할 수 있다는 점을 체감하였고, 특히 `public` 이미지 리소스도 `vercel.json`을 통한 캐시 정책으로 성능 최적화가 가능하다는 것을 학습했습니다. 프론트엔드 성능 향상에서 **정적 자원의 캐시 전략 수립**이 매우 중요한 요소임을 실무적으로 경험했습니다.',
      },
      {
        title: '프로젝트 상세 모달 전환 시 초기 로딩 지연 문제 해결',
        background:
          '기존 ProjectsSection에서 카드 클릭 시, 모달 관련 컴포넌트와 라우트 번들이 즉시 로드되었습니다. 이로 인해 **스크립트 컴파일, 평가, 레이아웃 계산 등 여러 작업이 클릭 시점에 한꺼번에 발생**하여 모달이 포함된 페이지의 전반적인 **반응 속도가 느려졌습니다.** 전체 이벤트 총 시간은 약 5.48초에 달했습니다.',
        resolutionMethod: {
          analysis: [
            '**모달 진입 시점에 필요한 자바스크립트 번들이 네트워크에서 즉시 로드**되어 병목 현상 발생',
            'Next.js의 라우터 프리페치(`router.prefetch`) 기능이 활용되지 않아 사전 로딩이 이루어지지 않음',
            '스크립트 컴파일 및 평가, 레이아웃 재계산 등 연산 작업이 클릭 시점에 집중되어 UI 표시 지연',
          ],
          process: [
            {
              title: '**사용자 행동 기반 라우트 사전 로드 구현**',
              content: [
                {
                  description:
                    '사용자가 프로젝트 카드에 마우스 오버(`onMouseEnter`)하거나 포커스(`onFocus`)할 때 해당 프로젝트의 상세 경로를 `router.prefetch`로 미리 로드하도록 구현',
                },
                {
                  description:
                    '컴포넌트가 마운트될 때 `useEffect`를 활용, 현재 화면에 보이는 모든 프로젝트 경로를 백그라운드에서 순차적으로 프리페칭',
                },
              ],
            },
          ],
        },
        results: [
          '모달을 포함한 전체 이벤트 총 시간: 5,478ms → 3,844ms로 **약 29.7% 단축**',
          '모달 렌더링 관련 스크립트 실행 시간: 237.7ms → 138.3ms로 **약 41.8% 감소**',
          '스크립트 컴파일 시간: 253ms → 148ms로 **약 41.4% 감소**',
          '스크립트 평가 시간: 233.5ms → 126.3ms로 **약 45.9% 감소**',
          '네트워크 요청 지연 해소로 사용자 클릭 반응성 및 **모달 전환 속도 체감 향상**',
        ],
        learnings:
          'Next.js의 `router.prefetch` 기능을 적절한 시점(사용자 행동 예측)에 호출하는 전략이 전반적인 페이지 전환 속도와 모달 렌더링 시간을 모두 개선할 수 있음을 확인했습니다. 특히, 컴포넌트 마운트 시와 사용자 인터랙션 발생 시점을 활용한 **선택적 프리페칭 전략**이 성능 최적화에 매우 효과적인 방법임을 경험했습니다.',
      },
    ],
  },

  // ArtTalkTalk
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
      'Tailwind',
      'TypeScript',
      'React',
      'NextJs',
      'ReactQuery',
      'Zustand',
    ],

    mainWorks: [
      {
        title: 'Next.js의 Parallel Routes를 활용한 내 계정 페이지 탭 구조 구현',
        overview:
          '**Next.js의 Parallel Routes** 기능을 활용하여 내 계정 페이지 내에서 **계정 편집/계정 삭제 탭 전환 UI를 구현**했습니다. URL은 유지하면서, 각 탭에 대응하는 페이지 컴포넌트를 병렬로 렌더링할 수 있도록 구성했습니다.',
        contributions: [
          '`@editProfile`, `@deleteProfile` 구조를 통해 **서로 다른 페이지 컴포넌트를 독립적으로 병렬 구성**할 수 있도록 디렉토리 구조를 설계',
          '`layout.tsx`에서 `editProfile`, `deleteProfile`을 props로 받아 **탭 전환 시 필요한 컴포넌트만 조건 렌더링**되도록 구현하여, **라우팅 성능과 사용자 경험을 향상**시킴',
          '**React의 상태 기반 탭 전환 로직**과 **Next.js 병렬 라우팅 기능**을 결합하여 **불필요한 리렌더링 없이 빠른 탭 전환**이 가능한 구조를 설계',
        ],
      },
      {
        title: 'Controller를 활용한 react-hook-form 입력 필드 최적화',
        overview:
          '`react-hook-form`의 `Controller`를 사용해 **입력 상태 관리와 유효성 검사**를 통합하고, **성능을 개선**했습니다.',
        contributions: [
          '`Controller`를 통해 **외부 컴포넌트와의 폼 연동 로직 간소화**',
          '**불필요한 리렌더링 제거**로 **렌더링 성능 최적화**',
          '**입력 필드 재사용성 향상** 및 **폼 코드 유지 보수성 개선**',
        ],
      },
      {
        title: '이미지 최적화를 통한 페이지 로드 성능 개선',
        overview:
          '**고화질 PNG 이미지**로 인해 느려졌던 **초기 페이지 로드 성능**을 최적화했습니다.',
        contributions: [
          "Next.js의 `Image` 컴포넌트에 `formats: ['image/avif', 'image/webp']` 옵션을 적용하여 **자동 포맷 변환** 및 **브라우저 최적 형식 제공**",
          '`lazy loading`, `placeholder` 기능을 함께 사용해 **사용자 체감 성능 향상**',
        ],
      },
      {
        title: 'React Query 기반 API 통신 최적화',
        overview:
          'API 요청 최적화를 통해 **성능 향상** 및 **데이터 동기화 효율화했습니다.**',
        contributions: [
          '`React Query`를 도입하여 **API 응답 캐싱**, **중복 요청 방지**, **자동 리페칭 구현**',
          '**비동기 상태 관리 일관성 확보** 및 **UX 지연 최소화를 통한 사용자 만족도 향상**',
        ],
      },
      {
        title: '공통 컴포넌트 및 사용자 계정 관련 페이지 구현',
        overview:
          '**계정 관련 핵심 페이지**(Mypage, 프로필 수정, 회원 탈퇴 등 사용자 계정 기능)를 **일관된 UI/UX**로 구축했습니다.',
        contributions: [
          '**공통 컴포넌트 설계** 및 **재사용 구조 구현**',
          '**계정 관련 주요 페이지 개발** 및 **탈퇴 기능 포함 전체 흐름 완성**',
        ],
      },
      {
        title: '반응형 UI 구현으로 다양한 디바이스 지원',
        overview:
          '**모바일, 태블릿, 데스크탑** 환경에서도 **일관된 사용자 경험을 제공하는 반응형 UI를 구현**했습니다.',
        contributions: [
          '`Tailwind CSS`를 활용한 **반응형 레이아웃 및 유연한 그리드 시스템 구축**',
          '**접근성과 사용 편의성을 고려한 뷰포트별 최적화 작업 수행**',
        ],
      },
    ],

    troubleShootings: [
      {
        title:
          '복잡한 입력 필드 상태 관리 및 유효성 검사로 인한 코드 복잡도 증가',
        background:
          '프로젝트에서 다양한 입력 폼을 처리할 때, 각 입력 필드의 상태를 `useState`로 개별적으로 관리하고 유효성 검사 로직을 직접 구현했습니다. 그러나 입력 필드가 많아질수록 코드의 복잡도가 증가하고, 중복 코드가 발생하여 **가독성과 유지보수성이 저하**되었습니다. 또한, 불필요한 리렌더링이 발생하면서 **폼의 성능 저하**가 우려되는 문제도 있었습니다.',
        resolutionMethod: {
          analysis: [
            '`useState`를 이용한 개별 상태 관리로 인한 코드 중복과 복잡도 증가',
            '입력 필드 수가 많아질수록 리렌더링과 로직 분산 발생',
            '유효성 검사 로직이 분산되어 유지보수가 어려움',
          ],
          process: [
            {
              title:
                '**react-hook-form의 Controller 도입으로 상태 관리 최적화**',
              content: [
                {
                  description:
                    '`react-hook-form`을 활용하여 각 입력 필드의 상태를 중앙에서 관리하고, 불필요한 `useState` 사용을 줄여 코드 구조를 단순화',
                },
                {
                  description:
                    '`Controller`를 통해 입력 값과 폼 상태를 효과적으로 연동하고 이벤트 핸들러를 간결하게 처리',
                },
                {
                  description:
                    '중복 코드 제거 및 재사용성 향상으로 유지보수성과 성능 최적화 달성',
                },
              ],
            },
          ],
        },
        results: [
          '입력 필드 변경 시 불필요한 리렌더링이 줄어들며 렌더링 성능 향상',
          '`react-hook-form` 도입으로 유효성 검사 로직을 일관되게 유지하며 가독성 향상',
        ],
        learnings:
          '이 경험을 통해 **폼 상태 관리 및 유효성 검사 최적화의 중요성**을 배웠습니다. `react-hook-form`을 적용하면서 코드의 복잡도를 줄이고 유지보수성을 높일 수 있었으며, 성능 최적화를 통해 사용자 경험을 개선할 수 있었습니다.',
      },
      {
        title: '팀 간 소통 구조 개선을 통한 협업 효율 향상',
        background:
          '프로젝트 초기에는 **프론트엔드, 백엔드, 디자이너 간의 원활하지 않은 소통**으로 인해 **작업 지연 및 요구사항 전달 문제**가 발생했습니다. 각 팀의 **작업 타임라인과 우선순위가 일치하지 않아** 협업이 비효율적으로 이루어졌으며, **즉각적인 피드백이 어려워** 개발 과정에서 요구사항 변경이 생길 때 대응 속도가 느려졌고, 프로젝트 일정에 부정적인 영향을 미쳤습니다.',
        resolutionMethod: {
          analysis: [
            '역할별 커뮤니케이션 채널이 명확하지 않아 작업 우선순위 공유에 어려움',
            '요구사항 변경 시 실시간 소통 부족으로 개발 일정 지연 발생',
            '팀 간 협업 구조가 정립되지 않아 작업 흐름 불일치',
          ],
          process: [
            {
              title: '**코어타임(19–22시) 설정으로 실시간 협업 시간 확보**',
              content: [
                {
                  description:
                    '모든 팀원이 동시에 접속하여 피드백을 주고받을 수 있도록 코어타임을 지정하여 즉각적인 의사소통 가능',
                },
              ],
            },
            {
              title: '**데일리 스크럼을 통한 업무 공유 및 병목 제거**',
              content: [
                {
                  description:
                    '`Block / Done / To-do` 형식으로 매일 각자의 업무 상황을 공유하며, 필요한 협업을 빠르게 파악하고 문제를 조기에 해결',
                },
                {
                  description:
                    'GitHub Discussions 기능을 활용해 비동기적으로도 진행상황을 확인할 수 있도록 환경 구성',
                },
                {
                  description:
                    'https://github.com/ArtTalkTalk/ArtTalkTalk_frontend/discussions',
                },
              ],
            },
          ],
        },
        results: [
          '**코어타임**을 통해 빠른 피드백 루프 형성 및 결정 지연 최소화',
          '**데일리 스크럼**으로 각 팀원 업무 현황 공유가 명확해지며 협업 효율 증가',
          '작업 우선순위 조율이 수월해져 일정 관리의 정확도가 향상됨',
        ],
        learnings:
          '이 경험을 통해 **팀 간 소통의 중요성을 실감**했습니다. **코어타임을 활용한 실시간 피드백** 덕분에 의사결정이 신속하게 이루어졌고, **데일리 스크럼을 통해 개발 진행 상황을 명확하게 공유**하면서 협업의 효율성이 향상되었습니다. 이러한 경험을 바탕으로 **앞으로도 효과적인 협업 환경을 구축하는 데 집중**하고, **팀워크를 극대화할 수 있는 소통 방식을 지속적으로 적용**할 계획입니다.',
      },
    ],
  },

  // TaskyTasky
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
      'StyledComponents',
      'TypeScript',
      'React',
      'NextJs',
      'ReactQuery',
      'Zustand',
    ],

    mainWorks: [
      {
        title: 'React Infinite Scroller 기반 무한 스크롤 기능 구현',
        overview:
          '**페이지 전환 없이 대량의 데이터를 동적으로 로드**해야 하는 요구사항과 촉박한 구현 시간 문제를 해결하기 위해 라이브러리를 활용하여 무한 스크롤을 구현했습니다.',
        contributions: [
          '`React Infinite Scroller` 라이브러리를 활용하여 **무한 스크롤 기능을 빠르고 효율적으로 구현**',
          '**불필요한 네트워크 요청 감소**로 성능을 최적화하고, 사용자가 자연스럽게 콘텐츠를 탐색할 수 있도록 UX를 개선',
        ],
      },
      {
        title: '애자일 방법론 적용 및 효과적인 팀워크 관리',
        overview:
          '매일 **데일리 스크럼**을 진행하여 팀원 간 작업 상황을 공유하고 실시간 피드백을 제공했습니다.',
        contributions: [
          '프로젝트 종료 후 **KPT(**`Keep`**, **`Problem`**, **`Try`**) 회고**를 실시하여 지속적인 개선을 도모',
          '**팀원 간 원활한 커뮤니케이션**을 유지하고, **프로젝트 진행 속도를 효율적으로 관리**하여 성공적인 프로젝트 완수에 기여',
        ],
      },
      {
        title: 'Zustand 도입을 통한 전역 상태 관리 및 성능 최적화',
        overview:
          '기존 `Context API` 방식에서 발생하던 **상태 변경 시 불필요한 전체 컴포넌트 리렌더링 문제**로 인한 성능 저하를 해결했습니다.',
        contributions: [
          '**가볍고 효율적인 전역 상태 관리 라이브러리인** `Zustand`**를 도입**하여 전역 상태를 관리',
          '**불필요한 렌더링을 약 40% 감소**시키고, 전역 상태 관련 코드량을 약 25% 감소시킴',
          '**불필요한** `prop drilling`**을 제거**하여 컴포넌트 간 데이터 흐름을 최적화하고 유지보수성을 크게 개선',
        ],
      },
      {
        title: 'React Query를 활용한 API 통신 및 성능 향상',
        overview:
          '**비효율적인 API 통신 및 데이터 로딩 문제를 React Query를 통해 성능을 향상시켰습니다.**.',
        contributions: [
          '`React Query`를 도입하여 **API 요청 캐싱**, **데이터 패칭**, **상태 동기화 프로세스**를 효율적으로 관리',
          '**데이터 캐싱**을 활용하여 불필요한 API 요청을 감소시켰고, **백그라운드에서 자동으로 최신 정보를 동기화**하여 사용자에게 항상 최신 데이터를 제공',
          '**스켈레톤 UI**를 적용하여 데이터 로딩 중 사용자 경험을 향상',
        ],
      },
      {
        title: '공통 컴포넌트 개발 및 인증 시스템 개선',
        overview:
          '로그인/회원가입 페이지의 **중복되는 에러 메시지 관리 문제**를 해결했습니다.',
        contributions: [
          '모든 에러 메시지와 `Input` 에러 처리 규칙을 **상수화하여 재사용성을 높이고**, **공통 컴포넌트** (입력 필드, 버튼, 모달, 알림 등)를 설계',
          '**중복 코드량을 약 30% 감소**시켜 유지보수성을 향상시키고, 에러 관리의 일관성을 확보',
          '일관된 UI/UX를 제공하며 **코드 재사용성**을 극대화',
          '로그인/회원가입, 마이페이지, 계정 정보 페이지 등의 UI를 구현',
        ],
      },
      {
        title: '반응형 디자인 적용으로 최적화된 사용자 경험 제공',
        overview:
          '모바일, 태블릿, 데스크탑 등 다양한 디바이스에서 **일관되고 최적화된 사용자 경험을 제공**하기 위해 반응형 디자인을 적용했습니다.',
        contributions: [
          '**다양한 화면 크기에 맞춰 레이아웃과 콘텐츠가 자동으로 조정**되도록 구현하여, 어떤 디바이스에서도 **일관되고 최적화된 UI/UX**를 제공함으로써 **사용자 편의성과 접근성을 개선**',
        ],
      },
    ],

    troubleShootings: [
      {
        title: '무한 스크롤 기능 구현 시간 제약 문제 해결',
        background:
          '원래 팀원 중 한 분이 **무한 스크롤을 커스텀 훅으로 구현**하기로 했지만, **발표 전날까지 완료하지 못해 각자가 맡은 페이지에서 직접 무한 스크롤을 구현**해야 하는 상황이 되었습니다. 그러나 **무한 스크롤을 처음 시도하는 상황에서 시간도 촉박해 빠르게 적용할 방법이 필요**했습니다.',
        resolutionMethod: {
          analysis: [
            '직접 구현 시 `Intersection Observer API` 또는 `scroll` 이벤트 활용 및 디바운싱, 최적화 작업 필요',
            '추가적인 커스텀 훅을 만들어야 하고, **테스트 및 디버깅에 시간이 소요될 가능성이 높음**',
            '**프로젝트 일정 문제**와 구현 난이도를 고려해야 함',
          ],
          process: [
            {
              title: '**직접 구현 vs 라이브러리 사용 비교**',
              content: [
                {
                  description:
                    '직접 구현 시에는 로직 작성, 디바운싱, 옵저버 등록/해제, 최적화 작업 등 추가적인 개발 리소스가 필요함',
                },
                {
                  description:
                    '라이브러리 사용 시 `InfiniteScroll` 컴포넌트를 통해 **간단하게 무한 스크롤 적용 가능**',
                },
                {
                  description:
                    '`react-infinite-scroller`는 내부적으로 `Intersection Observer`를 사용하여 **성능 최적화** 제공',
                },
                {
                  description:
                    '**API 요청과 로딩 상태 관리가 내장되어 있어**, 빠른 구현 및 안정적인 동작 가능',
                },
              ],
            },
            {
              title: '**react-infinite-scroller 적용**',
              content: [
                {
                  description:
                    '`InfiniteScroll` 컴포넌트를 각 페이지에 적용하고, `loadMore`, `hasMore`, `loader` 등의 props를 통해 데이터 로드 제어',
                },
                {
                  description:
                    '공통 로딩 UI 및 에러 핸들링 로직도 포함하여 사용자 경험 향상',
                },
              ],
            },
          ],
        },
        results: [
          '**프로젝트 일정과 안정성을 고려**하여 `react-infinite-scroller` 라이브러리를 성공적으로 활용했습니다.',
          '**불필요한 네트워크 요청 감소**로 성능을 최적화하고, 사용자가 자연스럽게 콘텐츠를 탐색할 수 있도록 UX를 개선했습니다.',
        ],
        learnings:
          '**시간 제약이 있는 상황에서는 적절한 라이브러리를 선택해 빠르게 해결하는 것이 중요**하다는 점을 배웠습니다. 처음 접하는 기능도 적절한 도구를 활용하면 효율적으로 구현할 수 있으며, **불필요한 작업을 줄여 개발 속도를 높일 수 있었습니다.** **팀원 간 작업 분배와 일정 관리의 중요성**을 다시 한 번 실감했으며, **일정이 지연될 경우 대체할 수 있는 대안을 빠르게 마련**하는 것이 필요하다는 점을 배웠습니다.',
      },
    ],
  },
];
