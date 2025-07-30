interface ErrorMessageProps {
  children: React.ReactNode;
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return <p className='text-xs text-error'>{children}</p>;
}
