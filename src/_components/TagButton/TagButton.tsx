interface TagButtonProps {
  children: string;
  isChecked: boolean;
  onClick?: () => void;
}

export default function TagButton({
  children,
  isChecked,
  onClick,
}: TagButtonProps) {
  const buttonStyle = isChecked
    ? 'bg-superLightGray text-mainBlack'
    : 'bg-lightGray text-white hover:bg-[#4e4e4e]';

  return (
    <button
      className={`text-sm font-bold rounded-primary-button px-[10px] h-[33px] ${buttonStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
