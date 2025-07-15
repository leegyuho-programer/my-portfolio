import type { Meta, StoryObj } from '@storybook/nextjs';
import Information from './Information';

const meta: Meta<typeof Information> = {
  title: 'Badges/Information',
  component: Information,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    svgSrc: {
      control: 'text',
      description: '아이콘 이미지 경로',
      defaultValue: '/icons/GithubIcon.svg',
    },
    alt: {
      control: 'text',
      description: '이미지 대체 텍스트',
      defaultValue: 'Github',
    },
    title: {
      control: 'text',
      description: '제목',
      defaultValue: '깃허브',
    },
    content: {
      control: 'text',
      description: '텍스트 콘텐츠 (링크가 아닌 일반 텍스트)',
      defaultValue: 'leegyuho98@gmail.com',
    },
    link: {
      control: 'text',
      description: '링크 주소',
      defaultValue: 'https://github.com/leegyuho-programer',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Information>;

export const Name: Story = {
  args: {
    svgSrc: '/icons/HumanIcon.svg',
    alt: 'Human',
    title: '이름',
    content: '이규호',
  },
};

export const Birth: Story = {
  args: {
    svgSrc: '/icons/CalendarIcon.svg',
    alt: 'Calendar',
    title: '생년월일',
    content: '98.03.03',
  },
};

export const Email: Story = {
  args: {
    svgSrc: '/icons/MessageIcon.svg',
    alt: 'Message',
    title: '이메일',
    content: 'leegyuho98@gmail.com',
  },
};

export const Github: Story = {
  args: {
    svgSrc: '/icons/GithubIcon.svg',
    alt: 'Github',
    title: '깃허브',
    link: 'https://github.com/leegyuho-programer',
  },
};

export const Blog: Story = {
  args: {
    svgSrc: '/icons/BlogIcon.svg',
    alt: 'Blog',
    title: '블로그',
    link: 'https://velog.io/@j980303/posts',
  },
};
