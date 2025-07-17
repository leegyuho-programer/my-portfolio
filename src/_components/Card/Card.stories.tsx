import type { Meta, StoryObj } from '@storybook/nextjs';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Card/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <Card.Hidden>
        <Card.Image src='/images/WikiedImage.png' alt='Wikied 이미지' />
        <Card.Content
          title='Wikied'
          description='포켓몬 API를 활용해 만들어진 포켓몬 도감입니다.'
        />
        <Card.Tags tags={['개인', '반응형']} />
      </Card.Hidden>
      <Card.Hover title='Wikied' text='자세히 보기' />
    </Card>
  ),
};
