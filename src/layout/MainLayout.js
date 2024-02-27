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
    <>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Layout>
          <Sider width={200} collapsed={collapsed}>
            <SidebarLayout></SidebarLayout>
          </Sider>

          <Content>
            <Header
              style={{
                padding: 0,
                background: '#25293b',
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
    </>
  );
};

export default MainLayout;
