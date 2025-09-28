interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  className = '',
  isLoading = false,
  disabled,
  onClick,
  type,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? '로딩중...' : children}
    </button>
  );
}
