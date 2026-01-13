import React from 'react';
import Button from './Button';

export default function ReleaseCard({ mapData }) {
  return (
    <article className="w-full rounded-2xl bg-white border border-gray-100 shadow-lg p-8 flex items-start gap-6">
      <div className="flex-1">
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-500">{mapData?.date}</div>
          <div className="inline-block bg-pink-50 text-pink-600 text-sm font-medium px-3 py-1 rounded-full">
            {mapData?.chipText}
          </div>
        </div>

        <h3 className="mt-4 text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
          {mapData?.label}
        </h3>

        <p className="mt-4 text-gray-600 text-lg max-w-3xl">
          {mapData?.description}
        </p>

        <div className="mt-6 flex items-center gap-4">
          <Button padding={'px-6 py-3'}>{mapData?.primaryCta?.text}</Button>

          <Button padding={'px-6 py-3'} href={mapData?.secondaryCta?.href}>
            {mapData?.secondaryCta?.text}
          </Button>
        </div>
      </div>

      <div className="shrink-0">
        <div className="w-20 h-20 rounded-lg bg-pink-50 flex items-center justify-center">
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
