'use client';

import { ICONS } from './icons/AllIcons';

function ChipText({ text, styling = '', chipIcon = null, dotCircle = false }) {
  const Icon = chipIcon ? ICONS[chipIcon] : null;
  return (
    <div
      className={` bg-[#d2e6ed] flex flex-row items-center justify-center gap-2 text-gray-800 text-sm font-medium px-4 py-2 rounded-full ${styling}`}
    >
      {chipIcon && (
        <span className="max-w-max max-h-max">
          <Icon width={16} height={16} />
        </span>
      )}
      {dotCircle && <span className="w-2 h-2 bg-gray-500 rounded-full"></span>}
      <span>{text}</span>
    </div>
  );
}
export default ChipText;
