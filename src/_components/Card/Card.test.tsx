import { fireEvent, render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card 컴포넌트', () => {
  test('카드를 클릭하면 onOpenDetail 핸들러가 호출된다.', () => {
    const mockOpenDetail = jest.fn();

    render(
      <Card onOpenDetail={mockOpenDetail}>
        <Card.Content title='제목' description='설명' />
      </Card>
    );

    fireEvent.click(screen.getByText('제목'));
    expect(mockOpenDetail).toHaveBeenCalledTimes(1);
  });

  test('Card.Content가 제목과 설명을 렌더링한다.', () => {
    render(
      <Card onOpenDetail={() => {}}>
        <Card.Content title='제목' description='설명' />
      </Card>
    );

    expect(screen.getByText('제목')).toBeInTheDocument();
    expect(screen.getByText('설명')).toBeInTheDocument();
  });

  test('Card.Tags가 전달된 태그들을 렌더링한다.', () => {
    const tags = ['React', 'Next.js', 'TypeScript'];
    render(
      <Card onOpenDetail={() => {}}>
        <Card.Tags tags={tags} />
      </Card>
    );

    tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  test('Card.Hover 버튼 클릭 시 onOpenDetail 핸들러가 호출된다.', () => {
    const mockOpenDetail = jest.fn();

    render(
      <Card onOpenDetail={() => {}}>
        <Card.Hover
          title='호버 제목'
          text='자세히 보기'
          onOpenDetail={mockOpenDetail}
        />
      </Card>
    );

    fireEvent.click(screen.getByRole('button'));
    expect(mockOpenDetail).toHaveBeenCalledTimes(1);
  });
});
