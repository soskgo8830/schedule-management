import React from 'react';
import { Button } from 'antd';

const AddCalendarButton = ({ onAddButtonClick }) => {
  const handleClick = () => {
    onAddButtonClick('add');
  };

  return (
    <div>
      <div className='margin-lg'>
        <Button
          block
          style={{
            backgroundColor: '#2f3249',
            color: '#ffffff',
            border: 0,
          }}
          onClick={handleClick}
        >
          Add Event
        </Button>
      </div>
    </div>
  );
};

export default AddCalendarButton;
