import React from 'react';
import styled from 'styled-components';
import NotFoundImage from '../images/notFound.png';
import { Flex, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const NotFoundImages = styled.img`
    width: 30vw;
  `;

  const navigate = useNavigate();
  return (
    <Container>
      <Flex
        vertical
        style={{ width: '100%', height: '100%' }}
        justify={'center'}
        align={'center'}
      >
        <NotFoundImages src={NotFoundImage} alt='NotFoundImage' />
        <h1>Page Not Found</h1>
        <h3>We're soory, the page you requested could not be found.</h3>

        <Button
          style={{
            backgroundColor: '#7466f1',
            color: '#ffffff',
            marginTop: '1rem',
            marginBottom: '1rem',
            border: 0,
          }}
          onClick={() => navigate(-1)}
        >
          Go back
        </Button>
      </Flex>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default NotFoundPage;
