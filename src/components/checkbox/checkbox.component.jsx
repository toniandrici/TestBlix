import React, { useState } from 'react';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="mt-10  md:w-1/2 items-center justify-start flex">
    <label className="inline-flex items-end space-x-2">
      <input
        type="checkbox"
        className="h-5 w-5 ml-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      <span className="text-gray-700">Use SSL</span>
    </label>
    </div>
  );
};

export default Checkbox;