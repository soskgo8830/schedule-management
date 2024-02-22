import React from 'react';
import { Form, Input, Button, Flex } from 'antd';
import { Link } from 'react-router-dom';
import LogoImage from '../images/logo.png';
import ModeChangeSwitch from './ModeChageSwitch';

const SignUpFrom = () => {
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

      <h2>Do you want to sign up for membership? 🚀</h2>
      <h4>Start managing your schedule easily and with fun</h4>
      <Form
        name='basic'
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <div className='form-input-header'>Name</div>
        <Form.Item
          name='name'
          rules={[
            {
              required: true,
              message: 'Please enter your username.',
            },
          ]}
        >
          <Input />
        </Form.Item>

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

        <div className='form-input-header'>Password Check</div>
        <Form.Item
          name='passwordCheck'
          rules={[
            {
              required: true,
              message: 'Please enter a password again.',
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
            Sign up
          </Button>
        </Form.Item>
      </Form>

      <Flex justify={'center'}>
        <div className='margin-right-sm'>Already have an account?</div>
        <Link to='/'>
          <div className='link'>Sign in instead</div>
        </Link>
      </Flex>
    </div>
  );
};

export default SignUpFrom;
