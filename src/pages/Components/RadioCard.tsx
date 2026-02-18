import React from "react";


// ================= OBJECT RADIO =================
export interface RadioCardProps<T> {
  label: string;
  value: T;
  selected: T | null;
  name?: string;
  onSelect: (value: T) => void;
}

export function RadioCard<T extends { id: number }>({
  label,
  value,
  selected,
  name,
  onSelect,
}: RadioCardProps<T>) {
  const active = selected?.id === value.id;

  return (
    <div
      onClick={() => onSelect(value)}
      className={`border rounded-lg px-4 py-3 cursor-pointer flex items-center ${
        active ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-gray-400"
      }`}
    >
      <input
        type="radio"
        name={name}
        checked={active}
        readOnly
        className="mr-2 accent-red-600"
      />
      {label}
    </div>
  );
}


// ================= STRING RADIO =================
interface SimpleRadioProps {
  label: string;
  value: string;
  selected: string;
  name?: string;
  onSelect: (v: string) => void;
}

export const SimpleRadio: React.FC<SimpleRadioProps> = ({
  label,
  value,
  selected,
  name,
  onSelect,
}) => {
  const active = selected === value;

  return (
    <div
      onClick={() => onSelect(value)}
      className={`border rounded-lg px-4 py-3 cursor-pointer flex items-center ${
        active ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-gray-400"
      }`}
    >
      <input
        type="radio"
        name={name}
        checked={active}
        readOnly
        className="mr-2 accent-red-600"
      />
      {label}
    </div>
  );
};
