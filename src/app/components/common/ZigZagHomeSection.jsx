'use client';
import { useState } from 'react';
import ZigZagContent from './ZigZagContent';

function ZigZagHomeSection({
  mapData,
  padding = { top: 'pt-20', around: 'p-10' },
  leftAlign = false,
}) {
  const [selectedMRBtn, setSelectedMRBtn] = useState(0);
  return mapData?.map((item, index) => (
    <div className={`max-w-7xl  w-full  ${padding?.top}`} key={index}>
      <div
        className={`flex  max-w-300 mx-auto  flex-row gap-10  max-md:flex-col ${padding?.around} `}
      >
        <ZigZagContent
          mapData={{ ...item, leftAlign }}
          key={index}
          zigZagClassName={`flex   ${
            index % 2 === 0
              ? 'lg:flex-row max-lg:flex-col '
              : ' lg:flex-row-reverse max-lg:flex-col-reverse'
          } ${
            index % 2 === 0 ? 'backgroundGradient' : 'backgroundGradientTwo'
          } w-full justify-between gap-6 border border-solid border-bordergray rounded-3xl shadow-2xl p-8`}
        />
      </div>
    </div>
  ));
}

export default ZigZagHomeSection;
