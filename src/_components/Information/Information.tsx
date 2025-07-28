import Image from 'next/image';

export interface InformationProps {
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

  const aboutMe = 'p-5';
  const archiving = 'cursor-pointer p-15 hover:shadow-black hover:shadow-2xl';

  return (
    <button
      className={`flex items-center gap-8 text-left rounded-xl text-white bg-lightGray overflow-hidden ${
        link ? archiving : aboutMe
      }`}
      onClick={handleClick}
    >
      <div
        className={`relative ${
          link ? 'w-[80px] h-[80px]' : 'w-[60px] h-[60px]'
        }`}
      >
        <Image src={svgSrc} alt={`${alt} logo`} fill />
      </div>
      <div>
        <div
          className={`mb-[4px] ${
            link ? 'text-md font-bold' : 'text-sm font-bold'
          }`}
        >
          {title}
        </div>
        {content && <div className='text-sm font-regular'>{content}</div>}
      </div>
    </button>
  );
}
