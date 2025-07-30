'use client';

import { useState } from 'react';
import { flexColCenter } from './../../app/styles';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 전송 로직 추가
    alert('Message sent!');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${flexColCenter} max-w-[500px] w-full mx-auto gap-4 bg-white`}
    >
      <input
        type='text'
        name='name'
        placeholder='Name'
        className='border border-gray-300 p-3 text-sm w-full'
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type='text'
        name='title'
        placeholder='Title'
        className='border border-gray-300 p-3 text-sm w-full'
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name='message'
        placeholder='Message'
        className='border border-gray-300 p-3 text-sm h-48 resize-none w-full'
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button
        type='submit'
        className='mt-4 bg-accent text-white py-3 px-4 text-sm font-semibold w-full hover:bg-[#002f80] transition rounded-sm'
      >
        SEND
      </button>
    </form>
  );
}
