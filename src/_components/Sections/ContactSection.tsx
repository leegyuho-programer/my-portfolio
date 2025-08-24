import { flexColCenter } from '@/app/styles';
import PostCard from '../PostCard/PostCard';
import VisitorCounter from '../VisitorCounter/VisitorCounter';

export function ContactSection() {
  return (
    <div className={`${flexColCenter} min-h-screen bg-gray-100 gap-20 p-4`}>
      <div className='max-w-4xl w-full text-center'>
        <div className='mb-12'>
          <h1
            id='contact'
            className='text-6xl md:text-8xl font-bold text-black mb-6 drop-shadow-lg'
          >
            CONTACT ✉
          </h1>
          <p className='text-lg md:text-xl text-gray-700 mb-2'>Thank You</p>
        </div>
        <PostCard />
      </div>
      <VisitorCounter />
    </div>
  );
}
