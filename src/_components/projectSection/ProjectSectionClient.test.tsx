import { render, screen, fireEvent } from '@testing-library/react';
import ProjectSectionClient from './ProjectSectionClient';
import { projectData } from '@/_data/projectData';
import { mockPush, mockPrefetch } from '@/__mocks__/nextNavigationMock';

// IntersectionObserver mock (JSDOM에는 없음)
let mockObserverCallback: IntersectionObserverCallback | null = null;

beforeAll(() => {
  class MockIntersectionObserver {
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();

    constructor(callback: IntersectionObserverCallback) {
      // 콜백을 전역 변수에 저장
      mockObserverCallback = callback;
    }
  }

  (window as any).IntersectionObserver = MockIntersectionObserver;
});

describe('ProjectSectionClient (통합 테스트)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('selectedTag = All 일 때 모든 프로젝트가 렌더링된다.', async () => {
    render(<ProjectSectionClient selectedTag='All' />);

    // 프로젝트 제목은 <h3> 헤딩 태그로 렌더링됨
    for (const project of projectData) {
      const headings = await screen.findAllByRole('heading', {
        name: project.title,
      });
      expect(headings.length).toBeGreaterThan(0); // 최소 1개 이상은 떠야 함
    }
  });

  test('selectedTag = Team 일 때 Team 프로젝트만 렌더링된다.', async () => {
    render(<ProjectSectionClient selectedTag='Team' />);

    const teamProject = projectData.filter((p) =>
      p.projectType.includes('Team')
    );
    const notTeamProject = projectData.filter(
      (p) => !p.projectType.includes('Team')
    );

    for (const project of teamProject) {
      const headings = await screen.findAllByRole('heading', {
        name: project.title,
      });
      expect(headings.length).toBeGreaterThan(0);
    }

    notTeamProject.forEach((project) => {
      // 없어야 하는 경우에는 queryBy를 사용 (getByText를 사용할 경우 없으면 에러가 발생)
      expect(screen.queryByText(project.title)).not.toBeInTheDocument();
    });
  });

  test('selectedTag = Single 일 때 Single 프로젝트만 렌더링된다.', async () => {
    render(<ProjectSectionClient selectedTag='Single' />);

    const singleProject = projectData.filter((p) =>
      p.projectType.includes('Single')
    );
    const notSingleProject = projectData.filter(
      (p) => !p.projectType.includes('Single')
    );

    for (const project of singleProject) {
      const headings = await screen.findAllByRole('heading', {
        name: project.title,
      });
      expect(headings.length).toBeGreaterThan(0);
    }

    notSingleProject.forEach((project) => {
      expect(screen.queryByText(project.title)).not.toBeInTheDocument();
    });
  });

  test('IntersectionObserver에 의해 prefetch가 실행된다.', async () => {
    render(<ProjectSectionClient selectedTag='All' />);
    const targetProject = projectData[0];

    const card = await screen.findByTestId(`card-${targetProject.id}`);

    expect(mockObserverCallback).toBeTruthy();

    const mockEntry: Partial<IntersectionObserverEntry> = {
      isIntersecting: true,
      target: card,
    };

    mockObserverCallback!(
      [mockEntry as IntersectionObserverEntry],
      {} as IntersectionObserver
    );

    expect(mockPrefetch).toHaveBeenCalledWith(`/project/${targetProject.id}`);
  });

  test('hover 시 router.prefetch가 호출된다.', async () => {
    render(<ProjectSectionClient selectedTag='All' />);
    const targetProject = projectData[0];

    // data-testid로 Card 요소 가져오기
    const card = await screen.findByTestId(`card-${targetProject.id}`);
    fireEvent.mouseEnter(card);

    expect(mockPrefetch).toHaveBeenCalledWith(`/project/${targetProject.id}`);
  });

  test('"자세히 보기" 클릭 시 router.push가 호출된다.', async () => {
    render(<ProjectSectionClient selectedTag='All' />);
    const targetProject = projectData[0];

    const button = await screen.findAllByRole('button', {
      name: /자세히 보기/i,
    });
    fireEvent.click(button[0]);

    expect(mockPush).toHaveBeenCalledWith(`/project/${targetProject.id}`);
  });
});
