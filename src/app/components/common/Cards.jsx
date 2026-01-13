'use client';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { ICONS } from './icons/AllIcons';
function Cards({ content, flexCss = '', groupCss = '', cardArrow = false }) {
  const Icon = content?.icon ? ICONS[content?.icon] : null;
  return (
    <div
      className={`relative p-8 w-full h-full flex flex-col gap-4 bg-white shadow-2xl rounded-2xl transform transition-transform duration-300 hover:transform-3d cursor-pointer ${flexCss} ${groupCss}`}
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
      <div className="flex w-full flex-col gap-2 justify-around items-start h-full">
        <div
          className={`text-body text-xl font-bold h-fit w-full text-black ${flexCss}`}
        >
          {content?.label}
        </div>
        {cardArrow && (
          <div
            className="absolute -right-2 top-1/2 -translate-y-1/2
               text-4xl font-bold z-10 text-[#0f5291]"
          >
            &gt;
          </div>
        )}
        {content?.description && (
          <p className={`text-body w-full text-base text-stone-600 ${flexCss}`}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {content?.description}
            </ReactMarkdown>
          </p>
        )}
        {content?.featureHighlight &&
          content?.featureHighlight?.map((featureItem, idx) => (
            <p
              className={`text-body w-full text-base text-stone-600 ${flexCss}`}
              key={idx}
            >
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {featureItem}
              </ReactMarkdown>
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
