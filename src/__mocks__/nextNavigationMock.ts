export const mockPush = jest.fn();
export const mockPrefetch = jest.fn();

export const useRouter = () => ({
  push: mockPush,
  prefetch: mockPrefetch,
});
