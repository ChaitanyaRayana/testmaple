import Navbar from '../../components/Navbar';
import { mrRecordsPlatformContent } from '../../constants/constants';
import ZigZagContent from '../../components/common/ZigZagContent';
import { VerticalBorderPattern } from '../../components/common/Icon';
import CenterTextCardsSection from '../../components/common/CenterTextCardsSection';
import ScheduleBanner from '../../components/common/ScheduleBanner';
import Fotter from '../../components/common/Fotter';

/* REQUIRED FOR STATIC EXPORT */
export async function generateStaticParams() {
  return Object.keys(mrRecordsPlatformContent).map((key) => ({
    id: key,
  }));
}

async function Page({ params }) {
  console.log({ params });

  const { id } = await params;
  console.log('ID:', id);
  // const parseValue = JSON.parse(JSON.stringify(value));

  const contentToDisplay = mrRecordsPlatformContent[id];

  if (!contentToDisplay) {
    return null;
  }

  return (
    <div className="flex min-h-screen w-full  flex-col bg-white">
      <Navbar />
      <main className="flex w-full relative z-1 max-w-7xl mx-auto flex-col items-center bg-white">
        {/* // Section one */}
        <VerticalBorderPattern gradientName="backgroundGlow">
          <section className="flex  max-w-300 mx-auto px-10 pt-30 pb-15 flex-row gap-10">
            <ZigZagContent
              mapData={contentToDisplay?.sectionOne}
              mustHaveBottomPadding={''}
              mustHaveLeftRightPadding={''}
              heroSection={true}
              zigZagClassName="flex g:flex-row max-lg:flex-col  backgroundGradient  w-full justify-between gap-6 border border-solid border-bordergray rounded-3xl p-8"
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
          <section className="flex max-w-300 mx-auto pt-15 flex-row gap-10">
            <ZigZagContent
              mapData={contentToDisplay?.sectionThree}
              cardGroup={true}
              headingStart={true}
              mustHaveBottomPadding={'pb-15'}
              mustHaveLeftRightPadding={'px-10'}
              cardHeight="h-130 overflow-y-scroll"
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

export default Page;
