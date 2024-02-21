import React from 'react';
import styled from 'styled-components';
import ForgotPasswordFrom from '../components/ForgotPasswordFrom';
import LoginImage from '../images/login.png';

import { useSelector } from 'react-redux';
import { Flex } from 'antd';

const ForgotPasswordPage = () => {
  const isThemeMode = useSelector(({ common }) => common.isThemeMode);

  const StyledLoginLayout = styled.div`
    background-color: ${isThemeMode ? '#2f3249' : '#ffffff'};
  `;

  const StyledLeft = styled.div`
    background-color: ${isThemeMode ? '#25293d' : '#f2f1f6'};
  `;

  return (
    <StyledLoginLayout className='login-layout'>
      <StyledLeft className='login-left'>
        <Flex
          style={{ width: '100%', height: '100%' }}
          justify={'center'}
          align={'center'}
        >
          <img src={LoginImage} alt='loginImg' />
        </Flex>
      </StyledLeft>
      <div className='login-right'>
        <ForgotPasswordFrom></ForgotPasswordFrom>
      </div>
    </StyledLoginLayout>
  );
};

export default ForgotPasswordPage;
