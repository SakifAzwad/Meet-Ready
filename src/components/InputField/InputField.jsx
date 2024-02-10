// InputField.js

import React from 'react';

const InputField = ({ type, name, placeholder, value, onChange, classes, ...rest }) => {
    return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classes}
      {...rest} // Spread rest of the props
    />
  );
};

export default InputField;


{/* text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300 */}