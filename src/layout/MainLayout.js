import React, { useState } from 'react';
import HeaderLayout from './HeaderLayout';
import SidebarLayout from './SidebarLayout';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const collapsedHandle = () => {
    setCollapsed(() => !collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Sider width={200} collapsed={collapsed}>
          <SidebarLayout></SidebarLayout>
        </Sider>
        <Content style={{ padding: '1.5rem' }}>
          <Header
            style={{
              padding: 0,
              borderRadius: '5px',
              backgroundColor: 'white',
              'box-shadow':
                'rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px',
              marginBottom: '1rem',
            }}
          >
            <HeaderLayout
              collapsed={collapsed}
              collapsedHandle={collapsedHandle}
            />
          </Header>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
