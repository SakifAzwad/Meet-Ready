// InputSection.js
import React from 'react';

const InputSection = ({ onChange }) => {
  return (
    <>
    
    <div className="mb-4">
      <label htmlFor="name" className="block text-left text-lg  font-medium text-gray-700">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        autoComplete="name"
        required
        onChange={onChange}
        className="mt-1 border border-purple-600 focus:ring-blue-500 focus:border-blue-500 block w-full h-8 text-lg shadow-sm rounded-md"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-left text-lg font-medium text-gray-700">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        autoComplete="email"
        required
        onChange={onChange}
        className="mt-1 focus:ring-blue-500 border border-purple-600 focus:border-blue-500 block w-full h-8 text-lg shadow-sm  rounded-md"
      />
    </div>
    </>
  );
};

export default InputSection;
