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
    isModal: {
      control: 'boolean',
      description: '모달 내 표시 여부 (배경색, 폰트 색상 변경)',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TechStackBadge>;

export const Default: Story = {
  args: {
    tech: 'React',
    isModal: false,
  },
};

export const ModalBackground: Story = {
  args: {
    tech: 'TypeScript',
    isModal: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    tech: 'Zustand', // svgSrc 없음 처리되는 케이스
    isModal: false,
  },
};

export const ModalWithoutIcon: Story = {
  args: {
    tech: 'Zustand',
    isModal: true,
  },
};
