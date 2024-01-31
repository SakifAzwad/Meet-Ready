'use client'

import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs'
const SlotBooking = ({params}) => {

    const [selectedDate, setSelectedDate] = React.useState(null);
    
    // const [minDate, setMinDate] = useState(null);
    // const [maxDate, setMaxDate] = useState(null);
    // const [minTime, setMinTime] = useState(null);
    // const [maxTime, setMaxTime] = useState(null);
    // const [availableDays, setAvailableDays] = useState([]);
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };


    // IMPLEMENT BACKEND HERE













    const minDate = dayjs('2024-01-31');
    const maxDate = dayjs('2024-02-03');
    const minTime = dayjs().set('hour', 9).set('minute', 0).set('second', 0);
    const maxTime = dayjs().set('hour', 16).set('minute', 0).set('second', 0);

    const shouldDisableDate = (date) => {
        const dayOfWeek = date.day();
    return !availableDays.includes(dayOfWeek);

    }
    React.useEffect(() => {
        if (selectedDate) {
          console.log('Selected Date and Time:', selectedDate.format('YYYY-MM-DD HH:mm:ss'));
        }
      }, [selectedDate]);


    return (
        <div>
            <p>this is :{params.id}</p>

                 <div className="">

                 <LocalizationProvider dateAdapter={AdapterDayjs}>
                 <DemoContainer components={['DateTimePicker']}>
                 <DateTimePicker
          label="Basic date time picker"
          value={selectedDate}
          onChange={handleDateChange}
          minDate={minDate}
          maxDate={maxDate}
          minTime={minTime}
          maxTime={maxTime}
          shouldDisableDate={shouldDisableDate}
          open={true}
        />
        
      </DemoContainer>
    </LocalizationProvider>













                 </div>

        </div>
    );
};

export default SlotBooking;