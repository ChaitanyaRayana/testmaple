'use client';
import Image from 'next/image';
import Button from './Button';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ChipText from './ChipText';
import Cards from './Cards';
import Table from './Table';
import { CircleThickIcon } from './svgImage';
import { useRouter } from 'next/navigation';
import { toSentenceCase } from '../../utils/utils';
import { ICONS } from './icons/AllIcons';

function ZigZagContent({
  mapData,
  zigZagClassName,
  mustHaveBottomPadding = 'pb-15',
  mustHaveLeftRightPadding = 'px-10',
  imageHeight = 'h-120',
}) {
  const Icon = mapData?.icon ? ICONS[mapData?.icon] : null;
  const router = useRouter();
  return (
    <div
      className={`flex flex-col w-full ${mustHaveBottomPadding} ${mustHaveLeftRightPadding}`}
    >
      <div className={zigZagClassName}>
        <div className={`flex w-full  flex-col gap-10 justify-center `}>
          <div className="flex flex-col gap-5">
            {mapData?.chipText && (
              <ChipText
                styling="w-fit"
                text={mapData?.chipText}
                chipIcon={mapData?.chipIcon}
              />
            )}

            <div className="flex flex-row items-center gap-4">
              {mapData?.icon && (
                // <ChipText styling="w-fit" text={mapData?.chipText} />

                <div className="w-12 h-12 text-center rounded-2xl bg-[#DFEDFA] flex justify-center items-center">
                  <Icon width={24} height={24} color="text-[#0f5291]" />
                  {/* {Icon} */}
                </div>
              )}{' '}
              <div className="font-heading text-3xl text-black text-start font-bold">
                {toSentenceCase(mapData?.label)}
              </div>
            </div>
            {mapData?.description && (
              <div className="font-body text-stone700 text-start text-[16px]">
                {mapData?.description}
              </div>
            )}
          </div>
          {mapData?.featureHighlight && (
            <div className="flex flex-col gap-3">
              {mapData?.featureHighlight?.map((hightLightItem) => (
                <div className="font-body flex flex-row gap-4 items-start text-stone700 text-start text-[16px]">
                  <span className="flex h-full items-center">
                    <CircleThickIcon width={16} height={16} />{' '}
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
                    onClickButton={(e) => {
                      if (item?.href) {
                        router.push(item?.href);
                      }
                      return;
                    }}
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
            <div className="flex flex-col gap-6 w-full">
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
            className={`w-full flex  overflow-hidden justify-center ${imageHeight}`}
          >
            <Image
              src={mapData?.image}
              alt={toSentenceCase(mapData?.label)}
              width={500}
              height={300}
              className="object-contain rounded-xl"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ZigZagContent;
