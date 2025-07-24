import type { Meta, StoryObj } from '@storybook/nextjs';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Modals/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: '모달 열림 여부',
      defaultValue: true,
    },
    onClose: { action: '모달 닫기', description: '모달을 닫는 함수' },
    title: {
      control: 'text',
      description: '모달 제목',
      defaultValue: 'Wikied',
    },
    period: {
      control: 'text',
      description: '개발 기간',
      defaultValue: '2024.05 ~ 2024.07',
    },
    developmentMembers: {
      control: 'text',
      description: '개발 인원',
      defaultValue: '1인',
    },
    children: {
      control: 'text',
      description: '본문 내용',
      defaultValue:
        'Wikied는 위키 페이지를 만들고 친구들과 실시간으로 공유·편집할 수 있는 협업 기반 문서 플랫폼입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Wikied',
    period: '기간: 2024.05 ~ 2024.07 (초기 개발) / 리팩토링: 2024.08 ~ 2025.03',
    developmentMembers: '1인',
    children: (
      <div className='p-6 text-black text-base'>
        <p>
          Wikied는 마크다운 기반의 위키 문서를 작성하고, 친구들과 실시간으로
          공유 및 편집할 수 있는 협업 중심의 문서 플랫폼입니다.
        </p>
        <ul className='mt-4 list-disc pl-5 space-y-1'>
          <li>실시간 협업 및 동기화</li>
          <li>모달 기반 라우팅 지원</li>
          <li>Next.js App Router, React Query, Streaming SSR 등 적용</li>
        </ul>
      </div>
    ),
  },
};
