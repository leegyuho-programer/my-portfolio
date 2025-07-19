export default function CloseButton({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className='group w-8 h-8 flex items-center justify-center'
      aria-label='Close'
    >
      <svg
        viewBox='0 0 32 32'
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-full'
      >
        <line
          x1='7'
          y1='7'
          x2='25'
          y2='25'
          className='transition stroke-lightGray group-hover:stroke-superLightGray'
          strokeWidth={4}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <line
          x1='7'
          y1='25'
          x2='25'
          y2='7'
          className='transition stroke-lightGray group-hover:stroke-superLightGray'
          strokeWidth={4}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
}
