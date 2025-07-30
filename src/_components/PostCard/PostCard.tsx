'use client';

import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Input from '../Input/Input';
import { flexColCenter } from './../../app/styles';

export default function PostCard() {
  const [formData, setFormData] = useState({
    email: '',
    // name: '',
    // title: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  // const nameError = !formData.name.trim();
  // const titleError = !formData.title.trim();
  const messageError = !formData.message.trim();
  // const hasError = nameError || titleError || messageError;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          email: formData.email,
          // name: formData.name,
          // title: formData.title,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert('이메일 전송 성공');
    } catch (error) {
      alert('이메일 전송 실패');
      console.log('이메일 전송 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${flexColCenter} max-w-[500px] w-full mx-auto p-10 gap-10 bg-white shadow-[1px_1px_20px_1px_rgba(0,0,0,0.08)]`}
    >
      <Input
        id='email'
        name='email'
        type='text'
        placeholder='답장을 위한 이메일(선택)'
        value={formData.email}
        onChange={handleChange}
      />
      {/* <Input
        id='name'
        name='name'
        type='text'
        placeholder='Name'
        value={formData.name}
        errorMessage='이름을 입력해주세요.'
        isError={!formData.name.trim()}
        onChange={handleChange}
      />
      <Input
        id='title'
        name='title'
        type='text'
        placeholder='Title'
        value={formData.title}
        errorMessage='제목을 입력해주세요.'
        isError={!formData.title.trim()}
        onChange={handleChange}
      /> */}
      <Input
        id='message'
        name='message'
        type='textarea'
        placeholder='사소한 부분이라도 편하게 피드백 주세요 :)'
        value={formData.message}
        errorMessage='내용을 입력해주세요.'
        isError={!formData.message.trim()}
        onChange={handleChange}
      />
      <button
        type='submit'
        disabled={messageError}
        className={`mt-4 text-white py-3 px-4 text-sm font-semibold w-full transition rounded-sm
            ${
              messageError || isLoading
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-accent hover:bg-[#002f80] cursor-pointer'
            }
          `}
      >
        {isLoading ? '전송중...' : '피드백 보내기'}
      </button>
    </form>
  );
}
