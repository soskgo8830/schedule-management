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
    <>
      <img
        src={LogoImage}
        alt='loginImg'
        style={{
          width: '100%',
          backgroundColor: '#2f3249',
        }}
      />
      <Menu
        mode='inline'
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key='1' icon={<CalendarOutlined />}>
          Calender
        </Menu.Item>
        <Menu.Item key='2' icon={<DashboardOutlined />}>
          Dashboards
        </Menu.Item>
        <SubMenu key='sub1' icon={<DatabaseOutlined />} title='Memo'>
          <Menu.Item key='3'>memo1</Menu.Item>
          <Menu.Item key='4'>memo2</Menu.Item>
          <Menu.Item key='5'>memo3</Menu.Item>
          <Menu.Item key='6'>memo4</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default SidebarLayout;
