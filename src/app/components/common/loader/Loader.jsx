// components/CircularLoading.tsx
import React from 'react';

const CircularLoading = ({
  width = '5rem',
  height = '5rem',
  size = '0.5rem',
  bgColor = '#3498db',
}) => {
  return (
    <div className="flex justify-center items-center my-60">
      <div
        className="animate-spin rounded-full border-t-transparent border-solid"
        style={{
          width,
          height,
          borderWidth: size,
          borderColor: `${bgColor}33 ${bgColor}33 ${bgColor}33 ${bgColor}`,
        }}
      />
    </div>
  );
};

export default CircularLoading;
