'use client';

import { useEffect } from 'react';
import React from 'react';
import CloseIconButton from '../CloseIconButton/CloseIconButton';
import { flexCenter } from '@/app/styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  period: string;
  developmentMembers: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  period,
  developmentMembers,
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      // 모달이 열릴 때 배경 스크롤 방지
      document.body.style.overflow = 'hidden';
    } else {
      // 모달이 닫힐 때 스크롤 복원
      document.body.style.overflow = 'unset';
    }

    // 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className='fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-10 px-50'
      onClick={handleBackdropClick}
    >
      <div
        className='relative bg-white rounded-lg w-full max-h-[90vh] overflow-y-auto animate-fade-in'
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`w-full bg-black ${flexCenter} flex-col py-15 text-white gap-5`}
        >
          <div className='absolute top-[40px] right-[40px] w-[55px] h-[55px]'>
            <CloseIconButton onClick={onClose} />
          </div>
          <h3 className='text-2xl font-bold'>{title}</h3>
          <p className='text-sm font-regular text-blue'>{period}</p>
          <p className='text-sm font-regular'>{developmentMembers}</p>
        </div>
        {children}
      </div>
    </div>
  );
}
