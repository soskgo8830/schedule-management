import React, { useState, useEffect } from 'react';
import LogoImage from '../images/logo.png';
import { Menu, Button, Flex } from 'antd';
import {
  CalendarOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  FileAddOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import AddMemoModal from '../components/memo/AddMemoModal';
import { get, post } from '../api/index';
import AlertModal from '../components/common/AlertModal';

const { SubMenu } = Menu;

const SidebarLayout = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memoList, setMemoList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); // alert open 여부
  const [alertType, setAlertType] = useState('error'); // alert 타입
  const [alertMessage, setAlertMessage] = useState(''); // alert 메시지

  useEffect(() => {
    const storedMenu = localStorage.getItem('selectedMenu');
    if (storedMenu) {
      setSelectedMenu(storedMenu);
    }
  }, []);

  useEffect(() => {
    getMemoList();
  }, []);

  const addMemo = async () => {
    setIsModalOpen(true);
  };

  const handleMenuClick = (e) => {
    setSelectedMenu(e.key);
    localStorage.setItem('selectedMenu', e.key); // 선택된 메뉴를 로컬 스토리지에 저장
    if (e.key === 'calendar' || e.key === 'dashboards') {
      navigate(`/${e.key}`);
    } else {
      navigate(`/memo/${e.key}`);
    }
  };

  const getMemoList = async () => {
    try {
      const response = await get(`memos`);
      setMemoList(response);
    } catch (error) {
      console.error('데이터 가져오는 중 오류 발생:', error);
    }
  };

  const handleAddMemoFinish = async (addMemosData) => {
    try {
      await post('memos', addMemosData);
      setIsModalOpen(false);
      showAlert('success', 'Memo registration was successful.');
      getMemoList();
    } catch (error) {
      showAlert('error', 'An error occurred while registering a note.');
    }
  };

  const showAlert = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <Menu
      defaultSelectedKeys={['1']}
      selectedKeys={[selectedMenu]}
      style={{
        height: '100%',
        borderRight: 0,
      }}
      onClick={handleMenuClick}
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
      <Menu.Item key='calendar' icon={<CalendarOutlined />}>
        Calendar
      </Menu.Item>

      <Menu.Item key='dashboards' icon={<DashboardOutlined />}>
        Dashboards
      </Menu.Item>

      <SubMenu icon={<DatabaseOutlined />} title='Memo'>
        {memoList.map((list) => (
          <Menu.Item key={list.id}>{list.title}</Menu.Item>
        ))}

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
      <AddMemoModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleAddMemoFinish={handleAddMemoFinish}
      ></AddMemoModal>
      <AlertModal
        visible={modalVisible}
        type={alertType}
        message={alertMessage}
        onClose={handleClose}
      />
    </Menu>
  );
};

export default SidebarLayout;
