import React from 'react';
import LogoImage from '../images/logo.png';
import { Menu } from 'antd';
import {
  CalendarOutlined,
  DashboardOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;

const SidebarLayout = () => {
  return (
    <Menu
      defaultSelectedKeys={['1']}
      theme='dark'
      style={{
        height: '100%',
        borderRight: 0,
        backgroundColor: '#2f3249',
        color: 'white',
      }}
    >
      <img
        src={LogoImage}
        alt='loginImg'
        style={{
          width: '80%',
          backgroundColor: '#2f3249',
          margin: '10%',
          borderRadius: '5px',
        }}
      />
      <Menu.Item key='1' icon={<CalendarOutlined />}>
        Calender
      </Menu.Item>

      <Menu.Item key='2' icon={<DashboardOutlined />}>
        Dashboards
      </Menu.Item>

      <SubMenu
        key='sub1'
        icon={<DatabaseOutlined />}
        title='Memo'
        style={{ backgroundColor: '#2f3249' }}
      >
        <Menu.Item key='3'>memo1</Menu.Item>
        <Menu.Item key='4'>memo2</Menu.Item>
        <Menu.Item key='5'>memo3</Menu.Item>
        <Menu.Item key='6'>memo4</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default SidebarLayout;
