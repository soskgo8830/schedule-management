import React from 'react';
import { Button } from 'antd';

const AddCalendarButton = () => {
  const addCalendarEvent = async () => {
    console.log('addCalendarEvent');
  };

  return (
    <div className='margin-lg'>
      <Button
        block
        style={{
          backgroundColor: '#2f3249',
          color: '#ffffff',
          border: 0,
        }}
        onClick={addCalendarEvent}
      >
        Add Event
      </Button>
    </div>
  );
};

export default AddCalendarButton;
