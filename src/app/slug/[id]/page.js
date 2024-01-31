import SlotBooking from '@/components/SlotBooking/SlotBooking';
import React from 'react';

const Preview = ({params}) => {
    return (
        <div>
           <SlotBooking params={params}></SlotBooking>
            
        </div>
    );
};

export default Preview;