'use client';
import Image from 'next/image';
import { VerticalBorderPattern } from './components/common/Icon';
import ChipText from './components/common/ChipText';
import homeRecordTwo from '@/public/assets/images/png/home-request-two.png';
import Navbar from './components/Navbar';
import Fotter from './components/common/Fotter';
import Button from './components/common/Button';
import ZigZagHomeSection from './components/common/ZigZagHomeSection';
import CenterTextCardsSection from './components/common/CenterTextCardsSection';
import ScheduleBanner from './components/common/ScheduleBanner';
import FAQSection from './components/common/FAQSection';
import {
  howWeHelpContent,
  neverMissDeadLine,
  homeZipZapContent,
  powerfulCardSectionData,
} from './constants/constants';
import { useState } from 'react';
import { CircleThickIcon } from './components/common/svgImage';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [selectedMRBtn, setSelectedMRBtn] = useState(0);
  const [selectedHelpMeBtn, setSelectedHelpMeBtn] = useState(0);
  console.log({ selectedMRBtn });
  const router = useRouter();

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Navbar />

      <main className="flex w-full relative z-1 max-w-7xl mx-auto flex-col items-center bg-white">
        {/* Manage your information ecosystem */}
        <VerticalBorderPattern gradientName="backgroundGlow">
          <section className="flex w-full overflow-hidden mx-auto flex-row items-center min-h-screen text-center pt-50 pb-15 ">
            <div className="flex w-full  max-w-300 mx-auto flex-row flex-1 h-full items-start justify-between px-10 gap-8">
              <div className="flex flex-col h-full items-start lg:w-full justify-center gap-8 ">
                <ChipText
                  text="Manage your information ecosystem"
                  dotCircle={true}
                />
                <div className=" font-heading text-black text-3xl  line-height-[0.5] font-bold text-start">
                  An AI-First Hybrid Records Management System for Electronic
                  and Physical Records
                </div>
                <div className="font-body text-[24px] leading-8 text-stone700 text-start">
                  Secure records. Automate requests. Streamline operations.
                </div>
                <div className="flex flex-row gap-4">
                  <Button gradientColor="bg-white rounded hover:text-white px-8">
                    Watch demo
                  </Button>
                </div>
              </div>
              <div className="w-full h-max justify-center">
                <Image
                  src={homeRecordTwo}
                  alt="Records Dashboard"
                  width={600}
                  height={600}
                  className="object-contain hidden lg:inline-block rounded-2xl"
                />
              </div>
            </div>
          </section>
        </VerticalBorderPattern>

        {/* Never miss a deadline. */}
        <VerticalBorderPattern gradientName="backgroundGradientAnimation">
          <section className="flex w-full overflow-hidden  max-w-7xl  flex-row items-center min-h-screen text-center pt-15">
            <div className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center px-10 gap-8">
              <div className="flex flex-col h-full items-start lg:w-full justify-center gap-8 ">
                <div className="flex justify-center w-full">
                  <ChipText text="Never miss a deadline." />
                </div>
                <div className=" font-heading text-black text-3xl  line-height-[0.5] font-bold text-center">
                  Eliminate legacy system risk by automating record handling
                  into secure, compliant, audit-ready workflows.
                </div>
                <div className="font-body text-[24px] leading-8 text-stone700 text-center w-full">
                  One Unified Platform. Four Integrated Modules.
                </div>
              </div>
              <div className="w-full h-max pb-15 flex flex-col gap-8 justify-start">
                <div className=" flex flex-row gap-3 justify-center w-full">
                  {neverMissDeadLine?.map((item, i) => (
                    <Button
                      gradientColor={`${
                        i === selectedMRBtn
                          ? 'bg-[#beddf5]  w-[150px] rounded-xl hover:text-white text-center'
                          : 'bg-transparent rounded-xl w-[150px] hover:text-white text-center'
                      } text-lg mb-3 p-5`}
                      key={i}
                      onClickButton={() => setSelectedMRBtn(i)}
                    >
                      <span className="flex flex-row gap-1 items-center h-full w-full">
                        <span>{item?.icon}</span>
                        <span>{item?.label}</span>
                      </span>
                    </Button>
                  ))}
                </div>
                <div className="flex flex-row gap-10 max-lg:justify-between max-md:flex-col shadow-2xl bg-white border border-solid border-bordergray rounded-3xl p-10">
                  {neverMissDeadLine
                    ?.filter((item, i) => i === selectedMRBtn)
                    ?.map((item, index) => (
                      <div
                        className="flex flex-col w-full justify-center gap-6"
                        key={index}
                      >
                        <div className="font-heading text-3xl text-black text-start font-bold">
                          {item?.label}
                        </div>
                        <div className="font-body text-base text-stone700 text-start">
                          {item?.description}
                        </div>

                        <div className="flex flex-col gap-3">
                          {item?.featureHighlight?.map((hightLightItem) => (
                            <div className="font-body flex flex-row gap-3 items-start justify-start text-stone700 text-start text-[16px]">
                              <span className="mt-1">
                                <CircleThickIcon width={16} height={16} />{' '}
                              </span>{' '}
                              <span>{hightLightItem}</span>
                            </div>
                          ))}
                        </div>
                        <Button
                          padding={'w-fit'}
                          onClickButton={() => router.push(item?.href)}
                          arrowIcon={true}
                        >
                          Learn more
                        </Button>
                      </div>
                    ))}

                  {neverMissDeadLine
                    ?.filter((item, i) => i === selectedMRBtn)
                    ?.map((item, index) => (
                      <div className="w-full flex justify-center">
                        <div className="w-full h-120 flex justify-center">
                          <Image
                            src={item?.image}
                            alt={item?.label}
                            width={500}
                            height={300}
                            className="object-contain "
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>
        </VerticalBorderPattern>

        {/* How we help. */}
        <VerticalBorderPattern gradientName="backgroundGradient">
          <section className="flex w-full overflow-hidden  max-w-7xl  flex-row items-center min-h-screen text-center py-15">
            <div className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center px-10 gap-8">
              <div className="flex flex-col h-full items-start lg:w-full justify-center gap-8 ">
                <div className="flex justify-center w-full">
                  <ChipText text="How we help." />
                </div>
                <div className=" font-heading text-black text-3xl  line-height-[0.5] font-bold text-center">
                  How our records management system delivers impact across every
                  department?
                </div>
              </div>
              <div className="flex flex-wrap justify-center overflow-hidden overflow-x-auto w-max mx-auto bg-stone-200 rounded-2xl gap-4">
                {howWeHelpContent?.map((item, i) => (
                  <Button
                    gradientColor={`${
                      i === selectedHelpMeBtn
                        ? 'bg-black text-white text-center rounded-3xl flex flex-row gap-2 items-center'
                        : 'bg-transparent rounded-3xl hover:text-white text-center flex flex-row gap-2 items-center'
                    } p-5`}
                    key={i}
                    onClickButton={() => setSelectedHelpMeBtn(i)}
                  >
                    <span>{item?.icon}</span>
                    <span>{item?.label}</span>
                  </Button>
                ))}
              </div>

              <div className="flex flex-row gap-12 max-lg:justify-between max-md:flex-col bg-linear-to-bl from-white to-[#edf5fa] border border-solid border-bordergray rounded-2xl p-8">
                {howWeHelpContent
                  ?.filter((item, i) => i === selectedHelpMeBtn)
                  ?.map((item, index) => (
                    <div
                      className="flex flex-col justify-center gap-6"
                      key={index}
                    >
                      <div className="font-heading font-bold text-3xl text-black text-start">
                        {item?.label}
                      </div>
                      <div className="flex flex-col gap-3">
                        {item?.featureHighlight?.map((hightLightItem) => (
                          <span className="font-body flex flex-row gap-4 items-start text-stone700 text-start text-[16px]">
                            <span className="mt-1">
                              <CircleThickIcon width={16} height={16} />{' '}
                            </span>{' '}
                            <span>{hightLightItem}</span>
                          </span>
                        ))}
                      </div>
                      <Button padding={'w-fit'}>Get started today</Button>
                    </div>
                  ))}

                {howWeHelpContent
                  ?.filter((item, i) => i === selectedHelpMeBtn)
                  ?.map((item, index) => (
                    <div className="w-full  flex justify-center">
                      <div className="w-full h-120 flex justify-center">
                        <Image
                          src={item?.image}
                          alt={item?.label}
                          width={500}
                          height={10}
                          className="object-contain "
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </VerticalBorderPattern>

        {/* Zigzig content */}
        <VerticalBorderPattern gradientName={'backgroundGradientAnimation'}>
          <section className="flex max-w-300 mx-auto flex-col pt-15 pb-15 gap-12">
            <ZigZagHomeSection
              mapData={homeZipZapContent}
              mustHaveBottomPadding=""
              mustHaveLeftRightPadding=""
              padding={{ top: '', around: 'px-10 ' }}
            />
          </section>
        </VerticalBorderPattern>

        {/* Grid Cards content */}
        <VerticalBorderPattern gradientName="backgroundGradientAnimation">
          <CenterTextCardsSection
            mapData={powerfulCardSectionData}
            mustHaveLeftRightPadding="px-10 pt-15"
            mustHaveBottomPadding="pb-15"
          />
        </VerticalBorderPattern>

        {/* FAQs section */}
        <VerticalBorderPattern gradientName={'backgroundGradientTwo'}>
          <FAQSection mapData={powerfulCardSectionData} />
        </VerticalBorderPattern>
        <ScheduleBanner />
      </main>

      <Fotter />
    </div>
  );
}
