import '@testing-library/jest-dom';
import * as nextNavigationMock from '@/__mocks__/nextNavigationMock';

// next/navigation을 mock 처리
jest.mock('next/navigation', () => nextNavigationMock);
