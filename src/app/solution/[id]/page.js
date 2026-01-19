import Navbar from '../../components/Navbar';
import {
  departmentalSolutions,
  industriesSolutions,
} from '../../constants/constants';
import ZigZagContent from '../../components/common/ZigZagContent';
import { VerticalBorderPattern } from '../../components/common/Icon';
import CenterTextCardsSection from '../../components/common/CenterTextCardsSection';
import ScheduleBanner from '../../components/common/ScheduleBanner';
import ZigZagHomeSection from '../../components/common/ZigZagHomeSection';
import ChipText from '../../components/common/ChipText';
import Fotter from '../../components/common/Fotter';

/* REQUIRED FOR STATIC EXPORT */
export async function generateStaticParams() {
  return Object.keys({ ...industriesSolutions, ...departmentalSolutions }).map(
    (key) => ({
      id: key,
    })
  );
}
async function Page({ params }) {
  console.log({ params });

  const { id } = await params;
  console.log('ID:', id);
  const contentToDisplay =
    industriesSolutions?.[id] || departmentalSolutions?.[id];

  console.log({ contentToDisplay });

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Navbar />

      <main className="flex w-full relative z-1 max-w-7xl mx-auto  flex-col items-center bg-white">
        {/* // Section one */}
        <VerticalBorderPattern gradientName="backgroundGlow">
          <section className="flex  max-w-300 mx-auto px-10 pt-50 pb-15  flex-row gap-10">
            <ZigZagContent
              mapData={contentToDisplay?.sectionOne}
              mustHaveBottomPadding={''}
              mustHaveLeftRightPadding={''}
              heroSection={true}
              zigZagClassName="flex g:flex-row max-lg:flex-col  backgroundGradient  w-full justify-between gap-6 border border-solid border-bordergray rounded-3xl shadow-2xl p-8"
            />
          </section>
        </VerticalBorderPattern>
        {/* Section  Two*/}
        <VerticalBorderPattern>
          <section className="flex  max-w-300 mx-auto pt-15   flex-row gap-10">
            <CenterTextCardsSection
              mapData={contentToDisplay?.sectionTwo}
              headingStart={false}
              mustHaveBottomPadding={'pb-15'}
              mustHaveLeftRightPadding={'px-10'}
            />
          </section>
        </VerticalBorderPattern>

        {/* Section  Three*/}
        <VerticalBorderPattern>
          <section className="flex  max-w-300 mx-auto flex-col pt-15 pb-15 gap-12">
            {departmentalSolutions?.[id] ? (
              <CenterTextCardsSection
                mapData={contentToDisplay?.sectionThree}
                cardGroup={true}
                headingStart={false}
                gridGroup="md:grid-cols-4"
                cardArrow={true}
                mustHaveBottomPadding={'pb-15'}
                mustHaveLeftRightPadding={'px-10'}
              />
            ) : (
              <>
                {' '}
                <div
                  className={`flex w-full  flex-col gap-10 justify-center ${
                    contentToDisplay?.sectionThree?.cardSection
                      ? 'h-max'
                      : 'max-lg:h-max lg:h-120'
                  }`}
                >
                  <div className="flex flex-col gap-5 px-10">
                    {contentToDisplay?.sectionThree?.chipText && (
                      <ChipText
                        styling="w-fit"
                        text={contentToDisplay?.sectionThree?.chipText}
                      />
                    )}
                    <div className="flex flex-col gap-4">
                      <div className="font-heading text-3xl text-black text-start">
                        {contentToDisplay?.sectionThree?.label}
                      </div>
                    </div>
                  </div>
                </div>
                <ZigZagHomeSection
                  mapData={contentToDisplay?.sectionThree?.cardSection}
                  padding={{ top: 0, around: 0 }}
                  mustHaveBottomPadding={''}
                  mustHaveLeftRightPadding={'px-10'}
                />
              </>
            )}
          </section>
        </VerticalBorderPattern>
        {/* Section  Four*/}
        <VerticalBorderPattern>
          <section className="flex max-w-300 mx-auto pt-15   flex-row gap-10">
            <CenterTextCardsSection
              mapData={contentToDisplay?.sectionFour}
              cardGroup={true}
              headingStart={false}
              gridGroup="md:grid-cols-4"
              mustHaveBottomPadding={'pb-15'}
              mustHaveLeftRightPadding={'px-10'}
            />
          </section>
        </VerticalBorderPattern>
        {/* Section  Five*/}
        <VerticalBorderPattern>
          <section className="flex  max-w-300 mx-auto pt-15   flex-row gap-10">
            <CenterTextCardsSection
              mapData={contentToDisplay?.sectionFive}
              gridGroup={'md:grid-cols-3'}
              headingStart={true}
              mustHaveBottomPadding={'pb-15'}
              mustHaveLeftRightPadding={'px-10'}
              zigZagClassName="flex g:flex-row max-lg:flex-col items-center  backgroundGradient  w-full justify-between gap-6 border border-solid border-bordergray rounded-3xl shadow-2xl p-8"
            />
          </section>
        </VerticalBorderPattern>

        {/* Section  Six*/}
        <VerticalBorderPattern>
          <section className="flex  max-w-300 mx-auto pt-15   flex-row gap-10">
            <CenterTextCardsSection
              mapData={contentToDisplay?.sectionSix}
              gridGroup={'flex flex-row justify-center'}
              headingStart={false}
              centerCardContent={true}
              groupCss={' lg:w-[600px] w-full'}
              mustHaveBottomPadding={'pb-15'}
              mustHaveLeftRightPadding={'px-10'}
              zigZagClassName="flex g:flex-row max-lg:flex-col items-center  backgroundGradient  w-full justify-between gap-6 border border-solid border-bordergray rounded-3xl shadow-2xl p-8"
            />
          </section>
        </VerticalBorderPattern>
        {contentToDisplay?.scheduleSection && (
          <ScheduleBanner content={contentToDisplay?.scheduleSection} />
        )}
      </main>
      <Fotter />
    </div>
  );
}

export default Page;
