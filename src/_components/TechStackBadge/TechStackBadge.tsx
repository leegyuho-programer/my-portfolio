'use client';

import Image from 'next/image';
import { TECH_MAP, TechStackType } from './techMap';
import { flexCenter } from './../../app/styles';

interface TechStackBadgeProps {
  tech: TechStackType;
  isModal?: boolean;
  onClick?: (tech: TechStackType) => void;
}

export default function TechStackBadge({
  tech,
  isModal,
  onClick,
}: TechStackBadgeProps) {
  const { label, svgSrc, alt } = TECH_MAP[tech] as {
    label: string;
    svgSrc?: string;
    alt?: string;
  };

  const backgroundColor = isModal
    ? 'bg-white text-black border border-neutral-200 shadow-md '
    : 'bg-lightGray text-white';

  const baseStyle = 'gap-[8px] rounded-[10px] px-[10px] py-[5px]';

  return (
    <div
      className={`${baseStyle} ${flexCenter} ${backgroundColor}`}
      onClick={() => onClick?.(tech)}
    >
      {svgSrc && (
        <Image
          className='right-[10px]'
          src={svgSrc}
          alt={alt ?? `${label} logo`}
          width={25}
          height={25}
        />
      )}
      <span className='text-sm font-medium'>{label}</span>
    </div>
  );
}
