import React, { useState, useEffect } from 'react';

const hexToRgb = (hex: string): string => {
  const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!match) return '0 0 0'; // fallback
  return `${parseInt(match[1], 16)} ${parseInt(match[2], 16)} ${parseInt(match[3], 16)}`;
};

const updatePrimaryColors = (hex: string) => {
  const rgb = hexToRgb(hex);
  document.documentElement.style.setProperty('--color-primary', rgb);
  // Optional: update variants
  // document.documentElement.style.setProperty('--color-primary-light', '234 241 255');
  // document.documentElement.style.setProperty('--color-primary-dark-light', `rgba(${rgb}, 0.15)`);
};

const updateSecondaryColors = (hex: string) => {
  const rgb = hexToRgb(hex);
  document.documentElement.style.setProperty('--color-secondary', rgb);
  document.documentElement.style.setProperty('--color-secondary-light', '235 228 247'); // #ebe4f7
  const [r, g, b] = rgb.split(' ');
  document.documentElement.style.setProperty('--color-secondary-dark-light', `rgba(${r},${g},${b},0.15)`);
};

const ThemeColorPicker: React.FC = () => {
  const [colors, setColors] = useState({
    primary: '#2D8BBA',
    secondary: '#B81818',
  });

  useEffect(() => {
    updatePrimaryColors(colors.primary);
    updateSecondaryColors(colors.secondary);
  }, [colors]);

  const handleColorChange = (key: 'primary' | 'secondary') => (e: React.ChangeEvent<HTMLInputElement>) => {
    setColors((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <div className="p-3 space-y-6 border rounded bg-white dark:bg-black max-w-md">
      <h2 className="text-lg font-semibold">Theme Color Picker</h2>

      {/* Primary */}
      <div className="flex items-center gap-4">
        <label className="w-24 text-sm font-medium">Primary:</label>
        <input
          type="color"
          value={colors.primary}
          onChange={handleColorChange('primary')}
          className="w-8 h-8 cursor-pointer"
        />
        <span className="text-sm">{colors.primary}</span>
      </div>

      {/* Secondary */}
      <div className="flex items-center gap-4">
        <label className="w-24 text-sm font-medium">Secondary:</label>
        <input
          type="color"
          value={colors.secondary}
          onChange={handleColorChange('secondary')}
          className="w-8 h-8 cursor-pointer"
        />
        <span className="text-sm">{colors.secondary}</span>
      </div>
    </div>
  );
};

export default ThemeColorPicker;
