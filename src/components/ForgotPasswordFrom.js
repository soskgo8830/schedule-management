import React from 'react';
import { Form, Input, Button, Flex } from 'antd';
import { Link } from 'react-router-dom';
import LogoImage from '../images/logo.png';
import ModeChangeSwitch from './ModeChageSwitch';

const ForgotPasswordFrom = () => {
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

      <h2>Forgot Password? 🔒</h2>
      <h4>Enter your email and we will give you your password.</h4>
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
            Find password
          </Button>
        </Form.Item>
      </Form>

      <Flex justify={'center'}>
        <Link to='/'>
          <div className='link'>Back to login</div>
        </Link>
      </Flex>
    </div>
  );
};

export default ForgotPasswordFrom;
