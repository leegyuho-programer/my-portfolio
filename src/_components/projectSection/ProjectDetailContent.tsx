'use client';

import { ProjectProps } from '@/_data/projectData';
import Information from '../Information/Information';
import TechStackBadge from '../TechStackBadge/TechStackBadge';

interface ProjectDetailContentProps {
  project: ProjectProps;
}

export default function ProjectDetailContent({
  project,
}: ProjectDetailContentProps) {
  return (
    <div className='w-full px-[250px] py-8 text-text-main flex flex-col gap-10'>
      {/* 프로젝트 소개 */}
      <section className='flex flex-col gap-5 pb-20 border-solid border-b-[1px] border-[#dcdcdc]'>
        <h2 className='text-xl font-semibold mb-2'>프로젝트 소개</h2>
        <p className='text-sm font-normal'>{project.serviceDescription}</p>
        <div className='flex flex-row gap-5'>
          <Information
            svgSrc='/icons/GithubIcon.svg'
            alt='GitHub'
            title='GitHub 저장소'
            content='프론트엔드 개발 프로젝트 저장소입니다.'
            link='https://github.com/leegyuho-programer'
          />
          <Information
            svgSrc='/icons/BlogIcon.svg'
            alt='Blog'
            title='Blog 저장소'
            content='Blog 저장소입니다.'
            link='https://velog.io/@j980303/posts'
          />
        </div>
      </section>

      {/* 기술 스택 */}
      <section className='pb-20 border-solid border-b-[1px] border-[#dcdcdc]'>
        <h2 className='text-xl font-semibold mb-2'>기술 스택</h2>
        <div className='flex flex-row gap-5'>
          <TechStackBadge tech='React' />
          <TechStackBadge tech='CSSModules' />
          <TechStackBadge tech='TypeScript' />
          <TechStackBadge tech='NextJs' />
          <TechStackBadge tech='ReactQuery' />
          <TechStackBadge tech='Zustand' />
        </div>
      </section>

      {/* 주요 작업들 */}
      <section className='pb-20 border-solid border-b-[1px] border-[#dcdcdc]'>
        <h2 className='text-xl font-semibold mb-2'>주요 작업</h2>
        <div className='space-y-4'>
          {project.mainWorks.map((work, index) => (
            <div key={index} className='p-4'>
              <h3 className='text-lg font-bold text-text-main mb-2 bg-mainGray p-3'>
                {work.title}
              </h3>

              {/* {work.problem && (
                <div className='mb-2'>
                  <p className='font-medium text-sm'>문제</p>
                  <ul className='list-disc list-inside text-sm pl-4'>
                    {work.problem.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
              )} */}

              {work.overview && (
                <p className='text-sm mb-3 text-gray-700'>{work.overview}</p>
              )}

              {/* {work.solution && (
                <div className='mb-2'>
                  <p className='font-medium text-sm'>해결 방법</p>
                  <ul className='list-disc list-inside text-sm pl-4'>
                    {work.solution.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
              )}

              {work.achievements && (
                <div>
                  <p className='font-medium text-sm'>성과</p>
                  <ul className='list-disc list-inside text-sm pl-4'>
                    {work.achievements.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
              )} */}

              {work.contributions && (
                <div>
                  {/* <p className='font-medium text-sm mb-1'>기여 내용</p> */}
                  <ul className='list-disc list-inside text-sm pl-4 text-gray-800'>
                    {work.contributions.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
