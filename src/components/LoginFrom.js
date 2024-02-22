import React from 'react';
import { Form, Input, Button, Flex } from 'antd';
import { Link } from 'react-router-dom';
import LogoImage from '../images/logo.png';
import ModeChangeSwitch from './ModeChageSwitch';

const LoginFrom = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <img
        src={LogoImage}
        alt='loginImg'
        style={{
          width: '50%',
          borderRadius: '5px',
          backgroundColor: '#2f3249',
        }}
      />

      <h2>Welcome to Schedule Management! 👋🏻</h2>
      <h4>Please sign-in to your account and start the schedule management</h4>
      <Form
        name='basic'
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <div className='form-input-header'>Email</div>
        <Form.Item
          name='email'
          rules={[
            {
              required: true,
              message: 'Please enter your e-mail.',
            },
            {
              type: 'email',
              message: 'Please enter a valid email address.',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <div className='form-input-header'>Password</div>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please enter a password.',
            },
            {
              min: 6,
              message: 'Password must be at least 6 characters long.',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Flex justify={'space-between'}>
          <ModeChangeSwitch></ModeChangeSwitch>
          <Link to='/forgot-password'>
            <div className='link'>Forgot Password?</div>
          </Link>
        </Flex>

        <Form.Item>
          <Button
            htmlType='submit'
            block
            style={{
              backgroundColor: '#7466f1',
              color: '#ffffff',
              marginTop: '1rem',
              marginBottom: '1rem',
              border: 0,
            }}
          >
            Login
          </Button>
        </Form.Item>
      </Form>

      <Flex justify={'center'}>
        <div className='margin-right-sm'>New on our platform?</div>
        <Link to='/sign-up'>
          <div className='link'>Create an account</div>
        </Link>
      </Flex>
    </div>
  );
};

export default LoginFrom;
