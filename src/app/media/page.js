import BlogCard from '../components/common/BlogCard';
import CenterTextCardsSection from '../components/common/CenterTextCardsSection';
import ChipText from '../components/common/ChipText';
import Fotter from '../components/common/Fotter';
import { VerticalBorderPattern } from '../components/common/Icon';
import ReleaseCard from '../components/common/ReleaseCard';
import ScheduleBanner from '../components/common/ScheduleBanner';
import StatCard from '../components/common/StatCard';
import { FileIcon } from '../components/common/svgImage';
import Navbar from '../components/Navbar';
import { awardsSection, mediaPageContent } from '../constants/constants';

export default function page() {
  const statContent = [
    { value: '5+', label: 'Press Mentions' },
    { value: '5+', label: 'Press Releases' },
    { value: '1', label: 'Industry Awards' },
    { value: '10+', label: 'Media Partners' },
  ];

  const releaseData = {
    date: 'November 22, 2025',
    chipText: 'Product Launch',
    label:
      'New AI-Powered Classification Feature Reduces Processing Time by 80%',
    description:
      'MapleRecord introduces advanced AI classification technology that automatically categorizes documents with 99.9% accuracy, reducing manual processing time by up to 80%.',
    primaryCta: { text: 'Read Full Release', href: '#' },
    secondaryCta: { text: 'Download PDF', href: '#' },
    icon: <FileIcon color="text-[#226fb7]" />,
  };

  const scheduleBannerData = {
    label: 'Interested in Partnering with MapleRecord?',
    description:
      "We're always looking for opportunities to collaborate with media partners, industry analysts, and content creators.",
    buttonsText: ['Contact Our Team'],
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Navbar />

      {/* Top Section */}
      <main className="flex w-full relative z-1 max-w-7xl mx-auto  flex-col items-center bg-white">
        <VerticalBorderPattern
          gradientName={'backgroundGlow backgroundGradient'}
        >
          <section className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center px-10 pt-30 pb-15 gap-8">
            <div
              className={`flex flex-col h-full items-start lg:w-full  gap-4 justify-center`}
            >
              {/* {mapData?.chipText && ( */}
              <div className={`flex w-full justify-center`}>
                <ChipText text={'Media & Press'} />
              </div>
              {/* )} */}
              <div
                className={`font-heading text-black w-full text-[44px] leading-11   font-bold text-center`}
              >
                MapleRecord in the News
              </div>
              <p
                className={`font-body leading-6 text-stone700 text-center w-full`}
              >
                The latest news, press releases, and media resources about
                MapleRecord and our mission to transform records management.
              </p>
            </div>

            <div className=" flex flex-wrap justify-center w-full mx-auto pt-3 gap-4">
              {statContent?.map((item, i) => (
                <StatCard mapData={item} key={i} />
              ))}
            </div>
          </section>
        </VerticalBorderPattern>

        {/* Section two */}
        <VerticalBorderPattern gradientName={'backgroundGradientAnimation'}>
          <section className="flex  max-w-300 mx-auto px-10 py-15 w-full  flex-row gap-10">
            <div className="flex flex-col w-full gap-4">
              <div className="text-start">
                <h2 className="font-heading text-3xl text-black">
                  Press Releases
                </h2>
                <span className="inline-block mt-2 text-lg text-stone-500">
                  Latest announcements and company news from MapleRecord
                </span>
              </div>
              <div className=" w-full ">
                <ReleaseCard mapData={releaseData} />
              </div>
            </div>
          </section>
        </VerticalBorderPattern>

        {/* News Coverage  */}
        <VerticalBorderPattern gradientName={' backgroundGradient'}>
          <section className="flex  max-w-300 mx-auto px-10 py-15   flex-row gap-10">
            <div className="flex flex-col gap-4">
              <div className="font-heading text-3xl text-black text-start">
                News Coverage
              </div>
              <div className="font-heading text-lg text-stone-700 text-start">
                MapleRecord featured in leading industry publications
              </div>
              <div className="grid md:grid-cols-2 w-full lg:grid-cols-3 gap-8 ">
                {mediaPageContent?.map((item, i) => (
                  <BlogCard mapData={item} key={i} />
                ))}
              </div>
            </div>
          </section>
        </VerticalBorderPattern>

        {/* Awards Section*/}

        {/* Section  Five*/}
        <VerticalBorderPattern gradientName={' backgroundGradientTwo'}>
          <section className="flex max-w-300 mx-auto pt-15   flex-row gap-10">
            <CenterTextCardsSection
              mapData={awardsSection}
              cardGroup={true}
              headingStart={false}
              centerCardContent={false}
              gridGroup="md:grid-cols-4"
              mustHaveLeftRightPadding="px-10"
              mustHaveBottomPadding="pb-15"
            />
          </section>
        </VerticalBorderPattern>

        <ScheduleBanner content={scheduleBannerData} />
      </main>
      <Fotter />
    </div>
  );
}
