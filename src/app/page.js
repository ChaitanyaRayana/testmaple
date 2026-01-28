'use client';
import Image from 'next/image';
import { VerticalBorderPattern } from './components/common/Icon';
import ChipText from './components/common/ChipText';
// import homeRecordTwo from '@/public/assets/images/png/home-request-two.png';
import homeRecordTwo from '@/public/assets/images/png/heroSectionImage.png';
import heroSectionBgImage from '@/public/assets/images/png/bg-abstract.png';
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
import { useEffect, useRef, useState } from 'react';
import { CircleThickIcon } from './components/common/svgImage';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const [selectedMRBtn, setSelectedMRBtn] = useState(0);
  const [selectedHelpMeBtn, setSelectedHelpMeBtn] = useState(0);
  const [showFeatures, setShowFeatures] = useState(false);
  console.log({ selectedMRBtn });
  const router = useRouter();
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: 30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: { opacity: 0, x: -20 },
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Navbar />

      <main className="flex w-full relative z-1 max-w-7xl mx-auto flex-col items-center bg-white">
        {/* Manage your information ecosystem */}
        <VerticalBorderPattern gradientName="heroBackground">
          <Image
            src={heroSectionBgImage}
            alt=""
            width={600}
            height={600}
            data-aos="fade-left"
            data-aos-duration="800"
            className="absolute z-0 max-w-300 left-0 max-xs:px-5 xs:max-xs:px-5 xs:px-10 w-full h-full pb-1 rounded-2xl"
          />
          <section className="flex w-full overflow-hidden mx-auto flex-row items-center min-h-screen text-center pt-30 pb-15 ">
            <div className="grid lg:grid-cols-2 gap-12  w-full  max-w-300 mx-auto flex-row flex-1 h-full items-start justify-between max-xs:px-5 xs:max-xs:px-5 xs:px-10">
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                className="flex flex-col h-full items-start lg:w-full justify-center gap-8 "
              >
                <ChipText
                  heroSection={true}
                  text="Manage your information ecosystem"
                  dotCircle={true}
                />
                <h2
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className=" font-heading text-black text-5xl lg:text-6xl font-bold leading-17 text-start"
                >
                  An AI-First Hybrid Records Management System for Electronic
                  and Physical Records
                </h2>
                <p className="font-body leading-6 text-stone700 text-start typewriter">
                  Secure records. Automate requests. Streamline operations.
                </p>
                <div className="flex flex-row gap-4">
                  <Button gradientColor="bg-linear-to-br from-[#929aa1] to-[#88afd3] text-white rounded hover:text-white px-8">
                    Watch demo
                  </Button>
                </div>
              </div>
              <div
                data-aos="fade-down"
                data-aos-duration="800"
                className="xs:w-full max-xs:w-auto max-xs:pr-10 flex xs:h-full  max-xs:justify-start xs:justify-center"
              >
                <Image
                  src={homeRecordTwo}
                  alt="Records Dashboard"
                  width={600}
                  height={600}
                  data-aos="fade-left"
                  data-aos-duration="800"
                  className="lg:pt-15 object-top-right lg:h-140 xs:w-full max-xs:w-80  h-max  rounded-2xl"
                />
              </div>
            </div>
          </section>
        </VerticalBorderPattern>

        {/* Never miss a deadline. */}
        <VerticalBorderPattern gradientName="backgroundGradientAnimation">
          <section className="flex w-full overflow-hidden  max-w-7xl  flex-row items-center min-h-screen text-center pt-15">
            <div className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center max-xs:px-5 xs:px-10 gap-8">
              <div className="flex flex-col h-full items-start lg:w-full justify-center gap-8 ">
                <div
                  // data-aos="fade-up"
                  // data-aos-duration="400"
                  className="flex justify-center w-full"
                >
                  <ChipText text="Never miss a deadline." />
                </div>
                <div
                  // data-aos="fade-up"
                  // data-aos-duration="600"
                  className=" font-heading text-black text-3xl   font-bold text-center"
                >
                  Eliminate legacy system risk by automating record handling
                  into secure, compliant, audit-ready workflows.
                </div>
                <p
                  // data-aos="fade-up"
                  // data-aos-duration="800"
                  className="font-body leading-6 text-stone700 text-center w-full"
                >
                  One Unified Platform. Four Integrated Modules.
                </p>
              </div>
              <div className="w-full h-max pb-15 flex flex-col gap-8 justify-start">
                <div className=" flex flex-row max-lg:flex-wrap gap-3 justify-center w-full">
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
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedMRBtn}
                    variants={container}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                  >
                    <div className="flex flex-row lg:h-130 max-md:h-auto gap-10 max-lg:justify-between max-md:flex-col shadow-2xl bg-white border border-solid border-bordergray rounded-3xl p-10">
                      {neverMissDeadLine
                        ?.filter((item, i) => i === selectedMRBtn)
                        ?.map((item, index) => (
                          <motion.div
                            key={index}
                            // variants={itemVariant}
                            className="flex flex-col w-full justify-center gap-6"
                            // data-aos="fade-up"
                            // data-aos-duration="800"
                          >
                            {/* <div
                        className="flex flex-col w-full justify-center gap-6"
                        key={index}
                      > */}
                            <div
                              // data-aos="fade-up"
                              // data-aos-duration="400"
                              className="font-heading text-3xl text-black text-start font-bold"
                            >
                              {item?.label}
                            </div>
                            <p
                              // data-aos="fade-up"
                              // data-aos-duration="600"
                              className="font-body text-base text-stone700 text-start"
                            >
                              {item?.description}
                            </p>

                            {item?.featureHighlight?.map(
                              (hightLightItem, i) => (
                                <div
                                  key={i}
                                  className="font-body flex gap-3 items-start text-stone700 text-[16px]"
                                >
                                  <span className="mt-1">
                                    <CircleThickIcon
                                      width={16}
                                      height={16}
                                    />{' '}
                                  </span>{' '}
                                  <span className="text-sm text-gray-500">
                                    {hightLightItem}
                                  </span>
                                </div>
                              )
                            )}

                            <Button
                              padding={'w-fit'}
                              onClickButton={() => router.push(item?.href)}
                              arrowIcon={true}
                              // data-aos="fade-up"
                              // data-aos-duration="800"
                            >
                              Learn more
                            </Button>

                            {/* </div> */}
                          </motion.div>
                        ))}

                      {neverMissDeadLine
                        ?.filter((item, i) => i === selectedMRBtn)
                        ?.map((item, index) => (
                          <div
                            className="w-full flex max-md:justify-start justify-center"
                            key={index}
                          >
                            <div
                              // data-aos="fade-down"
                              // data-aos-duration="800"
                              className="w-full overflow-hidden max-md:h-100 max-md:justify-start flex justify-center"
                            >
                              <Image
                                src={item?.image}
                                alt={item?.label}
                                width={500}
                                height={300}
                                className="object-contain overflow-hidden rounded-xl"
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </section>
        </VerticalBorderPattern>

        {/* How we help. */}
        <VerticalBorderPattern gradientName="backgroundGradient">
          <section className="flex w-full overflow-hidden  max-w-7xl  flex-row items-center min-h-screen text-center py-15">
            <div className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center max-xs:px-5 xs:px-10 gap-8">
              <div className="flex flex-col h-full items-start lg:w-full justify-center gap-8 ">
                <div
                  // data-aos="fade-up"
                  // data-aos-duration="400"
                  className="flex justify-center w-full"
                >
                  <ChipText text="How we help." />
                </div>
                <div
                  // data-aos="fade-up"
                  // data-aos-duration="600"
                  className=" font-heading text-black text-3xl   font-bold text-center"
                >
                  How our records management system delivers impact across every
                  department?
                </div>
              </div>
              <div
                // data-aos="fade-up"
                // data-aos-duration="800"
                className="flex flex-wrap justify-center overflow-hidden overflow-x-auto lg:w-max mx-auto max-md:w-full bg-stone-200 rounded-3xl gap-4"
              >
                {howWeHelpContent?.map((item, i) => (
                  <Button
                    gradientColor={`${
                      i === selectedHelpMeBtn
                        ? 'bg-black text-white  '
                        : 'bg-transparent rounded-3xl hover:text-white'
                    } text-center rounded-3xl flex flex-row gap-2 items-center p-5`}
                    key={i}
                    onClickButton={() => setSelectedHelpMeBtn(i)}
                  >
                    <span>{item?.icon}</span>
                    <span>{item?.label}</span>
                  </Button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedHelpMeBtn}
                  variants={container}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  <div className="flex lg:max-h-130 max-md:h-auto flex-row gap-12 max-lg:justify-between max-md:flex-col bg-linear-to-bl from-white to-[#edf5fa] border border-solid border-bordergray rounded-2xl p-8">
                    {howWeHelpContent
                      ?.filter((item, i) => i === selectedHelpMeBtn)
                      ?.map((item, index) => (
                        <motion.div
                          className="flex flex-col justify-start pt-12 gap-6"
                          key={index}
                          // data-aos="fade-up"
                          // data-aos-duration="800"
                        >
                          <div
                            // data-aos="fade-up"
                            // data-aos-duration="400"
                            className="font-heading font-bold text-3xl text-black text-start"
                          >
                            {item?.label}
                          </div>
                          <div
                            // data-aos="fade-up"
                            // data-aos-duration={(index + 1) * 400}
                            className="flex flex-col gap-3"
                          >
                            {item?.featureHighlight?.map(
                              (hightLightItem, i) => (
                                <span
                                  key={i}
                                  className="font-body flex flex-row gap-4 items-start text-stone700 text-start text-[16px]"
                                >
                                  <span className="mt-1">
                                    <CircleThickIcon
                                      width={16}
                                      height={16}
                                    />{' '}
                                  </span>{' '}
                                  <span>{hightLightItem}</span>
                                </span>
                              )
                            )}
                          </div>
                          <Button
                            // data-aos="fade-up"
                            // data-aos-duration="800"
                            padding={'w-fit'}
                          >
                            Get started today
                          </Button>
                        </motion.div>
                      ))}

                    {howWeHelpContent
                      ?.filter((item, i) => i === selectedHelpMeBtn)
                      ?.map((item, index) => (
                        <div
                          className="w-full overflow-hidden max-xs:h-80 max-md:h-120 max-md:justify-start flex justify-end"
                          key={index}
                          // data-aos="fade-down"
                          // data-aos-duration="800"
                        >
                          <Image
                            src={item?.image}
                            alt={item?.label}
                            width={500}
                            height={10}
                            className="object-contain rounded-4xl"
                          />
                        </div>
                      ))}
                  </div>
                </motion.div>
              </AnimatePresence>
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
              padding={{ top: '', around: 'max-xs:px-5 xs:px-10 ' }}
            />
          </section>
        </VerticalBorderPattern>

        {/* Grid Cards content */}
        <VerticalBorderPattern gradientName="backgroundGradientAnimation">
          <CenterTextCardsSection
            mapData={powerfulCardSectionData}
            mustHaveLeftRightPadding="max-xs:px-5 xs:px-10 pt-15"
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
