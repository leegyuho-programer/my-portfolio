import Link from 'next/link';

interface ButtonProps {
  children: string;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className='mt-[72px] bg-accent hover:bg-[#0069d9] w-[130px] h-[50px] text-sm text-white rounded-primary-button'>
      <Link href='#about-me'>{children}</Link>
    </button>
  );
}
