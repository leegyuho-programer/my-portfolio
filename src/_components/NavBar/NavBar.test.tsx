import { render, screen, fireEvent, within } from '@testing-library/react';
import NavBar from './NavBar';
import { MENU_ITEMS } from '@/constants';

describe('NavBar 통합 테스트', () => {
  beforeEach(() => {
    // jsdom에서 scrollY 기본값은 0
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
  });

  test('로고와 메뉴가 렌더링된다.', () => {
    render(<NavBar menuItems={MENU_ITEMS} />);

    expect(screen.getByText(/lee gyu ho's portfolio/i)).toBeInTheDocument();
    expect(screen.getByText('About me')).toBeInTheDocument();
  });

  test('모바일 메뉴 버튼 클릭 시 DropDown이 열린다', () => {
    render(<NavBar menuItems={MENU_ITEMS} />);
    const button = screen.getByRole('button', { name: 'Toggle menu' });

    fireEvent.click(button);

    const dropdown = screen.getByTestId('dropdown');
    expect(within(dropdown).getByText('Projects')).toBeInTheDocument();
  });

  test('DropDown 외부 클릭 시 닫힌다.', () => {
    render(<NavBar menuItems={MENU_ITEMS} />);
    const button = screen.getByRole('button', { name: 'Toggle menu' });

    // 메뉴 열기
    fireEvent.click(button);

    // DropDown 컨테이너 잡기
    const dropdown = screen.getByTestId('dropdown');
    expect(within(dropdown).getByText('Contact')).toBeInTheDocument();

    // 외부 클릭
    fireEvent.mouseDown(document.body);

    // 닫혔는지 확인
    expect(screen.queryByTestId('dropdown')).not.toBeInTheDocument();
  });

  test('DropDown 메뉴 아이템 클릭 시 닫힌다.', () => {
    render(<NavBar menuItems={MENU_ITEMS} />);
    const button = screen.getByRole('button', { name: 'Toggle menu' });

    // 메뉴 열기
    fireEvent.click(button);

    // DropDown 컨테이너 잡기
    const dropdown = screen.getByTestId('dropdown');
    expect(within(dropdown).getByText('Contact')).toBeInTheDocument();

    // 메뉴 아이템 잡기
    const menuItem = screen.getByTestId('Skills');

    // 외부 클릭
    fireEvent.click(menuItem);

    // 닫혔는지 확인
    expect(screen.queryByTestId('dropdown')).not.toBeInTheDocument();
  });
});
