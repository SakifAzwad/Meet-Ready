import React from "react";

const Input = ({ placeholder, name, type, className, onChange, value, ...rest  }) => {
  return (
    <div className="flex flex-col space-y-1">
      <label
        className=" font-semibold text-base  text-black pl-1"
      >
        {placeholder}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={`px-3 py-2 rounded-lg  text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300 ${className}`}
        onChange={onChange}
        value={value}
        {...rest}
      />
      
    </div>
  );
};

export default Input;
