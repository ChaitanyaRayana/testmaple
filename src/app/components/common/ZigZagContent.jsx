'use client';
import Image from 'next/image';
import Button from './Button';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ChipText from './ChipText';
import Cards from './Cards';
import Table from './Table';
import { CircleThickIcon } from './svgImage';

function ZigZagContent({ mapData, zigZagClassName }) {
  return (
    <div className={zigZagClassName}>
      <div
        className={`flex w-full  flex-col gap-10 justify-center ${
          mapData?.cardSection ? 'h-max' : 'max-lg:h-max lg:h-120'
        }`}
      >
        <div className="flex flex-col gap-5">
          {mapData?.chipText && (
            <ChipText
              styling="w-fit"
              text={mapData?.chipText}
              chipIcon={mapData?.chipIcon}
            />
          )}

          <div className="flex flex-col gap-4">
            <div className="font-heading text-3xl text-black text-start">
              {mapData?.icon && (
                <ChipText styling="w-fit" text={mapData?.chipText} />
              )}{' '}
              {mapData?.label}
            </div>
          </div>
          {mapData?.description && (
            <div className="font-body text-stone700 text-start text-[14px]">
              {mapData?.description}
            </div>
          )}
        </div>
        {mapData?.featureHighlight && (
          <div className="flex flex-col gap-3">
            {mapData?.featureHighlight?.map((hightLightItem) => (
              <div className="font-body flex flex-row gap-4 items-start text-stone700 text-start text-[16px]">
                <span className="flex h-full items-center">
                  <CircleThickIcon />{' '}
                </span>{' '}
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {hightLightItem}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        )}

        {mapData?.buttonsText ? (
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 w-full">
              {mapData?.buttonsText?.map((item, i) => (
                <Button
                  gradientColor={
                    i === 0
                      ? 'bg-linear-to-br from-[#EBF3FA] to-[#DFEDFA] rounded  hover:text-white'
                      : 'bg-white rounded  hover:text-white'
                  }
                >
                  {item?.label || item}
                </Button>
              ))}
            </div>
            <div className="font-body text-stone700 text-start text-[12px]">
              {typeof mapData?.bottomText === 'string' ? (
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {mapData.bottomText}
                </ReactMarkdown>
              ) : (
                mapData?.bottomText
              )}
            </div>
          </div>
        ) : (
          !mapData?.cardSection &&
          !mapData?.stats && (
            <Button padding="text-center w-fit">Get started today</Button>
          )
        )}

        {mapData?.cardSection && (
          <div className="flex flex-col gap-6 w-full pb-20">
            {mapData?.cardSection?.map((item, i) => (
              <Cards
                content={item}
                key={i}
                flexCss={
                  mapData?.chipText || mapData?.leftAlign
                    ? 'text-start'
                    : 'text-center'
                }
                groupCss={'flex-row gap-4'}
              />
            ))}
          </div>
        )}
        {mapData?.stats && <Table stats={mapData?.stats} />}
      </div>

      {mapData?.image && (
        <div
          className={`w-full flex justify-center ${
            mapData?.cardSection ? 'h-max' : 'max-lg:h-max lg:h-120'
          }`}
        >
          <Image
            src={mapData?.image}
            alt={mapData?.label}
            width={500}
            height={300}
            className="object-contain "
          />
        </div>
      )}
    </div>
  );
}

export default ZigZagContent;
