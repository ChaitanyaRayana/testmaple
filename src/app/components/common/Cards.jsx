'use client';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { ICONS } from './icons/AllIcons';
import { CircleThickIcon } from './svgImage';
import { toSentenceCase } from '../../utils/utils';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FeatureWrapper = ({ children }) => (
  <p className="flex items-start gap-2 text-stone-700 font-body">
    <CircleThickIcon width={16} height={16} />
    <span className="leading-4 ">{children}</span>
  </p>
);

function Cards({
  content,
  flexCss = '',
  groupCss = '',
  cardArrow = false,
  shadowRemove = false,
  hasCardWithAnimation = false,
  businessSection = false,
}) {
  const Icon = content?.icon ? ICONS[content?.icon] : null;
  const components = {
    p: FeatureWrapper,
    li: FeatureWrapper,
    span: FeatureWrapper,
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className={`relative p-6 w-full  flex flex-col gap-4 bg-white border rounded-2xl transition-all duration-300 ease-out
    transform-gpu
    hover:-translate-y-2 hover:scale-[1.02]
    hover:shadow-2xl cursor-pointer ${flexCss} ${groupCss} ${shadowRemove ? '' : 'shadow-xl'}`}
    >
      <div>
        <div
          className={`${
            flexCss !== 'text-start'
              ? 'w-full flex flex-row justify-center mx-auto'
              : ''
          } `}
        >
          {Icon && (
            <div
              data-aos={
                hasCardWithAnimation ? '' : businessSection ? 'fade-up' : ''
              }
              data-aos-duration={
                hasCardWithAnimation ? '' : businessSection ? '200' : ''
              }
              className="w-12 h-12 text-center rounded-2xl bg-[#DFEDFA] flex justify-center items-center"
            >
              <Icon width={24} height={24} color="text-[#0f5291]" />
              {/* {Icon} */}
            </div>
          )}
          {content?.percentage && (
            <div
              data-aos={businessSection ? 'fade-up' : ''}
              data-aos-duration={businessSection ? '200' : ''}
              className=" text-[#0f5291] font-bold text-4xl text-center flex justify-center items-center"
            >
              {content?.percentage}
            </div>
          )}
        </div>
        <div
          className={`${
            flexCss !== 'text-start'
              ? 'w-full flex flex-row justify-center mx-auto'
              : ''
          } `}
        >
          {' '}
          {content?.iconText && (
            <div
              data-aos={
                hasCardWithAnimation ? '' : businessSection ? 'fade-up' : ''
              }
              data-aos-duration={
                hasCardWithAnimation ? '' : businessSection ? '200' : ''
              }
              className="w-12 h-12 text-center text-primaryTextColor flex justify-center items-center"
            >
              {content?.iconText}
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 justify-start items-start h-fit">
        {content?.label && (
          <div
            data-aos={
              hasCardWithAnimation ? '' : businessSection ? 'fade-up' : ''
            }
            data-aos-duration={
              hasCardWithAnimation ? '' : businessSection ? '800' : ''
            }
            className={`text-body font-bold h-fit w-full text-black ${flexCss} text-lg`}
          >
            {toSentenceCase(content?.label)}
          </div>
        )}
        {cardArrow && (
          <div
            data-aos="fade-up"
            data-aos-duration={
              hasCardWithAnimation ? '' : businessSection ? '1200' : ''
            }
            className="absolute -right-2 top-1/2 -translate-y-1/2
               text-4xl font-bold z-10 text-[#0f5291]"
          >
            &gt;
          </div>
        )}
        {content?.description && (
          <div
            data-aos={
              hasCardWithAnimation ? '' : businessSection ? 'fade-up' : ''
            }
            data-aos-duration="1200"
            className={`font-body w-full text-stone-600 text-sm ${flexCss}`}
          >
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {content?.description}
            </ReactMarkdown>
          </div>
        )}
        {content?.featureHighlight &&
          content?.featureHighlight?.map((featureItem, idx) => (
            <div
              className={`text-body w-full text-stone-600 ${flexCss}`}
              key={idx}
              data-aos={businessSection ? 'fade-up' : ''}
              data-aos-duration={businessSection ? (idx + 1) * 400 : ''}
            >
              {content?.featureMarkDownIcon === 'CircleThickIcon' ? (
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  components={components}
                >
                  {featureItem}
                </ReactMarkdown>
              ) : (
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {featureItem}
                </ReactMarkdown>
              )}
            </div>
          ))}
        {content?.subdescrp && (
          <div
            data-aos={businessSection ? 'fade-up' : ''}
            data-aos-duration={businessSection ? '1000' : ''}
            className={`text-body w-full flex items-end justify-center text-base text-[#0f5291] font-semibold ${flexCss}`}
          >
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {content?.subdescrp}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards;
