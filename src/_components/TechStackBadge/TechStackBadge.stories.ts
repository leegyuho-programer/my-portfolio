import type { Meta, StoryObj } from '@storybook/nextjs';
import TechStackBadge from './TechStackBadge';

const meta = {
  title: 'Badges/TechStackBadge', // 경로
  component: TechStackBadge, // 이 컴포넌트의 스토리북을 작성했다.
  parameters: {
    layout: 'centered', // 스토리북에서 어떻게 보이는지 결정 (left로 하면 왼쪽으로 감)
  },
  tags: ['autodocs'],

  argTypes: {
    children: {
      control: 'text',
      description: '뱃지 내부 텍스트',
      defaultValue: 'React',
    },
    svgSrc: {
      control: 'text',
      description: '아이콘 svg 경로',
    },
    alt: {
      control: 'text',
      description: '이미지 대체 텍스트 (접근성)',
    },
  },
} satisfies Meta<typeof TechStackBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'React',
    svgSrc: 'ions/ReactIcon.svg',
    alt: 'React logo',
  },
};

export const NoIcon: Story = {
  args: {
    children: 'Zustand',
  },
};

export const NextJsIcon: Story = {
  args: {
    children: 'NextJs',
    svgSrc: '/ions/NextJsIcon.svg',
    alt: 'NextJs logo',
  },
};
