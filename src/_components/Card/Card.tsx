import Image from 'next/image';
import { ReactNode } from 'react';
import { flexColCenter } from './../../app/styles';

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className='group relative rounded-lg w-[350px] h-[410px] bg-lightGray overflow-hidden hover:shadow-black hover:shadow-2xl hover:translate-y-[-5px] hover:bg-[#32323]'>
      {children}
    </div>
  );
}

interface CardHiddenProps {
  children: ReactNode;
}

Card.Hidden = function CardHidden({ children }: CardHiddenProps) {
  return (
    <div className='transition-opacity duration-300 group-hover:opacity-0'>
      {children}
    </div>
  );
};

interface CardImageProps {
  src: string;
  alt: string;
}

Card.Image = function CardImage({ src, alt }: CardImageProps) {
  return (
    <div className='relative w-full h-[200px]'>
      <Image src={src} alt={alt} className='rounded-t-lg object-cover' fill />
    </div>
  );
};

interface CardContentProps {
  title: string;
  description: string;
}

Card.Content = function CardContent({ title, description }: CardContentProps) {
  return (
    <div className='p-6'>
      <h3 className='text-lg font-bold text-white'>{title}</h3>
      <p className='text-xs font-normal text-[#A6A6A6] py-4'>{description}</p>
    </div>
  );
};

interface CardTagsProps {
  tags: string[];
}

Card.Tags = function CardTags({ tags }: CardTagsProps) {
  return (
    <div className='flex gap-2 absolute bottom-[15px] left-[15px]'>
      {tags.map((tag: string) => (
        <span
          key={tag}
          className='text-xs p-2 bg-[#232323] text-white rounded-lg'
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

interface CardHoverProps {
  title: string;
  text: string;
  onOpenDetail: () => void;
}

Card.Hover = function CardHover({ title, text, onOpenDetail }: CardHoverProps) {
  return (
    <div
      className={`absolute inset-0 ${flexColCenter} transition-opacity gap-10 duration-300 opacity-0 group-hover:opacity-100 z-10 bg-[#32323] bg-opacity-90`}
    >
      <h3 className='text-xl font-bold text-white'>{title}</h3>
      <button
        onClick={onOpenDetail}
        className='py-3 px-8 border-[1px] border-solid border-white text-sm text-white rounded-lg transition hover:bg-white hover:text-text-main' // text-mainBlack -> text-text-main (globals.css 참조)
      >
        {text}
      </button>
    </div>
  );
};
