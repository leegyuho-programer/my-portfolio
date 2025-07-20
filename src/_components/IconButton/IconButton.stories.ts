import type { Meta, StoryObj } from '@storybook/nextjs';
import IconButton from './IconButton';
import { fn } from 'storybook/internal/test';

const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    alt: {
      control: 'text',
      description: '이미지의 alt 속성',
      defaultValue: 'icon',
    },
    svgSrc: {
      control: 'text',
      description: '이미지의 경로',
      defaultValue: '',
    },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: 'icon',
    svgSrc: '/icons/CloseIcon.svg',
    onClick: fn(),
  },
};
