import type { Meta, StoryObj } from '@storybook/nextjs';
import NavBar from './NavBar';

const meta = {
  title: 'Navigation/NavBar', // 경로
  component: NavBar, // 이 컴포넌트의 스토리북을 작성했다.
  parameters: {
    layout: 'fullscreen', // 스토리북에서 어떻게 보이는지 결정 (left로 하면 왼쪽으로 감, centered는 가운데)
  },
  tags: ['autodocs'],

  argTypes: {
    menuItems: {
      description: '메뉴 항목 목록. 각 항목은 label과 href를 포함합니다.',
      control: 'object',
      defaultValue: [
        { label: 'About me', href: '#about-me' },
        { label: 'Skills', href: '#skills' },
        { label: 'Archiving', href: '#archiving' },
        { label: 'Projects', href: '#projects' },
        { label: 'Career', href: '#career' },
      ],
      table: {
        type: {
          summary: 'Array<{ label: string; href: string }>',
        },
      },
    },
  },
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menuItems: [
      { label: 'About me', href: '#about-me' },
      { label: 'Skills', href: '#skills' },
      { label: 'Archiving', href: '#archiving' },
      { label: 'Projects', href: '#projects' },
      { label: 'Career', href: '#career' },
    ],
  },
};
