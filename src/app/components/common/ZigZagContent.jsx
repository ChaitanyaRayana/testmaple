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
import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function ZigZagContent({
  mapData,
  zigZagClassName,
  mustHaveBottomPadding = 'pb-15',
  mustHaveLeftRightPadding = 'px-10',
  cardHeight = 'h-130 overflow-hidden',
  heroSection = false,
}) {
  const Icon = mapData?.icon ? ICONS[mapData?.icon] : null;
  const router = useRouter();
  const hasCardSection = mapData?.cardSection && mapData.cardSection.length > 0;
  const cardScrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = cardScrollRef.current;
    if (!scrollContainer) return;

    // Check if screen is lg or larger (1024px+)
    const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;
    if (!isLargeScreen) return;

    let animationId;
    let scrollPosition = 0;

    const smoothScroll = () => {
      const maxScroll =
        scrollContainer.scrollHeight - scrollContainer.clientHeight;

      // Increment scroll position (adjust speed by changing this value)
      scrollPosition += 0.5;

      // Reset to top when reaching bottom
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }

      scrollContainer.scrollTop = scrollPosition;
      animationId = requestAnimationFrame(smoothScroll);
    };

    // Start animation
    animationId = requestAnimationFrame(smoothScroll);

    // Cleanup
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [hasCardSection, mapData?.cardSection]);

  return (
    <div
      className={`flex flex-col w-full ${mustHaveBottomPadding} ${mustHaveLeftRightPadding} ${hasCardSection ? 'min-h-screen lg:h-screen' : ''}`}
    >
      <div
        className={`${zigZagClassName} ${hasCardSection ? 'h-full overflow-hidden' : 'lg:h-130 overflow-hidden'}  max-lg:flex-col items-start gap-10`}
      >
        {/* Left Content Section */}
        <div
          className={`flex w-full flex-col gap-6 justify-start  ${hasCardSection ? 'h-full md:h-fit' : mapData?.stats ? '' : 'pt-12'}`}
        >
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
                <div className="w-12 h-12 text-center rounded-2xl bg-[#DFEDFA] flex justify-center items-center">
                  <Icon width={24} height={24} color="text-[#0f5291]" />
                </div>
              )}
              <div
                className={`font-heading text-3xl text-black text-start font-bold ${heroSection ? 'text-[44px] leading-11' : 'text-3xl'}`}
              >
                {toSentenceCase(mapData?.label)}
              </div>
            </div>
            {mapData?.description && (
              <p className={`font-body text-stone700 text-start`}>
                {mapData?.description}
              </p>
            )}
          </div>

          {mapData?.featureHighlight && (
            <div className="flex flex-col gap-3">
              {mapData?.featureHighlight?.map((hightLightItem, idx) => (
                <div
                  key={idx}
                  className="font-body flex flex-row gap-4 items-start text-stone700 text-start text-[16px]"
                >
                  <span className="flex h-full items-center">
                    <CircleThickIcon width={16} height={16} />
                  </span>
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
                    key={i}
                    gradientColor={
                      i === 0
                        ? 'bg-linear-to-br from-[#EBF3FA] to-[#DFEDFA] rounded hover:text-white'
                        : 'bg-white rounded hover:text-white'
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

          {/* Scrollable Card Section */}
          {hasCardSection && (
            <div className="flex-col gap-4 relative w-full pr-2 hidden lg:flex overflow-hidden">
              {/* First set of cards - animating */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: '-100%' }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="flex flex-col gap-4 shrink-0"
              >
                {mapData?.cardSection?.map((item, i) => (
                  <Cards
                    content={item}
                    key={`first-${i}`}
                    flexCss={
                      mapData?.chipText || mapData?.leftAlign
                        ? 'text-start'
                        : 'text-center'
                    }
                    groupCss={'flex-row gap-4 shadow-none'}
                    shadowRemove={true}
                  />
                ))}
              </motion.div>

              {/* Duplicate set of cards - for seamless loop */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: '-100%' }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="flex flex-col gap-4 shrink-0"
              >
                {mapData?.cardSection?.map((item, i) => (
                  <Cards
                    content={item}
                    key={`second-${i}`}
                    flexCss={
                      mapData?.chipText || mapData?.leftAlign
                        ? 'text-start'
                        : 'text-center'
                    }
                    groupCss={'flex-row gap-4 shadow-none'}
                    shadowRemove={true}
                  />
                ))}
              </motion.div>
            </div>
          )}
          {!hasCardSection && (
            <div
              ref={cardScrollRef}
              className={` flex-col relative h-fit w-full pr-2 hidden md:flex gap-4 overflow-hidden`}
            >
              {mapData?.cardSection?.map((item, i) => (
                <Cards
                  content={item}
                  key={`first-${i}`}
                  flexCss={
                    mapData?.chipText || mapData?.leftAlign
                      ? 'text-start'
                      : 'text-center'
                  }
                  groupCss={'flex-row gap-4 shadow-none'}
                  shadowRemove={true}
                />
              ))}
            </div>
          )}

          {mapData?.stats && <Table stats={mapData?.stats} />}
        </div>

        {/* Sticky Image Section */}
        {mapData?.image && (
          <div
            className={`w-full flex justify-center  ${hasCardSection ? '  items-start sticky top-12 overflow-hidden' : 'h-full max-h-120 items-center'}`}
          >
            {/* <div className="w-full  flex justify-center items-center p-4"> */}
            <Image
              src={mapData?.image}
              alt={toSentenceCase(mapData?.label)}
              width={500}
              height={300}
              className="object-contain rounded-xl max-h-full w-auto"
            />
            {/* </div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default ZigZagContent;
