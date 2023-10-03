import React from 'react';

const SelectInput = ({ options, onChange, label, ...otherProps }) => {
  return (
    <div className="mt-4">
    <label className="block text-gray-600">{label}</label>
    <select
      onChange={onChange}
      {...otherProps}
      className="block w-full p-2 border rounded outline-none"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    </div>
  );
};

export default SelectInput;