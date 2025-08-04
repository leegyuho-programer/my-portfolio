import type { Meta, StoryObj } from '@storybook/nextjs';
import TechModal from './TechModal';

const meta: Meta<typeof TechModal> = {
  title: 'Modals/TechModal',
  component: TechModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: '모달 열림 여부',
    },
    onClose: {
      action: '모달 닫기',
      description: '모달을 닫는 함수',
    },
    title: {
      control: 'text',
      description: '모달 제목',
    },
    children: {
      control: 'text',
      description: '모달 내용',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TechModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'React',
    children: '이 기술을 선택한 이유는',
  },
};
