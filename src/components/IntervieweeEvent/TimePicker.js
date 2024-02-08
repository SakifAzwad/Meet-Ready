// TimePicker.js
import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const TimePicker = ({ onSelectTime, selectedDate, timeSlots }) => {
  console.log('time picker 1', onSelectTime)
  console.log('time picker 2',  selectedDate)
  console.log('time picker 3', timeSlots)
  const [filteredTimeOptions, setFilteredTimeOptions] = useState([]);

  console.log('time', filteredTimeOptions)
  // Update time options when the selected date changes
  useEffect(() => {
    if (selectedDate) {
      // Filter time slots based on the selected date
      const dateFormatted = selectedDate.toLocaleDateString('en-US');
      
      console.log('dateFormatted', dateFormatted)

      const timeOptions = timeSlots
        .filter((slot) => slot.date === dateFormatted)
        .map((slot) => ({ value: slot.timeSlot, label: slot.timeSlot }));

        console.log('time options', timeOptions)

        setFilteredTimeOptions(timeOptions);
    }
  }, [selectedDate, timeSlots]);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '100%',
      marginTop: '8px',
      borderRadius: '25px'
    }),
  };

  return (
    <Select
      className='rounded-xl'
      options={filteredTimeOptions}
      styles={customStyles}
      onChange={(selectedOption) => onSelectTime(selectedOption.value)}
      placeholder="Select Time"
      isDisabled={!selectedDate} // Disable if no date is selected
    />
  );
};

export default TimePicker;



// // TimePicker.js
// import React from 'react';
// import Select from 'react-select';

// const TimePicker = ({ onSelectTime }) => {
//   const timeOptions = [
//     { value: '9:00 AM', label: '9:00 AM' },
//     { value: '10:00 AM', label: '10:00 AM' },
//     { value: '11:00 AM', label: '11:00 AM' },
//     { value: '12:00 AM', label: '12:00 AM' },
//     // Add more time options as needed
//   ];

//   const customStyles = {
//     control: (provided) => ({
//       ...provided,
//       width: '100%',
//       marginTop: '8px',
//       borderRadius: '25px'
      
//     }),
//   };

//   return (
//     <Select
//      className='rounded-xl'
//       options={timeOptions}
//       styles={customStyles}
//       onChange={(selectedOption) => onSelectTime(selectedOption.value)}
//       placeholder="Select Time"
//     />
//   );
// };

// export default TimePicker;
