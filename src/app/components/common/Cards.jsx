'use client';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { ICONS } from './icons/AllIcons';
import { CircleThickIcon } from './svgImage';
import { toSentenceCase } from '../../utils/utils';

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
}) {
  const Icon = content?.icon ? ICONS[content?.icon] : null;
  const components = {
    p: FeatureWrapper,
    li: FeatureWrapper,
    span: FeatureWrapper,
  };
  return (
    <div
      className={`relative p-6 w-full flex flex-col gap-4 bg-white border rounded-2xl transition-all duration-300 ease-out
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
            <div className="w-12 h-12 text-center rounded-2xl bg-[#DFEDFA] flex justify-center items-center">
              <Icon width={24} height={24} color="text-[#0f5291]" />
              {/* {Icon} */}
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
            <div className="w-12 h-12 text-center text-[#226fb7] flex justify-center items-center">
              {content?.iconText}
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 justify-start items-start h-full">
        {content?.label && (
          <div
            className={`text-body text-xl font-bold h-fit w-full text-black ${flexCss}`}
          >
            {toSentenceCase(content?.label)}
          </div>
        )}
        {cardArrow && (
          <div
            className="absolute -right-2 top-1/2 -translate-y-1/2
               text-4xl font-bold z-10 text-[#0f5291]"
          >
            &gt;
          </div>
        )}
        {content?.description && (
          <p className={`font-body w-full text-stone-600 ${flexCss}`}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {content?.description}
            </ReactMarkdown>
          </p>
        )}
        {content?.featureHighlight &&
          content?.featureHighlight?.map((featureItem, idx) => (
            <p
              className={`text-body w-full text-stone-600 ${flexCss}`}
              key={idx}
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
            </p>
          ))}
        {content?.subdescrp && (
          <p
            className={`text-body w-full flex items-end justify-center text-base text-[#0f5291] font-semibold ${flexCss}`}
          >
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {content?.subdescrp}
            </ReactMarkdown>
          </p>
        )}
      </div>
    </div>
  );
}

export default Cards;
