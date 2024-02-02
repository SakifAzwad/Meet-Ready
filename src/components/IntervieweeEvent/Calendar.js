// components/Calendar.js
import React from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const MyCalendar = ({ onClickedDate, startDate, endDate }) => {
    const tileDisabled = ({ date, view }) => {
      if (view === 'month') {
        // Convert the date to a formatted string
        const formattedDate = date.toLocaleDateString('en-US');
            
        // Check if the date is outside the specified range
        return formattedDate < startDate.toLocaleDateString('en-US') || formattedDate > endDate.toLocaleDateString('en-US');
    }
    };
  
    return (
      <div>
        <Calendar
          className="rounded-3xl border-0 border-fuchsia-700 h-96 pt-12"
          onClickDay={onClickedDate}
          tileDisabled={tileDisabled}
          minDate={new Date()} // Set minimum date to today
        />
      </div>
    );
  };
  
  export default MyCalendar;
