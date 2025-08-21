'use client';

import { flexCenter } from '@/app/styles';
import React, { useEffect } from 'react';
import CloseIconButton from '../CloseIconButton/CloseIconButton';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  period: string | string[];
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
      className={`fixed inset-0 bg-black/80 ${flexCenter} z-50 lg:p-10 lg:px-50`}
      onClick={handleBackdropClick}
    >
      <div
        className='relative bg-white lg:rounded-lg w-full lg:max-h-[90vh] max-h-[100vh] overflow-y-auto'
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`w-full bg-black ${flexCenter} flex-col py-15 text-white gap-5`}
        >
          <div className='absolute lg:top-[40px] top-[20px] lg:right-[40px] right-[20px] lg:w-[55px] w-[40px] lg:h-[55px] h-[40px]'>
            <CloseIconButton onClick={onClose} />
          </div>
          <h3 className='lg:text-2xl text-xl font-bold'>{title}</h3>
          {Array.isArray(period) ? (
            period.map((line, idx) => (
              <p key={idx} className='md:text-sm text-xs px-[10px]'>
                {line}
              </p>
            ))
          ) : (
            <p className='md:text-sm text-xs px-[10px]'>{period}</p>
          )}
          <p className='md:text-sm text-xs'>{developmentMembers}</p>
        </div>
        {children}
      </div>
    </div>
  );
}

