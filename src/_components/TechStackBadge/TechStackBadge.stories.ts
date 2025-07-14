import type { Meta, StoryObj } from '@storybook/nextjs';
import TechStackBadge from './TechStackBadge';
import { TECH_MAP } from './techMap';

const meta: Meta<typeof TechStackBadge> = {
  title: 'Badges/TechStackBadge',
  component: TechStackBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tech: {
      control: {
        type: 'select',
        options: Object.keys(TECH_MAP),
      },
      description: '기술 스택 키워드',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TechStackBadge>;

export const Default: Story = {
  args: {
    tech: 'React',
  },
};

export const WithoutIcon: Story = {
  args: {
    tech: 'Zustand', // svg 없음
  },
};
