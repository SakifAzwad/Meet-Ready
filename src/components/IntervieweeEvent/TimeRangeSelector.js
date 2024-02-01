// TimeRangeSelector.js
import React from 'react';

const TimeRangeSelector = ({ onClickedTime }) => {
  const timeRanges = ['9:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM'];

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          id="time-picker"
          aria-haspopup="listbox"
          aria-expanded="true"
        >
          Select Time
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 12a1 1 0 01-1-1V6a1 1 0 112 0v5a1 1 0 01-1 1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div
        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="time-picker"
        tabIndex="-1"
      >
        <div className="py-1" role="none">
          {timeRanges.map((timeRange) => (
            <button
              key={timeRange}
              type="button"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              onClick={() => onClickedTime(timeRange)}
            >
              {timeRange}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeRangeSelector;
