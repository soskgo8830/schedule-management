import React, { useState, useEffect, useCallback } from 'react';
import MemoTitle from '../components/memo/MemoTitle';
import MemoMain from '../components/memo/MemoMain';
import AddDetailMemoModal from '../components/memo/AddDetailMemoModal';
import AlertModal from '../components/common/AlertModal';
import { get, post } from '../api';
import { useParams } from 'react-router';

const NotionPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [memoData, setMemoData] = useState([]);
  const [memoDetailData, setMemoDetailData] = useState([]);
  const [filteredMemoDetailData, setFilteredMemoDetailData] = useState([]);
  const [memoId, setMemoId] = useState('');
  const [modalVisible, setModalVisible] = useState(false); // alert open 여부
  const [alertType, setAlertType] = useState('error'); // alert 타입
  const [alertMessage, setAlertMessage] = useState(''); // alert 메시지
  const [searchTitle, setSearchTitle] = useState('');

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      setMemoId(params.id);
      getMemoData(params.id);
      getDetailMemoData();
    }
  }, [params]);

  useEffect(() => {
    const filterMemoDetailData = memoDetailData.filter((obj) => {
      return obj.title.includes(searchTitle);
    });

    setFilteredMemoDetailData(filterMemoDetailData);
  }, [memoDetailData, searchTitle]);

  const getMemoData = async (id) => {
    try {
      const response = await get(`memos/${id}`);
      setMemoData(response);
    } catch (error) {
      console.error('데이터 가져오는 중 오류 발생:', error);
    }
  };

  const getDetailMemoData = async () => {
    try {
      const response = await get('memoDetails');
      setMemoDetailData(response);
      setFilteredMemoDetailData(response);
    } catch (error) {
      console.error('데이터 가져오는 중 오류 발생:', error);
    }
  };

  const handleAddDetailMemoFinish = useCallback(async (addMemoDetailData) => {
    try {
      await post('memoDetails', addMemoDetailData);
      setIsAddModalOpen(false);
      showAlert('success', 'New memo registration has been successful.');
      getDetailMemoData();
    } catch (error) {
      showAlert('error', 'An error occurred during memo registration.');
    }
  }, []);

  const openModal = useCallback((status) => {
    if (status === 'add') {
      setIsAddModalOpen(true);
    } else if (status === 'edit') {
    }
  }, []);

  const showAlert = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '85vh',
        backgroundColor: 'white',
        borderRadius: '5px',
        boxShadow:
          'rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px',
      }}
    >
      <MemoTitle
        memoData={memoData}
        onAddMemoButtonClick={openModal}
        setSearchTitle={setSearchTitle}
      ></MemoTitle>
      <MemoMain memoDetailData={filteredMemoDetailData}></MemoMain>
      <AddDetailMemoModal
        isModalOpen={isAddModalOpen}
        memoId={memoId}
        setIsModalOpen={setIsAddModalOpen}
        handleAddDetailMemoFinish={handleAddDetailMemoFinish}
      ></AddDetailMemoModal>
      <AlertModal
        visible={modalVisible}
        type={alertType}
        message={alertMessage}
        onClose={handleClose}
      />
    </div>
  );
};

export default NotionPage;
