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
        {project.myContributions && (
          <div className='my-4'>
            <p className='text-md font-medium mb-1'>담당한 기능</p>
            <p className='text-sm text-gray-700'>{project.myContributions}</p>
          </div>
        )}
        <div className='grid grid-cols-2 gap-5 mx-auto w-fit'>
          <Information
            svgSrc='/icons/GithubIcon.svg'
            alt='GitHub'
            title='GitHub 저장소'
            content='프론트엔드 개발 프로젝트 저장소입니다.'
            link={project.githubLink}
            isModal={true}
          />
          {project.deployLink && (
            <Information
              svgSrc={`/icons/${project.title}Icon.svg`}
              alt='Deploy'
              title='배포 주소'
              content={`${project.title} 프로젝트 배포 주소입니다.`}
              link={project.deployLink}
              isModal={true}
            />
          )}
          {project.demoLink && (
            <Information
              svgSrc='/icons/YoutubeIcon.svg'
              alt='Demo Video'
              title='데모 영상'
              content='프로젝트 데모 영상입니다.'
              link={project.demoLink}
              isModal={true}
            />
          )}
        </div>
      </section>

      {/* 기술 스택 */}
      <section className='pb-20 border-solid border-b-[1px] border-[#dcdcdc]'>
        <h2 className='text-xl font-semibold mb-2'>기술 스택</h2>
        <div className='flex flex-row gap-5 flex-wrap'>
          {project.techStacksUsed.map((tech, index) => (
            <TechStackBadge key={index} tech={tech} isModal={true} />
          ))}
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
              {work.overview && (
                <p className='text-sm mb-3 text-gray-700'>{work.overview}</p>
              )}
              {work.contributions && (
                <div>
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

      {/* 트러블슈팅 */}
      <section className='pb-20'>
        <h2 className='text-xl font-semibold mb-2'>트러블슈팅</h2>
        <div className='space-y-8'>
          {project.troubleShootings.map((item, index) => (
            <div key={index}>
              <h3 className='text-lg font-bold text-text-main mb-3 bg-[#f5f5f5] p-3'>
                {item.title}
              </h3>

              <div className='mb-5'>
                <p className='text-lg font-medium mb-1'>📌 문제 배경</p>
                <p className='text-sm text-gray-700'>{item.background}</p>
              </div>

              <div className='mb-5'>
                <p className='text-lg font-medium mb-1'>🔍 원인 분석</p>
                <ul className='list-disc list-inside text-sm pl-4 text-gray-800'>
                  {item.resolutionMethod.analysis.map((a, idx) => (
                    <li key={idx}>{a}</li>
                  ))}
                </ul>
              </div>

              <div className='mb-5'>
                <p className='text-lg font-medium mb-1'>🛠 해결 과정</p>
                <ul className='list-disc list-inside text-sm pl-4 text-gray-800'>
                  {item.resolutionMethod.process.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>

              <div className='mb-5'>
                <p className='text-lg font-medium mb-1'>✅ 결과</p>
                <ul className='list-disc list-inside text-sm pl-4 text-gray-800'>
                  {item.results.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className='text-lg font-medium mb-1'>🧠 배운 점</p>
                <p className='text-sm text-gray-700'>{item.learnings}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
