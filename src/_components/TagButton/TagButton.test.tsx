import { fireEvent, render, screen } from '@testing-library/react';
import TagButton from './TagButton';

describe('TagButton 컴포넌트', () => {
  test('자식 요소가 올바르게 렌더링된다.', () => {
    render(
      <TagButton isChecked={false} onClick={() => {}}>
        버튼
      </TagButton>
    );

    expect(screen.getByText('버튼')).toBeInTheDocument();
  });

  test('클릭 시 onClick 이벤트가 실행된다.', () => {
    const handleClick = jest.fn();

    render(
      <TagButton isChecked={false} onClick={handleClick}>
        버튼
      </TagButton>
    );

    const button = screen.getByRole('button', { name: '버튼' });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
