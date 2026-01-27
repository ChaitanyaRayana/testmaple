'use client';
import { useEffect } from 'react';
import { toSentenceCase } from '../../utils/utils';
import Button from './Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ScheduleBanner({ content }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="flex flex-col w-full max-w-7xl bg-stone900 xs:px-20">
      <div className="flex flex-col gap-8 max-w-300 mx-auto p-10">
        <div className="flex flex-col h-full items-start lg:w-full justify-center gap-4 ">
          <div
            // data-aos="fade-up"
            // data-aos-duration="800"
            className=" font-heading  text-white text-3xl w-full   font-bold text-center"
          >
            {toSentenceCase(
              content?.label || 'Ready to transform your record management?'
            )}
          </div>
          <p
            // data-aos="fade-up"
            // data-aos-duration="1200"
            className="font-body leading-6 text-stone700 text-center w-full"
          >
            {toSentenceCase(
              content?.description ||
                'Join thousands of teams already using MapleRecord to streamline their workflows and boost productivity.'
            )}
          </p>
        </div>
        <div className="flex flex-col h-full items-start lg:w-full justify-center gap-4 ">
          <div
            // data-aos="fade-down"
            // data-aos-duration="1200"
            className="  w-full text-center"
          >
            {content?.buttonsText ? (
              <div className="flex flex-row gap-3 w-full justify-center items-center">
                {content?.buttonsText?.map((item) => (
                  <Button
                    key={item}
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
            <div
              // data-aos="fade-up"
              // data-aos-duration="1600"
              className="font-body text-[16px] text-stone700 text-center w-full"
            >
              No credit card required • Cancel anytime
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ScheduleBanner;
