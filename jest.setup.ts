import '@testing-library/jest-dom';
import * as nextNavigationMock from '@/__mocks__/nextNavigationMock';
import nextLinkMock from '@/__mocks__/nextLinkMock';

// next/navigation을 mock 처리
jest.mock('next/navigation', () => nextNavigationMock);
// next/link를 mock 처리
jest.mock('next/link', () => nextLinkMock);
