import React from 'react';
import CalendarMain from '../components/calender/CalendarMain';
import AddCalendarButton from '../components/calender/AddCalendarButton';
import DateSelect from '../components/calender/DateSelect';
import Filters from '../components/calender/Filters';

import { Flex } from 'antd';

const CalenderPage = () => {
  return (
    <>
      <Flex
        justify={'space-between'}
        style={{
          width: '100%',
          minHeight: '90vh',
          backgroundColor: 'white',
          borderRadius: '5px',
          boxShadow:
            'rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px',
        }}
        className='padding-sm'
      >
        <div style={{ minWidth: '20%', borderRight: '2px solid #f0f0f0' }}>
          <Flex vertical>
            <div>
              <AddCalendarButton></AddCalendarButton>
            </div>
            <div>
              <DateSelect></DateSelect>
            </div>
            <div>
              <Filters></Filters>
            </div>
          </Flex>
        </div>
        <CalendarMain></CalendarMain>
      </Flex>
    </>
  );
};

export default CalenderPage;
