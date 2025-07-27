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
      className='flex items-center p-5 max-w-[400px] w-full gap-8 text-left cursor-pointer rounded-xl text-white bg-lightGray overflow-hidden hover:shadow-black hover:shadow-2xl'
      onClick={handleClick}
    >
      <div className='relative w-[60px] h-[60px]'>
        <Image src={svgSrc} alt={`${alt} logo`} fill />
      </div>
      <div>
        <div className='text-sm font-bold mb-[4px]'>{title}</div>
        {content && <div className='text-sm font-regular'>{content}</div>}
      </div>
    </button>
  );
}
