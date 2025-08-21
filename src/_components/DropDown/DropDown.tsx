import Link from 'next/link';
import { MenuItemProps } from '../NavBar/NavBar';
import { useEffect, useRef } from 'react';

interface DropDownProps {
  menuItems: MenuItemProps[];
  scrolled: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export default function DropDown({
  menuItems,
  scrolled,
  isOpen,
  onClose,
}: DropDownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 감지
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.closest('button[aria-label="Toggle menu"]')) return;

      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className={`lg:hidden fixed top-[72px] left-0 w-full ${
        scrolled ? 'bg-white shadow-light-mild' : 'bg-mainBlack'
      } shadow-lg py-6 z-40`}
    >
      <ul className='flex flex-col gap-6 text-sm font-regular'>
        {menuItems.map((item) => (
          <li key={item.href} className='w-full'>
            <Link
              href={item.href}
              onClick={onClose}
              className={`block w-full px-4 py-2 text-center ${
                scrolled ? 'text-black' : 'text-white'
              } hover:text-accent transition-colors duration-300`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
