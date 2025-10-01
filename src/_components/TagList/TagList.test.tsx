import TagList from './TagList';
import { fireEvent, render, screen } from '@testing-library/react';

describe('TagList 컴포넌트', () => {
  const tags = ['All', 'Team', 'Single'];

  test('tagList로 전달된 태그들이 모두 렌더링된다.', () => {
    render(<TagList tagList={tags} onTagClick={() => {}} />);

    tags.forEach((t) => {
      expect(screen.getByRole('button', { name: t })).toBeInTheDocument();
    });
  });

  test('처음에는 첫 번째 태그가 선택된 상태다.', () => {
    render(<TagList tagList={tags} onTagClick={() => {}} />);

    const firstTag = screen.getByRole('button', { name: tags[0] });
    expect(firstTag.className).toMatch(/bg-superLightGray/);
  });

  test('버튼 클릭 시 onTagClick이 올바른 태그로 호출된다.', () => {
    const handleTagClick = jest.fn();

    render(<TagList tagList={tags} onTagClick={handleTagClick} />);

    const targetTag = screen.getByRole('button', { name: 'Team' });
    fireEvent.click(targetTag);

    expect(handleTagClick).toHaveBeenCalledWith('Team');
  });

  test('클릭하면 선택된 태그가 변경된다.', () => {
    render(<TagList tagList={tags} onTagClick={() => {}} />);

    const targetButton = screen.getByRole('button', { name: 'Single' });
    fireEvent.click(targetButton);

    expect(targetButton.className).toMatch(/bg-superLightGray/);
  });
});
