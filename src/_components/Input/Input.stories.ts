import type { Meta, StoryObj } from '@storybook/nextjs';
import Input from './Input';
import { fn } from 'storybook/internal/test';

const meta = {
  title: 'TextFields/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: '텍스트 필드의 id',
      defaultValue: '',
    },
    name: {
      control: 'text',
      description: 'input name 속성',
      defaultValue: '',
    },
    type: {
      control: { type: 'radio' },
      options: ['text', 'textarea'],
      description: `'text' 또는 'textarea' 타입 선택`,
      defaultValue: 'text',
    },
    placeholder: {
      control: 'text',
      description: '텍스트 필드의 placeholder',
      defaultValue: '텍스트를 입력해주세요',
    },
    value: {
      control: 'text',
      description: '텍스트 필드의 값',
      defaultValue: '',
    },
    errorMessage: {
      control: 'text',
      description: '텍스트 필드의 에러 메세지',
      defaultValue: '',
    },
    isError: {
      control: 'boolean',
      description: '에러 상태 여부',
      defaultValue: false,
    },
    onChange: { action: 'changed', description: '텍스트 필드 값 변경 이벤트' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    id: 'name',
    name: 'name',
    type: 'text',
    placeholder: '이름을 입력해주세요',
    value: '',
    errorMessage: '이름을 입력해주세요',
    isError: false,
    onChange: fn(),
  },
};

export const TextareaInput: Story = {
  args: {
    id: 'message',
    name: 'message',
    type: 'textarea',
    placeholder: '내용을 입력해주세요',
    value: '',
    errorMessage: '내용을 입력해주세요',
    isError: false,
    onChange: fn(),
  },
};
