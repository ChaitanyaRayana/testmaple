import { toSentenceCase } from '../../utils/utils';
import Button from './Button';

function ScheduleBanner({ content }) {
  return (
    <div className="flex flex-col w-full max-w-7xl bg-stone900 px-20">
      <div className="flex flex-col gap-8 max-w-300 mx-auto p-10">
        <div className="flex flex-col h-full items-start lg:w-full justify-center gap-4 ">
          <div className=" font-heading  text-white text-3xl w-full leading-16 line-height-[0.5] font-bold text-center">
            {toSentenceCase(
              content?.label || 'Ready to transform your record management?'
            )}
          </div>
          <div className="font-body text-[20px] leading-8 text-stone700 text-center w-full">
            {toSentenceCase(
              content?.description ||
                'Join thousands of teams already using MapleRecord to streamline their workflows and boost productivity.'
            )}
          </div>
        </div>
        <div className="flex flex-col h-full items-start lg:w-full justify-center gap-4 ">
          <div className="  w-full text-center">
            {content?.buttonsText ? (
              <div className="flex flex-row gap-3 w-full justify-center items-center">
                {content?.buttonsText?.map((item) => (
                  <Button
                    arrowIcon={
                      item === 'Contact Us' || item === 'Contact Our Team'
                    }
                  >
                    {item}
                  </Button>
                ))}
              </div>
            ) : (
              <Button>Schedule Demo</Button>
            )}
          </div>
          {!content?.buttonsText && (
            <div className="font-body text-[16px] text-stone700 text-center w-full">
              No credit card required • Cancel anytime
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ScheduleBanner;
