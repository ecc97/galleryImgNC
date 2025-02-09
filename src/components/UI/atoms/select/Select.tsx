"use client";
import './select.sass'

interface SelectProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export default function Select({ label, value, options, onChange }: SelectProps) {
  return (
    <div className="flex flex-col">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="select border rounded-md"
      >
        <option value="">{`Cualquier ${label.toLowerCase()}`}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
