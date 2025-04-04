"use client"
// components/SkillBar.js
import { useEffect, useState } from 'react';

const SkillBar = ({ name, level }) => {
  const [width, setWidth] = useState('0%');

  useEffect(() => {
    // Trigger the animation after a small delay for smooth effect
    const timer = setTimeout(() => {
      setWidth(`${level}%`);
    }, 100);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [level]);

  return (
    <div className="mb-4">
      <div className="text-lg font-medium mb-1">{name}</div>
      <div className="w-full bg-gray-300 rounded-full h-4 relative">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-700 ease-in-out"
          style={{ width }}
        />
      </div>
      <span className="text-sm text-gray-600">{level}%</span>
    </div>
  );
};

export default SkillBar;
