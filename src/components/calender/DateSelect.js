import React from 'react';
import styled from 'styled-components';

const DateSelect = () => {
  const DateSelectSection = styled.div`
    border-top: 2px solid #f0f0f0;
    border-bottom: 2px solid #f0f0f0;
    padding: 1.5rem;
  `;

  return (
    <DateSelectSection>
      <div>dd</div>
    </DateSelectSection>
  );
};

export default DateSelect;
