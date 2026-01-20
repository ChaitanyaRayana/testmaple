'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * StatCard
 * Props:
 * - value: display value (string)
 * - label: small label shown under the value
 * - className: additional wrapper classes
 * - height: optional fixed height (Tailwind-style, e.g., 'h-40')
 */
export default function StatCard({ mapData }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const {
    value,
    label,
    description,
    // className = '',
  } = mapData;
  return (
    <div
      className={`w-full max-w-50 flex flex-col gap-2 justify-center bg-white rounded-lg shadow-lg drop-shadow-md p-6 ${
        description ? 'max-h-40' : 'max-h-30'
      } `}
    >
      <div
        data-aos="fade-up"
        data-aos-duration="200"
        className="text-4xl w-full text-center font-bold"
        style={{ color: '#226fb7' }}
      >
        {value}
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        className="text-sm w-full text-center text-gray-600"
      >
        {label}
      </div>
      {description && (
        <div className="text-sm w-full font-body text-center text-gray-400">
          {description}
        </div>
      )}
    </div>
  );
}
