import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DateSelect = () => {
  const DateSelectSection = styled.div`
    border-top: 2px solid #f0f0f0;
    border-bottom: 2px solid #f0f0f0;
    padding: 1.5rem;
  `;

  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    setDate(selectedDate);
    console.log(date);
  };

  return (
    <DateSelectSection>
      <Calendar onChange={onChange} value={date} className='custom-calendar' />
    </DateSelectSection>
  );
};

export default DateSelect;
