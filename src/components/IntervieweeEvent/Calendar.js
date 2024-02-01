// components/Calendar.js
import React from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const MyCalendar = ({ onClickedDate, startDate, endDate }) => {
    const tileDisabled = ({ date, view }) => {
      if (view === 'month') {
        return date < startDate || date > endDate;
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
