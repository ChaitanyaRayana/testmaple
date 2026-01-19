import { toSentenceCase } from '../../utils/utils';
import Button from './Button';
import Cards from './Cards';
import ChipText from './ChipText';

function CenterTextCardsSection({
  mapData,
  headingStart,
  gridGroup = 'md:grid-cols-2 lg:grid-cols-3',
  centerCardContent = true,
  groupCss,
  cardArrow = false,
  mustHaveLeftRightPadding = 'px-10',
  mustHaveBottomPadding = 'pb-15',
}) {
  return (
    // <VerticalBorderPattern >
    <section
      className={`flex w-full overflow-hidden  max-w-7xl  flex-row items-start justify-center text-center `}
    >
      <div className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center  gap-8">
        <div
          className={`flex flex-col items-start w-full  gap-4 ${
            headingStart ? 'justify-start' : 'justify-center'
          } ${mustHaveLeftRightPadding} `}
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
            className={`font-heading text-black w-full text-3xl   font-bold text-center ${
              headingStart ? 'text-start' : 'text-center'
            }`}
          >
            {toSentenceCase(mapData?.label)}
          </div>
          <p
            className={`font-body  leading-6 text-stone700 text-center w-full ${
              headingStart ? 'text-start' : 'text-center'
            }`}
          >
            {mapData?.description}
          </p>
        </div>
        <div
          className={`grid  gap-8 w-full ${gridGroup} ${mustHaveLeftRightPadding} ${mustHaveBottomPadding}
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
