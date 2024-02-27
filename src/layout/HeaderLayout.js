import React from 'react';

import { Button, Flex, Avatar, Badge } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  BellOutlined,
} from '@ant-design/icons';
import ModeChangeSwitch from '../components/ModeChageSwitch';

const HeaderLayout = ({ collapsed, collapsedHandle }) => {
  return (
    <Flex justify={'space-between'} align={'center'} className='padding-sm'>
      <Button
        type='text'
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={collapsedHandle}
        style={{
          color: 'white',
          backgroundColor: '#2f3249',
        }}
      />
      <Flex justify={'center'} align={'center'}>
        <ModeChangeSwitch />
        <Button
          type='text'
          icon={<BellOutlined />}
          className='maring-sm'
          style={{
            color: 'white',
            backgroundColor: '#2f3249',
          }}
        />
        <Badge dot>
          <Avatar
            style={{ backgroundColor: '#2f3249' }}
            shape='square'
            icon={<UserOutlined />}
          />
        </Badge>
      </Flex>
    </Flex>
  );
};

export default HeaderLayout;
