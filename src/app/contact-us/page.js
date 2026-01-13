'use client';
import Cards from '../components/common/Cards';
import ContactFormWithMap from '../components/common/Form';
import Fotter from '../components/common/Fotter';
import { VerticalBorderPattern } from '../components/common/Icon';
import ScheduleBanner from '../components/common/ScheduleBanner';
import ZigZagContent from '../components/common/ZigZagContent';
import Navbar from '../components/Navbar';
import { contactUsContent } from '../constants/constants';
import { useEffect } from 'react';

export default function page() {
  const contactDetails = [
    { icon: '', label: '102 California Drive, Whitby, ON, CA' },
    { icon: '', label: '+1 647 804 2023' },
    { icon: '', label: 'info@maplerecord.com' },
  ];

  useEffect(() => {
    const section = document.getElementById('schedule-demo');
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Section visible → add hash
          history.replaceState(null, '', '#schedule-demo');
        } else {
          // Section not visible → remove hash
          history.replaceState(
            null,
            '',
            window.location.pathname + window.location.search
          );
        }
      },
      {
        threshold: 0.1, // 50% visible
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Navbar />

      {/* Top Section */}
      <main className="flex w-full relative z-1 max-w-7xl mx-auto pt-30 flex-col items-center bg-white">
        <VerticalBorderPattern>
          <section className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center px-10 gap-8">
            <div
              className={`flex flex-col h-full items-start lg:w-full  gap-4 justify-center`}
            >
              <div
                className={`font-heading text-black w-full text-[48px] leading-16 line-height-[0.5] font-bold text-center`}
              >
                Contact Us
              </div>
            </div>
            <ZigZagContent
              mapData={contactUsContent}
              zigZagClassName="flex lg:flex-row-reverse max-lg:flex-col  backgroundGradient  w-full justify-between gap-6 border border-solid border-bordergray rounded-3xl shadow-2xl p-8"
            />
          </section>
        </VerticalBorderPattern>

        <VerticalBorderPattern>
          <section
            id="schedule-demo"
            className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center px-10 pt-10 gap-8"
          >
            <div
              className={`flex flex-col h-full items-start lg:w-full  gap-4 justify-center`}
            >
              <div
                className={`font-heading text-black w-full text-[48px] leading-16 line-height-[0.5] font-bold text-center`}
              >
                Ready to enhance your records management?
              </div>
            </div>
            <ContactFormWithMap />
          </section>
        </VerticalBorderPattern>
        {/* Cards */}
        <VerticalBorderPattern>
          <section className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center px-10 pt-10 gap-8">
            <div className="flex flex-row gap-6 w-full h-full pb-20">
              {contactDetails?.map((item, i) => (
                <Cards
                  content={item}
                  key={i}
                  flexCss={'text-center'}
                  groupCss={'flex-col gap-4 min-h-50'}
                />
              ))}
            </div>
          </section>
        </VerticalBorderPattern>

        <ScheduleBanner />
      </main>
      <Fotter />
    </div>
  );
}
