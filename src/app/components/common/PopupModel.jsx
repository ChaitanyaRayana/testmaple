'use client';

import { ICONS } from './icons/AllIcons';

export default function PopupModal({
  isOpen,
  onClose,
  title,
  description,
  icon,
  ppoupContent,
}) {
  if (!isOpen) return null;
  const Icon = icon ? ICONS?.[icon] : '';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 " onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-110 my-40  overflow-y-auto max-lg:h-120 rounded-2xl bg-white p-8 shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute flex items-center justify-center right-4 top-4 w-6 h-6 bg-gray-100 text-center rounded-full cursor-pointer text-gray-400 hover:text-gray-600"
        >
          X
        </button>

        {/* Icon */}
        {icon && (
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d2e6ed]">
              <Icon color={'text-primaryTextColor'} />
            </div>
          </div>
        )}

        {/* Title */}
        {title && (
          <h2 className="mb-2 text-center text-2xl font-bold text-gray-900">
            {title}
          </h2>
        )}

        {/* Description */}
        {description && (
          <p className="mb-6 text-center font-body leading-5 text-gray-600">
            {description}
          </p>
        )}

        {/* Dynamic Content */}
        {ppoupContent}
      </div>
    </div>
  );
}
