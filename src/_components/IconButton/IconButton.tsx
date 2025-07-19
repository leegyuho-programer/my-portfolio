import Image from 'next/image';

interface IconButtonProps {
  svgSrc: string;
  alt: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function IconButton({ svgSrc, alt, onClick }: IconButtonProps) {
  return (
    <button onClick={onClick} className='relative w-full h-full'>
      <Image src={svgSrc} alt={alt} fill />
    </button>
  );
}
