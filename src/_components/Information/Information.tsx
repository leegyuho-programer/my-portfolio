import Image from 'next/image';

interface InformationProps {
  svgSrc: string;
  alt: string;
  title: string;
  content?: string;
  link?: string;
  onClick?: React.MouseEventHandler;
}

export default function Information({
  svgSrc,
  alt,
  title,
  content,
  link,
  onClick,
}: InformationProps) {
  const handleClick: React.MouseEventHandler = (event) => {
    if (onClick) {
      onClick(event);
    } else if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <button
      className='flex mx-auto p-5 w-full gap-3 text-left cursor-pointer rounded-xl shadow-md hover:shadow-lg transition-shadow'
      onClick={handleClick}
    >
      <div className='relative w-[60px] h-[60px]'>
        <Image src={svgSrc} alt={`${alt} logo`} fill />
      </div>
      <div className='items-baseline'>
        <div className='text-sm font-bold mb-[4px]'>{title}</div>
        {content && <div className='text-sm font-regular'>{content}</div>}
      </div>
    </button>
  );
}
