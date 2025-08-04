'use client';

import React, { useEffect } from 'react';
import CloseIconButton from '../CloseIconButton/CloseIconButton';

interface TechModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function TechModal({ isOpen, onClose, title }: TechModalProps) {
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
        className='relative bg-white rounded-2xl w-full max-w-3xl max-h-[80vh] overflow-y-auto shadow-xl'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className='relative bg-black text-white px-5 py-2'>
          <h3 className='text-xl font-medium'>{title}</h3>
          <div className='absolute top-4 right-4'>
            <CloseIconButton onClick={onClose} />
          </div>
        </div>

        {/* Content */}
        <div className='px-8 py-6 space-y-6 text-black'>
          <section>
            <h4 className='text-md font-bold mb-2'>🛠 선택한 이유</h4>
            <p className='text-sm leading-relaxed text-gray-700'>
              이 기술을 선택한 이유는
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
