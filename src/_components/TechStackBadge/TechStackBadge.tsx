import Image from 'next/image';

interface TechStackBadgeProps {
  children: string;
  svgSrc?: string;
  alt?: string;
}

export default function TechStackBadge({
  children,
  svgSrc,
  alt,
}: TechStackBadgeProps) {
  return (
    <div className='flex items-center gap-[5px] bg-[#f3f4f6 ] rounded-[10px] border px-[10px] py-[5px]'>
      {svgSrc && (
        <Image
          className='right-[10px]'
          src={svgSrc}
          alt={alt ?? `${children} logo`}
          width={25}
          height={25}
        />
      )}
      <span className='text-[16px] font-medium text-[#111827]'>{children}</span>
    </div>
  );
}
