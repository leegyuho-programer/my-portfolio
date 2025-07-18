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

Card.Hidden = function CardHidden({ children }: { children: ReactNode }) {
  return (
    <div className='transition-opacity duration-300 group-hover:opacity-0'>
      {children}
    </div>
  );
};

Card.Image = function CardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className='relative w-full h-[200px]'>
      <Image src={src} alt={alt} className='rounded-t-lg object-cover' fill />
    </div>
  );
};

Card.Content = function CardContent({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className='p-6'>
      <h3 className='text-lg font-bold text-white'>{title}</h3>
      <p className='text-xs font-normal text-[#A6A6A6] py-4'>{description}</p>
    </div>
  );
};

Card.Tags = function CardTags({ tags }: { tags: string[] }) {
  return (
    <div className='flex gap-2 absolute b-[15px] l-[15px]'>
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

Card.Hover = function CardHover({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      className={`absolute inset-0 ${flexColCenter} transition-opacity gap-10 duration-300 opacity-0 group-hover:opacity-100 z-10 bg-[#32323] bg-opacity-90`}
    >
      <h3 className='text-xl font-bold text-white'>{title}</h3>
      <button className='py-3 px-8 border-[1px] border-solid border-white text-sm text-white rounded-lg transition hover:bg-white hover:text-mainBlack'>
        {text}
      </button>
    </div>
  );
};
