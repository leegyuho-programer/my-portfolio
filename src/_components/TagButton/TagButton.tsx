interface TagButtonProps {
  children: string;
  isChecked: boolean;
  onClick: () => void;
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
      className={`text-sm font-bold rounded-primary-button p-5 py-3 cursor-pointer ${buttonStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
