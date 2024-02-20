import React from 'react';
import styled from 'styled-components';
import LoginFrom from '../components/LoginFrom';
import LoginImage from '../images/login.png';

import { useSelector } from 'react-redux';
import { Flex } from 'antd';

const LoginPage = () => {
  const isThemeMode = useSelector(({ common }) => common.isThemeMode);

  const StyledLoginLayout = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: 100vh;
    background-color: ${isThemeMode ? '#2f3249' : '#ffffff'};
  `;

  const StyledLeft = styled.div`
    background-color: ${isThemeMode ? '#25293d' : '#f2f1f6'};
    margin: 2rem;
    border-radius: 1rem;
  `;

  const StyledRight = styled.div`
    margin: 3rem;
  `;

  const boxStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <StyledLoginLayout>
      <StyledLeft>
        <Flex style={boxStyle} justify={'center'} align={'center'}>
          <img src={LoginImage} alt='loginImg' />
        </Flex>
      </StyledLeft>
      <StyledRight>
        <LoginFrom></LoginFrom>
      </StyledRight>
    </StyledLoginLayout>
  );
};

export default LoginPage;
