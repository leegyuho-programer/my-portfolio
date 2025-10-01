import { projectData } from '@/_data/projectData';
import TagListWrapper from './TagListWrapper';
import { fireEvent, render, screen } from '@testing-library/react';

beforeAll(() => {
  class MockIntersectionObserver {
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();
  }

  (window as any).IntersectionObserver = MockIntersectionObserver;
});

describe('TagListWrapper (통합 테스트)', () => {
  test('처음에는 All 상태라 모든 프로젝트가 보인다.', async () => {
    render(<TagListWrapper />);

    for (const project of projectData) {
      const elements = await screen.findAllByText(project.title);
      expect(elements.length).toBeGreaterThan(0);
    }
  });

  test('Team 버튼 클릭 시 Team 프로젝트만 보인다.', async () => {
    render(<TagListWrapper />);

    fireEvent.click(screen.getByRole('button', { name: 'Team' }));

    const teamProjects = projectData.filter((p) => p.projectType === 'Team');

    const notTeamProjects = projectData.filter(
      (p) => !p.projectType.includes('Team')
    );

    for (const project of teamProjects) {
      const elements = await screen.findAllByText(project.title);
      expect(elements.length).toBeGreaterThan(0);
    }

    notTeamProjects.forEach((project) => {
      expect(screen.queryByText(project.title)).not.toBeInTheDocument();
    });
  });

  test('Single 버튼 클릭 시 Single 프로젝트만 보인다.', async () => {
    render(<TagListWrapper />);

    fireEvent.click(screen.getByRole('button', { name: 'Single' }));

    const singleProject = projectData.filter((p) => p.projectType === 'Single');

    const notSingleProject = projectData.filter(
      (p) => !p.projectType.includes('Single')
    );

    for (const project of singleProject) {
      const elements = await screen.findAllByText(project.title);
      expect(elements.length).toBeGreaterThan(0);
    }

    notSingleProject.forEach((p) => {
      expect(screen.queryByText(p.title)).not.toBeInTheDocument();
    });
  });
});
