import type { StorybookConfig } from '@storybook/react';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    // Vite 전용인 addon-vitest는 제거합니다.
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  // core: {
  //   builder: '@storybook/webpack5', // Webpack5 빌더 명시
  // },
  staticDirs: ['../public'],
};

export default config;
