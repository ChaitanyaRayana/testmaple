'use client';
import { useEffect } from 'react';
import { toSentenceCase } from '../../utils/utils';
import Button from './Button';
import Cards from './Cards';
import ChipText from './ChipText';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CenterTextCardsSection({
  mapData,
  headingStart,
  gridGroup = 'md:grid-cols-2 lg:grid-cols-3',
  centerCardContent = true,
  groupCss,
  cardArrow = false,
  mustHaveLeftRightPadding = 'px-10',
  mustHaveBottomPadding = 'pb-15',
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    // <VerticalBorderPattern >
    <section
      className={`flex w-full overflow-hidden  max-w-7xl  flex-row items-start justify-center text-center `}
    >
      <div className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center  gap-8">
        <div
          className={`flex flex-col items-start w-full  gap-4 ${
            headingStart ? 'justify-start' : 'justify-center'
          } ${mustHaveLeftRightPadding} `}
        >
          {mapData?.chipText && (
            <div
              data-aos="fade-up"
              data-aos-duration="200"
              key={mapData?.chipText}
              className={`flex w-full ${
                headingStart ? 'justify-start' : 'justify-center'
              }`}
            >
              <ChipText text={mapData?.chipText} chipIcon={mapData?.chipIcon} />
            </div>
          )}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className={`font-heading text-black w-full text-3xl   font-bold text-center ${
              headingStart ? 'text-start' : 'text-center'
            }`}
          >
            {toSentenceCase(mapData?.label)}
          </div>
          {mapData?.description && (
            <p
              data-aos="fade-up"
              data-aos-duration="1200"
              className={`font-body  leading-6 text-stone700 text-center w-full ${
                headingStart ? 'text-start' : 'text-center'
              }`}
            >
              {mapData?.description}
            </p>
          )}
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className={`grid  gap-8 w-full ${gridGroup} ${mustHaveLeftRightPadding} ${mustHaveBottomPadding}
          `}
        >
          {mapData?.cardSection?.map((item, i) => (
            <Cards
              content={item}
              key={i}
              flexCss={
                centerCardContent && !item?.percentage
                  ? 'text-start'
                  : 'text-center'
              }
              cardArrow={cardArrow && i !== mapData?.cardSection?.length - 1}
              groupCss={groupCss}
            />
          ))}
        </div>
      </div>
    </section>
    // </VerticalBorderPattern>
  );
}

export default CenterTextCardsSection;
