import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button 컴포넌트', () => {
  test('자식 요소가 올바르게 렌더링된다.', () => {
    render(<Button className=''>클릭</Button>);

    expect(screen.getByText('클릭')).toBeInTheDocument();
  });

  // 로딩 상태
  test('로딩 상태일 때 로딩 텍스트를 보여준다.', () => {
    render(
      <Button className='' isLoading={true}>
        제출하기
      </Button>
    );

    expect(screen.getByText('로딩중...')).toBeInTheDocument();
    expect(screen.queryByText('제출하기')).not.toBeInTheDocument();
  });

  test('로딩 상태일 때 버튼이 비활성화된다', () => {
    render(
      <Button className='' isLoading={true}>
        버튼
      </Button>
    );

    expect(screen.getByRole('button')).toBeDisabled();
  });

  // 비활성화 상태
  test('disabled가 true일 때 버튼이 비활성화 된다.', () => {
    render(
      <Button className='' disabled={true}>
        버튼
      </Button>
    );

    expect(screen.getByRole('button')).toBeDisabled();
  });

  // 클릭 이벤트
  test('버튼 클릭 시 onClick 핸들러가 호출된다.', () => {
    const mockOnClick = jest.fn();

    render(
      <Button className='' onClick={mockOnClick}>
        클릭
      </Button>
    );
    fireEvent.click(screen.getByRole('button'));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('비활성화된 버튼 클릭 시 onClick이 호출되지 않는다', () => {
    const mockOnClick = jest.fn();

    render(
      <Button className='' disabled={true} onClick={mockOnClick}>
        클릭
      </Button>
    );

    fireEvent.click(screen.getByRole('button'));

    expect(mockOnClick).not.toHaveBeenCalled();
  });

  test('로딩 중인 버튼 클릭 시 onClick이 호출되지 않는다', () => {
    const mockOnClick = jest.fn();

    render(
      <Button className='' isLoading={true} onClick={mockOnClick}>
        클릭
      </Button>
    );

    fireEvent.click(screen.getByRole('button'));

    expect(mockOnClick).not.toHaveBeenCalled();
  });

  // 폼 제출
  test('type="submit"일 때 폼 제출이 동작한다.', () => {
    const mockSubmit = jest.fn((e) => e.preventDefault());

    render(
      <form onSubmit={mockSubmit}>
        <Button className='' type='submit'>
          제출
        </Button>
      </form>
    );

    fireEvent.click(screen.getByRole('button'));

    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});
