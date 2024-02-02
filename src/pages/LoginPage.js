import React from 'react';
import styled from 'styled-components';
import LoginFrom from '../components/LoginFrom';
import LoginImage from '../images/login.png';

import { Flex } from 'antd';

const StyledLoginLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 100vh;
  background-color: #2f3249;
`;

const StyledLeft = styled.div`
  background-color: #25293d;
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

const LoginPage = () => {
  return (
    <StyledLoginLayout>
      <StyledLeft>
        <Flex style={boxStyle} justify={'center'} align={'center'}>
          <img src={LoginImage} alt='BigCo Inc. logo' />
        </Flex>
      </StyledLeft>
      <StyledRight>
        <LoginFrom></LoginFrom>
      </StyledRight>
    </StyledLoginLayout>
  );
};

export default LoginPage;
