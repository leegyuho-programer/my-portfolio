import type { Meta, StoryObj } from '@storybook/nextjs';
import TagButton from './TagButton';
import { fn } from 'storybook/internal/test';

const meta = {
  title: 'Buttons/TagButton',
  component: TagButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '버튼 text',
      defaultValue: 'Button',
    },
    isChecked: {
      control: 'boolean',
      description: '버튼 활성화 여부',
      defaultValue: false,
    },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    isChecked: false,
    onClick: fn(),
  },
};
