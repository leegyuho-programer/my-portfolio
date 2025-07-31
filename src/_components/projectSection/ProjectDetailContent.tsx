'use client';

import { ProjectProps } from '@/_data/projectData';
import {
  borderBottom,
  modalSectionSubTitle,
  modalSectionTitle,
  orderListStyle,
  subTitle,
  unOrderListStyle,
} from '@/app/styles';
import Information from '../Information/Information';
import TechStackBadge from '../TechStackBadge/TechStackBadge';

interface ProjectDetailContentProps {
  project: ProjectProps;
}

// **text**와 `code` 형태의 마크다운 스타일을 HTML로 변환하는 함수
const renderBoldText = (text: string): React.ReactNode => {
  // **bold** 와 `code` 패턴을 모두 찾기 위한 정규식
  const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      // **를 제거하고 bold 처리
      const boldText = part.slice(2, -2);
      return (
        <strong key={index} className='font-bold text-black'>
          {boldText}
        </strong>
      );
    } else if (part.startsWith('`') && part.endsWith('`')) {
      // `를 제거하고 code 스타일 처리
      const codeText = part.slice(1, -1);
      return (
        <code
          key={index}
          className='bg-gray-200 font-bold text-black px-1 py-0.5 rounded'
        >
          {codeText}
        </code>
      );
    }
    return part;
  });
};

export default function ProjectDetailContent({
  project,
}: ProjectDetailContentProps) {
  return (
    <div className='w-full px-[250px] py-8 text-text-main flex flex-col gap-10'>
      {/* 프로젝트 소개 */}
      <section className={`flex flex-col gap-5 pb-20 ${borderBottom}`}>
        <h2 className={modalSectionTitle}>프로젝트 소개</h2>
        <p className='text-sm font-normal'>
          {renderBoldText(project.serviceDescription)}
        </p>
        {project.myContributions && (
          <div className='my-4'>
            <p className={subTitle}>담당한 기능</p>
            <p className='text-sm font-bold text-black'>
              {renderBoldText(project.myContributions)}
            </p>
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
      <section className={`pb-20 ${borderBottom}`}>
        <h2 className={modalSectionTitle}>기술 스택</h2>
        <div className='flex flex-row gap-5 flex-wrap'>
          {project.techStacksUsed.map((tech, index) => (
            <TechStackBadge key={index} tech={tech} isModal={true} />
          ))}
        </div>
      </section>

      {/* 주요 작업들 */}
      <section className={`pb-20 ${borderBottom}`}>
        <h2 className={modalSectionTitle}>주요 작업</h2>
        <div className='space-y-4'>
          {project.mainWorks.map((work, index) => (
            <div key={index} className='p-4'>
              <h3 className={modalSectionSubTitle}>
                {renderBoldText(work.title)}
              </h3>
              {work.overview && (
                <p className='text-sm mb-3 text-gray-700'>
                  {renderBoldText(work.overview)}
                </p>
              )}
              {work.contributions && (
                <div>
                  <ul className={orderListStyle}>
                    {work.contributions.map((item, idx) => (
                      <li key={idx}>{renderBoldText(item)}</li>
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
        <h2 className={modalSectionTitle}>트러블슈팅</h2>
        <div className='space-y-8'>
          {project.troubleShootings.map((item, index) => (
            <div key={index}>
              <h3 className={modalSectionSubTitle}>
                {renderBoldText(item.title)}
              </h3>

              <div className='mb-5'>
                <p className={subTitle}>📌 문제 배경</p>
                <p className='text-sm text-gray-700'>
                  {renderBoldText(item.background)}
                </p>
              </div>

              <div className='mb-5'>
                <p className={subTitle}>🔍 원인 분석</p>
                <ul className={orderListStyle}>
                  {item.resolutionMethod.analysis.map((a, idx) => (
                    <li key={idx}>{renderBoldText(a)}</li>
                  ))}
                </ul>
              </div>

              <div className='mb-5'>
                <p className={subTitle}>🛠 해결 과정</p>
                <ol className={unOrderListStyle}>
                  {item.resolutionMethod.process.map((p, idx) => (
                    <li key={idx}>{renderBoldText(p)}</li>
                  ))}
                </ol>
              </div>

              <div className='mb-5'>
                <p className={subTitle}>✅ 결과</p>
                <ul className={orderListStyle}>
                  {item.results.map((r, idx) => (
                    <li key={idx}>{renderBoldText(r)}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className={subTitle}>🧠 배운 점</p>
                <p className='text-sm text-gray-700'>
                  {renderBoldText(item.learnings)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
