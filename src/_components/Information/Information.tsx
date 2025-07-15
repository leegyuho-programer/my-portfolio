import Image from 'next/image';
import Link from 'next/link';

interface InformationProps {
  svgSrc: string;
  alt: string;
  title: string;
  content?: string;
  link?: string;
}

export default function Information({
  svgSrc,
  alt,
  title,
  content,
  link,
}: InformationProps) {
  const getLinkLabel = (url: string) => {
    if (url.includes('github.com')) return 'GitHub';
    if (url.includes('velog.io')) return 'Blog';
    return '링크 보기';
  };
  return (
    <div className='flex mx-auto w-full gap-3'>
      <div className='w-[50px] h-[50px]'>
        <Image
          className='w-full h-full'
          src={svgSrc}
          alt={`${alt} logo`}
          width={50}
          height={50}
        />
      </div>
      <div className='items-baseline'>
        <div className='text-[16px] font-bold mb-[4px]'>{title}</div>
        {content && <div className='text-sm'>{content}</div>}
        {link && (
          <Link
            className='text-sm text-blue-600 hover:underline'
            href={link}
            target='_blank'
            rel='noopener noreferrer'
          >
            {getLinkLabel(link)}
          </Link>
        )}
      </div>
    </div>
  );
}
