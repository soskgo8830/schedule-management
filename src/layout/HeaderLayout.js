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
    <Flex justify={'space-between'} align={'center'}>
      <Button
        type='text'
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={collapsedHandle}
        style={{
          color: 'white',
        }}
      />
      <Flex justify={'center'} align={'center'} className='maring-sm'>
        <ModeChangeSwitch />
        <Button
          type='text'
          icon={<BellOutlined />}
          className='maring-sm'
          style={{
            color: 'white',
            backgroundColor: '#25293d',
          }}
        />
        <Badge dot>
          <Avatar shape='square' icon={<UserOutlined />} />
        </Badge>
      </Flex>
    </Flex>
  );
};

export default HeaderLayout;
