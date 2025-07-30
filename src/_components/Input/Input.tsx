import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface InputProps {
  id: string;
  placeholder: string;
  value: string;
  errorMessage: string;
  isError: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
  id,
  placeholder,
  value,
  errorMessage,
  isError,
  onChange,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  // input에는 focus를 넣을 수 있지만 div에는 불가능하기 때문에 useState를 활용하여 설정
  const borderColor = isFocused
    ? 'border-secondary'
    : !value
    ? 'border-mono300'
    : 'border-primary';

  return (
    <div className='relative text-field'>
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
        text-primary 
        border-b 
        ${borderColor}
        `}
      >
        <input
          id={id}
          className='outline-none'
          placeholder={placeholder}
          value={value}
          type='text'
          onChange={onChange}
        />
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {/* 
        position을 absolute로 해주지 않으면 cls 점수가 높아지고 사용자 경험과 seo에 좋지 않다.
        ErrorMessage에 직접 absolute를 주면 안된다.
        그 이유는 ErrorMessage는 재사용성을 고려한 공용 컴포넌트이기 때문에 
        만약 다른 곳에서 에러가 발생했을 때 이 컴포넌트를 쓸 수 있는데 거기는 굳이 absolute로 
        처리하지 않아도 될 수 있기 때문이다.
        그렇기 때문에 간단하게 div로 감싸서 그 div에 absolute를 주는 방법 선택 

        위와 같이 div로 감싸고 거기에 absolute를 주는 방법을 선택하면 단점이 불필요하게 tag 하나를 더 만들게 되고
        React가 Reconciliation을 할 때 tree에 있는 모든 note를 훑기 때문에
        이런 게 쌓이면 렌더링 시간이 더 오래 걸릴 수밖에 없다.

        index.css에 css로 설정할 수 있다.
          .relative {
            >p {
              position: absolute
            }
          }

        만약 tailwind라면 아래와 같이 가능하다.
        @layer components {
          .relative >p {
            @apply absolute;
          }
        }
        */}
    </div>
  );
}
