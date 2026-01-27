'use client';

import { useEffect } from 'react';
import Navbar from '../Navbar';
import ZigZagContent from '../common/ZigZagContent';
import { VerticalBorderPattern } from '../common/Icon';
import CenterTextCardsSection from '../common/CenterTextCardsSection';
import ScheduleBanner from '../common/ScheduleBanner';
import Fotter from '../common/Fotter';
import ChipText from '../common/ChipText';
import ZigZagHomeSection from '../common/ZigZagHomeSection';
import Image from 'next/image';
import heroSectionBgTwoImage from '@/public/assets/images/png/bg-abstract.png';

export default function SolutionPageClient({ contentToDisplay, pathName }) {
  useEffect(() => {
    const section = document.getElementById(
      contentToDisplay?.sectionThree?.ref
    );
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          history.replaceState(
            null,
            '',
            `#${contentToDisplay?.sectionThree?.ref}`
          );
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          history.replaceState(
            null,
            '',
            window.location.pathname + window.location.search
          );
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [contentToDisplay]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Navbar />

      <main className="flex w-full relative z-1 max-w-7xl mx-auto  flex-col items-center bg-white">
        {/* // Section one */}
        <VerticalBorderPattern gradientName="backgroundGlow">
          <Image
            src={heroSectionBgTwoImage}
            alt=""
            width={600}
            height={600}
            data-aos="fade-left"
            data-aos-duration="800"
            className="absolute z-0  max-w-7xl mx-auto w-full h-full px-2 pb-1 "
          />
          <section className="flex  max-w-300 mx-auto max-xs:px-5 xs:px-10 pt-30 pb-15  flex-row gap-10">
            <ZigZagContent
              mapData={contentToDisplay?.sectionOne}
              mustHaveBottomPadding={''}
              mustHaveLeftRightPadding={''}
              heroSection={true}
              zigZagClassName="flex g:flex-row max-lg:flex-col  w-full justify-between gap-6 p-8"
            />
          </section>
        </VerticalBorderPattern>
        {/* Section  Two*/}
        <VerticalBorderPattern>
          <section className="flex  max-w-300 mx-auto pt-15   flex-row gap-10">
            <CenterTextCardsSection
              mapData={contentToDisplay?.sectionTwo}
              headingStart={false}
              mustHaveBottomPadding={'pb-15'}
              mustHaveLeftRightPadding={'px-10'}
            />
          </section>
        </VerticalBorderPattern>

        {/* Section  Three*/}
        <VerticalBorderPattern>
          <section className="flex  max-w-300 mx-auto flex-col pt-15 pb-15 gap-12">
            {[
              'finance-accounting',
              'legal-compliance',
              'human-resource',
              'operations',
              'research-development',
              'customer-service',
            ]?.includes(pathName) ? (
              <CenterTextCardsSection
                mapData={contentToDisplay?.sectionThree}
                cardGroup={true}
                headingStart={false}
                gridGroup="md:grid-cols-4"
                cardArrow={true}
                mustHaveBottomPadding={'pb-15'}
                mustHaveLeftRightPadding={'px-10'}
              />
            ) : (
              <>
                {' '}
                <div
                  className={`flex w-full  flex-col gap-10 justify-center ${
                    contentToDisplay?.sectionThree?.cardSection
                      ? 'h-max'
                      : 'max-lg:h-max lg:h-120'
                  }`}
                >
                  <div className="flex flex-col gap-5 max-xs:px-5 xs:px-10">
                    {contentToDisplay?.sectionThree?.chipText && (
                      <ChipText
                        styling="w-fit"
                        text={contentToDisplay?.sectionThree?.chipText}
                      />
                    )}
                    <div className="flex flex-col gap-4">
                      <div className="font-heading text-3xl text-black text-start">
                        {contentToDisplay?.sectionThree?.label}
                      </div>
                    </div>
                  </div>
                </div>
                <ZigZagHomeSection
                  mapData={contentToDisplay?.sectionThree?.cardSection}
                  padding={{ top: 0, around: 0 }}
                  mustHaveBottomPadding={''}
                  mustHaveLeftRightPadding={'px-10'}
                />
              </>
            )}
          </section>
        </VerticalBorderPattern>
        {/* Section  Four*/}
        <VerticalBorderPattern>
          <section className="flex max-w-300 mx-auto pt-15   flex-row gap-10">
            <CenterTextCardsSection
              mapData={contentToDisplay?.sectionFour}
              cardGroup={true}
              headingStart={false}
              gridGroup="md:grid-cols-4"
              mustHaveBottomPadding={'pb-15'}
              mustHaveLeftRightPadding={'px-10'}
              businessSection={true}
            />
          </section>
        </VerticalBorderPattern>
        {/* Section  Five*/}
        <VerticalBorderPattern>
          <section className="flex  max-w-300 mx-auto pt-15   flex-row gap-10">
            <CenterTextCardsSection
              mapData={contentToDisplay?.sectionFive}
              gridGroup={'md:grid-cols-3'}
              headingStart={true}
              mustHaveBottomPadding={'pb-15'}
              mustHaveLeftRightPadding={'px-10'}
              zigZagClassName="flex g:flex-row max-lg:flex-col items-center  backgroundGradient  w-full justify-between gap-6 border border-solid border-bordergray rounded-3xl shadow-2xl p-8"
            />
          </section>
        </VerticalBorderPattern>

        {/* Section  Six*/}
        <VerticalBorderPattern>
          <section className="flex  max-w-300 mx-auto pt-15   flex-row gap-10">
            <CenterTextCardsSection
              mapData={contentToDisplay?.sectionSix}
              gridGroup={'flex flex-row justify-center'}
              headingStart={false}
              centerCardContent={true}
              groupCss={' lg:w-[600px] w-full'}
              mustHaveBottomPadding={'pb-15'}
              mustHaveLeftRightPadding={'px-10'}
              zigZagClassName="flex g:flex-row max-lg:flex-col items-center  backgroundGradient  w-full justify-between gap-6 border border-solid border-bordergray rounded-3xl shadow-2xl p-8"
            />
          </section>
        </VerticalBorderPattern>
        {contentToDisplay?.scheduleSection && (
          <ScheduleBanner content={contentToDisplay?.scheduleSection} />
        )}
      </main>
      <Fotter />
    </div>
  );
}
