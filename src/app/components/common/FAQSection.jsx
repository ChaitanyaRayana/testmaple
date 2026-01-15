'use client';
import { useState } from 'react';
import { homePageFaq } from '../../constants/constants';
import ChipText from './ChipText';
import Button from './Button';
import { CircleQuestionMarkIcon } from './svgImage';

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState();
  function toggleFAQ(index) {
    if (activeIndex === index) {
      setActiveIndex();
      return;
    }
    setActiveIndex(index);
  }
  return (
    <div className="w-full max-w-7xl pt-15 pb-30">
      <div className="flex max-w-300 mx-auto flex-col gap-8 px-10">
        <div className="flex flex-col h-full items-start lg:w-full justify-center gap-2 ">
          <div className="flex justify-center w-full">
            <ChipText
              text="Frequently Asked Questions"
              chipIcon={'CircleQuestionMarkIcon'}
            />
          </div>
          <div className=" font-heading text-black text-3xl w-full leading-16 line-height-[0.5] font-bold text-center">
            Got Questions? We've Got Answers
          </div>
          <div className="font-body text-[16px] text-stone700 text-center w-full">
            Learn more about how MapleRecord can transform your records
            management operations.
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {homePageFaq?.map((faq, index) => (
            <div
              key={index}
              className={`${
                activeIndex === index
                  ? 'h-auto  transform transition-all ease-out duration-700 '
                  : 'h-auto'
              } overflow-hidden flex flex-col justify-center sm:justify-start bg-[#F6F7F8] rounded-xl`}
              onClick={() => toggleFAQ(index)}
            >
              <button className="flex w-full gap-5 items-center px-2 py-5 sm:p-5">
                <span
                  className={`scale-[1.8] text-black duration-700 opacity-50 ${
                    activeIndex === index ? 'rotate-46' : 'rotate-0'
                  }`}
                >
                  +
                </span>
                <p className="text-black text-[18px] text-start font-medium">
                  {faq?.Qes}
                </p>
              </button>
              <div
                className={`transition-max-height duration-300 overflow-hidden ${
                  activeIndex === index ? 'max-h-250' : 'max-h-0'
                }`}
              >
                <p className="text-[#374151] text-[14px] font-medium pb-5 ps-10 sm:ps-12">
                  {faq?.ans}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col h-full items-start lg:w-full justify-center gap-4 ">
          <div className=" font-body text-[24px] leading-8 text-stone700 text-center flex justify-center w-full">
            Still have questions? Our team is here to help.
          </div>
          <div className="w-full flex justify-center">
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
