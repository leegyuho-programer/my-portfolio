import type { Meta, StoryObj } from '@storybook/nextjs';
import TagList from './TagList';
import { fn } from 'storybook/internal/test';

const meta = {
  title: 'List/TagList', // 경로
  component: TagList, // 이 컴포넌트의 스토리북을 작성했다.
  parameters: {
    layout: 'centered', // 스토리북에서 어떻게 보이는지 결정 (left로 하면 왼쪽으로 감)
  },
  tags: ['autodocs'],
  argTypes: {
    tagList: {
      control: 'array',
      description: '태그 리스트',
      defaultValue: ['All', 'Team', 'Single'],
    },
    onTagClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ['All', 'Team', 'Single'],
    onTagClick: fn(),
  },
};
