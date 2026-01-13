
'use client';

import { ICONS } from "./icons/AllIcons";

function ChipText({ text, styling='', chipIcon = null }) {
const Icon = chipIcon ? ICONS[chipIcon] : null;
    return (
        <div className={` bg-gray-200 flex flex-row items-center justify-center gap-2 text-gray-800 text-sm font-medium px-3 py-1 rounded-full ${styling}`}>
          {chipIcon && <span className="max-w-max max-h-max"><Icon width={16} height={16} /></span>}
          <span>{text}</span>
        </div>
    );
}
export default ChipText;