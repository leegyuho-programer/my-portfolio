import type { Meta, StoryObj } from '@storybook/nextjs';
import Button from './Button';

const meta = {
  title: 'Buttons/Button', // 경로
  component: Button, // 이 컴포넌트의 스토리북을 작성했다.
  parameters: {
    layout: 'centered', // 스토리북에서 어떻게 보이는지 결정 (left로 하면 왼쪽으로 감)
  },
  tags: ['autodocs'],

  argTypes: {
    children: {
      control: 'text',
      description: '버튼 text',
      defaultValue: 'Button',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '더 알아보기 ↓',
  },
};
