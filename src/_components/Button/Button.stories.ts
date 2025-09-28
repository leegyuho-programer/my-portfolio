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
    className: {
      control: 'text',
      description: '추가적인 Tailwind',
    },
    isLoading: {
      control: 'boolean',
      description: '로딩 상태일 경우 버튼 텍스트 대신 "로딩중..." 표시',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 활성화 여부',
    },
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset'],
      description: '버튼 타입',
      defaultValue: 'button',
    },
    onClick: {
      action: 'clicked',
      description: '버튼 클릭 이벤트',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '기본 버튼',
    type: 'button',
  },
};

export const Loading: Story = {
  args: {
    children: '로딩 버튼',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: '비활성화 버튼',
    disabled: true,
  },
};

export const Submit: Story = {
  args: {
    children: '폼 제출',
    type: 'submit',
  },
};
