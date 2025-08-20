import Link from 'next/link';
import { MenuItemProps } from '../NavBar/NavBar';
import { useEffect, useRef } from 'react';

interface DropDownProps {
  menuItems: MenuItemProps[];
  scrolled: boolean;
  onIconClick: () => void;
}

export default function DropDown({
  menuItems,
  scrolled,
  onIconClick,
}: DropDownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onIconClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onIconClick]);

  return (
    <div
      ref={dropdownRef}
      className={`pc:hidden fixed top-[72px] left-0 w-full ${
        scrolled ? 'bg-white shadow-light-mild' : 'bg-mainBlack'
      } shadow-lg py-6 z-40`}
    >
      <ul className='flex flex-col gap-6 text-sm font-regular'>
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={onIconClick}>
            <li
              className={`${
                scrolled ? 'text-black' : 'text-white'
              } hover:text-accent transition-colors duration-300 px-4 py-2 block w-full text-center`}
            >
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
