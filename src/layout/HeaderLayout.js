import React from 'react';

import { Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const HeaderLayout = ({ collapsed, collapsedHandle }) => {
  return (
    <>
      <Button
        type='text'
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={collapsedHandle}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
          color: 'white',
        }}
      />
    </>
  );
};

export default HeaderLayout;
