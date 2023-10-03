const inputClasses = [
  "w-full",
  "px-4",
  "py-2",
  "mt-2",
  "border",
  "rounded-md",
  "focus:outline-none",
  "focus:border-blue-500",
];

const Input = ({ label, cls, ...otherProps }) => (
  <div className={`mt-4 ${cls} `}>
    <label  className="block text-gray-600">
      {label}
    </label>
    <input {...otherProps} className={inputClasses.join(" ")} />
  </div>
);

export default Input;
