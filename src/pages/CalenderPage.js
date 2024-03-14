import React from 'react';
import CalendarMain from '../components/calendar/CalendarMain';
import AddCalendarButton from '../components/calendar/AddCalendarButton';
import DateSelect from '../components/calendar/DateSelect';
import Filters from '../components/calendar/Filters';

import { Flex } from 'antd';

const CalendarPage = () => {
  return (
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
    >
      <div style={{ minWidth: '25%', borderRight: '2px solid #f0f0f0' }}>
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
  );
};

export default CalendarPage;
