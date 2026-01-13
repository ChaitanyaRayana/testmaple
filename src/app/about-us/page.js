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
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Navbar />

      {/* Top Section */}
      <main className="flex w-full relative z-1 max-w-7xl mx-auto pt-30 flex-col items-center bg-white">
        <VerticalBorderPattern>
          <section className="flex w-full overflow-hidden  max-w-7xl  flex-row items-center min-h-screen text-center pt-6.5">
            <div className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center px-10 gap-8">
              <div className="flex flex-col h-full items-center lg:w-full  justify-center gap-3 ">
                <div className="flex justify-center w-full">
                  <ChipText text={'Company'} />
                </div>
                <div className=" font-heading text-black  text-[48px] leading-16 line-height-[0.5] font-bold text-center">
                  About MapleRecord
                </div>
                <div className="font-body text-[28px] leading-8 text-stone700 text-center w-full">
                  Transforming how organizations manage, share, and secure their
                  critical documents through innovative records management
                  solutions.
                </div>
              </div>
              <ZigZagHomeSection
                mapData={aboutUS?.sectionOne}
                padding={{ top: 'pt-10' }}
                leftAlign={true}
              />
            </div>
          </section>
        </VerticalBorderPattern>

        {/* Section  Two*/}
        <VerticalBorderPattern>
          <section className="flex max-w-300 mx-auto p-10   flex-row gap-10">
            <CenterTextCardsSection
              mapData={aboutUS?.sectionTwo}
              cardGroup={true}
              headingStart={false}
              gridGroup="md:grid-cols-4"
            />
          </section>
        </VerticalBorderPattern>
        <VerticalBorderPattern>
          <section className="flex max-w-300 mx-auto p-10   flex-row gap-10">
            <CenterTextCardsSection
              mapData={aboutUS?.sectionTwo}
              cardGroup={true}
              headingStart={false}
              gridGroup="md:grid-cols-4"
            />
          </section>
        </VerticalBorderPattern>

        <VerticalBorderPattern gradientName={'backgroundGradientAnimation'}>
          <section className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center px-10 gap-8">
            <div
              className={`flex flex-col h-full items-start lg:w-full  gap-4 justify-center`}
            >
              <div
                className={`font-heading text-black w-full text-[48px] leading-16 line-height-[0.5] font-bold text-center `}
              >
                {aboutUS?.sectionThree?.label}
              </div>
              <div
                className={`font-body text-[28px] leading-8 text-stone700 text-center w-full`}
              >
                {aboutUS?.sectionThree?.description}
              </div>
            </div>

            <div className=" flex flex-wrap justify-center w-full mx-auto pt-3 gap-4">
              {aboutUS?.sectionThree?.cardSection?.map((item, i) => (
                <StatCard mapData={item} key={i} />
              ))}
            </div>
          </section>
        </VerticalBorderPattern>

        {/* Section  four*/}
        <VerticalBorderPattern>
          <section className="flex  max-w-300 mx-auto p-10   flex-row gap-10">
            <CenterTextCardsSection
              mapData={aboutUS?.sectionFour}
              gridGroup={'md:grid-cols-3'}
              headingStart={false}
              zigZagClassName="flex g:flex-row max-lg:flex-col items-center  backgroundGradient  w-full justify-between gap-6 border border-solid border-bordergray rounded-3xl shadow-2xl p-8"
            />
          </section>
        </VerticalBorderPattern>

        <ScheduleBanner />
      </main>

      <Fotter />
    </div>
  );
}
