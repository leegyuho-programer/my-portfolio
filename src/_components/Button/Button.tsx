import { flexCenter } from '@/app/styles';
import Link from 'next/link';

interface ButtonProps {
  children: string;
}

export default function Button({ children }: ButtonProps) {
  return (
    <Link
      role="button"
      tabIndex={0}
      href='#about-me'
      className={`bg-accent hover:bg-[#0069d9] w-[130px] h-[50px] text-sm text-white rounded-primary-button ${flexCenter}`}
    >
      {children}
    </Link>
  );
}
