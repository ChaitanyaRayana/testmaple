import Button from '../components/common/Button';
import ChipText from '../components/common/ChipText';
import FeaturedWebinar from '../components/common/FeaturedWebinar';
import Fotter from '../components/common/Fotter';
import { VerticalBorderPattern } from '../components/common/Icon';
import Input from '../components/common/Input';
import ScheduleBanner from '../components/common/ScheduleBanner';
import StatCard from '../components/common/StatCard';
import Navbar from '../components/Navbar';
import { webinarsContent } from '../constants/constants';

function page({ headingStart = false }) {
  const statContent = [
    { value: '50+', label: 'Webinars' },
    { value: '10K+', label: 'Participants' },
    { value: '4.8/5', label: 'Average Rating' },
    { value: '100%', label: 'Free Access' },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Navbar />

      <main className="flex w-full relative z-1 max-w-7xl mx-auto flex-col items-center bg-white">
        {/* Section one */}
        <VerticalBorderPattern gradientName={'backgroundGradientAnimation'}>
          <section className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center px-10 pt-30 gap-8">
            <div
              className={`flex flex-col h-full items-start lg:w-full  gap-4 ${
                headingStart ? 'justify-start' : 'justify-center'
              }`}
            >
              {/* {mapData?.chipText && ( */}
              <div
                className={`flex w-full ${
                  headingStart ? 'justify-start' : 'justify-center'
                }`}
              >
                <ChipText text={'Educational Webinars'} />
              </div>
              {/* )} */}
              <div
                className={`font-heading text-black w-full text-[48px] leading-16 line-height-[0.5] font-bold text-center ${
                  headingStart ? 'text-start' : 'text-center'
                }`}
              >
                Learn from the Experts
              </div>
              <div
                className={`font-body text-[28px] leading-8 text-stone700 text-center w-full ${
                  headingStart ? 'text-start' : 'text-center'
                }`}
              >
                Join industry leaders and MapleRecord experts for live sessions
                and on-demand content covering records management, compliance,
                and digital transformation.
              </div>
            </div>
            <div className="w-1/2 mx-auto">
              <Input placeholder="Search videos..." iconLeft="sr" />
            </div>

            <div className=" flex flex-wrap justify-center w-full mx-auto pt-3 gap-4">
              {statContent?.map((item, i) => (
                <StatCard mapData={item} key={i} />
              ))}
            </div>

            <div className="flex flex-row gap-8 w-full justify-center mt-20">
              <Button padding="p-2 rounded-lg">Upcoming Webinars</Button>
              <Button padding="p-2 rounded-lg ">On-Demand Library</Button>
            </div>
          </section>
        </VerticalBorderPattern>

        {/* Webinar list */}

        <VerticalBorderPattern gradientName={'backgroundGradientTwo'}>
          <section className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center px-10 pt-30 gap-8">
            <div
              className={`flex flex-col h-full items-start lg:w-full  gap-4 justify start`}
            >
              <div
                className={`font-heading text-black w-full text-[48px] leading-16 line-height-[0.5] font-bold text-start`}
              >
                Upcoming Live Webinars
              </div>
              <div
                className={`font-body text-[28px] leading-8 text-stone700 w-full text-start`}
              >
                Register now to secure your spot in our upcoming sessions
              </div>
            </div>

            <div className="flex flex-col gap-10">
              {webinarsContent?.map((item, i) => (
                <FeaturedWebinar mapData={item} key={i} />
              ))}
            </div>
          </section>
        </VerticalBorderPattern>

        {/* Never Miss a Webinar */}
        <VerticalBorderPattern>
          <div className="flex flex-col gap-8 max-w-300 mx-auto p-10">
            <div className="flex flex-col w-full h-full items-center lg:w-full justify-center gap-4 ">
              <div className=" font-heading  text-black text-[48px] w-full leading-16 line-height-[0.5] font-bold text-center">
                Never Miss a Webinar
              </div>
              <div className="font-body text-[28px] leading-8 text-stone700 text-center w-full">
                Subscribe to get notified about upcoming webinars and access
                exclusive content.
              </div>
            </div>
            <div className="flex flex-row gap-8 w-1/2 mx-auto">
              <Input placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </VerticalBorderPattern>

        <ScheduleBanner />
      </main>
      <Fotter />
    </div>
  );
}

export default page;
