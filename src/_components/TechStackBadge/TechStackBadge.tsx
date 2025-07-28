import Image from 'next/image';
import { TECH_MAP, TechStackType } from './techMap';
import { flexCenter } from './../../app/styles';

interface TechStackBadgeProps {
  tech: TechStackType;
}

export default function TechStackBadge({ tech }: TechStackBadgeProps) {
  const { label, svgSrc, alt } = TECH_MAP[tech] as {
    label: string;
    svgSrc?: string;
    alt?: string;
  };

  return (
    <div
      className={`${flexCenter} gap-[8px] bg-lightGray rounded-[10px] px-[10px] py-[5px]`}
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
      <span className='text-sm font-medium text-white'>{label}</span>
    </div>
  );
}
