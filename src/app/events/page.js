import Button from '../components/common/Button';
import CenterTextCardsSection from '../components/common/CenterTextCardsSection';
import ChipText from '../components/common/ChipText';
import FeaturedWebinar from '../components/common/FeaturedWebinar';
import Fotter from '../components/common/Fotter';
import { VerticalBorderPattern } from '../components/common/Icon';
import Input from '../components/common/Input';
import ScheduleBanner from '../components/common/ScheduleBanner';
import StatCard from '../components/common/StatCard';
import Navbar from '../components/Navbar';
import { eventsContent } from '../constants/constants';

export default function page() {
  const statContent = [
    { value: '50+', label: 'Annual Events' },
    { value: '10K+', label: 'Attendees' },
    { value: '200+', label: 'Expert Speakers' },
    { value: '35+', label: 'Cities Worldwide' },
  ];
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Navbar />

      {/* Top Section */}
      <main className="flex w-full relative z-1 max-w-7xl mx-auto flex-col items-center bg-white">
        <VerticalBorderPattern
          gradientName={'backgroundGradientAnimation backgroundGradient'}
        >
          <section className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center px-10 pt-30 gap-8">
            <div
              className={`flex flex-col h-full items-start lg:w-full  gap-4  justify-center
              `}
            >
              {/* {mapData?.chipText && ( */}
              <div className={`flex w-full justify-center`}>
                <ChipText text={'Events & Conferences'} />
              </div>
              {/* )} */}
              <div
                className={`font-heading text-black w-full text-[48px] leading-16 line-height-[0.5] font-bold text-center`}
              >
                Connect, Learn, and Grow Together
              </div>
              <div
                className={`font-body text-[28px] leading-8 text-stone700 text-center w-full`}
              >
                Join MapleRecord at industry conferences, workshops, webinars,
                and exclusive events designed to help you master records
                management.
              </div>
            </div>
            <div className=" flex flex-wrap justify-center w-full mx-auto pt-3 gap-4">
              {statContent?.map((item, i) => (
                <StatCard mapData={item} key={i} />
              ))}
            </div>

            <div className="flex flex-row gap-8 w-full justify-center mt-10">
              <Button padding="p-2 rounded-lg">Upcoming Events</Button>
              <Button padding="p-2 rounded-lg ">Past Events</Button>
            </div>
          </section>
        </VerticalBorderPattern>

        {/* Events list */}

        <VerticalBorderPattern gradientName={'backgroundGradientTwo'}>
          <section className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center px-10 pt-30 gap-8">
            <div
              className={`flex flex-col h-full items-start lg:w-full  gap-4 justify start`}
            >
              <div
                className={`font-heading text-black w-full text-[48px] leading-16 line-height-[0.5] font-bold text-start`}
              >
                {eventsContent?.sectionTwo?.label}
              </div>
              <div
                className={`font-body text-[28px] leading-8 text-stone700 w-full text-start`}
              >
                {eventsContent?.sectionTwo?.description}
              </div>
            </div>

            <div className="flex flex-col gap-10">
              {eventsContent?.sectionTwo?.eventList?.map((item, i) => (
                <FeaturedWebinar mapData={item} key={i} />
              ))}
            </div>
          </section>
        </VerticalBorderPattern>

        <VerticalBorderPattern>
          <section className="flex  max-w-300 mx-auto p-10   flex-row gap-10">
            <CenterTextCardsSection
              mapData={eventsContent?.sectionThree}
              headingStart={false}
              centerCardContent={false}
              gridGroup={'md:grid-cols-2 lg:grid-cols-4'}
            />
          </section>
        </VerticalBorderPattern>

        <ScheduleBanner />
      </main>

      <Fotter />
    </div>
  );
}
