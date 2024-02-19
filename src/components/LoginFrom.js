import React from 'react';
import { Form, Input, Button, Switch, Flex } from 'antd';
import { LoginOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { changeMode } from '../store/modules/common';

const LoginFrom = () => {
  const isThemeMode = useSelector(({ common }) => common.isThemeMode);
  const dispatch = useDispatch();

  const onSwitchChangeMode = (checked) => {
    dispatch(changeMode());
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const StyledInputHader = styled.div`
    color: #adb0cb;
  `;

  const StyledLink = styled.div`
    color: #7466f1;
  `;

  const StyledLinkRightMargin = styled.div`
    margin-right: 1rem;
  `;

  return (
    <div>
      <h2>Welcome to Schedule Management! 👋🏻</h2>
      <h4>Please sign-in to your account and start the schedule management</h4>
      <Form
        name='basic'
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <StyledInputHader>Emial</StyledInputHader>
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

        <StyledInputHader>Password</StyledInputHader>
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
          <Switch
            checkedChildren={<SunOutlined />}
            unCheckedChildren={<MoonOutlined />}
            checked={isThemeMode}
            onChange={onSwitchChangeMode}
            style={{ backgroundColor: isThemeMode ? '#7466f1' : '#25293d' }}
          />
          <Link to='/main'>
            <StyledLink>Forgot Password?</StyledLink>
          </Link>
        </Flex>

        <Form.Item>
          <Button
            htmlType='submit'
            icon={<LoginOutlined></LoginOutlined>}
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
        <StyledLinkRightMargin>New on our platform?</StyledLinkRightMargin>
        <Link to='/main'>
          <StyledLink>Create an account</StyledLink>
        </Link>
      </Flex>
    </div>
  );
};

export default LoginFrom;
