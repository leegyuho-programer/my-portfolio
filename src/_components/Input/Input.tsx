import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface InputProps {
  id: string;
  name: string;
  type?: 'text' | 'textarea';
  placeholder: string;
  value: string;
  errorMessage?: string;
  isError?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export default function Input({
  id,
  name,
  type = 'text',
  placeholder,
  value,
  errorMessage,
  isError,
  onChange,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = isFocused
    ? 'border-secondary'
    : !value
    ? 'border-mono300'
    : 'border-primary';

  return (
    <div className='relative text-sm w-full'>
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`border w-full p-3 ${borderColor}`}
      >
        {type === 'textarea' ? (
          <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className='outline-none w-full h-48 resize-none'
          />
        ) : (
          <input
            id={id}
            name={name}
            type='text'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className='outline-none w-full'
          />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
