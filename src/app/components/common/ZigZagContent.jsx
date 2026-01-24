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
import AOS from 'aos';
import 'aos/dist/aos.css';

function ZigZagContent({
  mapData,
  zigZagClassName,
  mustHaveBottomPadding = 'pb-15',
  mustHaveLeftRightPadding = 'px-10',
  cardHeight = 'h-130 overflow-hidden',
  heroSection = false,
  hasCardWithAnimation = false,
}) {
  const Icon = mapData?.icon ? ICONS[mapData?.icon] : null;
  const router = useRouter();

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
  }, [hasCardWithAnimation, mapData?.cardSection]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  console.log({ mapData });

  return (
    <div
      className={`flex flex-col w-full ${mustHaveBottomPadding} ${mustHaveLeftRightPadding} ${hasCardWithAnimation || heroSection ? 'max-h-screen h-full' : ''}`}
    >
      <div
        className={`${zigZagClassName} ${hasCardWithAnimation || heroSection ? 'h-full overflow-hidden' : 'lg:h-130 max-md:h-auto overflow-hidden'}  max-lg:flex-col items-start gap-10`}
      >
        {/* Left Content Section */}
        <div
          className={`flex w-full flex-col gap-6 justify-start  ${hasCardWithAnimation || heroSection ? 'h-full max-md:h-fit' : mapData?.stats ? '' : 'pt-12'}`}
        >
          <div className="flex flex-col gap-5">
            {mapData?.chipText && (
              <div
                data-aos={heroSection ? 'fade-up' : ''}
                data-aos-duration={heroSection ? '200' : ''}
                key={mapData?.chipText}
              >
                <ChipText
                  styling="w-fit"
                  text={mapData?.chipText}
                  chipIcon={mapData?.chipIcon}
                  heroSection={heroSection}
                />
              </div>
            )}

            <div className="flex flex-row items-center gap-4">
              {Icon && (
                <div
                  data-aos={heroSection ? 'fade-up' : ''}
                  data-aos-duration={heroSection ? '200' : ''}
                  className="w-12 h-12 text-center rounded-2xl bg-[#DFEDFA] flex justify-center items-center"
                >
                  <Icon width={24} height={24} color="text-[#0f5291]" />
                </div>
              )}
              <div
                data-aos={heroSection ? 'fade-up' : ''}
                data-aos-duration={heroSection ? '800' : ''}
                className={`font-heading text-black text-start font-bold ${heroSection ? 'text-5xl lg:text-6xl leading-17' : 'text-3xl'}`}
              >
                {toSentenceCase(mapData?.label)}
              </div>
            </div>
            {mapData?.description && (
              <p
                data-aos={heroSection ? 'fade-down' : ''}
                data-aos-duration={heroSection ? '1200' : ''}
                className={`font-body text-stone700 text-start ${heroSection ? 'leading-6' : ''}`}
              >
                {mapData?.description}
              </p>
            )}
          </div>

          {mapData?.featureHighlight && (
            <div className="flex flex-col gap-3">
              {mapData?.featureHighlight?.map((hightLightItem, idx) => (
                <div
                  key={idx}
                  data-aos-duration={(idx + 1) * 400}
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
              <div
                data-aos={heroSection ? 'fade-down' : ''}
                data-aos-duration={heroSection ? '800' : ''}
                className="flex flex-row gap-4 w-full"
              >
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
              <div
                data-aos={heroSection ? 'fade-up' : ''}
                data-aos-duration={heroSection ? '800' : ''}
                className="font-body text-stone700 text-start text-[12px]"
              >
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
              <div
                data-aos={heroSection ? 'fade-down' : ''}
                data-aos-duration={heroSection ? '800' : ''}
              >
                <Button padding="text-center w-fit">Get started today</Button>
              </div>
            )
          )}

          {/* Scrollable Card Section */}
          {hasCardWithAnimation && (
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
                    hasCardWithAnimation={true}
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
                    hasCardWithAnimation={true}
                  />
                ))}
              </motion.div>
            </div>
          )}
          {hasCardWithAnimation && (
            <div
              data-aos={heroSection ? 'fade-up' : ''}
              data-aos-duration={heroSection ? '800' : ''}
              ref={cardScrollRef}
              className={` flex-col relative h-fit w-full pr-2 hidden max-md:flex gap-4 overflow-hidden`}
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
          {!hasCardWithAnimation && (
            <div
              data-aos={heroSection ? 'fade-up' : ''}
              data-aos-duration={heroSection ? '800' : ''}
              ref={cardScrollRef}
              className={` flex flex-col relative h-full w-full pr-2 gap-4 overflow-hidden`}
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
            data-aos={heroSection ? 'fade-down' : ''}
            data-aos-duration={heroSection ? '800' : ''}
            key={mapData?.image}
            className={`w-full flex justify-center  ${hasCardWithAnimation ? '  items-start  sticky top-12 overflow-hidden' : 'h-full max-h-120 items-center'}`}
          >
            {/* <div className="w-full  flex justify-center items-center p-4"> */}
            <Image
              src={mapData?.image}
              alt={toSentenceCase(mapData?.label)}
              width={500}
              height={300}
              className={`${heroSection ? 'lg:h-140 w-full object-fill  h-max' : mapData?.label === 'How MR Workflows Works' ? 'lg:min-h-130 max-md:h-120 w-fit max-md:object-contain items-start lg:object-top' : hasCardWithAnimation ? 'w-fit max-md:object-contain items-start lg:object-top' : 'max-md:h-120 max-md:justify-start object-contain'} rounded-xl max-h-full w-auto`}
            />
            {/* </div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default ZigZagContent;
