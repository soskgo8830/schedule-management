import React, { useState, useEffect } from 'react';
import MemoTitle from '../components/memo/MemoTitle';
import MemoMain from '../components/memo/MemoMain';
import { get } from '../api';
import { useParams } from 'react-router';

const NotionPage = () => {
  const [memoData, setMemoData] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getMemoData(params.id);
    }
  }, [params]);

  const getMemoData = async (id) => {
    try {
      const response = await get(`memos/${id}`);
      setMemoData(response);
    } catch (error) {
      console.error('데이터 가져오는 중 오류 발생:', error);
    }
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
      <MemoTitle memoData={memoData}></MemoTitle>
      <MemoMain />;
    </div>
  );
};

export default NotionPage;
