'use client';
import Image from 'next/image';
import Button from './Button';
import ChipText from './ChipText';
import { toSentenceCase } from '../../utils/utils';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FeaturedWebinar({
  mapData,
  setIsOpenWebinar = () => {},
}) {
  console.log({ mapData });
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className={`rounded-2xl border-2 overflow-hidden bg-white shadow-md ${
        mapData?.featured ? 'bborder-[#226fb7]' : 'border-stone-500'
      }`}
    >
      {/* top red banner */}
      {mapData?.featured && (
        <div className="bg-[#226fb7] text-white px-6 py-3 rounded-t-xl flex items-center gap-3">
          <span className="text-lg">⭐</span>
          <span className="font-medium">Featured Webinar</span>
        </div>
      )}

      <div className="p-6">
        <div className="grid grid-cols-1  lg:grid-cols-12 gap-6 items-start">
          {/* image left */}
          <div className="lg:col-span-4 h-full">
            <div
              // data-aos="fade-down"
              // data-aos-duration="800"
              className="rounded-xl h-full overflow-hidden"
            >
              <Image
                src={mapData?.image}
                alt={mapData?.title}
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* content right */}
          <div className="lg:col-span-8">
            <h2
              // data-aos="fade-up"
              // data-aos-duration="800"
              className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight"
            >
              {toSentenceCase(mapData?.label)}
            </h2>
            <p
              // data-aos="fade-down"
              // data-aos-duration="1200"
              className="mt-4 text-gray-600 font-body max-w-3xl"
            >
              {mapData?.description}
            </p>

            <div
              // data-aos="fade-down"
              // data-aos-duration="1200"
              className="mt-6 flex flex-wrap gap-3"
            >
              {mapData?.chipText.map((t, i) => (
                <ChipText
                  key={i}
                  text={t}
                  styling="bg-gray-100 text-gray-800"
                />
              ))}
            </div>

            <div
              // data-aos="fade-left"
              // data-aos-duration="1200"
              className="mt-6 flex flex-1 justify-around flex-wrap items-center gap-6 text-gray-600"
            >
              <div
                // data-aos="fade-down"
                // data-aos-duration="800"
                className="flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{mapData?.eventMeta?.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <span>{mapData?.eventMeta?.time}</span>
              </div>
              {mapData?.eventMeta?.location && (
                <div className="flex items-center gap-2">
                  <span>{mapData?.eventMeta?.location}</span>
                </div>
              )}
              {mapData?.eventMeta?.venue && (
                <div className="flex items-center gap-2">
                  <span>{mapData?.eventMeta?.venue}</span>
                </div>
              )}
              {mapData?.eventMeta?.expectedAttendees && (
                <div className="flex items-center gap-2">
                  <span>{mapData?.eventMeta?.expectedAttendees}</span>
                </div>
              )}

              {mapData?.eventMeta?.duration && (
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14v-4z"
                    />
                  </svg>
                  <span>{mapData?.eventMeta?.duration}</span>
                </div>
              )}

              <div className=" flex items-center gap-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a4 4 0 00-4-4h-1"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20H4v-2a4 4 0 014-4h1"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 12a4 4 0 100-8 4 4 0 000 8z"
                  />
                </svg>
                <span>{mapData?.eventMeta?.registered}</span>
              </div>
            </div>

            {/* speaker and CTA */}
            <div className="mt-6 grid grid-cols-1  gap-4 items-center">
              <div
                // data-aos="fade-up"
                // data-aos-duration="1200"
                className="md:col-span-2 w-full bg-gray-50 rounded-lg p-5"
              >
                <div className="text-sm text-gray-900 font-semibold">
                  {mapData?.featureHighlight ? 'Event Highlights' : 'Speaker'}
                </div>
                {mapData?.speaker && (
                  <div className="mt-2 font-semibold text-gray-900">
                    {mapData?.speaker?.name}
                  </div>
                )}

                {mapData?.featureHighlight ? (
                  mapData?.featureHighlight?.map((item, i) => (
                    <div key={i} className="text-sm text-gray-500">
                      {item}
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-500">
                    {mapData?.speaker?.title}
                  </div>
                )}
              </div>

              <div
                // data-aos="fade-down"
                // data-aos-duration="1200"
                className="md:col-span-1 h-full flex md:justify-start items-end"
              >
                <Button
                  padding={'px-1 py-1 rounded-lg'}
                  arrowIcon={true}
                  onClickButton={() => setIsOpenWebinar(mapData)}
                >
                  {mapData?.button?.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
