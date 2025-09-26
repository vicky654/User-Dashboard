import React from 'react';
import RoleIcon from '../../components/DPDPIcons/RoleIcon';

export interface GovernanceHeaderProps {
  title?: string;
  riskLabel?: string;
  riskLevel?: 'high' | 'medium' | 'low';
  showRiskLevel?: boolean;
  Selecttitle?: string;
  options?: { label: string; value: string }[];
  selected?: string;
  setSelected?: (value: string) => void;
  leftIcon?: React.ReactNode;
  showButton?: boolean; // 👈 new prop
  buttonText?: string;  // 👈 new prop
  buttonLink?: string;  // 👈 new prop
}

const SelectHeader: React.FC<GovernanceHeaderProps> = ({
  title = 'Privacy Governance',
  riskLabel = 'Overall Risk Status:',
  riskLevel,
  showRiskLevel = true,
  Selecttitle = 'Processing Activity:',
  options,
  selected,
  setSelected,
  leftIcon,
  showButton = false,
  buttonText = 'Learn More',
  buttonLink = '#',
}) => {
  const getRiskColor = () => {
    switch (riskLevel) {
      case 'high':
        return 'bg-red-600';
      case 'medium':
        return 'bg-yellow-400';
      case 'low':
      default:
        return 'bg-green-500';
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-2 header-shadow py-3 rounded-md dark:bg-black">
      {/* Title + Risk Section */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
          {leftIcon} {title}
        </span>

        {showRiskLevel  && riskLevel&& (
          <>
            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">{riskLabel}</span>
            <div className={`w-8 h-3 rounded ${getRiskColor()} shadow-sm`}></div>
          </>
        )}
      </div>

      {/* Dropdown Select + Optional Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
        {options && selected !== undefined && setSelected && (
          <>
            <label htmlFor="processing" className="text-sm font-semibold text-gray-800 dark:text-white">
              {Selecttitle}
            </label>
            <select
              id="processing"
              className="form-select w-full sm:w-[220px] text-sm border border-gray-300 rounded-md py-1 px-2 dark:bg-gray-800 dark:text-white"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </>
        )}

        {/* Conditionally Render Button */}
        {showButton && (
          <button 
            type='button'

            className="text-sm font-medium  bg-primary text-white py-1 px-3 rounded-md shadow"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default SelectHeader;
