import Button from './Button';
import Cards from './Cards';
import ChipText from './ChipText';
import { VerticalBorderPattern } from './Icon';

function CenterTextCardsSection({
  mapData,
  headingStart,
  gridGroup = 'md:grid-cols-2 lg:grid-cols-3',
  centerCardContent = true,
  groupCss,
  cardArrow = false,
}) {
  return (
    // <VerticalBorderPattern >
    <section className="flex w-full overflow-hidden  max-w-7xl  flex-row items-center justify-center min-h-screen text-center pt-6.5">
      <div className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center px-10 gap-8">
        <div
          className={`flex flex-col items-start w-full  gap-4 ${
            headingStart ? 'justify-start' : 'justify-center'
          }`}
        >
          {mapData?.chipText && (
            <div
              className={`flex w-full ${
                headingStart ? 'justify-start' : 'justify-center'
              }`}
            >
              <ChipText text={mapData?.chipText} chipIcon={mapData?.chipIcon} />
            </div>
          )}
          <div
            className={`font-heading text-black w-full text-[48px] leading-16 line-height-[0.5] font-bold text-center ${
              headingStart ? 'text-start' : 'text-center'
            }`}
          >
            {mapData?.label}
          </div>
          <div
            className={`font-body text-[28px] leading-8 text-stone700 text-center w-full ${
              headingStart ? 'text-start' : 'text-center'
            }`}
          >
            {mapData?.description}
          </div>
        </div>
        <div
          className={`grid  gap-8 w-full pb-20 ${gridGroup}
          `}
        >
          {mapData?.cardSection?.map((item, i) => (
            <Cards
              content={item}
              key={i}
              flexCss={centerCardContent ? 'text-start' : 'text-center'}
              cardArrow={cardArrow && i !== mapData?.cardSection?.length - 1}
              groupCss={groupCss}
            />
          ))}
        </div>
      </div>
    </section>
    // </VerticalBorderPattern>
  );
}

export default CenterTextCardsSection;
