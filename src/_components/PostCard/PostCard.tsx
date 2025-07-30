'use client';

import { useState } from 'react';
import Input from '../Input/Input';
import { flexColCenter } from './../../app/styles';

export default function PostCard() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    message: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // 실제 전송 로직 추가
    alert('Message sent!');
  };

  const nameError = !formData.name.trim();
  const titleError = !formData.title.trim();
  const messageError = !formData.message.trim();
  const hasError = nameError || titleError || messageError;

  return (
    <form
      onSubmit={handleSubmit}
      className={`${flexColCenter} max-w-[500px] w-full mx-auto p-10 gap-10 bg-white shadow-[1px_1px_20px_1px_rgba(0,0,0,0.08)]`}
    >
      <Input
        id='name'
        type='text'
        placeholder='Name'
        value={formData.name}
        errorMessage='이름을 입력해주세요.'
        isError={!formData.name.trim()}
        onChange={handleChange}
      />
      <Input
        id='title'
        type='text'
        placeholder='Title'
        value={formData.title}
        errorMessage='제목을 입력해주세요.'
        isError={!formData.title.trim()}
        onChange={handleChange}
      />
      <Input
        id='message'
        type='textarea'
        placeholder='Message'
        value={formData.message}
        errorMessage='내용을 입력해주세요.'
        isError={!formData.message.trim()}
        onChange={handleChange}
      />
      <button
        type='submit'
        disabled={hasError}
        className={`mt-4 text-white py-3 px-4 text-sm font-semibold w-full transition rounded-sm
            ${
              hasError
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-accent hover:bg-[#002f80] cursor-pointer'
            }
          `}
      >
        SEND
      </button>
    </form>
  );
}
