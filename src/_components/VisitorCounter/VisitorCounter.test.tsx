import { render, screen, waitFor } from '@testing-library/react';
import VisitorCounter from './VisitorCounter';

describe('VisitorCounter 통합 테스트', () => {
  beforeEach(() => {
    // fetch를 mock 처리
    global.fetch = jest.fn().mockImplementation((url, options) => {
      if (url === '/api/track-visitor' && options?.method === 'POST') {
        return Promise.resolve({ ok: true });
      }
      if (url === '/api/visitor-count') {
        return Promise.resolve({
          ok: true,
          json: async () => ({ today: 5, total: 100 }),
        });
      }
      return Promise.reject(new Error('알 수 없는 API 요청'));
    }) as any;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('API 응답에 따라 방문자 수가 표시된다.', async () => {
    render(<VisitorCounter />);
    const counter = await screen.findByTestId('visitor-counter');

    await waitFor(() => {
      expect(counter).toHaveTextContent('Visitors: 5 / 100');
    });
  });
});
