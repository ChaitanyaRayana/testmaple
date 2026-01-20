import React, { useEffect } from 'react';
import Button from './Button';
import { toSentenceCase } from '../../utils/utils';
import ChipText from './ChipText';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ReleaseCard({ mapData }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <article className="w-full rounded-2xl bg-white border border-gray-100 shadow-lg p-8 flex items-start gap-6">
      <div className="flex-1">
        <div className="flex items-center gap-4">
          <div
            data-aos="fade-up"
            data-aos-duration="200"
            className="text-sm text-gray-500"
          >
            {mapData?.date}
          </div>
          <ChipText text={mapData?.chipText} />
        </div>

        <h3
          data-aos="fade-up"
          data-aos-duration="800"
          className="mt-4 text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight"
        >
          {toSentenceCase(mapData?.label)}
        </h3>

        <p className="mt-4 text-gray-600 font-body max-w-3xl">
          {mapData?.description}
        </p>

        <div
          data-aos="fade-down"
          data-aos-duration="800"
          className="mt-6 flex items-center gap-4"
        >
          <Button padding={'px-6 py-3'}>{mapData?.primaryCta?.text}</Button>

          <Button padding={'px-6 py-3'} href={mapData?.secondaryCta?.href}>
            {mapData?.secondaryCta?.text}
          </Button>
        </div>
      </div>

      <div data-aos="fade-left" data-aos-duration="800" className="shrink-0">
        <div className="w-20 h-20 rounded-lg bg-blue-50 flex items-center justify-center">
          {mapData?.icon ? (
            mapData?.icon
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-pink-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 7h10v10H7z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 7v10"
              />
            </svg>
          )}
        </div>
      </div>
    </article>
  );
}
