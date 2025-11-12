import React from 'react';
import RoleIcon from '../../components/DPDPIcons/RoleIcon';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import IconFolderPlus from '../../components/Icon/IconFolderPlus';
import IconPlus from '../../components/Icon/IconPlus';


export interface GovernanceHeaderProps {
  title?: string;
  subtitle?: string;
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
  title = 'privacy_governance',
  riskLabel = 'overallRiskStatus',
  riskLevel,
  showRiskLevel = true,
  Selecttitle = 'processingActivity',
  options,
  selected,
  setSelected,
  leftIcon,
  subtitle,
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
    const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-2 header-shadow py-3 rounded-md dark:bg-black">
      {/* Title + Risk Section */}
<div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
          {leftIcon}      {t(title)}
        </span>

        {showRiskLevel  && riskLevel&& (
          <>
            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium"> { t('overallRiskStatus') }</span>
            <div className={`w-8 h-3 rounded ${getRiskColor()} `}></div>
          </>
        )}

      </div>
            
        <span className="text-sm text-gray-600 mt-2 dark:text-gray-300 font-medium"> { t(subtitle ?? '') }</span>
      

</div>

      {/* Dropdown Select + Optional Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
        {options && selected !== undefined && setSelected && (
          <>
            <label htmlFor="processing" className="text-sm font-semibold text-gray-800 dark:text-white">
              {t(Selecttitle)}
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

            className="btn px-6 py-3 font-medium  bg-primary text-white py-1 px-3 rounded-md shadow"
          >
            <IconPlus className='mr-2' />
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default SelectHeader;
