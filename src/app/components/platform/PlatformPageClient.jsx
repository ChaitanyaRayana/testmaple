'use client';

import { useEffect } from 'react';
import Navbar from '../Navbar';
import ZigZagContent from '../common/ZigZagContent';
import { VerticalBorderPattern } from '../common/Icon';
import CenterTextCardsSection from '../common/CenterTextCardsSection';
import ScheduleBanner from '../common/ScheduleBanner';
import Fotter from '../common/Fotter';
import Image from 'next/image';
import heroSectionBgOneImage from '@/public/assets/images/png/bg-abstract.png';

export default function PlatformPageClient({ contentToDisplay }) {
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
    <div className="flex min-h-screen w-full  flex-col bg-white">
      <Navbar />
      <main className="flex w-full relative z-1 max-w-7xl mx-auto flex-col items-center bg-white">
        {/* // Section one */}
        <VerticalBorderPattern gradientName="backgroundGlow">
          <Image
            src={heroSectionBgOneImage}
            alt=""
            width={600}
            height={600}
            data-aos="fade-left"
            data-aos-duration="800"
            className="absolute z-0  max-w-7xl mx-auto w-full h-full px-2 pb-1 "
          />
          <section className="flex  max-w-300 mx-auto px-10 pt-30 pb-15 flex-row gap-10">
            <ZigZagContent
              mapData={contentToDisplay?.sectionOne}
              mustHaveBottomPadding={''}
              mustHaveLeftRightPadding={''}
              heroSection={true}
              zigZagClassName="flex lg:flex-row max-lg:flex-col  w-full justify-between gap-6  p-8"
            />
          </section>
        </VerticalBorderPattern>
        {/* Section  Two*/}
        <VerticalBorderPattern gradientName="backgroundGradient">
          <section className="flex  max-w-300 mx-auto pt-15 h-fit flex-row items-start gap-10">
            <CenterTextCardsSection
              mapData={contentToDisplay?.sectionTwo}
              headingStart={true}
              mustHaveBottomPadding={'pb-15'}
              mustHaveLeftRightPadding={'px-10'}
            />
          </section>
        </VerticalBorderPattern>
        {/* Section  Three*/}
        <VerticalBorderPattern gradientName="backgroundGradientAnimation">
          <section
            id={contentToDisplay?.sectionThree?.ref || ''}
            className="flex max-w-300 mx-auto pt-15 flex-row gap-10"
          >
            <ZigZagContent
              mapData={contentToDisplay?.sectionThree}
              cardGroup={true}
              headingStart={true}
              mustHaveBottomPadding={'pb-15'}
              mustHaveLeftRightPadding={'px-10'}
              cardHeight="h-130 overflow-y-scroll"
              hasCardWithAnimation={true}
              zigZagClassName="flex g:flex-row max-lg:flex-col items-center  backgroundGradient  w-full justify-between gap-6 border border-solid border-bordergray rounded-3xl shadow-2xl p-8"
            />
          </section>
        </VerticalBorderPattern>
        {/* Section  Four*/}
        <VerticalBorderPattern gradientName="backgroundGradientAnimation">
          <section className="flex max-w-300 mx-auto pt-15 flex-row gap-10">
            <ZigZagContent
              mapData={contentToDisplay?.sectionFour}
              cardGroup={true}
              headingStart={true}
              mustHaveBottomPadding={'pb-15'}
              mustHaveLeftRightPadding={'px-10'}
              cardHeight="h-max"
              zigZagClassName="flex g:flex-row max-lg:flex-col items-center  backgroundGradient  w-full justify-between gap-6 border border-solid border-bordergray rounded-3xl shadow-2xl p-8"
            />
          </section>
        </VerticalBorderPattern>
        {/* Section  Five*/}
        <VerticalBorderPattern gradientName="backgroundGradient">
          <section className="flex  max-w-300 mx-auto pt-15  flex-row gap-10">
            <CenterTextCardsSection
              mapData={contentToDisplay?.sectionFive}
              gridTwoGroup={true}
              //   headingStart={true}
              gridGroup={'md:grid-cols-2 lg:grid-cols-2'}
              mustHaveBottomPadding={'pb-15'}
              mustHaveLeftRightPadding={'px-10'}
              zigZagClassName="flex g:flex-row max-lg:flex-col items-center  backgroundGradient  w-full justify-between gap-6 border border-solid border-bordergray rounded-3xl shadow-2xl p-8"
            />
          </section>
        </VerticalBorderPattern>

        {/* Section  Six*/}
        <VerticalBorderPattern gradientName="backgroundGradientTwo">
          <section className="flex  max-w-300 mx-auto pt-15   flex-row gap-10">
            <CenterTextCardsSection
              mapData={contentToDisplay?.sectionSix}
              gridTwoGroup={true}
              headingStart={true}
              centerCardContent={true}
              // groupCss={'flex-row gap-4'}
              gridGroup={'md:grid-cols-2 lg:grid-cols-2'}
              mustHaveBottomPadding={'pb-15'}
              mustHaveLeftRightPadding={'px-10'}
              zigZagClassName="flex g:flex-row max-lg:flex-col items-center  backgroundGradient  w-full justify-between gap-6 border border-solid border-bordergray rounded-3xl shadow-2xl p-8"
            />
          </section>
        </VerticalBorderPattern>
        {contentToDisplay?.scheduleSection && (
          <ScheduleBanner content={contentToDisplay.scheduleSection} />
        )}
      </main>
      <Fotter />
    </div>
  );
}
