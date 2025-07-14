import Image from 'next/image';
import { TECH_MAP, TechStackType } from './techMap';

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
    <div className='flex items-center gap-[5px] bg-[#f3f4f6 ] rounded-[10px] border border-black px-[10px] py-[5px]'>
      {svgSrc && (
        <Image
          className='right-[10px]'
          src={svgSrc}
          alt={alt ?? `${label} logo`}
          width={25}
          height={25}
        />
      )}
      <span className='text-[16px] font-medium text-[#000]'>{label}</span>
    </div>
  );
}
