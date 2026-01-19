import CenterTextCardsSection from '../components/common/CenterTextCardsSection';
import ChipText from '../components/common/ChipText';
import Fotter from '../components/common/Fotter';
import { VerticalBorderPattern } from '../components/common/Icon';
import ScheduleBanner from '../components/common/ScheduleBanner';
import StatCard from '../components/common/StatCard';
import ZigZagHomeSection from '../components/common/ZigZagHomeSection';
import Navbar from '../components/Navbar';
import { aboutUS } from '../constants/constants';

export default function page() {
  const scheduleBannerData = {
    label: 'Join Organizations Transforming Their Records Management',
    description:
      'Discover how MapleRecord can help your organization streamline workflows, ensure compliance, and unlock the value in your documents.',
    buttonsText: ['Get Started Today'],
  };
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Navbar />

      {/* Top Section */}
      <main className="flex w-full relative z-1 max-w-7xl mx-auto flex-col items-center bg-white">
        <VerticalBorderPattern gradientName={'backgroundGradientAnimation'}>
          <section className="flex w-full overflow-hidden  max-w-7xl pt-30 pb-15  flex-row items-center min-h-screen text-center">
            <div className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center px-10 gap-12">
              <div className="flex flex-col h-full items-center lg:w-full  justify-center gap-3 ">
                <div className="flex justify-center w-full">
                  <ChipText text={'Company'} />
                </div>
                <div className=" font-heading text-black  text-[44px] leading-11   font-bold text-center">
                  About MapleRecord
                </div>
                <p className="font-body leading-6 text-stone700 text-center w-full">
                  Transforming how organizations manage, share, and secure their
                  critical documents through innovative records management
                  solutions.
                </p>
              </div>
              <ZigZagHomeSection
                mapData={aboutUS?.sectionOne}
                padding={{ top: '' }}
                leftAlign={true}
                mustHaveBottomPadding=""
                mustHaveLeftRightPadding=""
                cardHeight="h-max"
              />
            </div>
          </section>
        </VerticalBorderPattern>

        {/* Section  Two*/}
        <VerticalBorderPattern gradientName={'backgroundGradientTwo'}>
          <section className="flex max-w-300 mx-auto pt-15  flex-row gap-10">
            <CenterTextCardsSection
              mapData={aboutUS?.sectionTwo}
              cardGroup={true}
              headingStart={false}
              gridGroup="md:grid-cols-4"
            />
          </section>
        </VerticalBorderPattern>

        {/* Section  Three*/}
        <VerticalBorderPattern gradientName={'backgroundGradientAnimation'}>
          <section className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center px-10 py-15 gap-8">
            <div
              className={`flex flex-col h-full items-start lg:w-full  gap-4 justify-center`}
            >
              <div
                className={`font-heading text-black w-full text-3xl   font-bold text-center `}
              >
                {aboutUS?.sectionThree?.label}
              </div>
              <p
                className={`font-body leading-6 text-stone700 text-center w-full`}
              >
                {aboutUS?.sectionThree?.description}
              </p>
            </div>

            <div className=" flex flex-wrap justify-center w-full mx-auto pt-3 gap-4">
              {aboutUS?.sectionThree?.cardSection?.map((item, i) => (
                <StatCard mapData={item} key={i} />
              ))}
            </div>
          </section>
        </VerticalBorderPattern>

        {/* Section  four*/}
        <VerticalBorderPattern gradientName={'backgroundGradientTwo'}>
          <section className="flex  max-w-300 mx-auto py-15   flex-row gap-10">
            <CenterTextCardsSection
              mapData={aboutUS?.sectionFour}
              gridGroup={'md:grid-cols-3'}
              headingStart={false}
              mustHaveLeftRightPadding="px-10"
              zigZagClassName="flex g:flex-row max-lg:flex-col items-center  backgroundGradient  w-full justify-between gap-6 border border-solid border-bordergray rounded-3xl shadow-2xl p-8"
            />
          </section>
        </VerticalBorderPattern>

        <ScheduleBanner content={scheduleBannerData} />
      </main>

      <Fotter />
    </div>
  );
}
