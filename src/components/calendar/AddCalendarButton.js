import React, { useState } from 'react';
import { Button } from 'antd';
import AddCalendarModal from './AddCalendarModal';

const AddCalendarButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addCalendarEvent = async () => {
    console.log('addCalendarEvent');
    setIsModalOpen(true);
  };

  const handleAddCalendarFinish = async () => {
    console.log('handleAddCalendarFinish');
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
          onClick={addCalendarEvent}
        >
          Add Event
        </Button>
      </div>
      <AddCalendarModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleAddCalendarFinish={handleAddCalendarFinish}
      ></AddCalendarModal>
    </div>
  );
};

export default AddCalendarButton;
