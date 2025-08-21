import Image from 'next/image';

export interface InformationProps {
  svgSrc: string;
  alt: string;
  title: string;
  content?: string;
  link?: string;
  isModal?: boolean;
}

export default function Information({
  svgSrc,
  alt,
  title,
  content,
  link,
  isModal,
}: InformationProps) {
  const handleClick: React.MouseEventHandler = () => {
    window.open(link, '_blank');
  };

  const isArchiving = !!link;

  const containerStyle = [
    // 기본 스타일
    'flex items-center gap-8 text-left rounded-xl overflow-hidden',
    'hover:shadow-lg transition-shadow duration-200',

    // 패딩
    isArchiving ? 'cursor-pointer p-15' : 'p-5',

    // 모달 여부에 따른 스타일
    isModal
      ? 'bg-white text-black border border-neutral-200 shadow-md'
      : 'bg-lightGray text-white shadow-md',

    // 아카이빙일 때 그림자 강조
    isArchiving && 'hover:shadow-black hover:shadow-2xl',
  ]
    .filter(Boolean)
    .join(' ');

  const imageSize = isArchiving
    ? 'w-[80px] h-[80px]'
    : 'md:w-[60px] w-[30px] md:h-[60px] h-[30px]';

  const titleStyle = isArchiving
    ? 'lg:text-md text-sm font-bold'
    : 'lg:text-sm text-xs font-bold';

  return (
    <button className={containerStyle} onClick={handleClick}>
      <div className={`relative ${imageSize}`}>
        <Image src={svgSrc} alt={`${alt} logo`} fill />
      </div>
      <div>
        <div className={`mb-[4px] ${titleStyle}`}>{title}</div>
        {content && (
          <div className='lg:text-sm text-xxs font-regular'>{content}</div>
        )}
      </div>
    </button>
  );
}
