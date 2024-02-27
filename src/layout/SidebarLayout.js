import React from 'react';
import LogoImage from '../images/logo.png';
import { Menu, Button, Flex } from 'antd';
import {
  CalendarOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  FileAddOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;

const SidebarLayout = () => {
  const addMemo = async () => {
    console.log('addMemo');
  };

  return (
    <Menu
      defaultSelectedKeys={['1']}
      style={{
        height: '100%',
        borderRight: 0,
      }}
    >
      <img
        src={LogoImage}
        alt='loginImg'
        style={{
          width: '80%',
          margin: '10%',
          borderRadius: '5px',
          backgroundColor: '#2f3249',
        }}
      />
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

        <Flex justify={'center'} align={'center'}>
          <Button
            block
            type='text'
            icon={<FileAddOutlined />}
            style={{
              color: '#2f3249',
              border: '1px solid #2f3249',
              margin: '5px',
            }}
            onClick={addMemo}
          >
            Add Memo
          </Button>
        </Flex>
      </SubMenu>
    </Menu>
  );
};

export default SidebarLayout;
