import React from 'react';

type Option = {
  label: string;
  value: string | number;
};

type CommonSelectProps = {
  id?: string;
  label?: string;
  options: Option[];
  value: string | number;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
};

const CommonSelect: React.FC<CommonSelectProps> = ({
  id = 'select',
  label = '',
  options,
  value,
  onChange,
  required = false,
  className = '',
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm text-gray-600 font-medium">
          {label}
        </label>
      )}
      <select
        id={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm text-black focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary ${className}`}
      >
        {options?.map((opt) => (
          <option key={opt?.value} value={opt?.value}>
            {opt?.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CommonSelect;
