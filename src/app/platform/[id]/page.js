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
    <div className="flex min-h-screen w-full pt-30 flex-col bg-white">
      <Navbar />

      <main className="flex w-full relative z-1 max-w-7xl mx-auto flex-col items-center bg-white">
        {/* // Section one */}
        <VerticalBorderPattern>
          <section className="flex  max-w-300 mx-auto p-10   flex-row gap-10">
            <ZigZagContent
              mapData={contentToDisplay?.sectionOne}
              zigZagClassName="flex g:flex-row max-lg:flex-col  backgroundGradient  w-full justify-between gap-6 border border-solid border-bordergray rounded-3xl shadow-2xl p-8"
            />
          </section>
        </VerticalBorderPattern>
        {/* Section  Two*/}
        <VerticalBorderPattern>
          <section className="flex  max-w-300 mx-auto p-10   flex-row gap-10">
            <CenterTextCardsSection
              mapData={contentToDisplay?.sectionTwo}
              headingStart={true}
            />
          </section>
        </VerticalBorderPattern>
        {/* Section  Three*/}
        <VerticalBorderPattern>
          <section className="flex  max-w-300 mx-auto p-10   flex-row gap-10">
            <ZigZagContent
              mapData={contentToDisplay?.sectionThree}
              cardGroup={true}
              headingStart={true}
              zigZagClassName="flex g:flex-row max-lg:flex-col items-center  backgroundGradient  w-full justify-between gap-6 border border-solid border-bordergray rounded-3xl shadow-2xl p-8"
            />
          </section>
        </VerticalBorderPattern>
        {/* Section  Four*/}
        <VerticalBorderPattern>
          <section className="flex max-w-300 mx-auto p-10   flex-row gap-10">
            <ZigZagContent
              mapData={contentToDisplay?.sectionFour}
              cardGroup={true}
              headingStart={true}
              zigZagClassName="flex g:flex-row max-lg:flex-col items-center  backgroundGradient  w-full justify-between gap-6 border border-solid border-bordergray rounded-3xl shadow-2xl p-8"
            />
          </section>
        </VerticalBorderPattern>
        {/* Section  Five*/}
        <VerticalBorderPattern>
          <section className="flex  max-w-300 mx-auto p-10   flex-row gap-10">
            <CenterTextCardsSection
              mapData={contentToDisplay?.sectionFive}
              gridTwoGroup={true}
              //   headingStart={true}
              gridGroup={'md:grid-cols-2 lg:grid-cols-2'}
              zigZagClassName="flex g:flex-row max-lg:flex-col items-center  backgroundGradient  w-full justify-between gap-6 border border-solid border-bordergray rounded-3xl shadow-2xl p-8"
            />
          </section>
        </VerticalBorderPattern>

        {/* Section  Six*/}
        <VerticalBorderPattern>
          <section className="flex  max-w-300 mx-auto p-10   flex-row gap-10">
            <CenterTextCardsSection
              mapData={contentToDisplay?.sectionSix}
              gridTwoGroup={true}
              headingStart={true}
              centerCardContent={true}
              // groupCss={'flex-row gap-4'}
              gridGroup={'md:grid-cols-2 lg:grid-cols-2'}
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
