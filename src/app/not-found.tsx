import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-mainBlack text-white text-center px-4'>
      <h1 className='text-xl font-bold mb-4'>404</h1>
      <p className='text-lg mb-8'>페이지를 찾을 수 없습니다.</p>
      <Link
        href='/'
        className='px-6 py-3 bg-accent text-md text-white rounded-lg hover:bg-blue-400 transition'
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
