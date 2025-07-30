import type { Meta, StoryObj } from '@storybook/nextjs';
import PostCard from '@/_components/PostCard/PostCard';

const meta: Meta<typeof PostCard> = {
  title: 'Cards/PostCard',
  component: PostCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof PostCard>;

export const Default: Story = {
  render: () => <PostCard />,
};
