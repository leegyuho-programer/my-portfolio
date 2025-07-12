// .storybook/test-runner.ts
import { injectAxe, checkA11y } from 'axe-playwright';
import { TestRunnerConfig } from '@storybook/test-runner';

const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page) {
    await checkA11y(page, '#root', {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  },
};

export default config;
