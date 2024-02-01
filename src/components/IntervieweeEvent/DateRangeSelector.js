// components/DateRangeSelector.js
import React from 'react';

const DateRangeSelector = ({ startDate, endDate }) => {
  return (
    <div>
      <p>Date Range: {startDate} - {endDate}</p>
    </div>
  );
};

export default DateRangeSelector;
