'use client';

import { useEffect } from 'react';
import React from 'react';
import IconButton from '../IconButton/IconButton';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
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
      className='fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4'
      onClick={handleBackdropClick}
    >
      <div
        className='relative bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-fade-in' // 🚨 animate-fade-in 추가
        onClick={(e) => e.stopPropagation()}
      >
        <IconButton
          svgSrc='/icons/CloseIcon.svg'
          alt='닫기 아이콘'
          onClick={onClose}
        />

        {title && (
          <h3 className='text-2xl font-bold text-text-main p-6 pb-0'>
            {title}
          </h3>
        )}
        {children}
      </div>
    </div>
  );
}
