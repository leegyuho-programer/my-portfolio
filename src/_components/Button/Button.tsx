import { flexCenter } from '@/app/styles';
import Link from 'next/link';

interface ButtonProps {
  children: string;
}

export default function Button({ children }: ButtonProps) {
  return (
    <Link
      role='button'
      tabIndex={0}
      href='#aboutMe'
      className={`bg-accent hover:bg-[#002f80] w-[130px] h-[50px] text-sm font-regular text-white rounded-primary-button ${flexCenter}`}
    >
      {children}
    </Link>
  );
}
