import React, { useState, useEffect } from 'react';
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
      console.log(memoData);
    } catch (error) {
      console.error('데이터 가져오는 중 오류 발생:', error);
    }
  };

  return <MemoMain memoData={memoData} />;
};

export default NotionPage;
