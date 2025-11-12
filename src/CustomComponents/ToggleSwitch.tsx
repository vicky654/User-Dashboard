import React from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
  size?: "sm" | "md" | "lg";
  label?: string;
}

const sizeClasses = {
  sm: {
    wrapper: "w-9 h-5",
    circle: "after:top-[2px] after:start-[2px] after:h-4 after:w-4",
  },
  md: {
    wrapper: "w-11 h-6",
    circle: "after:top-[2px] after:start-[2px] after:h-5 after:w-5",
  },
  lg: {
    wrapper: "w-14 h-7",
    circle: "after:top-0.5 after:start-[4px] after:h-6 after:w-6",
  },
};

export default function ToggleSwitch({
  checked,
  onChange,
  size = "md",
  label,
}: ToggleSwitchProps) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={onChange}
      />
      <div
        className={`relative ${sizeClasses[size].wrapper} bg-green-200 rounded-full 
          peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 
          dark:peer-focus:ring-green-800 peer dark:bg-gray-700 
          peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
          peer-checked:after:border-white after:content-[''] after:absolute 
          ${sizeClasses[size].circle} after:bg-white after:border-gray-300 
          after:border after:rounded-full after:transition-all dark:border-gray-600 
          peer-checked:bg-green-600 dark:peer-checked:bg-green-600`}
      ></div>
      {label && (
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </span>
      )}
    </label>
  );
}
