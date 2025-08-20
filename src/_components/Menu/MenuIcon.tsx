interface MenuIconProps {
  scrolled: boolean;
  onClick: () => void;
}

export default function MenuIcon({ scrolled, onClick }: MenuIconProps) {
  return (
    <button
      className={`pc:hidden transition-colors duration-300`}
      onClick={onClick}
      aria-label='Toggle menu'
    >
      <svg
        width='25px'
        height='25px'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M4 6H20M4 12H20M4 18H20'
          stroke={scrolled ? '#000000' : '#ffffff'}
          strokeWidth='1'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
}
