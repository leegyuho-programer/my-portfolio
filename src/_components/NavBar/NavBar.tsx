import Link from 'next/link';
import { flexRowCenter } from './../../app/styles';

export default function NavBar() {
  return (
    <header className={`fixed w-full h-72px ${flexRowCenter}`}>
      <nav className='flex justify-between px-70'>
        <Link href='/' className='text-lg hover:text-accent'>
          LEE GYU HO&#39;s Portfolio
        </Link>

        <ul className='flex text-sm gap-20'>
          <li>
            <Link href='#about me'>About me</Link>
          </li>
          <li>
            <Link href='#skills'>Skills</Link>
          </li>
          <li>
            <Link href='#archiving'>Archiving</Link>
          </li>
          <li>
            <Link href='#projects'>Projects</Link>
          </li>
          <li>
            <Link href='#career'>Career</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
