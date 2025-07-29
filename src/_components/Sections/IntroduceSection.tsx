import Button from '@/_components/Button/Button';
import { flexColCenter, sectionStyle } from '@/app/styles';

export function IntroduceSection() {
  return (
    <section id='introduce' className={`${sectionStyle} mt-[72px]`}>
      <div className={`${flexColCenter} px-6`}>
        {/* <h2 className='text-xl font-bold text-white mb-2'>- 이규호 -</h2> */}
        <h2 className='text-2xl font-bold text-white mb-20'>
          프론트엔드 개발자 이규호입니다.
        </h2>

        <div className={`text-sm text-gray-200 leading-loose my-10 text-left`}>
          <p className='mb-4'>
            사용자가 웹에서 숨 쉬는 공기처럼{' '}
            <span className='font-black text-md'>자연스럽고 쾌적한 경험</span>을
            누릴 수 있도록 돕는 프론트엔드 개발자입니다.
          </p>
          <p className='mb-4'>
            <span className='font-black text-md'>
              찰나의 로딩도 허락하지 않기 위해
            </span>
            , 렌더링 최적화, 불필요한 리렌더링 방지, 이미지 최적화 등
          </p>
          <p>다양한 성능 개선 기법을 꾸준히 파고듭니다.</p>
          <p className='mb-4'>
            마치 건축가가 견고하고 아름다운 공간을 설계하듯, 코드 한 줄 한 줄에{' '}
            <span className='font-black text-md'>사용자 경험이라는 가치</span>를
            심어 넣고자 합니다.
          </p>
          <p className='mb-4'>
            <span className='font-black text-md'>배움을 멈추지 않는 자세</span>
            로 블로그를 통해 지식을 체계화하고 공유하며,
          </p>
          <p className='mb-6'>
            끊임없이 진화하는 웹 생태계에서{' '}
            <span className='font-black text-md'>최고의 순간</span>을 선사하기
            위해 오늘도 코드를 조각하고 있습니다.
          </p>
        </div>

        <div className='mt-20'>
          <Button>더 알아보기 ↓</Button>
        </div>
      </div>
    </section>
  );
}
