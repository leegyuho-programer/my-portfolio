import { flexCenter } from '@/app/styles';
import { useRouter } from 'next/navigation';

export default function Modal() {
  const router = useRouter();

  return (
    <div className={`${flexCenter} bg-black/50`}>
      <div className='my-[30px] mx-[400px]'>
        <div className='w-full h-full'>
          <header className='bg-black text-white h-20px'>aaa</header>
          <div>ddd</div>
          <div>asd</div>
        </div>
        <button
          className='w-2 h-2 text-white bg-black'
          onClick={() => router.back()}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
