import React from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className="relative flex items-center group">
      {children}
      <span
        className="absolute bottom-full mb-2 hidden group-hover:block
                   bg-gray-800 text-white text-xs rounded px-2 py-1
                   whitespace-nowrap z-50 shadow-lg"
      >
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
