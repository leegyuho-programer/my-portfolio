import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input 컴포넌트', () => {
  test('기본 text input이 렌더링된다.', () => {
    render(
      <Input
        id='name'
        name='name'
        placeholder='이름을 입력하세요.'
        value=''
        onChange={() => {}}
      />
    );

    const input = screen.getByPlaceholderText('이름을 입력하세요.');

    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe('INPUT');
  });

  test('type=textarea인 경우 textarea가 렌더링된다.', () => {
    render(
      <Input
        id='text'
        name='text'
        type='textarea'
        placeholder='내용을 입력하세요.'
        value=''
        onChange={() => {}}
      />
    );

    const textarea = screen.getByPlaceholderText('내용을 입력하세요.');

    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  test('값 입력 시 onChange가 호출된다.', () => {
    const handleChange = jest.fn();

    render(
      <Input
        id='name'
        name='name'
        placeholder='이름을 입력하세요.'
        value=''
        onChange={handleChange}
      />
    );

    const input = screen.getByPlaceholderText('이름을 입력하세요.');
    fireEvent.change(input, { target: { value: 'testUser' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('isError=true일 때 에러 메세지가 표시된다.', () => {
    render(
      <Input
        id='name'
        name='name'
        placeholder='이름'
        value=''
        isError={true}
        errorMessage='이름을 입력해야 합니다.'
        onChange={() => {}}
      />
    );

    expect(screen.getByText('이름을 입력해야 합니다.')).toBeInTheDocument();
  });
});
