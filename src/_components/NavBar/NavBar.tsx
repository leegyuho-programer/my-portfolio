// import Link from 'next/link';
// import { flexRowCenter } from './../../app/styles';

// interface MenuItemProps {
//   label: string;
//   href: string;
// }

// interface NavBarProps {
//   menuItems: MenuItemProps[];
// }

// export default function NavBar({ menuItems }: NavBarProps) {
//   return (
//     <header
//       className={`fixed top-0 left-0 w-full h-[72px] ${flexRowCenter} shadow-light-mild bg-white z-50`}
//     >
//       <nav className='flex justify-between px-[120px] w-full'>
//         <Link href='/' className='text-lg font-bold hover:text-accent'>
//           LEE GYU HO&#39;s Portfolio
//         </Link>

//         <ul className='flex text-sm font-regular gap-[40px]'>
//           {menuItems.map((item) => (
//             <li key={item.href}>
//               <Link
//                 href={item.href}
//                 className='hover:text-accent transition-colors duration-150'
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { flexRowCenter } from './../../app/styles';

interface MenuItemProps {
  label: string;
  href: string;
}

interface NavBarProps {
  menuItems: MenuItemProps[];
}

export default function NavBar({ menuItems }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[72px] transition-all duration-300 z-50
        ${flexRowCenter}
        ${scrolled ? 'bg-white shadow-light-mild' : 'bg-mainBlack'}
      `}
    >
      <nav className='flex justify-between px-[120px] w-full'>
        <Link
          href='/'
          className={`text-lg font-bold transition-colors duration-300
            ${
              scrolled
                ? 'text-black hover:text-accent'
                : 'text-white hover:text-accent'
            }
          `}
        >
          LEE GYU HO&#39;s Portfolio
        </Link>

        <ul className='flex text-sm font-regular gap-[40px]'>
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition-colors duration-300
                  ${
                    scrolled
                      ? 'text-black hover:text-accent'
                      : 'text-white hover:text-accent'
                  }
                `}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
